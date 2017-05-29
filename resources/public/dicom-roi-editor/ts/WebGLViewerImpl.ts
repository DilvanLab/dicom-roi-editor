

/*
 * Copyright (c) Dilvan A. Moreira 2016. All rights reserved.
 *
 *  This file is part of ePAD2.
 *
 *  ePAD2 is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  ePAD2 is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with ePAD2. If not, see <http://www.gnu.org/licenses/>.
 */

///<reference path="./WebGLViewer.ts" />

module br.usp.dilvanLab.roi3DEditor {

    const DEFAULT_WINDOWING_CENTER = 40;
    const DEFAULT_WINDOWING_WIDTH = 400;

    export class WebGLViewerImpl implements WebGLViewer {

        static createFragmentShader(gl:WebGLRenderingContext, code:string) {
            return this.createShader(gl, gl.createShader(gl.FRAGMENT_SHADER), code);
        }

        protected static createProgram(gl:WebGLRenderingContext, vertex:string, fragment:string) {
            const vertexShader = this.createVertexShader(gl, vertex);
            const fragmentShader = this.createFragmentShader(gl, fragment);

            const prog = gl.createProgram();
            gl.attachShader(prog, vertexShader);
            gl.attachShader(prog, fragmentShader);
            gl.linkProgram(prog);
            if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
                alert("WebGL Shader Program Linking failed: ");
                if (!prog) {
                    alert("Shader program not compiled (equals null).");
                    return null;
                }
                let msg = gl.getProgramInfoLog(prog);
                if (!msg) msg = "null";
                alert("Msg: " + msg);
            }
            return prog;
        }

