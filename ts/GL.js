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
var br;
(function (br) {
    var usp;
    (function (usp) {
        var dilvanLab;
        (function (dilvanLab) {
            var roi3DEditor;
            (function (roi3DEditor) {
                var GL = (function () {
                    function GL() {
                    }
                    GL.create = function (canvas) {
                        //CanvasElement canvas = getCanvasById(id);
                        var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
                        var context = null;
                        var error = "";
                        names.every(function (name) {
                            try {
                                context = canvas.getContext(name);
                            }
                            catch (e) {
                                error = e.message;
                            }
                            return !context;
                        });
                        if (!context) {
                            GL.handleInitError(canvas.parentElement, error);
                        }
                        //addViewport((GL) context, canvas.getWidth(), canvas.getHeight());
                        return context;
                    };
                    GL.handleInitError = function (container, msg) {
                        var OTHER_PROBLEM = "It doesn't appear your computer can support WebGL.<br/>" +
                            "<a href=\"http://get.webgl.org/troubleshooting/\">Click here for more information.</a>";
                        var GET_A_WEBGL_BROWSER = "This page requires a browser that supports WebGL.<br/>" +
                            "<a href=\"http://get.webgl.org\">Click here to upgrade your browser.</a>";
                        if (container) {
                            var str = WebGLRenderingContext ?
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
                    };
                    /**
                     * Calls the javascript function parseFloat so the parsing will be done in the
                     * way javascript does it normally.
                     *
                     * @param value
                     *            to be converted
                     * @return an double
                     */
                    GL.parseFloat = function (value) {
                        return (value) ? parseFloat(value) : 0;
                    };
                    /**
                     * Calls the javascript function parseInt so the parsing will be done in the
                     * way javascript does it normally.
                     *
                     * @param value
                     *            to be converted
                     * @return an integer
                     */
                    GL.parseInt = function (value) {
                        return (value) ? parseInt(value) : 0;
                    };
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
                    GL.setF = function (gl, shader, name, val) {
                        gl.uniform1f(gl.getUniformLocation(shader, name), val);
                    };
                    GL.setI = function (gl, shader, name, val) {
                        gl.uniform1i(gl.getUniformLocation(shader, name), val);
                    };
                    GL.setUniform1fv = function (gl, shader, name, val) {
                        gl.uniform1fv(gl.getUniformLocation(shader, name), val);
                    };
                    GL.set2fv = function (gl, shader, name, val) {
                        gl.uniform2fv(gl.getUniformLocation(shader, name), val);
                    };
                    GL.set3fv = function (gl, shader, name, val) {
                        gl.uniform3fv(gl.getUniformLocation(shader, name), val);
                    };
                    GL.set4fv = function (gl, shader, name, val) {
                        gl.uniform4fv(gl.getUniformLocation(shader, name), val);
                    };
                    return GL;
                }());
                roi3DEditor.GL = GL;
            })(roi3DEditor = dilvanLab.roi3DEditor || (dilvanLab.roi3DEditor = {}));
        })(dilvanLab = usp.dilvanLab || (usp.dilvanLab = {}));
    })(usp = br.usp || (br.usp = {}));
})(br || (br = {}));
//# sourceMappingURL=GL.js.map