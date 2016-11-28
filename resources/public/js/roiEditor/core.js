// Compiled by ClojureScript 1.9.227 {}
goog.provide('roiEditor.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('cljsjs.material_ui');
goog.require('goog.events.EventType');
goog.require('reagent.core');
goog.require('goog.events.EventTarget');
goog.require('cljs_react_material_ui.icons');
goog.require('cljs_react_material_ui.reagent');
goog.require('cljs_react_material_ui.core');
goog.require('re_frame.core');
roiEditor.core.MOUSE_DOWN = goog.events.EventType.MOUSEDOWN;
roiEditor.core.MOUSE_UP = goog.events.EventType.MOUSEUP;
roiEditor.core.MOUSE_MOVE = goog.events.EventType.MOUSEMOVE;
roiEditor.core.MOUSE_OUT = goog.events.EventType.MOUSEOUT;
roiEditor.core.DBL_CLICK = goog.events.EventType.DBLCLICK;
roiEditor.core.KEY_DOWN = goog.events.EventType.KEYDOWN;
roiEditor.core.WHEEL = goog.events.EventType.WHEEL;
roiEditor.core.base_URL = "1.2.826.0.1.3680043.8.420.29267207592271555902603369361594637742/series/1.2.826.0.1.3680043.8.420.13029244630897359628709378005929429184/images/";
roiEditor.core.ALL = br.usp.dilvanLab.roi3DEditor.ALL;
roiEditor.core.AXIAL = br.usp.dilvanLab.roi3DEditor.AXIAL;
roiEditor.core.FRONTAL = br.usp.dilvanLab.roi3DEditor.FRONTAL;
roiEditor.core.SAGITTAL = br.usp.dilvanLab.roi3DEditor.SAGITTAL;
roiEditor.core.pref = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overrideCenter","overrideCenter",278546915),(0),new cljs.core.Keyword(null,"overrideWidth","overrideWidth",-1181238128),(0),new cljs.core.Keyword(null,"windowOverride","windowOverride",1332455118),false], null);
roiEditor.core.series = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rescaleIntercept","rescaleIntercept",-720351744),new cljs.core.Keyword(null,"windowWidth","windowWidth",-1238753470),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"rescaleSlope","rescaleSlope",2022324330),new cljs.core.Keyword(null,"pixelRepresentation","pixelRepresentation",-981128726),new cljs.core.Keyword(null,"pixelSpacing","pixelSpacing",-257453043),new cljs.core.Keyword(null,"bitsStored","bitsStored",-1743050866),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"numberOfImages","numberOfImages",-397971405),new cljs.core.Keyword(null,"windowCenter","windowCenter",-695727845),new cljs.core.Keyword(null,"sliceThickness","sliceThickness",1902740029)],["-1024","00400\\00400",(512),"1","1","0.703125\\0.703125","16",(512),(145),"00040\\00040","1.25"]);
roiEditor.core.lstPngs = cljs.core.PersistentVector.fromArray(["1.2.826.0.1.3680043.8.420.16553737991475343282684803816940891307.png","1.2.826.0.1.3680043.8.420.28861109596090543877254334913500645343.png","1.2.826.0.1.3680043.8.420.92281134123008251785793891126452925630.png","1.2.826.0.1.3680043.8.420.95418694341377556084502693525860526304.png","1.2.826.0.1.3680043.8.420.69336276654178614372303317802130256763.png","1.2.826.0.1.3680043.8.420.33118142859754977170296252077772049894.png","1.2.826.0.1.3680043.8.420.16030464486410413234834494170091728765.png","1.2.826.0.1.3680043.8.420.27351397110527101639742457467496693527.png","1.2.826.0.1.3680043.8.420.73638772490717402537609228835290975047.png","1.2.826.0.1.3680043.8.420.13713822034162080800818081832061855796.png","1.2.826.0.1.3680043.8.420.30031525206349246930333901742473812321.png","1.2.826.0.1.3680043.8.420.11268468743527426844992342917158948993.png","1.2.826.0.1.3680043.8.420.29551532304221838205412664984408553220.png","1.2.826.0.1.3680043.8.420.46512340772811126708095721265683085057.png","1.2.826.0.1.3680043.8.420.70406582294974920054340231142326278563.png","1.2.826.0.1.3680043.8.420.23270265281944356337601773604512168388.png","1.2.826.0.1.3680043.8.420.22915313681053598418791323537011397850.png","1.2.826.0.1.3680043.8.420.12104883052389024268447088977320065477.png","1.2.826.0.1.3680043.8.420.26947794936797081668505216579674359329.png","1.2.826.0.1.3680043.8.420.40527429940865208838588592111667988278.png","1.2.826.0.1.3680043.8.420.29558685463726005330677318315980506339.png","1.2.826.0.1.3680043.8.420.22371060708357308689958995558081136261.png","1.2.826.0.1.3680043.8.420.32837287199671026450949731408129999262.png","1.2.826.0.1.3680043.8.420.28443934396521767295900043022580292344.png","1.2.826.0.1.3680043.8.420.13881751664202690633483892306760334821.png","1.2.826.0.1.3680043.8.420.89582242671750029523983773332351615256.png","1.2.826.0.1.3680043.8.420.30320030276588513829308461090972767967.png","1.2.826.0.1.3680043.8.420.68906203166724213143383896268008712272.png","1.2.826.0.1.3680043.8.420.46499646352487653356278183906983662324.png","1.2.826.0.1.3680043.8.420.20500855770053012383483706598907978125.png","1.2.826.0.1.3680043.8.420.29959599193046020805954121779902208822.png","1.2.826.0.1.3680043.8.420.32540377588402987845341052577333094030.png","1.2.826.0.1.3680043.8.420.25722038773225404535134094011084273602.png","1.2.826.0.1.3680043.8.420.30690205964978385439072373723385590648.png","1.2.826.0.1.3680043.8.420.32414468305913097442467214130426119517.png","1.2.826.0.1.3680043.8.420.31379096286186342549344682660613630312.png","1.2.826.0.1.3680043.8.420.65197990274162997100913673681512651287.png","1.2.826.0.1.3680043.8.420.27486983700272590136079136691427062619.png","1.2.826.0.1.3680043.8.420.15660174628675259944180326362148895928.png","1.2.826.0.1.3680043.8.420.33640137026986344682230235892124332090.png","1.2.826.0.1.3680043.8.420.33727957740162863432921287896145289385.png","1.2.826.0.1.3680043.8.420.17021898611603086333930407228790046975.png","1.2.826.0.1.3680043.8.420.37495522045529822564706514239904666082.png","1.2.826.0.1.3680043.8.420.79017463112085688674153480462964426834.png","1.2.826.0.1.3680043.8.420.31986792252857074904221675944649703962.png","1.2.826.0.1.3680043.8.420.16536147987224798036765098021862441984.png","1.2.826.0.1.3680043.8.420.12532738115457417541515185689607397453.png","1.2.826.0.1.3680043.8.420.32419489757742138837394046658551878069.png","1.2.826.0.1.3680043.8.420.14796455402546925221450720842726244052.png","1.2.826.0.1.3680043.8.420.38930447352223788651961242735051541362.png","1.2.826.0.1.3680043.8.420.23097050328931457260230097455578301005.png","1.2.826.0.1.3680043.8.420.28238920397199277876489712910375210705.png","1.2.826.0.1.3680043.8.420.12793702795215197193600862416202894367.png","1.2.826.0.1.3680043.8.420.16293903293657431145114351725808875925.png","1.2.826.0.1.3680043.8.420.24482723044054421106411956800648541664.png","1.2.826.0.1.3680043.8.420.11614358581095503274681067134738240187.png","1.2.826.0.1.3680043.8.420.30378322543736087149597517761914661084.png","1.2.826.0.1.3680043.8.420.32871741308339175317235055399198610633.png","1.2.826.0.1.3680043.8.420.66437012267632604970025962662397124248.png","1.2.826.0.1.3680043.8.420.33489905624951750654449830418099468913.png","1.2.826.0.1.3680043.8.420.30285863645050639092703431472144821188.png","1.2.826.0.1.3680043.8.420.30011966631502980452940166843246828438.png","1.2.826.0.1.3680043.8.420.26795495954472708636270225964560776012.png","1.2.826.0.1.3680043.8.420.33595447154785545252381749189255496650.png","1.2.826.0.1.3680043.8.420.74247327849666218604729204537024543882.png","1.2.826.0.1.3680043.8.420.70208814779988168566575366958110867358.png","1.2.826.0.1.3680043.8.420.28822163156008332215577019361338396285.png","1.2.826.0.1.3680043.8.420.24910810878877211230631409120148224773.png","1.2.826.0.1.3680043.8.420.68532117716993406711486043397299040587.png","1.2.826.0.1.3680043.8.420.23253249761639110725935254975375483378.png","1.2.826.0.1.3680043.8.420.19493005327906359440203291840627564980.png","1.2.826.0.1.3680043.8.420.19334981854685146037883505860186956077.png","1.2.826.0.1.3680043.8.420.30988896448954341633769374510355316242.png","1.2.826.0.1.3680043.8.420.17847256856448597241576078036753787778.png","1.2.826.0.1.3680043.8.420.22667289907541038365002676709165799500.png","1.2.826.0.1.3680043.8.420.30126316220061260270131502477767200684.png","1.2.826.0.1.3680043.8.420.43337735338427527626557974398959368667.png","1.2.826.0.1.3680043.8.420.33406910006825179564394954463853869128.png","1.2.826.0.1.3680043.8.420.32200387510961024751621381738031244459.png","1.2.826.0.1.3680043.8.420.20537641044797791420695886840923260598.png","1.2.826.0.1.3680043.8.420.35680920724704352043773219130762632398.png","1.2.826.0.1.3680043.8.420.11881655835584151855919753546342924685.png","1.2.826.0.1.3680043.8.420.25871830256012963123978691852034471891.png","1.2.826.0.1.3680043.8.420.17126207244724243966926506400777622427.png","1.2.826.0.1.3680043.8.420.14883410179536413830149951654515367919.png","1.2.826.0.1.3680043.8.420.17719484370174605590529651971985507765.png","1.2.826.0.1.3680043.8.420.39255509408078958174856487579001083715.png","1.2.826.0.1.3680043.8.420.28395341994085646125754185462750549448.png","1.2.826.0.1.3680043.8.420.18772124287416289712284781693451983581.png","1.2.826.0.1.3680043.8.420.18689588848251310708007231469827908255.png","1.2.826.0.1.3680043.8.420.4556806051523012272044451733650983458.png","1.2.826.0.1.3680043.8.420.12742325897655935532961649984939833117.png","1.2.826.0.1.3680043.8.420.29190838650409576784164852249440209151.png","1.2.826.0.1.3680043.8.420.22751419168770843231624801120335512354.png","1.2.826.0.1.3680043.8.420.16194871272594403349323652402805668348.png","1.2.826.0.1.3680043.8.420.23765937055853598373572600243639782495.png","1.2.826.0.1.3680043.8.420.29026083866656711119632048147178071119.png","1.2.826.0.1.3680043.8.420.54863039770491981821780629546151407275.png","1.2.826.0.1.3680043.8.420.32894091809267436106846002959204597452.png","1.2.826.0.1.3680043.8.420.32883586033702273842700270481934901211.png","1.2.826.0.1.3680043.8.420.16407750155436184186373462186468487675.png","1.2.826.0.1.3680043.8.420.86731584823190804742449485842450128118.png","1.2.826.0.1.3680043.8.420.11918245677821785458947585104544098541.png","1.2.826.0.1.3680043.8.420.81393130571932871333344414785970159748.png","1.2.826.0.1.3680043.8.420.16678061080860752647280458168657727910.png","1.2.826.0.1.3680043.8.420.33829525983883660835063832293383368812.png","1.2.826.0.1.3680043.8.420.26844404237277175594848359173260125744.png","1.2.826.0.1.3680043.8.420.17149101040386480310671809143468757914.png","1.2.826.0.1.3680043.8.420.30213438018705227728726110362014775680.png","1.2.826.0.1.3680043.8.420.18015475315699186833892201285031718715.png","1.2.826.0.1.3680043.8.420.10644270760634711819696210340323435844.png","1.2.826.0.1.3680043.8.420.25684091020680899363084754821413265951.png","1.2.826.0.1.3680043.8.420.24478155285783435038735160229328308446.png","1.2.826.0.1.3680043.8.420.55486695001931520928174583453072369004.png","1.2.826.0.1.3680043.8.420.32148113456837446391375086056899752182.png","1.2.826.0.1.3680043.8.420.32975078299044444390862939867202238098.png","1.2.826.0.1.3680043.8.420.22217254601106967232450037493973202412.png","1.2.826.0.1.3680043.8.420.17003764697452048632256291746275386178.png","1.2.826.0.1.3680043.8.420.83542011516511383301850512534649099653.png","1.2.826.0.1.3680043.8.420.22362997405673813525870673783830938178.png","1.2.826.0.1.3680043.8.420.31913737696217604675190087135123495432.png","1.2.826.0.1.3680043.8.420.24845571685787506799443619864941724239.png","1.2.826.0.1.3680043.8.420.24306896768631462048194711367215376650.png","1.2.826.0.1.3680043.8.420.18263637052056516536914084758170218972.png","1.2.826.0.1.3680043.8.420.95984815447615635747248367889370987248.png","1.2.826.0.1.3680043.8.420.10139059003368181145184236900601746520.png","1.2.826.0.1.3680043.8.420.26188983091323417856059442362464850905.png","1.2.826.0.1.3680043.8.420.16046616934201200271746111550175967124.png","1.2.826.0.1.3680043.8.420.57481249698913543491600298015207758669.png","1.2.826.0.1.3680043.8.420.23821313924816847020644540303060853476.png","1.2.826.0.1.3680043.8.420.27629151528061233715639281745422806732.png","1.2.826.0.1.3680043.8.420.10299974335922660153201461413780728568.png","1.2.826.0.1.3680043.8.420.22154093534328963686468877082478736455.png","1.2.826.0.1.3680043.8.420.32540904231646286905786027296537173562.png","1.2.826.0.1.3680043.8.420.10182416961272461475470963187925401769.png","1.2.826.0.1.3680043.8.420.32327243320517188989041027789010194926.png","1.2.826.0.1.3680043.8.420.48735739934718154217084800249833250324.png","1.2.826.0.1.3680043.8.420.11901483335539391261258526726402523290.png","1.2.826.0.1.3680043.8.420.20605164337638702696376221453462298284.png","1.2.826.0.1.3680043.8.420.14990776251669146435388038157404459557.png","1.2.826.0.1.3680043.8.420.24278511605311296604352503623326655456.png","1.2.826.0.1.3680043.8.420.31685497780190861865918954284059467235.png","1.2.826.0.1.3680043.8.420.24188938019700070401699010290794317339.png","1.2.826.0.1.3680043.8.420.25262566473088730394743177389226598459.png","1.2.826.0.1.3680043.8.420.32592795188011088359506779691378232430.png"], true);
roiEditor.core.last_mouse = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
roiEditor.core.mouse_is_down = cljs.core.atom.call(null,false);
roiEditor.core.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"prefs","prefs",-1818938470),roiEditor.core.pref,new cljs.core.Keyword(null,"series","series",600710694),roiEditor.core.series,new cljs.core.Keyword(null,"pngs","pngs",14517483),roiEditor.core.lstPngs,new cljs.core.Keyword(null,"editor","editor",-989377770),null], null)], null),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-mouse","last-mouse",-1368836208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"mouse-is-down","mouse-is-down",-804412956),false], null)], null);
roiEditor.core.current_view = (function roiEditor$core$current_view(db){
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(db),(0));
});
roiEditor.core.get_mouse_pos = (function roiEditor$core$get_mouse_pos(editor,event){
var canvas = editor.gl.canvas;
var rect = canvas.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(event.clientX - rect.left),new cljs.core.Keyword(null,"y","y",-1757859776),(event.clientY - rect.top)], null);
});
roiEditor.core.get_mouse = (function roiEditor$core$get_mouse(editor,event){
var canvas = editor.gl.canvas;
var map__24913 = roiEditor.core.get_mouse_pos.call(null,editor,event);
var map__24913__$1 = ((((!((map__24913 == null)))?((((map__24913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24913):map__24913);
var x = cljs.core.get.call(null,map__24913__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__24913__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if(cljs.core._EQ_.call(null,editor.activePlane,roiEditor.core.ALL)){
var width = (canvas.width / (2));
var height = (canvas.height / (2));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((x > width))?(x - width):x),new cljs.core.Keyword(null,"y","y",-1757859776),(((y > height))?(y - height):y)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
}
});
roiEditor.core.which_plane = (function roiEditor$core$which_plane(editor,event){
var canvas = editor.gl.canvas;
var c_width = (canvas.width / (2));
var c_height = (canvas.height / (2));
var active_plane = editor.activePlane;
if(cljs.core._EQ_.call(null,active_plane,roiEditor.core.ALL)){
var pos = roiEditor.core.get_mouse_pos.call(null,editor,event);
if(((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos) < c_width)) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos) < c_height))){
return roiEditor.core.AXIAL;
} else {
if(((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos) > c_width)) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos) > c_height))){
return (-1);
} else {
if((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos) > c_width)){
return roiEditor.core.FRONTAL;
} else {
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos) > c_height)){
return roiEditor.core.SAGITTAL;
} else {
return (-1);

}
}
}
}
} else {
return active_plane;
}
});
if(typeof roiEditor.core.canvas_event !== 'undefined'){
} else {
roiEditor.core.canvas_event = (function (){var method_table__21374__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21375__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21376__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21377__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21378__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"roiEditor.core","canvas-event"),((function (method_table__21374__auto__,prefer_table__21375__auto__,method_cache__21376__auto__,cached_hierarchy__21377__auto__,hierarchy__21378__auto__){
return (function (_,mode,event){
if(cljs.core._EQ_.call(null,event.type,goog.events.EventType.DBLCLICK)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.events.EventType.DBLCLICK], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,event.type], null);
}
});})(method_table__21374__auto__,prefer_table__21375__auto__,method_cache__21376__auto__,cached_hierarchy__21377__auto__,hierarchy__21378__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21378__auto__,method_table__21374__auto__,prefer_table__21375__auto__,method_cache__21376__auto__,cached_hierarchy__21377__auto__));
})();
}
cljs.core._add_method.call(null,roiEditor.core.canvas_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.events.EventType.DBLCLICK], null),(function (db,_,event){
var editor = new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(roiEditor.core.current_view.call(null,db));
if(cljs.core._EQ_.call(null,editor.activePlane,roiEditor.core.ALL)){
editor.activePlane = roiEditor.core.which_plane.call(null,editor,event);
} else {
editor.activePlane = roiEditor.core.ALL;
}

return editor.drawImage();
}));
cljs.core._add_method.call(null,roiEditor.core.canvas_event,new cljs.core.Keyword(null,"default","default",-1987822328),(function (db,mode,event){
return cljs.core.println.call(null,[cljs.core.str("canvas-event: "),cljs.core.str(mode),cljs.core.str(" "),cljs.core.str(event.type)].join(''));
}));
roiEditor.core.deltaX = (function roiEditor$core$deltaX(editor,x,old_x){
var canvas = editor.gl.canvas;
var rect = canvas.getBoundingClientRect();
return ((old_x - rect.left) - (x - rect.left));
});
roiEditor.core.deltaY = (function roiEditor$core$deltaY(editor,x,old_x){
var canvas = editor.gl.canvas;
var rect = canvas.getBoundingClientRect();
return ((old_x - rect.top) - (x - rect.top));
});
cljs.core._add_method.call(null,roiEditor.core.canvas_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["move",roiEditor.core.MOUSE_MOVE], null),(function (db,mode,event){
var editor = new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(roiEditor.core.current_view.call(null,db));
var plane = roiEditor.core.which_plane.call(null,editor,event);
var mouse = roiEditor.core.get_mouse_pos.call(null,editor,event);
var mult = ((cljs.core._EQ_.call(null,roiEditor.core.ALL,editor.activePlane))?(2):(1));
var deltaX = (mult * editor.pixels2Units(plane,event.getBrowserEvent().movementX));
var deltaY = ((mult * editor.pixels2Units(plane,event.getBrowserEvent().movementY)) * (-1));
if(cljs.core.not_EQ_.call(null,plane,(-1))){
editor.setX(plane,(editor.getX(plane) - deltaX));

editor.setY(plane,(editor.getY(plane) - deltaY));

editor.drawImage();

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"last-mouse","last-mouse",-1368836208)], null),mouse);
} else {
return null;
}
}));
cljs.core._add_method.call(null,roiEditor.core.canvas_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zoom",roiEditor.core.MOUSE_MOVE], null),(function (db,mode,event){
var editor = new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(roiEditor.core.current_view.call(null,db));
var plane = roiEditor.core.which_plane.call(null,editor,event);
var delta = ((event.getBrowserEvent().movementX + event.getBrowserEvent().movementY) / (4));
var zoom = (editor.getZoom(plane) + (delta / editor.gl.canvas.width));
editor.setZoom(plane,zoom);

return editor.drawImage();
}));
cljs.core._add_method.call(null,roiEditor.core.canvas_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zoom",roiEditor.core.KEY_DOWN], null),(function (db,mode,event){
var editor = new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(roiEditor.core.current_view.call(null,db));
var code = event.charCode;
alert(code);

var G__24915_24916 = code;
switch (G__24915_24916) {
case (38):
editor.setZoom(roiEditor.core.AXIAL,(editor.getZoom(roiEditor.core.AXIAL) / 0.9));

break;
case (40):
editor.setZoom(roiEditor.core.AXIAL,(editor.getZoom(roiEditor.core.AXIAL) * 0.9));

break;
case (39):
editor.setActiveImage(roiEditor.core.AXIAL,Math.max(Math.min((editor.getImageCoord(roiEditor.core.AXIAL) + (1.0 / editor.imageNumber)),(1)),(0)));

break;
case (37):
editor.setActiveImage(roiEditor.core.AXIAL,Math.max(Math.min((editor.getImageCoord(roiEditor.core.AXIAL) + (1.0 / editor.imageNumber)),(1)),(0)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(code)].join('')));

}

