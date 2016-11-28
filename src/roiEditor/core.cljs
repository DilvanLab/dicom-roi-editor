(ns roiEditor.core
  (:require-macros [reagent.ratom :refer [reaction]]
                   [roiEditor.macros :refer [$ →]])
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
            [goog.events :as gevents])

  (:import  (goog.events EventTarget EventType)))

;; trigger a dispatch every second
;(defonce time-updater (js/setInterval
;                        #(dispatch [:timer (js/Date.)]) 1000]))

;;   Browser events
;;
(def MOUSE-DOWN EventType.MOUSEDOWN)
(def MOUSE-UP EventType.MOUSEUP)
(def MOUSE-MOVE EventType.MOUSEMOVE)
(def MOUSE-OUT EventType.MOUSEOUT)
(def DBL-CLICK EventType.DBLCLICK)
(def KEY-DOWN EventType.KEYDOWN)
(def WHEEL EventType.WHEEL)


(def base-URL "1.2.826.0.1.3680043.8.420.29267207592271555902603369361594637742/series/1.2.826.0.1.3680043.8.420.13029244630897359628709378005929429184/images/");

(def ALL js/br.usp.dilvanLab.roi3DEditor.ALL)
(def AXIAL js/br.usp.dilvanLab.roi3DEditor.AXIAL)
(def FRONTAL js/br.usp.dilvanLab.roi3DEditor.FRONTAL)
(def SAGITTAL js/br.usp.dilvanLab.roi3DEditor.SAGITTAL)

(def pref
  {:overrideCenter 0,
   :overrideWidth  0,
   :windowOverride false})

(def series {
             :bitsStored          "16",
             :columns             512,
             :numberOfImages      145,
             :pixelRepresentation "1",
             :pixelSpacing        "0.703125\\0.703125",
             :rescaleIntercept    "-1024",
             :rescaleSlope        "1",
             :rows                512,
             :sliceThickness      "1.25",
             :windowCenter        "00040\\00040",
             :windowWidth         "00400\\00400"})

(def lstPngs [
              "1.2.826.0.1.3680043.8.420.16553737991475343282684803816940891307.png",
              "1.2.826.0.1.3680043.8.420.28861109596090543877254334913500645343.png",
              "1.2.826.0.1.3680043.8.420.92281134123008251785793891126452925630.png",
              "1.2.826.0.1.3680043.8.420.95418694341377556084502693525860526304.png",
              "1.2.826.0.1.3680043.8.420.69336276654178614372303317802130256763.png",
              "1.2.826.0.1.3680043.8.420.33118142859754977170296252077772049894.png",
              "1.2.826.0.1.3680043.8.420.16030464486410413234834494170091728765.png",
              "1.2.826.0.1.3680043.8.420.27351397110527101639742457467496693527.png",
              "1.2.826.0.1.3680043.8.420.73638772490717402537609228835290975047.png",
              "1.2.826.0.1.3680043.8.420.13713822034162080800818081832061855796.png",
              "1.2.826.0.1.3680043.8.420.30031525206349246930333901742473812321.png",
              "1.2.826.0.1.3680043.8.420.11268468743527426844992342917158948993.png",
              "1.2.826.0.1.3680043.8.420.29551532304221838205412664984408553220.png",
              "1.2.826.0.1.3680043.8.420.46512340772811126708095721265683085057.png",
              "1.2.826.0.1.3680043.8.420.70406582294974920054340231142326278563.png",
              "1.2.826.0.1.3680043.8.420.23270265281944356337601773604512168388.png",
              "1.2.826.0.1.3680043.8.420.22915313681053598418791323537011397850.png",
              "1.2.826.0.1.3680043.8.420.12104883052389024268447088977320065477.png",
              "1.2.826.0.1.3680043.8.420.26947794936797081668505216579674359329.png",
              "1.2.826.0.1.3680043.8.420.40527429940865208838588592111667988278.png",
              "1.2.826.0.1.3680043.8.420.29558685463726005330677318315980506339.png",
              "1.2.826.0.1.3680043.8.420.22371060708357308689958995558081136261.png",
              "1.2.826.0.1.3680043.8.420.32837287199671026450949731408129999262.png",
              "1.2.826.0.1.3680043.8.420.28443934396521767295900043022580292344.png",
              "1.2.826.0.1.3680043.8.420.13881751664202690633483892306760334821.png",
              "1.2.826.0.1.3680043.8.420.89582242671750029523983773332351615256.png",
              "1.2.826.0.1.3680043.8.420.30320030276588513829308461090972767967.png",
              "1.2.826.0.1.3680043.8.420.68906203166724213143383896268008712272.png",
              "1.2.826.0.1.3680043.8.420.46499646352487653356278183906983662324.png",
              "1.2.826.0.1.3680043.8.420.20500855770053012383483706598907978125.png",
              "1.2.826.0.1.3680043.8.420.29959599193046020805954121779902208822.png",
              "1.2.826.0.1.3680043.8.420.32540377588402987845341052577333094030.png",
              "1.2.826.0.1.3680043.8.420.25722038773225404535134094011084273602.png",
              "1.2.826.0.1.3680043.8.420.30690205964978385439072373723385590648.png",
              "1.2.826.0.1.3680043.8.420.32414468305913097442467214130426119517.png",
              "1.2.826.0.1.3680043.8.420.31379096286186342549344682660613630312.png",
              "1.2.826.0.1.3680043.8.420.65197990274162997100913673681512651287.png",
              "1.2.826.0.1.3680043.8.420.27486983700272590136079136691427062619.png",
              "1.2.826.0.1.3680043.8.420.15660174628675259944180326362148895928.png",
              "1.2.826.0.1.3680043.8.420.33640137026986344682230235892124332090.png",
              "1.2.826.0.1.3680043.8.420.33727957740162863432921287896145289385.png",
              "1.2.826.0.1.3680043.8.420.17021898611603086333930407228790046975.png",
              "1.2.826.0.1.3680043.8.420.37495522045529822564706514239904666082.png",
              "1.2.826.0.1.3680043.8.420.79017463112085688674153480462964426834.png",
              "1.2.826.0.1.3680043.8.420.31986792252857074904221675944649703962.png",
              "1.2.826.0.1.3680043.8.420.16536147987224798036765098021862441984.png",
              "1.2.826.0.1.3680043.8.420.12532738115457417541515185689607397453.png",
              "1.2.826.0.1.3680043.8.420.32419489757742138837394046658551878069.png",
              "1.2.826.0.1.3680043.8.420.14796455402546925221450720842726244052.png",
              "1.2.826.0.1.3680043.8.420.38930447352223788651961242735051541362.png",
              "1.2.826.0.1.3680043.8.420.23097050328931457260230097455578301005.png",
              "1.2.826.0.1.3680043.8.420.28238920397199277876489712910375210705.png",
              "1.2.826.0.1.3680043.8.420.12793702795215197193600862416202894367.png",
              "1.2.826.0.1.3680043.8.420.16293903293657431145114351725808875925.png",
              "1.2.826.0.1.3680043.8.420.24482723044054421106411956800648541664.png",
              "1.2.826.0.1.3680043.8.420.11614358581095503274681067134738240187.png",
              "1.2.826.0.1.3680043.8.420.30378322543736087149597517761914661084.png",
              "1.2.826.0.1.3680043.8.420.32871741308339175317235055399198610633.png",
              "1.2.826.0.1.3680043.8.420.66437012267632604970025962662397124248.png",
              "1.2.826.0.1.3680043.8.420.33489905624951750654449830418099468913.png",
              "1.2.826.0.1.3680043.8.420.30285863645050639092703431472144821188.png",
              "1.2.826.0.1.3680043.8.420.30011966631502980452940166843246828438.png",
              "1.2.826.0.1.3680043.8.420.26795495954472708636270225964560776012.png",
              "1.2.826.0.1.3680043.8.420.33595447154785545252381749189255496650.png",
              "1.2.826.0.1.3680043.8.420.74247327849666218604729204537024543882.png",
              "1.2.826.0.1.3680043.8.420.70208814779988168566575366958110867358.png",
              "1.2.826.0.1.3680043.8.420.28822163156008332215577019361338396285.png",
              "1.2.826.0.1.3680043.8.420.24910810878877211230631409120148224773.png",
              "1.2.826.0.1.3680043.8.420.68532117716993406711486043397299040587.png",
              "1.2.826.0.1.3680043.8.420.23253249761639110725935254975375483378.png",
              "1.2.826.0.1.3680043.8.420.19493005327906359440203291840627564980.png",
              "1.2.826.0.1.3680043.8.420.19334981854685146037883505860186956077.png",
              "1.2.826.0.1.3680043.8.420.30988896448954341633769374510355316242.png",
              "1.2.826.0.1.3680043.8.420.17847256856448597241576078036753787778.png",
              "1.2.826.0.1.3680043.8.420.22667289907541038365002676709165799500.png",
              "1.2.826.0.1.3680043.8.420.30126316220061260270131502477767200684.png",
              "1.2.826.0.1.3680043.8.420.43337735338427527626557974398959368667.png",
              "1.2.826.0.1.3680043.8.420.33406910006825179564394954463853869128.png",
              "1.2.826.0.1.3680043.8.420.32200387510961024751621381738031244459.png",
              "1.2.826.0.1.3680043.8.420.20537641044797791420695886840923260598.png",
              "1.2.826.0.1.3680043.8.420.35680920724704352043773219130762632398.png",
              "1.2.826.0.1.3680043.8.420.11881655835584151855919753546342924685.png",
              "1.2.826.0.1.3680043.8.420.25871830256012963123978691852034471891.png",
              "1.2.826.0.1.3680043.8.420.17126207244724243966926506400777622427.png",
              "1.2.826.0.1.3680043.8.420.14883410179536413830149951654515367919.png",
              "1.2.826.0.1.3680043.8.420.17719484370174605590529651971985507765.png",
              "1.2.826.0.1.3680043.8.420.39255509408078958174856487579001083715.png",
              "1.2.826.0.1.3680043.8.420.28395341994085646125754185462750549448.png",
              "1.2.826.0.1.3680043.8.420.18772124287416289712284781693451983581.png",
              "1.2.826.0.1.3680043.8.420.18689588848251310708007231469827908255.png",
              "1.2.826.0.1.3680043.8.420.4556806051523012272044451733650983458.png",
              "1.2.826.0.1.3680043.8.420.12742325897655935532961649984939833117.png",
              "1.2.826.0.1.3680043.8.420.29190838650409576784164852249440209151.png",
              "1.2.826.0.1.3680043.8.420.22751419168770843231624801120335512354.png",
              "1.2.826.0.1.3680043.8.420.16194871272594403349323652402805668348.png",
              "1.2.826.0.1.3680043.8.420.23765937055853598373572600243639782495.png",
              "1.2.826.0.1.3680043.8.420.29026083866656711119632048147178071119.png",
              "1.2.826.0.1.3680043.8.420.54863039770491981821780629546151407275.png",
              "1.2.826.0.1.3680043.8.420.32894091809267436106846002959204597452.png",
              "1.2.826.0.1.3680043.8.420.32883586033702273842700270481934901211.png",
              "1.2.826.0.1.3680043.8.420.16407750155436184186373462186468487675.png",
              "1.2.826.0.1.3680043.8.420.86731584823190804742449485842450128118.png",
              "1.2.826.0.1.3680043.8.420.11918245677821785458947585104544098541.png",
              "1.2.826.0.1.3680043.8.420.81393130571932871333344414785970159748.png",
              "1.2.826.0.1.3680043.8.420.16678061080860752647280458168657727910.png",
              "1.2.826.0.1.3680043.8.420.33829525983883660835063832293383368812.png",
              "1.2.826.0.1.3680043.8.420.26844404237277175594848359173260125744.png",
              "1.2.826.0.1.3680043.8.420.17149101040386480310671809143468757914.png",
              "1.2.826.0.1.3680043.8.420.30213438018705227728726110362014775680.png",
              "1.2.826.0.1.3680043.8.420.18015475315699186833892201285031718715.png",
              "1.2.826.0.1.3680043.8.420.10644270760634711819696210340323435844.png",
              "1.2.826.0.1.3680043.8.420.25684091020680899363084754821413265951.png",
              "1.2.826.0.1.3680043.8.420.24478155285783435038735160229328308446.png",
              "1.2.826.0.1.3680043.8.420.55486695001931520928174583453072369004.png",
              "1.2.826.0.1.3680043.8.420.32148113456837446391375086056899752182.png",
              "1.2.826.0.1.3680043.8.420.32975078299044444390862939867202238098.png",
              "1.2.826.0.1.3680043.8.420.22217254601106967232450037493973202412.png",
              "1.2.826.0.1.3680043.8.420.17003764697452048632256291746275386178.png",
              "1.2.826.0.1.3680043.8.420.83542011516511383301850512534649099653.png",
              "1.2.826.0.1.3680043.8.420.22362997405673813525870673783830938178.png",
              "1.2.826.0.1.3680043.8.420.31913737696217604675190087135123495432.png",
              "1.2.826.0.1.3680043.8.420.24845571685787506799443619864941724239.png",
              "1.2.826.0.1.3680043.8.420.24306896768631462048194711367215376650.png",
              "1.2.826.0.1.3680043.8.420.18263637052056516536914084758170218972.png",
              "1.2.826.0.1.3680043.8.420.95984815447615635747248367889370987248.png",
              "1.2.826.0.1.3680043.8.420.10139059003368181145184236900601746520.png",
              "1.2.826.0.1.3680043.8.420.26188983091323417856059442362464850905.png",
              "1.2.826.0.1.3680043.8.420.16046616934201200271746111550175967124.png",
              "1.2.826.0.1.3680043.8.420.57481249698913543491600298015207758669.png",
              "1.2.826.0.1.3680043.8.420.23821313924816847020644540303060853476.png",
              "1.2.826.0.1.3680043.8.420.27629151528061233715639281745422806732.png",
              "1.2.826.0.1.3680043.8.420.10299974335922660153201461413780728568.png",
              "1.2.826.0.1.3680043.8.420.22154093534328963686468877082478736455.png",
              "1.2.826.0.1.3680043.8.420.32540904231646286905786027296537173562.png",
              "1.2.826.0.1.3680043.8.420.10182416961272461475470963187925401769.png",
              "1.2.826.0.1.3680043.8.420.32327243320517188989041027789010194926.png",
              "1.2.826.0.1.3680043.8.420.48735739934718154217084800249833250324.png",
              "1.2.826.0.1.3680043.8.420.11901483335539391261258526726402523290.png",
              "1.2.826.0.1.3680043.8.420.20605164337638702696376221453462298284.png",
              "1.2.826.0.1.3680043.8.420.14990776251669146435388038157404459557.png",
              "1.2.826.0.1.3680043.8.420.24278511605311296604352503623326655456.png",
              "1.2.826.0.1.3680043.8.420.31685497780190861865918954284059467235.png",
              "1.2.826.0.1.3680043.8.420.24188938019700070401699010290794317339.png",
              "1.2.826.0.1.3680043.8.420.25262566473088730394743177389226598459.png",
              "1.2.826.0.1.3680043.8.420.32592795188011088359506779691378232430.png"])

(def last-mouse (atom {:x 0 :y 0}))
(def mouse-is-down (atom false))

(def initial-state
  {:views [{:prefs pref
            :series series
            :pngs lstPngs
            :editor nil}]
   :context {:last-mouse {:x 0 :y 0}
             :mouse-is-down false}})

(defn current-view [db] (nth (:views db) 0))

;; -------------------------------
; [:canvas-event mode

(defn get-mouse-pos [editor event]
  (let [canvas (-> editor .-gl .-canvas)
        rect (.getBoundingClientRect canvas)]
    {:x (- event.clientX (.-left rect))
     :y (- event.clientY (.-top rect))}))



(defn get-mouse [editor event]
  (let [canvas (-> editor .-gl .-canvas)
        {:keys [x y]} (get-mouse-pos editor event)]

    ;; Coordinates are specific to each plane
    ;; If all planes are showing, they have to be corrected
    (if (= (.-activePlane editor) ALL)
      (let [width (/ (.-width canvas) 2)
            height (/ (.-height canvas) 2)]
        {:x (if (> x width) (- x width) x)
         :y (if (> y height) (- y height) y)})
      {:x x :y y})))

(defn which-plane [editor event]
  (let [canvas (-> editor .-gl .-canvas)
        c-width (/ (.-width canvas) 2)
        c-height (/ (.-height canvas) 2)
        active-plane (.-activePlane editor)]
    (if (= active-plane ALL)
      (let [pos (get-mouse-pos editor event)]
        (cond
          ($(:x pos) < c-width && (:y pos) < c-height) AXIAL
          ($(:x pos) > c-width && (:y pos) > c-height) -1
          ($(:x pos) > c-width) FRONTAL
          ($(:y pos) > c-height) SAGITTAL
          :else -1))
      active-plane)))

(defmulti canvas-event
          (fn [_ mode event]
            ;(js/alert (str (-> (:editor db) .-context .-tool) " & " event))
            (if (= event.type EventType.DBLCLICK)
              [EventType.DBLCLICK]
              [mode event.type])))

(defmethod canvas-event [EventType.DBLCLICK] [db _ event]
  (let [editor (:editor (current-view db))]
    (if (= (.-activePlane editor) ALL)
      (set! (.-activePlane editor) (which-plane editor event))
      (set! (.-activePlane editor) ALL))
    (.drawImage editor)))


;;default handling
(defmethod canvas-event :default [db mode event]
  (println (str "canvas-event: " mode " " (.-type event)))) ;(:context :tool db) "="))) ;event-type)))

