(defproject dicom-roi-editor "0.1.0"
  :dependencies [[org.clojure/clojure        "1.8.0"]
                 [org.clojure/clojurescript  "1.9.293"]
                 [reagent  "0.6.0" :exclusions [cljsjs/react]]
                 [re-frame "0.8.0"]
                 [cljs-react-material-ui "0.2.27"]
                 ;[rm-hull/jasentaa "0.2.3"]
                 [rm-hull/infix "0.2.11"]
                 [re-frisk "0.3.1"]
                 ;[figwheel-sidecar "0.5.8"]]
                 ;[binaryage/dirac "RELEASE"]
                 [binaryage/devtools "RELEASE"]
                 [binaryage/dirac "RELEASE"]]

  :plugins [[lein-cljsbuild "1.1.5"]
            ;[lein-shell "0.5.0"]
            ;[lein-cooper "1.2.2"]
            [lein-figwheel  "0.5.8"]]

  :hooks [leiningen.cljsbuild]

  :profiles {:dev {:cljsbuild
                   {:builds {:client {:source-paths ["devsrc"]
                                      :compiler     {:preloads [devtools.preload]
                                                     :main "roiEditor.dev"
                                                     :asset-path "js"
                                                     :optimizations :none
                                                     :source-map true
                                                     :source-map-timestamp true}}}}}

             :prod {:cljsbuild
                    {:builds {:client {:compiler    {:optimizations :advanced
                                                     :elide-asserts true
                                                     :pretty-print false}}}}}}

  :figwheel {:repl false}

  :clean-targets ^{:protect false} ["resources/public/js"]

  :cljsbuild {:builds {:client {:source-paths ["src"]
                                :compiler     {:output-dir "resources/public/js"
                                               :output-to  "resources/public/js/client.js"}}}})
