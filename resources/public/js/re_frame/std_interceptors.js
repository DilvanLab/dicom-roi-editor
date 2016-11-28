// Compiled by ClojureScript 1.9.227 {}
goog.provide('re_frame.std_interceptors');
goog.require('cljs.core');
goog.require('re_frame.interceptor');
goog.require('re_frame.loggers');
goog.require('re_frame.registrar');
goog.require('re_frame.db');
goog.require('clojure.data');
/**
 * An interceptor which logs data about the handling of an event.
 * 
 *   Includes a `clojure.data/diff` of the db, before vs after, showing
 *   the changes caused by the event handler.
 * 
 *   You'd typically want this interceptor after (to the right of) any
 *   path interceptor.
 * 
 *   Warning:  calling clojure.data/diff on large, complex data structures
 *   can be slow. So, you won't want this interceptor present in production
 *   code. See the todomvc example to see how to exclude interceptors from
 *   production code.
 */
re_frame.std_interceptors.debug = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$debug_before(context){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"Handling re-frame event: ",re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442)));

return context;
}),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$std_interceptors$debug_after(context){
var event = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442));
var orig_db = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
var new_db = re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("re-frame.std-interceptors","not-found","re-frame.std-interceptors/not-found",-1614827865));
if(cljs.core._EQ_.call(null,new_db,new cljs.core.Keyword("re-frame.std-interceptors","not-found","re-frame.std-interceptors/not-found",-1614827865))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"No :db changes caused by: ",event);
} else {
var vec__36281_36284 = clojure.data.diff.call(null,orig_db,new_db);
var only_before_36285 = cljs.core.nth.call(null,vec__36281_36284,(0),null);
var only_after_36286 = cljs.core.nth.call(null,vec__36281_36284,(1),null);
var db_changed_QMARK__36287 = (cljs.core.some_QMARK_.call(null,only_before_36285)) || (cljs.core.some_QMARK_.call(null,only_after_36286));
if(db_changed_QMARK__36287){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"group","group",582596132),"db clojure.data/diff for: ",event);

re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"only before: ",only_before_36285);

re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"only after : ",only_after_36286);

re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382));
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"no app-db changes caused by: ",event);
}
}

return context;
}));
/**
 * An interceptor which removes the first element of the event vector,
 *   allowing you to write more aesthetically pleasing db handlers. No
 *   leading underscore on the event-v!
 *   Your event handlers will look like this:
 * 
 *    (defn my-handler
 *      [db [x y z]]    ;; <-- instead of [_ x y z]
 *      ....)
 */
re_frame.std_interceptors.trim_v = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"trim-v","trim-v",-1274938640),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$trimv_before(context){
return re_frame.interceptor.assoc_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.vec.call(null,cljs.core.rest.call(null,re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442)))));
}));
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-db`.
 * 
 *   These handlers take two arguments;  `db` and `event`, and they return `db`.
 * 
 *   (fn [db event]
 *   ....)
 * 
 *   So, the interceptor wraps the given handler:
 *   1. extracts two `:coeffects` keys: db and event
 *   2. calls handler-fn
 *   3. stores the db result back into context's `:effects`
 */
re_frame.std_interceptors.db_handler__GT_interceptor = (function re_frame$std_interceptors$db_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"db-handler","db-handler",579530098),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$db_handler__GT_interceptor_$_db_handler_before(context){
var map__36294 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__36294__$1 = ((((!((map__36294 == null)))?((((map__36294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36294):map__36294);
var db = cljs.core.get.call(null,map__36294__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.call(null,map__36294__$1,new cljs.core.Keyword(null,"event","event",301435442));
return re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),handler_fn.call(null,db,event));
}));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-fx`.
 * 
 *   These handlers take two arguments;  `coeffects` and `event`, and they return `effects`.
 * 
 *   (fn [coeffects event]
 *   {:db ...
 *    :dispatch ...})
 * 
 * Wrap handler in an interceptor so it can be added to (the RHS) of a chain:
 *   1. extracts `:coeffects`
 *   2. call handler-fn giving coeffects
 *   3. stores the result back into the `:effects`
 */