;;-------------------------------------------------------------
;;   Tools implementation
;;

;;
;;    Move
;;
(defn deltaX [editor x old-x]
  (let [canvas (-> editor .-gl .-canvas)
        rect (.getBoundingClientRect canvas)]
    (- (- old-x (.-left rect)) (- x (.-left rect)))))

(defn deltaY [editor x old-x]
  (let [canvas (-> editor .-gl .-canvas)
        rect (.getBoundingClientRect canvas)]
    (- (- old-x (.-top rect)) (- x (.-top rect)))))

(defmethod canvas-event ["move" MOUSE-MOVE] [db mode event]
  (let [;event (.getBrowserEvent g-event)
        editor (:editor (current-view db))
        plane (which-plane editor event)
        mouse (get-mouse-pos editor event)
        mult (if (= ALL (.-activePlane editor)) 2 1)
        deltaX (* mult (.pixels2Units editor plane
                                      ;(- (:x mouse) (:x (-> db :context :last-mouse)))
                                      (.-movementX (.getBrowserEvent event))))
                                      ;(deltaX editor (.-clientX event) (+ (.-clientX event) (.-movementX (.getBrowserEvent event))))
                                      ;(- (.-clientX event) (.-mouseDownX event));(:x (-> db :context :last-mouse)))))
                                      ;event.movementX))
        deltaY (* mult (.pixels2Units editor plane
                                      ;(- (:y mouse) (:y (-> db :context :last-mouse))))
                                      (.-movementY (.getBrowserEvent event)))
                                      ;(deltaY editor (.-clientY event) (+ (.-clientY event) (.-movementY (.getBrowserEvent event))))

  ;(- (.-clientY event) (.-mouseDownY event)));(:y (-> db :context :last-mouse))))
                                      ;event.movementY)))] ;))))]
                  -1)]

    (cond (not= plane -1)
          (do
            (.setX editor plane (- (.getX editor plane) deltaX))
            (.setY editor plane (- (.getY editor plane) deltaY))
            (.drawImage editor)
            (assoc-in db [:context :last-mouse] mouse)))))

