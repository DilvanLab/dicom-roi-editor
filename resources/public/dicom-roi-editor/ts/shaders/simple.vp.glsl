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

attribute vec2 a_texCoord;
attribute vec2 a_position;

varying vec2 v_texCoord;

void main() {
	gl_Position = vec4(a_position, 0, 1);
	// pass the texCoord to the fragment shader
   	// The GPU will interpolate this value between points
   	v_texCoord = a_texCoord;
}