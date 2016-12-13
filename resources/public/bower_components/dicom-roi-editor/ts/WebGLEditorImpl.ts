/*
 *    Copyright (c) Dilvan A. Moreira 2015. All rights reserved.
 *    This file is part of ePad.
 *
 *     ePad is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License.
 *
 *     ePad is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with ePad.  If not, see <http://www.gnu.org/licenses/>.
 */

///<reference path='./WebGLEditor.ts'/>
///<reference path='./WebGLViewerImpl.ts'/>

module br.usp.dilvanLab.roi3DEditor {

    class Sphere {
        x:number = 0;
        y:number = 0;
        radius:number = 0;
        plane:Plane;

        get visible() {
            return !(this.radius === 0 || this.x < 0 ||
            this.x > 1.0 || this.y < 0 || this.y > 1.0);
        }
    }

    export class WebGLEditorImpl extends WebGLViewerImpl implements WebGLEditor {

        private cursor = new Sphere();
        private stampShader:WebGLProgram;
        private moveShader:WebGLProgram;

        private cmdBuffer = new Array<Point>(); 

        public constructor(canvas:HTMLCanvasElement, mode:number, pref:Preferences, series:DicomSeriesInfo) {
            super(canvas, mode, pref, series);
            this.stampShader = WebGLViewerImpl.createProgram(this.gl, shaders.simpleVs, shaders.stampFs);

            this.moveShader = WebGLViewerImpl.createProgram(this.gl, shaders.simpleVs, shaders.moveFs);
        }

        private createSpheresTexture(size:number, array:number[]) {
            const gl = this.gl;

            const framebuffer = gl.createFramebuffer();
            const texture = gl.createTexture();

            gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
            gl.bindTexture(gl.TEXTURE_2D, texture);

            //		gl.activeTexture(gl.TEXTURE2);
            //gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, size, size, 0, gl.RGBA, gl.FLOAT, new Float32Array(array));

            gl.deleteFramebuffer(framebuffer);

            return texture;
        }

        //@Override
        protected genPlane(plane:Plane) {
            super.genPlane(plane);

            if (!plane.dsoChanged) return;

            const gl = this.gl;

            const text = new ImgSimpleTexture(gl, this.imgWidth, this.imgHeight,
                [gl.TEXTURE_MAG_FILTER, gl.NEAREST,
                 gl.TEXTURE_MIN_FILTER, gl.NEAREST]);

            if (plane === this.axial)
                this.genAxial(text, 1);
            else
                this.genPlane1(plane, text, 1);

            // Clean up resources
            gl.deleteTexture(plane.imgTexture.dso);
            plane.imgTexture.dso = text.texture;
            text.texture = null;
            gl.deleteFramebuffer(text.framebuffer);

            plane.dsoChanged = false;
        }

        //@Override
        get cursorRadius() {return this.cursor.radius}

        private isInRange(x:number) {return x >= 0 && x <= 1}

        //@Override
        showSphere() {

            // if (!this.isInRange(this.cursor.x) || !this.isInRange(this.cursor.y) || !this.isInRange(this.cursor.radius))
            //     return;

            const gl = this.gl;
            gl.useProgram(this.moveShader);

            const dz = this.sliceSpacing / (this.imgWidth * this.pixelSpacing);
            GL.setF(gl, this.moveShader, "dz", dz);
            GL.setF(gl, this.moveShader, "sphereRadius", this.cursor.radius);

            // Add command to be executed by stampSphere
            const pt = this.xyzCoord(this.cursor);
            if (this.cmdBuffer.indexOf(pt) === -1)
                this.cmdBuffer.push(this.xyzCoord(this.cursor));

            GL.setF(gl, this.moveShader, "sphereY", this.cursor.y);
            if (this.cursor.plane === this.axial) {
                GL.setF(gl, this.moveShader, "sphereX", this.cursor.x);
                GL.setF(gl, this.moveShader, "dy", 1);
            } else {
                GL.setF(gl, this.moveShader, "sphereX", this.xCoord(this.cursor.x));
                GL.setF(gl, this.moveShader, "dy", this.numImgs * dz);
            }

            // look up where the vertex data needs to go.
            this.createUntBuf(this.moveShader, "a_position", -1.0, -1.0, 1.0, 1.0);
            this.createUntBuf(this.moveShader, "a_texCoord", 0.0, 0.0, 1.0, 1.0);

            GL.setI(gl, this.moveShader, "imagesPerAxis", IMAGES_PER_AXIS);

            // Each image comes with a set of slices that begin with
            // the last slice of the last image and ends with the first slice of the
            // next one
            //		for (int i = a; i < b; i++) {
            const text = new ImgSimpleTexture(gl, this.imgWidth, this.imgHeight,
                [gl.TEXTURE_MAG_FILTER, gl.NEAREST,
                 gl.TEXTURE_MIN_FILTER, gl.NEAREST]);

            gl.bindFramebuffer(gl.FRAMEBUFFER, text.framebuffer);//texture.get(i).framebuffer);
            gl.viewport(0, 0, this.imgWidth, this.imgHeight);
            //gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, this.cursor.plane.imgTexture.dso);
            GL.setI(gl, this.moveShader, "uDSO", 1);

            //			moveShader.set("baseInd", i*(IMAGES_PER_TEXTURE-1));

            gl.drawArrays(gl.TRIANGLES, 0, 6);

            gl.bindTexture(gl.TEXTURE_2D, text.texture);
            gl.generateMipmap(gl.TEXTURE_2D);

            gl.bindTexture(gl.TEXTURE_2D, null);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);

