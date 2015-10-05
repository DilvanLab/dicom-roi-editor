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

////        float x = pix.r*float(wwOld) - float(rescaleIntercept - rescaleSlope*shifting - wcOld + wwOld/2);   
//        grey = (float(rescaleSlope) * x + a)/float(ww); 
  
    gl_FragColor = vec4(float(x/256) / 255.0, float(x - (x/256 * 256))/255.0, 0.0, pix.a);
}