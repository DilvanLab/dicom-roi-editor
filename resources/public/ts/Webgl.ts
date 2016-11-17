/**
 * Created by dilvan on 4/17/16.
 */

/*
 onchange	An HTML element has been changed
 onclick	The user clicks an HTML element
 onmouseover	The user moves the mouse over an HTML element
 onmouseout	The user moves the mouse away from an HTML element
 onkeydown	The user pushes a keyboard key
 onload	The browser has finished loading the page
 */
///<reference path="./WebGLViewer.ts" />
///<reference path="./WebGLViewerImpl.ts" />

import WebGLViewer = br.usp.dilvanLab.roi3DEditor.WebGLViewer;

module br.usp.dilvanLab.roi3DEditor {

    export class Context {
        mouse = {x: 0, y: 0}
        actual = {x: 0, y: 0}
        mouseIsDown:boolean = false
        tool:string

        constructor(public viewer:WebGLViewer) {
            this.tool = 'gradient'
        }

        getMousePos(canvas:HTMLCanvasElement, event:MouseEvent) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };
        }

        /**
         * init the widgets handlers, move, down, up, and keypress
         */
        initDrawingHandlers():void {

            const vi = <WebGLViewerImpl> this.viewer;
            const drawing = vi.gl.canvas;
            //drawing.plane = ALL;

            const modes = {};

            // Add Modes
            // TODO: Make this in a way that others can add new Modes
            modes['zoom'] = new ZoomMode(this);
            //modes.put(Tool.threeDDrawTool, new ThreeDMode(drawing));
            modes['scroll'] = new ScrollMode(this);
            //DrawMode dm = new DrawMode(drawing);
            //modes.put(Tool.drawTool, dm);
            //modes.put(Tool.lineTool, dm);
            //modes.put(Tool.circleTool, dm);
            //modes.put(Tool.normalTool, dm);

            //DrawMPMode dm2 = new DrawMPMode(drawing);
            //modes.put(Tool.polyTool, dm2);
            //modes.put(Tool.splineTool, dm2);

            //modes.put(Tool.addTool, dm);
            //modes.put(Tool.subtractTool, dm);

            //modes.put(Tool.editTool, new EditMode(drawing));
            modes['gradient'] = new GradientMode(this);
            modes['move'] = new MoveMode(this);
            //modes.put(Tool.sortTool, new SortMode(drawing));
            //modes.put(Tool.addTool, new ThreeDMode(drawing));
            //modes.put(Tool.subtractTool, new ThreeDMode(drawing));
            //modes.put(Tool.labelTool, new LabelMode(drawing));

            //propagateEvents(widgets, canvas);

            drawing.onmousemove = (event:MouseEvent) => {

                if (!this.mouseIsDown) return;
                //if (!(isActive && imagesQueued)) return;

                this.mouse = this.getMousePos(drawing, event);
                //this.mouseX = 0.0 + event.getRelativeX(drawing.getElement());
                //this.mouseY = 0.0 + event.getRelativeY(drawing.getElement());

                // maybe this will fix the cursor problem
                event.preventDefault();

                // keyboard shortcuts checked first if we are not widgets a
                // shape

                if (/*!areDrawingShape() &&*/ event.shiftKey) {
                    //widgets.overlay.setZoom(widgets.updateZoom(mouseX, mouseY));
                    modes['zoom'].onmousemove(event);
                    //} else if (/*!areDrawingShape() &&*/ event.metaKey) {
                    //    drawing.updateMove(mouseX, mouseY);
                } else if (modes[this.tool]) //.get(canvas3D.handler.getTool()) != null)
                    modes[this.tool].onmousemove(event); //.get(canvas3D.handler.getTool()).onmousemove(event);

            };

            drawing.onmousedown = (event:MouseEvent) => {
                this.mouse = this.getMousePos(drawing, event)
                //   mouseX = 0.0 + event.getRelativeX(drawing.getElement());
                //   mouseY = 0.0 + event.getRelativeY(drawing.getElement());

                this.actual.x = this.mouse.x;
                this.actual.y = this.mouse.y;
                //alert('Mouse Down'+this.mouse);

                //this.currentWC = this.viewer.windowingCenter;
                //this.currentWW = this.viewer.windowingWidth;

                //if (!isActive) canvas3D.activate();

                //if (!imagesQueued || mouseIsDown) return;
                if (this.mouseIsDown) return;

                // fix my cursor bug that Chrome changes cursor to a text
                // edit on drag
                this.mouseIsDown = true;

                // keyboard shortcuts checked first
                if (event.shiftKey) {
                    this.tool = 'zoom';// canvas3D.handler.setTool(Tool.zoomTool);
                    //if (checkDrawing(drawing)) {
                    //    drawing.startZoom(actualX, actualY);
                    //}
                } else if (event.metaKey) {
                    this.tool = 'move'; //canvas3D.handler.setTool(Tool.moveTool);
                    //if (checkDrawing(drawing)) {
                    //    drawing.startMove(actualX, actualY);
                    //}
                } else if (modes[this.tool]) //.get(canvas3D.handler.getTool()) != null)
                    modes[this.tool].onmousedown(event);//.get(canvas3D.handler.getTool()).onMouseDown(event);
                else {
                    //TODO: Why gradient is chosen if no other tool is there?
                }
            };

            drawing.ondblclick = (event:MouseEvent) => {
                modes[this.tool].ondblclick(event)
            };

            drawing.onmouseup = (event:MouseEvent) => {

                this.mouse = this.getMousePos(drawing, event)
                //alert('Mouse Up'+this.mouse);

                if (!this.mouseIsDown) return;

                // mouse is no longer down
                this.mouseIsDown = false;

                // if this series is loaded and active, then mouseup
                //if (isActive && imagesQueued) {

                // keyboard shortcuts checked first for temporary move
                // and zoom
                if (event.shiftKey || event.metaKey) {
                    // if (event.shiftKey) {
                    //     // shift move means zoom
                    //     drawing.endZoom(mouseX, mouseY);
                    // } else {
                    //     drawing.endMove(mouseX, mouseY);
                    // }
                    //canvas3D.handler.restoreTool();
                    return;
                } else if (modes[this.tool]) //.get(canvas3D.handler.getTool()) != null)
                    modes[this.tool].onmouseup(event); //.get(canvas3D.handler.getTool()).onmouseup(event);
                //widgets.clearCursors();
                //}
            };

            // handle the scroll wheel in the widgets
            drawing.onwheel = (event:WheelEvent) => {

                //if (tool != null && tool == Tool.zoomTool) {
                //    // do some zooming
                //    drawing.zoom(event.getDeltaY());

                //if (isActive && imagesQueued && !drawing.isDrawing()) {

                //final Tool tool = canvas3D.handler.getTool();
                // prevent this from going to the window
                //DOM.eventPreventDefault(DOM.eventGetCurrentEvent());
                event.preventDefault();

                //	Change the sphere radius in ThreeDDrawTool when shift is down
                if ((this.tool === 'add' || this.tool == 'subtract') && event.shiftKey) {
                    modes['threeDDrawTool'].onmousewheel(event);
                    return;
                }
                modes['scroll'].onmousewheel(event);
            };

            drawing.onkeydown = (event:KeyboardEvent) => {
                //alert('Passou ')
                event.preventDefault();
                modes['zoom'].onkeydown(event)
            };

            drawing.onmouseout = (event:MouseEvent) => {
                if (this.tool == 'threeDDraw')
                    modes['threeDDraw'].onmouseout(event);
            };
        }
    }

    class Mode {
        viewer:WebGLViewerImpl;

        LEFT_ARROW = 37;
        UP_ARROW = 38;
        RIGHT_ARROW = 39;
        DOWN_ARROW = 40;

        constructor(public context:br.usp.dilvanLab.roi3DEditor.Context) {
            this.viewer = <WebGLViewerImpl> context.viewer;
        }

        whichPlane(event:MouseEvent):number {
            const canvas = this.viewer.gl.canvas
            if (this.viewer.activePlane == ALL) {
                const pos = this.context.getMousePos(canvas, event)
                console.log('getPlane: ' + pos.x + ' ' + pos.y + ' canvas: ' + canvas.width + ' ' + canvas.height)
                if (pos.x < canvas.width / 2 && pos.y < canvas.height / 2) return AXIAL;
                if (pos.x > canvas.width / 2 && pos.y > canvas.height / 2) return -1;
                if (pos.x > canvas.width / 2) return FRONTAL;
                if (pos.y > canvas.height / 2) return SAGITTAL;
                return -1
            }
            else return this.viewer.activePlane
        }

        getMouse(event:MouseEvent) {
            const rect = this.viewer.gl.canvas.getBoundingClientRect();
            const ret = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };

            // Coordinates are specific to each plane
            // If all planes are showing, they have to be corrected
            if (this.viewer.activePlane == ALL) {
                const x = this.viewer.gl.canvas.width / 2;
                const y = this.viewer.gl.canvas.height / 2;
                if (ret.x > x) ret.x = (ret.x - x);
                if (ret.y > y) ret.y = (ret.y - y);
            }

            console.log('mouse: ' + ret.x + ' ' + ret.y);
            return ret
        }

        setWindowingValues(center:number, width:number) {

            //if (spWebGL == null) return;

            if (center == 0 && width == 0) {
                center = this.viewer.defaultWC;
                width = this.viewer.defaultWW;
            }

            this.viewer.windowingCenter = center;
            this.viewer.windowingWidth = width;

            //overlay1.setLevel(spWebGL.getWindowingCenter(), spWebGL.getWindowingWidth());
            //overlay2.setLevel(spWebGL.getWindowingCenter(), spWebGL.getWindowingWidth());
            //overlay3.setLevel(spWebGL.getWindowingCenter(), spWebGL.getWindowingWidth());
        }

        //mousedown(event:MouseEvent):boolean {return (event.buttons & LEFT_BUTTON) != 0}


        onkeydown(event:KeyboardEvent):void {}

        onmousedown(event:MouseEvent):void {}

        onmousemove(event:MouseEvent):void {}

        onmouseout(event:MouseEvent):void {}

        onmouseup(event:MouseEvent):void {}

        onmousewheel(event:WheelEvent):void {}

        ondblclick(event:MouseEvent):void {
            if (this.viewer.activePlane == ALL) {
                const plane = this.whichPlane(event);
                this.viewer.activePlane = plane;
            } else
                this.viewer.activePlane = ALL;
            this.viewer.drawImage();
        }
    }

    class GradientMode extends Mode {
        constructor(context) {
            super(context);
        }

        onmousedown(event:MouseEvent) {
            // TODO: We are already in the Gradient tool
            // why push button?
            //canvas3D.pushButtonForTool(Tool.gradientTool);
            //updateOverlayLevel(drawing.overlay);
        }

        onmousemove(event:MouseEvent) {
            if (!this.context.mouseIsDown) return;

            const deltaWW = ((event.movementX*4) / this.viewer.gl.canvas.width) * this.viewer.defaultWW;
            const deltaWC = ((event.movementY*4) / this.viewer.gl.canvas.height) * this.viewer.defaultWC;
            this.setWindowingValues(this.viewer.windowingCenter + deltaWC, this.viewer.windowingWidth + deltaWW);
            //console.log('Grad: '+ this.context.currentWC + ' '+ deltaWC + ' y: '+ this.context.currentWW + ' ' + deltaWW);
            this.viewer.drawImage();
            //updateOverlayLevel(drawing.overlay);

            // if (mouseX >= 0 && mouseY >= 0 && mouseX < viewSize && mouseY < viewSize) { // &&
            //     final int diffX = (int) (drawing.invertX(actualX, actualY) - drawing.invertX(mouseX, mouseY));
            //     final int diffY = (int) (drawing.invertY(actualX, actualY) - drawing.invertY(mouseX, mouseY));
            //     this.setWindowingValues(this.contest.currentWC + diffY, this.contest.currentWW + diffX);
            //     this.viewer.drawImage();
            //     //updateOverlayLevel(drawing.overlay);
            // }
        }

        onmouseup(event:MouseEvent) {
            //updateOverlayLevel(drawing.overlay);
        }
    }

    class MoveMode extends Mode {
        constructor(context) {
            super(context);
        }

        onmousedown(event:MouseEvent):void {
            //if (checkDrawing(drawing))
            //    drawing.startMove(actualX, actualY);
        }

        onmousemove(event:MouseEvent):void {

            //if (!this.context.mouseIsDown) return

            const plane = this.whichPlane(event);
            if (plane == -1) return;

            let deltaX = this.viewer.pixels2Units(plane, this.context.mouse.x - this.context.actual.x);
            let deltaY = -this.viewer.pixels2Units(plane, this.context.mouse.y - this.context.actual.y);

            //If active plane is not full screen
            if (this.viewer.activePlane == 3) {
                //drawing.updateMoveGridPlane(mouseX, mouseY);
                deltaX = deltaX * 2;
                deltaY = deltaY * 2;
            } //else
            // drawing.updateMove(mouseX, mouseY);

            this.viewer.setX(plane, this.viewer.getX(plane) - deltaX);
            this.viewer.setY(plane, this.viewer.getY(plane) - deltaY);
            this.viewer.drawImage();
            this.context.actual.x = this.context.mouse.x;
            this.context.actual.y = this.context.mouse.y;
        }

        onmouseup(event:MouseEvent):void {
            //drawing.endMove(mouseX, mouseY);
            //drawing.overlay.clearMousePx();
        }
    }

    class ScrollMode extends Mode {
        constructor(context) {
            super(context);
        }

        resetSlider():void {
            // //int plane2Act = (spWebGL.getActivePlane() == WebGLViewer.ALL) ? drawing.plane : spWebGL.getActivePlane();
            // //if (plane2Act == WebGLViewer.AXIAL)
            // canvas3D.handler.updateSlider(spWebGL.getAxialImage());
        }

        onmousedown(event:MouseEvent):void {
            //if (spWebGL == null) return;

            const plane = this.whichPlane(event);
            if (plane == -1) return;
            const mouse = this.getMouse(event);

            this.resetSlider();
            this.viewer.setPlanesCoord(plane/*drawing.plane*/, mouse.x, mouse.y);
            this.viewer.drawImage();
        }

        onmousemove(event:MouseEvent):void {
            //if (spWebGL == null) return;
            const plane = this.whichPlane(event);
            if (plane == -1) return;
            const mouse = this.getMouse(event)

            //if (!this.context.mouseIsDown) return;
            this.resetSlider();
            this.viewer.setPlanesCoord(plane /*drawing.plane*/, mouse.x, mouse.y);
            this.viewer.drawImage();
        }

        onmousewheel(event:WheelEvent) {
            //if (spWebGL == null) return;

            //Window.alert("spActive: "+spWebGL.getActivePlane() + " drawing.plane: "+ drawing.plane);

            const plane = this.whichPlane(event);
            if (plane == -1) return;

            const plane2Act = (this.viewer.activePlane == ALL) ? plane : this.viewer.activePlane;

            //if (plane2Act == AXIAL) {
            //    const i = Math.max(Math.min(this.viewer.axialImage + (event.offsetY > 0 ? 1 : -1), this.viewer.imageNumber - 1), 0);
            //    //canvas3D.handler.updateSlider(i);
            //
            //} else {
            const i = Math.max(Math.min(this.viewer.getImageCoord(plane2Act) + (event.deltaY > 0 ? 1.0 / this.viewer.imageNumber : -1.0 / this.viewer.imageNumber), 1), 0);
            this.viewer.setActiveImage(plane2Act, i);
            this.viewer.drawImage();
            //}
        }
    }

    class ZoomMode extends Mode {

        constructor(context) {
            super(context);
        }

        onkeydown(event:KeyboardEvent):void {
            let zoom:number;
            const key = event.charCode;
            alert('Key event: '+key);
            // TODO: Shouldn't we do it in the overlay correspondent to the plane being zoomed?
            switch (key) {
                case this.UP_ARROW:
                    // zoom out
                    zoom = this.viewer.getZoom(AXIAL) / 0.9;
                    //drawingAxialGeneral.overlay.setZoom(zoom);
                    this.viewer.setZoom(AXIAL, zoom);
                    break;
                case this.DOWN_ARROW:
                    // zoom in
                    zoom = this.viewer.getZoom(AXIAL) * 0.9;
                    //drawingAxialGeneral.overlay.setZoom(zoom);
                    this.viewer.setZoom(AXIAL, zoom);
                    break;
                case this.RIGHT_ARROW: // TODO update i to double
                    let i = Math.max(Math.min(this.viewer.getImageCoord(AXIAL) + (1.0 / this.viewer.imageNumber), 1), 0);
                    //if (i > this.viewer.imageNumber * this.viewer.sliceSpacing) return;
                    this.viewer.setActiveImage(AXIAL, i);
                    break;
                case this.LEFT_ARROW:
                    i = Math.max(Math.min(this.viewer.getImageCoord(AXIAL) - (1.0 / this.viewer.imageNumber), 1), 0);
                    //if (i < 0) return;
                    this.viewer.setActiveImage(AXIAL, i);
                    break;
            }
            this.viewer.drawImage();
        }

        onmousedown(event:MouseEvent) {
            //if (checkDrawing(drawing))
            //    drawing.startZoom(actualX, actualY);
        }

        onmousemove(event:MouseEvent) {
            if (!this.context.mouseIsDown) return;

            const plane = this.whichPlane(event);
            let zoom = this.viewer.getZoom(plane);
            const delta = (event.movementX + event.movementY) /4;
            zoom = zoom + (delta / this.viewer.gl.canvas.width)
            this.viewer.setZoom(plane, zoom);

            // //If active plane is not full screen
            // if (this.viewer.activePlane == ALL) {
            //     const zoom = drawing.updateZoomGridPlane(mouseX, mouseY);
            //
            //     // TODO: Shouldn't we do it in the overlay correspondent to the plane being zoomed?
            //     drawing.overlay.setZoom(zoom);
            //     spWebGL.setZoom(drawing.plane, zoom);
            // } else {
            //     double
            //     zoom = drawing.updateZoom(mouseX, mouseY);
            //     // TODO: Shouldn't we do it in the overlay correspondent to the plane being zoomed?
            //     drawing.overlay.setZoom(zoom);
            //     spWebGL.setZoom(spWebGL.getActivePlane(), zoom);
            // }
            this.viewer.drawImage();
        }

        onmouseup(event:MouseEvent) {
            //drawing.endZoom(mouseX, mouseY);
        }
    }
}

