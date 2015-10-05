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

module br.usp.dilvanLab.roi3DEditor.shaders {

 export const axialFs =
     `
precision highp float;
precision highp sampler2D;
precision highp int;

uniform int dso;

uniform int imageInd;
uniform int imagesPerAxis;
uniform sampler2D uSampler;
uniform sampler2D uDSO;
uniform int greyCenter;
uniform int greyWidth;
uniform int shifting;
uniform int rescaleSlope;
uniform int rescaleIntercept;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

vec4 getTexture(int ind, vec2 p) {
    float ipa = float(imagesPerAxis);
	float x = (p.x + mod(float(ind), ipa))  / ipa;
    float y = (p.y + float(3 - ind/imagesPerAxis)) / ipa;

 	vec4 pix= texture2D(uSampler, vec2(x,y));
    // For png file
    float a = float(rescaleIntercept - rescaleSlope*shifting - greyCenter + greyWidth/2);
    float grey = (float(rescaleSlope) * (pix.r*256.0 + pix.g)*255.0 + a)/float(greyWidth);

    return vec4(grey, grey, grey, pix.a);
}

vec4 getDSU(int ind, vec2 p){
    float ipa = float(imagesPerAxis);
	float x = (p.x + mod(float(ind), ipa))  / ipa;
    float y = (p.y + float(3 - ind/imagesPerAxis)) / ipa;

    vec4 bytes;
    if (x<0.0 || x>1.0 || y<0.0 || y>1.0) return vec4(1.0,1.0,1.0,1.0);
    return texture2D(uDSO, vec2(x,y));
}

// Axial Plane
void main(void) {
    if (dso==1) {
        //PixArray bits;
        gl_FragColor = getDSU(imageInd, v_texCoord);
    } else
        gl_FragColor = getTexture(imageInd, v_texCoord);
}
    `;

  export const frontalFs = `
precision highp float;
precision highp sampler2D;
precision highp int;

uniform int dso;

uniform int imagesPerTexture;
uniform int imagesPerAxis;
uniform sampler2D uSampler;
uniform sampler2D uDSO;
uniform float yCoord;
uniform int greyCenter;
uniform int greyWidth;
uniform int shifting;
uniform int rescaleSlope;
uniform int rescaleIntercept;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

struct PixArray {
	bool r[8];
	bool g[8];
	bool b[8];
	bool a[8];
};

void toByte(float num, out bool bits[8]){
    int j;
    int byte= int(num*255.0);
    for (int i = 0; i < 8; i++) {
        j = byte / 2;
        bits[i] = (byte - j * 2)==1;
        byte = j;
    }
}

float fromByte(bool bits[8]){
    float x= 0.0;
    float df = 1.0/255.0; //int byte= int(num*255.0);
    for (int i = 0; i < 8; i++) {
        x = x + (bits[i]?df:0.0);
        df = df *2.0;
    }
    return x;
}

vec4 getTexture(int ind, vec2 p) {
    float ipa = float(imagesPerAxis);
    float x = (p.x + mod(float(ind), ipa))  / ipa;
    float y = (p.y + float(3 - ind/imagesPerAxis)) / ipa;

	vec4 pix= texture2D(uSampler, vec2(x,y));
    // For png file
    float a = float(rescaleIntercept - rescaleSlope*shifting - greyCenter + greyWidth/2);
    float grey = (float(rescaleSlope) * (pix.r*256.0 + pix.g)*255.0 + a)/float(greyWidth);

    return vec4(grey, grey, grey, pix.a);
}

void getTexture2(int ind, vec2 p, out PixArray pix){
    float ipa = float(imagesPerAxis);
    float x = (p.x + mod(float(ind), ipa))  / ipa;
    float y = (p.y + float(3 - ind/imagesPerAxis)) / ipa;

    vec4 bytes;
    if (x<0.0 || x>1.0 || y<0.0 || y>1.0) bytes = vec4(1.0,1.0,1.0,1.0);
    else bytes= texture2D(uDSO, vec2(x,y));

    toByte(bytes.r, pix.r);
    toByte(bytes.g, pix.g);
    toByte(bytes.b, pix.b);
    toByte(bytes.a, pix.a);
}

// Frontal Plane
void main(void) {
    float y= yCoord;

    int i= int(   floor((1.0-v_texCoord.y)*float(imagesPerTexture-1)) );
    float delta = fract((1.0-v_texCoord.y)*float(imagesPerTexture-1));  //y = y0 + (x - x0) (y1-y0)/(x1-x0)

    if (i==(imagesPerTexture-1)) {i--; delta=1.0;}

    if (dso==1) {
       PixArray bits1;
       PixArray bits2;
       PixArray bits;

       getTexture2(i,   vec2(v_texCoord.x, y), bits1);
       getTexture2(i+1, vec2(v_texCoord.x, y), bits2);

        for (int j=0; j<8; j++) {
            bits.r[j] = (mix((bits1.r[j]?1.0:0.0), (bits2.r[j]?1.0:0.0), delta) > 0.5);
            bits.g[j] = (mix((bits1.g[j]?1.0:0.0), (bits2.g[j]?1.0:0.0), delta) > 0.5);
            bits.b[j] = (mix((bits1.b[j]?1.0:0.0), (bits2.b[j]?1.0:0.0), delta) > 0.5);
            bits.a[j] = (mix((bits1.a[j]?1.0:0.0), (bits2.a[j]?1.0:0.0), delta) > 0.5);
        }

        if (bits.r[0])
            gl_FragColor = vec4(1.0,1.0,1.0,1.0);
        else
            gl_FragColor = vec4(0.0,0.0,0.0,1.0);
          /*
           gl_FragColor = vec4(
              fromByte(bits.r),
              fromByte(bits.g),
              fromByte(bits.b),
              fromByte(bits.a));
          */
    }
    else
        gl_FragColor = mix(
            getTexture(i,   vec2(v_texCoord.x, y)),
            getTexture(i+1, vec2(v_texCoord.x, y)),
            delta);
}

   `;

