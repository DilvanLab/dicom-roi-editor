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

/*
    bool isInsideSphere(float ind, vec2 pt) {
//        return (pt.x>0.25 && pt.x<0.75 && pt.y>0.25 && pt.y<0.75);
        float planeZ = (ind + float(baseInd)) * dz;
       // if (planeZ>sphereZ+sphereRadius|| planeZ<sphereZ-sphereRadius)
       //    return false;
//        float radiusSquare = square(sphereRadius) - square(planeZ-sphereZ); 
//        return (square(pt.x - sphereX) + square(pt.y - sphereY) <= radiusSquare);

        float radiusSquare = square(sphereRadius) - square(planeZ-sphere[0].z); 
        return (square(pt.x - sphere[0].x) + square(pt.y - sphere[0].y) <= radiusSquare);

/
        for(int i=0; i<maxSize; i++) {
           if (i>cmdSize) break;
           radiusSquare = square(sphereRadius) - square(planeZ-sphere[i].z); 
           if (square(pt.x - sphere[i].x) + square(pt.y - sphere[i].y) <= radiusSquare) 
              return false;
        }
        return true;
/
    }*/
