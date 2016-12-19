
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