  export const jpegTransfFs = `
precision highp float;
precision highp sampler2D;
precision highp int;

uniform sampler2D uSampler;
uniform int rescaleSlope;
uniform int rescaleIntercept;
uniform int shifting;
uniform int defaultWW;
uniform int defaultWC;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

void main(void) {
	vec4 pix = texture2D(uSampler, vec2(v_texCoord.x, v_texCoord.y));

	// For jpg file
    float x1 = (pix.r*float(defaultWW) - float(rescaleIntercept - rescaleSlope*shifting - defaultWC + defaultWW/2))/float(rescaleSlope);
	int x = int(floor(x1));
    gl_FragColor = vec4(float(x/256) / 255.0, float(x - (x/256 * 256))/255.0, 0.0, pix.a);
}
    `;

  export const moveFs = `
precision highp float;
precision highp sampler2D;
precision highp int;

uniform sampler2D uDSO;

uniform float sphereX; //X coordinate of the sphere center (max 1.0)
uniform float sphereY; //Y coordinate of the sphere center (max 1.0)
uniform float sphereRadius; //in units

uniform float dy;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

float square(float x) {return x*x;}

bool isInsideCircle(vec2 pt) {
    return (square(pt.x - sphereX) + square((pt.y - sphereY)*dy) <= square(sphereRadius));
}

void main(void) {

    vec4 masks= texture2D(uDSO, v_texCoord);

    if (!isInsideCircle(v_texCoord)) {
        gl_FragColor = masks;
        return;
    }

    vec4 ret = vec4(0.0);
    vec4 k;
    float power = 1.0;

    for (int i=0; i<8; i++) {
        k = mod(masks, 2.0); masks= floor(masks/2.0);
        //if (i==bit) {
            k.r = 1.0;
        //}
        ret += k*power;
        power *= 2.0;
    }
    gl_FragColor = ret;
}
    `;

