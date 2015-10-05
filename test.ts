///**
// * Created by dilvan on 9/12/15.
// */
//
///// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />
/////<reference path="./WebGLViewerImpl.ts" />
/////<reference path="./WebGLEditorImpl.ts" />
//
//import Preferences = br.usp.dilvanLab.roi3DEditor.Preferences;
//import DicomSeriesInfo = br.usp.dilvanLab.roi3DEditor.DicomSeriesInfo;
//import WebGLViewerImpl = br.usp.dilvanLab.roi3DEditor.WebGLViewerImpl;
//
//class Test extends polymer.Base  {
//    is = "dicom-roi-editor";
//    properties = {
//        fancy: {value: true},
//        author: {value: function() {
//            return {
//                name:  'Dimitri Glazkov',
//                image: 'http://addyosmani.com/blog/wp-content/uploads/2013/04/unicorn.jpg',
//            }}},
//        canvas: {value:""},
//        pref: {value: {}},
//        series: {value: {}}
//    };
//    behaviors = [];
//
//    editor:WebGLViewerImpl = null;
//
//    attached() {
//        // `attached` fires once the element and its parents have been inserted
//        // into a document.
//
//        let canvas:HTMLCanvasElement = <HTMLCanvasElement> document.querySelector(this['canvas']);
//        if (!canvas) alert ('Null canvas: '+this['canvas']);
//        //alert(this['pref']);
//        this.editor = new WebGLViewerImpl(canvas, eval("("+this['pref']+")"), eval("("+this['series']+")"));
//        this.editor.setActivePlane(dilvan.roi3DEditor.AXIAL);
//    }
//
//    sayHello(greeting:string) {
//        var response = greeting;// || 'Hello  World!';
//        return 'dicom-roi-editor says, ' + response;
//    }
//
//    fireLasers() {
//        this.fire('dicom-roi-editor-lasers', {sound: 'Pew pew!'});
//    }
//
//}
//
//// after the element is defined, we register it in Polymer
//Test.register();
//
