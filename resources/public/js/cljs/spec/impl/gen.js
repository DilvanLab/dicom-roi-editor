// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__21055__auto__,writer__21056__auto__,opt__21057__auto__){
return cljs.core._write.call(null,writer__21056__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21629 = arguments.length;
var i__21525__auto___21630 = (0);
while(true){
if((i__21525__auto___21630 < len__21524__auto___21629)){
args__21531__auto__.push((arguments[i__21525__auto___21630]));

var G__21631 = (i__21525__auto___21630 + (1));
i__21525__auto___21630 = G__21631;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq21628){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21628));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21633 = arguments.length;
var i__21525__auto___21634 = (0);
while(true){
if((i__21525__auto___21634 < len__21524__auto___21633)){
args__21531__auto__.push((arguments[i__21525__auto___21634]));

var G__21635 = (i__21525__auto___21634 + (1));
i__21525__auto___21634 = G__21635;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq21632){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21632));
});

var g_QMARK__21636 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_21637 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__21636){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__21636))
,null));
var mkg_21638 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__21636,g_21637){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__21636,g_21637))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__21636,g_21637,mkg_21638){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__21636).call(null,x);
});})(g_QMARK__21636,g_21637,mkg_21638))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__21636,g_21637,mkg_21638){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_21638).call(null,gfn);
});})(g_QMARK__21636,g_21637,mkg_21638))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__21636,g_21637,mkg_21638){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_21637).call(null,generator);
});})(g_QMARK__21636,g_21637,mkg_21638))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__21600__auto___21657 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__21600__auto___21657){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21658 = arguments.length;
var i__21525__auto___21659 = (0);
while(true){
if((i__21525__auto___21659 < len__21524__auto___21658)){
args__21531__auto__.push((arguments[i__21525__auto___21659]));

var G__21660 = (i__21525__auto___21659 + (1));
i__21525__auto___21659 = G__21660;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21657))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21657){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21657),args);
});})(g__21600__auto___21657))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__21600__auto___21657){
return (function (seq21639){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21639));
});})(g__21600__auto___21657))
;


var g__21600__auto___21661 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__21600__auto___21661){
return (function cljs$spec$impl$gen$list(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21662 = arguments.length;
var i__21525__auto___21663 = (0);
while(true){
if((i__21525__auto___21663 < len__21524__auto___21662)){
args__21531__auto__.push((arguments[i__21525__auto___21663]));

var G__21664 = (i__21525__auto___21663 + (1));
i__21525__auto___21663 = G__21664;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21661))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21661){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21661),args);
});})(g__21600__auto___21661))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__21600__auto___21661){
return (function (seq21640){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21640));
});})(g__21600__auto___21661))
;


var g__21600__auto___21665 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__21600__auto___21665){
return (function cljs$spec$impl$gen$map(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21666 = arguments.length;
var i__21525__auto___21667 = (0);
while(true){
if((i__21525__auto___21667 < len__21524__auto___21666)){
args__21531__auto__.push((arguments[i__21525__auto___21667]));

var G__21668 = (i__21525__auto___21667 + (1));
i__21525__auto___21667 = G__21668;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21665))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21665){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21665),args);
});})(g__21600__auto___21665))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__21600__auto___21665){
return (function (seq21641){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21641));
});})(g__21600__auto___21665))
;


var g__21600__auto___21669 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__21600__auto___21669){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21670 = arguments.length;
var i__21525__auto___21671 = (0);
while(true){
if((i__21525__auto___21671 < len__21524__auto___21670)){
args__21531__auto__.push((arguments[i__21525__auto___21671]));

var G__21672 = (i__21525__auto___21671 + (1));
i__21525__auto___21671 = G__21672;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21669))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21669){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21669),args);
});})(g__21600__auto___21669))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__21600__auto___21669){
return (function (seq21642){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21642));
});})(g__21600__auto___21669))
;