return editor.drawImage();
}));
cljs.core._add_method.call(null,roiEditor.core.canvas_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scroll",roiEditor.core.MOUSE_DOWN], null),(function (db,mode,event){
var editor = new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(roiEditor.core.current_view.call(null,db));
var mouse = roiEditor.core.get_mouse.call(null,editor,event);
var plane = roiEditor.core.which_plane.call(null,editor,event);
if(cljs.core.not_EQ_.call(null,plane,(-1))){
editor.setPlanesCoord(plane,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(mouse),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(mouse));

return editor.drawImage();
} else {
return null;
}
}));
cljs.core._add_method.call(null,roiEditor.core.canvas_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scroll",roiEditor.core.MOUSE_MOVE], null),(function (db,mode,event){
var editor = new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(roiEditor.core.current_view.call(null,db));
var mouse = roiEditor.core.get_mouse.call(null,editor,event);
var plane = roiEditor.core.which_plane.call(null,editor,event);
if(cljs.core.not_EQ_.call(null,plane,(-1))){
editor.setPlanesCoord(plane,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(mouse),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(mouse));

return editor.drawImage();
} else {
return null;
}
}));
cljs.core._add_method.call(null,roiEditor.core.canvas_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scroll",roiEditor.core.WHEEL], null),(function (db,mode,g_event){
var event = g_event.getBrowserEvent();
var editor = new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(roiEditor.core.current_view.call(null,db));
var plane = roiEditor.core.which_plane.call(null,editor,event);
var clip = ((function (event,editor,plane){
return (function (p1__24918_SHARP_){
var x__20780__auto__ = (function (){var x__20787__auto__ = p1__24918_SHARP_;
var y__20788__auto__ = (1);
return ((x__20787__auto__ < y__20788__auto__) ? x__20787__auto__ : y__20788__auto__);
})();
var y__20781__auto__ = (0);
return ((x__20780__auto__ > y__20781__auto__) ? x__20780__auto__ : y__20781__auto__);
});})(event,editor,plane))
;
if(cljs.core.not_EQ_.call(null,plane,(-1))){
var plane2act = ((cljs.core._EQ_.call(null,editor.activePlane,roiEditor.core.ALL))?plane:editor.activePlane);
editor.setActiveImage(plane2act,clip.call(null,(editor.getImageCoord(plane2act) + ((((event.deltaY > (0)))?(1):(-1)) / editor.imageNumber))));

return editor.drawImage();
} else {
return null;
}
}));
roiEditor.core.set_windowing_BANG_ = (function roiEditor$core$set_windowing_BANG_(editor,center,width){
if((cljs.core._EQ_.call(null,center,(0))) && (cljs.core._EQ_.call(null,width,(0)))){
editor.windowingCenter = editor.defaultWC;

return editor.windowingWidth = editor.defaultWW;
} else {
editor.windowingCenter = center;

return editor.windowingWidth = width;
}
});
cljs.core._add_method.call(null,roiEditor.core.canvas_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gradient",roiEditor.core.MOUSE_MOVE], null),(function (db,mode,g_event){
var event = g_event.getBrowserEvent();
var editor = new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(roiEditor.core.current_view.call(null,db));
var canvas = editor.gl.canvas;
var deltaWW = (((4) * (event.movementX / canvas.width)) * editor.defaultWW);
var deltaWC = (((4) * (event.movementY / canvas.height)) * editor.defaultWC);
roiEditor.core.set_windowing_BANG_.call(null,editor,(editor.windowingCenter + deltaWC),(editor.windowingWidth + deltaWW));

return editor.drawImage();
}));
roiEditor.core.load_pics = (function roiEditor$core$load_pics(editor,lstPngs){
cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,(function (p1__24919_SHARP_,p2__24920_SHARP_){
return editor.loadPngTexture(p1__24919_SHARP_,[cljs.core.str(roiEditor.core.base_URL),cljs.core.str(p2__24920_SHARP_)].join(''));
}),lstPngs));

