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

///<reference path='./DicomSeriesInfo.ts' />
///<reference path='./GL.ts' />
///<reference path='./Preferences.ts' />
///<reference path='./Shaders.ts' />

module br.usp.dilvanLab.roi3DEditor {

    export const AXIAL:number = 0;
    export const SAGITTAL:number = 1;
    export const FRONTAL:number = 2;
    export const ALL:number = 3;

    export const IMAGES_PER_AXIS = 4;
    export const IMAGES_PER_TEXTURE = IMAGES_PER_AXIS * IMAGES_PER_AXIS;

    export class Point {
        constructor(public x:number, public y:number, public z:number=0) {}
    }

    export class ImgSimpleTexture {

        texture:WebGLTexture;
        framebuffer:WebGLFramebuffer;

        constructor(gl:WebGLRenderingContext, width:number, height:number, filters:number[]) {

            this.framebuffer = gl.createFramebuffer();
            this.texture = gl.createTexture();

            gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, this.framebuffer);
            gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.texture);

            // Clamp textures to the edge
            gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_S, WebGLRenderingContext.CLAMP_TO_EDGE);
            gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_T, WebGLRenderingContext.CLAMP_TO_EDGE);

            for (let i = 0; i < filters.length; i += 2)
                gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, filters[i], filters[i + 1]);

            gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, width, height, 0, WebGLRenderingContext.RGBA,
                WebGLRenderingContext.UNSIGNED_BYTE, null);

            // gl.texImageRGBA2D(width, height);
            gl.generateMipmap(WebGLRenderingContext.TEXTURE_2D);

            // Init Render Buffer
            let renderbuffer = gl.createRenderbuffer();
            gl.bindRenderbuffer(WebGLRenderingContext.RENDERBUFFER, renderbuffer);
            // renderbuffer.bind();
            // renderbuffer.renderbufferStorage(width, height);
            gl.renderbufferStorage(WebGLRenderingContext.RENDERBUFFER, WebGLRenderingContext.DEPTH_COMPONENT16, width,
                height);

            // Attach texture to buffer
            gl.framebufferTexture2D(WebGLRenderingContext.FRAMEBUFFER, WebGLRenderingContext.COLOR_ATTACHMENT0,
                WebGLRenderingContext.TEXTURE_2D, this.texture, 0);

            // gl.framebufferTexture2D(texture);
            // Attach the renderBuffer
            gl.framebufferRenderbuffer(WebGLRenderingContext.FRAMEBUFFER, WebGLRenderingContext.DEPTH_ATTACHMENT,
                WebGLRenderingContext.RENDERBUFFER, renderbuffer);

            // To be able to write off screen, we create a renderBuffer and attach
            // it to a framebuffer.

            // Unbind resources
            gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
            gl.bindRenderbuffer(WebGLRenderingContext.RENDERBUFFER, null);
            // renderbuffer.unbind();
            gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);

            gl.deleteRenderbuffer(renderbuffer);
        }
    }

    export class ImgTexture extends ImgSimpleTexture {

        dso:WebGLTexture;
        isPngLoaded:boolean = false;

        constructor(gl:WebGLRenderingContext, public width:number, public height:number, ...filters:number[]) {
            super(gl, width, height, filters);
            this.width = width;
            this.height = height;
            this.dso = gl.createTexture();
        }
    }

    export class Plane {
        x:number = 0.5;
        y:number = 0.5;
        zoom:number = 1.0;
        imgTexture:ImgTexture;

        shader:WebGLProgram;

        imgCoord:number = 0;
        private _changed:boolean = true;
        dsoChanged:boolean = true;

        constructor(gl:WebGLRenderingContext, width:number, height:number, shader:WebGLProgram) {
            this.shader = shader;
            this.imgTexture = new ImgTexture(gl, width, height, WebGLRenderingContext.TEXTURE_MIN_FILTER,
                WebGLRenderingContext.LINEAR_MIPMAP_NEAREST, WebGLRenderingContext.TEXTURE_MIN_FILTER,
                WebGLRenderingContext.LINEAR_MIPMAP_LINEAR);
        }

        get changed() {return this._changed}

        set changed(changed:boolean) {
            if (changed) this.dsoChanged = true;
            this._changed = changed;
        }

        transfSquare():number[] {
            return [-1 / (this.zoom * 2) + this.x,
                -1 / (this.zoom * 2) + this.y,
                1 / (this.zoom * 2) + this.x,
                1 / (this.zoom * 2) + this.y];
        }
    }

    /**
     * Created by dilvan on 11/10/14.
     */
    export interface WebGLViewer {
        windowingWidth:number;
        windowingCenter:number;
        imagesLoaded:boolean;
        jpgsImagesLoaded:boolean;
        imageNumber:number;
        activePlane:number;
        defaultWC:number;
        defaultWW:number;
        imagesPerTexture:number;
        axialImage:number;
        sliceSpacing:number;

        drawImage():void;
        getImageCoord(plane:number):number;
        //getSquare(plane:number):number[];
        getX(plane:number):number;
        getY(plane:number):number;
        getZoom(plane:number):number;
        markChanged():void;
        handleLoadedJpgTexture(i:number, imageJpg:HTMLImageElement):void;
        //handleLoadedJpgTexture(imgText:ImgTexture, imageJpg:HTMLImageElement):void;
        //isImageLoaded(i:number):boolean;
        handleLoadedTexture(i:number, textureImage:HTMLImageElement):void;

        setActiveImage(plane:number, coord:number):void;
        setPlanesCoord(plane:number, x:number, y:number):void;
        setX(plane:number, x:number):void;
        setY(plane:number, y:number):void;
        setZoom(plane:number, zoom:number):void;
        //xCoord(x:number):number;
        //TODO Change this to not use delete
        //delete():void;
        pixels2Units(plane:number, pixels:number):number;//
    }
}