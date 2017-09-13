(ns roiEditor.dev
  (:require [roiEditor.core :as editor]
            [figwheel.client :as fw]))
            ;[sablono.core :as sab :include-macros true]
            ;[cljs-react-material-ui.reagent :as ui]
            ;[cljs-react-material-ui.core :refer [get-mui-theme color]]
            ;[reagent.core :as reagent])

  ;(:require-macros
  ;          [devcards.core :as dc :refer [defcard deftest]]))

(fw/start {:on-jsload editor/run
           :websocket-url "ws://localhost:3449/figwheel-ws"})

;(enable-console-print!)
;
;(defcard first-card
;         (sab/html [:div
;                    [:h1 "This is your first devcard!"]]))
;
;(defonce data (reagent/atom {:option :move}))
;
;(defcard counter
;  (dc/reagent
;    (fn [mode owner]
;      (sab/html
;        [ui/mui-theme-provider {:mui-theme (get-mui-theme
;                                              {:palette {:text-color (color :blue800)}})}
;          [ui/tabs
;            [ui/tab {:label "Menu" :value "0"}
;               (editor/toolbar-cmp (:option @mode)
;                                   (fn [i]
;                                     (js/alert (clj->js i))))]]])))
;                                     ;(swap! data assoc :option i)))]]])))
;  data
;  {:inspect-data true
;   :frame true
;   :history true})
;
;
;
;(defcard counter2
;         "**Optional Mardown documentation**"
;         (fn [data-atom owner]
;           (sab/html
;             [:div
;              [:h3 "Example Counter w/Initial Data: " (:count @data-atom)]
;              [:button
;               {:onClick (fn [] (swap! data-atom update-in [:count] inc))}
;               "inc"]]))
;         {:count 50})
;
;(defn main []
;  ;; conditionally start the app based on whether the #main-app-area
;  ;; node is on the page
;  (if-let [node (.getElementById js/document "main-app-area")]
;    (.render js/ReactDOM (sab/html [:div "This is working"]) node)))
;
;(main)
;
;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
