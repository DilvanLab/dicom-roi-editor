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
            [re-frisk.core :refer [enable-re-frisk!]]))

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
(def is-mouse-down (atom false))

(def pref
  {:overrideCenter 0,
   :overrideWidth  0,
   :windowOverride false})

(def series {:bitsStored          "16",
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

(def initial-state
  {:views [{:prefs pref
            :series series
            :pngs lstPngs
            :tool :gradient
            :active-plane :all
            :windowing-center (js/parseInt (:windowCenter series))
            :windowing-width (js/parseInt (:windowWidth series))
            :axial    {:x 0.5 :y 0.5 :zoom 1 :imgCoord 0.5}
            :sagittal {:x 0.5 :y 0.5 :zoom 1 :imgCoord 0.5}
            :frontal  {:x 0.5 :y 0.5 :zoom 1 :imgCoord 0.5}}]})

(defn current-view [db] (nth (:views db) 0))

(defn clip [[a b] x] (max (min x b) a))

(defn update-all [map a b & args]
  (let [num (count args)
        map1 (update-in map a b)]
    (if (even? num)
      (if (zero? num)
        map1
        (apply update-all map1 args))
      (throw (js/Error. "update-all has one db and pairs of path and function.")))))

(defn assoc-all [map a b & args]
  (let [num (count args)
        map1 (assoc-in map a b)]
    (if (even? num)
      (if (zero? num)
        map1
        (apply assoc-all map1 args))
      (throw (js/Error. "assoc-all has one db and pairs of path and function.")))))

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
          ($(:x pos) < c-width && (:y pos) < c-height) :axial
          ($(:x pos) > c-width && (:y pos) > c-height) nil
          ($(:x pos) > c-width) :frontal
          ($(:y pos) > c-height) :sagittal
          :else nil))
      (active-plane event))))

(defmulti canvas-event
          (fn [_ mode event]
            (if (= (.-type event) DBL-CLICK)
              [DBL-CLICK]
              [mode (.-type event)])))

