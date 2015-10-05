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

module br.usp.dilvanLab.roi3DEditor {

    export class GL {
        static create(canvas:HTMLCanvasElement):WebGLRenderingContext {
            //CanvasElement canvas = getCanvasById(id);
            const names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
            let context:any = null;
            let error = "";
            names.every((name)=> {
                try { context = canvas.getContext(name)}
                catch (e) { error = e.message}
                return !context;
            });
            if (!context) {
                GL.handleInitError(canvas.parentElement, error);
            }
            //addViewport((GL) context, canvas.getWidth(), canvas.getHeight());
            return context;
        }

        private static handleInitError(container, msg:string) {
            let OTHER_PROBLEM =
                "It doesn't appear your computer can support WebGL.<br/>" +
                "<a href=\"http://get.webgl.org/troubleshooting/\">Click here for more information.</a>";
            let GET_A_WEBGL_BROWSER =
                "This page requires a browser that supports WebGL.<br/>" +
                "<a href=\"http://get.webgl.org\">Click here to upgrade your browser.</a>";
            if (container) {
                let str = WebGLRenderingContext ?
                    OTHER_PROBLEM :
                    GET_A_WEBGL_BROWSER;
                if (msg) {
                    str += "<br/><br/>Status: " + msg;
                }
                container.innerHTML =
                    "<table style=\"background-color: #8CE; width: 100%; height: 100%;\"><tr>" +
                    "<td align=\"center\">" +
                    "<div style=\"display: table-cell; vertical-align: middle;\">" +
                    "<div style=\"\">" + str + "</div>" +
                    "</div>" +
                    "</td></tr></table>";
            }
        }

        /**
         * Calls the javascript function parseFloat so the parsing will be done in the
         * way javascript does it normally.
         *
         * @param value
         *            to be converted
         * @return an double
         */
        static parseFloat(value:string) {
            return (value === null) ? 0 : parseFloat(value);
        }

        /**
         * Calls the javascript function parseInt so the parsing will be done in the
         * way javascript does it normally.
         *
         * @param value
         *            to be converted
         * @return an integer
         */
        static parseInt(value:string) {
            return (value === null) ? 0 : parseInt(value);
        }

///**
// * Make a Float32Array from the arguments.
// * @param array
// * @return
// */
//public static Float32ArrayNative toFloat32Array(float... array){
//    Float32ArrayNative ret = Float32ArrayNative.create(array.length);
//    ret.set(array);
//    return ret;
//}

        static setF(gl:WebGLRenderingContext, shader:WebGLProgram, name:string, val:number) {
            gl.uniform1f(gl.getUniformLocation(shader, name), val);
        }

        static setI(gl:WebGLRenderingContext, shader:WebGLProgram, name:string, val:number) {
            gl.uniform1i(gl.getUniformLocation(shader, name), val);
        }

        static setUniform1fv(gl:WebGLRenderingContext, shader:WebGLProgram, name:string, val:Float32Array) {
            gl.uniform1fv(gl.getUniformLocation(shader, name), val);
        }

        static set2fv(gl:WebGLRenderingContext, shader:WebGLProgram, name:string, val:Float32Array) {
            gl.uniform2fv(gl.getUniformLocation(shader, name), val);
        }

        static set3fv(gl:WebGLRenderingContext, shader:WebGLProgram, name:string, val:Float32Array) {
            gl.uniform3fv(gl.getUniformLocation(shader, name), val);
        }

        static set4fv(gl:WebGLRenderingContext, shader:WebGLProgram, name:string, val:Float32Array) {
            gl.uniform4fv(gl.getUniformLocation(shader, name), val);
        }
    }
}