            //		gl.deleteTexture(cursor.plane.imgTexture.dso);
            this.cursor.plane.imgTexture.dso = text.texture;//texture.get(i).texture;
            text.texture = null;
            gl.deleteFramebuffer(text.framebuffer);
            //		}
            //gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        }

        /**
         * Set cursor center
         * @param plane
         * @param x
         * @param y
         */
        //@Override
        setCursorCenter(plane:number, x:number, y:number) {

            const pt = this.toUnits(plane, x, y);

            this.cursor.x = pt.x;
            this.cursor.y = pt.y;
            this.cursor.plane = this.planes[plane];
        }

        delete() {
            super.delete();
        }

        /**
         * Set cursor radius
         * @param radius
         */
        //@Override
        set cursorRadius(radius:number) {this.cursor.radius = radius}

        //@Override
        protected showPlane(plane:Plane, scale:number, trans:number[], ...fcts:Array<()=>void>) {

            const gl = this.gl;
            // Copy Runnables already there, if any
            let fcts2 = new Array(fcts.length + 4);
            fcts2[0] = plane;
            fcts2[1] = scale;
            fcts2[2] = trans;
            for (let i = 3; i < fcts.length-1; i++)
                fcts2[i] = fcts[i];

            //let that = this;
            // Add the Runnable to show the sphere
            fcts2[fcts.length+3] = ()=>{
                //TODO: plane not being updated to the current one when there is only one
                //if (!this.cursor) return;
                if ((this._activePlane || this.cursor.plane === plane) && this.cursor.visible) {
                    GL.setF(gl, this.simpleShader, "sphereX", this.cursor.x);
                    GL.setF(gl, this.simpleShader, "sphereY", this.cursor.y);
                    GL.setF(gl, this.simpleShader, "sphereRadius", this.cursor.radius);
                } else {
                    GL.setF(gl, this.simpleShader, "sphereX", 0);
                    GL.setF(gl, this.simpleShader, "sphereY", 0);
                    GL.setF(gl, this.simpleShader, "sphereRadius", 0);
                }
            };
            super.showPlane.apply(this, fcts2);
        }

