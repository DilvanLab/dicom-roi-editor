# dicom-roi-editor

Adaptation of a Polymer component, using [ClojureScript](https://clojurescript.org/) + [Re-frame](https://github.com/Day8/re-frame) to visualize Dicom images and edit 2D and 3D ROI (Regions of Interest). It will eventually allow the edition of 2D (points, lines, polygons, etc) and 3D (masks) ROIs in the axial, frontal and sagittal views. 

To test component:

1. You need [leiningen]http://leiningen.org] and java installed.
2. Clone project (or download and unzip project) using button above.
3. Go to project folder and run `lein do clean, figwheel`
4. On a browser, go to [`http://0.0.0.0:3449/`](http://0.0.0.0:3449/).
4. Click on the "cloud icon" to download images.

The demo has buttons to:

* zoom, 
* scroll (click on the planes to change slice location), 
* move, 
* change gradient (windowing). 
* change planes' view: double clicking changes the images from 1 to 3 planes and back.