var g__21600__auto___21673 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__21600__auto___21673){
return (function cljs$spec$impl$gen$set(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21674 = arguments.length;
var i__21525__auto___21675 = (0);
while(true){
if((i__21525__auto___21675 < len__21524__auto___21674)){
args__21531__auto__.push((arguments[i__21525__auto___21675]));

var G__21676 = (i__21525__auto___21675 + (1));
i__21525__auto___21675 = G__21676;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21673))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21673){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21673),args);
});})(g__21600__auto___21673))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__21600__auto___21673){
return (function (seq21643){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21643));
});})(g__21600__auto___21673))
;


var g__21600__auto___21677 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__21600__auto___21677){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21678 = arguments.length;
var i__21525__auto___21679 = (0);
while(true){
if((i__21525__auto___21679 < len__21524__auto___21678)){
args__21531__auto__.push((arguments[i__21525__auto___21679]));

var G__21680 = (i__21525__auto___21679 + (1));
i__21525__auto___21679 = G__21680;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21677))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21677){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21677),args);
});})(g__21600__auto___21677))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__21600__auto___21677){
return (function (seq21644){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21644));
});})(g__21600__auto___21677))
;


var g__21600__auto___21681 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__21600__auto___21681){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21682 = arguments.length;
var i__21525__auto___21683 = (0);
while(true){
if((i__21525__auto___21683 < len__21524__auto___21682)){
args__21531__auto__.push((arguments[i__21525__auto___21683]));

var G__21684 = (i__21525__auto___21683 + (1));
i__21525__auto___21683 = G__21684;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21681))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21681){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21681),args);
});})(g__21600__auto___21681))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__21600__auto___21681){
return (function (seq21645){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21645));
});})(g__21600__auto___21681))
;


var g__21600__auto___21685 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__21600__auto___21685){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21686 = arguments.length;
var i__21525__auto___21687 = (0);
while(true){
if((i__21525__auto___21687 < len__21524__auto___21686)){
args__21531__auto__.push((arguments[i__21525__auto___21687]));

var G__21688 = (i__21525__auto___21687 + (1));
i__21525__auto___21687 = G__21688;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21685))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21685){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21685),args);
});})(g__21600__auto___21685))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__21600__auto___21685){
return (function (seq21646){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21646));
});})(g__21600__auto___21685))
;


var g__21600__auto___21689 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__21600__auto___21689){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21690 = arguments.length;
var i__21525__auto___21691 = (0);
while(true){
if((i__21525__auto___21691 < len__21524__auto___21690)){
args__21531__auto__.push((arguments[i__21525__auto___21691]));

var G__21692 = (i__21525__auto___21691 + (1));
i__21525__auto___21691 = G__21692;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21689))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21689){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21689),args);
});})(g__21600__auto___21689))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__21600__auto___21689){
return (function (seq21647){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21647));
});})(g__21600__auto___21689))
;


var g__21600__auto___21693 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__21600__auto___21693){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21694 = arguments.length;
var i__21525__auto___21695 = (0);
while(true){
if((i__21525__auto___21695 < len__21524__auto___21694)){
args__21531__auto__.push((arguments[i__21525__auto___21695]));

var G__21696 = (i__21525__auto___21695 + (1));
i__21525__auto___21695 = G__21696;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21693))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21693){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21693),args);
});})(g__21600__auto___21693))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__21600__auto___21693){
return (function (seq21648){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21648));
});})(g__21600__auto___21693))
;


var g__21600__auto___21697 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__21600__auto___21697){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21698 = arguments.length;
var i__21525__auto___21699 = (0);
while(true){
if((i__21525__auto___21699 < len__21524__auto___21698)){
args__21531__auto__.push((arguments[i__21525__auto___21699]));

var G__21700 = (i__21525__auto___21699 + (1));
i__21525__auto___21699 = G__21700;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21697))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21697){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21697),args);
});})(g__21600__auto___21697))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__21600__auto___21697){
return (function (seq21649){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21649));
});})(g__21600__auto___21697))
;


var g__21600__auto___21701 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__21600__auto___21701){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21702 = arguments.length;
var i__21525__auto___21703 = (0);
while(true){
if((i__21525__auto___21703 < len__21524__auto___21702)){
args__21531__auto__.push((arguments[i__21525__auto___21703]));

var G__21704 = (i__21525__auto___21703 + (1));
i__21525__auto___21703 = G__21704;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21701))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21701){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21701),args);
});})(g__21600__auto___21701))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__21600__auto___21701){
return (function (seq21650){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21650));
});})(g__21600__auto___21701))
;