        //@Override
        stampSphere() {

            if (!this.isInRange(this.cursor.x) || !this.isInRange(this.cursor.y) || !this.isInRange(this.cursor.radius))
                return;

            const gl = this.gl;
            gl.useProgram(this.stampShader);

            const dz = this.sliceSpacing / (this.imgWidth * this.pixelSpacing);
            GL.setF(gl, this.stampShader, "dz", dz);
            GL.setF(gl, this.stampShader, "sphereRadius", this.cursor.radius);

            let maxZ = -Number.MAX_VALUE;
            let minZ = Number.MAX_VALUE;

            let size:number;
            for (size = 2; size * size < this.cmdBuffer.length; size *= 2);

            const spheres = new Array<number>(size * size * 4);
            for (let i = 0; i < this.cmdBuffer.length; i++) {
                let j = i * 4;
                spheres[j] = this.cmdBuffer[i].x;
                spheres[j + 1] = this.cmdBuffer[i].y;
                spheres[j + 2] = this.cmdBuffer[i].z;
                spheres[j + 3] = this.cursor.radius;
                maxZ = (spheres[j + 2] > maxZ) ? spheres[j + 2] : maxZ;
                minZ = (spheres[j + 2] < minZ) ? spheres[j + 2] : minZ;
            }
            GL.setF(gl, this.stampShader, "cmdSize", this.cmdBuffer.length);

            const sphereTex = this.createSpheresTexture(size, spheres);

            //writeToTexture(sphereTex, size,  spheres);
            GL.setF(gl, this.stampShader, "maxX", size - 1);

            this.cmdBuffer.length=0;

            //let a1 = ((int) Math.floor((minZ-cursor.radius)/dz))/(IMAGES_PER_TEXTURE-1);
            //let b2 = (int) Math.ceil(Math.ceil((maxZ+cursor.radius)/dz)/(IMAGES_PER_TEXTURE-1));

            let a = Math.floor(Math.floor((minZ - this.cursor.radius) / dz) / (IMAGES_PER_TEXTURE - 1));
            let b = Math.ceil( Math.ceil( (maxZ + this.cursor.radius) / dz) / (IMAGES_PER_TEXTURE - 1));
            a = a < 0 ? 0 : a;
            b = b > this.texture.length ? this.texture.length : b;

            // look up where the vertex data needs to go.
            this.createUntBuf(this.stampShader, "a_position", -1.0, -1.0, 1.0, 1.0);
            this.createUntBuf(this.stampShader, "a_texCoord", 0.0, 0.0, 1.0, 1.0);

            GL.setI(gl, this.stampShader, "imagesPerAxis", IMAGES_PER_AXIS);

            // Each image comes with a set of slices that begin with
            // the last slice of the last image and ends with the first slice of the
            // next one
            for (let i = a; i < b; i++) {
                const text = new ImgSimpleTexture(gl, this.imgWidth * IMAGES_PER_AXIS, this.imgHeight * IMAGES_PER_AXIS,
                    [gl.TEXTURE_MAG_FILTER, gl.NEAREST,
                     gl.TEXTURE_MIN_FILTER, gl.NEAREST]);

                gl.bindFramebuffer(gl.FRAMEBUFFER, text.framebuffer);//texture.get(i).framebuffer);
                gl.viewport(0, 0, this.texture[i].width, this.texture[i].height);
                //gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

                gl.activeTexture(gl.TEXTURE2);
                gl.bindTexture(gl.TEXTURE_2D, sphereTex);
                GL.setI(gl, this.stampShader, "spheres", 2);

                gl.activeTexture(gl.TEXTURE1);
                gl.bindTexture(gl.TEXTURE_2D, this.texture[i].dso);
                GL.setI(gl, this.stampShader, "uDSO", 1);

                GL.setI(gl, this.stampShader, "baseInd", i * (IMAGES_PER_TEXTURE - 1));

                gl.drawArrays(gl.TRIANGLES, 0, 6);

                console.log("Triangle ...");

                gl.bindTexture(gl.TEXTURE_2D, text.texture);
                gl.generateMipmap(gl.TEXTURE_2D);

                gl.bindTexture(gl.TEXTURE_2D, null);
                gl.bindFramebuffer(gl.FRAMEBUFFER, null);

                gl.deleteTexture(this.texture[i].dso);
                this.texture[i].dso = text.texture;
                text.texture = null;
                gl.deleteFramebuffer(text.framebuffer);
            }
            // Cleanup
            gl.deleteTexture(sphereTex);

            //Necessary for rendering the ROI every time.
            this.planes[AXIAL].dsoChanged = true;
            this.planes[FRONTAL].dsoChanged = true;
            this.planes[SAGITTAL].dsoChanged = true;
        }

        /**
         * Convert the sphere cursor x,y coordinates into x,y and z
         * coordinates. It takes into consideration the plane where the
         * cursor is.
         * @param cursor
         * @return the xyz coordinates
         */
        //@Override
        xyzCoord(cursor:Sphere) {
            const x1 = cursor.x; const y1= cursor.y; const plane= cursor.plane;
            const dz = this.sliceSpacing / (this.imgWidth * this.pixelSpacing);
            let x:number, y:number, z:number;
            if (plane === this.axial) {
                x = x1;
                y = y1;
                z = Math.round(this.axial.imgCoord * this.numImgs) * dz;
            } else if (plane === this.sagittal) {
                x = this.sagittal.imgCoord;
                y = (1.0 - x1 - 0.5) * this.numImgs * dz + 0.5;
                z = (1 - y1) * this.numImgs * dz;
            } else if (plane === this.frontal) {
                x = (x1 - 0.5) * this.numImgs * dz + 0.5;
                y = this.frontal.imgCoord;
                z = (1 - y1) * this.numImgs * dz;
            } else
                throw new Error("Unknown plane for sphere criation.");
            return new Point(x, y, z);
        }
    }
}