;;
;;   Zoom
;;
(defmethod canvas-event ["zoom" MOUSE-MOVE] [db mode event]
  (let [;m-old (→ db :context :last-mouse)
        editor (:editor (current-view db))
        ;m-now (get-mouse-pos editor event)
        plane (which-plane editor event)
        ;delta («(((:x m-now) - (:x m-old)) + ((:y m-now) - (:y m-old))) / 4)
        delta (/ (+ (.-movementX (.getBrowserEvent event));(- (:x m-now) (:x m-old))
                    (.-movementY (.getBrowserEvent event)));(- (:y m-now) (:y m-old)))
                 4)
        ;zoom (« (.getZoom editor plane) + delta / (→ editor .-gl .-canvas .-width))
        zoom (+ (.getZoom editor plane)
                (/ delta
                   (→ editor .-gl .-canvas .-width)))]
    (.setZoom editor plane zoom)
    (.drawImage editor)))

(defmethod canvas-event ["zoom" KEY-DOWN] [db mode event]
  (let [editor (:editor (current-view db))
        code (.-charCode event)]
    (js/alert code)
    (case code
      ;UP_ARROW
      38 (.setZoom editor AXIAL (/ (.getZoom editor AXIAL) 0.9))
      ;DOWN_ARROW
      40 (.setZoom editor AXIAL (* (.getZoom editor AXIAL) 0.9))
      ;RIGHT_ARROW
      39 (.setActiveImage editor AXIAL (js/Math.max(js/Math.min(+ (.getImageCoord editor AXIAL) (/ 1.0 (.-imageNumber editor))) 1) 0))
      ;LEFT_ARROW
      37 (.setActiveImage editor AXIAL (js/Math.max(js/Math.min(+ (.getImageCoord editor AXIAL) (/ 1.0 (.-imageNumber editor))) 1) 0)))
    (.drawImage editor)))