re_frame.std_interceptors.fx_handler__GT_interceptor = (function re_frame$std_interceptors$fx_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$fx_handler__GT_interceptor_$_fx_handler_before(context){
var map__36302 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__36302__$1 = ((((!((map__36302 == null)))?((((map__36302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36302):map__36302);
var coeffects = map__36302__$1;
var event = cljs.core.get.call(null,map__36302__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"effects","effects",-282369292),handler_fn.call(null,coeffects,event));
}));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-ctx`.
 *   These advanced handlers take one argument: `context` and they return a modified `context`.
 *   Example:
 *   (fn [context]
 *      (enqueue context [more interceptors]))
 */
re_frame.std_interceptors.ctx_handler__GT_interceptor = (function re_frame$std_interceptors$ctx_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ctx-handler","ctx-handler",-1777672230),new cljs.core.Keyword(null,"before","before",-1633692388),handler_fn);
});
/**
 * An interceptor factory which supplies a sub-path of `:db` to the handler.
 *   It's action is somewhat annologous to `update-in`. It grafts the return
 *   value from the handler back into db.
 * 
 *   Usage:
 *  (path :some :path)
 *  (path [:some :path])
 *  (path [:some :path] :to :here)
 *  (path [:some :path] [:to] :here)
 * 
 *   Notes:
 *  1. cater for `path` appearing more than once in an interceptor chain.
 *  2. `:effect` may not contain `:db` effect. Which means no change to
 *     `:db` should be made.
 *   
 */
re_frame.std_interceptors.path = (function re_frame$std_interceptors$path(var_args){
var args__21531__auto__ = [];
var len__21524__auto___36305 = arguments.length;
var i__21525__auto___36306 = (0);
while(true){
if((i__21525__auto___36306 < len__21524__auto___36305)){
args__21531__auto__.push((arguments[i__21525__auto___36306]));

var G__36307 = (i__21525__auto___36306 + (1));
i__21525__auto___36306 = G__36307;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((0) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((0)),(0),null)):null);
return re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic(argseq__21532__auto__);
});

re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var path = cljs.core.flatten.call(null,args);
var db_store_key = new cljs.core.Keyword("re-frame-path","db-store","re-frame-path/db-store",655758490);
if(cljs.core.empty_QMARK_.call(null,path)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: \"path\" interceptor given no params");
} else {
}

return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"before","before",-1633692388),((function (path,db_store_key){
return (function (context){
var original_db = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
return re_frame.interceptor.assoc_coeffect.call(null,cljs.core.update.call(null,context,db_store_key,cljs.core.conj,original_db),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.get_in.call(null,original_db,path));
});})(path,db_store_key))
,new cljs.core.Keyword(null,"after","after",594996914),((function (path,db_store_key){
return (function (context){
var db_store = db_store_key.call(null,context);
var original_db = cljs.core.peek.call(null,db_store);
var new_db_store = cljs.core.pop.call(null,db_store);
var context_SINGLEQUOTE_ = re_frame.interceptor.assoc_coeffect.call(null,cljs.core.assoc.call(null,context,db_store_key,new_db_store),new cljs.core.Keyword(null,"db","db",993250759),original_db);
var db = re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("re-frame.std-interceptors","not-found","re-frame.std-interceptors/not-found",-1614827865));
if(cljs.core._EQ_.call(null,db,new cljs.core.Keyword("re-frame.std-interceptors","not-found","re-frame.std-interceptors/not-found",-1614827865))){
return context_SINGLEQUOTE_;
} else {
return re_frame.interceptor.assoc_effect.call(null,context_SINGLEQUOTE_,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,original_db,path,db));
}
});})(path,db_store_key))
);
});

re_frame.std_interceptors.path.cljs$lang$maxFixedArity = (0);

re_frame.std_interceptors.path.cljs$lang$applyTo = (function (seq36304){
return re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36304));
});

/**
 * Interceptor factory which runs the given function `f` in the `after handler`
 *   position.  `f` is called with two arguments: `db` and `v`, and is expected to
 *   return a modified `db`.
 * 
 *   Unlike the `after` inteceptor which is only about side effects, `enrich`
 *   expects f to process and alter the given `db` coeffect in some useful way,
 *   contributing to the derived data, flowing vibe.
 * 
 *   Example Use:
 * 
 *   Imagine that todomvc needed to do duplicate detection - if any two todos had
 *   the same text, then highlight their background, and report them in a warning
 *   down the bottom of the panel.
 * 
 *   Almost any action (edit text, add new todo, remove a todo) requires a
 *   complete reassesment of duplication errors and warnings. Eg: that edit
 *   update might have introduced a new duplicate or removed one. Same with a
 *   todo removal.
 * 
 *   And to perform this enrichment, a function has to inspect all the todos,
 *   possibly set flags on each, and set some overall list of duplicates.
 *   And this duplication check might just be one check among many.
 * 
 *   `f` would need to be both adding and removing the duplicate warnings.
 *   By applying `f` in middleware, we keep the handlers simple and yet we
 *   ensure this important step is not missed.
 */
re_frame.std_interceptors.enrich = (function re_frame$std_interceptors$enrich(f){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"enrich","enrich",-2108921925),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$std_interceptors$enrich_$_enrich_after(context){
var event = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442));
var db = re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
return re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),f.call(null,db,event));
}));
});
/**
 * Interceptor factory which runs a given function `f` in the "after"
 *   position, presumably for side effects.
 * 
 *   `f` is called with two arguments: the `effects` value of `:db` and the event. It's return
 *   value is ignored so `f` can only side-effect.
 * 
 *   Example use:
 *   - `f` runs schema validation (reporting any errors found)
 *   - `f` writes some aspect of db to localstorage.
 */
re_frame.std_interceptors.after = (function re_frame$std_interceptors$after(f){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$std_interceptors$after_$_after_after(context){
var db = re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
var event = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442));
f.call(null,db,event);

return context;
}));
});
/**
 * Interceptor factory which acts a bit like `reaction`  (but it flows into `db`, rather than out)
 *   It observes N paths in `db` and if any of them test not indentical? to their previous value
 *   (as a result of a handler being run) then it runs `f` to compute a new value, which is
 *   then assoced into the given `out-path` within `db`.
 * 
 *   Usage:
 * 
 *   (defn my-f
 *  [a-val b-val]
 *  ... some computation on a and b in here)
 * 
 *   (on-changes my-f [:c]  [:a] [:b])
 * 
 *   Put this Interceptor on the right handlers (ones which might change :a or :b).
 *   It will:
 *   - call `f` each time the value at path [:a] or [:b] changes
 *   - call `f` with the values extracted from [:a] [:b]
 *   - assoc the return value from `f` into the path  [:c]
 *   
 */
re_frame.std_interceptors.on_changes = (function re_frame$std_interceptors$on_changes(var_args){
var args__21531__auto__ = [];
var len__21524__auto___36313 = arguments.length;
var i__21525__auto___36314 = (0);
while(true){
if((i__21525__auto___36314 < len__21524__auto___36313)){
args__21531__auto__.push((arguments[i__21525__auto___36314]));

var G__36315 = (i__21525__auto___36314 + (1));
i__21525__auto___36314 = G__36315;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((2) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((2)),(0),null)):null);
return re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21532__auto__);
});

re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic = (function (f,out_path,in_paths){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"enrich","enrich",-2108921925),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$std_interceptors$on_change_after(context){
var new_db = re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
var old_db = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
var new_ins = cljs.core.map.call(null,((function (new_db,old_db){
return (function (p1__36308_SHARP_){
return cljs.core.get_in.call(null,new_db,p1__36308_SHARP_);
});})(new_db,old_db))
,in_paths);
var old_ins = cljs.core.map.call(null,((function (new_db,old_db,new_ins){
return (function (p1__36309_SHARP_){
return cljs.core.get_in.call(null,old_db,p1__36309_SHARP_);
});})(new_db,old_db,new_ins))
,in_paths);
var changed_ins_QMARK_ = cljs.core.some.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs.core.identical_QMARK_,new_ins,old_ins));
if(cljs.core.truth_(changed_ins_QMARK_)){
return re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,new_db,out_path,cljs.core.apply.call(null,f,new_ins)));
} else {
return context;
}
}));
});

re_frame.std_interceptors.on_changes.cljs$lang$maxFixedArity = (2);

re_frame.std_interceptors.on_changes.cljs$lang$applyTo = (function (seq36310){
var G__36311 = cljs.core.first.call(null,seq36310);
var seq36310__$1 = cljs.core.next.call(null,seq36310);
var G__36312 = cljs.core.first.call(null,seq36310__$1);
var seq36310__$2 = cljs.core.next.call(null,seq36310__$1);
return re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic(G__36311,G__36312,seq36310__$2);
});


//# sourceMappingURL=std_interceptors.js.map?rel=1480335674620