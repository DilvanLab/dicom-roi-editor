// Compiled by ClojureScript 1.9.227 {}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31774 = arguments.length;
var i__21525__auto___31775 = (0);
while(true){
if((i__21525__auto___31775 < len__21524__auto___31774)){
args__21531__auto__.push((arguments[i__21525__auto___31775]));

var G__31776 = (i__21525__auto___31775 + (1));
i__21525__auto___31775 = G__31776;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((4) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21532__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq31769){
var G__31770 = cljs.core.first.call(null,seq31769);
var seq31769__$1 = cljs.core.next.call(null,seq31769);
var G__31771 = cljs.core.first.call(null,seq31769__$1);
var seq31769__$2 = cljs.core.next.call(null,seq31769__$1);
var G__31772 = cljs.core.first.call(null,seq31769__$2);
var seq31769__$3 = cljs.core.next.call(null,seq31769__$2);
var G__31773 = cljs.core.first.call(null,seq31769__$3);
var seq31769__$4 = cljs.core.next.call(null,seq31769__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__31770,G__31771,G__31772,G__31773,seq31769__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31785 = arguments.length;
var i__21525__auto___31786 = (0);
while(true){
if((i__21525__auto___31786 < len__21524__auto___31785)){
args__21531__auto__.push((arguments[i__21525__auto___31786]));

var G__31787 = (i__21525__auto___31786 + (1));
i__21525__auto___31786 = G__31787;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__31736__auto__,rest__31737__auto__){
var convert_case__31738__auto__ = (function (p1__31735__31739__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__31735__31739__auto__,rest__31737__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__31736__auto__,convert_case__31738__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq31777){
var G__31778 = cljs.core.first.call(null,seq31777);
var seq31777__$1 = cljs.core.next.call(null,seq31777);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__31778,seq31777__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31788 = arguments.length;
var i__21525__auto___31789 = (0);
while(true){
if((i__21525__auto___31789 < len__21524__auto___31788)){
args__21531__auto__.push((arguments[i__21525__auto___31789]));

var G__31790 = (i__21525__auto___31789 + (1));
i__21525__auto___31789 = G__31790;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq31779){
var G__31780 = cljs.core.first.call(null,seq31779);
var seq31779__$1 = cljs.core.next.call(null,seq31779);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__31780,seq31779__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31791 = arguments.length;
var i__21525__auto___31792 = (0);
while(true){
if((i__21525__auto___31792 < len__21524__auto___31791)){
args__21531__auto__.push((arguments[i__21525__auto___31792]));

var G__31793 = (i__21525__auto___31792 + (1));
i__21525__auto___31792 = G__31793;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq31781){
var G__31782 = cljs.core.first.call(null,seq31781);
var seq31781__$1 = cljs.core.next.call(null,seq31781);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__31782,seq31781__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31794 = arguments.length;
var i__21525__auto___31795 = (0);
while(true){
if((i__21525__auto___31795 < len__21524__auto___31794)){
args__21531__auto__.push((arguments[i__21525__auto___31795]));

var G__31796 = (i__21525__auto___31795 + (1));
i__21525__auto___31795 = G__31796;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq31783){
var G__31784 = cljs.core.first.call(null,seq31783);
var seq31783__$1 = cljs.core.next.call(null,seq31783);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__31784,seq31783__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31805 = arguments.length;
var i__21525__auto___31806 = (0);
while(true){
if((i__21525__auto___31806 < len__21524__auto___31805)){
args__21531__auto__.push((arguments[i__21525__auto___31806]));

var G__31807 = (i__21525__auto___31806 + (1));
i__21525__auto___31806 = G__31807;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__31736__auto__,rest__31737__auto__){
var convert_case__31738__auto__ = (function (p1__31735__31739__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__31735__31739__auto__,rest__31737__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__31736__auto__,convert_case__31738__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq31797){
var G__31798 = cljs.core.first.call(null,seq31797);
var seq31797__$1 = cljs.core.next.call(null,seq31797);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__31798,seq31797__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31808 = arguments.length;
var i__21525__auto___31809 = (0);
while(true){
if((i__21525__auto___31809 < len__21524__auto___31808)){
args__21531__auto__.push((arguments[i__21525__auto___31809]));

var G__31810 = (i__21525__auto___31809 + (1));
i__21525__auto___31809 = G__31810;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq31799){
var G__31800 = cljs.core.first.call(null,seq31799);
var seq31799__$1 = cljs.core.next.call(null,seq31799);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__31800,seq31799__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31811 = arguments.length;
var i__21525__auto___31812 = (0);
while(true){
if((i__21525__auto___31812 < len__21524__auto___31811)){
args__21531__auto__.push((arguments[i__21525__auto___31812]));

var G__31813 = (i__21525__auto___31812 + (1));
i__21525__auto___31812 = G__31813;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq31801){
var G__31802 = cljs.core.first.call(null,seq31801);
var seq31801__$1 = cljs.core.next.call(null,seq31801);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__31802,seq31801__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31814 = arguments.length;
var i__21525__auto___31815 = (0);
while(true){
if((i__21525__auto___31815 < len__21524__auto___31814)){
args__21531__auto__.push((arguments[i__21525__auto___31815]));

var G__31816 = (i__21525__auto___31815 + (1));
i__21525__auto___31815 = G__31816;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq31803){
var G__31804 = cljs.core.first.call(null,seq31803);
var seq31803__$1 = cljs.core.next.call(null,seq31803);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__31804,seq31803__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31825 = arguments.length;
var i__21525__auto___31826 = (0);
while(true){
if((i__21525__auto___31826 < len__21524__auto___31825)){
args__21531__auto__.push((arguments[i__21525__auto___31826]));

var G__31827 = (i__21525__auto___31826 + (1));
i__21525__auto___31826 = G__31827;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__31736__auto__,rest__31737__auto__){
var convert_case__31738__auto__ = (function (p1__31735__31739__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__31735__31739__auto__,rest__31737__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__31736__auto__,convert_case__31738__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq31817){
var G__31818 = cljs.core.first.call(null,seq31817);
var seq31817__$1 = cljs.core.next.call(null,seq31817);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__31818,seq31817__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31828 = arguments.length;
var i__21525__auto___31829 = (0);
while(true){
if((i__21525__auto___31829 < len__21524__auto___31828)){
args__21531__auto__.push((arguments[i__21525__auto___31829]));

var G__31830 = (i__21525__auto___31829 + (1));
i__21525__auto___31829 = G__31830;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq31819){
var G__31820 = cljs.core.first.call(null,seq31819);
var seq31819__$1 = cljs.core.next.call(null,seq31819);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__31820,seq31819__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31831 = arguments.length;
var i__21525__auto___31832 = (0);
while(true){
if((i__21525__auto___31832 < len__21524__auto___31831)){
args__21531__auto__.push((arguments[i__21525__auto___31832]));

var G__31833 = (i__21525__auto___31832 + (1));
i__21525__auto___31832 = G__31833;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq31821){
var G__31822 = cljs.core.first.call(null,seq31821);
var seq31821__$1 = cljs.core.next.call(null,seq31821);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__31822,seq31821__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31834 = arguments.length;
var i__21525__auto___31835 = (0);
while(true){
if((i__21525__auto___31835 < len__21524__auto___31834)){
args__21531__auto__.push((arguments[i__21525__auto___31835]));

var G__31836 = (i__21525__auto___31835 + (1));
i__21525__auto___31835 = G__31836;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq31823){
var G__31824 = cljs.core.first.call(null,seq31823);
var seq31823__$1 = cljs.core.next.call(null,seq31823);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__31824,seq31823__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31845 = arguments.length;
var i__21525__auto___31846 = (0);
while(true){
if((i__21525__auto___31846 < len__21524__auto___31845)){
args__21531__auto__.push((arguments[i__21525__auto___31846]));

var G__31847 = (i__21525__auto___31846 + (1));
i__21525__auto___31846 = G__31847;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__31736__auto__,rest__31737__auto__){
var convert_case__31738__auto__ = (function (p1__31735__31739__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__31735__31739__auto__,rest__31737__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__31736__auto__,convert_case__31738__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq31837){
var G__31838 = cljs.core.first.call(null,seq31837);
var seq31837__$1 = cljs.core.next.call(null,seq31837);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__31838,seq31837__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31848 = arguments.length;
var i__21525__auto___31849 = (0);
while(true){
if((i__21525__auto___31849 < len__21524__auto___31848)){
args__21531__auto__.push((arguments[i__21525__auto___31849]));

var G__31850 = (i__21525__auto___31849 + (1));
i__21525__auto___31849 = G__31850;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq31839){
var G__31840 = cljs.core.first.call(null,seq31839);
var seq31839__$1 = cljs.core.next.call(null,seq31839);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__31840,seq31839__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31851 = arguments.length;
var i__21525__auto___31852 = (0);
while(true){
if((i__21525__auto___31852 < len__21524__auto___31851)){
args__21531__auto__.push((arguments[i__21525__auto___31852]));

var G__31853 = (i__21525__auto___31852 + (1));
i__21525__auto___31852 = G__31853;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq31841){
var G__31842 = cljs.core.first.call(null,seq31841);
var seq31841__$1 = cljs.core.next.call(null,seq31841);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__31842,seq31841__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31854 = arguments.length;
var i__21525__auto___31855 = (0);
while(true){
if((i__21525__auto___31855 < len__21524__auto___31854)){
args__21531__auto__.push((arguments[i__21525__auto___31855]));

var G__31856 = (i__21525__auto___31855 + (1));
i__21525__auto___31855 = G__31856;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq31843){
var G__31844 = cljs.core.first.call(null,seq31843);
var seq31843__$1 = cljs.core.next.call(null,seq31843);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__31844,seq31843__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31865 = arguments.length;
var i__21525__auto___31866 = (0);
while(true){
if((i__21525__auto___31866 < len__21524__auto___31865)){
args__21531__auto__.push((arguments[i__21525__auto___31866]));

var G__31867 = (i__21525__auto___31866 + (1));
i__21525__auto___31866 = G__31867;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__31736__auto__,rest__31737__auto__){
var convert_case__31738__auto__ = (function (p1__31735__31739__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__31735__31739__auto__,rest__31737__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__31736__auto__,convert_case__31738__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq31857){
var G__31858 = cljs.core.first.call(null,seq31857);
var seq31857__$1 = cljs.core.next.call(null,seq31857);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__31858,seq31857__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31868 = arguments.length;
var i__21525__auto___31869 = (0);
while(true){
if((i__21525__auto___31869 < len__21524__auto___31868)){
args__21531__auto__.push((arguments[i__21525__auto___31869]));

var G__31870 = (i__21525__auto___31869 + (1));
i__21525__auto___31869 = G__31870;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq31859){
var G__31860 = cljs.core.first.call(null,seq31859);
var seq31859__$1 = cljs.core.next.call(null,seq31859);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__31860,seq31859__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31871 = arguments.length;
var i__21525__auto___31872 = (0);
while(true){
if((i__21525__auto___31872 < len__21524__auto___31871)){
args__21531__auto__.push((arguments[i__21525__auto___31872]));

var G__31873 = (i__21525__auto___31872 + (1));
i__21525__auto___31872 = G__31873;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq31861){
var G__31862 = cljs.core.first.call(null,seq31861);
var seq31861__$1 = cljs.core.next.call(null,seq31861);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__31862,seq31861__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31874 = arguments.length;
var i__21525__auto___31875 = (0);
while(true){
if((i__21525__auto___31875 < len__21524__auto___31874)){
args__21531__auto__.push((arguments[i__21525__auto___31875]));

var G__31876 = (i__21525__auto___31875 + (1));
i__21525__auto___31875 = G__31876;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq31863){
var G__31864 = cljs.core.first.call(null,seq31863);
var seq31863__$1 = cljs.core.next.call(null,seq31863);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__31864,seq31863__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31885 = arguments.length;
var i__21525__auto___31886 = (0);
while(true){
if((i__21525__auto___31886 < len__21524__auto___31885)){
args__21531__auto__.push((arguments[i__21525__auto___31886]));

var G__31887 = (i__21525__auto___31886 + (1));
i__21525__auto___31886 = G__31887;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__31736__auto__,rest__31737__auto__){
var convert_case__31738__auto__ = (function (p1__31735__31739__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__31735__31739__auto__,rest__31737__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__31736__auto__,convert_case__31738__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq31877){
var G__31878 = cljs.core.first.call(null,seq31877);
var seq31877__$1 = cljs.core.next.call(null,seq31877);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__31878,seq31877__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31888 = arguments.length;
var i__21525__auto___31889 = (0);
while(true){
if((i__21525__auto___31889 < len__21524__auto___31888)){
args__21531__auto__.push((arguments[i__21525__auto___31889]));

var G__31890 = (i__21525__auto___31889 + (1));
i__21525__auto___31889 = G__31890;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq31879){
var G__31880 = cljs.core.first.call(null,seq31879);
var seq31879__$1 = cljs.core.next.call(null,seq31879);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__31880,seq31879__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31891 = arguments.length;
var i__21525__auto___31892 = (0);
while(true){
if((i__21525__auto___31892 < len__21524__auto___31891)){
args__21531__auto__.push((arguments[i__21525__auto___31892]));

var G__31893 = (i__21525__auto___31892 + (1));
i__21525__auto___31892 = G__31893;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq31881){
var G__31882 = cljs.core.first.call(null,seq31881);
var seq31881__$1 = cljs.core.next.call(null,seq31881);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__31882,seq31881__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31894 = arguments.length;
var i__21525__auto___31895 = (0);
while(true){
if((i__21525__auto___31895 < len__21524__auto___31894)){
args__21531__auto__.push((arguments[i__21525__auto___31895]));

var G__31896 = (i__21525__auto___31895 + (1));
i__21525__auto___31895 = G__31896;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq31883){
var G__31884 = cljs.core.first.call(null,seq31883);
var seq31883__$1 = cljs.core.next.call(null,seq31883);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__31884,seq31883__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31905 = arguments.length;
var i__21525__auto___31906 = (0);
while(true){
if((i__21525__auto___31906 < len__21524__auto___31905)){
args__21531__auto__.push((arguments[i__21525__auto___31906]));

var G__31907 = (i__21525__auto___31906 + (1));
i__21525__auto___31906 = G__31907;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__31736__auto__,rest__31737__auto__){
var convert_case__31738__auto__ = (function (p1__31735__31739__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__31735__31739__auto__,rest__31737__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__31736__auto__,convert_case__31738__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq31897){
var G__31898 = cljs.core.first.call(null,seq31897);
var seq31897__$1 = cljs.core.next.call(null,seq31897);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__31898,seq31897__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31908 = arguments.length;
var i__21525__auto___31909 = (0);
while(true){
if((i__21525__auto___31909 < len__21524__auto___31908)){
args__21531__auto__.push((arguments[i__21525__auto___31909]));

var G__31910 = (i__21525__auto___31909 + (1));
i__21525__auto___31909 = G__31910;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq31899){
var G__31900 = cljs.core.first.call(null,seq31899);
var seq31899__$1 = cljs.core.next.call(null,seq31899);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__31900,seq31899__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31911 = arguments.length;
var i__21525__auto___31912 = (0);
while(true){
if((i__21525__auto___31912 < len__21524__auto___31911)){
args__21531__auto__.push((arguments[i__21525__auto___31912]));

var G__31913 = (i__21525__auto___31912 + (1));
i__21525__auto___31912 = G__31913;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq31901){
var G__31902 = cljs.core.first.call(null,seq31901);
var seq31901__$1 = cljs.core.next.call(null,seq31901);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__31902,seq31901__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31914 = arguments.length;
var i__21525__auto___31915 = (0);
while(true){
if((i__21525__auto___31915 < len__21524__auto___31914)){
args__21531__auto__.push((arguments[i__21525__auto___31915]));

var G__31916 = (i__21525__auto___31915 + (1));
i__21525__auto___31915 = G__31916;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31741__auto__,rest__31742__auto__){
if(!((s__31741__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31741__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__31741__auto__),rest__31742__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq31903){
var G__31904 = cljs.core.first.call(null,seq31903);
var seq31903__$1 = cljs.core.next.call(null,seq31903);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__31904,seq31903__$1);
});


//# sourceMappingURL=core.js.map?rel=1480335662867