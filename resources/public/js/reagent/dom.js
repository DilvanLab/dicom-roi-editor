// Compiled by ClojureScript 1.9.227 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__20449__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__20449__auto__)){
return or__20449__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_22411 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_22411){
return (function (){
var _STAR_always_update_STAR_22412 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_22412;
}});})(_STAR_always_update_STAR_22411))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_22411;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args22413 = [];
var len__21524__auto___22416 = arguments.length;
var i__21525__auto___22417 = (0);
while(true){
if((i__21525__auto___22417 < len__21524__auto___22416)){
args22413.push((arguments[i__21525__auto___22417]));

var G__22418 = (i__21525__auto___22417 + (1));
i__21525__auto___22417 = G__22418;
continue;
} else {
}
break;
}

var G__22415 = args22413.length;
switch (G__22415) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22413.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__22424_22428 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__22425_22429 = null;
var count__22426_22430 = (0);
var i__22427_22431 = (0);
while(true){
if((i__22427_22431 < count__22426_22430)){
var v_22432 = cljs.core._nth.call(null,chunk__22425_22429,i__22427_22431);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_22432);

var G__22433 = seq__22424_22428;
var G__22434 = chunk__22425_22429;
var G__22435 = count__22426_22430;
var G__22436 = (i__22427_22431 + (1));
seq__22424_22428 = G__22433;
chunk__22425_22429 = G__22434;
count__22426_22430 = G__22435;
i__22427_22431 = G__22436;
continue;
} else {
var temp__4657__auto___22437 = cljs.core.seq.call(null,seq__22424_22428);
if(temp__4657__auto___22437){
var seq__22424_22438__$1 = temp__4657__auto___22437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22424_22438__$1)){
var c__21260__auto___22439 = cljs.core.chunk_first.call(null,seq__22424_22438__$1);
var G__22440 = cljs.core.chunk_rest.call(null,seq__22424_22438__$1);
var G__22441 = c__21260__auto___22439;
var G__22442 = cljs.core.count.call(null,c__21260__auto___22439);
var G__22443 = (0);
seq__22424_22428 = G__22440;
chunk__22425_22429 = G__22441;
count__22426_22430 = G__22442;
i__22427_22431 = G__22443;
continue;
} else {
var v_22444 = cljs.core.first.call(null,seq__22424_22438__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_22444);

var G__22445 = cljs.core.next.call(null,seq__22424_22438__$1);
var G__22446 = null;
var G__22447 = (0);
var G__22448 = (0);
seq__22424_22428 = G__22445;
chunk__22425_22429 = G__22446;
count__22426_22430 = G__22447;
i__22427_22431 = G__22448;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1480335648843