var g__21600__auto___21705 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__21600__auto___21705){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21706 = arguments.length;
var i__21525__auto___21707 = (0);
while(true){
if((i__21525__auto___21707 < len__21524__auto___21706)){
args__21531__auto__.push((arguments[i__21525__auto___21707]));

var G__21708 = (i__21525__auto___21707 + (1));
i__21525__auto___21707 = G__21708;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21705))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21705){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21705),args);
});})(g__21600__auto___21705))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__21600__auto___21705){
return (function (seq21651){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21651));
});})(g__21600__auto___21705))
;


var g__21600__auto___21709 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__21600__auto___21709){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21710 = arguments.length;
var i__21525__auto___21711 = (0);
while(true){
if((i__21525__auto___21711 < len__21524__auto___21710)){
args__21531__auto__.push((arguments[i__21525__auto___21711]));

var G__21712 = (i__21525__auto___21711 + (1));
i__21525__auto___21711 = G__21712;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21709))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21709){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21709),args);
});})(g__21600__auto___21709))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__21600__auto___21709){
return (function (seq21652){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21652));
});})(g__21600__auto___21709))
;


var g__21600__auto___21713 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__21600__auto___21713){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21714 = arguments.length;
var i__21525__auto___21715 = (0);
while(true){
if((i__21525__auto___21715 < len__21524__auto___21714)){
args__21531__auto__.push((arguments[i__21525__auto___21715]));

var G__21716 = (i__21525__auto___21715 + (1));
i__21525__auto___21715 = G__21716;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21713))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21713){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21713),args);
});})(g__21600__auto___21713))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__21600__auto___21713){
return (function (seq21653){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21653));
});})(g__21600__auto___21713))
;


var g__21600__auto___21717 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__21600__auto___21717){
return (function cljs$spec$impl$gen$return(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21718 = arguments.length;
var i__21525__auto___21719 = (0);
while(true){
if((i__21525__auto___21719 < len__21524__auto___21718)){
args__21531__auto__.push((arguments[i__21525__auto___21719]));

var G__21720 = (i__21525__auto___21719 + (1));
i__21525__auto___21719 = G__21720;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21717))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21717){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21717),args);
});})(g__21600__auto___21717))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__21600__auto___21717){
return (function (seq21654){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21654));
});})(g__21600__auto___21717))
;


var g__21600__auto___21721 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__21600__auto___21721){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21722 = arguments.length;
var i__21525__auto___21723 = (0);
while(true){
if((i__21525__auto___21723 < len__21524__auto___21722)){
args__21531__auto__.push((arguments[i__21525__auto___21723]));

var G__21724 = (i__21525__auto___21723 + (1));
i__21525__auto___21723 = G__21724;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21721))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21721){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21721),args);
});})(g__21600__auto___21721))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__21600__auto___21721){
return (function (seq21655){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21655));
});})(g__21600__auto___21721))
;


var g__21600__auto___21725 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__21600__auto___21725){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21726 = arguments.length;
var i__21525__auto___21727 = (0);
while(true){
if((i__21525__auto___21727 < len__21524__auto___21726)){
args__21531__auto__.push((arguments[i__21525__auto___21727]));

var G__21728 = (i__21525__auto___21727 + (1));
i__21525__auto___21727 = G__21728;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21600__auto___21725))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21600__auto___21725){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21600__auto___21725),args);
});})(g__21600__auto___21725))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__21600__auto___21725){
return (function (seq21656){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21656));
});})(g__21600__auto___21725))
;

var g__21613__auto___21750 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__21613__auto___21750){
return (function cljs$spec$impl$gen$any(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21751 = arguments.length;
var i__21525__auto___21752 = (0);
while(true){
if((i__21525__auto___21752 < len__21524__auto___21751)){
args__21531__auto__.push((arguments[i__21525__auto___21752]));

var G__21753 = (i__21525__auto___21752 + (1));
i__21525__auto___21752 = G__21753;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21750))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21750){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21750);
});})(g__21613__auto___21750))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__21613__auto___21750){
return (function (seq21729){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21729));
});})(g__21613__auto___21750))
;


