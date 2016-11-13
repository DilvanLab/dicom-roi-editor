// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.extras');
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.call(null,cljs.core.clj__GT_js,cljs.core.partial.call(null,camel_snake_kebab.extras.transform_keys,camel_snake_kebab.core.__GT_camelCase));
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(root_obj,type,args){
var first_arg = cljs.core.first.call(null,args);
var args__$1 = (((cljs.core.map_QMARK_.call(null,first_arg)) || ((first_arg == null)))?args:cljs.core.cons.call(null,cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.call(null,React.createElement,(root_obj[type]),cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,cljs.core.first.call(null,args__$1)),cljs.core.rest.call(null,args__$1));
});
cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var args32009 = [];
var len__21524__auto___32012 = arguments.length;
var i__21525__auto___32013 = (0);
while(true){
if((i__21525__auto___32013 < len__21524__auto___32012)){
args32009.push((arguments[i__21525__auto___32013]));

var G__32014 = (i__21525__auto___32013 + (1));
i__21525__auto___32013 = G__32014;
continue;
} else {
}
break;
}

var G__32011 = args32009.length;
switch (G__32011) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32009.length)].join('')));

}
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.get_mui_theme.call(null,null);
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
return MaterialUIStyles.getMuiTheme(cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,raw_theme));
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (MaterialUIStyles["colors"][camel_snake_kebab.core.__GT_camelCaseString.call(null,color_key)]);
});
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.call(null,cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.css_transition_group = (function cljs_react_material_ui$core$css_transition_group(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32017 = arguments.length;
var i__21525__auto___32018 = (0);
while(true){
if((i__21525__auto___32018 < len__21524__auto___32017)){
args__21531__auto__.push((arguments[i__21525__auto___32018]));

var G__32019 = (i__21525__auto___32018 + (1));
i__21525__auto___32018 = G__32019;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,React.addons,"CSSTransitionGroup",args);
});

cljs_react_material_ui.core.css_transition_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.css_transition_group.cljs$lang$applyTo = (function (seq32016){
return cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32016));
});

