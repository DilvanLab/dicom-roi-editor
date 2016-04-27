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
///<reference path='./DicomSeriesInfo.ts' />
///<reference path='./GL.ts' />
///<reference path='./Preferences.ts' />
///<reference path='./Shaders.ts' />
var br;
(function (br) {
    var usp;
    (function (usp) {
        var dilvanLab;
        (function (dilvanLab) {
            var roi3DEditor;
            (function (roi3DEditor) {
                roi3DEditor.AXIAL = 0;
                roi3DEditor.SAGITTAL = 1;
                roi3DEditor.FRONTAL = 2;
                roi3DEditor.ALL = 3;
                roi3DEditor.IMAGES_PER_AXIS = 4;
                roi3DEditor.IMAGES_PER_TEXTURE = roi3DEditor.IMAGES_PER_AXIS * roi3DEditor.IMAGES_PER_AXIS;
                roi3DEditor.LOAD_IMAGES = 0;
                roi3DEditor.LOAD_4X4_IMAGES = 1;
                var Point = (function () {
                    function Point(x, y, z) {
                        if (z === void 0) { z = 0; }
                        this.x = x;
                        this.y = y;
                        this.z = z;
                    }
                    return Point;
                }());
                roi3DEditor.Point = Point;
                var ImgSimpleTexture = (function () {
                    function ImgSimpleTexture(gl, width, height, filters) {
                        this.numImgsRead = 0;
                        this.framebuffer = gl.createFramebuffer();
                        this.texture = gl.createTexture();
                        gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, this.framebuffer);
                        gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.texture);
                        // Clamp textures to the edge
                        gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_S, WebGLRenderingContext.CLAMP_TO_EDGE);
                        gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_T, WebGLRenderingContext.CLAMP_TO_EDGE);
                        for (var i = 0; i < filters.length; i += 2)
                            gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, filters[i], filters[i + 1]);
                        gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, width, height, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, null);
                        // gl.texImageRGBA2D(width, height);
                        gl.generateMipmap(WebGLRenderingContext.TEXTURE_2D);
                        // Init Render Buffer
                        var renderbuffer = gl.createRenderbuffer();
                        gl.bindRenderbuffer(WebGLRenderingContext.RENDERBUFFER, renderbuffer);
                        // renderbuffer.bind();
                        // renderbuffer.renderbufferStorage(width, height);
                        gl.renderbufferStorage(WebGLRenderingContext.RENDERBUFFER, WebGLRenderingContext.DEPTH_COMPONENT16, width, height);
                        // Attach texture to buffer
                        gl.framebufferTexture2D(WebGLRenderingContext.FRAMEBUFFER, WebGLRenderingContext.COLOR_ATTACHMENT0, WebGLRenderingContext.TEXTURE_2D, this.texture, 0);
                        // gl.framebufferTexture2D(texture);
                        // Attach the renderBuffer
                        gl.framebufferRenderbuffer(WebGLRenderingContext.FRAMEBUFFER, WebGLRenderingContext.DEPTH_ATTACHMENT, WebGLRenderingContext.RENDERBUFFER, renderbuffer);
                        // To be able to write off screen, we create a renderBuffer and attach
                        // it to a framebuffer.
                        // Unbind resources
                        gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
                        gl.bindRenderbuffer(WebGLRenderingContext.RENDERBUFFER, null);
                        // renderbuffer.unbind();
                        gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
                        gl.deleteRenderbuffer(renderbuffer);
                    }
                    ImgSimpleTexture.prototype.createCanvas = function (width, height, imgNumber) {
                        this.canvas = document.createElement('canvas');
                        this.canvas.width = width * roi3DEditor.IMAGES_PER_AXIS;
                        this.canvas.height = height * roi3DEditor.IMAGES_PER_AXIS;
                        //document.body.appendChild(this.canvas);
                        this.numImgsRead = imgNumber;
                    };
                    return ImgSimpleTexture;
                }());
                roi3DEditor.ImgSimpleTexture = ImgSimpleTexture;
                var ImgTexture = (function (_super) {
                    __extends(ImgTexture, _super);
                    function ImgTexture(gl, width, height) {
                        var filters = [];
                        for (var _i = 3; _i < arguments.length; _i++) {
                            filters[_i - 3] = arguments[_i];
                        }
                        _super.call(this, gl, width, height, filters);
                        this.width = width;
                        this.height = height;
                        this.isPngLoaded = false;
                        this.width = width;
                        this.height = height;
                        this.dso = gl.createTexture();
                    }
                    return ImgTexture;
                }(ImgSimpleTexture));
                roi3DEditor.ImgTexture = ImgTexture;
                var Plane = (function () {
                    function Plane(gl, width, height, shader) {
                        this.x = 0.5;
                        this.y = 0.5;
                        this.zoom = 1.0;
                        this.imgCoord = 0;
                        this._changed = true;
                        this.dsoChanged = true;
                        this.shader = shader;
                        this.imgTexture = new ImgTexture(gl, width, height, WebGLRenderingContext.TEXTURE_MIN_FILTER, WebGLRenderingContext.LINEAR_MIPMAP_NEAREST, WebGLRenderingContext.TEXTURE_MIN_FILTER, WebGLRenderingContext.LINEAR_MIPMAP_LINEAR);
                    }
                    Object.defineProperty(Plane.prototype, "changed", {
                        get: function () { return this._changed; },
                        set: function (changed) {
                            if (changed)
                                this.dsoChanged = true;
                            this._changed = changed;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Plane.prototype.transfSquare = function () {
                        return [-1 / (this.zoom * 2) + this.x,
                            -1 / (this.zoom * 2) + this.y,
                            1 / (this.zoom * 2) + this.x,
                            1 / (this.zoom * 2) + this.y];
                    };
                    return Plane;
                }());
                roi3DEditor.Plane = Plane;
            })(roi3DEditor = dilvanLab.roi3DEditor || (dilvanLab.roi3DEditor = {}));
        })(dilvanLab = usp.dilvanLab || (usp.dilvanLab = {}));
    })(usp = br.usp || (br.usp = {}));
})(br || (br = {}));
//# sourceMappingURL=WebGLViewer.js.map