var g__21613__auto___21754 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__21613__auto___21754){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21755 = arguments.length;
var i__21525__auto___21756 = (0);
while(true){
if((i__21525__auto___21756 < len__21524__auto___21755)){
args__21531__auto__.push((arguments[i__21525__auto___21756]));

var G__21757 = (i__21525__auto___21756 + (1));
i__21525__auto___21756 = G__21757;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21754))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21754){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21754);
});})(g__21613__auto___21754))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__21613__auto___21754){
return (function (seq21730){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21730));
});})(g__21613__auto___21754))
;


var g__21613__auto___21758 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__21613__auto___21758){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21759 = arguments.length;
var i__21525__auto___21760 = (0);
while(true){
if((i__21525__auto___21760 < len__21524__auto___21759)){
args__21531__auto__.push((arguments[i__21525__auto___21760]));

var G__21761 = (i__21525__auto___21760 + (1));
i__21525__auto___21760 = G__21761;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21758))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21758){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21758);
});})(g__21613__auto___21758))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__21613__auto___21758){
return (function (seq21731){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21731));
});})(g__21613__auto___21758))
;


var g__21613__auto___21762 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__21613__auto___21762){
return (function cljs$spec$impl$gen$char(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21763 = arguments.length;
var i__21525__auto___21764 = (0);
while(true){
if((i__21525__auto___21764 < len__21524__auto___21763)){
args__21531__auto__.push((arguments[i__21525__auto___21764]));

var G__21765 = (i__21525__auto___21764 + (1));
i__21525__auto___21764 = G__21765;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21762))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21762){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21762);
});})(g__21613__auto___21762))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__21613__auto___21762){
return (function (seq21732){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21732));
});})(g__21613__auto___21762))
;


var g__21613__auto___21766 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__21613__auto___21766){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21767 = arguments.length;
var i__21525__auto___21768 = (0);
while(true){
if((i__21525__auto___21768 < len__21524__auto___21767)){
args__21531__auto__.push((arguments[i__21525__auto___21768]));

var G__21769 = (i__21525__auto___21768 + (1));
i__21525__auto___21768 = G__21769;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21766))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21766){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21766);
});})(g__21613__auto___21766))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__21613__auto___21766){
return (function (seq21733){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21733));
});})(g__21613__auto___21766))
;


var g__21613__auto___21770 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__21613__auto___21770){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21771 = arguments.length;
var i__21525__auto___21772 = (0);
while(true){
if((i__21525__auto___21772 < len__21524__auto___21771)){
args__21531__auto__.push((arguments[i__21525__auto___21772]));

var G__21773 = (i__21525__auto___21772 + (1));
i__21525__auto___21772 = G__21773;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21770))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21770){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21770);
});})(g__21613__auto___21770))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__21613__auto___21770){
return (function (seq21734){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21734));
});})(g__21613__auto___21770))
;


var g__21613__auto___21774 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__21613__auto___21774){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21775 = arguments.length;
var i__21525__auto___21776 = (0);
while(true){
if((i__21525__auto___21776 < len__21524__auto___21775)){
args__21531__auto__.push((arguments[i__21525__auto___21776]));

var G__21777 = (i__21525__auto___21776 + (1));
i__21525__auto___21776 = G__21777;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21774))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21774){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21774);
});})(g__21613__auto___21774))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__21613__auto___21774){
return (function (seq21735){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21735));
});})(g__21613__auto___21774))
;


var g__21613__auto___21778 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__21613__auto___21778){
return (function cljs$spec$impl$gen$double(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21779 = arguments.length;
var i__21525__auto___21780 = (0);
while(true){
if((i__21525__auto___21780 < len__21524__auto___21779)){
args__21531__auto__.push((arguments[i__21525__auto___21780]));

var G__21781 = (i__21525__auto___21780 + (1));
i__21525__auto___21780 = G__21781;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21778))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21778){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21778);
});})(g__21613__auto___21778))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__21613__auto___21778){
return (function (seq21736){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21736));
});})(g__21613__auto___21778))
;


