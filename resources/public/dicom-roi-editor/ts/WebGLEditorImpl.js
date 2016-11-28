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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path='./WebGLEditor.ts'/>
///<reference path='./WebGLViewerImpl.ts'/>
var br;
(function (br) {
    var usp;
    (function (usp) {
        var dilvanLab;
        (function (dilvanLab) {
            var roi3DEditor;
            (function (roi3DEditor) {
                var Sphere = (function () {
                    function Sphere() {
                        this.x = 0;
                        this.y = 0;
                        this.radius = 0;
                    }
                    Object.defineProperty(Sphere.prototype, "visible", {
                        get: function () {
                            return !(this.radius === 0 || this.x < 0 ||
                                this.x > 1.0 || this.y < 0 || this.y > 1.0);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return Sphere;
                }());
                var WebGLEditorImpl = (function (_super) {
                    __extends(WebGLEditorImpl, _super);
                    function WebGLEditorImpl(canvas, mode, pref, series) {
                        _super.call(this, canvas, mode, pref, series);
                        this.cursor = new Sphere();
                        this.cmdBuffer = new Array();
                        this.stampShader = roi3DEditor.WebGLViewerImpl.createProgram(this.gl, roi3DEditor.shaders.simpleVs, roi3DEditor.shaders.stampFs);
                        this.moveShader = roi3DEditor.WebGLViewerImpl.createProgram(this.gl, roi3DEditor.shaders.simpleVs, roi3DEditor.shaders.moveFs);
                    }
                    WebGLEditorImpl.prototype.createSpheresTexture = function (size, array) {
                        var gl = this.gl;
                        var framebuffer = gl.createFramebuffer();
                        var texture = gl.createTexture();
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
                    };
                    //@Override
                    WebGLEditorImpl.prototype.genPlane = function (plane) {
                        _super.prototype.genPlane.call(this, plane);
                        if (!plane.dsoChanged)
                            return;
                        var gl = this.gl;
                        var text = new roi3DEditor.ImgSimpleTexture(gl, this.imgWidth, this.imgHeight, [gl.TEXTURE_MAG_FILTER, gl.NEAREST,
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
                    };
                    Object.defineProperty(WebGLEditorImpl.prototype, "cursorRadius", {
                        //@Override
                        get: function () { return this.cursor.radius; },
                        /**
                         * Set cursor radius
                         * @param radius
                         */
                        //@Override
                        set: function (radius) { this.cursor.radius = radius; },
                        enumerable: true,
                        configurable: true
                    });
                    WebGLEditorImpl.prototype.isInRange = function (x) { return x >= 0 && x <= 1; };
                    //@Override
                    WebGLEditorImpl.prototype.showSphere = function () {
                        if (!this.isInRange(this.cursor.x) || !this.isInRange(this.cursor.y) || !this.isInRange(this.cursor.radius))
                            return;
                        var gl = this.gl;
                        gl.useProgram(this.moveShader);
                        var dz = this.sliceSpacing / (this.imgWidth * this.pixelSpacing);
                        roi3DEditor.GL.setF(gl, this.moveShader, "dz", dz);
                        roi3DEditor.GL.setF(gl, this.moveShader, "sphereRadius", this.cursor.radius);
                        // Add command to be executed by stampSphere
                        var pt = this.xyzCoord(this.cursor);
                        if (this.cmdBuffer.indexOf(pt) === -1)
                            this.cmdBuffer.push(this.xyzCoord(this.cursor));
                        roi3DEditor.GL.setF(gl, this.moveShader, "sphereY", this.cursor.y);
                        if (this.cursor.plane === this.axial) {
                            roi3DEditor.GL.setF(gl, this.moveShader, "sphereX", this.cursor.x);
                            roi3DEditor.GL.setF(gl, this.moveShader, "dy", 1);
                        }
                        else {
                            roi3DEditor.GL.setF(gl, this.moveShader, "sphereX", this.xCoord(this.cursor.x));
                            roi3DEditor.GL.setF(gl, this.moveShader, "dy", this.numImgs * dz);
                        }
                        // look up where the vertex data needs to go.
                        this.createUntBuf(this.moveShader, "a_position", -1.0, -1.0, 1.0, 1.0);
                        this.createUntBuf(this.moveShader, "a_texCoord", 0.0, 0.0, 1.0, 1.0);
                        roi3DEditor.GL.setI(gl, this.moveShader, "imagesPerAxis", roi3DEditor.IMAGES_PER_AXIS);
                        // Each image comes with a set of slices that begin with
                        // the last slice of the last image and ends with the first slice of the
                        // next one
                        //		for (int i = a; i < b; i++) {
                        var text = new roi3DEditor.ImgSimpleTexture(gl, this.imgWidth, this.imgHeight, [gl.TEXTURE_MAG_FILTER, gl.NEAREST,
                            gl.TEXTURE_MIN_FILTER, gl.NEAREST]);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, text.framebuffer); //texture.get(i).framebuffer);
                        gl.viewport(0, 0, this.imgWidth, this.imgHeight);
                        //gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                        gl.activeTexture(gl.TEXTURE1);
                        gl.bindTexture(gl.TEXTURE_2D, this.cursor.plane.imgTexture.dso);
                        roi3DEditor.GL.setI(gl, this.moveShader, "uDSO", 1);
                        //			moveShader.set("baseInd", i*(IMAGES_PER_TEXTURE-1));
                        gl.drawArrays(gl.TRIANGLES, 0, 6);
                        gl.bindTexture(gl.TEXTURE_2D, text.texture);
                        gl.generateMipmap(gl.TEXTURE_2D);
                        gl.bindTexture(gl.TEXTURE_2D, null);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                        //		gl.deleteTexture(cursor.plane.imgTexture.dso);
                        this.cursor.plane.imgTexture.dso = text.texture; //texture.get(i).texture;
                        text.texture = null;
                        gl.deleteFramebuffer(text.framebuffer);
                        //		}
                        //gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                    };
                    /**
                     * Set cursor center
                     * @param plane
                     * @param x
                     * @param y
                     */
                    //@Override
                    WebGLEditorImpl.prototype.setCursorCenter = function (plane, x, y) {
                        var pt = this.toUnits(plane, x, y);
                        this.cursor.x = pt.x;
                        this.cursor.y = pt.y;
                        this.cursor.plane = this.planes[plane];
                    };
                    WebGLEditorImpl.prototype.delete = function () {
                        _super.prototype.delete.call(this);
                    };
                    //@Override
                    WebGLEditorImpl.prototype.showPlane = function (plane, scale, trans) {
                        var _this = this;
                        var fcts = [];
                        for (var _i = 3; _i < arguments.length; _i++) {
                            fcts[_i - 3] = arguments[_i];
                        }
                        var gl = this.gl;
                        // Copy Runnables already there, if any
                        var fcts2 = new Array(fcts.length + 1);
                        for (var i = 0; i < fcts.length; i++)
                            fcts2[i] = fcts[i];
                        // Add the Runnable to show the sphere
                        fcts2[fcts.length] = function () {
                            //TODO: plane not being updated to the current one when there is only one
                            if ((_this._activePlane || _this.cursor.plane === plane) && _this.cursor.visible) {
                                roi3DEditor.GL.setF(gl, _this.simpleShader, "sphereX", _this.cursor.x);
                                roi3DEditor.GL.setF(gl, _this.simpleShader, "sphereY", _this.cursor.y);
                                roi3DEditor.GL.setF(gl, _this.simpleShader, "sphereRadius", _this.cursor.radius);
                            }
                            else {
                                roi3DEditor.GL.setF(gl, _this.simpleShader, "sphereX", 0);
                                roi3DEditor.GL.setF(gl, _this.simpleShader, "sphereY", 0);
                                roi3DEditor.GL.setF(gl, _this.simpleShader, "sphereRadius", 0);
                            }
                        };
                        _super.prototype.showPlane.call(this, plane, scale, trans, fcts2);
                    };
                    //@Override
                    WebGLEditorImpl.prototype.stampSphere = function () {
                        if (!this.isInRange(this.cursor.x) || !this.isInRange(this.cursor.y) || !this.isInRange(this.cursor.radius))
                            return;
                        var gl = this.gl;
                        gl.useProgram(this.stampShader);
                        var dz = this.sliceSpacing / (this.imgWidth * this.pixelSpacing);
                        roi3DEditor.GL.setF(gl, this.stampShader, "dz", dz);
                        roi3DEditor.GL.setF(gl, this.stampShader, "sphereRadius", this.cursor.radius);
                        var maxZ = -Number.MAX_VALUE;
                        var minZ = Number.MAX_VALUE;
                        var size;
                        for (size = 2; size * size < this.cmdBuffer.length; size *= 2)
                            ;
                        var spheres = new Array(size * size * 4);
                        for (var i = 0; i < this.cmdBuffer.length; i++) {
                            var j = i * 4;
                            spheres[j] = this.cmdBuffer[i].x;
                            spheres[j + 1] = this.cmdBuffer[i].y;
                            spheres[j + 2] = this.cmdBuffer[i].z;
                            spheres[j + 3] = this.cursor.radius;
                            maxZ = (spheres[j + 2] > maxZ) ? spheres[j + 2] : maxZ;
                            minZ = (spheres[j + 2] < minZ) ? spheres[j + 2] : minZ;
                        }
                        roi3DEditor.GL.setF(gl, this.stampShader, "cmdSize", this.cmdBuffer.length);
                        var sphereTex = this.createSpheresTexture(size, spheres);
                        //writeToTexture(sphereTex, size,  spheres);
                        roi3DEditor.GL.setF(gl, this.stampShader, "maxX", size - 1);
                        this.cmdBuffer.length = 0;
                        //let a1 = ((int) Math.floor((minZ-cursor.radius)/dz))/(IMAGES_PER_TEXTURE-1);
                        //let b2 = (int) Math.ceil(Math.ceil((maxZ+cursor.radius)/dz)/(IMAGES_PER_TEXTURE-1));
                        var a = Math.floor(Math.floor((minZ - this.cursor.radius) / dz) / (roi3DEditor.IMAGES_PER_TEXTURE - 1));
                        var b = Math.ceil(Math.ceil((maxZ + this.cursor.radius) / dz) / (roi3DEditor.IMAGES_PER_TEXTURE - 1));
                        a = a < 0 ? 0 : a;
                        b = b > this.texture.length ? this.texture.length : b;
                        // look up where the vertex data needs to go.
                        this.createUntBuf(this.stampShader, "a_position", -1.0, -1.0, 1.0, 1.0);
                        this.createUntBuf(this.stampShader, "a_texCoord", 0.0, 0.0, 1.0, 1.0);
                        roi3DEditor.GL.setI(gl, this.stampShader, "imagesPerAxis", roi3DEditor.IMAGES_PER_AXIS);
                        // Each image comes with a set of slices that begin with
                        // the last slice of the last image and ends with the first slice of the
                        // next one
                        for (var i = a; i < b; i++) {
                            var text = new roi3DEditor.ImgSimpleTexture(gl, this.imgWidth * roi3DEditor.IMAGES_PER_AXIS, this.imgHeight * roi3DEditor.IMAGES_PER_AXIS, [gl.TEXTURE_MAG_FILTER, gl.NEAREST,
                                gl.TEXTURE_MIN_FILTER, gl.NEAREST]);
                            gl.bindFramebuffer(gl.FRAMEBUFFER, text.framebuffer); //texture.get(i).framebuffer);
                            gl.viewport(0, 0, this.texture[i].width, this.texture[i].height);
                            //gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                            gl.activeTexture(gl.TEXTURE2);
                            gl.bindTexture(gl.TEXTURE_2D, sphereTex);
                            roi3DEditor.GL.setI(gl, this.stampShader, "spheres", 2);
                            gl.activeTexture(gl.TEXTURE1);
                            gl.bindTexture(gl.TEXTURE_2D, this.texture[i].dso);
                            roi3DEditor.GL.setI(gl, this.stampShader, "uDSO", 1);
                            roi3DEditor.GL.setI(gl, this.stampShader, "baseInd", i * (roi3DEditor.IMAGES_PER_TEXTURE - 1));
                            gl.drawArrays(gl.TRIANGLES, 0, 6);
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
                        this.planes[roi3DEditor.AXIAL].dsoChanged = true;
                        this.planes[roi3DEditor.FRONTAL].dsoChanged = true;
                        this.planes[roi3DEditor.SAGITTAL].dsoChanged = true;
                    };
                    /**
                     * Convert the sphere cursor x,y coordinates into x,y and z
                     * coordinates. It takes into consideration the plane where the
                     * cursor is.
                     * @param cursor
                     * @return the xyz coordinates
                     */
                    //@Override
                    WebGLEditorImpl.prototype.xyzCoord = function (cursor) {
                        var x1 = cursor.x;
                        var y1 = cursor.y;
                        var plane = cursor.plane;
                        var dz = this.sliceSpacing / (this.imgWidth * this.pixelSpacing);
                        var x, y, z;
                        if (plane === this.axial) {
                            x = x1;
                            y = y1;
                            z = Math.round(this.axial.imgCoord * this.numImgs) * dz;
                        }
                        else if (plane === this.sagittal) {
                            x = this.sagittal.imgCoord;
                            y = (1.0 - x1 - 0.5) * this.numImgs * dz + 0.5;
                            z = (1 - y1) * this.numImgs * dz;
                        }
                        else if (plane === this.frontal) {
                            x = (x1 - 0.5) * this.numImgs * dz + 0.5;
                            y = this.frontal.imgCoord;
                            z = (1 - y1) * this.numImgs * dz;
                        }
                        else
                            throw new Error("Unknown plane for sphere criation.");
                        return new roi3DEditor.Point(x, y, z);
                    };
                    return WebGLEditorImpl;
                }(roi3DEditor.WebGLViewerImpl));
                roi3DEditor.WebGLEditorImpl = WebGLEditorImpl;
            })(roi3DEditor = dilvanLab.roi3DEditor || (dilvanLab.roi3DEditor = {}));
        })(dilvanLab = usp.dilvanLab || (usp.dilvanLab = {}));
    })(usp = br.usp || (br.usp = {}));
})(br || (br = {}));
