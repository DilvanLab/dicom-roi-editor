# dicom-roi-editor

A Polymer component to visualize Dicom images and edit 2D and 3D ROI (Regions of Interest). It allows the edition of 2D (points, lines, polygons, etc) and 3D (masks) ROIs in the axial, frontal and sagittal views. 

To test component:

1. Clone project (or download and unzip project) using button above.
2. Go to project folder and run the [`polyserve`](https://github.com/PolymerLabs/polyserve) command ([node.js + npm](https://coolestguidesontheplanet.com/installing-node-js-on-osx-10-10-yosemite/) needed to install polyserve). 
polyserve isn't needed to run the demo, but if you use another webserver: go to the `bower_components` folder, create the link `ln -s .. dicom-roi-editor` and run the webserver (for instance, `python -m SimpleHTTPServer 8000`).
3. On a browser, go to [`http://localhost:8080/components/dicom-roi-editor/demo/`](http://localhost:8080/components/dicom-roi-editor/demo/).
4. Press the `Load Images` button.

The demo has buttons to:

* zoom, 
* scroll (click on the planes to change slice location), 
* move, 
* change gradient (windowing). 
* change planes' view: double clicking changes the images from 1 to 3 planes and back.