return resizeCanvas();
});
roiEditor.core.get_pos = (function roiEditor$core$get_pos(canvas,event){
var rect = canvas.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(event.clientX - rect.left),new cljs.core.Keyword(null,"y","y",-1757859776),(event.clientY - rect.top)], null);
});
roiEditor.core.listen = (function roiEditor$core$listen(element,event_type,fnt){
if(cljs.core._EQ_.call(null,event_type,roiEditor.core.MOUSE_DOWN)){
return goog.events.listen(element,event_type,(function (evt){
roiEditor.core.get_pos.call(null,element,evt);

cljs.core.reset_BANG_.call(null,roiEditor.core.last_mouse,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),evt.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),evt.clientY], null));

cljs.core.reset_BANG_.call(null,roiEditor.core.mouse_is_down,true);

return fnt.call(null,evt);
}));
} else {
if(cljs.core._EQ_.call(null,event_type,roiEditor.core.MOUSE_UP)){
return goog.events.listen(element,event_type,(function (evt){
roiEditor.core.get_pos.call(null,element,evt);

cljs.core.reset_BANG_.call(null,roiEditor.core.mouse_is_down,false);

return fnt.call(null,evt);
}));
} else {
return goog.events.listen(element,event_type,(function (evt){
evt.mouseDownX = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,roiEditor.core.last_mouse));

evt.mouseDownY = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,roiEditor.core.last_mouse));

evt.mouseIsDown = cljs.core.deref.call(null,roiEditor.core.mouse_is_down);

return fnt.call(null,evt);
}));

}
}
});
roiEditor.core.glisten = (function roiEditor$core$glisten(element,evt_type){
return roiEditor.core.listen.call(null,element,evt_type,(function (evt){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas-event","canvas-event",-1833719200),evt], null));

return evt.preventDefault();
}));
});
roiEditor.core.register_events = (function roiEditor$core$register_events(element){
roiEditor.core.glisten.call(null,element,roiEditor.core.MOUSE_DOWN);

roiEditor.core.glisten.call(null,element,roiEditor.core.MOUSE_UP);

roiEditor.core.glisten.call(null,element,roiEditor.core.MOUSE_MOVE);

roiEditor.core.glisten.call(null,element,roiEditor.core.MOUSE_OUT);

roiEditor.core.glisten.call(null,element,roiEditor.core.DBL_CLICK);

roiEditor.core.glisten.call(null,element,roiEditor.core.KEY_DOWN);

return roiEditor.core.glisten.call(null,element,roiEditor.core.WHEEL);
});
roiEditor.core.init = (function roiEditor$core$init(cnv,p__24921){
var map__24924 = p__24921;
var map__24924__$1 = ((((!((map__24924 == null)))?((((map__24924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24924):map__24924);
var prefs = cljs.core.get.call(null,map__24924__$1,new cljs.core.Keyword(null,"prefs","prefs",-1818938470));
var series = cljs.core.get.call(null,map__24924__$1,new cljs.core.Keyword(null,"series","series",600710694));
var pngs = cljs.core.get.call(null,map__24924__$1,new cljs.core.Keyword(null,"pngs","pngs",14517483));
var temp__4655__auto__ = document.getElementById(cnv).makeCanvas();
if(cljs.core.truth_(temp__4655__auto__)){
var canvas = temp__4655__auto__;
var editor = (new br.usp.dilvanLab.roi3DEditor.WebGLViewerImpl(canvas,(0),cljs.core.clj__GT_js.call(null,prefs),cljs.core.clj__GT_js.call(null,series)));
editor.activePlane = roiEditor.core.ALL;

editor.context = (new br.usp.dilvanLab.roi3DEditor.Context(editor));

roiEditor.core.register_events.call(null,canvas);

roiEditor.core.load_pics.call(null,editor,pngs);

return editor;
} else {
return alert([cljs.core.str("Null editor: "),cljs.core.str(cnv)].join(''));
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return cljs.core.merge.call(null,db,roiEditor.core.initial_state);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"canvas-event","canvas-event",-1833719200),(function (db,p__24926){
var vec__24927 = p__24926;
var _ = cljs.core.nth.call(null,vec__24927,(0),null);
var event = cljs.core.nth.call(null,vec__24927,(1),null);
var editor = new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(roiEditor.core.current_view.call(null,db));
var mode = editor.context.tool;
var mouse_is_down = event.mouseIsDown;
var temp__4655__auto__ = (function (){var pred__24930 = cljs.core._EQ_;
var expr__24931 = event.type;
if(cljs.core.truth_(pred__24930.call(null,roiEditor.core.MOUSE_DOWN,expr__24931))){
var mouse = roiEditor.core.get_mouse_pos.call(null,editor,event);
var db2 = cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"last-mouse","last-mouse",-1368836208)], null),mouse);
if(cljs.core.truth_(mouse_is_down)){
return db2;
} else {
var db3 = cljs.core.assoc_in.call(null,db2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"mouse-is-down","mouse-is-down",-804412956)], null),true);
if(cljs.core.not.call(null,(function (){var or__20449__auto__ = event.shiftKey;
if(cljs.core.truth_(or__20449__auto__)){
return or__20449__auto__;
} else {
return event.metaKey;
}
})())){
roiEditor.core.canvas_event.call(null,db3,mode,event);
} else {
}

return db3;
}
} else {
if(cljs.core.truth_(pred__24930.call(null,roiEditor.core.MOUSE_MOVE,expr__24931))){
if(cljs.core.truth_(mouse_is_down)){
if(cljs.core.truth_(event.shiftKey)){
return roiEditor.core.canvas_event.call(null,db,"zoom",event);
} else {
return roiEditor.core.canvas_event.call(null,db,mode,event);
}
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__24930.call(null,roiEditor.core.MOUSE_UP,expr__24931))){
if(cljs.core.truth_(roiEditor.core.MOUSE_DOWN)){
var db3 = cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"mouse-is-down","mouse-is-down",-804412956)], null),false);
if(cljs.core.not.call(null,(function (){var or__20449__auto__ = event.shiftKey;
if(cljs.core.truth_(or__20449__auto__)){
return or__20449__auto__;
} else {
return event.metaKey;
}
})())){
roiEditor.core.canvas_event.call(null,db3,mode,event);
} else {
}

return db3;
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__24930.call(null,roiEditor.core.MOUSE_OUT,expr__24931))){
return roiEditor.core.canvas_event.call(null,db,mode,event);
} else {
if(cljs.core.truth_(pred__24930.call(null,roiEditor.core.DBL_CLICK,expr__24931))){
return roiEditor.core.canvas_event.call(null,db,mode,event);
} else {
if(cljs.core.truth_(pred__24930.call(null,roiEditor.core.WHEEL,expr__24931))){
return roiEditor.core.canvas_event.call(null,db,"scroll",event);
} else {
if(cljs.core.truth_(pred__24930.call(null,roiEditor.core.KEY_DOWN,expr__24931))){
return roiEditor.core.canvas_event.call(null,db,mode,event);
} else {
return db;
}
}
}
}
}
}
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var new$ = temp__4655__auto__;
return new$;
} else {
return db;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-imgs","load-imgs",-1173767042),(function (db,p__24933){
var vec__24934 = p__24933;
var _ = cljs.core.nth.call(null,vec__24934,(0),null);
var vec__24937 = cljs.core.nth.call(null,vec__24934,(1),null);
var canvas_id = cljs.core.nth.call(null,vec__24937,(0),null);
var series = cljs.core.nth.call(null,vec__24937,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),(0),new cljs.core.Keyword(null,"editor","editor",-989377770)], null),roiEditor.core.init.call(null,canvas_id,series));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"inc","inc",-1316026094),(function (db,_){
var editor = new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(roiEditor.core.current_view.call(null,db));
var incn = ((function (editor){
return (function (p1__24940_SHARP_){
if(((p1__24940_SHARP_ + 0.01) > 0.99)){
return 0.99;
} else {
return (p1__24940_SHARP_ + 0.01);
}
});})(editor))
;
var c = incn.call(null,editor.getImageCoord(roiEditor.core.AXIAL));
editor.setActiveImage(roiEditor.core.AXIAL,c);

editor.setActiveImage(roiEditor.core.FRONTAL,c);

editor.setActiveImage(roiEditor.core.SAGITTAL,c);

editor.drawImage();

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dec","dec",1888433436),(function (db,_){
var editor = new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(roiEditor.core.current_view.call(null,db));
var decn = ((function (editor){
return (function (p1__24941_SHARP_){
if(((p1__24941_SHARP_ - 0.01) < (0))){
return (0);
} else {
return (p1__24941_SHARP_ - 0.01);
}
});})(editor))
;
var c = decn.call(null,editor.getImageCoord(roiEditor.core.AXIAL));
editor.setActiveImage(roiEditor.core.AXIAL,c);

editor.setActiveImage(roiEditor.core.FRONTAL,c);

editor.setActiveImage(roiEditor.core.SAGITTAL,c);

editor.drawImage();

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-mode","change-mode",-170197522),(function (db,p__24942){
var vec__24943 = p__24942;
var _ = cljs.core.nth.call(null,vec__24943,(0),null);
var value = cljs.core.nth.call(null,vec__24943,(1),null);
new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(roiEditor.core.current_view.call(null,db)).context.tool = value;

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"change","change",-1163046502),value);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"change-mode","change-mode",-170197522),(function (db,_){
try{return new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(roiEditor.core.current_view.call(null,db)).context.tool;
}catch (e24946){if((e24946 instanceof Object)){
var e = e24946;
return "";
} else {
throw e24946;

}
}}));
roiEditor.core.button = (function roiEditor$core$button(icon,tooltip,selected,event){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),tooltip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(selected)?"#d0d060":cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"background-color","background-color",570434026))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"12px 0px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"35px"], null),new cljs.core.Keyword(null,"on-touch-tap","on-touch-tap",274941039),(function (){
return re_frame.core.dispatch.call(null,event);
})], null)], null)], null);
});
roiEditor.core.toolbar = (function roiEditor$core$toolbar(canvas_id){
var series = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
var mode = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-mode","change-mode",-170197522)], null));
return ((function (series,mode){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.toolbar,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.toolbar_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.toolbar_title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Tools"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [roiEditor.core.button,cljs_react_material_ui.icons.action_search.call(null),"zoom",cljs.core._EQ_.call(null,cljs.core.deref.call(null,mode),"zoom"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-mode","change-mode",-170197522),"zoom"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [roiEditor.core.button,cljs_react_material_ui.icons.maps_my_location.call(null),"scroll",cljs.core._EQ_.call(null,cljs.core.deref.call(null,mode),"scroll"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-mode","change-mode",-170197522),"scroll"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [roiEditor.core.button,cljs_react_material_ui.icons.image_brightness_6.call(null),"windowing",cljs.core._EQ_.call(null,cljs.core.deref.call(null,mode),"gradient"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-mode","change-mode",-170197522),"gradient"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [roiEditor.core.button,cljs_react_material_ui.icons.action_pan_tool.call(null),"move",cljs.core._EQ_.call(null,cljs.core.deref.call(null,mode),"move"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-mode","change-mode",-170197522),"move"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.toolbar_group,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [roiEditor.core.button,cljs_react_material_ui.icons.file_cloud_download.call(null),"download",false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-imgs","load-imgs",-1173767042),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_id,cljs.core.first.call(null,cljs.core.deref.call(null,series))], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [roiEditor.core.button,cljs_react_material_ui.icons.communication_call_made.call(null),"move +1",false,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc","inc",-1316026094)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [roiEditor.core.button,cljs_react_material_ui.icons.communication_call_received.call(null),"move -1",false,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec","dec",1888433436)], null)], null)], null)], null);
});
;})(series,mode))
});
roiEditor.core.simple_example = (function roiEditor$core$simple_example(){
var canvas_id = [cljs.core.str("canvas"),cljs.core.str(cljs.core.rand_int.call(null,(1000000)))].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-color","text-color",1728708298),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"blue800","blue800",-847606291))], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.app_bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"ePAD",new cljs.core.Keyword(null,"icon-class-name-right","icon-class-name-right",1415991912),"muidocs-icon-navigation-expand-more"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [roiEditor.core.toolbar,canvas_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.paper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"editor-holder"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dicom-roi-editor","dicom-roi-editor",1803534170),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),canvas_id], null)], null)], null)], null)], null)], null);
});
roiEditor.core.run = (function roiEditor$core$run(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [roiEditor.core.simple_example], null),document.getElementById("app"));
});
goog.exportSymbol('roiEditor.core.run', roiEditor.core.run);

//# sourceMappingURL=core.js.map?rel=1480341920915