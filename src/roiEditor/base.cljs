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

(ns roiEditor.base
  ;(:require-macros [roiEditor.macros :refer [$]])
  (:require [re-frame.core :refer [reg-event-db reg-sub path dispatch]]
            [roiEditor.db :refer [initial-state first-view]]))

;;   Browser events
;;
;; onchange  An HTML element has been changed
;; onclick  The user clicks an HTML element
;; onmouseover  The user moves the mouse over an HTML element
;; onmouseout  The user moves the mouse away from an HTML element
;; onkeydown  The user pushes a keyboard key
;; onload  The browser has finished loading the page

(def MOUSE-DOWN "mousedown")
(def MOUSE-UP "mouseup")
(def MOUSE-MOVE "mousemove")
(def MOUSE-OUT "mouseout")
(def DBL-CLICK "dblclick")
(def KEY-DOWN "keydown")
(def WHEEL "wheel")

(def last-mouse (atom {:x 0 :y 0}))
(def is-mouse-down (atom false))

(defn clip [[a b] x] (max (min x b) a))

;(defn update-all [map a b & args]
;  (let [num (count args)
;        map1 (update-in map a b)]
;    (if (even? num)
;      (if (zero? num)
;        map1
;        (apply update-all map1 args))
;      (throw (js/Error. "update-all has one db and path and function pairs.")))))
;
;(defn assoc-all [map a b & args]
;  (let [num (count args)
;        map1 (assoc-in map a b)]
;    (if (even? num)
;      (if (zero? num)
;        map1
;        (apply assoc-all map1 args))
;      (throw (js/Error. "assoc-all has one db and path and function pairs.")))))