  export const sagittalFs = `
precision highp float;
precision highp sampler2D;
precision highp int;

uniform int dso;

uniform int imagesPerTexture;
uniform int imagesPerAxis;
uniform sampler2D uSampler;
uniform sampler2D uDSO;
uniform float yCoord;
uniform int greyCenter;
uniform int greyWidth;
uniform int shifting;
uniform int rescaleSlope;
uniform int rescaleIntercept;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

vec4 getTexture(int ind, vec2 p) {
    float ipa = float(imagesPerAxis);
    float x = (p.x + mod(float(ind), ipa))  / ipa;
    float y = (p.y + float(3 - ind/imagesPerAxis)) / ipa;

 	vec4 pix= texture2D(uSampler, vec2(x,y));
    // For png file
    float a = float(rescaleIntercept - rescaleSlope*shifting - greyCenter + greyWidth/2);
    float grey = (float(rescaleSlope) * (pix.r*256.0 + pix.g)*255.0 + a)/float(greyWidth);

    return vec4(grey, grey, grey, pix.a);
}

vec4 getDso(int ind, float px, float py){
    float ipa = float(imagesPerAxis);
    float x = (px + mod(float(ind), ipa))  / ipa;
    float y = (py + float(3 - ind/imagesPerAxis)) / ipa;

    if (x<0.0 || x>1.0 || y<0.0 || y>1.0) return vec4(1.0,1.0,1.0,1.0);
    return texture2D(uDSO, vec2(x,y));
}

// Sagittal Plane
void main(void) {
    float x= yCoord;

	int i= int(   floor((1.0-v_texCoord.y)*float(imagesPerTexture-1)) );
    float delta = fract((1.0-v_texCoord.y)*float(imagesPerTexture-1));  //y = y0 + (x - x0) (y1-y0)/(x1-x0)

    if (i==(imagesPerTexture-1)) {i--; delta=1.0;}

    if (dso==1) {
        vec4 pix1 = getDso(i,   x, (1.0 - v_texCoord.x));
        vec4 pix2 = getDso(i+1, x, (1.0 - v_texCoord.x));

        vec4 ret = vec4(0.0);
        vec4 k, k1, k2;
        float power = 1.0;

        for (int i=0; i<8; i++) {
            k1 = mod(pix1, 2.0); pix1= floor(pix1/2.0);
            k2 = mod(pix2, 2.0); pix2= floor(pix2/2.0);
            k = floor(mix(k1, k2, delta)*(2.0-exp2(-8.0)));      // 2^-8 smallest float in lowp precision
            ret += k*power;
            power *= 2.0;
        }
        gl_FragColor = ret;
    } else
        gl_FragColor = mix(
            getTexture(i,   vec2(x, (1.0 - v_texCoord.x))),
            getTexture(i+1, vec2(x, (1.0 - v_texCoord.x))),
            delta);
}
    `;

  export const simpleFs = `
precision highp float;
precision highp sampler2D;
precision highp int;

uniform sampler2D uSampler;
uniform sampler2D uDSO;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;
uniform float sphereX; //X coordinate of the sphere center (max 1.0)
uniform float sphereY; //Y coordinate of the sphere center (max 1.0)
//uniform float sphereZ; //Z coordinate of the sphere center, proportional to X and Y
uniform float sphereRadius; //in units
uniform float zoom;
uniform float alpha;
uniform float beta;
uniform float lineX;
uniform float lineY;

float square(float x) {return x*x;}

bool isLine(float x, float y) {
    float d= 0.1/zoom;
    if (x>lineX-d && x<lineX+d && y>lineY-d && y<lineY+d) return false;
    d= 0.002/zoom;
    if (x>(lineX-d) && x<(lineX+d) || y>(lineY-d) && y<(lineY+d)) return true;
    return false;
}

bool isCircle(vec2 pt) {
    float r = square(pt.x - sphereX) + square(pt.y - sphereY);
    return (r >= square(sphereRadius*alpha-0.002) && r <= square(sphereRadius*alpha+0.002));
}

// Return mask with border detection
vec4 findBorder(float x, float y, vec4 p) {
    //    d
    //  a p b
    //    c

    // vec4 p = floor(texture2D(uDSO, vec2(x,   y   )) *255.0);
    //TODO: Change the 512 for something that changes with the resolution
    float dt = 1.0/512.0;
    vec4 a = floor(texture2D(uDSO, vec2(x-dt,y   )) *255.0);
    vec4 b = floor(texture2D(uDSO, vec2(x+dt,y   )) *255.0);
    vec4 c = floor(texture2D(uDSO, vec2(x,   y-dt)) *255.0);
    vec4 d = floor(texture2D(uDSO, vec2(x,   y+dt)) *255.0);
    vec4 k, ka, kb, kc, kd;

    float power= 1.0;
    vec4 mask = vec4(0.0, 0.0, 0.0, 0.0);

    for (int i = 0; i < 8; i++) {
        k  = mod(p, 2.0); p= floor(p/2.0);
        if (k==vec4(0.0,0.0,0.0,0.0)) continue;
        ka = mod(a, 2.0); a= floor(a/2.0);
        kb = mod(b, 2.0); b= floor(b/2.0);
        kc = mod(c, 2.0); c= floor(c/2.0);
        kd = mod(d, 2.0); d= floor(d/2.0);

        mask += (k*mod(ka*kb*kc*kd + 1.0, 2.0))*power;
        power *= 2.0;
    }
    return mask;
}

vec4 getTexture(vec2 p) {

    vec4 mask = floor(texture2D(uDSO, vec2(p.x, p.y)) *255.0);
    mask = findBorder(p.x, p.y, mask);

	vec4 pix= texture2D(uSampler, p);
    float grey = pix.r;

    float red = 0.0;
    if (mod(mask, 2.0).r==1.0) {red = 1.0; grey = grey *0.3;}
    else red = grey;

    return vec4(red, grey, grey, 1.0);//pix.a);
}

void main(void) {
	//	Correct compression in x axis (for sagittal and frontal
    vec2 pt = vec2(v_texCoord.x/alpha+beta, v_texCoord.y);

    // If it's outside the view
    if (pt.x<0.0 || pt.x>1.0 || pt.y<0.0 || pt.y>1.0) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }

    // Test if it's inside the circle
    if (isLine(pt.x, pt.y))//v_texCoord.x, v_texCoord.y))
        gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0); // green color
    // Test if it's inside the circle
    else if (isCircle(v_texCoord))
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0); // blue color
    else
		gl_FragColor = getTexture(pt);
}

    `;

