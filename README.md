# dicom-roi-editor

ROI (Region of Interest) Editor using a Polymer component, using [ClojureScript](https://clojurescript.org/) + [Re-frame](https://github.com/Day8/re-frame), to visualize Dicom images and edit 2D and 3D ROI (Regions of Interest). It will eventually allow the edition of 2D (points, lines, polygons, etc) and 3D (masks) ROIs in the axial, frontal and sagittal views. 

To test component:

1. First you have to run [dicom-web-server](https://github.com/DilvanLab/dicom-web-server).
2. You need [leiningen](http://leiningen.org), java installed, node.js and typescript.
3. Clone project (or download and unzip project) using button above.
4. Go to project folder and run `lein do clean, typescript, figwheel`
5. On a browser, go to [`http://0.0.0.0:3449/`](http://0.0.0.0:3449/).
6. Click on the "cloud icon" to download images.

The demo has buttons to:

* zoom, 
* scroll (click on the planes to change slice location), 
* move, 
* change gradient (windowing). 
* change planes' view: double clicking changes the images from 1 to 3 planes and back.


Link to the [dcm4chee databank image](https://dcm4che.atlassian.net/wiki/spaces/ee2/pages/2555917/Database+Schema+Diagram).
Not all data about series are in the databank tables. To get DICOM images using WADO it is nescessary to add 
`"&contentType=application/dicom"` to the end of the file WADO URL. 