var g__21613__auto___21782 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__21613__auto___21782){
return (function cljs$spec$impl$gen$int(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21783 = arguments.length;
var i__21525__auto___21784 = (0);
while(true){
if((i__21525__auto___21784 < len__21524__auto___21783)){
args__21531__auto__.push((arguments[i__21525__auto___21784]));

var G__21785 = (i__21525__auto___21784 + (1));
i__21525__auto___21784 = G__21785;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21782))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21782){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21782);
});})(g__21613__auto___21782))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__21613__auto___21782){
return (function (seq21737){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21737));
});})(g__21613__auto___21782))
;


var g__21613__auto___21786 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__21613__auto___21786){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21787 = arguments.length;
var i__21525__auto___21788 = (0);
while(true){
if((i__21525__auto___21788 < len__21524__auto___21787)){
args__21531__auto__.push((arguments[i__21525__auto___21788]));

var G__21789 = (i__21525__auto___21788 + (1));
i__21525__auto___21788 = G__21789;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21786))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21786){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21786);
});})(g__21613__auto___21786))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__21613__auto___21786){
return (function (seq21738){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21738));
});})(g__21613__auto___21786))
;


var g__21613__auto___21790 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__21613__auto___21790){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21791 = arguments.length;
var i__21525__auto___21792 = (0);
while(true){
if((i__21525__auto___21792 < len__21524__auto___21791)){
args__21531__auto__.push((arguments[i__21525__auto___21792]));

var G__21793 = (i__21525__auto___21792 + (1));
i__21525__auto___21792 = G__21793;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21790))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21790){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21790);
});})(g__21613__auto___21790))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__21613__auto___21790){
return (function (seq21739){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21739));
});})(g__21613__auto___21790))
;


var g__21613__auto___21794 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__21613__auto___21794){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21795 = arguments.length;
var i__21525__auto___21796 = (0);
while(true){
if((i__21525__auto___21796 < len__21524__auto___21795)){
args__21531__auto__.push((arguments[i__21525__auto___21796]));

var G__21797 = (i__21525__auto___21796 + (1));
i__21525__auto___21796 = G__21797;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21794))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21794){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21794);
});})(g__21613__auto___21794))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__21613__auto___21794){
return (function (seq21740){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21740));
});})(g__21613__auto___21794))
;


var g__21613__auto___21798 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__21613__auto___21798){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21799 = arguments.length;
var i__21525__auto___21800 = (0);
while(true){
if((i__21525__auto___21800 < len__21524__auto___21799)){
args__21531__auto__.push((arguments[i__21525__auto___21800]));

var G__21801 = (i__21525__auto___21800 + (1));
i__21525__auto___21800 = G__21801;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21798))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21798){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21798);
});})(g__21613__auto___21798))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__21613__auto___21798){
return (function (seq21741){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21741));
});})(g__21613__auto___21798))
;


var g__21613__auto___21802 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__21613__auto___21802){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21803 = arguments.length;
var i__21525__auto___21804 = (0);
while(true){
if((i__21525__auto___21804 < len__21524__auto___21803)){
args__21531__auto__.push((arguments[i__21525__auto___21804]));

var G__21805 = (i__21525__auto___21804 + (1));
i__21525__auto___21804 = G__21805;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21802))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21802){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21802);
});})(g__21613__auto___21802))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__21613__auto___21802){
return (function (seq21742){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21742));
});})(g__21613__auto___21802))
;


var g__21613__auto___21806 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__21613__auto___21806){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21807 = arguments.length;
var i__21525__auto___21808 = (0);
while(true){
if((i__21525__auto___21808 < len__21524__auto___21807)){
args__21531__auto__.push((arguments[i__21525__auto___21808]));

var G__21809 = (i__21525__auto___21808 + (1));
i__21525__auto___21808 = G__21809;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21806))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21806){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21806);
});})(g__21613__auto___21806))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__21613__auto___21806){
return (function (seq21743){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21743));
});})(g__21613__auto___21806))
;


