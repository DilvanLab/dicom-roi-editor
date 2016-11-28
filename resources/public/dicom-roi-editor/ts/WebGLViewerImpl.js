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
///<reference path="./WebGLViewer.ts" />
var br;
(function (br) {
    var usp;
    (function (usp) {
        var dilvanLab;
        (function (dilvanLab) {
            var roi3DEditor;
            (function (roi3DEditor) {
                var DEFAULT_WINDOWING_CENTER = 40;
                var DEFAULT_WINDOWING_WIDTH = 400;
                var WebGLViewerImpl = (function () {
                    function WebGLViewerImpl(canvas, mode, pref, series) {
                        if (pref === void 0) { pref = null; }
                        if (series === void 0) { series = null; }
                        this._windowingCenter = DEFAULT_WINDOWING_CENTER; // 0.5; //64000.0/2;
                        this._windowingWidth = DEFAULT_WINDOWING_WIDTH; // 1.0; //64000.0;
                        this.loadCounter = 0;
                        this.loadJpgsCounter = 0;
                        this.texture = [];
                        this.numImgs = 0;
                        this._activePlane = null;
                        this.mode = roi3DEditor.LOAD_IMAGES;
                        this.gl = roi3DEditor.GL.create(canvas);
                        if (!this.gl)
                            return;
                        this.mode = mode;
                        var res = this.gl.getExtension("OES_texture_float");
                        // TODO: Make message more meaningful
                        if (!res)
                            alert("Float Textures not supported.");
                        if (pref && series)
                            this.init(pref, series);
                    }
                    WebGLViewerImpl.createFragmentShader = function (gl, code) {
                        return this.createShader(gl, gl.createShader(gl.FRAGMENT_SHADER), code);
                    };
                    WebGLViewerImpl.createProgram = function (gl, vertex, fragment) {
                        var vertexShader = this.createVertexShader(gl, vertex);
                        var fragmentShader = this.createFragmentShader(gl, fragment);
                        var prog = gl.createProgram();
                        gl.attachShader(prog, vertexShader);
                        gl.attachShader(prog, fragmentShader);
                        gl.linkProgram(prog);
                        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
                            alert("WebGL Shader Program Linking failed: ");
                            if (!prog) {
                                alert("Shader program not compiled (equals null).");
                                return null;
                            }
                            var msg = gl.getProgramInfoLog(prog);
                            if (!msg)
                                msg = "null";
                            alert("Msg: " + msg);
                        }
                        return prog;
                    };
                    /**
                     * Read shader source.
                     * @return Compiled program.
                     */
                    WebGLViewerImpl.createShader = function (gl, shader, code) {
                        //let str = code;
                        gl.shaderSource(shader, code);
                        gl.compileShader(shader);
                        if (!gl.getShaderParameter(shader, WebGLRenderingContext.COMPILE_STATUS)) {
                            alert("Shader Compilation failed!");
                            var msg = gl.getShaderInfoLog(shader);
                            if (!msg)
                                msg = "null";
                            alert("Shader Compilation failed: " + msg);
                            return null;
                        }
                        return shader;
                    };
                    WebGLViewerImpl.createVertexShader = function (gl, code) {
                        return this.createShader(gl, gl.createShader(WebGLRenderingContext.VERTEX_SHADER), code);
                    };
                    Object.defineProperty(WebGLViewerImpl.prototype, "sliceSpacing", {
                        //@Override
                        get: function () {
                            return this._sliceSpacing;
                        },
                        set: function (n) {
                            throw new Error("SliceSpacing is read only.");
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(WebGLViewerImpl.prototype, "imagesLoaded", {
                        //@Override
                        get: function () {
                            return (this.loadCounter >= this.numImgs);
                        },
                        set: function (n) {
                            throw new Error("ImagesLoaded is read only.");
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(WebGLViewerImpl.prototype, "jpgsImagesLoaded", {
                        //@Override
                        get: function () {
                            return (this.loadJpgsCounter >= this.numImgs);
                        },
                        set: function (n) {
                            throw new Error("JpgsImagesLoaded is read only.");
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(WebGLViewerImpl.prototype, "imageNumber", {
                        //@Override
                        get: function () {
                            return this.numImgs;
                        },
                        set: function (n) {
                            throw new Error("ImageNumber is read only.");
                        },
                        enumerable: true,
                        configurable: true
                    });
                    WebGLViewerImpl.prototype.createUntBuf = function (shader, name) {
                        // Create a buffer and put a single clipspace rectangle in
                        // it (2 triangles)
                        var coord = [];
                        for (var _i = 2; _i < arguments.length; _i++) {
                            coord[_i - 2] = arguments[_i];
                        }
                        var gl = this.gl;
                        var positionLocation = gl.getAttribLocation(shader, name);
                        var buffer = gl.createBuffer();
                        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
                        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([coord[0], coord[1],
                            coord[2], coord[1], coord[0], coord[3], coord[0], coord[3],
                            coord[2], coord[1], coord[2], coord[3]]), gl.STATIC_DRAW);
                        gl.enableVertexAttribArray(positionLocation);
                        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
                        return buffer;
                    };
                    /** Default variables
                     *
                     * @param shader
                     */
                    WebGLViewerImpl.prototype.defIntVars = function (shader) {
                        this.gl.useProgram(shader);
                        roi3DEditor.GL.setI(this.gl, shader, "rescaleSlope", this.rescaleSlope);
                        roi3DEditor.GL.setI(this.gl, shader, "rescaleIntercept", this.rescaleIntercept);
                        roi3DEditor.GL.setI(this.gl, shader, "shifting", this.shifting);
                    };
                    //@Override
                    WebGLViewerImpl.prototype.drawImage = function () {
                        //alert('Draw image.');
                        if (this.numImgs === 0 || (this.loadCounter === 0 && this.loadJpgsCounter === 0))
                            return;
                        //alert('Draw image.1');
                        var gl = this.gl;
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
                    };
                    WebGLViewerImpl.prototype.genAxial = function (imgTexture, dso) {
                        var gl = this.gl;
                        // Find the correct texture and the image inside this texture
                        // TODO: throw an error if for doesn't break
                        var textureInd = 0;
                        var imageInd = 0;
                        var imgNumber = Math.round(this.axial.imgCoord * this.numImgs);
                        for (var i = 0, j = 0; i < this.texture.length; i++) {
                            if (imgNumber <= j + roi3DEditor.IMAGES_PER_TEXTURE - 1) {
                                textureInd = i;
                                imageInd = imgNumber - j;
                                break;
                            }
                            j = j + roi3DEditor.IMAGES_PER_TEXTURE - 1;
                        }
                        gl.bindFramebuffer(gl.FRAMEBUFFER, imgTexture.framebuffer);
                        gl.viewport(0, 0, this.axial.imgTexture.width, this.axial.imgTexture.height);
                        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                        gl.useProgram(this.axial.shader);
                        roi3DEditor.GL.setI(gl, this.axial.shader, "dso", dso);
                        this.createUntBuf(this.axial.shader, "a_position", -1.0, -1.0, 1.0, 1.0);
                        this.createUntBuf(this.axial.shader, "a_texCoord", 0.0, 0.0, 1.0, 1.0);
                        roi3DEditor.GL.setI(gl, this.axial.shader, "imageInd", imageInd);
                        roi3DEditor.GL.setI(gl, this.axial.shader, "imagesPerAxis", roi3DEditor.IMAGES_PER_AXIS);
                        roi3DEditor.GL.setI(gl, this.axial.shader, "greyCenter", this._windowingCenter);
                        roi3DEditor.GL.setI(gl, this.axial.shader, "greyWidth", this._windowingWidth);
                        gl.activeTexture(gl.TEXTURE0);
                        gl.bindTexture(gl.TEXTURE_2D, this.texture[textureInd].texture);
                        roi3DEditor.GL.setI(gl, this.axial.shader, "uSampler", 0);
                        gl.activeTexture(gl.TEXTURE1);
                        gl.bindTexture(gl.TEXTURE_2D, this.texture[textureInd].dso);
                        roi3DEditor.GL.setI(gl, this.axial.shader, "uDSO", 1);
                        // draw
                        gl.drawArrays(gl.TRIANGLES, 0, 6);
                        gl.bindTexture(gl.TEXTURE_2D, imgTexture.texture);
                        gl.generateMipmap(gl.TEXTURE_2D);
                        gl.bindTexture(gl.TEXTURE_2D, null);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                    };
                    WebGLViewerImpl.prototype.genPlane = function (plane) {
                        if (!plane.changed)
                            return;
                        if (plane === this.axial)
                            this.genAxial(plane.imgTexture, 0);
                        else
                            this.genPlane1(plane, plane.imgTexture, 0);
                        if (this.imagesLoaded)
                            plane.changed = false;
                    };
                    WebGLViewerImpl.prototype.genPlane1 = function (plane, imgTexture, dso) {
                        var _this = this;
                        var coord = plane.imgCoord;
                        var gl = this.gl;
                        gl.bindFramebuffer(gl.FRAMEBUFFER, imgTexture.framebuffer);
                        gl.viewport(0, 0, plane.imgTexture.width, plane.imgTexture.height);
                        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                        gl.useProgram(plane.shader);
                        this.createUntBuf(plane.shader, "a_position", -1.0, 1.0 - this.dy, 1.0, 1.0);
                        this.createUntBuf(plane.shader, "a_texCoord", 0.0, 0.0, 1.0, 1.0);
                        roi3DEditor.GL.setI(gl, plane.shader, "dso", dso);
                        roi3DEditor.GL.setI(gl, plane.shader, "imagesPerTexture", roi3DEditor.IMAGES_PER_TEXTURE);
                        roi3DEditor.GL.setI(gl, plane.shader, "imagesPerAxis", roi3DEditor.IMAGES_PER_AXIS);
                        roi3DEditor.GL.setI(gl, plane.shader, "greyCenter", this._windowingCenter);
                        roi3DEditor.GL.setI(gl, plane.shader, "greyWidth", this._windowingWidth);
                        var translation = [0, 0];
                        roi3DEditor.GL.setF(gl, plane.shader, "yCoord", coord);
                        // Each image comes with a set of slices that begin with
                        // the last slice of the last image and ends with the first slice of the
                        // next one
                        this.texture.forEach(function (iText) {
                            gl.activeTexture(gl.TEXTURE0);
                            gl.bindTexture(gl.TEXTURE_2D, iText.texture);
                            roi3DEditor.GL.setI(gl, plane.shader, "uSampler", 0);
                            gl.activeTexture(gl.TEXTURE1);
                            gl.bindTexture(gl.TEXTURE_2D, iText.dso);
                            roi3DEditor.GL.setI(gl, plane.shader, "uDSO", 1);
                            roi3DEditor.GL.set2fv(gl, plane.shader, "u_translation", new Float32Array(translation));
                            gl.drawArrays(gl.TRIANGLES, 0, 6);
                            translation[1] = translation[1] - _this.dy;
                        });
                        gl.bindTexture(gl.TEXTURE_2D, imgTexture.texture);
                        gl.generateMipmap(gl.TEXTURE_2D);
                        gl.bindTexture(gl.TEXTURE_2D, null);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                    };
                    Object.defineProperty(WebGLViewerImpl.prototype, "activePlane", {
                        //@Override
                        get: function () {
                            if (!this._activePlane)
                                return roi3DEditor.ALL;
                            if (this._activePlane === this.axial)
                                return roi3DEditor.AXIAL;
                            if (this._activePlane === this.sagittal)
                                return roi3DEditor.SAGITTAL;
                            if (this._activePlane === this.frontal)
                                return roi3DEditor.FRONTAL;
                            return -1;
                        },
                        //@Override
                        set: function (plane) {
                            switch (plane) {
                                case roi3DEditor.AXIAL:
                                    this._activePlane = this.axial;
                                    break;
                                case roi3DEditor.SAGITTAL:
                                    this._activePlane = this.sagittal;
                                    break;
                                case roi3DEditor.FRONTAL:
                                    this._activePlane = this.frontal;
                                    break;
                                default:
                                    this._activePlane = null;
                            }
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(WebGLViewerImpl.prototype, "axialImage", {
                        //@Override
                        get: function () {
                            return Math.round(this.planes[roi3DEditor.AXIAL].imgCoord * this.numImgs);
                        },
                        //@Override
                        set: function (n) {
                            throw new Error("AxialImage is read only.");
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(WebGLViewerImpl.prototype, "defaultWC", {
                        //@Override
                        get: function () {
                            return this._defaultWC;
                        },
                        set: function (n) {
                            throw new Error("DefaultWC is read only.");
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(WebGLViewerImpl.prototype, "defaultWW", {
                        //@Override
                        get: function () {
                            return this._defaultWW;
                        },
                        set: function (n) {
                            throw new Error("DefaultWW is read only.");
                        },
                        enumerable: true,
                        configurable: true
                    });
                    //@Override
                    WebGLViewerImpl.prototype.getImageCoord = function (plane) {
                        //alert("pln[]= "+this.planes.length);
                        return this.planes[plane].imgCoord;
                    };
                    Object.defineProperty(WebGLViewerImpl.prototype, "imagesPerTexture", {
                        //@Override
                        get: function () {
                            return roi3DEditor.IMAGES_PER_TEXTURE;
                        },
                        set: function (n) {
                            throw new Error("ImagesPerTexture is read only.");
                        },
                        enumerable: true,
                        configurable: true
                    });
                    //@Override
                    WebGLViewerImpl.prototype.getSquare = function (plane) {
                        return this.planes[plane].transfSquare();
                    };
                    Object.defineProperty(WebGLViewerImpl.prototype, "windowingCenter", {
                        //@Override
                        get: function () {
                            return this._windowingCenter;
                        },
                        //@Override
                        set: function (center) {
                            if (this._windowingCenter === center)
                                return;
                            this._windowingCenter = center;
                            this.axial.changed = true;
                            this.sagittal.changed = true;
                            this.frontal.changed = true;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(WebGLViewerImpl.prototype, "windowingWidth", {
                        //@Override
                        get: function () {
                            //getWindowingWidth() {
                            return this._windowingWidth;
                        },
                        //@Override
                        set: function (width) {
                            if (this._windowingWidth === width)
                                return;
                            this._windowingWidth = width;
                            this.axial.changed = true;
                            this.sagittal.changed = true;
                            this.frontal.changed = true;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    //@Override
                    WebGLViewerImpl.prototype.getX = function (plane) {
                        return this.planes[plane].x;
                    };
                    //@Override
                    WebGLViewerImpl.prototype.getY = function (plane) {
                        return this.planes[plane].y;
                    };
                    //@Override
                    WebGLViewerImpl.prototype.getZoom = function (plane) {
                        //alert("pln: "+plane+" zoo: "+this.planes);
                        return this.planes[plane].zoom;
                    };
                    //@Override
                    WebGLViewerImpl.prototype.markChanged = function () {
                        this.setActiveImage(roi3DEditor.AXIAL, 0.5);
                        this.setActiveImage(roi3DEditor.SAGITTAL, 0.5);
                        this.setActiveImage(roi3DEditor.FRONTAL, 0.5);
                        this.axial.changed = true;
                        this.sagittal.changed = true;
                        this.frontal.changed = true;
                    };
                    //@Override
                    WebGLViewerImpl.prototype.handleLoadedJpgTexture = function (i, imageJpg) {
                        var text = this.texture[i];
                        if (!text.isPngLoaded)
                            this.handleOneLoadedJpgTexture(text, imageJpg);
                        //this.incLoadCounter();
                        if (i === 0)
                            this.drawImage();
                    };
                    //@Override
                    WebGLViewerImpl.prototype.handleOneLoadedJpgTexture = function (imgText, imageJpg) {
                        var gl = this.gl;
                        var jpgTexture = gl.createTexture();
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
                        roi3DEditor.GL.setI(gl, this.jpegTransfShader, "uSampler", 0);
                        //TODO: Not used by jpegTransfShader: test and delete if true
                        roi3DEditor.GL.set2fv(gl, this.jpegTransfShader, "u_translation", new Float32Array([0, 0]));
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
                    };
                    WebGLViewerImpl.prototype.loadTexture = function (text, textureImage) {
                        var gl = this.gl;
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
                        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); //true);
                        // Upload the image into the texture.
                        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureImage);
                        // Cleanup
                        gl.bindTexture(gl.TEXTURE_2D, null);
                    };
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
                    WebGLViewerImpl.prototype.numImagesInTexture = function (i) {
                        // A bit complicated, as the last texture may have different sizes
                        var size = Math.floor(this.numImgs / (roi3DEditor.IMAGES_PER_TEXTURE - 1));
                        var left = this.numImgs % (roi3DEditor.IMAGES_PER_TEXTURE - 1);
                        size = (left === 0 || left === 1) ? size : size + 1;
                        if (i !== size - 1 || left == 1)
                            return roi3DEditor.IMAGES_PER_TEXTURE;
                        return (left == 0) ? roi3DEditor.IMAGES_PER_TEXTURE - 1 : left;
                    };
                    WebGLViewerImpl.prototype.init = function (pref, series) {
                        //alert("ONLY: "+ series.pixelSpacing+"   sliSpac: "+ series.sliceThickness)
                        // patch rs and ri if slope and intercept are undefined
                        var rescaleSlope = series['rescaleSlope'];
                        if (!rescaleSlope) {
                            rescaleSlope = "1.0";
                            console.info("Alert: Rescale Slope is empty ");
                        }
                        var rescaleIntercept = series['rescaleIntercept'];
                        if (!rescaleIntercept) {
                            rescaleIntercept = "0.0";
                            console.info("Alert: Rescale Intercept is empty ");
                        }
                        var defaultWW = series.windowWidth;
                        var defaultWC = series.windowCenter;
                        // maybe override image window level and width
                        if (pref.windowOverride) {
                            defaultWW = "" + pref.overrideWidth;
                            defaultWC = "" + pref.overrideCenter;
                        }
                        // Pixel Representation (0028,0103) is either unsigned (0) or signed
                        // (1). The default is unsigned
                        var pixelRepresentation = roi3DEditor.GL.parseInt(series.pixelRepresentation); // 0
                        // 16 or 12 bits
                        var bitsStored = roi3DEditor.GL.parseInt(series.bitsStored);
                        var shifting = (pixelRepresentation > 0.5) ? 1 << (bitsStored - 1) : 0;
                        this._defaultWW = roi3DEditor.GL.parseInt(defaultWW);
                        this._defaultWC = roi3DEditor.GL.parseInt(defaultWC);
                        this.rescaleSlope = roi3DEditor.GL.parseInt(rescaleSlope);
                        this.rescaleIntercept = roi3DEditor.GL.parseInt(rescaleIntercept);
                        this.shifting = shifting;
                        this.imgWidth = series.columns;
                        this.imgHeight = series.rows;
                        this.pixelSpacing = roi3DEditor.GL.parseFloat(series.pixelSpacing);
                        this._sliceSpacing = roi3DEditor.GL.parseFloat(series.sliceThickness);
                        this.numImgs = series.numberOfImages;
                        // now 4x4 = 16 per set of
                        // images
                        this.loadJpgsCounter = 0;
                        this.loadCounter = 0;
                        this.dy = (roi3DEditor.IMAGES_PER_TEXTURE - 1) / this.numImgs * 2; // 0.05
                        var gl = this.gl;
                        this.axial = new roi3DEditor.Plane(gl, this.imgWidth, this.imgHeight, WebGLViewerImpl.createProgram(gl, roi3DEditor.shaders.simpleVs, roi3DEditor.shaders.axialFs));
                        this.defIntVars(this.axial.shader);
                        this.sagittal = new roi3DEditor.Plane(gl, this.imgWidth, this.imgHeight, WebGLViewerImpl.createProgram(this.gl, roi3DEditor.shaders.transfVs, roi3DEditor.shaders.sagittalFs));
                        this.defIntVars(this.sagittal.shader);
                        this.frontal = new roi3DEditor.Plane(gl, this.imgWidth, this.imgHeight, WebGLViewerImpl.createProgram(gl, roi3DEditor.shaders.transfVs, roi3DEditor.shaders.frontalFs));
                        this.defIntVars(this.frontal.shader);
                        this.planes = new Array(3);
                        this.planes[roi3DEditor.AXIAL] = this.axial;
                        this.planes[roi3DEditor.SAGITTAL] = this.sagittal;
                        this.planes[roi3DEditor.FRONTAL] = this.frontal;
                        this.simpleShader = WebGLViewerImpl.createProgram(gl, roi3DEditor.shaders.simpleVs, roi3DEditor.shaders.simpleFs);
                        this.jpegTransfShader = WebGLViewerImpl.createProgram(gl, roi3DEditor.shaders.simpleVs, roi3DEditor.shaders.jpegTransfFs);
                        //this.loadShader = WebGLViewerImpl.createProgram(gl,
                        //    shaders.simpleVs, shaders.plainFs);
                        this.defIntVars(this.jpegTransfShader);
                        roi3DEditor.GL.setI(gl, this.jpegTransfShader, "defaultWC", this._defaultWC);
                        roi3DEditor.GL.setI(gl, this.jpegTransfShader, "defaultWW", this._defaultWW);
                        gl.clearColor(0, 0, 0.8, 1);
                        // Create textures to read images
                        for (var i = 0; i < this.numImgs - 1; i += this.imagesPerTexture - 1) {
                            var text = new roi3DEditor.ImgTexture(gl, this.imgWidth * roi3DEditor.IMAGES_PER_AXIS, this.imgHeight * roi3DEditor.IMAGES_PER_AXIS, gl.TEXTURE_MAG_FILTER, gl.NEAREST, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                            this.texture.push(text);
                            //alert('taxt:'+i+'='+this.texture.length);
                            if (this.mode === roi3DEditor.LOAD_IMAGES) {
                                // Find how many images will be loaded in the canvas
                                text.createCanvas(this.imgWidth, this.imgHeight, this.numImagesInTexture(i));
                            }
                        }
                    };
                    WebGLViewerImpl.prototype.isImageLoaded = function (i) {
                        return !this.texture &&
                            i < this.texture.length && !this.texture[i] &&
                            this.texture[i].isPngLoaded;
                    };
                    //@Override
                    WebGLViewerImpl.prototype.setActiveImage = function (plane, coord) {
                        //if (Math.round(planes[plane].imgCoord) === coord)
                        //	return;
                        if (this.planes[plane].imgCoord === coord)
                            return;
                        this.planes[plane].imgCoord = coord;
                        this.planes[plane].changed = true;
                    };
                    WebGLViewerImpl.prototype.setImage = function (plane, i) {
                        if (Math.round(this.planes[plane].imgCoord * this.numImgs) === i)
                            return;
                        this.planes[plane].imgCoord = i / this.numImgs;
                        this.planes[plane].changed = true;
                    };
                    //@Override
                    WebGLViewerImpl.prototype.setPlanesCoord = function (plane, x, y) {
                        var pt = this.toUnits(plane, x, y);
                        switch (plane) {
                            case roi3DEditor.AXIAL:
                                this.sagittal.imgCoord = pt.x;
                                this.frontal.imgCoord = pt.y;
                                this.sagittal.changed = true;
                                this.frontal.changed = true;
                                break;
                            case roi3DEditor.FRONTAL:
                                this.sagittal.imgCoord = this.xCoord(pt.x);
                                this.axial.imgCoord = 1 - pt.y;
                                this.sagittal.changed = true;
                                this.axial.changed = true;
                                break;
                            case roi3DEditor.SAGITTAL:
                                this.frontal.imgCoord = this.xCoord(1 - pt.x);
                                this.axial.imgCoord = 1 - pt.y;
                                this.frontal.changed = true;
                                this.axial.changed = true;
                                break;
                        }
                    };
                    //@Override
                    WebGLViewerImpl.prototype.setX = function (plane, x) {
                        this.planes[plane].x = x;
                    };
                    //@Override
                    WebGLViewerImpl.prototype.setY = function (plane, y) {
                        this.planes[plane].y = y;
                    };
                    //@Override
                    WebGLViewerImpl.prototype.setZoom = function (plane, zoom) {
                        //alert("pln: "+plane+" zoo: "+zoom);
                        this.planes[plane].zoom = zoom;
                    };
                    WebGLViewerImpl.prototype.showPlane = function (plane, scale, trans) {
                        var extraFcts = [];
                        for (var _i = 3; _i < arguments.length; _i++) {
                            extraFcts[_i - 3] = arguments[_i];
                        }
                        var gl = this.gl;
                        gl.useProgram(this.simpleShader);
                        extraFcts.forEach(function (fct) {
                            fct();
                        });
                        this.createUntBuf(this.simpleShader, "a_position", -1 * scale + trans[0], -1 * scale + trans[1], scale + trans[0], scale + trans[1]);
                        var aux = plane.transfSquare();
                        var zoomBuffer = this.createUntBuf(this.simpleShader, "a_texCoord", aux[0], aux[1], aux[2], aux[3]); //.concat(plane.transfSquare()));
                        gl.activeTexture(gl.TEXTURE0);
                        gl.bindTexture(gl.TEXTURE_2D, plane.imgTexture.texture);
                        roi3DEditor.GL.setI(gl, this.simpleShader, "uSampler", 0);
                        gl.activeTexture(gl.TEXTURE1);
                        gl.bindTexture(gl.TEXTURE_2D, plane.imgTexture.dso);
                        roi3DEditor.GL.setI(gl, this.simpleShader, "uDSO", 1);
                        // TODO: Verify if this correction is needed (See: xCoord(x:number))
                        //let alpha = (plane === this.axial) ? 1 : (this.imgWidth * this.pixelSpacing) / (this._sliceSpacing * this.numImgs);
                        //if (plane !== this.axial) alpha = -(1-alpha);
                        var alpha = (plane === this.axial) ? 1 : this.xCorrection;
                        //alpha=1;
                        var beta = (alpha - 1.0) / (2.0 * alpha);
                        //beta=0;
                        console.log('Careful alpha: ' + alpha + ' beta: ' + beta);
                        var lineX = 0, lineY = 0;
                        roi3DEditor.GL.setF(gl, this.simpleShader, "zoom", plane.zoom);
                        if (plane === this.axial) {
                            lineX = this.sagittal.imgCoord;
                            lineY = this.frontal.imgCoord;
                        }
                        else if (plane === this.frontal) {
                            lineX = this.sagittal.imgCoord;
                            lineY = 1 - this.axial.imgCoord;
                        }
                        else if (plane === this.sagittal) {
                            lineX = 1 - this.frontal.imgCoord;
                            lineY = 1 - this.axial.imgCoord;
                        }
                        roi3DEditor.GL.setF(gl, this.simpleShader, "lineX", lineX); // axial-> frontal  frontal -> axial    sagittal -> axial
                        roi3DEditor.GL.setF(gl, this.simpleShader, "lineY", lineY); // axial-> sagittal frontal -> sagittal sagittal -> frontal
                        roi3DEditor.GL.setF(gl, this.simpleShader, "alpha", alpha);
                        roi3DEditor.GL.setF(gl, this.simpleShader, "beta", beta);
                        gl.drawArrays(gl.TRIANGLES, 0, 6);
                        gl.deleteBuffer(zoomBuffer);
                    };
                    Object.defineProperty(WebGLViewerImpl.prototype, "xCorrection", {
                        get: function () {
                            var alpha = (this.imgWidth * this.pixelSpacing) / (this._sliceSpacing * this.numImgs);
                            return alpha - 1;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    /**
                     * Convert the sphere cursor x coordinate into the image x
                     * coordinate.
                     * @param x cursor x coordinate
                     * @return image x coordinate
                     */
                    //TODO: Verify if that correction is needed (See alpha in showPlane)
                    WebGLViewerImpl.prototype.xCoord = function (x) {
                        return x;
                        //const dz = this._sliceSpacing / (this.imgWidth * this.pixelSpacing);
                        //return (x - 0.5) * (this.numImgs * dz) + 0.5;
                        //THIS ONE WAS UNCOMMENTED
                        //return (x - 0.5) / (this.xCorrection + 1) + 0.5;
                        //let alpha = (plane === this.axial) ? 1 : (this.imgWidth * this.pixelSpacing) / (this._sliceSpacing * this.numImgs);
                    };
                    //@Override
                    WebGLViewerImpl.prototype.delete = function () {
                    };
                    //@Override
                    WebGLViewerImpl.prototype.pixels2Units = function (plane, pixels) {
                        var dx = pixels / this.gl.canvas.offsetWidth;
                        return dx / this.getZoom(plane); //dx/spWebGL.getZoom(plane)
                    };
                    WebGLViewerImpl.prototype.toUnits = function (plane, mouseX, mouseY) {
                        var x = this.pixels2Units(plane, mouseX);
                        var y = this.pixels2Units(plane, mouseY);
                        if (this.activePlane === roi3DEditor.ALL) {
                            x = x * 2;
                            y = y * 2;
                        }
                        var coord = this.getSquare(plane);
                        var x1 = coord[0];
                        var y2 = coord[3];
                        return new roi3DEditor.Point(x1 + x, y2 - y);
                    };
                    WebGLViewerImpl.prototype.loadPngTexture = function (i, url) {
                        var _this = this;
                        var image = new Image();
                        image.src = url;
                        image.crossOrigin = "Anonymous";
                        image.onerror = function () {
                            console.info("Error loading png....  " + image.src);
                        };
                        image.onload = function () {
                            //alert("loading: "+this.texture[i]+" - "+url);
                            if (_this.mode === roi3DEditor.LOAD_IMAGES) {
                                // Find the correct canvas for image
                                var c = Math.floor(i / (roi3DEditor.IMAGES_PER_TEXTURE - 1));
                                // Find the coords in canvas for image
                                var pos = i % (roi3DEditor.IMAGES_PER_TEXTURE - 1);
                                //If last image is exactly on the last position in the last texture
                                if (c === _this.texture.length) {
                                    c--;
                                    pos = roi3DEditor.IMAGES_PER_TEXTURE - 1;
                                }
                                var posX = pos % roi3DEditor.IMAGES_PER_AXIS * _this.imgWidth;
                                var posY = Math.floor(pos / roi3DEditor.IMAGES_PER_AXIS) * _this.imgHeight;
                                _this.texture[c].canvas.getContext('2d').drawImage(image, posX, posY);
                                //Repeat in the last texture, if the first image
                                if (pos === 0 && c !== 0) {
                                    _this.texture[c - 1].canvas.getContext('2d').drawImage(image, (roi3DEditor.IMAGES_PER_AXIS - 1) * _this.imgWidth, (roi3DEditor.IMAGES_PER_AXIS - 1) * _this.imgHeight);
                                    _this.texture[c - 1].numImgsRead--;
                                    _this.loadCounter++;
                                    if (_this.texture[c - 1].numImgsRead === 0) {
                                        _this.loadTexture(_this.texture[c - 1].texture, _this.texture[c - 1].canvas);
                                        _this.texture[c - 1].canvas = null;
                                        _this.drawImage();
                                    }
                                }
                                //Free image from memory
                                image = null;
                                _this.texture[c].numImgsRead--;
                                _this.loadCounter++;
                                if (_this.texture[c].numImgsRead === 0) {
                                    _this.loadTexture(_this.texture[c].texture, _this.texture[c].canvas);
                                    _this.texture[c].canvas = null;
                                    _this.drawImage();
                                }
                                return;
                            }
                            else {
                                _this.loadTexture(_this.texture[i].texture, image);
                                //Free image from memory
                                image = null;
                                // It doesn't have to be precise
                                //TODO: Improve that
                                _this.loadCounter += _this.numImagesInTexture(i);
                                if (_this.loadCounter > _this.numImgs)
                                    _this.loadCounter = _this.numImgs;
                                //incrementProgress();
                                _this.drawImage();
                            }
                        };
                    };
                    return WebGLViewerImpl;
                }());
                roi3DEditor.WebGLViewerImpl = WebGLViewerImpl;
            })(roi3DEditor = dilvanLab.roi3DEditor || (dilvanLab.roi3DEditor = {}));
        })(dilvanLab = usp.dilvanLab || (usp.dilvanLab = {}));
    })(usp = br.usp || (br.usp = {}));
})(br || (br = {}));