;; -------------------------------
; [:canvas-event mode 

(defn canvas [event] (.-target event))

(defn editor [event] (.-editor (canvas event)))

(defn get-mouse-pos [event]
  (let [rect (.getBoundingClientRect (canvas event))]
    {:x (- (.-clientX event) (.-left rect))
     :y (- (.-clientY event) (.-top rect))}))

(defn active-plane [event]
  (case (.-activePlane (editor event))
    0 :axial
    1 :sagittal
    2 :frontal
    3 :all
    nil))

(defn plane2number [plane]
  (case plane
    :axial 0
    :sagittal 1
    :frontal 2
    :all 3
    -1))

(defn movement-x [event]
  ; We cannot use event.movementX because it's not
  ; supported in safari
  (.-movedX event))

(defn movement-y [event]
  ; We cannot use event.movementY because it's not
  ; supported in safari
  (.-movedY event))

(defn get-mouse [event]
  (let [canvas (canvas event)
        {:keys [x y]} (get-mouse-pos event)]
    ;; Coordinates are specific to each plane
    ;; If all planes are showing, they have to be corrected
    (if (= (active-plane event) :all)
      (let [width (/ (.-width canvas) 2)
            height (/ (.-height canvas) 2)]
        {:x (if (> x width) (- x width) x)
         :y (if (> y height) (- y height) y)})
      {:x x :y y})))

(defn which-plane [event]
  (let [canvas (canvas event)
        c-width (/ (.-width canvas) 2)
        c-height (/ (.-height canvas) 2)]
    (if (= (active-plane event) :all)
      (let [pos (get-mouse-pos event)]
        (cond
          (and (< (pos :x) c-width) (< (pos :y) c-height)) :axial
          (and (> (pos :x) c-width) (> (pos :y) c-height)) nil
          (> (pos :x) c-width) :frontal
          (> (pos :y) c-height) :sagittal
          :else nil))
      (active-plane event))))

;;
;; Canvas event multi method: This method is reimplemented for each
;; new tool

(defmulti canvas-event
          (fn [_ mode event]
            (if (= (.-type event) DBL-CLICK)
              [DBL-CLICK]
              [mode (.-type event)])))

(defmethod canvas-event [DBL-CLICK] [view _ event]
  (update-in view
             [:active-plane] #(if (= % :all) (which-plane event) :all)))

;;default handling
(defmethod canvas-event :default [_ mode event]
  (.log js/console  (str "canvas-event: " mode " " (.-type event))))

;;------------------------------------------------------------
;;

(defn dispatch-canvas-event [view-id]
  (fn [evt]
    (let [event (.-nativeEvent evt)]
      (condp = (.-type event)
        MOUSE-DOWN
        (do
          (reset! last-mouse {:x (.-clientX event) :y (.-clientY event)})
          (reset! is-mouse-down true))
        MOUSE-UP
        (do
          (reset! is-mouse-down false))
        ;; default asdasd
        (do
          (set! (.-movedX event) (- (.-clientX event) (:x @last-mouse)))
          (set! (.-movedY event) (- (.-clientY event) (:y @last-mouse)))
          (reset! last-mouse {:x (.-clientX event) :y (.-clientY event)})

          (set! (.-isMouseDown event) @is-mouse-down)))
      (dispatch [:canvas-event [event view-id]])
      (.preventDefault evt))))

;; -- Event Handlers ----------------------------------------------------------

(reg-event-db                                               ;; setup initial state     
  :initialize                                               ;; usage:  (dispatch [:initialize])
  (fn [db _]
    (merge db initial-state)))                              ;; what it returns becomes the new state

(reg-event-db                                               ;; setup initial state
  :read-patients                                               ;; usage:  (dispatch [:initialize])
  (fn [db [_ [patients]]]
    (assoc-in db [:patients] patients)))

(reg-event-db
  :canvas-event
  (fn [db [_ [event view-id]]]
    (let [view1 (get-in db [:views view-id])
          mode  (db :tool)]
      (if-let
        ;; keyboard shortcuts checked first. Shift and metakey
        ;; can change the chosen tool.
        [new (condp = (.-type event)
               MOUSE-DOWN
               ;(cond (not (or (.-shiftKey event) (.-metaKey event)))
               (canvas-event view1 mode event)
               MOUSE-MOVE
               (cond (.-isMouseDown event)
                     (if (.-shiftKey event)
                       (canvas-event view1 :zoom event)
                       (canvas-event view1 mode event)))
               WHEEL   ;;  Change the sphere radius in 3D mode when shift is down
               (if (not (.-metaKey event))
                   (canvas-event view1 :scroll event)
                   (canvas-event view1 mode event))
               ;; default
               (canvas-event view1 mode event))]
        (-> db
            (assoc-in [:views view-id] new)
            (assoc-in [:current] view-id))
        db))))
;(-> db
;    (assoc-in [:views view-id] new)
;    (assoc-in [:current] view-id))

(reg-event-db
  :inc
  (fn [db _]
    (let [incn #(if (> (+ % 0.01) 0.99) 0.99 (+ % 0.01))
          view (db :current)]
      (-> db
          (update-in [:views view :axial :imgCoord] #(incn %))
          (update-in [:views view :frontal :imgCoord] #(incn %))
          (update-in [:views view :sagittal :imgCoord] #(incn %))))))

(reg-event-db
  :dec
  (fn [db _]
    (let [decn #(if (< (- % 0.01) 0) 0 (- % 0.01))
          view (db :current)]
      (-> db
          (update-in [:views view :axial :imgCoord] #(decn %))
          (update-in [:views view :frontal :imgCoord] #(decn %))
          (update-in [:views view :sagittal :imgCoord] #(decn %))))))

(reg-event-db
  :change-mode
  (path [:tool])  ;; this is middleware
  (fn [_ [_ value]]   ;; path middleware adjusts the first parameter
    value))

;(reg-event-db                                               ;; setup initial state
;  :open-series                                               ;; usage:  (dispatch [:initialize])
;  (fn [db [_ [series]]]
;    ;ve se a serie ja existe
;    ;(.log js/console (str "A" seriesInfoSTR "A"))
;    ;(assoc db :current "editor0")
;    ;(.log js/console series) ;(js->clj (.parse js/JSON seriesInfoSTR)))
;    (-> db
;           (assoc-in [:views "editor0" :pngs] series) ;#(js->clj (.parse js/JSON seriesInfoSTR))
;           (assoc-in [:views "editor0" :tab] "1")
;           (assoc-in [:current] "editor0"))))
;    ;(update-in db [:current] "editor0" )

(reg-event-db
  :open-series
  (fn [db [_ [seriesInfoSTR]]]
    ;(.log js/console (clj->js seriesInfoSTR))
    (-> db
        (assoc-in [:views] first-view)
        (assoc-in [:views "editor0" :pngs] seriesInfoSTR)
        (assoc-in [:current] "editor0"))))
       ;(assoc-in [:views "editor0" :tab] "1")

;; -- Subscription Handlers ---------------------------------------------------

(reg-sub
  :initialize
  (fn [db _]
    (db :views)))

(reg-sub
  :change-mode
  (fn [db _]
    (db :tool)))

(reg-sub
  :canvas-event
  (fn [db _]
    (get (db :views) (db :current))))

(reg-sub
  :read-patients
  (fn [db _]
    (db :patients)))

(reg-sub
  :open-series
  (fn [db _]
    db))
