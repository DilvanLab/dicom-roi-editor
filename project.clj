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
;  Foobar is distributed in the hope that it will be useful,
;  but WITHOUT ANY WARRANTY; without even the implied warranty of
;  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;  GNU General Public License for more details.
;
;  You should have received a copy of the GNU General Public License
;  along with ePAD2.  If not, see <http://www.gnu.org/licenses/>.
;

(defproject dicom-roi-editor "0.1.0"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [;[org.clojure/clojure        "1.8.0"]
                 [org.clojure/clojure        "1.9.0-alpha20"]
                 [org.clojure/clojurescript  "1.9.908"]
                 [reagent  "0.6.0" :exclusions [cljsjs/react]] ;not possible to upgrade
                 [re-frame "0.10.1"]
                 [cljs-react-material-ui "0.2.36"];not possible to upgrade
                 ;[rm-hull/jasentaa "0.2.3"]
                 ;[rm-hull/infix "0.2.11"]
                 [cljs-ajax "0.7.2"]
                 [figwheel-sidecar "0.5.13"]
                 [re-frisk "0.5.0"]]
                 ;[devcards "0.2.3"]
                 ;[sablono "0.7.4"]]
                 ;[figwheel-sidecar "0.5.8"]]
                 ;[binaryage/dirac "RELEASE"]
                 ;[binaryage/devtools "RELEASE"]
                  ;7.4"]]
                 ;[binaryage/dirac "RELEASE"]]

  :plugins [[lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]
            ;[lein-shell "0.5.0"]
            ;[lein-cooper "1.2.2"]
            [lein-typescript "0.1.3"]
            [lein-figwheel  "0.5.13"]] ;;Removed to run in Intellij repl

  :clean-targets ^{:protect false} ["resources/public/js"
                                    "target"]

  :source-paths ["src" "script" "devsrc"]

  ; It's used for running lein-typescript during compile phase
  :hooks [lein-typescript.plugin leiningen.cljsbuild]

  :profiles {:dev  {:dependencies [
                                   [binaryage/devtools "0.9.4"]
                                   [figwheel-sidecar "0.5.13"]
                                   [com.cemerick/piggieback "0.2.2"]]
                    ;; need to add dev source path here to get user.clj loaded
                    :source-paths ["src" "devsrc"]
                    ;; for CIDER :plugins [[cider/cider-nrepl "0.12.0"]]
                    :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                    ;:clean-targets ^{:protect false} ["resources/public/js"
                    ;                                  :target-path]
                    }}

                    ;:cljsbuild {:builds [{:id "dev"
                    ;                      :source-paths ["devsrc"]
                    ;                      :figwheel {;:devcards true
                    ;                                 :on-jsload "roiEditor.core/on-js-reload"
                    ;                                 ;; :open-urls will pop open your application
                    ;                                 ;; in the default browser once Figwheel has
                    ;                                 ;; started and compiled your application.
                    ;                                 ;; Comment this out once it no longer serves you.
                    ;                                 :open-urls ["http://localhost:3449/index.html"]}
                    ;                      :compiler {
                    ;                                 :optimizations :none
                    ;                                 :source-map true
                    ;                                 :source-map-timestamp true}}]}}}

             ;:prod {:cljsbuild {:builds [{:compiler {:optimizations :advanced
             ;                                        :elide-asserts true
             ;                                        :pretty-print false}}]}}

  :figwheel {:css-dirs ["resources/public/css"]} ;:repl false}

;  :clean-targets ^{:protect false} ["resources/public/js"]

  :cljsbuild {:builds [
                       ;{:id "devcards"
                       ; :source-paths ["src" "devsrc"]
                       ; :figwheel {:devcards true
                       ;            :on-jsload "roiEditor.devcards/on-js-reload"
                       ;            :open-urls ["http://localhost:3449/cards.html"]} ;; <- note this
                       ; :compiler {:main    roiEditor.devcards
                       ;            :asset-path "js/devcards_out"
                       ;            :output-to  "resources/public/js/roiEditor_devcards.js"
                       ;            :output-dir "resources/public/js/devcards_out"
                       ;            :source-map-timestamp true }}
                       {:id "dev"
                        :source-paths ["src" "devsrc"]

                        :figwheel {;:devcards true
                                   :on-jsload "roiEditor.core/mount-root" ;on-js-reload"
                                   ;; :open-urls will pop open your application
                                   ;; in the default browser once Figwheel has
                                   ;; started and compiled your application.
                                   ;; Comment this out once it no longer serves you.
                                   :open-urls ["http://localhost:3449/index.html"]}

                        :compiler     {:main roiEditor.core
                                       :asset-path "js"
                                       :output-dir "resources/public/js"
                                       :output-to  "resources/public/js/client.js"
                                       :source-map-timestamp true
                                       ;; To console.log CLJS data-structures make sure you enable devtools in Chrome
                                       ;; https://github.com/binaryage/cljs-devtools
                                       :preloads [devtools.preload re-frisk.preload]}}
                       ;; This next build is a compressed minified build for
                       ;; production. You can build this with:
                       ;; lein cljsbuild once min
                       {:id "min"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/js/client.js"
                                   :main roiEditor.core
                                   :optimizations :advanced
                                   :pretty-print false
                                   :elide-asserts true}}]}
  :typescript {
               :sources ["resources/public/bower_components/dicom-roi-editor/ts/*.ts"]
               :excludes [""]
               ;:watch true
               :out "resources/public/bower_components/dicom-roi-editor/js/app.js"
               ;:out-dir "target"
               ;:module :amd
               :declaration true
               :source-map true
               :remove-comments true
               :preserve-const-enums true
               :suppress-implicit-any-index-errors false
               :target :es5})
               ;:debug true})
