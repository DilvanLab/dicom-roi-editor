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

(ns roiEditor.db)

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

(def pref
  {:overrideCenter 0,
   :overrideWidth  0,
   :windowOverride false})

(def series {:bitsStored          "16", ;16
             :columns             512,
             :numberOfImages      145,
             :pixelRepresentation "1",
             :pixelSpacing        "0.703125\\0.703125",
             :rescaleIntercept    "-1024",
             :rescaleSlope        "1",
             :rows                512,
             :sliceThickness      "1.25",
             :windowCenter        "00040\\00040", ;40
             :windowWidth         "00400\\00400"})

(def initial-state
  {:current "editor0"
   :tool :gradient
   :views {"editor0" {:prefs pref
                      :series series
                      :pngs lstPngs
                      :active-plane :all
                      :windowing-center (js/parseInt (:windowCenter series))
                      :windowing-width (js/parseInt (:windowWidth series))
                      :axial    {:x 0.5 :y 0.5 :zoom 1 :imgCoord 0.5}
                      :sagittal {:x 0.5 :y 0.5 :zoom 1 :imgCoord 0.5}
                      :frontal  {:x 0.5 :y 0.5 :zoom 1 :imgCoord 0.5}
                      :sphere   {:x 50  :y 50 :plane :axial :radius 0.2 :show false}}}})
