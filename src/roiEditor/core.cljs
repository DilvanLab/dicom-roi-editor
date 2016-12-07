(ns roiEditor.core
  (:require-macros [reagent.ratom :refer [reaction]]
                   [roiEditor.macros :refer [$ → when-let*]])
  (:require [cljsjs.material-ui]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
            [cljs-react-material-ui.reagent :as ui :refer [mui-theme-provider app-bar]]
            [cljs-react-material-ui.icons :as ic]
            ;[cljs-react-material-ui.colors :as sty]
            [reagent.core :as r]
            [re-frame.core :refer [reg-event-db
                                   path
                                   reg-sub
                                   dispatch
                                   dispatch-sync
                                   subscribe]]
            [re-frisk.core :refer [enable-re-frisk!]]
            [roiEditor.db :refer [initial-state]]))

;;   Browser events
;;
(def MOUSE-DOWN "mousedown")
(def MOUSE-UP "mouseup")
(def MOUSE-MOVE "mousemove")
;(def MOUSE-OUT "mouseout")
(def DBL-CLICK "dblclick")
(def KEY-DOWN "keydown")
(def WHEEL "wheel")

(def base-URL "1.2.826.0.1.3680043.8.420.29267207592271555902603369361594637742/series/1.2.826.0.1.3680043.8.420.13029244630897359628709378005929429184/images/");


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

(defn canvas [event]
;;  (.-currentTarget event)
  (.-target event))

(defn get-mouse-pos [event]
  (let [rect (.getBoundingClientRect (canvas event))]
    {:x (- (.-clientX event) (.-left rect))
     :y (- (.-clientY event) (.-top rect))}))

(defn editor [event]
  (.-editor (canvas event)))

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
    (update-all view
                [plane :x] #(- % deltaX)
                [plane :y] #(- % deltaY))))

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
          (assoc-all view
                     [plane1 :imgCoord] coord1
                     [plane2 :imgCoord] coord2))))

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
                          (+ % (/ (if (> (.-deltaY event) 0) 1 -1)
                                  (-> view :series :numberOfImages)))))))))

;;
;;   Gradient
;;
(defmethod canvas-event [:gradient MOUSE-MOVE] [view mode event]
  (let [canvas (canvas event)
        default-wc (js/parseInt(-> view :series :windowWidth))
        default-ww (js/parseInt(-> view :series :windowCenter))
        deltaWW ($ (4 * (movement-x event) / (.-width  canvas) * default-ww))
        deltaWC ($ (4 * (movement-y event) / (.-height canvas) * default-wc))]
    (update-all
      view
      [:windowing-center] #(if (<= (+ % deltaWC) 0) % (+ % deltaWC))
      [:windowing-width]  #(if (<= (+ % deltaWW) 0) % (+ % deltaWW)))))

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
               (cond (not (or (.-shiftKey event) (.-metaKey event)))
                     (canvas-event view1 mode event))
               MOUSE-MOVE
               (cond (.-isMouseDown event)
                     (if (.-shiftKey event)
                       (canvas-event view1 :zoom event)
                       (canvas-event view1 mode event)))
               WHEEL
               (canvas-event view1 :scroll event)
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

;; -- View Components ---------------------------------------------------------

(defn button [icon tooltip selected event]
  [:div {:title tooltip}
   [ui/flat-button {:icon  icon
                    :background-color (if selected "#d0d060" (color :background-color))
                    :style {:margin    "12px 0px"
                            :min-width "35px"}
                    :on-touch-tap #(dispatch event)}]])

(defn toolbar []
  (let [mode (subscribe [:change-mode])]
    (fn []
      [ui/toolbar
       [ui/toolbar-group ;{:first-child true}
        [ui/toolbar-title {:text "Tools"}]
        [button (ic/action-search) "zoom" (= @mode :zoom) [:change-mode :zoom]]
        [button (ic/maps-my-location) "scroll" (= @mode :scroll) [:change-mode :scroll]]
        [button (ic/image-brightness-6) "windowing" (= @mode :gradient) [:change-mode :gradient]]
        [button (ic/action-pan-tool) "move" (= @mode :move) [:change-mode :move]]]
       [ui/toolbar-group ;{:last-child true}
        ;[ui/toolbar-separator]
        [button (ic/communication-call-made) "move +1" false [:inc]]
        [button (ic/communication-call-received) "move -1" false [:dec]]]])))

(defn disp-event [view-id]
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
        ;; default
        (do
          (set! (.-movedX event) (- (.-clientX event) (:x @last-mouse)))
          (set! (.-movedY event) (- (.-clientY event) (:y @last-mouse)))
          (reset! last-mouse {:x (.-clientX event) :y (.-clientY event)})

          (set! (.-isMouseDown event) @is-mouse-down)))
      (dispatch [:canvas-event [event view-id]])
      (.preventDefault evt))))

(defn dicom-editor [editor-id]
  (let [views (subscribe [:canvas-event])]
    (fn []
        [:canvas {:is "dicom-roi-editor"
                  :id editor-id
                  :prefs (js/JSON.stringify (clj->js (@views :prefs)))
                  :series (js/JSON.stringify (clj->js (@views :series)))
                  :activeplane (@views :active-plane)
                  :windowingcenter (@views :windowing-center)
                  :windowingwidth (@views :windowing-width)
                  :axial (js/JSON.stringify (clj->js (@views :axial)))
                  :sagittal (js/JSON.stringify (clj->js (@views :sagittal)))
                  :frontal (js/JSON.stringify (clj->js (@views :frontal)))
                  :baseurl base-URL
                  :pngs (js/JSON.stringify (clj->js (@views :pngs)))
                  :on-mouse-down   (disp-event editor-id)
                  :on-mouse-up     (disp-event editor-id)
                  :on-mouse-move   (disp-event editor-id)
                  :on-mouse-out    (disp-event editor-id)
                  :on-double-click (disp-event editor-id)
                  :on-key-down     (disp-event editor-id)
                  :on-wheel        (disp-event editor-id)}])))

(defn simple-example []
  (let [editor-id (str "editor" 0)]

    [mui-theme-provider {:mui-theme (get-mui-theme
                                        {:palette {:text-color (color :blue800)}})}
      [:div
       [ui/app-bar {:title                 "ePAD"
                    :icon-class-name-right "muidocs-icon-navigation-expand-more"}]
       [toolbar editor-id]
       [ui/paper
        [:div {:class "editor-holder"}
         [dicom-editor editor-id]]]]]))


;; -- Entry Point -------------------------------------------------------------

(defn ^:export run
  []
  (dispatch-sync [:initialize])
  (enable-re-frisk!)
  (r/render [simple-example]
            (js/document.getElementById "app")))