  export const simpleVs = `
precision highp float;
precision highp sampler2D;
precision highp int;

attribute vec2 a_texCoord;
attribute vec2 a_position;

varying vec2 v_texCoord;

void main() {
	gl_Position = vec4(a_position, 0, 1);
	// pass the texCoord to the fragment shader
   	// The GPU will interpolate this value between points
   	v_texCoord = a_texCoord;
}
    `;

  export const stampFs= `
precision highp float;
precision highp sampler2D;
precision highp int;

uniform int imagesPerAxis;
uniform sampler2D uDSO;
uniform sampler2D spheres;

uniform int baseInd;   //True index of the first image in this set
uniform float dz;      //Distance between slices, in units
uniform int cmdSize;
//uniform float sphereX;
//uniform float sphereY;
//uniform float sphereZ;
//vec3 sphe = vec3(sphereX, sphereY, sphereZ);

uniform float maxX;
const int maxSize = 30000;
//uniform vec4 spheres1[maxSize];
uniform float sphereRadius; //in units

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

float square(float x) {return x*x;}

vec4 getSphere(int i) {
    float j = float(i);
    return texture2D(spheres, vec2(mod(j,maxX)/maxX, 1.0 - floor(j/maxX)/maxX));
}

//   It took 5 seconds (4s with cube test) in the one line test (one line from
//   the top to the botton with default cursor radius)
bool isInsideSphere(vec3 plane) {
    vec3 delta;
    for(int i=0; i<maxSize; i++) {
        if (i>=cmdSize) break;

        //delta = plane-spheres1[i].xyz;
        delta = plane-getSphere(i).xyz;

        // Test first the cube where the sphere is
        if (delta.x>sphereRadius || delta.y>sphereRadius) continue;

        if (square(delta.x) + square(delta.y) <= square(sphereRadius) - square(delta.z))
            return true;
    }
    return false;
}

//   Disposition of images in the 4x4 grid
/*   0  1  2  3
     4  5  6  7
     8  9 10 11
    12 13 14 15
*/
void main(void) {
    vec2 p = v_texCoord;

    // Calculate image index from point p
    float ipa = float(imagesPerAxis);
    float indX = ceil(p.x*ipa)-1.0;
    if (indX<0.0) indX = 0.0;
    float indY = ceil(p.y*ipa)-1.0;
    if (indY<0.0) indY = 0.0;
        float ind = (3.0-indY) * ipa + indX;

    vec4 masks = texture2D(uDSO, p);
	vec2 p2 = vec2(fract(p.x*ipa), fract(p.y*ipa));

    bool isInside = isInsideSphere(vec3(p2, (ind + float(baseInd)) * dz));

    vec4 ret = vec4(0.0, 0.0, 0.0, 0.0);
    vec4 k;

    masks= floor(masks*255.0);
    int bit = 0;
    float power = 1.0;

    for (int i = 0; i < 8; i++) {
        k = mod(masks, 2.0); masks= floor(masks/2.0);
        //if (i==bit) {
            k.r = (isInside?1.0:k.r);
        //}
        ret += k*power;
        power *= 2.0;
    }
    gl_FragColor = ret/255.0;
}
    `

  export const transfVs = `
precision highp float;
precision highp sampler2D;
precision highp int;

attribute vec2 a_texCoord;
attribute vec2 a_position;

uniform vec2 u_translation;

varying vec2 v_texCoord;

void main() {
	gl_Position = vec4(a_position + u_translation, 0, 1);
	// pass the texCoord to the fragment shader
   	// The GPU will interpolate this value between points
   	v_texCoord = a_texCoord;
}
    `;
}
