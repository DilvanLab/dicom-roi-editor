// Compiled by ClojureScript 1.9.227 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args30756 = [];
var len__21524__auto___30759 = arguments.length;
var i__21525__auto___30760 = (0);
while(true){
if((i__21525__auto___30760 < len__21524__auto___30759)){
args30756.push((arguments[i__21525__auto___30760]));

var G__30761 = (i__21525__auto___30760 + (1));
i__21525__auto___30760 = G__30761;
continue;
} else {
}
break;
}

var G__30758 = args30756.length;
switch (G__30758) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30756.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__21531__auto__ = [];
var len__21524__auto___30764 = arguments.length;
var i__21525__auto___30765 = (0);
while(true){
if((i__21525__auto___30765 < len__21524__auto___30764)){
args__21531__auto__.push((arguments[i__21525__auto___30765]));

var G__30766 = (i__21525__auto___30765 + (1));
i__21525__auto___30765 = G__30766;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30763){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30763));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21531__auto__ = [];
var len__21524__auto___30768 = arguments.length;
var i__21525__auto___30769 = (0);
while(true){
if((i__21525__auto___30769 < len__21524__auto___30768)){
args__21531__auto__.push((arguments[i__21525__auto___30769]));

var G__30770 = (i__21525__auto___30769 + (1));
i__21525__auto___30769 = G__30770;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30767){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30767));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30771 = cljs.core._EQ_;
var expr__30772 = (function (){var or__20449__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e30775){if((e30775 instanceof Error)){
var e = e30775;
return false;
} else {
throw e30775;

}
}})();
if(cljs.core.truth_(or__20449__auto__)){
return or__20449__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30771.call(null,"true",expr__30772))){
return true;
} else {
if(cljs.core.truth_(pred__30771.call(null,"false",expr__30772))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30772)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e30777){if((e30777 instanceof Error)){
var e = e30777;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30777;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30778){
var map__30781 = p__30778;
var map__30781__$1 = ((((!((map__30781 == null)))?((((map__30781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30781):map__30781);
var message = cljs.core.get.call(null,map__30781__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30781__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20449__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20449__auto__)){
return or__20449__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20437__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20437__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20437__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23672__auto___30943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___30943,ch){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___30943,ch){
return (function (state_30912){
var state_val_30913 = (state_30912[(1)]);
if((state_val_30913 === (7))){
var inst_30908 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
var statearr_30914_30944 = state_30912__$1;
(statearr_30914_30944[(2)] = inst_30908);

(statearr_30914_30944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (1))){
var state_30912__$1 = state_30912;
var statearr_30915_30945 = state_30912__$1;
(statearr_30915_30945[(2)] = null);

(statearr_30915_30945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (4))){
var inst_30865 = (state_30912[(7)]);
var inst_30865__$1 = (state_30912[(2)]);
var state_30912__$1 = (function (){var statearr_30916 = state_30912;
(statearr_30916[(7)] = inst_30865__$1);

return statearr_30916;
})();
if(cljs.core.truth_(inst_30865__$1)){
var statearr_30917_30946 = state_30912__$1;
(statearr_30917_30946[(1)] = (5));

} else {
var statearr_30918_30947 = state_30912__$1;
(statearr_30918_30947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (15))){
var inst_30872 = (state_30912[(8)]);
var inst_30887 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30872);
var inst_30888 = cljs.core.first.call(null,inst_30887);
var inst_30889 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30888);
var inst_30890 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30889)].join('');
var inst_30891 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30890);
var state_30912__$1 = state_30912;
var statearr_30919_30948 = state_30912__$1;
(statearr_30919_30948[(2)] = inst_30891);

(statearr_30919_30948[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (13))){
var inst_30896 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
var statearr_30920_30949 = state_30912__$1;
(statearr_30920_30949[(2)] = inst_30896);

(statearr_30920_30949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (6))){
var state_30912__$1 = state_30912;
var statearr_30921_30950 = state_30912__$1;
(statearr_30921_30950[(2)] = null);

(statearr_30921_30950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (17))){
var inst_30894 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
var statearr_30922_30951 = state_30912__$1;
(statearr_30922_30951[(2)] = inst_30894);

(statearr_30922_30951[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (3))){
var inst_30910 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30912__$1,inst_30910);
} else {
if((state_val_30913 === (12))){
var inst_30871 = (state_30912[(9)]);
var inst_30885 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30871,opts);
var state_30912__$1 = state_30912;
if(cljs.core.truth_(inst_30885)){
var statearr_30923_30952 = state_30912__$1;
(statearr_30923_30952[(1)] = (15));

} else {
var statearr_30924_30953 = state_30912__$1;
(statearr_30924_30953[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (2))){
var state_30912__$1 = state_30912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30912__$1,(4),ch);
} else {
if((state_val_30913 === (11))){
var inst_30872 = (state_30912[(8)]);
var inst_30877 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30878 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30872);
var inst_30879 = cljs.core.async.timeout.call(null,(1000));
var inst_30880 = [inst_30878,inst_30879];
var inst_30881 = (new cljs.core.PersistentVector(null,2,(5),inst_30877,inst_30880,null));
var state_30912__$1 = state_30912;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30912__$1,(14),inst_30881);
} else {
if((state_val_30913 === (9))){
var inst_30872 = (state_30912[(8)]);
var inst_30898 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30899 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30872);
var inst_30900 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30899);
var inst_30901 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30900)].join('');
var inst_30902 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30901);
var state_30912__$1 = (function (){var statearr_30925 = state_30912;
(statearr_30925[(10)] = inst_30898);

return statearr_30925;
})();
var statearr_30926_30954 = state_30912__$1;
(statearr_30926_30954[(2)] = inst_30902);

(statearr_30926_30954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (5))){
var inst_30865 = (state_30912[(7)]);
var inst_30867 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30868 = (new cljs.core.PersistentArrayMap(null,2,inst_30867,null));
var inst_30869 = (new cljs.core.PersistentHashSet(null,inst_30868,null));
var inst_30870 = figwheel.client.focus_msgs.call(null,inst_30869,inst_30865);
var inst_30871 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30870);
var inst_30872 = cljs.core.first.call(null,inst_30870);
var inst_30873 = figwheel.client.autoload_QMARK_.call(null);
var state_30912__$1 = (function (){var statearr_30927 = state_30912;
(statearr_30927[(8)] = inst_30872);

(statearr_30927[(9)] = inst_30871);

return statearr_30927;
})();
if(cljs.core.truth_(inst_30873)){
var statearr_30928_30955 = state_30912__$1;
(statearr_30928_30955[(1)] = (8));

} else {
var statearr_30929_30956 = state_30912__$1;
(statearr_30929_30956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (14))){
var inst_30883 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
var statearr_30930_30957 = state_30912__$1;
(statearr_30930_30957[(2)] = inst_30883);

(statearr_30930_30957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (16))){
var state_30912__$1 = state_30912;
var statearr_30931_30958 = state_30912__$1;
(statearr_30931_30958[(2)] = null);

(statearr_30931_30958[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (10))){
var inst_30904 = (state_30912[(2)]);
var state_30912__$1 = (function (){var statearr_30932 = state_30912;
(statearr_30932[(11)] = inst_30904);

return statearr_30932;
})();
var statearr_30933_30959 = state_30912__$1;
(statearr_30933_30959[(2)] = null);

(statearr_30933_30959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (8))){
var inst_30871 = (state_30912[(9)]);
var inst_30875 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30871,opts);
var state_30912__$1 = state_30912;
if(cljs.core.truth_(inst_30875)){
var statearr_30934_30960 = state_30912__$1;
(statearr_30934_30960[(1)] = (11));

} else {
var statearr_30935_30961 = state_30912__$1;
(statearr_30935_30961[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23672__auto___30943,ch))
;
return ((function (switch__23560__auto__,c__23672__auto___30943,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23561__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23561__auto____0 = (function (){
var statearr_30939 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30939[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23561__auto__);

(statearr_30939[(1)] = (1));

return statearr_30939;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23561__auto____1 = (function (state_30912){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_30912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e30940){if((e30940 instanceof Object)){
var ex__23564__auto__ = e30940;
var statearr_30941_30962 = state_30912;
(statearr_30941_30962[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30963 = state_30912;
state_30912 = G__30963;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23561__auto__ = function(state_30912){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23561__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23561__auto____1.call(this,state_30912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23561__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23561__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___30943,ch))
})();
var state__23674__auto__ = (function (){var statearr_30942 = f__23673__auto__.call(null);
(statearr_30942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___30943);

return statearr_30942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___30943,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30964_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30964_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30967 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30967){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e30966){if((e30966 instanceof Error)){
var e = e30966;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30967], null));
} else {
var e = e30966;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_30967))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30968){
var map__30977 = p__30968;
var map__30977__$1 = ((((!((map__30977 == null)))?((((map__30977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30977):map__30977);
var opts = map__30977__$1;
var build_id = cljs.core.get.call(null,map__30977__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30977,map__30977__$1,opts,build_id){
return (function (p__30979){
var vec__30980 = p__30979;
var seq__30981 = cljs.core.seq.call(null,vec__30980);
var first__30982 = cljs.core.first.call(null,seq__30981);
var seq__30981__$1 = cljs.core.next.call(null,seq__30981);
var map__30983 = first__30982;
var map__30983__$1 = ((((!((map__30983 == null)))?((((map__30983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30983):map__30983);
var msg = map__30983__$1;
var msg_name = cljs.core.get.call(null,map__30983__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30981__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30980,seq__30981,first__30982,seq__30981__$1,map__30983,map__30983__$1,msg,msg_name,_,map__30977,map__30977__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30980,seq__30981,first__30982,seq__30981__$1,map__30983,map__30983__$1,msg,msg_name,_,map__30977,map__30977__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30977,map__30977__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30991){
var vec__30992 = p__30991;
var seq__30993 = cljs.core.seq.call(null,vec__30992);
var first__30994 = cljs.core.first.call(null,seq__30993);
var seq__30993__$1 = cljs.core.next.call(null,seq__30993);
var map__30995 = first__30994;
var map__30995__$1 = ((((!((map__30995 == null)))?((((map__30995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30995):map__30995);
var msg = map__30995__$1;
var msg_name = cljs.core.get.call(null,map__30995__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30993__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30997){
var map__31009 = p__30997;
var map__31009__$1 = ((((!((map__31009 == null)))?((((map__31009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31009):map__31009);
var on_compile_warning = cljs.core.get.call(null,map__31009__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31009__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31009,map__31009__$1,on_compile_warning,on_compile_fail){
return (function (p__31011){
var vec__31012 = p__31011;
var seq__31013 = cljs.core.seq.call(null,vec__31012);
var first__31014 = cljs.core.first.call(null,seq__31013);
var seq__31013__$1 = cljs.core.next.call(null,seq__31013);
var map__31015 = first__31014;
var map__31015__$1 = ((((!((map__31015 == null)))?((((map__31015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31015):map__31015);
var msg = map__31015__$1;
var msg_name = cljs.core.get.call(null,map__31015__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31013__$1;
var pred__31017 = cljs.core._EQ_;
var expr__31018 = msg_name;
if(cljs.core.truth_(pred__31017.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31018))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31017.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31018))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31009,map__31009__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto__,msg_hist,msg_names,msg){
return (function (state_31226){
var state_val_31227 = (state_31226[(1)]);
if((state_val_31227 === (7))){
var inst_31154 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
if(cljs.core.truth_(inst_31154)){
var statearr_31228_31274 = state_31226__$1;
(statearr_31228_31274[(1)] = (8));

} else {
var statearr_31229_31275 = state_31226__$1;
(statearr_31229_31275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (20))){
var inst_31220 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31230_31276 = state_31226__$1;
(statearr_31230_31276[(2)] = inst_31220);

(statearr_31230_31276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (27))){
var inst_31216 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31231_31277 = state_31226__$1;
(statearr_31231_31277[(2)] = inst_31216);

(statearr_31231_31277[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (1))){
var inst_31147 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31226__$1 = state_31226;
if(cljs.core.truth_(inst_31147)){
var statearr_31232_31278 = state_31226__$1;
(statearr_31232_31278[(1)] = (2));

} else {
var statearr_31233_31279 = state_31226__$1;
(statearr_31233_31279[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (24))){
var inst_31218 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31234_31280 = state_31226__$1;
(statearr_31234_31280[(2)] = inst_31218);

(statearr_31234_31280[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (4))){
var inst_31224 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31226__$1,inst_31224);
} else {
if((state_val_31227 === (15))){
var inst_31222 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31235_31281 = state_31226__$1;
(statearr_31235_31281[(2)] = inst_31222);

(statearr_31235_31281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (21))){
var inst_31181 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31236_31282 = state_31226__$1;
(statearr_31236_31282[(2)] = inst_31181);

(statearr_31236_31282[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (31))){
var inst_31205 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31226__$1 = state_31226;
if(cljs.core.truth_(inst_31205)){
var statearr_31237_31283 = state_31226__$1;
(statearr_31237_31283[(1)] = (34));

} else {
var statearr_31238_31284 = state_31226__$1;
(statearr_31238_31284[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (32))){
var inst_31214 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31239_31285 = state_31226__$1;
(statearr_31239_31285[(2)] = inst_31214);

(statearr_31239_31285[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (33))){
var inst_31203 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31240_31286 = state_31226__$1;
(statearr_31240_31286[(2)] = inst_31203);

(statearr_31240_31286[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (13))){
var inst_31168 = figwheel.client.heads_up.clear.call(null);
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31226__$1,(16),inst_31168);
} else {
if((state_val_31227 === (22))){
var inst_31185 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31186 = figwheel.client.heads_up.append_warning_message.call(null,inst_31185);
var state_31226__$1 = state_31226;
var statearr_31241_31287 = state_31226__$1;
(statearr_31241_31287[(2)] = inst_31186);

(statearr_31241_31287[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (36))){
var inst_31212 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31242_31288 = state_31226__$1;
(statearr_31242_31288[(2)] = inst_31212);

(statearr_31242_31288[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (29))){
var inst_31196 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31243_31289 = state_31226__$1;
(statearr_31243_31289[(2)] = inst_31196);

(statearr_31243_31289[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (6))){
var inst_31149 = (state_31226[(7)]);
var state_31226__$1 = state_31226;
var statearr_31244_31290 = state_31226__$1;
(statearr_31244_31290[(2)] = inst_31149);

(statearr_31244_31290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (28))){
var inst_31192 = (state_31226[(2)]);
var inst_31193 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31194 = figwheel.client.heads_up.display_warning.call(null,inst_31193);
var state_31226__$1 = (function (){var statearr_31245 = state_31226;
(statearr_31245[(8)] = inst_31192);

return statearr_31245;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31226__$1,(29),inst_31194);
} else {
if((state_val_31227 === (25))){
var inst_31190 = figwheel.client.heads_up.clear.call(null);
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31226__$1,(28),inst_31190);
} else {
if((state_val_31227 === (34))){
var inst_31207 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31226__$1,(37),inst_31207);
} else {
if((state_val_31227 === (17))){
var inst_31174 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31246_31291 = state_31226__$1;
(statearr_31246_31291[(2)] = inst_31174);

(statearr_31246_31291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (3))){
var inst_31166 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31226__$1 = state_31226;
if(cljs.core.truth_(inst_31166)){
var statearr_31247_31292 = state_31226__$1;
(statearr_31247_31292[(1)] = (13));

} else {
var statearr_31248_31293 = state_31226__$1;
(statearr_31248_31293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (12))){
var inst_31162 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31249_31294 = state_31226__$1;
(statearr_31249_31294[(2)] = inst_31162);

(statearr_31249_31294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (2))){
var inst_31149 = (state_31226[(7)]);
var inst_31149__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31226__$1 = (function (){var statearr_31250 = state_31226;
(statearr_31250[(7)] = inst_31149__$1);

return statearr_31250;
})();
if(cljs.core.truth_(inst_31149__$1)){
var statearr_31251_31295 = state_31226__$1;
(statearr_31251_31295[(1)] = (5));

} else {
var statearr_31252_31296 = state_31226__$1;
(statearr_31252_31296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (23))){
var inst_31188 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31226__$1 = state_31226;
if(cljs.core.truth_(inst_31188)){
var statearr_31253_31297 = state_31226__$1;
(statearr_31253_31297[(1)] = (25));

} else {
var statearr_31254_31298 = state_31226__$1;
(statearr_31254_31298[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (35))){
var state_31226__$1 = state_31226;
var statearr_31255_31299 = state_31226__$1;
(statearr_31255_31299[(2)] = null);

(statearr_31255_31299[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (19))){
var inst_31183 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31226__$1 = state_31226;
if(cljs.core.truth_(inst_31183)){
var statearr_31256_31300 = state_31226__$1;
(statearr_31256_31300[(1)] = (22));

} else {
var statearr_31257_31301 = state_31226__$1;
(statearr_31257_31301[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (11))){
var inst_31158 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31258_31302 = state_31226__$1;
(statearr_31258_31302[(2)] = inst_31158);

(statearr_31258_31302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (9))){
var inst_31160 = figwheel.client.heads_up.clear.call(null);
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31226__$1,(12),inst_31160);
} else {
if((state_val_31227 === (5))){
var inst_31151 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31226__$1 = state_31226;
var statearr_31259_31303 = state_31226__$1;
(statearr_31259_31303[(2)] = inst_31151);

(statearr_31259_31303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (14))){
var inst_31176 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31226__$1 = state_31226;
if(cljs.core.truth_(inst_31176)){
var statearr_31260_31304 = state_31226__$1;
(statearr_31260_31304[(1)] = (18));

} else {
var statearr_31261_31305 = state_31226__$1;
(statearr_31261_31305[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (26))){
var inst_31198 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31226__$1 = state_31226;
if(cljs.core.truth_(inst_31198)){
var statearr_31262_31306 = state_31226__$1;
(statearr_31262_31306[(1)] = (30));

} else {
var statearr_31263_31307 = state_31226__$1;
(statearr_31263_31307[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (16))){
var inst_31170 = (state_31226[(2)]);
var inst_31171 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31172 = figwheel.client.heads_up.display_exception.call(null,inst_31171);
var state_31226__$1 = (function (){var statearr_31264 = state_31226;
(statearr_31264[(9)] = inst_31170);

return statearr_31264;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31226__$1,(17),inst_31172);
} else {
if((state_val_31227 === (30))){
var inst_31200 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31201 = figwheel.client.heads_up.display_warning.call(null,inst_31200);
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31226__$1,(33),inst_31201);
} else {
if((state_val_31227 === (10))){
var inst_31164 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31265_31308 = state_31226__$1;
(statearr_31265_31308[(2)] = inst_31164);

(statearr_31265_31308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (18))){
var inst_31178 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31179 = figwheel.client.heads_up.display_exception.call(null,inst_31178);
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31226__$1,(21),inst_31179);
} else {
if((state_val_31227 === (37))){
var inst_31209 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31266_31309 = state_31226__$1;
(statearr_31266_31309[(2)] = inst_31209);

(statearr_31266_31309[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (8))){
var inst_31156 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31226__$1,(11),inst_31156);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23672__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23560__auto__,c__23672__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23561__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23561__auto____0 = (function (){
var statearr_31270 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31270[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23561__auto__);

(statearr_31270[(1)] = (1));

return statearr_31270;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23561__auto____1 = (function (state_31226){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_31226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e31271){if((e31271 instanceof Object)){
var ex__23564__auto__ = e31271;
var statearr_31272_31310 = state_31226;
(statearr_31272_31310[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31311 = state_31226;
state_31226 = G__31311;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23561__auto__ = function(state_31226){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23561__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23561__auto____1.call(this,state_31226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23561__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23561__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto__,msg_hist,msg_names,msg))
})();
var state__23674__auto__ = (function (){var statearr_31273 = f__23673__auto__.call(null);
(statearr_31273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto__);

return statearr_31273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto__,msg_hist,msg_names,msg))
);

return c__23672__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23672__auto___31374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___31374,ch){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___31374,ch){
return (function (state_31357){
var state_val_31358 = (state_31357[(1)]);
if((state_val_31358 === (1))){
var state_31357__$1 = state_31357;
var statearr_31359_31375 = state_31357__$1;
(statearr_31359_31375[(2)] = null);

(statearr_31359_31375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (2))){
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31357__$1,(4),ch);
} else {
if((state_val_31358 === (3))){
var inst_31355 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31357__$1,inst_31355);
} else {
if((state_val_31358 === (4))){
var inst_31345 = (state_31357[(7)]);
var inst_31345__$1 = (state_31357[(2)]);
var state_31357__$1 = (function (){var statearr_31360 = state_31357;
(statearr_31360[(7)] = inst_31345__$1);

return statearr_31360;
})();
if(cljs.core.truth_(inst_31345__$1)){
var statearr_31361_31376 = state_31357__$1;
(statearr_31361_31376[(1)] = (5));

} else {
var statearr_31362_31377 = state_31357__$1;
(statearr_31362_31377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (5))){
var inst_31345 = (state_31357[(7)]);
var inst_31347 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31345);
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31357__$1,(8),inst_31347);
} else {
if((state_val_31358 === (6))){
var state_31357__$1 = state_31357;
var statearr_31363_31378 = state_31357__$1;
(statearr_31363_31378[(2)] = null);

(statearr_31363_31378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (7))){
var inst_31353 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
var statearr_31364_31379 = state_31357__$1;
(statearr_31364_31379[(2)] = inst_31353);

(statearr_31364_31379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (8))){
var inst_31349 = (state_31357[(2)]);
var state_31357__$1 = (function (){var statearr_31365 = state_31357;
(statearr_31365[(8)] = inst_31349);

return statearr_31365;
})();
var statearr_31366_31380 = state_31357__$1;
(statearr_31366_31380[(2)] = null);

(statearr_31366_31380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__23672__auto___31374,ch))
;
return ((function (switch__23560__auto__,c__23672__auto___31374,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23561__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23561__auto____0 = (function (){
var statearr_31370 = [null,null,null,null,null,null,null,null,null];
(statearr_31370[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23561__auto__);

(statearr_31370[(1)] = (1));

return statearr_31370;
});
var figwheel$client$heads_up_plugin_$_state_machine__23561__auto____1 = (function (state_31357){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_31357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e31371){if((e31371 instanceof Object)){
var ex__23564__auto__ = e31371;
var statearr_31372_31381 = state_31357;
(statearr_31372_31381[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31382 = state_31357;
state_31357 = G__31382;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23561__auto__ = function(state_31357){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23561__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23561__auto____1.call(this,state_31357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23561__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23561__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___31374,ch))
})();
var state__23674__auto__ = (function (){var statearr_31373 = f__23673__auto__.call(null);
(statearr_31373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___31374);

return statearr_31373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___31374,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto__){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto__){
return (function (state_31403){
var state_val_31404 = (state_31403[(1)]);
if((state_val_31404 === (1))){
var inst_31398 = cljs.core.async.timeout.call(null,(3000));
var state_31403__$1 = state_31403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31403__$1,(2),inst_31398);
} else {
if((state_val_31404 === (2))){
var inst_31400 = (state_31403[(2)]);
var inst_31401 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31403__$1 = (function (){var statearr_31405 = state_31403;
(statearr_31405[(7)] = inst_31400);

return statearr_31405;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31403__$1,inst_31401);
} else {
return null;
}
}
});})(c__23672__auto__))
;
return ((function (switch__23560__auto__,c__23672__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23561__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23561__auto____0 = (function (){
var statearr_31409 = [null,null,null,null,null,null,null,null];
(statearr_31409[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23561__auto__);

(statearr_31409[(1)] = (1));

return statearr_31409;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23561__auto____1 = (function (state_31403){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_31403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e31410){if((e31410 instanceof Object)){
var ex__23564__auto__ = e31410;
var statearr_31411_31413 = state_31403;
(statearr_31411_31413[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31414 = state_31403;
state_31403 = G__31414;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23561__auto__ = function(state_31403){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23561__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23561__auto____1.call(this,state_31403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23561__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23561__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto__))
})();
var state__23674__auto__ = (function (){var statearr_31412 = f__23673__auto__.call(null);
(statearr_31412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto__);

return statearr_31412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto__))
);

return c__23672__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto__,figwheel_version,temp__4657__auto__){
return (function (state_31437){
var state_val_31438 = (state_31437[(1)]);
if((state_val_31438 === (1))){
var inst_31431 = cljs.core.async.timeout.call(null,(2000));
var state_31437__$1 = state_31437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31437__$1,(2),inst_31431);
} else {
if((state_val_31438 === (2))){
var inst_31433 = (state_31437[(2)]);
var inst_31434 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_31435 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31434);
var state_31437__$1 = (function (){var statearr_31439 = state_31437;
(statearr_31439[(7)] = inst_31433);

return statearr_31439;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31437__$1,inst_31435);
} else {
return null;
}
}
});})(c__23672__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__23560__auto__,c__23672__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23561__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23561__auto____0 = (function (){
var statearr_31443 = [null,null,null,null,null,null,null,null];
(statearr_31443[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23561__auto__);

(statearr_31443[(1)] = (1));

return statearr_31443;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23561__auto____1 = (function (state_31437){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_31437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e31444){if((e31444 instanceof Object)){
var ex__23564__auto__ = e31444;
var statearr_31445_31447 = state_31437;
(statearr_31445_31447[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31448 = state_31437;
state_31437 = G__31448;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23561__auto__ = function(state_31437){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23561__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23561__auto____1.call(this,state_31437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23561__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23561__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto__,figwheel_version,temp__4657__auto__))
})();
var state__23674__auto__ = (function (){var statearr_31446 = f__23673__auto__.call(null);
(statearr_31446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto__);

return statearr_31446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto__,figwheel_version,temp__4657__auto__))
);

return c__23672__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31449){
var map__31453 = p__31449;
var map__31453__$1 = ((((!((map__31453 == null)))?((((map__31453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31453):map__31453);
var file = cljs.core.get.call(null,map__31453__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31453__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31453__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31455 = "";
var G__31455__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__31455),cljs.core.str("file "),cljs.core.str(file)].join(''):G__31455);
var G__31455__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__31455__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__31455__$1);
if(cljs.core.truth_((function (){var and__20437__auto__ = line;
if(cljs.core.truth_(and__20437__auto__)){
return column;
} else {
return and__20437__auto__;
}
})())){
return [cljs.core.str(G__31455__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__31455__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31456){
var map__31463 = p__31456;
var map__31463__$1 = ((((!((map__31463 == null)))?((((map__31463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31463):map__31463);
var ed = map__31463__$1;
var formatted_exception = cljs.core.get.call(null,map__31463__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31463__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31463__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31465_31469 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31466_31470 = null;
var count__31467_31471 = (0);
var i__31468_31472 = (0);
while(true){
if((i__31468_31472 < count__31467_31471)){
var msg_31473 = cljs.core._nth.call(null,chunk__31466_31470,i__31468_31472);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31473);

var G__31474 = seq__31465_31469;
var G__31475 = chunk__31466_31470;
var G__31476 = count__31467_31471;
var G__31477 = (i__31468_31472 + (1));
seq__31465_31469 = G__31474;
chunk__31466_31470 = G__31475;
count__31467_31471 = G__31476;
i__31468_31472 = G__31477;
continue;
} else {
var temp__4657__auto___31478 = cljs.core.seq.call(null,seq__31465_31469);
if(temp__4657__auto___31478){
var seq__31465_31479__$1 = temp__4657__auto___31478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31465_31479__$1)){
var c__21260__auto___31480 = cljs.core.chunk_first.call(null,seq__31465_31479__$1);
var G__31481 = cljs.core.chunk_rest.call(null,seq__31465_31479__$1);
var G__31482 = c__21260__auto___31480;
var G__31483 = cljs.core.count.call(null,c__21260__auto___31480);
var G__31484 = (0);
seq__31465_31469 = G__31481;
chunk__31466_31470 = G__31482;
count__31467_31471 = G__31483;
i__31468_31472 = G__31484;
continue;
} else {
var msg_31485 = cljs.core.first.call(null,seq__31465_31479__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31485);

var G__31486 = cljs.core.next.call(null,seq__31465_31479__$1);
var G__31487 = null;
var G__31488 = (0);
var G__31489 = (0);
seq__31465_31469 = G__31486;
chunk__31466_31470 = G__31487;
count__31467_31471 = G__31488;
i__31468_31472 = G__31489;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31490){
var map__31493 = p__31490;
var map__31493__$1 = ((((!((map__31493 == null)))?((((map__31493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31493):map__31493);
var w = map__31493__$1;
var message = cljs.core.get.call(null,map__31493__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20437__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20437__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20437__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31505 = cljs.core.seq.call(null,plugins);
var chunk__31506 = null;
var count__31507 = (0);
var i__31508 = (0);
while(true){
if((i__31508 < count__31507)){
var vec__31509 = cljs.core._nth.call(null,chunk__31506,i__31508);
var k = cljs.core.nth.call(null,vec__31509,(0),null);
var plugin = cljs.core.nth.call(null,vec__31509,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31515 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31505,chunk__31506,count__31507,i__31508,pl_31515,vec__31509,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31515.call(null,msg_hist);
});})(seq__31505,chunk__31506,count__31507,i__31508,pl_31515,vec__31509,k,plugin))
);
} else {
}

var G__31516 = seq__31505;
var G__31517 = chunk__31506;
var G__31518 = count__31507;
var G__31519 = (i__31508 + (1));
seq__31505 = G__31516;
chunk__31506 = G__31517;
count__31507 = G__31518;
i__31508 = G__31519;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31505);
if(temp__4657__auto__){
var seq__31505__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31505__$1)){
var c__21260__auto__ = cljs.core.chunk_first.call(null,seq__31505__$1);
var G__31520 = cljs.core.chunk_rest.call(null,seq__31505__$1);
var G__31521 = c__21260__auto__;
var G__31522 = cljs.core.count.call(null,c__21260__auto__);
var G__31523 = (0);
seq__31505 = G__31520;
chunk__31506 = G__31521;
count__31507 = G__31522;
i__31508 = G__31523;
continue;
} else {
var vec__31512 = cljs.core.first.call(null,seq__31505__$1);
var k = cljs.core.nth.call(null,vec__31512,(0),null);
var plugin = cljs.core.nth.call(null,vec__31512,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31524 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31505,chunk__31506,count__31507,i__31508,pl_31524,vec__31512,k,plugin,seq__31505__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31524.call(null,msg_hist);
});})(seq__31505,chunk__31506,count__31507,i__31508,pl_31524,vec__31512,k,plugin,seq__31505__$1,temp__4657__auto__))
);
} else {
}

var G__31525 = cljs.core.next.call(null,seq__31505__$1);
var G__31526 = null;
var G__31527 = (0);
var G__31528 = (0);
seq__31505 = G__31525;
chunk__31506 = G__31526;
count__31507 = G__31527;
i__31508 = G__31528;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31529 = [];
var len__21524__auto___31536 = arguments.length;
var i__21525__auto___31537 = (0);
while(true){
if((i__21525__auto___31537 < len__21524__auto___31536)){
args31529.push((arguments[i__21525__auto___31537]));

var G__31538 = (i__21525__auto___31537 + (1));
i__21525__auto___31537 = G__31538;
continue;
} else {
}
break;
}

var G__31531 = args31529.length;
switch (G__31531) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31529.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31532_31540 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31533_31541 = null;
var count__31534_31542 = (0);
var i__31535_31543 = (0);
while(true){
if((i__31535_31543 < count__31534_31542)){
var msg_31544 = cljs.core._nth.call(null,chunk__31533_31541,i__31535_31543);
figwheel.client.socket.handle_incoming_message.call(null,msg_31544);

var G__31545 = seq__31532_31540;
var G__31546 = chunk__31533_31541;
var G__31547 = count__31534_31542;
var G__31548 = (i__31535_31543 + (1));
seq__31532_31540 = G__31545;
chunk__31533_31541 = G__31546;
count__31534_31542 = G__31547;
i__31535_31543 = G__31548;
continue;
} else {
var temp__4657__auto___31549 = cljs.core.seq.call(null,seq__31532_31540);
if(temp__4657__auto___31549){
var seq__31532_31550__$1 = temp__4657__auto___31549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31532_31550__$1)){
var c__21260__auto___31551 = cljs.core.chunk_first.call(null,seq__31532_31550__$1);
var G__31552 = cljs.core.chunk_rest.call(null,seq__31532_31550__$1);
var G__31553 = c__21260__auto___31551;
var G__31554 = cljs.core.count.call(null,c__21260__auto___31551);
var G__31555 = (0);
seq__31532_31540 = G__31552;
chunk__31533_31541 = G__31553;
count__31534_31542 = G__31554;
i__31535_31543 = G__31555;
continue;
} else {
var msg_31556 = cljs.core.first.call(null,seq__31532_31550__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31556);

var G__31557 = cljs.core.next.call(null,seq__31532_31550__$1);
var G__31558 = null;
var G__31559 = (0);
var G__31560 = (0);
seq__31532_31540 = G__31557;
chunk__31533_31541 = G__31558;
count__31534_31542 = G__31559;
i__31535_31543 = G__31560;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21531__auto__ = [];
var len__21524__auto___31565 = arguments.length;
var i__21525__auto___31566 = (0);
while(true){
if((i__21525__auto___31566 < len__21524__auto___31565)){
args__21531__auto__.push((arguments[i__21525__auto___31566]));

var G__31567 = (i__21525__auto___31566 + (1));
i__21525__auto___31566 = G__31567;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31562){
var map__31563 = p__31562;
var map__31563__$1 = ((((!((map__31563 == null)))?((((map__31563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31563):map__31563);
var opts = map__31563__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31561){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31561));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31569){if((e31569 instanceof Error)){
var e = e31569;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31569;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31573){
var map__31574 = p__31573;
var map__31574__$1 = ((((!((map__31574 == null)))?((((map__31574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31574):map__31574);
var msg_name = cljs.core.get.call(null,map__31574__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1480335662173