;;
;;    Scroll
;;
(defmethod canvas-event ["scroll" MOUSE-DOWN] [db mode event]
  (let [editor (:editor (current-view db))
        mouse (get-mouse editor event)
        plane (which-plane editor event)]
    (cond (not= plane -1)
          (do
            (.setPlanesCoord editor plane (:x mouse) (:y mouse))
            ;(println (:x mouse) "- " (:y mouse))
            (.drawImage editor)))))

(defmethod canvas-event ["scroll" MOUSE-MOVE] [db mode event]
  (let [editor (:editor (current-view db))
        mouse (get-mouse editor event)
        plane (which-plane editor event)]
    (cond (not= plane -1)
          (do
            (.setPlanesCoord editor plane (:x mouse) (:y mouse))
            ;(println (:x mouse) "- " (:y mouse))
            (.drawImage editor)))))

(defmethod canvas-event ["scroll" WHEEL] [db mode g-event]
  (let [event (.getBrowserEvent g-event)
        editor (:editor (current-view db))
        plane (which-plane editor event)
        clip #(max (min % 1) 0)]
    (cond (not= plane -1)
          (let [plane2act (if (= (.-activePlane editor) ALL)
                            plane
                            (.-activePlane editor))]
            (.setActiveImage editor plane2act
                             (clip
                               (+ (.getImageCoord editor plane2act)
                                  ;;   It shouldn' be this way. Why do we have to call the
                                  ;;   browser event to get the deltaY?
                                  (/ (if (> (.-deltaY event) 0) 1 -1)
                                     (.-imageNumber editor)))))
            (.drawImage editor)))))


;;
;;   Gradient
;;

(defn set-windowing! [editor center width]
  (if ($ center = 0 && width = 0) ;and (= 0 center) (= 0 width)
    (do
      (set! (.-windowingCenter editor) (.-defaultWC editor))
      (set! (.-windowingWidth editor)  (.-defaultWW editor)))
    (do
      (set! (.-windowingCenter editor) center)
      (set! (.-windowingWidth editor)  width))))

(defmethod canvas-event ["gradient" MOUSE-MOVE] [db mode g-event]
  (let [event (.getBrowserEvent g-event)
        editor (:editor (current-view db))
        canvas (-> editor .-gl .-canvas)
        deltaWW ($ (4 * (.-movementX event) / (.-width  canvas) * (.-defaultWW editor)))
        deltaWC ($ (4 * (.-movementY event) / (.-height canvas) * (.-defaultWC editor)))]
        ;deltaWW2 (* (/ (* 4 (.-movementX event)) (.-width  canvas)) (.-defaultWW editor))
        ;deltaWC2 (* (/ (* 4 (.-movementY event)) (.-height canvas)) (.-defaultWC editor))]
    ;(js/alert (in/form '($ (4 * (.-movementX event)) / (.-width canvas) * (.-defaultWW editor))))
    ;(cond (or (not= deltaWW deltaWW2) (not= deltaWC deltaWC2))
    ;      (js/alert (str " Not equal!" deltaWW " " deltaWW2 " & " deltaWC " " deltaWC2))]
    (set-windowing! editor (+ (.-windowingCenter editor) deltaWC) (+ (.-windowingWidth editor) deltaWW))
    (.drawImage editor)))

;;-----------------------


(defn load-pics [editor lstPngs]
  (dorun (map-indexed
           #(.loadPngTexture editor %1 (str base-URL %2))
           lstPngs))
  (js/resizeCanvas))

(defn get-pos [canvas event]
  (let [rect (.getBoundingClientRect canvas)]
    {:x (- event.clientX (.-left rect))
     :y (- event.clientY (.-top rect))}))


(defn listen [element event-type fnt]
  (cond (= event-type MOUSE-DOWN)
        (gevents/listen element event-type
                       (fn [evt]
                         (try
                           (get-pos element evt)
                           (reset! last-mouse {:x evt.clientX :y evt.clientY});(get-pos element evt))
                           (reset! mouse-is-down true))
                         (fnt evt)))
        (= event-type MOUSE-UP)
        (gevents/listen element event-type
                        (fn [evt]
                          (try
                            (get-pos element evt)
                            (reset! mouse-is-down false))
                          (fnt evt)))
        :else
        (gevents/listen element event-type
                        (fn [evt]
                          (set! (.-mouseDownX evt) (:x @last-mouse))
                          (set! (.-mouseDownY evt) (:y @last-mouse))
                          (set! (.-mouseIsDown evt) @mouse-is-down)
                          (fnt evt)))))

(defn glisten [element evt-type]
  (listen element evt-type (fn [evt]
                             (dispatch [:canvas-event evt])
                             ; prevents this event from going to the window to
                             ; fixes things, like scrolling the view
                             ;(.alert js/window evt.type)
                             (.preventDefault evt))))

(defn register-events [element]
 ; (let [glisten #]
    (glisten element MOUSE-DOWN)
    (glisten element MOUSE-UP)
    (glisten element MOUSE-MOVE)
    (glisten element MOUSE-OUT)
    (glisten element DBL-CLICK)
    (glisten element KEY-DOWN)
    (glisten element WHEEL))

(defn init [cnv {:keys [prefs series pngs]}]
  (if-let [canvas (.makeCanvas (.getElementById js/document cnv))];(.-firstChild (.getElementById js/document cnv))]
    (let [editor (js/br.usp.dilvanLab.roi3DEditor.WebGLViewerImpl. canvas, 0, (clj->js prefs), (clj->js series))]
      ;(js/alert (.-className canvas))
      (set! (.-activePlane editor) ALL)
      (set! (.-context editor) (js/br.usp.dilvanLab.roi3DEditor.Context. editor))
      (register-events canvas)

      ;(.initDrawingHandlers (.-context editor))
      (load-pics editor pngs)
      editor)
    (js/alert (str "Null editor: " cnv))))


;(defn init1 [cnv {:keys [prefs series pngs]}]
;  (if-let [canvas (.getElementById js/document cnv)]
;    (let [editor (js/br.usp.dilvanLab.roi3DEditor.WebGLViewerImpl. canvas, 0, (clj->js prefs), (clj->js series))]
;      (set! (.-activePlane editor) ALL)
;      (set! (.-context editor) (js/br.usp.dilvanLab.roi3DEditor.Context. editor))
;      (.initDrawingHandlers (.-context editor))
;      (load-pics editor pngs)
;      editor)
;    (js/alert (str "Null canvas: " cnv))))


;; -- Event Handlers ----------------------------------------------------------

(reg-event-db                                               ;; setup initial state
  :initialize                                               ;; usage:  (dispatch [:initialize])
  (fn [db _]
    (merge db initial-state)))                              ;; what it returns becomes the new state

(reg-event-db
  :canvas-event
  (fn [db [_ event]]
    (let [editor (:editor (current-view db))
          mode (-> editor .-context .-tool)
          mouse-is-down (.-mouseIsDown event)] ;(-> db :context :mouse-is-down)]
      ;(js/alert (.-mouseIsDown event))
      (if-let
        [new (condp = event.type
               MOUSE-DOWN
               (let [mouse (get-mouse-pos editor event)
                     db2 (assoc-in db [:context :last-mouse] mouse)]
                 (if mouse-is-down
                   db2
                   (let [db3 (assoc-in db2 [:context :mouse-is-down] true)]
                     (cond (not (or event.shiftKey event.metaKey))
                           (canvas-event db3 mode event))
                     db3)))

               MOUSE-MOVE
               (cond mouse-is-down
                     (if event.shiftKey
                       (canvas-event db "zoom" event)
                       (canvas-event db mode event)))

               MOUSE-UP
               (cond MOUSE-DOWN
                     (let [db3 (assoc-in db [:context :mouse-is-down] false)]
                       (cond (not (or event.shiftKey event.metaKey))
                             (canvas-event db3 mode event))
                       db3))

               MOUSE-OUT
               (canvas-event db mode event)

               DBL-CLICK
               (canvas-event db mode event)

               WHEEL
               (canvas-event db "scroll" event)

               KEY-DOWN
               (canvas-event db mode event)

               db)]
        new
        db))))

(reg-event-db
  :load-imgs
  (fn [db [_ [canvas-id series]]]
    (assoc-in db
      [:views 0 :editor] (init canvas-id series))))                    ;; what it returns becomes the new state

(reg-event-db
  :inc
  (fn [db _]
    (let [editor (:editor (current-view db))
          ;incn #(if (> (+ % 0.01) 0.99) 0.99 (+ % 0.01))
          incn #(if ($ (% + 0.01) > 0.99) 0.99 ($ % + 0.01))
          c (incn (.getImageCoord editor AXIAL))]
      (.setActiveImage editor AXIAL c)
      (.setActiveImage editor FRONTAL c)
      (.setActiveImage editor SAGITTAL c)
      (.drawImage editor)
      db)))      ;; what it returns becomes the new state

(reg-event-db
  :dec
  (fn [db _]
    (let [editor (:editor (current-view db))
          decn #(if (< (- % 0.01) 0) 0 (- % 0.01))
          c (decn (.getImageCoord editor AXIAL))]
      (.setActiveImage editor AXIAL c)
      (.setActiveImage editor FRONTAL c)
      (.setActiveImage editor SAGITTAL c)
      (.drawImage editor)
      db)))      ;; what it returns becomes the new state

(reg-event-db
  :change-mode
  (fn [db [_ value]]
    (set! (-> (:editor (current-view db)) .-context .-tool) value)
    (assoc db :change value)))      ;; what it returns becomes the new state

;(reg-event-db
;  :time-color                     ;; usage:  (dispatch [:time-color 34562])
;  (path [:time-color])            ;; this is middleware
;  (fn
;    [time-color [_ value]]        ;; path middleware adjusts the first parameter
;    value))


;; -- Subscription Handlers ---------------------------------------------------

(reg-sub
  :initialize
  (fn [db _]
    (:views db)))

(reg-sub
  :change-mode
  (fn [db _]
    (try
      (-> (:editor (current-view db)) .-context .-tool)
      (catch js/Object e ""))))

;; -- View Components ---------------------------------------------------------

;(defn clock
;  []
;  (let [time-color (subscribe [:time-color])
;        timer (subscribe [:timer])]
;       #(let [time-str (-> @timer .toTimeString (clojure.string/split " ") first)
;              style {:style {:color @time-color}}]
;             [:div.example-clock style time-str])))

