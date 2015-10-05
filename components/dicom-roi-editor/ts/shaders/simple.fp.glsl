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
	
	/*   
	void getDSO(float x, float y, out bool bits[8]) {
    int j;
    int byte= int(texture2D(uDSO, vec2(x,y)).r*255.0);
    for (int i = 0; i < 8; i++) {
        j = byte / 2;
        bits[i] = (byte - j * 2)==1;
        byte = j;
    }
}     
        float d = 1.0/512.0;
        bool bits[8];
        getDSO(p.x, p.y, bits);
        
        if (!(p.x-d<0.0 || p.y-d<0.0 || p.x+d>1.0 || p.y+d>1.0)) {
            bool bits_a[8];
            getDSO(p.x-d, p.y, bits_a);
            bool bits_b[8];
            getDSO(p.x+d, p.y, bits_b);
            bool bits_c[8];
            getDSO(p.x, p.y-d, bits_c);
            bool bits_d[8];
            getDSO(p.x, p.y+d, bits_d);
            for (int i=0; i<8; i++) {
                bits[i] = bits[i] && !(bits_a[i]&&bits_b[i]&&bits_c[i]&&bits_d[i]);
            }
        } 
*/        
     /*   if (!(p.x-d<0.0 || p.y-d<0.0 || p.x+d>1.0 || p.y+d>1.0)) {
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
        } */
        //ivec4 dso = ivec4(texture2D(uDSO, vec2(x,y))*255.0);
	