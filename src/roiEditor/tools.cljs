;
; Copyright (c) Dilvan A. Moreira 2016. All rights reserved.
;
;  This file is part of ePAD2.
;
;  ePAD2 is free software: you can redistribute it and/or modify
;  it under the terms of the GNU General Public License as published by
;  the Free Software Foundation, either version 3 of the License, or
;  (at your option) any later version.
;
;  ePAD2 is distributed in the hope that it will be useful,
;  but WITHOUT ANY WARRANTY; without even the implied warranty of
;  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;  GNU General Public License for more details.
;
;  You should have received a copy of the GNU General Public License
;  along with ePAD2.  If not, see <http://www.gnu.org/licenses/>.
;

(ns roiEditor.tools
  (:require-macros [roiEditor.macros :refer [when-let*]])
  (:require [roiEditor.base :refer [which-plane active-plane editor
                                    movement-x movement-y clip canvas
                                    plane2number get-mouse canvas-event
                                    WHEEL MOUSE-MOVE MOUSE-DOWN MOUSE-UP MOUSE-OUT KEY-DOWN]]))


;;-------------------------------------------------------------
;;   Tools implementation
;;

;;
;;    Move
;;
(defmethod canvas-event [:move MOUSE-MOVE] [view mode event]
  (when-let* [plane (which-plane event)
              mult (if (= :all (active-plane event)) 2 1)
              deltaX (* mult (.pixels2Units (editor event) (plane2number plane) (movement-x event)))
              deltaY (* mult (.pixels2Units (editor event) (plane2number plane) (movement-y event))
                        -1)]
             (-> view
                 (update-in [plane :x] #(- % deltaX))
                 (update-in [plane :y] #(- % deltaY)))))

;;
;;   Zoom
;;
(defmethod canvas-event [:zoom MOUSE-MOVE] [view mode event]
  (when-let* [plane (which-plane event)
              delta (/ (/ (+ (movement-x event)
                             (movement-y event))
                          4.0)
                       (.-width (canvas event)))]
             (update-in view
                        [plane :zoom] #(+ % delta))))

(defmethod canvas-event [:zoom KEY-DOWN] [view mode event]
  (let [code (.-charCode event)]
    (case code
      ;UP_ARROW
      38  (update-in view [:axial :zoom] #(/ % 0.9))
      ;DOWN_ARROW
      40  (update-in view [:axial :zoom] #(* % 0.9))
      ;RIGHT_ARROW
      39 (update-in view [:axial :imgCoord] #(clip [0 1] (+ % (/ 1.0 (-> view :series :numberOfImages)))))
      ;LEFT_ARROW
      37 (update-in view [:axial :imgCoord] #(clip [0 1] (- % (/ 1.0 (-> view :series :numberOfImages))))))))

(defn set-other-planes [view event]
  (let [mouse (get-mouse event)
        plane (which-plane event)
        ;pt (js->clj (.toUnits (get-editor event) plane (:x mouse) (:y mouse)) :keywordize-keys true)
        pt (.toUnits (editor event) (plane2number plane) (:x mouse) (:y mouse))
        [plane1 coord1 plane2 coord2]
        (case plane
          :axial    [:sagittal (.-x pt)                                :frontal (.-y pt)]
          :frontal  [:sagittal (.xCoord (editor event) (.-x pt))       :axial (- 1 (.-y pt))]
          :sagittal [:frontal  (.xCoord (editor event) (- 1 (.-x pt))) :axial (- 1 (.-y pt))]
          [nil nil nil nil])]
    (cond plane1
          (-> view
              (assoc-in [plane1 :imgCoord] coord1)
              (assoc-in [plane2 :imgCoord] coord2)))))

;;
;;    Scroll
;;
(defmethod canvas-event [:scroll MOUSE-DOWN] [view mode event]
  (set-other-planes view event))

(defmethod canvas-event [:scroll MOUSE-MOVE] [view mode event]
  (set-other-planes view event))

(defmethod canvas-event [:scroll WHEEL] [view mode event]
  (let [plane (which-plane event)]
    (cond plane
          (let [plane2act (if (= (view :active-plane) :all)
                            plane
                            (view :active-plane))]
            (update-in view
                       [plane2act :imgCoord]
                       #(clip [0 1]
                              (+ % (/ (if (pos? (.-deltaY event)) 1 -1)
                                      (-> view :series :numberOfImages)))))))))

;;
;;   Gradient
;;
(defmethod canvas-event [:gradient MOUSE-MOVE] [view mode event]
  (let [canvas (canvas event)
        default-wc (-> view :series :windowWidth) ;(js/parseInt(-> view :series :windowWidth))
        default-ww (-> view :series :windowCenter) ;(js/parseInt(-> view :series :windowCenter))
        deltaWW (* (/ (* 4 (movement-x event)) (.-width  canvas)) default-ww)
        deltaWC (* (/ (* 4 (movement-y event)) (.-height canvas)) default-wc)]
    (-> view
        (update-in [:windowing-center] #(if (<= (+ % deltaWC) 0) % (+ % deltaWC)))
        (update-in [:windowing-width]  #(if (<= (+ % deltaWW) 0) % (+ % deltaWW))))))

;;
;;   3D
;;
(defmethod canvas-event [:3D MOUSE-DOWN] [view mode event]
  (when-let* [mouse (get-mouse event)
              plane (which-plane event)]
             (update-in view
                        [:sphere] (fn [x]
                                    {:x (mouse :x) :y (mouse :y) :plane plane :radius (x :radius) :show true}))))

(defmethod canvas-event [:3D MOUSE-MOVE] [view mode event]
  (when-let* [mouse (get-mouse event)
              plane (which-plane event)]
             (update-in view
                        [:sphere] (fn [x]
                                    {:x (mouse :x) :y (mouse :y) :plane plane :radius (x :radius) :show true}))))

(defmethod canvas-event [:3D MOUSE-UP] [view mode event]
  (do
    (.stampSphere (editor event))
    (update-in view
               [:sphere :radius] #(+ % 0.0001))))

(defmethod canvas-event [:3D MOUSE-OUT] [view mode event]
  (assoc-in view
            [:sphere :show] false))

(defmethod canvas-event [:3D WHEEL] [view mode event]
  (update-in view
             [:sphere :radius]
             #(clip [0 1]
                    (+ % (if (pos? (.-deltaY event)) 0.01 -0.01)))))



