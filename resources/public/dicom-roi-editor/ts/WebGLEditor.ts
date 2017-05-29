
/*
 * Copyright (c) Dilvan A. Moreira 2016. All rights reserved.
 *
 *  This file is part of ePAD2.
 *
 *  ePAD2 is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  ePAD2 is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with ePAD2. If not, see <http://www.gnu.org/licenses/>.
 */

///<reference path='./WebGLViewer.ts' />


module br.usp.dilvanLab.roi3DEditor {

    /**
     * Created by dilvan on 11/10/14.
     */

    export interface WebGLEditor extends WebGLViewer {
        cursorRadius:number;

        showSphere():void;
        setCursorCenter(plane:number, x:number, y:number):void;
        stampSphere():void;
    }
}