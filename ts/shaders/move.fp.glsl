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
