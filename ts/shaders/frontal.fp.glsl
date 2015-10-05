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

///////////
/*
    vec3 rgb2hsv(vec3 c) {
        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

        float d = q.x - min(q.w, q.y);
        float e = 1.0e-10;
        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }
*/