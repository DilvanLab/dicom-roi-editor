(ns roiEditor.base
  (:require-macros [roiEditor.macros :refer [$]])
  (:require [re-frame.core :refer [reg-event-db reg-sub path dispatch]]
            [roiEditor.db :refer [initial-state]]))

;;   Browser events
;;
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

(defn update-all [map a b & args]
  (let [num (count args)
        map1 (update-in map a b)]
    (if (even? num)
      (if (zero? num)
        map1
        (apply update-all map1 args))
      (throw (js/Error. "update-all has one db and path and function pairs.")))))

(defn assoc-all [map a b & args]
  (let [num (count args)
        map1 (assoc-in map a b)]
    (if (even? num)
      (if (zero? num)
        map1
        (apply assoc-all map1 args))
      (throw (js/Error. "assoc-all has one db and path and function pairs.")))))

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
          ($(pos :x) < c-width && (pos :y) < c-height) :axial
          ($(pos :x) > c-width && (pos :y) > c-height) nil
          ($(pos :x) > c-width) :frontal
          ($(pos :y) > c-height) :sagittal
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

(defn $< [db & lst] (get-in db lst))

(reg-event-db
  :canvas-event
  (fn [db [_ [event view-id]]]
    (let [view1 ($< db :views view-id)
          mode  (db :tool)]
      (if-let
        [new (condp = (.-type event)
               MOUSE-DOWN
               ;(cond (not (or (.-shiftKey event) (.-metaKey event)))
               (canvas-event view1 mode event)
               MOUSE-MOVE
               (cond (.-isMouseDown event)
                     (if (.-shiftKey event)
                       (canvas-event view1 :zoom event)
                       (canvas-event view1 mode event)))
               WHEEL
               (if (not (.-metaKey event))
                   (canvas-event view1 :scroll event)
                   (canvas-event view1 mode event))
               ; default
               (canvas-event view1 mode event))]
        (assoc-all db [:views view-id] new
                   [:current] view-id)
        db))))

(reg-event-db
  :inc
  (fn [db _]
    (let [incn #(if (> (+ % 0.01) 0.99) 0.99 (+ % 0.01))
          view (db :current)]
      (update-all db
                  [:views view :axial :imgCoord] #(incn %)
                  [:views view :frontal :imgCoord] #(incn %)
                  [:views view :sagittal :imgCoord] #(incn %)))))

(reg-event-db
  :dec
  (fn [db _]
    (let [decn #(if (< (- % 0.01) 0) 0 (- % 0.01))
          view (db :current)]
      (update-all db
                  [:views view :axial :imgCoord] #(decn %)
                  [:views view :frontal :imgCoord] #(decn %)
                  [:views view :sagittal :imgCoord] #(decn %)))))

(reg-event-db
  :change-mode
  (path [:tool])  ;; this is middleware
  (fn [_ [_ value]]   ;; path middleware adjusts the first parameter
    value))

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