cljs_react_material_ui.core.transition_group = (function cljs_react_material_ui$core$transition_group(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32021 = arguments.length;
var i__21525__auto___32022 = (0);
while(true){
if((i__21525__auto___32022 < len__21524__auto___32021)){
args__21531__auto__.push((arguments[i__21525__auto___32022]));

var G__32023 = (i__21525__auto___32022 + (1));
i__21525__auto___32022 = G__32023;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,React.addons,"TransitionGroup",args);
});

cljs_react_material_ui.core.transition_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.transition_group.cljs$lang$applyTo = (function (seq32020){
return cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32020));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32025 = arguments.length;
var i__21525__auto___32026 = (0);
while(true){
if((i__21525__auto___32026 < len__21524__auto___32025)){
args__21531__auto__.push((arguments[i__21525__auto___32026]));

var G__32027 = (i__21525__auto___32026 + (1));
i__21525__auto___32026 = G__32027;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args);
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq32024){
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32024));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32029 = arguments.length;
var i__21525__auto___32030 = (0);
while(true){
if((i__21525__auto___32030 < len__21524__auto___32029)){
args__21531__auto__.push((arguments[i__21525__auto___32030]));

var G__32031 = (i__21525__auto___32030 + (1));
i__21525__auto___32030 = G__32031;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args);
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq32028){
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32028));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32033 = arguments.length;
var i__21525__auto___32034 = (0);
while(true){
if((i__21525__auto___32034 < len__21524__auto___32033)){
args__21531__auto__.push((arguments[i__21525__auto___32034]));

var G__32035 = (i__21525__auto___32034 + (1));
i__21525__auto___32034 = G__32035;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args);
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq32032){
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32032));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32037 = arguments.length;
var i__21525__auto___32038 = (0);
while(true){
if((i__21525__auto___32038 < len__21524__auto___32037)){
args__21531__auto__.push((arguments[i__21525__auto___32038]));

var G__32039 = (i__21525__auto___32038 + (1));
i__21525__auto___32038 = G__32039;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args);
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq32036){
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32036));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32041 = arguments.length;
var i__21525__auto___32042 = (0);
while(true){
if((i__21525__auto___32042 < len__21524__auto___32041)){
args__21531__auto__.push((arguments[i__21525__auto___32042]));

var G__32043 = (i__21525__auto___32042 + (1));
i__21525__auto___32042 = G__32043;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args);
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq32040){
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32040));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32045 = arguments.length;
var i__21525__auto___32046 = (0);
while(true){
if((i__21525__auto___32046 < len__21524__auto___32045)){
args__21531__auto__.push((arguments[i__21525__auto___32046]));

var G__32047 = (i__21525__auto___32046 + (1));
i__21525__auto___32046 = G__32047;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq32044){
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32044));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32049 = arguments.length;
var i__21525__auto___32050 = (0);
while(true){
if((i__21525__auto___32050 < len__21524__auto___32049)){
args__21531__auto__.push((arguments[i__21525__auto___32050]));

var G__32051 = (i__21525__auto___32050 + (1));
i__21525__auto___32050 = G__32051;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Card",args);
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq32048){
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32048));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32053 = arguments.length;
var i__21525__auto___32054 = (0);
while(true){
if((i__21525__auto___32054 < len__21524__auto___32053)){
args__21531__auto__.push((arguments[i__21525__auto___32054]));

var G__32055 = (i__21525__auto___32054 + (1));
i__21525__auto___32054 = G__32055;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args);
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq32052){
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32052));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32057 = arguments.length;
var i__21525__auto___32058 = (0);
while(true){
if((i__21525__auto___32058 < len__21524__auto___32057)){
args__21531__auto__.push((arguments[i__21525__auto___32058]));

var G__32059 = (i__21525__auto___32058 + (1));
i__21525__auto___32058 = G__32059;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args);
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq32056){
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32056));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32061 = arguments.length;
var i__21525__auto___32062 = (0);
while(true){
if((i__21525__auto___32062 < len__21524__auto___32061)){
args__21531__auto__.push((arguments[i__21525__auto___32062]));

var G__32063 = (i__21525__auto___32062 + (1));
i__21525__auto___32062 = G__32063;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args);
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq32060){
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32060));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32065 = arguments.length;
var i__21525__auto___32066 = (0);
while(true){
if((i__21525__auto___32066 < len__21524__auto___32065)){
args__21531__auto__.push((arguments[i__21525__auto___32066]));

var G__32067 = (i__21525__auto___32066 + (1));
i__21525__auto___32066 = G__32067;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args);
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq32064){
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32064));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32069 = arguments.length;
var i__21525__auto___32070 = (0);
while(true){
if((i__21525__auto___32070 < len__21524__auto___32069)){
args__21531__auto__.push((arguments[i__21525__auto___32070]));

var G__32071 = (i__21525__auto___32070 + (1));
i__21525__auto___32070 = G__32071;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args);
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq32068){
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32068));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32073 = arguments.length;
var i__21525__auto___32074 = (0);
while(true){
if((i__21525__auto___32074 < len__21524__auto___32073)){
args__21531__auto__.push((arguments[i__21525__auto___32074]));

var G__32075 = (i__21525__auto___32074 + (1));
i__21525__auto___32074 = G__32075;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args);
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq32072){
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32072));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32077 = arguments.length;
var i__21525__auto___32078 = (0);
while(true){
if((i__21525__auto___32078 < len__21524__auto___32077)){
args__21531__auto__.push((arguments[i__21525__auto___32078]));

var G__32079 = (i__21525__auto___32078 + (1));
i__21525__auto___32078 = G__32079;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args);
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq32076){
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32076));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32081 = arguments.length;
var i__21525__auto___32082 = (0);
while(true){
if((i__21525__auto___32082 < len__21524__auto___32081)){
args__21531__auto__.push((arguments[i__21525__auto___32082]));

var G__32083 = (i__21525__auto___32082 + (1));
i__21525__auto___32082 = G__32083;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args);
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq32080){
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32080));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32085 = arguments.length;
var i__21525__auto___32086 = (0);
while(true){
if((i__21525__auto___32086 < len__21524__auto___32085)){
args__21531__auto__.push((arguments[i__21525__auto___32086]));

var G__32087 = (i__21525__auto___32086 + (1));
i__21525__auto___32086 = G__32087;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args);
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq32084){
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32084));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32089 = arguments.length;
var i__21525__auto___32090 = (0);
while(true){
if((i__21525__auto___32090 < len__21524__auto___32089)){
args__21531__auto__.push((arguments[i__21525__auto___32090]));

var G__32091 = (i__21525__auto___32090 + (1));
i__21525__auto___32090 = G__32091;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args);
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq32088){
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32088));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32093 = arguments.length;
var i__21525__auto___32094 = (0);
while(true){
if((i__21525__auto___32094 < len__21524__auto___32093)){
args__21531__auto__.push((arguments[i__21525__auto___32094]));

var G__32095 = (i__21525__auto___32094 + (1));
i__21525__auto___32094 = G__32095;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args);
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq32092){
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32092));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32097 = arguments.length;
var i__21525__auto___32098 = (0);
while(true){
if((i__21525__auto___32098 < len__21524__auto___32097)){
args__21531__auto__.push((arguments[i__21525__auto___32098]));

var G__32099 = (i__21525__auto___32098 + (1));
i__21525__auto___32098 = G__32099;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args);
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq32096){
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32096));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32101 = arguments.length;
var i__21525__auto___32102 = (0);
while(true){
if((i__21525__auto___32102 < len__21524__auto___32101)){
args__21531__auto__.push((arguments[i__21525__auto___32102]));

var G__32103 = (i__21525__auto___32102 + (1));
i__21525__auto___32102 = G__32103;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args);
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq32100){
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32100));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32105 = arguments.length;
var i__21525__auto___32106 = (0);
while(true){
if((i__21525__auto___32106 < len__21524__auto___32105)){
args__21531__auto__.push((arguments[i__21525__auto___32106]));

var G__32107 = (i__21525__auto___32106 + (1));
i__21525__auto___32106 = G__32107;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args);
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq32104){
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32104));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32109 = arguments.length;
var i__21525__auto___32110 = (0);
while(true){
if((i__21525__auto___32110 < len__21524__auto___32109)){
args__21531__auto__.push((arguments[i__21525__auto___32110]));

var G__32111 = (i__21525__auto___32110 + (1));
i__21525__auto___32110 = G__32111;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args);
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq32108){
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32108));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32113 = arguments.length;
var i__21525__auto___32114 = (0);
while(true){
if((i__21525__auto___32114 < len__21524__auto___32113)){
args__21531__auto__.push((arguments[i__21525__auto___32114]));

var G__32115 = (i__21525__auto___32114 + (1));
i__21525__auto___32114 = G__32115;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args);
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq32112){
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32112));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32117 = arguments.length;
var i__21525__auto___32118 = (0);
while(true){
if((i__21525__auto___32118 < len__21524__auto___32117)){
args__21531__auto__.push((arguments[i__21525__auto___32118]));

var G__32119 = (i__21525__auto___32118 + (1));
i__21525__auto___32118 = G__32119;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args);
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq32116){
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32116));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32121 = arguments.length;
var i__21525__auto___32122 = (0);
while(true){
if((i__21525__auto___32122 < len__21524__auto___32121)){
args__21531__auto__.push((arguments[i__21525__auto___32122]));

var G__32123 = (i__21525__auto___32122 + (1));
i__21525__auto___32122 = G__32123;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args);
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq32120){
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32120));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32125 = arguments.length;
var i__21525__auto___32126 = (0);
while(true){
if((i__21525__auto___32126 < len__21524__auto___32125)){
args__21531__auto__.push((arguments[i__21525__auto___32126]));

var G__32127 = (i__21525__auto___32126 + (1));
i__21525__auto___32126 = G__32127;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args);
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq32124){
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32124));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32129 = arguments.length;
var i__21525__auto___32130 = (0);
while(true){
if((i__21525__auto___32130 < len__21524__auto___32129)){
args__21531__auto__.push((arguments[i__21525__auto___32130]));

var G__32131 = (i__21525__auto___32130 + (1));
i__21525__auto___32130 = G__32131;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args);
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq32128){
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32128));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32133 = arguments.length;
var i__21525__auto___32134 = (0);
while(true){
if((i__21525__auto___32134 < len__21524__auto___32133)){
args__21531__auto__.push((arguments[i__21525__auto___32134]));

var G__32135 = (i__21525__auto___32134 + (1));
i__21525__auto___32134 = G__32135;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args);
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq32132){
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32132));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32137 = arguments.length;
var i__21525__auto___32138 = (0);
while(true){
if((i__21525__auto___32138 < len__21524__auto___32137)){
args__21531__auto__.push((arguments[i__21525__auto___32138]));

var G__32139 = (i__21525__auto___32138 + (1));
i__21525__auto___32138 = G__32139;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"List",args);
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq32136){
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32136));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32141 = arguments.length;
var i__21525__auto___32142 = (0);
while(true){
if((i__21525__auto___32142 < len__21524__auto___32141)){
args__21531__auto__.push((arguments[i__21525__auto___32142]));

var G__32143 = (i__21525__auto___32142 + (1));
i__21525__auto___32142 = G__32143;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args);
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq32140){
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32140));
});

