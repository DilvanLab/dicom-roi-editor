

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

    export const LOAD_IMAGES = 0;
    export const LOAD_4X4_IMAGES = 1;

    export class Point {
        constructor(public x:number, public y:number, public z:number=0) {}
    }

    export class ImgSimpleTexture {

        texture:WebGLTexture;
        framebuffer:WebGLFramebuffer;

        canvas:HTMLCanvasElement;
        numImgsRead = 0;

        constructor(gl:WebGLRenderingContext, width:number, height:number, filters:number[]) {

            this.framebuffer = gl.createFramebuffer();
            this.texture = gl.createTexture();

            gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
            gl.bindTexture(gl.TEXTURE_2D, this.texture);

            // Clamp textures to the edge
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

            for (let i = 0; i < filters.length; i += 2)
                gl.texParameteri(gl.TEXTURE_2D, filters[i], filters[i + 1]);

            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA,
                gl.UNSIGNED_BYTE, null);

            // gl.texImageRGBA2D(width, height);
            gl.generateMipmap(gl.TEXTURE_2D);

            // Init Render Buffer
            let renderbuffer = gl.createRenderbuffer();
            gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
            // renderbuffer.bind();
            // renderbuffer.renderbufferStorage(width, height);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width,
                height);

            // Attach texture to buffer
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0,
                gl.TEXTURE_2D, this.texture, 0);

            // gl.framebufferTexture2D(texture);
            // Attach the renderBuffer
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT,
                gl.RENDERBUFFER, renderbuffer);

            // To be able to write off screen, we create a renderBuffer and attach
            // it to a framebuffer.

            // Unbind resources
            gl.bindTexture(gl.TEXTURE_2D, null);
            gl.bindRenderbuffer(gl.RENDERBUFFER, null);
            // renderbuffer.unbind();
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);

            gl.deleteRenderbuffer(renderbuffer);
        }

        createCanvas(width:number, height:number, imgNumber:number) {
            this.canvas = document.createElement('canvas');
            this.canvas.width = width * IMAGES_PER_AXIS;
            this.canvas.height = height * IMAGES_PER_AXIS;
            //document.body.appendChild(this.canvas);
            this.numImgsRead = imgNumber;
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
            this.imgTexture = new ImgTexture(gl, width, height, gl.TEXTURE_MIN_FILTER,
                gl.LINEAR_MIPMAP_NEAREST, gl.TEXTURE_MIN_FILTER,
                gl.LINEAR_MIPMAP_LINEAR);
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
        getX(plane:number):number;
        getY(plane:number):number;
        getZoom(plane:number):number;

        setImageCoord(plane:number, coord:number):void;
        setX(plane:number, x:number):void;
        setY(plane:number, y:number):void;
        setZoom(plane:number, zoom:number):void;

        pixels2Units(plane:number, pixels:number):number;//
    }
}
