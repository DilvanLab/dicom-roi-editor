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

        /*
        if (bits.r[0]) 
            gl_FragColor = vec4(1.0,1.0,1.0,1.0);
        else
            gl_FragColor = vec4(0.0,0.0,0.0,1.0);
      *   
       gl_FragColor = vec4(
          fromByte(bits.r),
          fromByte(bits.g),
          fromByte(bits.b),
          fromByte(bits.a));
      */

//   const int N = 8;
/*
    void getDSO(float x, float y, out bool bits[N]) {
        int j;
        int byte= int(texture2D(uDSO, vec2(x,y)).r*255.0);
        for (int i = 0; i < 8; i++) {
            j = byte / 2;
            bits[i] = (byte - j * 2)==1;
            byte = j;
        }
    }
*/
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
*/

/*
vec4 getTexture2(int ind, vec2 p) {
        float ipa = float(imagesPerAxis);
		float x = (p.x + mod(float(ind), ipa))  / ipa;
        float y = (p.y + float(3 - ind/imagesPerAxis)) / ipa;

        float d = 1.0/512.0;
        bool bits[N];
        getDSO(x, y, bits);
        
        if (!(p.x-d<0.0 || p.y-d<0.0 || p.x+d>1.0 || p.y+d>1.0)) {
            d= d/ipa;
            bool bits_a[N];
            getDSO(x-d, y, bits_a);
            bool bits_b[N];
            getDSO(x+d, y, bits_b);
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

        float red = 0.0;
                 //if (bits[0] && !(bits_a[0]&&bits_b[0]&&bits_c[0]&&bits_d[0])) red = 1.0;
        if (bits[0]) {red = 1.0; grey = grey *0.3;}
                        //if ((dso.r/128) == 0) red = grey;
        else red = grey; 
		        
        return vec4(red, grey, grey, pix.a);
    }
*/

