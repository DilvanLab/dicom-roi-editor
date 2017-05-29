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
  :dependencies [[org.clojure/clojure        "1.8.0"]
                 ;[org.clojure/clojure        "1.9.0-alpha14"]
                 [org.clojure/clojurescript  "1.9.293"]
                 [reagent  "0.6.0" :exclusions [cljsjs/react]]
                 [re-frame "0.8.0"]
                 [cljs-react-material-ui "0.2.27"]
                 ;[rm-hull/jasentaa "0.2.3"]
                 [rm-hull/infix "0.2.11"]
                 [re-frisk "0.3.1"]
                 ;[figwheel-sidecar "0.5.8"]]
                 ;[binaryage/dirac "RELEASE"]
                 [binaryage/devtools "RELEASE"]]
                 ;[binaryage/dirac "RELEASE"]]

  :plugins [[lein-cljsbuild "1.1.5"]
            ;[lein-shell "0.5.0"]
            ;[lein-cooper "1.2.2"]
            [lein-typescript "0.1.3"]
            [lein-figwheel  "0.5.8"]]

  ; It's used for running lein-typescript during compile phase
  :hooks [lein-typescript.plugin leiningen.cljsbuild]

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
                                               :output-to  "resources/public/js/client.js"}}}}
  :typescript {
               :sources ["resources/public/dicom-roi-editor/ts/*.ts"]
               :excludes [""]
               ;:watch true
               :out "resources/public/dicom-roi-editor/js/app.js"
               ;:out-dir "target"
               ;:module :amd
               :declaration true
               :source-map true
               :remove-comments true
               :preserve-const-enums true
               :suppress-implicit-any-index-errors false
               :target :es5})
               ;:debug true})