(defmethod canvas-event [DBL-CLICK] [db _ event]
  (update-in db
             [:views 0 :active-plane] #(if (= % :all) (which-plane event) :all)))

;;default handling
(defmethod canvas-event :default [db mode event]
  (.log js/console  (str "canvas-event: " mode " " (.-type event))))

;;-------------------------------------------------------------
;;   Tools implementation
;;

;;
;;    Move
;;
(defmethod canvas-event [:move MOUSE-MOVE] [db mode event]
  (when-let* [plane (which-plane event)
              mult (if (= :all (active-plane event)) 2 1)
              deltaX (* mult (.pixels2Units (editor event) (plane2number plane) (movement-x event)))
              deltaY (* mult (.pixels2Units (editor event) (plane2number plane) (movement-y event))
                        -1)]
    (update-all db
                [:views 0 plane :x] #(- % deltaX)
                [:views 0 plane :y] #(- % deltaY))))

;;
;;   Zoom
;;
(defmethod canvas-event [:zoom MOUSE-MOVE] [db mode event]
  (when-let* [plane (which-plane event)
              delta (/ (/ (+ (movement-x event)
                             (movement-y event))
                          4.0)
                       (.-width (canvas event)))]
    (update-in db
               [:views 0 plane :zoom] #(+ % delta))))

(defmethod canvas-event [:zoom KEY-DOWN] [db mode event]
  (let [code (.-charCode event)]
    (case code
      ;UP_ARROW
      38  (update-in db [:views 0 :axial :zoom] #(/ % 0.9))
      ;DOWN_ARROW
      40  (update-in db [:views 0 :axial :zoom] #(* % 0.9))
      ;RIGHT_ARROW
      39 (update-in db [:views 0 :axial :imgCoord] #(clip [0 1] (+ % (/ 1.0 (-> (current-view db) :series :numberOfImages)))))
      ;LEFT_ARROW
      37 (update-in db [:views 0 :axial :imgCoord] #(clip [0 1] (- % (/ 1.0 (-> (current-view db) :series :numberOfImages))))))))

(defn set-other-planes [db event]
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
          (assoc-all db
                     [:views 0 plane1 :imgCoord] coord1
                     [:views 0 plane2 :imgCoord] coord2))))

;;
;;    Scroll
;;
(defmethod canvas-event [:scroll MOUSE-DOWN] [db mode event]
  (set-other-planes db event))

(defmethod canvas-event [:scroll MOUSE-MOVE] [db mode event]
  (set-other-planes db event))

(defmethod canvas-event [:scroll WHEEL] [db mode event]
  (let [plane (which-plane event)]
    (cond plane
          (let [plane2act (if (= (-> (current-view db) :active-plane) :all)
                              plane
                              (-> (current-view db) :active-plane))]
            (update-in db
                       [:views 0 plane2act :imgCoord]
                       #(clip [0 1]
                          (+ % (/ (if (> (.-deltaY event) 0) 1 -1)
                                  (-> (current-view db) :series :numberOfImages)))))))))

;;
;;   Gradient
;;
(defmethod canvas-event [:gradient MOUSE-MOVE] [db mode event]
  (let [canvas (canvas event)
        default-wc (js/parseInt(-> (current-view db) :series :windowWidth))
        default-ww (js/parseInt(-> (current-view db) :series :windowCenter))
        deltaWW ($ (4 * (movement-x event) / (.-width  canvas) * default-ww))
        deltaWC ($ (4 * (movement-y event) / (.-height canvas) * default-wc))]
    (update-all
      db
      [:views 0 :windowing-center] #(if (<= (+ % deltaWC) 0) % (+ % deltaWC))
      [:views 0 :windowing-width]  #(if (<= (+ % deltaWW) 0) % (+ % deltaWW)))))

;; -- Event Handlers ----------------------------------------------------------

(reg-event-db                                               ;; setup initial state
  :initialize                                               ;; usage:  (dispatch [:initialize])
  (fn [db _]
    (merge db initial-state)))                              ;; what it returns becomes the new state

(reg-event-db
  :canvas-event
  (fn [db [_ event]]
    (let [mode (-> (current-view db) :tool)]
      (if-let
        [new (condp = (.-type event)
               MOUSE-DOWN
               (cond (not (or (.-shiftKey event) (.-metaKey event)))
                     (canvas-event db mode event))
               MOUSE-MOVE
               (cond (.-isMouseDown event)
                     (if (.-shiftKey event)
                       (canvas-event db :zoom event)
                       (canvas-event db mode event)))
               WHEEL
               (canvas-event db :scroll event)
               ; default
               (canvas-event db mode event))]
        new
        db))))

(reg-event-db
  :inc
  (fn [db _]
    (let [incn #(if (> (+ % 0.01) 0.99) 0.99 (+ % 0.01))]
      (update-all db
                  [:views 0 :axial :imgCoord] #(incn %)
                  [:views 0 :frontal :imgCoord] #(incn %)
                  [:views 0 :sagittal :imgCoord] #(incn %)))))

(reg-event-db
  :dec
  (fn [db _]
    (let [decn #(if (< (- % 0.01) 0) 0 (- % 0.01))]
      (update-all db
                  [:views 0 :axial :imgCoord] #(decn %)
                  [:views 0 :frontal :imgCoord] #(decn %)
                  [:views 0 :sagittal :imgCoord] #(decn %)))))

(reg-event-db
  :change-mode
  (path [:views 0 :tool])  ;; this is middleware
  (fn [mode [_ value]]   ;; path middleware adjusts the first parameter
    value))

;; -- Subscription Handlers ---------------------------------------------------

(reg-sub
  :initialize
  (fn [db _]
    (:views db)))

(reg-sub
  :change-mode
  (fn [db _]
    ((current-view db) :tool)))

(reg-sub
  :canvas-event
  (fn [db _]
    (first (:views db))))

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

(defn disp-event []
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
      (dispatch [:canvas-event event])
      (.preventDefault evt))))

(defn dicom-editor [editor-id]
  (let [views (subscribe [:canvas-event])]
    (fn []
        [:canvas {:is "dicom-roi-editor"
                  :id editor-id
                  :prefs (js/JSON.stringify (clj->js (:prefs @views)))
                  :series (js/JSON.stringify (clj->js (:series @views)))
                  :activeplane (:active-plane @views)
                  :windowingcenter (:windowing-center @views)
                  :windowingwidth (:windowing-width @views)
                  :axial (js/JSON.stringify (clj->js (:axial @views)))
                  :sagittal (js/JSON.stringify (clj->js (:sagittal @views)))
                  :frontal (js/JSON.stringify (clj->js (:frontal @views)))
                  :baseurl base-URL
                  :pngs (js/JSON.stringify (clj->js (:pngs @views)))
                  :on-mouse-down   (disp-event)
                  :on-mouse-up     (disp-event)
                  :on-mouse-move   (disp-event)
                  :on-mouse-out    (disp-event)
                  :on-double-click (disp-event)
                  :on-keydown      (disp-event)
                  :on-wheel        (disp-event)}])))

(defn simple-example []
  (let [editor-id (str "editor" (rand-int 1000000))]

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