        /**
         * Read shader source.
         * @return Compiled program.
         */
        private static createShader(gl:WebGLRenderingContext, shader:WebGLShader, code:string) {

            //let str = code;
            gl.shaderSource(shader, code);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                alert("Shader Compilation failed!");
                let msg = gl.getShaderInfoLog(shader);
                if (!msg) msg = "null";
                alert("Shader Compilation failed: " + msg);
                return null;
            }
            return shader;
        }

        private static createVertexShader(gl:WebGLRenderingContext, code:string) {
            return this.createShader(gl, gl.createShader(gl.VERTEX_SHADER), code);
        }

        private _windowingCenter:number = DEFAULT_WINDOWING_CENTER; // 0.5; //64000.0/2;
        private _windowingWidth:number = DEFAULT_WINDOWING_WIDTH; // 1.0; //64000.0;
        private loadCounter:number = 0;
        private loadJpgsCounter:number = 0;

        protected texture:Array<ImgTexture> = [];
        protected numImgs:number = 0;

        protected axial:Plane;
        protected sagittal:Plane;
        protected frontal:Plane;

        protected _activePlane:Plane = null;

        protected planes:Plane[];
        protected simpleShader:WebGLProgram;

        private jpegTransfShader:WebGLProgram;
        //private loadShader:WebGLProgram;
        private dy:number;

        private _defaultWW:number;
        private _defaultWC:number;
        private rescaleSlope:number; 
        private rescaleIntercept:number;
        private shifting:number;
 
        protected imgWidth:number;
        protected imgHeight:number;

        // TODO: Verify if it's better to make canvas public
                  gl:WebGLRenderingContext;
        protected pixelSpacing:number;
        private _sliceSpacing:number;

        protected mode:number = LOAD_IMAGES;

        constructor(canvas:HTMLCanvasElement, mode:number, pref:Preferences, series:DicomSeriesInfo) {
            this.gl = GL.create(canvas);

            if (!this.gl) return;

            this.mode = mode;

            const res = this.gl.getExtension("OES_texture_float");
            // TODO: Make message more meaningful
            if (!res)
                alert("Float Textures not supported.");
            if (pref && series)
                this.init(pref, series);
        }

        //@Override
        get sliceSpacing() {
            return this._sliceSpacing
        }

        set sliceSpacing(n:number) {
            throw new Error("SliceSpacing is read only.")
        }

        //@Override
        get imagesLoaded() {
            return (this.loadCounter >= this.numImgs)
        }

        set imagesLoaded(n:boolean) {
            throw new Error("ImagesLoaded is read only.")
        }

        //@Override
        get jpgsImagesLoaded() {
            return (this.loadJpgsCounter >= this.numImgs)
        }

        set jpgsImagesLoaded(n:boolean) {
            throw new Error("JpgsImagesLoaded is read only.")
        }

        //@Override
        get imageNumber() {
            return this.numImgs;
        }

        set imageNumber(n:number) {
            throw new Error("ImageNumber is read only.")
        }

        protected createUntBuf(shader:WebGLProgram, name:string, ...coord:number[]) {
            // Create a buffer and put a single clipspace rectangle in
            // it (2 triangles)

            const gl = this.gl;
            const positionLocation = gl.getAttribLocation(shader, name);

            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([coord[0], coord[1],
                coord[2], coord[1], coord[0], coord[3], coord[0], coord[3],
                coord[2], coord[1], coord[2], coord[3]]), gl.STATIC_DRAW);

            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
            return buffer;
        }

        /** Default variables
         *
         * @param shader
         */
        defIntVars(shader:WebGLProgram) {

            this.gl.useProgram(shader);
            GL.setI(this.gl, shader, "rescaleSlope", this.rescaleSlope);
            GL.setI(this.gl, shader, "rescaleIntercept", this.rescaleIntercept);
            GL.setI(this.gl, shader, "shifting", this.shifting);
        }

        //@Override
        drawImage():void {
            //alert('Draw image.');
            if (this.numImgs === 0 || (this.loadCounter === 0 && this.loadJpgsCounter === 0))
                return;
            //alert('Draw image.1');
            const gl = this.gl;
            // Generate Textures for each plane
            // if they have changed

            this.genPlane(this.axial);
            this.genPlane(this.sagittal);
            this.genPlane(this.frontal);

            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            // Show just the active plane
            if (this._activePlane) {
                this.showPlane(this._activePlane, 1, [0, 0]);
                return;
            }
            //alert('Draw image.2')
            this.showPlane(this.sagittal, 0.5, [-0.5, -0.5]);
            this.showPlane(this.frontal, 0.5, [0.5, 0.5]);
            this.showPlane(this.axial, 0.5, [-0.5, 0.5]);
        }

        protected genAxial(imgTexture:ImgSimpleTexture, dso:number) {

            const gl = this.gl;
            // Find the correct texture and the image inside this texture
            // TODO: throw an error if for doesn't break
            let textureInd = 0;
            let imageInd = 0;
            const imgNumber = Math.round(this.axial.imgCoord * this.numImgs);

            for (let i = 0, j = 0; i < this.texture.length; i++) {
                if (imgNumber <= j + IMAGES_PER_TEXTURE - 1) {
                    textureInd = i;
                    imageInd = imgNumber - j;
                    break;
                }
                j = j + IMAGES_PER_TEXTURE - 1;
            }

            gl.bindFramebuffer(gl.FRAMEBUFFER, imgTexture.framebuffer);
            gl.viewport(0, 0, this.axial.imgTexture.width, this.axial.imgTexture.height);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            gl.useProgram(this.axial.shader);

            GL.setI(gl, this.axial.shader, "dso", dso);

            this.createUntBuf(this.axial.shader, "a_position", -1.0, -1.0, 1.0, 1.0);
            this.createUntBuf(this.axial.shader, "a_texCoord", 0.0, 0.0, 1.0, 1.0);

            GL.setI(gl, this.axial.shader, "imageInd", imageInd);
            GL.setI(gl, this.axial.shader, "imagesPerAxis", IMAGES_PER_AXIS);
            GL.setI(gl, this.axial.shader, "greyCenter", this._windowingCenter);
            GL.setI(gl, this.axial.shader, "greyWidth", this._windowingWidth);

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, this.texture[textureInd].texture);
            GL.setI(gl, this.axial.shader, "uSampler", 0);

            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, this.texture[textureInd].dso);
            GL.setI(gl, this.axial.shader, "uDSO", 1);

            // draw
            gl.drawArrays(gl.TRIANGLES, 0, 6);

            gl.bindTexture(gl.TEXTURE_2D, imgTexture.texture);
            gl.generateMipmap(gl.TEXTURE_2D);
            gl.bindTexture(gl.TEXTURE_2D, null);

            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        }

        protected genPlane(plane:Plane) {
            if (!plane.changed) return;

            if (plane === this.axial)
                this.genAxial(plane.imgTexture, 0);
            else
                this.genPlane1(plane, plane.imgTexture, 0);

            if (this.imagesLoaded)
                plane.changed = false;
        }

        protected genPlane1(plane:Plane, imgTexture:ImgSimpleTexture, dso:number) {

            const coord = plane.imgCoord;
            const gl = this.gl;

            gl.bindFramebuffer(gl.FRAMEBUFFER, imgTexture.framebuffer);
            gl.viewport(0, 0, plane.imgTexture.width, plane.imgTexture.height);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            gl.useProgram(plane.shader);

            this.createUntBuf(plane.shader, "a_position", -1.0, 1.0 - this.dy, 1.0, 1.0);

            this.createUntBuf(plane.shader, "a_texCoord", 0.0, 0.0, 1.0, 1.0);

            GL.setI(gl, plane.shader, "dso", dso);

            GL.setI(gl, plane.shader, "imagesPerTexture", IMAGES_PER_TEXTURE);
            GL.setI(gl, plane.shader, "imagesPerAxis", IMAGES_PER_AXIS);

            GL.setI(gl, plane.shader, "greyCenter", this._windowingCenter);
            GL.setI(gl, plane.shader, "greyWidth", this._windowingWidth);

            const translation = [0, 0];

            GL.setF(gl, plane.shader, "yCoord", coord);

            // Each image comes with a set of slices that begin with
            // the last slice of the last image and ends with the first slice of the
            // next one
            this.texture.forEach((iText)=> {
                gl.activeTexture(gl.TEXTURE0);
                gl.bindTexture(gl.TEXTURE_2D, iText.texture);
                GL.setI(gl, plane.shader, "uSampler", 0);

                gl.activeTexture(gl.TEXTURE1);
                gl.bindTexture(gl.TEXTURE_2D, iText.dso);
                GL.setI(gl, plane.shader, "uDSO", 1);

                GL.set2fv(gl, plane.shader, "u_translation", new Float32Array(translation));

                gl.drawArrays(gl.TRIANGLES, 0, 6);

                translation[1] = translation[1] - this.dy;
            });

            gl.bindTexture(gl.TEXTURE_2D, imgTexture.texture);
            gl.generateMipmap(gl.TEXTURE_2D);

            gl.bindTexture(gl.TEXTURE_2D, null);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        }

        //@Override
        get activePlane() {
            if (!this._activePlane) return ALL;
            if (this._activePlane === this.axial) return AXIAL;
            if (this._activePlane === this.sagittal) return SAGITTAL;
            if (this._activePlane === this.frontal) return FRONTAL;
            return -1;
        }

        //@Override
        get axialImage() {
            return Math.round(this.planes[AXIAL].imgCoord * this.numImgs)
        }

        //@Override
        set axialImage(n:number) {
            throw new Error("AxialImage is read only.");
        }

        //@Override
        get defaultWC() {
            return this._defaultWC
        }

        set defaultWC(n:number) {
            throw new Error("DefaultWC is read only.")
        }

        //@Override
        get defaultWW() {
            return this._defaultWW
        }

        set defaultWW(n:number) {
            throw new Error("DefaultWW is read only.")
        }

        //@Override
        getImageCoord(plane:number) {
            //alert("pln[]= "+this.planes.length);
            return this.planes[plane].imgCoord
        }

        //@Override
        get imagesPerTexture() {
            return IMAGES_PER_TEXTURE;
        }

        set imagesPerTexture(n:number) {
            throw new Error("ImagesPerTexture is read only.")
        }

        //@Override
        getSquare(plane:number) {
            return this.planes[plane].transfSquare();
        }

        //@Override
        get windowingCenter() {
            return this._windowingCenter;
        }

        //@Override
        get windowingWidth() {
        //getWindowingWidth() {
            return this._windowingWidth;
        }

        //@Override
        getX(plane:number) {
            return this.planes[plane].x;
        }

        //@Override
        getY(plane:number) {
            return this.planes[plane].y;
        }

        //@Override
        getZoom(plane:number) {
            //alert("pln: "+plane+" zoo: "+this.planes);

            return this.planes[plane].zoom;
        }

        //@Override
        markChanged() {
            this.setImageCoord(AXIAL, 0.5);
            this.setImageCoord(SAGITTAL, 0.5);
            this.setImageCoord(FRONTAL, 0.5);
            this.axial.changed = true;
            this.sagittal.changed = true;
            this.frontal.changed = true;
        }

        //@Override
        handleLoadedJpgTexture(i:number, imageJpg:HTMLImageElement) {
            let text = this.texture[i];
            if (!text.isPngLoaded)
                this.handleOneLoadedJpgTexture(text, imageJpg);
            //this.incLoadCounter();
            if (i === 0) this.drawImage();
        }

        //@Override
        private handleOneLoadedJpgTexture(imgText:ImgTexture, imageJpg:HTMLImageElement) {

            const gl = this.gl;
            const jpgTexture = gl.createTexture();

            // Read the jpg image into a texture
            this.loadTexture(jpgTexture, imageJpg);

            // Rebind framebuffer
            gl.bindFramebuffer(gl.FRAMEBUFFER, imgText.framebuffer);
            gl.viewport(0, 0, imgText.width, imgText.height);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            // Choose jpeg transform program
            gl.useProgram(this.jpegTransfShader);

            // look up where the vertex data needs to go.
            this.createUntBuf(this.jpegTransfShader, "a_position", -1.0, -1.0, 1.0, 1.0);
            this.createUntBuf(this.jpegTransfShader, "a_texCoord", 0.0, 0.0, 1.0, 1.0);

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, jpgTexture);
            GL.setI(gl, this.jpegTransfShader, "uSampler", 0);
            //TODO: Not used by jpegTransfShader: test and delete if true
            GL.set2fv(gl, this.jpegTransfShader, "u_translation", new Float32Array([0, 0]));

            gl.drawArrays(gl.TRIANGLES, 0, 6);

            // Generate new texture
            gl.bindTexture(gl.TEXTURE_2D, imgText.texture);
            gl.generateMipmap(gl.TEXTURE_2D);

            gl.bindTexture(gl.TEXTURE_2D, null);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);

            // Delete texture
            gl.deleteTexture(jpgTexture);
            //this.gl.deleteBuffer(imgText.framebuffer);
            //this.gl.deleteBuffer(renderbuffer);
        }

        private loadTexture(text:WebGLTexture, textureImage:ImageData | HTMLVideoElement | HTMLImageElement | HTMLCanvasElement) {

            const gl = this.gl;
            // bind the texture
            gl.bindTexture(gl.TEXTURE_2D, text);

            // Set the parameters so we can render any size image.
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            // this.texParameteri(this.TEXTURE_2D, this.TEXTURE_MAG_FILTER,
            // this.LINEAR);
            // this.texParameteri(this.TEXTURE_2D, this.TEXTURE_MIN_FILTER,
            // this.LINEAR);

            // Flip the image as Y is 0 on the botton in WebGL
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);//true);

            // Upload the image into the texture.
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureImage);

            // Cleanup
            gl.bindTexture(gl.TEXTURE_2D, null);
        }

        //private incLoadCounter(){
        //    if (this.mode===LOAD_4X4_IMAGES) {
        //        this.loadCounter += IMAGES_PER_TEXTURE;
        //    }
        //    this.loadCounter++;
        //}

        //handleLoadedTexture(i:number, textureImage:HTMLImageElement) {
        //
        //    if (this.mode===LOAD_4X4_IMAGES) {
        //        let text= this.texture[i].texture;
        //        this.loadTexture(text, textureImage);
        //        this.incLoadCounter();
        //        return;
        //    }
        //    //    this.loadCounter++;
        //    //
        //    //let imgText = this.texture[i];
        //    //
        //    //const gl = this.gl;
        //    //const pngTexture = gl.createTexture();
        //    //
        //    //// Read the image into a texture
        //    //this.loadTexture(pngTexture, textureImage);
        //    //
        //    //// Rebind framebuffer
        //    //gl.bindFramebuffer(gl.FRAMEBUFFER, imgText.framebuffer);
        //    //gl.viewport(0, 0, imgText.width, imgText.height);
        //    //gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        //    //
        //    //// Choose jpeg transform program
        //    //gl.useProgram(this.loadShader);
        //    //
        //    //// look up where the vertex data needs to go.
        //    //this.createUntBuf(this.loadShader, "a_position", -1.0, -1.0, 1.0, 1.0);
        //    //this.createUntBuf(this.loadShader, "a_texCoord", 0.0, 0.0, 1.0, 1.0);
        //    //
        //    //gl.activeTexture(gl.TEXTURE0);
        //    //gl.bindTexture(gl.TEXTURE_2D, pngTexture);
        //    //GL.setI(gl, this.loadShader, "uSampler", 0);
        //    ////GL.set2fv(gl, this.loadShader, "u_translation", new Float32Array([0, 0]));
        //    //
        //    //gl.drawArrays(gl.TRIANGLES, 0, 6);
        //    //
        //    //// Generate new texture
        //    //gl.bindTexture(gl.TEXTURE_2D, imgText.texture);
        //    //gl.generateMipmap(gl.TEXTURE_2D);
        //    //
        //    //gl.bindTexture(gl.TEXTURE_2D, null);
        //    //gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        //    //
        //    //// Delete texture
        //    //gl.deleteTexture(pngTexture);
        //    ////this.gl.deleteBuffer(imgText.framebuffer);
        //    ////this.gl.deleteBuffer(renderbuffer);
        //}

        private numImagesInTexture(i:number) {
            // A bit complicated, as the last texture may have different sizes
            let size = Math.floor(this.numImgs / (IMAGES_PER_TEXTURE-1));
            let left = this.numImgs % (IMAGES_PER_TEXTURE-1);

            size = (left===0 || left===1)? size : size+1;

            if (i !== size-1 || left==1)
                return IMAGES_PER_TEXTURE;
            return (left==0) ? IMAGES_PER_TEXTURE - 1 : left;
        }

        private init(pref:Preferences, series:DicomSeriesInfo) {
            //alert("ONLY: "+ series.pixelSpacing+"   sliSpac: "+ series.sliceThickness)

            // patch rs and ri if slope and intercept are undefined
            let rescaleSlope = series['rescaleSlope'];
            if (!rescaleSlope) {
                rescaleSlope = "1.0";
                console.info("Alert: Rescale Slope is empty ");
            }
            let rescaleIntercept = series['rescaleIntercept'];
            if (!rescaleIntercept) {
                rescaleIntercept = "0.0";
                console.info("Alert: Rescale Intercept is empty ");
            }

            let defaultWW = series.windowWidth;
            let defaultWC = series.windowCenter;
            // maybe override image window level and width
            if (pref.windowOverride) {
                defaultWW = "" + pref.overrideWidth;
                defaultWC = "" + pref.overrideCenter;
            }

            // Pixel Representation (0028,0103) is either unsigned (0) or signed
            // (1). The default is unsigned
            const pixelRepresentation = GL.parseInt(series.pixelRepresentation); // 0
            // 16 or 12 bits
            const bitsStored = GL.parseInt(series.bitsStored);

            const shifting = (pixelRepresentation > 0.5) ? 1 << (bitsStored - 1) : 0;

            this._defaultWW = GL.parseInt(defaultWW);
            this._defaultWC = GL.parseInt(defaultWC);
            this.rescaleSlope = GL.parseInt(rescaleSlope);
            this.rescaleIntercept = GL.parseInt(rescaleIntercept);
            this.shifting = shifting;
            this.imgWidth = series.columns;
            this.imgHeight = series.rows;

            this.pixelSpacing = GL.parseFloat(series.pixelSpacing);
            this._sliceSpacing = GL.parseFloat(series.sliceThickness);

            this.numImgs = series.numberOfImages;
            // now 4x4 = 16 per set of
            // images
            this.loadJpgsCounter = 0;
            this.loadCounter = 0;
            this.dy = (IMAGES_PER_TEXTURE - 1) / this.numImgs * 2; // 0.05
            const gl = this.gl;

            this.axial = new Plane(gl, this.imgWidth, this.imgHeight, WebGLViewerImpl.createProgram(gl,
                shaders.simpleVs, shaders.axialFs));
            this.defIntVars(this.axial.shader);

            this.sagittal = new Plane(gl, this.imgWidth, this.imgHeight, WebGLViewerImpl.createProgram(this.gl,
                shaders.transfVs, shaders.sagittalFs));
            this.defIntVars(this.sagittal.shader);

            this.frontal = new Plane(gl, this.imgWidth, this.imgHeight, WebGLViewerImpl.createProgram(gl,
                shaders.transfVs, shaders.frontalFs));
            this.defIntVars(this.frontal.shader);

            this.planes = new Array<Plane>(3);
            this.planes[AXIAL] = this.axial;
            this.planes[SAGITTAL] = this.sagittal;
            this.planes[FRONTAL] = this.frontal;

            this.simpleShader = WebGLViewerImpl.createProgram(gl,
                shaders.simpleVs, shaders.simpleFs);

            this.jpegTransfShader = WebGLViewerImpl.createProgram(gl,
                shaders.simpleVs, shaders.jpegTransfFs);

            //this.loadShader = WebGLViewerImpl.createProgram(gl,
            //    shaders.simpleVs, shaders.plainFs);

            this.defIntVars(this.jpegTransfShader);
            GL.setI(gl, this.jpegTransfShader, "defaultWC", this._defaultWC);
            GL.setI(gl, this.jpegTransfShader, "defaultWW", this._defaultWW);

            gl.clearColor(0, 0, 0.8, 1);

            // Create textures to read images
            for (let i = 0; i < this.numImgs - 1; i += this.imagesPerTexture - 1) {

                const text = new ImgTexture(gl, this.imgWidth * IMAGES_PER_AXIS, this.imgHeight * IMAGES_PER_AXIS,
                    gl.TEXTURE_MAG_FILTER, gl.NEAREST,
                    gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                this.texture.push(text);
                //alert('taxt:'+i+'='+this.texture.length);
                if (this.mode===LOAD_IMAGES) {
                    // Find how many images will be loaded in the canvas
                    text.createCanvas(this.imgWidth, this.imgHeight, this.numImagesInTexture(i));
                }
            }
        }

        isImageLoaded(i:number) {
            return !this.texture &&
                i < this.texture.length && !this.texture[i] &&
                this.texture[i].isPngLoaded
        }

        //@Override
        setImageCoord(plane:number, coord:number) {
            //if (Math.round(planes[plane].imgCoord) === coord)
            //	return;
            if (this.planes[plane].imgCoord === coord)
                return;
            this.planes[plane].imgCoord = coord;
            this.planes[plane].changed = true;
        }

        //@Override
        set activePlane(plane:number) {
            switch (plane) {
                case AXIAL:
                    this._activePlane = this.axial;
                    break;
                case SAGITTAL:
                    this._activePlane = this.sagittal;
                    break;
                case FRONTAL:
                    this._activePlane = this.frontal;
                    break;
                default:
                    this._activePlane = null;
            }
        }

        private setImage(plane:number, i:number) {
            if (Math.round(this.planes[plane].imgCoord * this.numImgs) === i)
                return;
            this.planes[plane].imgCoord = i/this.numImgs;
            this.planes[plane].changed = true;
        }

        //@Override
        setPlanesCoord(plane:number, x:number, y:number) {
            const pt = this.toUnits(plane, x, y);
            switch (plane) {
                case AXIAL:
                    this.sagittal.imgCoord = pt.x;
                    this.frontal.imgCoord = pt.y;
                    this.sagittal.changed = true;
                    this.frontal.changed = true;
                    break;
                case FRONTAL:
                    this.sagittal.imgCoord = this.xCoord(pt.x);
                    this.axial.imgCoord = 1 - pt.y;
                    this.sagittal.changed = true;
                    this.axial.changed = true;
                    break;
                case SAGITTAL:
                    this.frontal.imgCoord = this.xCoord(1 - pt.x);
                    this.axial.imgCoord = 1 - pt.y;
                    this.frontal.changed = true;
                    this.axial.changed = true;
                    break;
            }
        }

        //@Override
        set windowingCenter(center:number) {
            if (this._windowingCenter === center) return;
            this._windowingCenter = center;
            this.axial.changed = true;
            this.sagittal.changed = true;
            this.frontal.changed = true;
        }

        //@Override
        set windowingWidth(width:number){
            if (this._windowingWidth === width) return;
            this._windowingWidth = width;
            this.axial.changed = true;
            this.sagittal.changed = true;
            this.frontal.changed = true;
        }

        //@Override
        setX(plane:number, x:number) {
            this.planes[plane].x = x;
        }

        //@Override
        setY(plane:number, y:number) {
            this.planes[plane].y = y;
        }

        //@Override
        setZoom(plane:number, zoom:number) {
            //alert("pln: "+plane+" zoo: "+zoom);
            this.planes[plane].zoom = zoom;
        }

        protected showPlane(plane:Plane, scale:number, trans:number[], ...extraFcts:Array<()=>void>) {

            const gl = this.gl;
            gl.useProgram(this.simpleShader);

            extraFcts.forEach((fct)=> {
                //console.log(fct);
                fct()
            });

            this.createUntBuf(this.simpleShader, "a_position",
                -1 * scale + trans[0], -1 * scale + trans[1],
                scale + trans[0], scale + trans[1]);

            const aux = plane.transfSquare();
            const zoomBuffer = this.createUntBuf(this.simpleShader, "a_texCoord",
                aux[0], aux[1], aux[2], aux[3]);//.concat(plane.transfSquare()));

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, plane.imgTexture.texture);
            GL.setI(gl, this.simpleShader, "uSampler", 0);

            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, plane.imgTexture.dso);
            GL.setI(gl, this.simpleShader, "uDSO", 1);

            // TODO: Verify if this correction is needed (See: xCoord(x:number))
            //let alpha = (plane === this.axial) ? 1 : (this.imgWidth * this.pixelSpacing) / (this._sliceSpacing * this.numImgs);
            //if (plane !== this.axial) alpha = -(1-alpha);
            const alpha = (plane === this.axial) ? 1 : this.xCorrection;

            //alpha=1;
            const beta = (alpha - 1.0) / (2.0 * alpha);
            //beta=0;
            console.log('Careful alpha: '+alpha+ ' beta: '+beta)
            let lineX = 0, lineY = 0;
            GL.setF(gl, this.simpleShader, "zoom", plane.zoom);

            if (plane === this.axial) {
                lineX = this.sagittal.imgCoord;
                lineY = this.frontal.imgCoord;
            } else if (plane === this.frontal) {
                lineX = this.sagittal.imgCoord;
                lineY = 1 - this.axial.imgCoord;
            } else if (plane === this.sagittal) {
                lineX = 1 - this.frontal.imgCoord;
                lineY = 1 - this.axial.imgCoord;
            }
            GL.setF(gl, this.simpleShader, "lineX", lineX); // axial-> frontal  frontal -> axial    sagittal -> axial
            GL.setF(gl, this.simpleShader, "lineY", lineY); // axial-> sagittal frontal -> sagittal sagittal -> frontal

            GL.setF(gl, this.simpleShader, "alpha", alpha);
            GL.setF(gl, this.simpleShader, "beta", beta);

            gl.drawArrays(gl.TRIANGLES, 0, 6);
            gl.deleteBuffer(zoomBuffer);
        }

        get xCorrection(){
            let alpha =  (this.imgWidth * this.pixelSpacing) / (this._sliceSpacing * this.numImgs);
            return alpha - 1
        }

        /**
         * Convert the sphere cursor x coordinate into the image x
         * coordinate.
         * @param x cursor x coordinate
         * @return image x coordinate
         */
        //TODO: Verify if that correction is needed (See alpha in showPlane)
        xCoord(x:number) {
            return x;
            //const dz = this._sliceSpacing / (this.imgWidth * this.pixelSpacing);
            //return (x - 0.5) * (this.numImgs * dz) + 0.5;

            //THIS ONE WAS UNCOMMENTED
            //return (x - 0.5) / (this.xCorrection + 1) + 0.5;

            //let alpha = (plane === this.axial) ? 1 : (this.imgWidth * this.pixelSpacing) / (this._sliceSpacing * this.numImgs);

        }

        //@Override
        delete() {
        }

        //@Override
        pixels2Units(plane:number, pixels:number) {
            const dx = pixels / this.gl.canvas.offsetWidth;
            return dx / this.getZoom(plane); //dx/spWebGL.getZoom(plane)
        }

        protected toUnits(plane:number, mouseX:number, mouseY:number) {

            let x = this.pixels2Units(plane, mouseX);
            let y = this.pixels2Units(plane, mouseY);

            if (this.activePlane === ALL) {
                x = x * 2;
                y = y * 2;
            }
            const coord = this.getSquare(plane);
            const x1 = coord[0];
            const y2 = coord[3];

            return new Point(x1 + x, y2 - y);
        }

        loadPngTexture(i:number, url:string) {
            let image:HTMLImageElement = new Image();
            image.src = url;
            image.crossOrigin = "Anonymous";
            image.onerror= ()=> {
                console.info("Error loading png....  " + image.src);
            };
            image.onload= ()=> {
                //alert("loading: "+this.texture[i]+" - "+url);

                if (this.mode===LOAD_IMAGES) {

                    // Find the correct canvas for image
                    let c = Math.floor(i / (IMAGES_PER_TEXTURE-1));
                    // Find the coords in canvas for image
                    let pos = i % (IMAGES_PER_TEXTURE-1);

                    //If last image is exactly on the last position in the last texture
                    if (c===this.texture.length) {
                        c--;
                        pos= IMAGES_PER_TEXTURE-1;
                    }

                    let posX = pos % IMAGES_PER_AXIS * this.imgWidth;
                    let posY = Math.floor(pos / IMAGES_PER_AXIS) * this.imgHeight;

                    this.texture[c].canvas.getContext('2d').drawImage(image, posX, posY);

                    //Repeat in the last texture, if the first image
                    if (pos===0 && c!==0) {
                        this.texture[c-1].canvas.getContext('2d').drawImage(image,
                            (IMAGES_PER_AXIS-1) * this.imgWidth,
                            (IMAGES_PER_AXIS-1) * this.imgHeight);
                        this.texture[c-1].numImgsRead--;
                        this.loadCounter++;
                        if (this.texture[c-1].numImgsRead===0) {
                            this.loadTexture(this.texture[c-1].texture, this.texture[c-1].canvas);
                            this.texture[c-1].canvas = null;
                            this.drawImage();
                        }
                    }
                    //Free image from memory
                    image = null;

                    this.texture[c].numImgsRead--;
                    this.loadCounter++;

                    if (this.texture[c].numImgsRead===0) {
                        this.loadTexture(this.texture[c].texture, this.texture[c].canvas);
                        this.texture[c].canvas = null;
                        this.drawImage();
                    }
                    return;
                } else {
                    this.loadTexture(this.texture[i].texture, image);

                    //Free image from memory
                    image = null;

                    // It doesn't have to be precise
                    //TODO: Improve that
                    this.loadCounter += this.numImagesInTexture(i);
                    if (this.loadCounter>this.numImgs) this.loadCounter = this.numImgs;

                    //incrementProgress();
                    this.drawImage();

                    //if (spWebGL.areImagesLoaded()) {
                    //    spWebGL.markChanged();
                    //    drawImage();
                    //}
                }
            };
        }
    }
}