var g__21613__auto___21810 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__21613__auto___21810){
return (function cljs$spec$impl$gen$string(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21811 = arguments.length;
var i__21525__auto___21812 = (0);
while(true){
if((i__21525__auto___21812 < len__21524__auto___21811)){
args__21531__auto__.push((arguments[i__21525__auto___21812]));

var G__21813 = (i__21525__auto___21812 + (1));
i__21525__auto___21812 = G__21813;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21810))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21810){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21810);
});})(g__21613__auto___21810))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__21613__auto___21810){
return (function (seq21744){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21744));
});})(g__21613__auto___21810))
;


var g__21613__auto___21814 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__21613__auto___21814){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21815 = arguments.length;
var i__21525__auto___21816 = (0);
while(true){
if((i__21525__auto___21816 < len__21524__auto___21815)){
args__21531__auto__.push((arguments[i__21525__auto___21816]));

var G__21817 = (i__21525__auto___21816 + (1));
i__21525__auto___21816 = G__21817;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21814))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21814){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21814);
});})(g__21613__auto___21814))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__21613__auto___21814){
return (function (seq21745){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21745));
});})(g__21613__auto___21814))
;


var g__21613__auto___21818 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__21613__auto___21818){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21819 = arguments.length;
var i__21525__auto___21820 = (0);
while(true){
if((i__21525__auto___21820 < len__21524__auto___21819)){
args__21531__auto__.push((arguments[i__21525__auto___21820]));

var G__21821 = (i__21525__auto___21820 + (1));
i__21525__auto___21820 = G__21821;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21818))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21818){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21818);
});})(g__21613__auto___21818))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__21613__auto___21818){
return (function (seq21746){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21746));
});})(g__21613__auto___21818))
;


var g__21613__auto___21822 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__21613__auto___21822){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21823 = arguments.length;
var i__21525__auto___21824 = (0);
while(true){
if((i__21525__auto___21824 < len__21524__auto___21823)){
args__21531__auto__.push((arguments[i__21525__auto___21824]));

var G__21825 = (i__21525__auto___21824 + (1));
i__21525__auto___21824 = G__21825;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21822))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21822){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21822);
});})(g__21613__auto___21822))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__21613__auto___21822){
return (function (seq21747){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21747));
});})(g__21613__auto___21822))
;


var g__21613__auto___21826 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__21613__auto___21826){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21827 = arguments.length;
var i__21525__auto___21828 = (0);
while(true){
if((i__21525__auto___21828 < len__21524__auto___21827)){
args__21531__auto__.push((arguments[i__21525__auto___21828]));

var G__21829 = (i__21525__auto___21828 + (1));
i__21525__auto___21828 = G__21829;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21826))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21826){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21826);
});})(g__21613__auto___21826))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__21613__auto___21826){
return (function (seq21748){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21748));
});})(g__21613__auto___21826))
;


var g__21613__auto___21830 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__21613__auto___21830){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21831 = arguments.length;
var i__21525__auto___21832 = (0);
while(true){
if((i__21525__auto___21832 < len__21524__auto___21831)){
args__21531__auto__.push((arguments[i__21525__auto___21832]));

var G__21833 = (i__21525__auto___21832 + (1));
i__21525__auto___21832 = G__21833;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});})(g__21613__auto___21830))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21613__auto___21830){
return (function (args){
return cljs.core.deref.call(null,g__21613__auto___21830);
});})(g__21613__auto___21830))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__21613__auto___21830){
return (function (seq21749){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21749));
});})(g__21613__auto___21830))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21531__auto__ = [];
var len__21524__auto___21836 = arguments.length;
var i__21525__auto___21837 = (0);
while(true){
if((i__21525__auto___21837 < len__21524__auto___21836)){
args__21531__auto__.push((arguments[i__21525__auto___21837]));

var G__21838 = (i__21525__auto___21837 + (1));
i__21525__auto___21837 = G__21838;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__21834_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__21834_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq21835){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21835));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__21839_SHARP_){
return (new Date(p1__21839_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1478875874143