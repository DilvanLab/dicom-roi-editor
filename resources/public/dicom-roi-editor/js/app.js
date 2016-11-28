var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
                    GL.parseFloat = function (value) {
                        return (value) ? parseFloat(value) : 0;
                    };
                    GL.parseInt = function (value) {
                        return (value) ? parseInt(value) : 0;
                    };
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
var br;
(function (br) {
    var usp;
    (function (usp) {
        var dilvanLab;
        (function (dilvanLab) {
            var roi3DEditor;
            (function (roi3DEditor) {
                var shaders;
                (function (shaders) {
                    shaders.axialFs = "\nprecision highp float;\nprecision highp sampler2D;\nprecision highp int;\n\nuniform int dso;\n\nuniform int imageInd;\nuniform int imagesPerAxis;\nuniform sampler2D uSampler;\nuniform sampler2D uDSO;\nuniform int greyCenter;\nuniform int greyWidth;\nuniform int shifting;\nuniform int rescaleSlope;\nuniform int rescaleIntercept;\n\n// the texCoords passed in from the vertex shader.\nvarying vec2 v_texCoord;\n\nvec4 getTexture(int ind, vec2 p) {\n    float ipa = float(imagesPerAxis);\n\tfloat x = (p.x + mod(float(ind), ipa))  / ipa;\n    float y = (p.y + float(3 - ind/imagesPerAxis)) / ipa;\n\n \tvec4 pix= texture2D(uSampler, vec2(x,y));\n    // For png file\n    float a = float(rescaleIntercept - rescaleSlope*shifting - greyCenter + greyWidth/2);\n    float grey = (float(rescaleSlope) * (pix.r*256.0 + pix.g)*255.0 + a)/float(greyWidth);\n\n    return vec4(grey, grey, grey, pix.a);\n}\n\nvec4 getDSU(int ind, vec2 p){\n    float ipa = float(imagesPerAxis);\n\tfloat x = (p.x + mod(float(ind), ipa))  / ipa;\n    float y = (p.y + float(3 - ind/imagesPerAxis)) / ipa;\n\n    vec4 bytes;\n    if (x<0.0 || x>1.0 || y<0.0 || y>1.0) return vec4(1.0,1.0,1.0,1.0);\n    return texture2D(uDSO, vec2(x,y));\n}\n\n// Axial Plane\nvoid main(void) {\n    if (dso==1) {\n        //PixArray bits;\n        gl_FragColor = getDSU(imageInd, v_texCoord);\n    } else\n        gl_FragColor = getTexture(imageInd, v_texCoord);\n}\n    ";
                    shaders.frontalFs = "\nprecision highp float;\nprecision highp sampler2D;\nprecision highp int;\n\nuniform int dso;\n\nuniform int imagesPerTexture;\nuniform int imagesPerAxis;\nuniform sampler2D uSampler;\nuniform sampler2D uDSO;\nuniform float yCoord;\nuniform int greyCenter;\nuniform int greyWidth;\nuniform int shifting;\nuniform int rescaleSlope;\nuniform int rescaleIntercept;\n\n// the texCoords passed in from the vertex shader.\nvarying vec2 v_texCoord;\n\nstruct PixArray {\n\tbool r[8];\n\tbool g[8];\n\tbool b[8];\n\tbool a[8];\n};\n\nvoid toByte(float num, out bool bits[8]){\n    int j;\n    int byte= int(num*255.0);\n    for (int i = 0; i < 8; i++) {\n        j = byte / 2;\n        bits[i] = (byte - j * 2)==1;\n        byte = j;\n    }\n}\n\nfloat fromByte(bool bits[8]){\n    float x= 0.0;\n    float df = 1.0/255.0; //int byte= int(num*255.0);\n    for (int i = 0; i < 8; i++) {\n        x = x + (bits[i]?df:0.0);\n        df = df *2.0;\n    }\n    return x;\n}\n\nvec4 getTexture(int ind, vec2 p) {\n    float ipa = float(imagesPerAxis);\n    float x = (p.x + mod(float(ind), ipa))  / ipa;\n    float y = (p.y + float(3 - ind/imagesPerAxis)) / ipa;\n\n\tvec4 pix= texture2D(uSampler, vec2(x,y));\n    // For png file\n    float a = float(rescaleIntercept - rescaleSlope*shifting - greyCenter + greyWidth/2);\n    float grey = (float(rescaleSlope) * (pix.r*256.0 + pix.g)*255.0 + a)/float(greyWidth);\n\n    return vec4(grey, grey, grey, pix.a);\n}\n\nvoid getTexture2(int ind, vec2 p, out PixArray pix){\n    float ipa = float(imagesPerAxis);\n    float x = (p.x + mod(float(ind), ipa))  / ipa;\n    float y = (p.y + float(3 - ind/imagesPerAxis)) / ipa;\n\n    vec4 bytes;\n    if (x<0.0 || x>1.0 || y<0.0 || y>1.0) bytes = vec4(1.0,1.0,1.0,1.0);\n    else bytes= texture2D(uDSO, vec2(x,y));\n\n    toByte(bytes.r, pix.r);\n    toByte(bytes.g, pix.g);\n    toByte(bytes.b, pix.b);\n    toByte(bytes.a, pix.a);\n}\n\n// Frontal Plane\nvoid main(void) {\n    float y= yCoord;\n\n    int i= int(   floor((1.0-v_texCoord.y)*float(imagesPerTexture-1)) );\n    float delta = fract((1.0-v_texCoord.y)*float(imagesPerTexture-1));  //y = y0 + (x - x0) (y1-y0)/(x1-x0)\n\n    if (i==(imagesPerTexture-1)) {i--; delta=1.0;}\n\n    if (dso==1) {\n       PixArray bits1;\n       PixArray bits2;\n       PixArray bits;\n\n       getTexture2(i,   vec2(v_texCoord.x, y), bits1);\n       getTexture2(i+1, vec2(v_texCoord.x, y), bits2);\n\n        for (int j=0; j<8; j++) {\n            bits.r[j] = (mix((bits1.r[j]?1.0:0.0), (bits2.r[j]?1.0:0.0), delta) > 0.5);\n            bits.g[j] = (mix((bits1.g[j]?1.0:0.0), (bits2.g[j]?1.0:0.0), delta) > 0.5);\n            bits.b[j] = (mix((bits1.b[j]?1.0:0.0), (bits2.b[j]?1.0:0.0), delta) > 0.5);\n            bits.a[j] = (mix((bits1.a[j]?1.0:0.0), (bits2.a[j]?1.0:0.0), delta) > 0.5);\n        }\n\n        if (bits.r[0])\n            gl_FragColor = vec4(1.0,1.0,1.0,1.0);\n        else\n            gl_FragColor = vec4(0.0,0.0,0.0,1.0);\n          /*\n           gl_FragColor = vec4(\n              fromByte(bits.r),\n              fromByte(bits.g),\n              fromByte(bits.b),\n              fromByte(bits.a));\n          */\n    }\n    else\n        gl_FragColor = mix(\n            getTexture(i,   vec2(v_texCoord.x, y)),\n            getTexture(i+1, vec2(v_texCoord.x, y)),\n            delta);\n}\n\n   ";
                    shaders.jpegTransfFs = "\nprecision highp float;\nprecision highp sampler2D;\nprecision highp int;\n\nuniform sampler2D uSampler;\nuniform int rescaleSlope;\nuniform int rescaleIntercept;\nuniform int shifting;\nuniform int defaultWW;\nuniform int defaultWC;\n\n// the texCoords passed in from the vertex shader.\nvarying vec2 v_texCoord;\n\nvoid main(void) {\n\tvec4 pix = texture2D(uSampler, vec2(v_texCoord.x, v_texCoord.y));\n\n\t// For jpg file\n    float x1 = (pix.r*float(defaultWW) - float(rescaleIntercept - rescaleSlope*shifting - defaultWC + defaultWW/2))/float(rescaleSlope);\n\tint x = int(floor(x1));\n    gl_FragColor = vec4(float(x/256) / 255.0, float(x - (x/256 * 256))/255.0, 0.0, pix.a);\n}\n    ";
                    shaders.moveFs = "\nprecision highp float;\nprecision highp sampler2D;\nprecision highp int;\n\nuniform sampler2D uDSO;\n\nuniform float sphereX; //X coordinate of the sphere center (max 1.0)\nuniform float sphereY; //Y coordinate of the sphere center (max 1.0)\nuniform float sphereRadius; //in units\n\nuniform float dy;\n\n// the texCoords passed in from the vertex shader.\nvarying vec2 v_texCoord;\n\nfloat square(float x) {return x*x;}\n\nbool isInsideCircle(vec2 pt) {\n    return (square(pt.x - sphereX) + square((pt.y - sphereY)*dy) <= square(sphereRadius));\n}\n\nvoid main(void) {\n\n    vec4 masks= texture2D(uDSO, v_texCoord);\n\n    if (!isInsideCircle(v_texCoord)) {\n        gl_FragColor = masks;\n        return;\n    }\n\n    vec4 ret = vec4(0.0);\n    vec4 k;\n    float power = 1.0;\n\n    for (int i=0; i<8; i++) {\n        k = mod(masks, 2.0); masks= floor(masks/2.0);\n        //if (i==bit) {\n            k.r = 1.0;\n        //}\n        ret += k*power;\n        power *= 2.0;\n    }\n    gl_FragColor = ret;\n}\n    ";
                    shaders.sagittalFs = "\nprecision highp float;\nprecision highp sampler2D;\nprecision highp int;\n\nuniform int dso;\n\nuniform int imagesPerTexture;\nuniform int imagesPerAxis;\nuniform sampler2D uSampler;\nuniform sampler2D uDSO;\nuniform float yCoord;\nuniform int greyCenter;\nuniform int greyWidth;\nuniform int shifting;\nuniform int rescaleSlope;\nuniform int rescaleIntercept;\n\n// the texCoords passed in from the vertex shader.\nvarying vec2 v_texCoord;\n\nvec4 getTexture(int ind, vec2 p) {\n    float ipa = float(imagesPerAxis);\n    float x = (p.x + mod(float(ind), ipa))  / ipa;\n    float y = (p.y + float(3 - ind/imagesPerAxis)) / ipa;\n\n \tvec4 pix= texture2D(uSampler, vec2(x,y));\n    // For png file\n    float a = float(rescaleIntercept - rescaleSlope*shifting - greyCenter + greyWidth/2);\n    float grey = (float(rescaleSlope) * (pix.r*256.0 + pix.g)*255.0 + a)/float(greyWidth);\n\n    return vec4(grey, grey, grey, pix.a);\n}\n\nvec4 getDso(int ind, float px, float py){\n    float ipa = float(imagesPerAxis);\n    float x = (px + mod(float(ind), ipa))  / ipa;\n    float y = (py + float(3 - ind/imagesPerAxis)) / ipa;\n\n    if (x<0.0 || x>1.0 || y<0.0 || y>1.0) return vec4(1.0,1.0,1.0,1.0);\n    return texture2D(uDSO, vec2(x,y));\n}\n\n// Sagittal Plane\nvoid main(void) {\n    float x= yCoord;\n\n\tint i= int(   floor((1.0-v_texCoord.y)*float(imagesPerTexture-1)) );\n    float delta = fract((1.0-v_texCoord.y)*float(imagesPerTexture-1));  //y = y0 + (x - x0) (y1-y0)/(x1-x0)\n\n    if (i==(imagesPerTexture-1)) {i--; delta=1.0;}\n\n    if (dso==1) {\n        vec4 pix1 = getDso(i,   x, (1.0 - v_texCoord.x));\n        vec4 pix2 = getDso(i+1, x, (1.0 - v_texCoord.x));\n\n        vec4 ret = vec4(0.0);\n        vec4 k, k1, k2;\n        float power = 1.0;\n\n        for (int i=0; i<8; i++) {\n            k1 = mod(pix1, 2.0); pix1= floor(pix1/2.0);\n            k2 = mod(pix2, 2.0); pix2= floor(pix2/2.0);\n            k = floor(mix(k1, k2, delta)*(2.0-exp2(-8.0)));      // 2^-8 smallest float in lowp precision\n            ret += k*power;\n            power *= 2.0;\n        }\n        gl_FragColor = ret;\n    } else\n        gl_FragColor = mix(\n            getTexture(i,   vec2(x, (1.0 - v_texCoord.x))),\n            getTexture(i+1, vec2(x, (1.0 - v_texCoord.x))),\n            delta);\n}\n    ";
                    shaders.simpleFs = "\nprecision highp float;\nprecision highp sampler2D;\nprecision highp int;\n\nuniform sampler2D uSampler;\nuniform sampler2D uDSO;\n\n// the texCoords passed in from the vertex shader.\nvarying vec2 v_texCoord;\nuniform float sphereX; //X coordinate of the sphere center (max 1.0)\nuniform float sphereY; //Y coordinate of the sphere center (max 1.0)\n//uniform float sphereZ; //Z coordinate of the sphere center, proportional to X and Y\nuniform float sphereRadius; //in units\nuniform float zoom;\nuniform float alpha;\nuniform float beta;\nuniform float lineX;\nuniform float lineY;\n\nfloat square(float x) {return x*x;}\n\nbool isLine(float x, float y) {\n    float d= 0.1/zoom;\n    if (x>lineX-d && x<lineX+d && y>lineY-d && y<lineY+d) return false;\n    d= 0.002/zoom;\n    if (x>(lineX-d) && x<(lineX+d) || y>(lineY-d) && y<(lineY+d)) return true;\n    return false;\n}\n\nbool isCircle(vec2 pt) {\n    float r = square(pt.x - sphereX) + square(pt.y - sphereY);\n    return (r >= square(sphereRadius*alpha-0.002) && r <= square(sphereRadius*alpha+0.002));\n}\n\n// Return mask with border detection\nvec4 findBorder(float x, float y, vec4 p) {\n    //    d\n    //  a p b\n    //    c\n\n    // vec4 p = floor(texture2D(uDSO, vec2(x,   y   )) *255.0);\n    //TODO: Change the 512 for something that changes with the resolution\n    float dt = 1.0/512.0;\n    vec4 a = floor(texture2D(uDSO, vec2(x-dt,y   )) *255.0);\n    vec4 b = floor(texture2D(uDSO, vec2(x+dt,y   )) *255.0);\n    vec4 c = floor(texture2D(uDSO, vec2(x,   y-dt)) *255.0);\n    vec4 d = floor(texture2D(uDSO, vec2(x,   y+dt)) *255.0);\n    vec4 k, ka, kb, kc, kd;\n\n    float power= 1.0;\n    vec4 mask = vec4(0.0, 0.0, 0.0, 0.0);\n\n    for (int i = 0; i < 8; i++) {\n        k  = mod(p, 2.0); p= floor(p/2.0);\n        if (k==vec4(0.0,0.0,0.0,0.0)) continue;\n        ka = mod(a, 2.0); a= floor(a/2.0);\n        kb = mod(b, 2.0); b= floor(b/2.0);\n        kc = mod(c, 2.0); c= floor(c/2.0);\n        kd = mod(d, 2.0); d= floor(d/2.0);\n\n        mask += (k*mod(ka*kb*kc*kd + 1.0, 2.0))*power;\n        power *= 2.0;\n    }\n    return mask;\n}\n\nvec4 getTexture(vec2 p) {\n\n    vec4 mask = floor(texture2D(uDSO, vec2(p.x, p.y)) *255.0);\n    mask = findBorder(p.x, p.y, mask);\n\n\tvec4 pix= texture2D(uSampler, p);\n    float grey = pix.r;\n\n    float red = 0.0;\n    if (mod(mask, 2.0).r==1.0) {red = 1.0; grey = grey *0.3;}\n    else red = grey;\n\n    return vec4(red, grey, grey, 1.0);//pix.a);\n}\n\nvoid main(void) {\n\t//\tCorrect compression in x axis (for sagittal and frontal\n    vec2 pt = vec2(v_texCoord.x/alpha+beta, v_texCoord.y);\n\n    // If it's outside the view\n    if (pt.x<0.0 || pt.x>1.0 || pt.y<0.0 || pt.y>1.0) {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        return;\n    }\n\n    // Test if it's inside the circle\n    if (isLine(pt.x, pt.y))//v_texCoord.x, v_texCoord.y))\n        gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0); // green color\n    // Test if it's inside the circle\n    else if (isCircle(v_texCoord))\n        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0); // blue color\n    else\n\t\tgl_FragColor = getTexture(pt);\n}\n\n    ";
                    shaders.simpleVs = "\nprecision highp float;\nprecision highp sampler2D;\nprecision highp int;\n\nattribute vec2 a_texCoord;\nattribute vec2 a_position;\n\nvarying vec2 v_texCoord;\n\nvoid main() {\n\tgl_Position = vec4(a_position, 0, 1);\n\t// pass the texCoord to the fragment shader\n   \t// The GPU will interpolate this value between points\n   \tv_texCoord = a_texCoord;\n}\n    ";
                    shaders.stampFs = "\nprecision highp float;\nprecision highp sampler2D;\nprecision highp int;\n\nuniform int imagesPerAxis;\nuniform sampler2D uDSO;\nuniform sampler2D spheres;\n\nuniform int baseInd;   //True index of the first image in this set\nuniform float dz;      //Distance between slices, in units\nuniform int cmdSize;\n//uniform float sphereX;\n//uniform float sphereY;\n//uniform float sphereZ;\n//vec3 sphe = vec3(sphereX, sphereY, sphereZ);\n\nuniform float maxX;\nconst int maxSize = 30000;\n//uniform vec4 spheres1[maxSize];\nuniform float sphereRadius; //in units\n\n// the texCoords passed in from the vertex shader.\nvarying vec2 v_texCoord;\n\nfloat square(float x) {return x*x;}\n\nvec4 getSphere(int i) {\n    float j = float(i);\n    return texture2D(spheres, vec2(mod(j,maxX)/maxX, 1.0 - floor(j/maxX)/maxX));\n}\n\n//   It took 5 seconds (4s with cube test) in the one line test (one line from\n//   the top to the botton with default cursor radius)\nbool isInsideSphere(vec3 plane) {\n    vec3 delta;\n    for(int i=0; i<maxSize; i++) {\n        if (i>=cmdSize) break;\n\n        //delta = plane-spheres1[i].xyz;\n        delta = plane-getSphere(i).xyz;\n\n        // Test first the cube where the sphere is\n        if (delta.x>sphereRadius || delta.y>sphereRadius) continue;\n\n        if (square(delta.x) + square(delta.y) <= square(sphereRadius) - square(delta.z))\n            return true;\n    }\n    return false;\n}\n\n//   Disposition of images in the 4x4 grid\n/*   0  1  2  3\n     4  5  6  7\n     8  9 10 11\n    12 13 14 15\n*/\nvoid main(void) {\n    vec2 p = v_texCoord;\n\n    // Calculate image index from point p\n    float ipa = float(imagesPerAxis);\n    float indX = ceil(p.x*ipa)-1.0;\n    if (indX<0.0) indX = 0.0;\n    float indY = ceil(p.y*ipa)-1.0;\n    if (indY<0.0) indY = 0.0;\n        float ind = (3.0-indY) * ipa + indX;\n\n    vec4 masks = texture2D(uDSO, p);\n\tvec2 p2 = vec2(fract(p.x*ipa), fract(p.y*ipa));\n\n    bool isInside = isInsideSphere(vec3(p2, (ind + float(baseInd)) * dz));\n\n    vec4 ret = vec4(0.0, 0.0, 0.0, 0.0);\n    vec4 k;\n\n    masks= floor(masks*255.0);\n    int bit = 0;\n    float power = 1.0;\n\n    for (int i = 0; i < 8; i++) {\n        k = mod(masks, 2.0); masks= floor(masks/2.0);\n        //if (i==bit) {\n            k.r = (isInside?1.0:k.r);\n        //}\n        ret += k*power;\n        power *= 2.0;\n    }\n    gl_FragColor = ret/255.0;\n}\n    ";
                    shaders.transfVs = "\nprecision highp float;\nprecision highp sampler2D;\nprecision highp int;\n\nattribute vec2 a_texCoord;\nattribute vec2 a_position;\n\nuniform vec2 u_translation;\n\nvarying vec2 v_texCoord;\n\nvoid main() {\n\tgl_Position = vec4(a_position + u_translation, 0, 1);\n\t// pass the texCoord to the fragment shader\n   \t// The GPU will interpolate this value between points\n   \tv_texCoord = a_texCoord;\n}\n    ";
                })(shaders = roi3DEditor.shaders || (roi3DEditor.shaders = {}));
            })(roi3DEditor = dilvanLab.roi3DEditor || (dilvanLab.roi3DEditor = {}));
        })(dilvanLab = usp.dilvanLab || (usp.dilvanLab = {}));
    })(usp = br.usp || (br.usp = {}));
})(br || (br = {}));
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
                        gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_S, WebGLRenderingContext.CLAMP_TO_EDGE);
                        gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_T, WebGLRenderingContext.CLAMP_TO_EDGE);
                        for (var i = 0; i < filters.length; i += 2)
                            gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, filters[i], filters[i + 1]);
                        gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, width, height, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, null);
                        gl.generateMipmap(WebGLRenderingContext.TEXTURE_2D);
                        var renderbuffer = gl.createRenderbuffer();
                        gl.bindRenderbuffer(WebGLRenderingContext.RENDERBUFFER, renderbuffer);
                        gl.renderbufferStorage(WebGLRenderingContext.RENDERBUFFER, WebGLRenderingContext.DEPTH_COMPONENT16, width, height);
                        gl.framebufferTexture2D(WebGLRenderingContext.FRAMEBUFFER, WebGLRenderingContext.COLOR_ATTACHMENT0, WebGLRenderingContext.TEXTURE_2D, this.texture, 0);
                        gl.framebufferRenderbuffer(WebGLRenderingContext.FRAMEBUFFER, WebGLRenderingContext.DEPTH_ATTACHMENT, WebGLRenderingContext.RENDERBUFFER, renderbuffer);
                        gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
                        gl.bindRenderbuffer(WebGLRenderingContext.RENDERBUFFER, null);
                        gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
                        gl.deleteRenderbuffer(renderbuffer);
                    }
                    ImgSimpleTexture.prototype.createCanvas = function (width, height, imgNumber) {
                        this.canvas = document.createElement('canvas');
                        this.canvas.width = width * roi3DEditor.IMAGES_PER_AXIS;
                        this.canvas.height = height * roi3DEditor.IMAGES_PER_AXIS;
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
                        this._windowingCenter = DEFAULT_WINDOWING_CENTER;
                        this._windowingWidth = DEFAULT_WINDOWING_WIDTH;
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
                    WebGLViewerImpl.createShader = function (gl, shader, code) {
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
                    WebGLViewerImpl.prototype.defIntVars = function (shader) {
                        this.gl.useProgram(shader);
                        roi3DEditor.GL.setI(this.gl, shader, "rescaleSlope", this.rescaleSlope);
                        roi3DEditor.GL.setI(this.gl, shader, "rescaleIntercept", this.rescaleIntercept);
                        roi3DEditor.GL.setI(this.gl, shader, "shifting", this.shifting);
                    };
                    WebGLViewerImpl.prototype.drawImage = function () {
                        if (this.numImgs === 0 || (this.loadCounter === 0 && this.loadJpgsCounter === 0))
                            return;
                        var gl = this.gl;
                        this.genPlane(this.axial);
                        this.genPlane(this.sagittal);
                        this.genPlane(this.frontal);
                        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
                        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                        if (this._activePlane) {
                            this.showPlane(this._activePlane, 1, [0, 0]);
                            return;
                        }
                        this.showPlane(this.sagittal, 0.5, [-0.5, -0.5]);
                        this.showPlane(this.frontal, 0.5, [0.5, 0.5]);
                        this.showPlane(this.axial, 0.5, [-0.5, 0.5]);
                    };
                    WebGLViewerImpl.prototype.genAxial = function (imgTexture, dso) {
                        var gl = this.gl;
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
                        get: function () {
                            return Math.round(this.planes[roi3DEditor.AXIAL].imgCoord * this.numImgs);
                        },
                        set: function (n) {
                            throw new Error("AxialImage is read only.");
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(WebGLViewerImpl.prototype, "defaultWC", {
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
                        get: function () {
                            return this._defaultWW;
                        },
                        set: function (n) {
                            throw new Error("DefaultWW is read only.");
                        },
                        enumerable: true,
                        configurable: true
                    });
                    WebGLViewerImpl.prototype.getImageCoord = function (plane) {
                        return this.planes[plane].imgCoord;
                    };
                    Object.defineProperty(WebGLViewerImpl.prototype, "imagesPerTexture", {
                        get: function () {
                            return roi3DEditor.IMAGES_PER_TEXTURE;
                        },
                        set: function (n) {
                            throw new Error("ImagesPerTexture is read only.");
                        },
                        enumerable: true,
                        configurable: true
                    });
                    WebGLViewerImpl.prototype.getSquare = function (plane) {
                        return this.planes[plane].transfSquare();
                    };
                    Object.defineProperty(WebGLViewerImpl.prototype, "windowingCenter", {
                        get: function () {
                            return this._windowingCenter;
                        },
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
                        get: function () {
                            return this._windowingWidth;
                        },
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
                    WebGLViewerImpl.prototype.getX = function (plane) {
                        return this.planes[plane].x;
                    };
                    WebGLViewerImpl.prototype.getY = function (plane) {
                        return this.planes[plane].y;
                    };
                    WebGLViewerImpl.prototype.getZoom = function (plane) {
                        return this.planes[plane].zoom;
                    };
                    WebGLViewerImpl.prototype.markChanged = function () {
                        this.setActiveImage(roi3DEditor.AXIAL, 0.5);
                        this.setActiveImage(roi3DEditor.SAGITTAL, 0.5);
                        this.setActiveImage(roi3DEditor.FRONTAL, 0.5);
                        this.axial.changed = true;
                        this.sagittal.changed = true;
                        this.frontal.changed = true;
                    };
                    WebGLViewerImpl.prototype.handleLoadedJpgTexture = function (i, imageJpg) {
                        var text = this.texture[i];
                        if (!text.isPngLoaded)
                            this.handleOneLoadedJpgTexture(text, imageJpg);
                        if (i === 0)
                            this.drawImage();
                    };
                    WebGLViewerImpl.prototype.handleOneLoadedJpgTexture = function (imgText, imageJpg) {
                        var gl = this.gl;
                        var jpgTexture = gl.createTexture();
                        this.loadTexture(jpgTexture, imageJpg);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, imgText.framebuffer);
                        gl.viewport(0, 0, imgText.width, imgText.height);
                        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                        gl.useProgram(this.jpegTransfShader);
                        this.createUntBuf(this.jpegTransfShader, "a_position", -1.0, -1.0, 1.0, 1.0);
                        this.createUntBuf(this.jpegTransfShader, "a_texCoord", 0.0, 0.0, 1.0, 1.0);
                        gl.activeTexture(gl.TEXTURE0);
                        gl.bindTexture(gl.TEXTURE_2D, jpgTexture);
                        roi3DEditor.GL.setI(gl, this.jpegTransfShader, "uSampler", 0);
                        roi3DEditor.GL.set2fv(gl, this.jpegTransfShader, "u_translation", new Float32Array([0, 0]));
                        gl.drawArrays(gl.TRIANGLES, 0, 6);
                        gl.bindTexture(gl.TEXTURE_2D, imgText.texture);
                        gl.generateMipmap(gl.TEXTURE_2D);
                        gl.bindTexture(gl.TEXTURE_2D, null);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                        gl.deleteTexture(jpgTexture);
                    };
                    WebGLViewerImpl.prototype.loadTexture = function (text, textureImage) {
                        var gl = this.gl;
                        gl.bindTexture(gl.TEXTURE_2D, text);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
                        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureImage);
                        gl.bindTexture(gl.TEXTURE_2D, null);
                    };
                    WebGLViewerImpl.prototype.numImagesInTexture = function (i) {
                        var size = Math.floor(this.numImgs / (roi3DEditor.IMAGES_PER_TEXTURE - 1));
                        var left = this.numImgs % (roi3DEditor.IMAGES_PER_TEXTURE - 1);
                        size = (left === 0 || left === 1) ? size : size + 1;
                        if (i !== size - 1 || left == 1)
                            return roi3DEditor.IMAGES_PER_TEXTURE;
                        return (left == 0) ? roi3DEditor.IMAGES_PER_TEXTURE - 1 : left;
                    };
                    WebGLViewerImpl.prototype.init = function (pref, series) {
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
                        if (pref.windowOverride) {
                            defaultWW = "" + pref.overrideWidth;
                            defaultWC = "" + pref.overrideCenter;
                        }
                        var pixelRepresentation = roi3DEditor.GL.parseInt(series.pixelRepresentation);
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
                        this.loadJpgsCounter = 0;
                        this.loadCounter = 0;
                        this.dy = (roi3DEditor.IMAGES_PER_TEXTURE - 1) / this.numImgs * 2;
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
                        this.defIntVars(this.jpegTransfShader);
                        roi3DEditor.GL.setI(gl, this.jpegTransfShader, "defaultWC", this._defaultWC);
                        roi3DEditor.GL.setI(gl, this.jpegTransfShader, "defaultWW", this._defaultWW);
                        gl.clearColor(0, 0, 0.8, 1);
                        for (var i = 0; i < this.numImgs - 1; i += this.imagesPerTexture - 1) {
                            var text = new roi3DEditor.ImgTexture(gl, this.imgWidth * roi3DEditor.IMAGES_PER_AXIS, this.imgHeight * roi3DEditor.IMAGES_PER_AXIS, gl.TEXTURE_MAG_FILTER, gl.NEAREST, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                            this.texture.push(text);
                            if (this.mode === roi3DEditor.LOAD_IMAGES) {
                                text.createCanvas(this.imgWidth, this.imgHeight, this.numImagesInTexture(i));
                            }
                        }
                    };
                    WebGLViewerImpl.prototype.isImageLoaded = function (i) {
                        return !this.texture &&
                            i < this.texture.length && !this.texture[i] &&
                            this.texture[i].isPngLoaded;
                    };
                    WebGLViewerImpl.prototype.setActiveImage = function (plane, coord) {
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
                    WebGLViewerImpl.prototype.setX = function (plane, x) {
                        this.planes[plane].x = x;
                    };
                    WebGLViewerImpl.prototype.setY = function (plane, y) {
                        this.planes[plane].y = y;
                    };
                    WebGLViewerImpl.prototype.setZoom = function (plane, zoom) {
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
                        var zoomBuffer = this.createUntBuf(this.simpleShader, "a_texCoord", aux[0], aux[1], aux[2], aux[3]);
                        gl.activeTexture(gl.TEXTURE0);
                        gl.bindTexture(gl.TEXTURE_2D, plane.imgTexture.texture);
                        roi3DEditor.GL.setI(gl, this.simpleShader, "uSampler", 0);
                        gl.activeTexture(gl.TEXTURE1);
                        gl.bindTexture(gl.TEXTURE_2D, plane.imgTexture.dso);
                        roi3DEditor.GL.setI(gl, this.simpleShader, "uDSO", 1);
                        var alpha = (plane === this.axial) ? 1 : this.xCorrection;
                        var beta = (alpha - 1.0) / (2.0 * alpha);
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
                        roi3DEditor.GL.setF(gl, this.simpleShader, "lineX", lineX);
                        roi3DEditor.GL.setF(gl, this.simpleShader, "lineY", lineY);
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
                    WebGLViewerImpl.prototype.xCoord = function (x) {
                        return x;
                    };
                    WebGLViewerImpl.prototype.delete = function () {
                    };
                    WebGLViewerImpl.prototype.pixels2Units = function (plane, pixels) {
                        var dx = pixels / this.gl.canvas.offsetWidth;
                        return dx / this.getZoom(plane);
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
                            if (_this.mode === roi3DEditor.LOAD_IMAGES) {
                                var c = Math.floor(i / (roi3DEditor.IMAGES_PER_TEXTURE - 1));
                                var pos = i % (roi3DEditor.IMAGES_PER_TEXTURE - 1);
                                if (c === _this.texture.length) {
                                    c--;
                                    pos = roi3DEditor.IMAGES_PER_TEXTURE - 1;
                                }
                                var posX = pos % roi3DEditor.IMAGES_PER_AXIS * _this.imgWidth;
                                var posY = Math.floor(pos / roi3DEditor.IMAGES_PER_AXIS) * _this.imgHeight;
                                _this.texture[c].canvas.getContext('2d').drawImage(image, posX, posY);
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
                                image = null;
                                _this.loadCounter += _this.numImagesInTexture(i);
                                if (_this.loadCounter > _this.numImgs)
                                    _this.loadCounter = _this.numImgs;
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
var br;
(function (br) {
    var usp;
    (function (usp) {
        var dilvanLab;
        (function (dilvanLab) {
            var roi3DEditor;
            (function (roi3DEditor) {
                var Context = (function () {
                    function Context(viewer) {
                        this.viewer = viewer;
                        this.mouse = { x: 0, y: 0 };
                        this.actual = { x: 0, y: 0 };
                        this.mouseIsDown = false;
                        this.tool = 'gradient';
                    }
                    Context.getMousePos = function (canvas, event) {
                        var rect = canvas.getBoundingClientRect();
                        return {
                            x: event.clientX - rect.left,
                            y: event.clientY - rect.top
                        };
                    };
                    Context.prototype.initDrawingHandlers = function () {
                        var _this = this;
                        var vi = this.viewer;
                        var drawing = vi.gl.canvas;
                        var modes = {};
                        modes['zoom'] = new ZoomMode(this);
                        modes['scroll'] = new ScrollMode(this);
                        modes['gradient'] = new GradientMode(this);
                        modes['move'] = new MoveMode(this);
                        drawing.onmousemove = function (event) {
                            if (!_this.mouseIsDown)
                                return;
                            _this.mouse = Context.getMousePos(drawing, event);
                            event.preventDefault();
                            if (event.shiftKey) {
                                modes['zoom'].onmousemove(event);
                            }
                            else if (modes[_this.tool])
                                modes[_this.tool].onmousemove(event);
                        };
                        drawing.onmousedown = function (event) {
                            _this.mouse = Context.getMousePos(drawing, event);
                            _this.actual.x = _this.mouse.x;
                            _this.actual.y = _this.mouse.y;
                            if (_this.mouseIsDown)
                                return;
                            _this.mouseIsDown = true;
                            if (event.shiftKey) {
                                _this.tool = 'zoom';
                            }
                            else if (event.metaKey) {
                                _this.tool = 'move';
                            }
                            else if (modes[_this.tool])
                                modes[_this.tool].onmousedown(event);
                            else {
                            }
                        };
                        drawing.ondblclick = function (event) {
                            modes[_this.tool].ondblclick(event);
                        };
                        drawing.onmouseup = function (event) {
                            _this.mouse = Context.getMousePos(drawing, event);
                            if (!_this.mouseIsDown)
                                return;
                            _this.mouseIsDown = false;
                            if (event.shiftKey || event.metaKey) {
                                return;
                            }
                            else if (modes[_this.tool])
                                modes[_this.tool].onmouseup(event);
                        };
                        drawing.onwheel = function (event) {
                            event.preventDefault();
                            if ((_this.tool === 'add' || _this.tool == 'subtract') && event.shiftKey) {
                                modes['threeDDrawTool'].onmousewheel(event);
                                return;
                            }
                            modes['scroll'].onmousewheel(event);
                        };
                        drawing.onkeydown = function (event) {
                            event.preventDefault();
                            modes['zoom'].onkeydown(event);
                        };
                        drawing.onmouseout = function (event) {
                            if (_this.tool == 'threeDDraw')
                                modes['threeDDraw'].onmouseout(event);
                        };
                    };
                    return Context;
                }());
                roi3DEditor.Context = Context;
                var Mode = (function () {
                    function Mode(context) {
                        this.context = context;
                        this.LEFT_ARROW = 37;
                        this.UP_ARROW = 38;
                        this.RIGHT_ARROW = 39;
                        this.DOWN_ARROW = 40;
                        this.viewer = context.viewer;
                    }
                    Mode.prototype.whichPlane = function (event) {
                        var canvas = this.viewer.gl.canvas;
                        if (this.viewer.activePlane == roi3DEditor.ALL) {
                            var pos = Context.getMousePos(canvas, event);
                            console.log('getPlane: ' + pos.x + ' ' + pos.y + ' canvas: ' + canvas.width + ' ' + canvas.height);
                            if (pos.x < canvas.width / 2 && pos.y < canvas.height / 2)
                                return roi3DEditor.AXIAL;
                            if (pos.x > canvas.width / 2 && pos.y > canvas.height / 2)
                                return -1;
                            if (pos.x > canvas.width / 2)
                                return roi3DEditor.FRONTAL;
                            if (pos.y > canvas.height / 2)
                                return roi3DEditor.SAGITTAL;
                            return -1;
                        }
                        else
                            return this.viewer.activePlane;
                    };
                    Mode.prototype.getMouse = function (event) {
                        var ret = Context.getMousePos(this.viewer.gl.canvas, event);
                        if (this.viewer.activePlane == roi3DEditor.ALL) {
                            var x = this.viewer.gl.canvas.width / 2;
                            var y = this.viewer.gl.canvas.height / 2;
                            if (ret.x > x)
                                ret.x = (ret.x - x);
                            if (ret.y > y)
                                ret.y = (ret.y - y);
                        }
                        console.log('mouse: ' + ret.x + ' ' + ret.y);
                        return ret;
                    };
                    Mode.prototype.setWindowingValues = function (center, width) {
                        if (center == 0 && width == 0) {
                            center = this.viewer.defaultWC;
                            width = this.viewer.defaultWW;
                        }
                        this.viewer.windowingCenter = center;
                        this.viewer.windowingWidth = width;
                    };
                    Mode.prototype.onkeydown = function (event) { };
                    Mode.prototype.onmousedown = function (event) { };
                    Mode.prototype.onmousemove = function (event) { };
                    Mode.prototype.onmouseout = function (event) { };
                    Mode.prototype.onmouseup = function (event) { };
                    Mode.prototype.onmousewheel = function (event) { };
                    Mode.prototype.ondblclick = function (event) {
                        if (this.viewer.activePlane == roi3DEditor.ALL) {
                            var plane = this.whichPlane(event);
                            this.viewer.activePlane = plane;
                        }
                        else
                            this.viewer.activePlane = roi3DEditor.ALL;
                        this.viewer.drawImage();
                    };
                    return Mode;
                }());
                var GradientMode = (function (_super) {
                    __extends(GradientMode, _super);
                    function GradientMode(context) {
                        _super.call(this, context);
                    }
                    GradientMode.prototype.onmousedown = function (event) {
                    };
                    GradientMode.prototype.onmousemove = function (event) {
                        if (!this.context.mouseIsDown)
                            return;
                        var deltaWW = ((event.movementX * 4) / this.viewer.gl.canvas.width) * this.viewer.defaultWW;
                        var deltaWC = ((event.movementY * 4) / this.viewer.gl.canvas.height) * this.viewer.defaultWC;
                        this.setWindowingValues(this.viewer.windowingCenter + deltaWC, this.viewer.windowingWidth + deltaWW);
                        this.viewer.drawImage();
                    };
                    GradientMode.prototype.onmouseup = function (event) {
                    };
                    return GradientMode;
                }(Mode));
                var MoveMode = (function (_super) {
                    __extends(MoveMode, _super);
                    function MoveMode(context) {
                        _super.call(this, context);
                    }
                    MoveMode.prototype.onmousedown = function (event) {
                    };
                    MoveMode.prototype.onmousemove = function (event) {
                        var plane = this.whichPlane(event);
                        if (plane == -1)
                            return;
                        var deltaX = this.viewer.pixels2Units(plane, this.context.mouse.x - this.context.actual.x);
                        var deltaY = -this.viewer.pixels2Units(plane, this.context.mouse.y - this.context.actual.y);
                        if (this.viewer.activePlane == 3) {
                            deltaX = deltaX * 2;
                            deltaY = deltaY * 2;
                        }
                        this.viewer.setX(plane, this.viewer.getX(plane) - deltaX);
                        this.viewer.setY(plane, this.viewer.getY(plane) - deltaY);
                        this.viewer.drawImage();
                        this.context.actual.x = this.context.mouse.x;
                        this.context.actual.y = this.context.mouse.y;
                    };
                    MoveMode.prototype.onmouseup = function (event) {
                    };
                    return MoveMode;
                }(Mode));
                var ScrollMode = (function (_super) {
                    __extends(ScrollMode, _super);
                    function ScrollMode(context) {
                        _super.call(this, context);
                    }
                    ScrollMode.prototype.resetSlider = function () {
                    };
                    ScrollMode.prototype.onmousedown = function (event) {
                        var plane = this.whichPlane(event);
                        if (plane == -1)
                            return;
                        var mouse = this.getMouse(event);
                        this.resetSlider();
                        this.viewer.setPlanesCoord(plane, mouse.x, mouse.y);
                        this.viewer.drawImage();
                    };
                    ScrollMode.prototype.onmousemove = function (event) {
                        var plane = this.whichPlane(event);
                        if (plane == -1)
                            return;
                        var mouse = this.getMouse(event);
                        this.resetSlider();
                        this.viewer.setPlanesCoord(plane, mouse.x, mouse.y);
                        this.viewer.drawImage();
                    };
                    ScrollMode.prototype.onmousewheel = function (event) {
                        var plane = this.whichPlane(event);
                        if (plane == -1)
                            return;
                        var plane2Act = (this.viewer.activePlane == roi3DEditor.ALL) ? plane : this.viewer.activePlane;
                        var i = Math.max(Math.min(this.viewer.getImageCoord(plane2Act) + (event.deltaY > 0 ? 1.0 / this.viewer.imageNumber : -1.0 / this.viewer.imageNumber), 1), 0);
                        this.viewer.setActiveImage(plane2Act, i);
                        this.viewer.drawImage();
                    };
                    return ScrollMode;
                }(Mode));
                var ZoomMode = (function (_super) {
                    __extends(ZoomMode, _super);
                    function ZoomMode(context) {
                        _super.call(this, context);
                    }
                    ZoomMode.prototype.onkeydown = function (event) {
                        var zoom;
                        var key = event.charCode;
                        alert('Key event: ' + key);
                        switch (key) {
                            case this.UP_ARROW:
                                zoom = this.viewer.getZoom(roi3DEditor.AXIAL) / 0.9;
                                this.viewer.setZoom(roi3DEditor.AXIAL, zoom);
                                break;
                            case this.DOWN_ARROW:
                                zoom = this.viewer.getZoom(roi3DEditor.AXIAL) * 0.9;
                                this.viewer.setZoom(roi3DEditor.AXIAL, zoom);
                                break;
                            case this.RIGHT_ARROW:
                                var i = Math.max(Math.min(this.viewer.getImageCoord(roi3DEditor.AXIAL) + (1.0 / this.viewer.imageNumber), 1), 0);
                                this.viewer.setActiveImage(roi3DEditor.AXIAL, i);
                                break;
                            case this.LEFT_ARROW:
                                i = Math.max(Math.min(this.viewer.getImageCoord(roi3DEditor.AXIAL) - (1.0 / this.viewer.imageNumber), 1), 0);
                                this.viewer.setActiveImage(roi3DEditor.AXIAL, i);
                                break;
                        }
                        this.viewer.drawImage();
                    };
                    ZoomMode.prototype.onmousedown = function (event) {
                    };
                    ZoomMode.prototype.onmousemove = function (event) {
                        if (!this.context.mouseIsDown)
                            return;
                        var plane = this.whichPlane(event);
                        var zoom = this.viewer.getZoom(plane);
                        var delta = (event.movementX + event.movementY) / 4;
                        zoom = zoom + (delta / this.viewer.gl.canvas.width);
                        this.viewer.setZoom(plane, zoom);
                        this.viewer.drawImage();
                    };
                    ZoomMode.prototype.onmouseup = function (event) {
                    };
                    return ZoomMode;
                }(Mode));
            })(roi3DEditor = dilvanLab.roi3DEditor || (dilvanLab.roi3DEditor = {}));
        })(dilvanLab = usp.dilvanLab || (usp.dilvanLab = {}));
    })(usp = br.usp || (br.usp = {}));
})(br || (br = {}));
//# sourceMappingURL=app.js.map