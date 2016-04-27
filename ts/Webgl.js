/**
 * Created by dilvan on 4/17/16.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="./WebGLViewer.ts" />
///<reference path="./WebGLViewerImpl.ts" />
var br;
(function (br) {
    var usp;
    (function (usp) {
        var dilvanLab;
        (function (dilvanLab) {
            var roi3DEditor;
            (function (roi3DEditor) {
                var Context = (function () {
                    function Context(viewer) {
                        this.viewer = viewer;
                        this.mouse = { x: 0, y: 0 };
                        this.actual = { x: 0, y: 0 };
                        this.mouseIsDown = false;
                        this.tool = 'move';
                    }
                    Context.prototype.getMousePos = function (canvas, evt) {
                        var rect = canvas.getBoundingClientRect();
                        return {
                            x: evt.clientX - rect.left,
                            y: evt.clientY - rect.top
                        };
                    };
                    Context.prototype.drawImage = function () {
                        if (!this.viewer)
                            return;
                        try {
                            this.viewer.drawImage();
                        }
                        catch (e) {
                            alert(e.message);
                        }
                    };
                    Context.prototype.initDrawingHandlers = function () {
                        var _this = this;
                        var vi = this.viewer;
                        var drawing = vi.gl.canvas;
                        var modes = {};
                        modes['move'] = new MoveMode(drawing, this);
                        drawing.onmousemove = function (event) {
                            if (!_this.mouseIsDown)
                                return;
                            _this.mouse = _this.getMousePos(drawing, event);
                            event.preventDefault();
                            if (event.shiftKey) {
                                modes['zoom'].onMouseMove(event);
                            }
                            else if (modes[_this.tool])
                                modes[_this.tool].onMouseMove(event);
                        };
                        drawing.onmousedown = function (event) {
                            _this.mouse = _this.getMousePos(drawing, event);
                            _this.actual.x = _this.mouse.x;
                            _this.actual.y = _this.mouse.y;
                            _this.currentWC = _this.viewer.windowingCenter;
                            _this.currentWW = _this.viewer.windowingWidth;
                            _this.mouseIsDown = true;
                            if (event.shiftKey) {
                                _this.tool = 'zoom';
                            }
                            else if (event.metaKey) {
                                _this.tool = 'move';
                            }
                            else if (modes[_this.tool])
                                modes[_this.tool].onmousedown(event);
                            else {
                            }
                        };
                        drawing.onmouseup = function (event) {
                            _this.mouse = _this.getMousePos(drawing, event);
                            if (!_this.mouseIsDown)
                                return;
                            _this.mouseIsDown = false;
                            if (event.shiftKey || event.metaKey) {
                                return;
                            }
                            else if (modes[_this.tool])
                                modes[_this.tool].onMouseUp(event);
                        };
                    };
                    ;
                    return Context;
                })();
                roi3DEditor.Context = Context;
            })(roi3DEditor = dilvanLab.roi3DEditor || (dilvanLab.roi3DEditor = {}));
        })(dilvanLab = usp.dilvanLab || (usp.dilvanLab = {}));
    })(usp = br.usp || (br.usp = {}));
})(br || (br = {}));
var Mode = (function () {
    function Mode(drawing, context) {
        this.drawing = drawing;
        this.context = context;
    }
    Mode.prototype.onKeyDown = function (event) {
    };
    Mode.prototype.onMouseDown = function (event) {
    };
    Mode.prototype.onMouseMove = function (event) {
        alert('Mouse Move: Empty');
    };
    Mode.prototype.onMouseOut = function (event) {
    };
    Mode.prototype.onMouseUp = function (event) {
    };
    Mode.prototype.onMouseWheel = function (event) {
    };
    return Mode;
})();
exports.Mode = Mode;
var MoveMode = (function (_super) {
    __extends(MoveMode, _super);
    function MoveMode(drawing, context) {
        _super.call(this, drawing, context);
    }
    MoveMode.prototype.onMouseDown = function (event) {
    };
    MoveMode.prototype.onMouseMove = function (event) {
        //if (!this.context.mouseIsDown) return
        var deltaX = this.context.viewer.pixels2Units(br.usp.dilvanLab.roi3DEditor.AXIAL, this.context.mouse.x - this.context.actual.x);
        var deltaY = -this.context.viewer.pixels2Units(br.usp.dilvanLab.roi3DEditor.AXIAL, this.context.mouse.y - this.context.actual.y);
        if (this.context.viewer.activePlane == 3) {
            deltaX = deltaX * 2;
            deltaY = deltaY * 2;
        }
        this.context.viewer.activePlane = br.usp.dilvanLab.roi3DEditor.ALL;
        var c = this.context.viewer.getImageCoord(br.usp.dilvanLab.roi3DEditor.AXIAL);
        c = c + 0.09;
        this.context.viewer.setActiveImage(br.usp.dilvanLab.roi3DEditor.AXIAL, c);
        this.context.viewer.setActiveImage(br.usp.dilvanLab.roi3DEditor.SAGITTAL, c);
        this.context.viewer.setActiveImage(br.usp.dilvanLab.roi3DEditor.FRONTAL, c);
        this.context.viewer.drawImage();
    };
    MoveMode.prototype.onMouseUp = function (event) {
    };
    return MoveMode;
})(Mode);
//# sourceMappingURL=Webgl.js.map