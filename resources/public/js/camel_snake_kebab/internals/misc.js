// Compiled by ClojureScript 1.9.227 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31591 = arguments.length;
var i__21525__auto___31592 = (0);
while(true){
if((i__21525__auto___31592 < len__21524__auto___31591)){
args__21531__auto__.push((arguments[i__21525__auto___31592]));

var G__31593 = (i__21525__auto___31592 + (1));
i__21525__auto___31592 = G__31593;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((4) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21532__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__31585){
var map__31586 = p__31585;
var map__31586__$1 = ((((!((map__31586 == null)))?((((map__31586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31586):map__31586);
var separator = cljs.core.get.call(null,map__31586__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__31588 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__31589 = cljs.core.seq.call(null,vec__31588);
var first__31590 = cljs.core.first.call(null,seq__31589);
var seq__31589__$1 = cljs.core.next.call(null,seq__31589);
var first = first__31590;
var rest = seq__31589__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq31580){
var G__31581 = cljs.core.first.call(null,seq31580);
var seq31580__$1 = cljs.core.next.call(null,seq31580);
var G__31582 = cljs.core.first.call(null,seq31580__$1);
var seq31580__$2 = cljs.core.next.call(null,seq31580__$1);
var G__31583 = cljs.core.first.call(null,seq31580__$2);
var seq31580__$3 = cljs.core.next.call(null,seq31580__$2);
var G__31584 = cljs.core.first.call(null,seq31580__$3);
var seq31580__$4 = cljs.core.next.call(null,seq31580__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__31581,G__31582,G__31583,G__31584,seq31580__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__20449__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__20449__auto__)){
return or__20449__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map?rel=1478875890854