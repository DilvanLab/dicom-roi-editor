// Compiled by ClojureScript 1.9.227 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__21945__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21946__i = 0, G__21946__a = new Array(arguments.length -  0);
while (G__21946__i < G__21946__a.length) {G__21946__a[G__21946__i] = arguments[G__21946__i + 0]; ++G__21946__i;}
  args = new cljs.core.IndexedSeq(G__21946__a,0);
} 
return G__21945__delegate.call(this,args);};
G__21945.cljs$lang$maxFixedArity = 0;
G__21945.cljs$lang$applyTo = (function (arglist__21947){
var args = cljs.core.seq(arglist__21947);
return G__21945__delegate(args);
});
G__21945.cljs$core$IFn$_invoke$arity$variadic = G__21945__delegate;
return G__21945;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21948__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21949__i = 0, G__21949__a = new Array(arguments.length -  0);
while (G__21949__i < G__21949__a.length) {G__21949__a[G__21949__i] = arguments[G__21949__i + 0]; ++G__21949__i;}
  args = new cljs.core.IndexedSeq(G__21949__a,0);
} 
return G__21948__delegate.call(this,args);};
G__21948.cljs$lang$maxFixedArity = 0;
G__21948.cljs$lang$applyTo = (function (arglist__21950){
var args = cljs.core.seq(arglist__21950);
return G__21948__delegate(args);
});
G__21948.cljs$core$IFn$_invoke$arity$variadic = G__21948__delegate;
return G__21948;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1480335647073