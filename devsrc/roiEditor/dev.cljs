(ns roiEditor.dev
  (:require [roiEditor.core :as editor]
            [figwheel.client :as fw]))

(fw/start {:on-jsload editor/run
           :websocket-url "ws://localhost:3449/figwheel-ws"})