cljs_react_material_ui.core.make_selectable = (function cljs_react_material_ui$core$make_selectable(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32145 = arguments.length;
var i__21525__auto___32146 = (0);
while(true){
if((i__21525__auto___32146 < len__21524__auto___32145)){
args__21531__auto__.push((arguments[i__21525__auto___32146]));

var G__32147 = (i__21525__auto___32146 + (1));
i__21525__auto___32146 = G__32147;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"makeSelectable",args);
});

cljs_react_material_ui.core.make_selectable.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.make_selectable.cljs$lang$applyTo = (function (seq32144){
return cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32144));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32149 = arguments.length;
var i__21525__auto___32150 = (0);
while(true){
if((i__21525__auto___32150 < len__21524__auto___32149)){
args__21531__auto__.push((arguments[i__21525__auto___32150]));

var G__32151 = (i__21525__auto___32150 + (1));
i__21525__auto___32150 = G__32151;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args);
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq32148){
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32148));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32153 = arguments.length;
var i__21525__auto___32154 = (0);
while(true){
if((i__21525__auto___32154 < len__21524__auto___32153)){
args__21531__auto__.push((arguments[i__21525__auto___32154]));

var G__32155 = (i__21525__auto___32154 + (1));
i__21525__auto___32154 = G__32155;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args);
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq32152){
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32152));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32157 = arguments.length;
var i__21525__auto___32158 = (0);
while(true){
if((i__21525__auto___32158 < len__21524__auto___32157)){
args__21531__auto__.push((arguments[i__21525__auto___32158]));

var G__32159 = (i__21525__auto___32158 + (1));
i__21525__auto___32158 = G__32159;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq32156){
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32156));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32161 = arguments.length;
var i__21525__auto___32162 = (0);
while(true){
if((i__21525__auto___32162 < len__21524__auto___32161)){
args__21531__auto__.push((arguments[i__21525__auto___32162]));

var G__32163 = (i__21525__auto___32162 + (1));
i__21525__auto___32162 = G__32163;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args);
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq32160){
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32160));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32165 = arguments.length;
var i__21525__auto___32166 = (0);
while(true){
if((i__21525__auto___32166 < len__21524__auto___32165)){
args__21531__auto__.push((arguments[i__21525__auto___32166]));

var G__32167 = (i__21525__auto___32166 + (1));
i__21525__auto___32166 = G__32167;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args);
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq32164){
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32164));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32169 = arguments.length;
var i__21525__auto___32170 = (0);
while(true){
if((i__21525__auto___32170 < len__21524__auto___32169)){
args__21531__auto__.push((arguments[i__21525__auto___32170]));

var G__32171 = (i__21525__auto___32170 + (1));
i__21525__auto___32170 = G__32171;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args);
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq32168){
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32168));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32173 = arguments.length;
var i__21525__auto___32174 = (0);
while(true){
if((i__21525__auto___32174 < len__21524__auto___32173)){
args__21531__auto__.push((arguments[i__21525__auto___32174]));

var G__32175 = (i__21525__auto___32174 + (1));
i__21525__auto___32174 = G__32175;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args);
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq32172){
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32172));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32177 = arguments.length;
var i__21525__auto___32178 = (0);
while(true){
if((i__21525__auto___32178 < len__21524__auto___32177)){
args__21531__auto__.push((arguments[i__21525__auto___32178]));

var G__32179 = (i__21525__auto___32178 + (1));
i__21525__auto___32178 = G__32179;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args);
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq32176){
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32176));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32181 = arguments.length;
var i__21525__auto___32182 = (0);
while(true){
if((i__21525__auto___32182 < len__21524__auto___32181)){
args__21531__auto__.push((arguments[i__21525__auto___32182]));

var G__32183 = (i__21525__auto___32182 + (1));
i__21525__auto___32182 = G__32183;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args);
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq32180){
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32180));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32185 = arguments.length;
var i__21525__auto___32186 = (0);
while(true){
if((i__21525__auto___32186 < len__21524__auto___32185)){
args__21531__auto__.push((arguments[i__21525__auto___32186]));

var G__32187 = (i__21525__auto___32186 + (1));
i__21525__auto___32186 = G__32187;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args);
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq32184){
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32184));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32189 = arguments.length;
var i__21525__auto___32190 = (0);
while(true){
if((i__21525__auto___32190 < len__21524__auto___32189)){
args__21531__auto__.push((arguments[i__21525__auto___32190]));

var G__32191 = (i__21525__auto___32190 + (1));
i__21525__auto___32190 = G__32191;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args);
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq32188){
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32188));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32193 = arguments.length;
var i__21525__auto___32194 = (0);
while(true){
if((i__21525__auto___32194 < len__21524__auto___32193)){
args__21531__auto__.push((arguments[i__21525__auto___32194]));

var G__32195 = (i__21525__auto___32194 + (1));
i__21525__auto___32194 = G__32195;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args);
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq32192){
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32192));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32197 = arguments.length;
var i__21525__auto___32198 = (0);
while(true){
if((i__21525__auto___32198 < len__21524__auto___32197)){
args__21531__auto__.push((arguments[i__21525__auto___32198]));

var G__32199 = (i__21525__auto___32198 + (1));
i__21525__auto___32198 = G__32199;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args);
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq32196){
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32196));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32201 = arguments.length;
var i__21525__auto___32202 = (0);
while(true){
if((i__21525__auto___32202 < len__21524__auto___32201)){
args__21531__auto__.push((arguments[i__21525__auto___32202]));

var G__32203 = (i__21525__auto___32202 + (1));
i__21525__auto___32202 = G__32203;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Step",args);
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq32200){
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32200));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32205 = arguments.length;
var i__21525__auto___32206 = (0);
while(true){
if((i__21525__auto___32206 < len__21524__auto___32205)){
args__21531__auto__.push((arguments[i__21525__auto___32206]));

var G__32207 = (i__21525__auto___32206 + (1));
i__21525__auto___32206 = G__32207;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args);
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq32204){
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32204));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32209 = arguments.length;
var i__21525__auto___32210 = (0);
while(true){
if((i__21525__auto___32210 < len__21524__auto___32209)){
args__21531__auto__.push((arguments[i__21525__auto___32210]));

var G__32211 = (i__21525__auto___32210 + (1));
i__21525__auto___32210 = G__32211;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args);
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq32208){
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32208));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32213 = arguments.length;
var i__21525__auto___32214 = (0);
while(true){
if((i__21525__auto___32214 < len__21524__auto___32213)){
args__21531__auto__.push((arguments[i__21525__auto___32214]));

var G__32215 = (i__21525__auto___32214 + (1));
i__21525__auto___32214 = G__32215;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args);
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq32212){
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32212));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32217 = arguments.length;
var i__21525__auto___32218 = (0);
while(true){
if((i__21525__auto___32218 < len__21524__auto___32217)){
args__21531__auto__.push((arguments[i__21525__auto___32218]));

var G__32219 = (i__21525__auto___32218 + (1));
i__21525__auto___32218 = G__32219;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args);
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq32216){
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32216));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32221 = arguments.length;
var i__21525__auto___32222 = (0);
while(true){
if((i__21525__auto___32222 < len__21524__auto___32221)){
args__21531__auto__.push((arguments[i__21525__auto___32222]));

var G__32223 = (i__21525__auto___32222 + (1));
i__21525__auto___32222 = G__32223;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args);
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq32220){
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32220));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32225 = arguments.length;
var i__21525__auto___32226 = (0);
while(true){
if((i__21525__auto___32226 < len__21524__auto___32225)){
args__21531__auto__.push((arguments[i__21525__auto___32226]));

var G__32227 = (i__21525__auto___32226 + (1));
i__21525__auto___32226 = G__32227;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args);
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq32224){
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32224));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32229 = arguments.length;
var i__21525__auto___32230 = (0);
while(true){
if((i__21525__auto___32230 < len__21524__auto___32229)){
args__21531__auto__.push((arguments[i__21525__auto___32230]));

var G__32231 = (i__21525__auto___32230 + (1));
i__21525__auto___32230 = G__32231;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args);
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq32228){
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32228));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32233 = arguments.length;
var i__21525__auto___32234 = (0);
while(true){
if((i__21525__auto___32234 < len__21524__auto___32233)){
args__21531__auto__.push((arguments[i__21525__auto___32234]));

var G__32235 = (i__21525__auto___32234 + (1));
i__21525__auto___32234 = G__32235;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Table",args);
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq32232){
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32232));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32237 = arguments.length;
var i__21525__auto___32238 = (0);
while(true){
if((i__21525__auto___32238 < len__21524__auto___32237)){
args__21531__auto__.push((arguments[i__21525__auto___32238]));

var G__32239 = (i__21525__auto___32238 + (1));
i__21525__auto___32238 = G__32239;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args);
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq32236){
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32236));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32241 = arguments.length;
var i__21525__auto___32242 = (0);
while(true){
if((i__21525__auto___32242 < len__21524__auto___32241)){
args__21531__auto__.push((arguments[i__21525__auto___32242]));

var G__32243 = (i__21525__auto___32242 + (1));
i__21525__auto___32242 = G__32243;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args);
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq32240){
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32240));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32245 = arguments.length;
var i__21525__auto___32246 = (0);
while(true){
if((i__21525__auto___32246 < len__21524__auto___32245)){
args__21531__auto__.push((arguments[i__21525__auto___32246]));

var G__32247 = (i__21525__auto___32246 + (1));
i__21525__auto___32246 = G__32247;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args);
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq32244){
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32244));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32249 = arguments.length;
var i__21525__auto___32250 = (0);
while(true){
if((i__21525__auto___32250 < len__21524__auto___32249)){
args__21531__auto__.push((arguments[i__21525__auto___32250]));

var G__32251 = (i__21525__auto___32250 + (1));
i__21525__auto___32250 = G__32251;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args);
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq32248){
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32248));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32253 = arguments.length;
var i__21525__auto___32254 = (0);
while(true){
if((i__21525__auto___32254 < len__21524__auto___32253)){
args__21531__auto__.push((arguments[i__21525__auto___32254]));

var G__32255 = (i__21525__auto___32254 + (1));
i__21525__auto___32254 = G__32255;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args);
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq32252){
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32252));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32257 = arguments.length;
var i__21525__auto___32258 = (0);
while(true){
if((i__21525__auto___32258 < len__21524__auto___32257)){
args__21531__auto__.push((arguments[i__21525__auto___32258]));

var G__32259 = (i__21525__auto___32258 + (1));
i__21525__auto___32258 = G__32259;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args);
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq32256){
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32256));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32261 = arguments.length;
var i__21525__auto___32262 = (0);
while(true){
if((i__21525__auto___32262 < len__21524__auto___32261)){
args__21531__auto__.push((arguments[i__21525__auto___32262]));

var G__32263 = (i__21525__auto___32262 + (1));
i__21525__auto___32262 = G__32263;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args);
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq32260){
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32260));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32265 = arguments.length;
var i__21525__auto___32266 = (0);
while(true){
if((i__21525__auto___32266 < len__21524__auto___32265)){
args__21531__auto__.push((arguments[i__21525__auto___32266]));

var G__32267 = (i__21525__auto___32266 + (1));
i__21525__auto___32266 = G__32267;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args);
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq32264){
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32264));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32269 = arguments.length;
var i__21525__auto___32270 = (0);
while(true){
if((i__21525__auto___32270 < len__21524__auto___32269)){
args__21531__auto__.push((arguments[i__21525__auto___32270]));

var G__32271 = (i__21525__auto___32270 + (1));
i__21525__auto___32270 = G__32271;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args);
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq32268){
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32268));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32273 = arguments.length;
var i__21525__auto___32274 = (0);
while(true){
if((i__21525__auto___32274 < len__21524__auto___32273)){
args__21531__auto__.push((arguments[i__21525__auto___32274]));

var G__32275 = (i__21525__auto___32274 + (1));
i__21525__auto___32274 = G__32275;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args);
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq32272){
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32272));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32277 = arguments.length;
var i__21525__auto___32278 = (0);
while(true){
if((i__21525__auto___32278 < len__21524__auto___32277)){
args__21531__auto__.push((arguments[i__21525__auto___32278]));

var G__32279 = (i__21525__auto___32278 + (1));
i__21525__auto___32278 = G__32279;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args);
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq32276){
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32276));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32281 = arguments.length;
var i__21525__auto___32282 = (0);
while(true){
if((i__21525__auto___32282 < len__21524__auto___32281)){
args__21531__auto__.push((arguments[i__21525__auto___32282]));

var G__32283 = (i__21525__auto___32282 + (1));
i__21525__auto___32282 = G__32283;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args);
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq32280){
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32280));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__21531__auto__ = [];
var len__21524__auto___32285 = arguments.length;
var i__21525__auto___32286 = (0);
while(true){
if((i__21525__auto___32286 < len__21524__auto___32285)){
args__21531__auto__.push((arguments[i__21525__auto___32286]));

var G__32287 = (i__21525__auto___32286 + (1));
i__21525__auto___32286 = G__32287;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args);
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq32284){
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32284));
});


//# sourceMappingURL=core.js.map?rel=1478875892149