;(defn color-input
;  []
;  (let [time-color (subscribe [:time-color])]
;    (fn []
;        [:div.color-input
;          "Time color: "
;          [:input {:type "text"
;                   :value @time-color
;                   :on-change #(dispatch
;                                [:time-color (-> % .-target .-value)])}]])))

(defn button [icon tooltip selected event]
  [:div {:title tooltip}
   [ui/flat-button {:icon  icon
                    :background-color (if selected "#d0d060" (color :background-color))
                    :style {:margin    "12px 0px"
                            :min-width "35px"}
                    :on-touch-tap #(dispatch event)}]])

(defn toolbar [canvas-id]
  (let [series (subscribe [:initialize])
        mode (subscribe [:change-mode])]
    (fn []
      [ui/toolbar
       [ui/toolbar-group ;{:first-child true}
        [ui/toolbar-title {:text "Tools"}]
        [button (ic/action-search) "zoom" (= @mode "zoom") [:change-mode "zoom"]]
        [button (ic/maps-my-location) "scroll" (= @mode "scroll") [:change-mode "scroll"]]
        [button (ic/image-brightness-6) "windowing" (= @mode "gradient") [:change-mode "gradient"]]
        [button (ic/action-pan-tool) "move" (= @mode "move") [:change-mode "move"]]]
       [ui/toolbar-group ;{:last-child true}
        ;[ui/toolbar-separator]
        [button (ic/file-cloud-download) "download" false [:load-imgs [canvas-id (first @series)]]]
        [button (ic/communication-call-made) "move +1" false [:inc]]
        [button (ic/communication-call-received) "move -1" false [:dec]]]])))

(defn simple-example []
  (let [canvas-id (str "canvas" (rand-int 1000000))]

    [mui-theme-provider {:mui-theme (get-mui-theme
                                        {:palette {:text-color (color :blue800)}})}
      [:div
       [ui/app-bar {:title                 "ePAD"
                    :icon-class-name-right "muidocs-icon-navigation-expand-more"}]
       [toolbar canvas-id]
       [ui/paper
        [:div {:class "editor-holder"}
         [:dicom-roi-editor {:id canvas-id}]]]]]))


;; -- Entry Point -------------------------------------------------------------

(defn ^:export run
  []
  ;(.log js/console (formula 3 + (4)))
  ;(js/alert ($ 3  + (9 / 8) + (Math/sin 4 1)))
  ;(js/alert (str " $11:" ($ 4 / 4 * 2)))
  ;(js/alert (str " $:" ($ Math/sin(4) / 4 * x10(Math/sin(2)+ 50))))
  (dispatch-sync [:initialize])
  (r/render [simple-example]
            (js/document.getElementById "app")))
