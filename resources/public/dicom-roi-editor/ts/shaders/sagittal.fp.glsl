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

/*
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
*/

/*
        PixArray bits1;
        PixArray bits2;
        PixArray bits;

        getTexture2(i,   vec2(x, (1.0 - v_texCoord.x)), bits1);           
        getTexture2(i+1, vec2(x, (1.0 - v_texCoord.x)), bits2);
*/
/*

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
        }
        else
           gl_FragColor = mix(
                 getTexture(i,   vec2(x, (1.0 - v_texCoord.x))),
                 getTexture(i+1, vec2(x, (1.0 - v_texCoord.x))),
                 delta);
    }
               
               */
          /*   
           gl_FragColor = vec4(
              fromByte(bits.r),
              fromByte(bits.g),
              fromByte(bits.b),
              fromByte(bits.a));
          */

/*
    void getDSO(float x, float y, out bool bits[N]) {
        int j;
        int byte;
        if (x<0.0 || x>1.0 || y<0.0 || y>1.0) byte = 255;
        else byte= int(texture2D(uDSO, vec2(x,y)).r*255.0);
        for (int i = 0; i < 8; i++) {
            j = byte / 2;
            bits[i] = (byte - j * 2)==1;
            byte = j;
        }
    }

    vec4 getTexture(int ind, vec2 p) {
        float ipa = float(imagesPerAxis);
		float x = (p.x + mod(float(ind), ipa))  / ipa;
        float y = (p.y + float(3 - ind/imagesPerAxis)) / ipa;

        float d = 1.0/512.0;
        bool bits[N];
        getDSO(x, y, bits);
        
        if (false) {//!(p.y-d<0.0 || p.y+d>1.0 || ind<1 || ind>14)) {
            d= d/ipa;
            bool bits_a[N];
            getDSO((p.x + mod(float(ind-1), ipa))  / ipa, (p.y + float(3 - (ind-1)/imagesPerAxis)) / ipa, bits_a);
            bool bits_b[N];
            getDSO((p.x + mod(float(ind+1), ipa))  / ipa, (p.y + float(3 - (ind+1)/imagesPerAxis)) / ipa, bits_b);

            bool bits_c[N];
            getDSO(x, y-d, bits_c);
            bool bits_d[N];
            getDSO(x, y+d, bits_d);
            for (int i=0; i<N; i++) {
                bits[i] = bits[i] && !(bits_a[i]&&bits_b[i]&&bits_c[i]&&bits_d[i]);
            }
        } 
        //ivec4 dso = ivec4(texture2D(uDSO, vec2(x,y))*255.0);

 		vec4 pix= texture2D(uSampler, vec2(x,y));
        // For png file
        float a = float(rescaleIntercept - rescaleSlope*shifting - greyCenter + greyWidth/2);
        float grey = (float(rescaleSlope) * (pix.r*256.0 + pix.g)*255.0 + a)/float(greyWidth);

        float red;
        if (bits[0]) { red = 1.0; grey=grey*0.8;}
        else red = grey; 
		        
        return vec4(red, grey, grey, pix.a);
    }
*/