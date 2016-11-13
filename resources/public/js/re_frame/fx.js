// Compiled by ClojureScript 1.9.227 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__36208){
var vec__36209 = p__36208;
var k = cljs.core.nth.call(null,vec__36209,(0),null);
var value = cljs.core.nth.call(null,vec__36209,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__36212 = cljs.core.seq.call(null,value);
var chunk__36213 = null;
var count__36214 = (0);
var i__36215 = (0);
while(true){
if((i__36215 < count__36214)){
var map__36216 = cljs.core._nth.call(null,chunk__36213,i__36215);
var map__36216__$1 = ((((!((map__36216 == null)))?((((map__36216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36216):map__36216);
var effect = map__36216__$1;
var ms = cljs.core.get.call(null,map__36216__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36216__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__36212,chunk__36213,count__36214,i__36215,map__36216,map__36216__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__36212,chunk__36213,count__36214,i__36215,map__36216,map__36216__$1,effect,ms,dispatch))
,ms);
}

var G__36220 = seq__36212;
var G__36221 = chunk__36213;
var G__36222 = count__36214;
var G__36223 = (i__36215 + (1));
seq__36212 = G__36220;
chunk__36213 = G__36221;
count__36214 = G__36222;
i__36215 = G__36223;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36212);
if(temp__4657__auto__){
var seq__36212__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36212__$1)){
var c__21260__auto__ = cljs.core.chunk_first.call(null,seq__36212__$1);
var G__36224 = cljs.core.chunk_rest.call(null,seq__36212__$1);
var G__36225 = c__21260__auto__;
var G__36226 = cljs.core.count.call(null,c__21260__auto__);
var G__36227 = (0);
seq__36212 = G__36224;
chunk__36213 = G__36225;
count__36214 = G__36226;
i__36215 = G__36227;
continue;
} else {
var map__36218 = cljs.core.first.call(null,seq__36212__$1);
var map__36218__$1 = ((((!((map__36218 == null)))?((((map__36218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36218):map__36218);
var effect = map__36218__$1;
var ms = cljs.core.get.call(null,map__36218__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36218__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__36212,chunk__36213,count__36214,i__36215,map__36218,map__36218__$1,effect,ms,dispatch,seq__36212__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__36212,chunk__36213,count__36214,i__36215,map__36218,map__36218__$1,effect,ms,dispatch,seq__36212__$1,temp__4657__auto__))
,ms);
}

var G__36228 = cljs.core.next.call(null,seq__36212__$1);
var G__36229 = null;
var G__36230 = (0);
var G__36231 = (0);
seq__36212 = G__36228;
chunk__36213 = G__36229;
count__36214 = G__36230;
i__36215 = G__36231;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__36232 = cljs.core.seq.call(null,value);
var chunk__36233 = null;
var count__36234 = (0);
var i__36235 = (0);
while(true){
if((i__36235 < count__36234)){
var event = cljs.core._nth.call(null,chunk__36233,i__36235);
re_frame.router.dispatch.call(null,event);

var G__36236 = seq__36232;
var G__36237 = chunk__36233;
var G__36238 = count__36234;
var G__36239 = (i__36235 + (1));
seq__36232 = G__36236;
chunk__36233 = G__36237;
count__36234 = G__36238;
i__36235 = G__36239;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36232);
if(temp__4657__auto__){
var seq__36232__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36232__$1)){
var c__21260__auto__ = cljs.core.chunk_first.call(null,seq__36232__$1);
var G__36240 = cljs.core.chunk_rest.call(null,seq__36232__$1);
var G__36241 = c__21260__auto__;
var G__36242 = cljs.core.count.call(null,c__21260__auto__);
var G__36243 = (0);
seq__36232 = G__36240;
chunk__36233 = G__36241;
count__36234 = G__36242;
i__36235 = G__36243;
continue;
} else {
var event = cljs.core.first.call(null,seq__36232__$1);
re_frame.router.dispatch.call(null,event);

var G__36244 = cljs.core.next.call(null,seq__36232__$1);
var G__36245 = null;
var G__36246 = (0);
var G__36247 = (0);
seq__36232 = G__36244;
chunk__36233 = G__36245;
count__36234 = G__36246;
i__36235 = G__36247;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1478875903210