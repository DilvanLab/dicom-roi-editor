// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23717 = [];
var len__21524__auto___23723 = arguments.length;
var i__21525__auto___23724 = (0);
while(true){
if((i__21525__auto___23724 < len__21524__auto___23723)){
args23717.push((arguments[i__21525__auto___23724]));

var G__23725 = (i__21525__auto___23724 + (1));
i__21525__auto___23724 = G__23725;
continue;
} else {
}
break;
}

var G__23719 = args23717.length;
switch (G__23719) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23717.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23720 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23720 = (function (f,blockable,meta23721){
this.f = f;
this.blockable = blockable;
this.meta23721 = meta23721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23722,meta23721__$1){
var self__ = this;
var _23722__$1 = this;
return (new cljs.core.async.t_cljs$core$async23720(self__.f,self__.blockable,meta23721__$1));
});

cljs.core.async.t_cljs$core$async23720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23722){
var self__ = this;
var _23722__$1 = this;
return self__.meta23721;
});

cljs.core.async.t_cljs$core$async23720.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23720.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23720.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23720.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23721","meta23721",1032742466,null)], null);
});

cljs.core.async.t_cljs$core$async23720.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23720.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23720";

cljs.core.async.t_cljs$core$async23720.cljs$lang$ctorPrWriter = (function (this__21055__auto__,writer__21056__auto__,opt__21057__auto__){
return cljs.core._write.call(null,writer__21056__auto__,"cljs.core.async/t_cljs$core$async23720");
});

cljs.core.async.__GT_t_cljs$core$async23720 = (function cljs$core$async$__GT_t_cljs$core$async23720(f__$1,blockable__$1,meta23721){
return (new cljs.core.async.t_cljs$core$async23720(f__$1,blockable__$1,meta23721));
});

}

return (new cljs.core.async.t_cljs$core$async23720(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args23729 = [];
var len__21524__auto___23732 = arguments.length;
var i__21525__auto___23733 = (0);
while(true){
if((i__21525__auto___23733 < len__21524__auto___23732)){
args23729.push((arguments[i__21525__auto___23733]));

var G__23734 = (i__21525__auto___23733 + (1));
i__21525__auto___23733 = G__23734;
continue;
} else {
}
break;
}

var G__23731 = args23729.length;
switch (G__23731) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23729.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23736 = [];
var len__21524__auto___23739 = arguments.length;
var i__21525__auto___23740 = (0);
while(true){
if((i__21525__auto___23740 < len__21524__auto___23739)){
args23736.push((arguments[i__21525__auto___23740]));

var G__23741 = (i__21525__auto___23740 + (1));
i__21525__auto___23740 = G__23741;
continue;
} else {
}
break;
}

var G__23738 = args23736.length;
switch (G__23738) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23736.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args23743 = [];
var len__21524__auto___23746 = arguments.length;
var i__21525__auto___23747 = (0);
while(true){
if((i__21525__auto___23747 < len__21524__auto___23746)){
args23743.push((arguments[i__21525__auto___23747]));

var G__23748 = (i__21525__auto___23747 + (1));
i__21525__auto___23747 = G__23748;
continue;
} else {
}
break;
}

var G__23745 = args23743.length;
switch (G__23745) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23743.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23750 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23750);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23750,ret){
return (function (){
return fn1.call(null,val_23750);
});})(val_23750,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23751 = [];
var len__21524__auto___23754 = arguments.length;
var i__21525__auto___23755 = (0);
while(true){
if((i__21525__auto___23755 < len__21524__auto___23754)){
args23751.push((arguments[i__21525__auto___23755]));

var G__23756 = (i__21525__auto___23755 + (1));
i__21525__auto___23755 = G__23756;
continue;
} else {
}
break;
}

var G__23753 = args23751.length;
switch (G__23753) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23751.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21364__auto___23758 = n;
var x_23759 = (0);
while(true){
if((x_23759 < n__21364__auto___23758)){
(a[x_23759] = (0));

var G__23760 = (x_23759 + (1));
x_23759 = G__23760;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23761 = (i + (1));
i = G__23761;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23765 = (function (alt_flag,flag,meta23766){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23766 = meta23766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23767,meta23766__$1){
var self__ = this;
var _23767__$1 = this;
return (new cljs.core.async.t_cljs$core$async23765(self__.alt_flag,self__.flag,meta23766__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23767){
var self__ = this;
var _23767__$1 = this;
return self__.meta23766;
});})(flag))
;

cljs.core.async.t_cljs$core$async23765.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23765.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23765.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23765.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23765.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23766","meta23766",518305408,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23765";

cljs.core.async.t_cljs$core$async23765.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__21055__auto__,writer__21056__auto__,opt__21057__auto__){
return cljs.core._write.call(null,writer__21056__auto__,"cljs.core.async/t_cljs$core$async23765");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23765 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23765(alt_flag__$1,flag__$1,meta23766){
return (new cljs.core.async.t_cljs$core$async23765(alt_flag__$1,flag__$1,meta23766));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23765(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23771 = (function (alt_handler,flag,cb,meta23772){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23772 = meta23772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23773,meta23772__$1){
var self__ = this;
var _23773__$1 = this;
return (new cljs.core.async.t_cljs$core$async23771(self__.alt_handler,self__.flag,self__.cb,meta23772__$1));
});

cljs.core.async.t_cljs$core$async23771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23773){
var self__ = this;
var _23773__$1 = this;
return self__.meta23772;
});

cljs.core.async.t_cljs$core$async23771.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23771.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23771.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23771.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23772","meta23772",-101255606,null)], null);
});

cljs.core.async.t_cljs$core$async23771.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23771";

cljs.core.async.t_cljs$core$async23771.cljs$lang$ctorPrWriter = (function (this__21055__auto__,writer__21056__auto__,opt__21057__auto__){
return cljs.core._write.call(null,writer__21056__auto__,"cljs.core.async/t_cljs$core$async23771");
});

cljs.core.async.__GT_t_cljs$core$async23771 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23771(alt_handler__$1,flag__$1,cb__$1,meta23772){
return (new cljs.core.async.t_cljs$core$async23771(alt_handler__$1,flag__$1,cb__$1,meta23772));
});

}

return (new cljs.core.async.t_cljs$core$async23771(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23774_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23774_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23775_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23775_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20449__auto__ = wport;
if(cljs.core.truth_(or__20449__auto__)){
return or__20449__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23776 = (i + (1));
i = G__23776;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20449__auto__ = ret;
if(cljs.core.truth_(or__20449__auto__)){
return or__20449__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__20437__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20437__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20437__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__21531__auto__ = [];
var len__21524__auto___23782 = arguments.length;
var i__21525__auto___23783 = (0);
while(true){
if((i__21525__auto___23783 < len__21524__auto___23782)){
args__21531__auto__.push((arguments[i__21525__auto___23783]));

var G__23784 = (i__21525__auto___23783 + (1));
i__21525__auto___23783 = G__23784;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23779){
var map__23780 = p__23779;
var map__23780__$1 = ((((!((map__23780 == null)))?((((map__23780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23780):map__23780);
var opts = map__23780__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23777){
var G__23778 = cljs.core.first.call(null,seq23777);
var seq23777__$1 = cljs.core.next.call(null,seq23777);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23778,seq23777__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23785 = [];
var len__21524__auto___23835 = arguments.length;
var i__21525__auto___23836 = (0);
while(true){
if((i__21525__auto___23836 < len__21524__auto___23835)){
args23785.push((arguments[i__21525__auto___23836]));

var G__23837 = (i__21525__auto___23836 + (1));
i__21525__auto___23836 = G__23837;
continue;
} else {
}
break;
}

var G__23787 = args23785.length;
switch (G__23787) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23785.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23672__auto___23839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___23839){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___23839){
return (function (state_23811){
var state_val_23812 = (state_23811[(1)]);
if((state_val_23812 === (7))){
var inst_23807 = (state_23811[(2)]);
var state_23811__$1 = state_23811;
var statearr_23813_23840 = state_23811__$1;
(statearr_23813_23840[(2)] = inst_23807);

(statearr_23813_23840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23812 === (1))){
var state_23811__$1 = state_23811;
var statearr_23814_23841 = state_23811__$1;
(statearr_23814_23841[(2)] = null);

(statearr_23814_23841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23812 === (4))){
var inst_23790 = (state_23811[(7)]);
var inst_23790__$1 = (state_23811[(2)]);
var inst_23791 = (inst_23790__$1 == null);
var state_23811__$1 = (function (){var statearr_23815 = state_23811;
(statearr_23815[(7)] = inst_23790__$1);

return statearr_23815;
})();
if(cljs.core.truth_(inst_23791)){
var statearr_23816_23842 = state_23811__$1;
(statearr_23816_23842[(1)] = (5));

} else {
var statearr_23817_23843 = state_23811__$1;
(statearr_23817_23843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23812 === (13))){
var state_23811__$1 = state_23811;
var statearr_23818_23844 = state_23811__$1;
(statearr_23818_23844[(2)] = null);

(statearr_23818_23844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23812 === (6))){
var inst_23790 = (state_23811[(7)]);
var state_23811__$1 = state_23811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23811__$1,(11),to,inst_23790);
} else {
if((state_val_23812 === (3))){
var inst_23809 = (state_23811[(2)]);
var state_23811__$1 = state_23811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23811__$1,inst_23809);
} else {
if((state_val_23812 === (12))){
var state_23811__$1 = state_23811;
var statearr_23819_23845 = state_23811__$1;
(statearr_23819_23845[(2)] = null);

(statearr_23819_23845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23812 === (2))){
var state_23811__$1 = state_23811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23811__$1,(4),from);
} else {
if((state_val_23812 === (11))){
var inst_23800 = (state_23811[(2)]);
var state_23811__$1 = state_23811;
if(cljs.core.truth_(inst_23800)){
var statearr_23820_23846 = state_23811__$1;
(statearr_23820_23846[(1)] = (12));

} else {
var statearr_23821_23847 = state_23811__$1;
(statearr_23821_23847[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23812 === (9))){
var state_23811__$1 = state_23811;
var statearr_23822_23848 = state_23811__$1;
(statearr_23822_23848[(2)] = null);

(statearr_23822_23848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23812 === (5))){
var state_23811__$1 = state_23811;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23823_23849 = state_23811__$1;
(statearr_23823_23849[(1)] = (8));

} else {
var statearr_23824_23850 = state_23811__$1;
(statearr_23824_23850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23812 === (14))){
var inst_23805 = (state_23811[(2)]);
var state_23811__$1 = state_23811;
var statearr_23825_23851 = state_23811__$1;
(statearr_23825_23851[(2)] = inst_23805);

(statearr_23825_23851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23812 === (10))){
var inst_23797 = (state_23811[(2)]);
var state_23811__$1 = state_23811;
var statearr_23826_23852 = state_23811__$1;
(statearr_23826_23852[(2)] = inst_23797);

(statearr_23826_23852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23812 === (8))){
var inst_23794 = cljs.core.async.close_BANG_.call(null,to);
var state_23811__$1 = state_23811;
var statearr_23827_23853 = state_23811__$1;
(statearr_23827_23853[(2)] = inst_23794);

(statearr_23827_23853[(1)] = (10));


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
});})(c__23672__auto___23839))
;
return ((function (switch__23560__auto__,c__23672__auto___23839){
return (function() {
var cljs$core$async$state_machine__23561__auto__ = null;
var cljs$core$async$state_machine__23561__auto____0 = (function (){
var statearr_23831 = [null,null,null,null,null,null,null,null];
(statearr_23831[(0)] = cljs$core$async$state_machine__23561__auto__);

(statearr_23831[(1)] = (1));

return statearr_23831;
});
var cljs$core$async$state_machine__23561__auto____1 = (function (state_23811){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_23811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e23832){if((e23832 instanceof Object)){
var ex__23564__auto__ = e23832;
var statearr_23833_23854 = state_23811;
(statearr_23833_23854[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23855 = state_23811;
state_23811 = G__23855;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$state_machine__23561__auto__ = function(state_23811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23561__auto____1.call(this,state_23811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23561__auto____0;
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23561__auto____1;
return cljs$core$async$state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___23839))
})();
var state__23674__auto__ = (function (){var statearr_23834 = f__23673__auto__.call(null);
(statearr_23834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___23839);

return statearr_23834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___23839))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24043){
var vec__24044 = p__24043;
var v = cljs.core.nth.call(null,vec__24044,(0),null);
var p = cljs.core.nth.call(null,vec__24044,(1),null);
var job = vec__24044;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23672__auto___24230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___24230,res,vec__24044,v,p,job,jobs,results){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___24230,res,vec__24044,v,p,job,jobs,results){
return (function (state_24051){
var state_val_24052 = (state_24051[(1)]);
if((state_val_24052 === (1))){
var state_24051__$1 = state_24051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24051__$1,(2),res,v);
} else {
if((state_val_24052 === (2))){
var inst_24048 = (state_24051[(2)]);
var inst_24049 = cljs.core.async.close_BANG_.call(null,res);
var state_24051__$1 = (function (){var statearr_24053 = state_24051;
(statearr_24053[(7)] = inst_24048);

return statearr_24053;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24051__$1,inst_24049);
} else {
return null;
}
}
});})(c__23672__auto___24230,res,vec__24044,v,p,job,jobs,results))
;
return ((function (switch__23560__auto__,c__23672__auto___24230,res,vec__24044,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____0 = (function (){
var statearr_24057 = [null,null,null,null,null,null,null,null];
(statearr_24057[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__);

(statearr_24057[(1)] = (1));

return statearr_24057;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____1 = (function (state_24051){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_24051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e24058){if((e24058 instanceof Object)){
var ex__23564__auto__ = e24058;
var statearr_24059_24231 = state_24051;
(statearr_24059_24231[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24232 = state_24051;
state_24051 = G__24232;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__ = function(state_24051){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____1.call(this,state_24051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___24230,res,vec__24044,v,p,job,jobs,results))
})();
var state__23674__auto__ = (function (){var statearr_24060 = f__23673__auto__.call(null);
(statearr_24060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___24230);

return statearr_24060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___24230,res,vec__24044,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24061){
var vec__24062 = p__24061;
var v = cljs.core.nth.call(null,vec__24062,(0),null);
var p = cljs.core.nth.call(null,vec__24062,(1),null);
var job = vec__24062;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21364__auto___24233 = n;
var __24234 = (0);
while(true){
if((__24234 < n__21364__auto___24233)){
var G__24065_24235 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24065_24235) {
case "compute":
var c__23672__auto___24237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24234,c__23672__auto___24237,G__24065_24235,n__21364__auto___24233,jobs,results,process,async){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (__24234,c__23672__auto___24237,G__24065_24235,n__21364__auto___24233,jobs,results,process,async){
return (function (state_24078){
var state_val_24079 = (state_24078[(1)]);
if((state_val_24079 === (1))){
var state_24078__$1 = state_24078;
var statearr_24080_24238 = state_24078__$1;
(statearr_24080_24238[(2)] = null);

(statearr_24080_24238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24079 === (2))){
var state_24078__$1 = state_24078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24078__$1,(4),jobs);
} else {
if((state_val_24079 === (3))){
var inst_24076 = (state_24078[(2)]);
var state_24078__$1 = state_24078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24078__$1,inst_24076);
} else {
if((state_val_24079 === (4))){
var inst_24068 = (state_24078[(2)]);
var inst_24069 = process.call(null,inst_24068);
var state_24078__$1 = state_24078;
if(cljs.core.truth_(inst_24069)){
var statearr_24081_24239 = state_24078__$1;
(statearr_24081_24239[(1)] = (5));

} else {
var statearr_24082_24240 = state_24078__$1;
(statearr_24082_24240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24079 === (5))){
var state_24078__$1 = state_24078;
var statearr_24083_24241 = state_24078__$1;
(statearr_24083_24241[(2)] = null);

(statearr_24083_24241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24079 === (6))){
var state_24078__$1 = state_24078;
var statearr_24084_24242 = state_24078__$1;
(statearr_24084_24242[(2)] = null);

(statearr_24084_24242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24079 === (7))){
var inst_24074 = (state_24078[(2)]);
var state_24078__$1 = state_24078;
var statearr_24085_24243 = state_24078__$1;
(statearr_24085_24243[(2)] = inst_24074);

(statearr_24085_24243[(1)] = (3));


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
});})(__24234,c__23672__auto___24237,G__24065_24235,n__21364__auto___24233,jobs,results,process,async))
;
return ((function (__24234,switch__23560__auto__,c__23672__auto___24237,G__24065_24235,n__21364__auto___24233,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____0 = (function (){
var statearr_24089 = [null,null,null,null,null,null,null];
(statearr_24089[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__);

(statearr_24089[(1)] = (1));

return statearr_24089;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____1 = (function (state_24078){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_24078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e24090){if((e24090 instanceof Object)){
var ex__23564__auto__ = e24090;
var statearr_24091_24244 = state_24078;
(statearr_24091_24244[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24245 = state_24078;
state_24078 = G__24245;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__ = function(state_24078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____1.call(this,state_24078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__;
})()
;})(__24234,switch__23560__auto__,c__23672__auto___24237,G__24065_24235,n__21364__auto___24233,jobs,results,process,async))
})();
var state__23674__auto__ = (function (){var statearr_24092 = f__23673__auto__.call(null);
(statearr_24092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___24237);

return statearr_24092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(__24234,c__23672__auto___24237,G__24065_24235,n__21364__auto___24233,jobs,results,process,async))
);


break;
case "async":
var c__23672__auto___24246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24234,c__23672__auto___24246,G__24065_24235,n__21364__auto___24233,jobs,results,process,async){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (__24234,c__23672__auto___24246,G__24065_24235,n__21364__auto___24233,jobs,results,process,async){
return (function (state_24105){
var state_val_24106 = (state_24105[(1)]);
if((state_val_24106 === (1))){
var state_24105__$1 = state_24105;
var statearr_24107_24247 = state_24105__$1;
(statearr_24107_24247[(2)] = null);

(statearr_24107_24247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (2))){
var state_24105__$1 = state_24105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24105__$1,(4),jobs);
} else {
if((state_val_24106 === (3))){
var inst_24103 = (state_24105[(2)]);
var state_24105__$1 = state_24105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24105__$1,inst_24103);
} else {
if((state_val_24106 === (4))){
var inst_24095 = (state_24105[(2)]);
var inst_24096 = async.call(null,inst_24095);
var state_24105__$1 = state_24105;
if(cljs.core.truth_(inst_24096)){
var statearr_24108_24248 = state_24105__$1;
(statearr_24108_24248[(1)] = (5));

} else {
var statearr_24109_24249 = state_24105__$1;
(statearr_24109_24249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (5))){
var state_24105__$1 = state_24105;
var statearr_24110_24250 = state_24105__$1;
(statearr_24110_24250[(2)] = null);

(statearr_24110_24250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (6))){
var state_24105__$1 = state_24105;
var statearr_24111_24251 = state_24105__$1;
(statearr_24111_24251[(2)] = null);

(statearr_24111_24251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (7))){
var inst_24101 = (state_24105[(2)]);
var state_24105__$1 = state_24105;
var statearr_24112_24252 = state_24105__$1;
(statearr_24112_24252[(2)] = inst_24101);

(statearr_24112_24252[(1)] = (3));


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
});})(__24234,c__23672__auto___24246,G__24065_24235,n__21364__auto___24233,jobs,results,process,async))
;
return ((function (__24234,switch__23560__auto__,c__23672__auto___24246,G__24065_24235,n__21364__auto___24233,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____0 = (function (){
var statearr_24116 = [null,null,null,null,null,null,null];
(statearr_24116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__);

(statearr_24116[(1)] = (1));

return statearr_24116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____1 = (function (state_24105){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_24105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e24117){if((e24117 instanceof Object)){
var ex__23564__auto__ = e24117;
var statearr_24118_24253 = state_24105;
(statearr_24118_24253[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24254 = state_24105;
state_24105 = G__24254;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__ = function(state_24105){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____1.call(this,state_24105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__;
})()
;})(__24234,switch__23560__auto__,c__23672__auto___24246,G__24065_24235,n__21364__auto___24233,jobs,results,process,async))
})();
var state__23674__auto__ = (function (){var statearr_24119 = f__23673__auto__.call(null);
(statearr_24119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___24246);

return statearr_24119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(__24234,c__23672__auto___24246,G__24065_24235,n__21364__auto___24233,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24255 = (__24234 + (1));
__24234 = G__24255;
continue;
} else {
}
break;
}

var c__23672__auto___24256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___24256,jobs,results,process,async){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___24256,jobs,results,process,async){
return (function (state_24141){
var state_val_24142 = (state_24141[(1)]);
if((state_val_24142 === (1))){
var state_24141__$1 = state_24141;
var statearr_24143_24257 = state_24141__$1;
(statearr_24143_24257[(2)] = null);

(statearr_24143_24257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (2))){
var state_24141__$1 = state_24141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24141__$1,(4),from);
} else {
if((state_val_24142 === (3))){
var inst_24139 = (state_24141[(2)]);
var state_24141__$1 = state_24141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24141__$1,inst_24139);
} else {
if((state_val_24142 === (4))){
var inst_24122 = (state_24141[(7)]);
var inst_24122__$1 = (state_24141[(2)]);
var inst_24123 = (inst_24122__$1 == null);
var state_24141__$1 = (function (){var statearr_24144 = state_24141;
(statearr_24144[(7)] = inst_24122__$1);

return statearr_24144;
})();
if(cljs.core.truth_(inst_24123)){
var statearr_24145_24258 = state_24141__$1;
(statearr_24145_24258[(1)] = (5));

} else {
var statearr_24146_24259 = state_24141__$1;
(statearr_24146_24259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (5))){
var inst_24125 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24141__$1 = state_24141;
var statearr_24147_24260 = state_24141__$1;
(statearr_24147_24260[(2)] = inst_24125);

(statearr_24147_24260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (6))){
var inst_24127 = (state_24141[(8)]);
var inst_24122 = (state_24141[(7)]);
var inst_24127__$1 = cljs.core.async.chan.call(null,(1));
var inst_24128 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24129 = [inst_24122,inst_24127__$1];
var inst_24130 = (new cljs.core.PersistentVector(null,2,(5),inst_24128,inst_24129,null));
var state_24141__$1 = (function (){var statearr_24148 = state_24141;
(statearr_24148[(8)] = inst_24127__$1);

return statearr_24148;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24141__$1,(8),jobs,inst_24130);
} else {
if((state_val_24142 === (7))){
var inst_24137 = (state_24141[(2)]);
var state_24141__$1 = state_24141;
var statearr_24149_24261 = state_24141__$1;
(statearr_24149_24261[(2)] = inst_24137);

(statearr_24149_24261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (8))){
var inst_24127 = (state_24141[(8)]);
var inst_24132 = (state_24141[(2)]);
var state_24141__$1 = (function (){var statearr_24150 = state_24141;
(statearr_24150[(9)] = inst_24132);

return statearr_24150;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24141__$1,(9),results,inst_24127);
} else {
if((state_val_24142 === (9))){
var inst_24134 = (state_24141[(2)]);
var state_24141__$1 = (function (){var statearr_24151 = state_24141;
(statearr_24151[(10)] = inst_24134);

return statearr_24151;
})();
var statearr_24152_24262 = state_24141__$1;
(statearr_24152_24262[(2)] = null);

(statearr_24152_24262[(1)] = (2));


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
});})(c__23672__auto___24256,jobs,results,process,async))
;
return ((function (switch__23560__auto__,c__23672__auto___24256,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____0 = (function (){
var statearr_24156 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24156[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__);

(statearr_24156[(1)] = (1));

return statearr_24156;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____1 = (function (state_24141){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_24141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e24157){if((e24157 instanceof Object)){
var ex__23564__auto__ = e24157;
var statearr_24158_24263 = state_24141;
(statearr_24158_24263[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24264 = state_24141;
state_24141 = G__24264;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__ = function(state_24141){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____1.call(this,state_24141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___24256,jobs,results,process,async))
})();
var state__23674__auto__ = (function (){var statearr_24159 = f__23673__auto__.call(null);
(statearr_24159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___24256);

return statearr_24159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___24256,jobs,results,process,async))
);


var c__23672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto__,jobs,results,process,async){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto__,jobs,results,process,async){
return (function (state_24197){
var state_val_24198 = (state_24197[(1)]);
if((state_val_24198 === (7))){
var inst_24193 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
var statearr_24199_24265 = state_24197__$1;
(statearr_24199_24265[(2)] = inst_24193);

(statearr_24199_24265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (20))){
var state_24197__$1 = state_24197;
var statearr_24200_24266 = state_24197__$1;
(statearr_24200_24266[(2)] = null);

(statearr_24200_24266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (1))){
var state_24197__$1 = state_24197;
var statearr_24201_24267 = state_24197__$1;
(statearr_24201_24267[(2)] = null);

(statearr_24201_24267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (4))){
var inst_24162 = (state_24197[(7)]);
var inst_24162__$1 = (state_24197[(2)]);
var inst_24163 = (inst_24162__$1 == null);
var state_24197__$1 = (function (){var statearr_24202 = state_24197;
(statearr_24202[(7)] = inst_24162__$1);

return statearr_24202;
})();
if(cljs.core.truth_(inst_24163)){
var statearr_24203_24268 = state_24197__$1;
(statearr_24203_24268[(1)] = (5));

} else {
var statearr_24204_24269 = state_24197__$1;
(statearr_24204_24269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (15))){
var inst_24175 = (state_24197[(8)]);
var state_24197__$1 = state_24197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24197__$1,(18),to,inst_24175);
} else {
if((state_val_24198 === (21))){
var inst_24188 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
var statearr_24205_24270 = state_24197__$1;
(statearr_24205_24270[(2)] = inst_24188);

(statearr_24205_24270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (13))){
var inst_24190 = (state_24197[(2)]);
var state_24197__$1 = (function (){var statearr_24206 = state_24197;
(statearr_24206[(9)] = inst_24190);

return statearr_24206;
})();
var statearr_24207_24271 = state_24197__$1;
(statearr_24207_24271[(2)] = null);

(statearr_24207_24271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (6))){
var inst_24162 = (state_24197[(7)]);
var state_24197__$1 = state_24197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24197__$1,(11),inst_24162);
} else {
if((state_val_24198 === (17))){
var inst_24183 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
if(cljs.core.truth_(inst_24183)){
var statearr_24208_24272 = state_24197__$1;
(statearr_24208_24272[(1)] = (19));

} else {
var statearr_24209_24273 = state_24197__$1;
(statearr_24209_24273[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (3))){
var inst_24195 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24197__$1,inst_24195);
} else {
if((state_val_24198 === (12))){
var inst_24172 = (state_24197[(10)]);
var state_24197__$1 = state_24197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24197__$1,(14),inst_24172);
} else {
if((state_val_24198 === (2))){
var state_24197__$1 = state_24197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24197__$1,(4),results);
} else {
if((state_val_24198 === (19))){
var state_24197__$1 = state_24197;
var statearr_24210_24274 = state_24197__$1;
(statearr_24210_24274[(2)] = null);

(statearr_24210_24274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (11))){
var inst_24172 = (state_24197[(2)]);
var state_24197__$1 = (function (){var statearr_24211 = state_24197;
(statearr_24211[(10)] = inst_24172);

return statearr_24211;
})();
var statearr_24212_24275 = state_24197__$1;
(statearr_24212_24275[(2)] = null);

(statearr_24212_24275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (9))){
var state_24197__$1 = state_24197;
var statearr_24213_24276 = state_24197__$1;
(statearr_24213_24276[(2)] = null);

(statearr_24213_24276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (5))){
var state_24197__$1 = state_24197;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24214_24277 = state_24197__$1;
(statearr_24214_24277[(1)] = (8));

} else {
var statearr_24215_24278 = state_24197__$1;
(statearr_24215_24278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (14))){
var inst_24177 = (state_24197[(11)]);
var inst_24175 = (state_24197[(8)]);
var inst_24175__$1 = (state_24197[(2)]);
var inst_24176 = (inst_24175__$1 == null);
var inst_24177__$1 = cljs.core.not.call(null,inst_24176);
var state_24197__$1 = (function (){var statearr_24216 = state_24197;
(statearr_24216[(11)] = inst_24177__$1);

(statearr_24216[(8)] = inst_24175__$1);

return statearr_24216;
})();
if(inst_24177__$1){
var statearr_24217_24279 = state_24197__$1;
(statearr_24217_24279[(1)] = (15));

} else {
var statearr_24218_24280 = state_24197__$1;
(statearr_24218_24280[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (16))){
var inst_24177 = (state_24197[(11)]);
var state_24197__$1 = state_24197;
var statearr_24219_24281 = state_24197__$1;
(statearr_24219_24281[(2)] = inst_24177);

(statearr_24219_24281[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (10))){
var inst_24169 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
var statearr_24220_24282 = state_24197__$1;
(statearr_24220_24282[(2)] = inst_24169);

(statearr_24220_24282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (18))){
var inst_24180 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
var statearr_24221_24283 = state_24197__$1;
(statearr_24221_24283[(2)] = inst_24180);

(statearr_24221_24283[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (8))){
var inst_24166 = cljs.core.async.close_BANG_.call(null,to);
var state_24197__$1 = state_24197;
var statearr_24222_24284 = state_24197__$1;
(statearr_24222_24284[(2)] = inst_24166);

(statearr_24222_24284[(1)] = (10));


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
}
}
}
}
});})(c__23672__auto__,jobs,results,process,async))
;
return ((function (switch__23560__auto__,c__23672__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____0 = (function (){
var statearr_24226 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__);

(statearr_24226[(1)] = (1));

return statearr_24226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____1 = (function (state_24197){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_24197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e24227){if((e24227 instanceof Object)){
var ex__23564__auto__ = e24227;
var statearr_24228_24285 = state_24197;
(statearr_24228_24285[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24286 = state_24197;
state_24197 = G__24286;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__ = function(state_24197){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____1.call(this,state_24197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto__,jobs,results,process,async))
})();
var state__23674__auto__ = (function (){var statearr_24229 = f__23673__auto__.call(null);
(statearr_24229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto__);

return statearr_24229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto__,jobs,results,process,async))
);

return c__23672__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24287 = [];
var len__21524__auto___24290 = arguments.length;
var i__21525__auto___24291 = (0);
while(true){
if((i__21525__auto___24291 < len__21524__auto___24290)){
args24287.push((arguments[i__21525__auto___24291]));

var G__24292 = (i__21525__auto___24291 + (1));
i__21525__auto___24291 = G__24292;
continue;
} else {
}
break;
}

var G__24289 = args24287.length;
switch (G__24289) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24287.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24294 = [];
var len__21524__auto___24297 = arguments.length;
var i__21525__auto___24298 = (0);
while(true){
if((i__21525__auto___24298 < len__21524__auto___24297)){
args24294.push((arguments[i__21525__auto___24298]));

var G__24299 = (i__21525__auto___24298 + (1));
i__21525__auto___24298 = G__24299;
continue;
} else {
}
break;
}

var G__24296 = args24294.length;
switch (G__24296) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24294.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24301 = [];
var len__21524__auto___24354 = arguments.length;
var i__21525__auto___24355 = (0);
while(true){
if((i__21525__auto___24355 < len__21524__auto___24354)){
args24301.push((arguments[i__21525__auto___24355]));

var G__24356 = (i__21525__auto___24355 + (1));
i__21525__auto___24355 = G__24356;
continue;
} else {
}
break;
}

var G__24303 = args24301.length;
switch (G__24303) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24301.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23672__auto___24358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___24358,tc,fc){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___24358,tc,fc){
return (function (state_24329){
var state_val_24330 = (state_24329[(1)]);
if((state_val_24330 === (7))){
var inst_24325 = (state_24329[(2)]);
var state_24329__$1 = state_24329;
var statearr_24331_24359 = state_24329__$1;
(statearr_24331_24359[(2)] = inst_24325);

(statearr_24331_24359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (1))){
var state_24329__$1 = state_24329;
var statearr_24332_24360 = state_24329__$1;
(statearr_24332_24360[(2)] = null);

(statearr_24332_24360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (4))){
var inst_24306 = (state_24329[(7)]);
var inst_24306__$1 = (state_24329[(2)]);
var inst_24307 = (inst_24306__$1 == null);
var state_24329__$1 = (function (){var statearr_24333 = state_24329;
(statearr_24333[(7)] = inst_24306__$1);

return statearr_24333;
})();
if(cljs.core.truth_(inst_24307)){
var statearr_24334_24361 = state_24329__$1;
(statearr_24334_24361[(1)] = (5));

} else {
var statearr_24335_24362 = state_24329__$1;
(statearr_24335_24362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (13))){
var state_24329__$1 = state_24329;
var statearr_24336_24363 = state_24329__$1;
(statearr_24336_24363[(2)] = null);

(statearr_24336_24363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (6))){
var inst_24306 = (state_24329[(7)]);
var inst_24312 = p.call(null,inst_24306);
var state_24329__$1 = state_24329;
if(cljs.core.truth_(inst_24312)){
var statearr_24337_24364 = state_24329__$1;
(statearr_24337_24364[(1)] = (9));

} else {
var statearr_24338_24365 = state_24329__$1;
(statearr_24338_24365[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (3))){
var inst_24327 = (state_24329[(2)]);
var state_24329__$1 = state_24329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24329__$1,inst_24327);
} else {
if((state_val_24330 === (12))){
var state_24329__$1 = state_24329;
var statearr_24339_24366 = state_24329__$1;
(statearr_24339_24366[(2)] = null);

(statearr_24339_24366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (2))){
var state_24329__$1 = state_24329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24329__$1,(4),ch);
} else {
if((state_val_24330 === (11))){
var inst_24306 = (state_24329[(7)]);
var inst_24316 = (state_24329[(2)]);
var state_24329__$1 = state_24329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24329__$1,(8),inst_24316,inst_24306);
} else {
if((state_val_24330 === (9))){
var state_24329__$1 = state_24329;
var statearr_24340_24367 = state_24329__$1;
(statearr_24340_24367[(2)] = tc);

(statearr_24340_24367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (5))){
var inst_24309 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24310 = cljs.core.async.close_BANG_.call(null,fc);
var state_24329__$1 = (function (){var statearr_24341 = state_24329;
(statearr_24341[(8)] = inst_24309);

return statearr_24341;
})();
var statearr_24342_24368 = state_24329__$1;
(statearr_24342_24368[(2)] = inst_24310);

(statearr_24342_24368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (14))){
var inst_24323 = (state_24329[(2)]);
var state_24329__$1 = state_24329;
var statearr_24343_24369 = state_24329__$1;
(statearr_24343_24369[(2)] = inst_24323);

(statearr_24343_24369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (10))){
var state_24329__$1 = state_24329;
var statearr_24344_24370 = state_24329__$1;
(statearr_24344_24370[(2)] = fc);

(statearr_24344_24370[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24330 === (8))){
var inst_24318 = (state_24329[(2)]);
var state_24329__$1 = state_24329;
if(cljs.core.truth_(inst_24318)){
var statearr_24345_24371 = state_24329__$1;
(statearr_24345_24371[(1)] = (12));

} else {
var statearr_24346_24372 = state_24329__$1;
(statearr_24346_24372[(1)] = (13));

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
});})(c__23672__auto___24358,tc,fc))
;
return ((function (switch__23560__auto__,c__23672__auto___24358,tc,fc){
return (function() {
var cljs$core$async$state_machine__23561__auto__ = null;
var cljs$core$async$state_machine__23561__auto____0 = (function (){
var statearr_24350 = [null,null,null,null,null,null,null,null,null];
(statearr_24350[(0)] = cljs$core$async$state_machine__23561__auto__);

(statearr_24350[(1)] = (1));

return statearr_24350;
});
var cljs$core$async$state_machine__23561__auto____1 = (function (state_24329){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_24329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e24351){if((e24351 instanceof Object)){
var ex__23564__auto__ = e24351;
var statearr_24352_24373 = state_24329;
(statearr_24352_24373[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24374 = state_24329;
state_24329 = G__24374;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$state_machine__23561__auto__ = function(state_24329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23561__auto____1.call(this,state_24329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23561__auto____0;
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23561__auto____1;
return cljs$core$async$state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___24358,tc,fc))
})();
var state__23674__auto__ = (function (){var statearr_24353 = f__23673__auto__.call(null);
(statearr_24353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___24358);

return statearr_24353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___24358,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto__){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto__){
return (function (state_24438){
var state_val_24439 = (state_24438[(1)]);
if((state_val_24439 === (7))){
var inst_24434 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
var statearr_24440_24461 = state_24438__$1;
(statearr_24440_24461[(2)] = inst_24434);

(statearr_24440_24461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (1))){
var inst_24418 = init;
var state_24438__$1 = (function (){var statearr_24441 = state_24438;
(statearr_24441[(7)] = inst_24418);

return statearr_24441;
})();
var statearr_24442_24462 = state_24438__$1;
(statearr_24442_24462[(2)] = null);

(statearr_24442_24462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (4))){
var inst_24421 = (state_24438[(8)]);
var inst_24421__$1 = (state_24438[(2)]);
var inst_24422 = (inst_24421__$1 == null);
var state_24438__$1 = (function (){var statearr_24443 = state_24438;
(statearr_24443[(8)] = inst_24421__$1);

return statearr_24443;
})();
if(cljs.core.truth_(inst_24422)){
var statearr_24444_24463 = state_24438__$1;
(statearr_24444_24463[(1)] = (5));

} else {
var statearr_24445_24464 = state_24438__$1;
(statearr_24445_24464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (6))){
var inst_24425 = (state_24438[(9)]);
var inst_24418 = (state_24438[(7)]);
var inst_24421 = (state_24438[(8)]);
var inst_24425__$1 = f.call(null,inst_24418,inst_24421);
var inst_24426 = cljs.core.reduced_QMARK_.call(null,inst_24425__$1);
var state_24438__$1 = (function (){var statearr_24446 = state_24438;
(statearr_24446[(9)] = inst_24425__$1);

return statearr_24446;
})();
if(inst_24426){
var statearr_24447_24465 = state_24438__$1;
(statearr_24447_24465[(1)] = (8));

} else {
var statearr_24448_24466 = state_24438__$1;
(statearr_24448_24466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (3))){
var inst_24436 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24438__$1,inst_24436);
} else {
if((state_val_24439 === (2))){
var state_24438__$1 = state_24438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24438__$1,(4),ch);
} else {
if((state_val_24439 === (9))){
var inst_24425 = (state_24438[(9)]);
var inst_24418 = inst_24425;
var state_24438__$1 = (function (){var statearr_24449 = state_24438;
(statearr_24449[(7)] = inst_24418);

return statearr_24449;
})();
var statearr_24450_24467 = state_24438__$1;
(statearr_24450_24467[(2)] = null);

(statearr_24450_24467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (5))){
var inst_24418 = (state_24438[(7)]);
var state_24438__$1 = state_24438;
var statearr_24451_24468 = state_24438__$1;
(statearr_24451_24468[(2)] = inst_24418);

(statearr_24451_24468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (10))){
var inst_24432 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
var statearr_24452_24469 = state_24438__$1;
(statearr_24452_24469[(2)] = inst_24432);

(statearr_24452_24469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (8))){
var inst_24425 = (state_24438[(9)]);
var inst_24428 = cljs.core.deref.call(null,inst_24425);
var state_24438__$1 = state_24438;
var statearr_24453_24470 = state_24438__$1;
(statearr_24453_24470[(2)] = inst_24428);

(statearr_24453_24470[(1)] = (10));


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
});})(c__23672__auto__))
;
return ((function (switch__23560__auto__,c__23672__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23561__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23561__auto____0 = (function (){
var statearr_24457 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24457[(0)] = cljs$core$async$reduce_$_state_machine__23561__auto__);

(statearr_24457[(1)] = (1));

return statearr_24457;
});
var cljs$core$async$reduce_$_state_machine__23561__auto____1 = (function (state_24438){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_24438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e24458){if((e24458 instanceof Object)){
var ex__23564__auto__ = e24458;
var statearr_24459_24471 = state_24438;
(statearr_24459_24471[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24472 = state_24438;
state_24438 = G__24472;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23561__auto__ = function(state_24438){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23561__auto____1.call(this,state_24438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23561__auto____0;
cljs$core$async$reduce_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23561__auto____1;
return cljs$core$async$reduce_$_state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto__))
})();
var state__23674__auto__ = (function (){var statearr_24460 = f__23673__auto__.call(null);
(statearr_24460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto__);

return statearr_24460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto__))
);

return c__23672__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24473 = [];
var len__21524__auto___24525 = arguments.length;
var i__21525__auto___24526 = (0);
while(true){
if((i__21525__auto___24526 < len__21524__auto___24525)){
args24473.push((arguments[i__21525__auto___24526]));

var G__24527 = (i__21525__auto___24526 + (1));
i__21525__auto___24526 = G__24527;
continue;
} else {
}
break;
}

var G__24475 = args24473.length;
switch (G__24475) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24473.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto__){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto__){
return (function (state_24500){
var state_val_24501 = (state_24500[(1)]);
if((state_val_24501 === (7))){
var inst_24482 = (state_24500[(2)]);
var state_24500__$1 = state_24500;
var statearr_24502_24529 = state_24500__$1;
(statearr_24502_24529[(2)] = inst_24482);

(statearr_24502_24529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24501 === (1))){
var inst_24476 = cljs.core.seq.call(null,coll);
var inst_24477 = inst_24476;
var state_24500__$1 = (function (){var statearr_24503 = state_24500;
(statearr_24503[(7)] = inst_24477);

return statearr_24503;
})();
var statearr_24504_24530 = state_24500__$1;
(statearr_24504_24530[(2)] = null);

(statearr_24504_24530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24501 === (4))){
var inst_24477 = (state_24500[(7)]);
var inst_24480 = cljs.core.first.call(null,inst_24477);
var state_24500__$1 = state_24500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24500__$1,(7),ch,inst_24480);
} else {
if((state_val_24501 === (13))){
var inst_24494 = (state_24500[(2)]);
var state_24500__$1 = state_24500;
var statearr_24505_24531 = state_24500__$1;
(statearr_24505_24531[(2)] = inst_24494);

(statearr_24505_24531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24501 === (6))){
var inst_24485 = (state_24500[(2)]);
var state_24500__$1 = state_24500;
if(cljs.core.truth_(inst_24485)){
var statearr_24506_24532 = state_24500__$1;
(statearr_24506_24532[(1)] = (8));

} else {
var statearr_24507_24533 = state_24500__$1;
(statearr_24507_24533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24501 === (3))){
var inst_24498 = (state_24500[(2)]);
var state_24500__$1 = state_24500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24500__$1,inst_24498);
} else {
if((state_val_24501 === (12))){
var state_24500__$1 = state_24500;
var statearr_24508_24534 = state_24500__$1;
(statearr_24508_24534[(2)] = null);

(statearr_24508_24534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24501 === (2))){
var inst_24477 = (state_24500[(7)]);
var state_24500__$1 = state_24500;
if(cljs.core.truth_(inst_24477)){
var statearr_24509_24535 = state_24500__$1;
(statearr_24509_24535[(1)] = (4));

} else {
var statearr_24510_24536 = state_24500__$1;
(statearr_24510_24536[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24501 === (11))){
var inst_24491 = cljs.core.async.close_BANG_.call(null,ch);
var state_24500__$1 = state_24500;
var statearr_24511_24537 = state_24500__$1;
(statearr_24511_24537[(2)] = inst_24491);

(statearr_24511_24537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24501 === (9))){
var state_24500__$1 = state_24500;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24512_24538 = state_24500__$1;
(statearr_24512_24538[(1)] = (11));

} else {
var statearr_24513_24539 = state_24500__$1;
(statearr_24513_24539[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24501 === (5))){
var inst_24477 = (state_24500[(7)]);
var state_24500__$1 = state_24500;
var statearr_24514_24540 = state_24500__$1;
(statearr_24514_24540[(2)] = inst_24477);

(statearr_24514_24540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24501 === (10))){
var inst_24496 = (state_24500[(2)]);
var state_24500__$1 = state_24500;
var statearr_24515_24541 = state_24500__$1;
(statearr_24515_24541[(2)] = inst_24496);

(statearr_24515_24541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24501 === (8))){
var inst_24477 = (state_24500[(7)]);
var inst_24487 = cljs.core.next.call(null,inst_24477);
var inst_24477__$1 = inst_24487;
var state_24500__$1 = (function (){var statearr_24516 = state_24500;
(statearr_24516[(7)] = inst_24477__$1);

return statearr_24516;
})();
var statearr_24517_24542 = state_24500__$1;
(statearr_24517_24542[(2)] = null);

(statearr_24517_24542[(1)] = (2));


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
});})(c__23672__auto__))
;
return ((function (switch__23560__auto__,c__23672__auto__){
return (function() {
var cljs$core$async$state_machine__23561__auto__ = null;
var cljs$core$async$state_machine__23561__auto____0 = (function (){
var statearr_24521 = [null,null,null,null,null,null,null,null];
(statearr_24521[(0)] = cljs$core$async$state_machine__23561__auto__);

(statearr_24521[(1)] = (1));

return statearr_24521;
});
var cljs$core$async$state_machine__23561__auto____1 = (function (state_24500){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_24500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e24522){if((e24522 instanceof Object)){
var ex__23564__auto__ = e24522;
var statearr_24523_24543 = state_24500;
(statearr_24523_24543[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24544 = state_24500;
state_24500 = G__24544;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$state_machine__23561__auto__ = function(state_24500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23561__auto____1.call(this,state_24500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23561__auto____0;
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23561__auto____1;
return cljs$core$async$state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto__))
})();
var state__23674__auto__ = (function (){var statearr_24524 = f__23673__auto__.call(null);
(statearr_24524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto__);

return statearr_24524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto__))
);

return c__23672__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__21112__auto__ = (((_ == null))?null:_);
var m__21113__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__21112__auto__)]);
if(!((m__21113__auto__ == null))){
return m__21113__auto__.call(null,_);
} else {
var m__21113__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__21113__auto____$1 == null))){
return m__21113__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__21112__auto__ = (((m == null))?null:m);
var m__21113__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__21112__auto__)]);
if(!((m__21113__auto__ == null))){
return m__21113__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__21113__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__21113__auto____$1 == null))){
return m__21113__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__21112__auto__ = (((m == null))?null:m);
var m__21113__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__21112__auto__)]);
if(!((m__21113__auto__ == null))){
return m__21113__auto__.call(null,m,ch);
} else {
var m__21113__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__21113__auto____$1 == null))){
return m__21113__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__21112__auto__ = (((m == null))?null:m);
var m__21113__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__21112__auto__)]);
if(!((m__21113__auto__ == null))){
return m__21113__auto__.call(null,m);
} else {
var m__21113__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__21113__auto____$1 == null))){
return m__21113__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24770 = (function (mult,ch,cs,meta24771){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24771 = meta24771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24772,meta24771__$1){
var self__ = this;
var _24772__$1 = this;
return (new cljs.core.async.t_cljs$core$async24770(self__.mult,self__.ch,self__.cs,meta24771__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24772){
var self__ = this;
var _24772__$1 = this;
return self__.meta24771;
});})(cs))
;

cljs.core.async.t_cljs$core$async24770.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24770.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24770.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24770.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24770.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24770.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24770.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24771","meta24771",1419532911,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24770";

cljs.core.async.t_cljs$core$async24770.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__21055__auto__,writer__21056__auto__,opt__21057__auto__){
return cljs.core._write.call(null,writer__21056__auto__,"cljs.core.async/t_cljs$core$async24770");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24770 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24770(mult__$1,ch__$1,cs__$1,meta24771){
return (new cljs.core.async.t_cljs$core$async24770(mult__$1,ch__$1,cs__$1,meta24771));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24770(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23672__auto___24995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___24995,cs,m,dchan,dctr,done){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___24995,cs,m,dchan,dctr,done){
return (function (state_24907){
var state_val_24908 = (state_24907[(1)]);
if((state_val_24908 === (7))){
var inst_24903 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
var statearr_24909_24996 = state_24907__$1;
(statearr_24909_24996[(2)] = inst_24903);

(statearr_24909_24996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (20))){
var inst_24806 = (state_24907[(7)]);
var inst_24818 = cljs.core.first.call(null,inst_24806);
var inst_24819 = cljs.core.nth.call(null,inst_24818,(0),null);
var inst_24820 = cljs.core.nth.call(null,inst_24818,(1),null);
var state_24907__$1 = (function (){var statearr_24910 = state_24907;
(statearr_24910[(8)] = inst_24819);

return statearr_24910;
})();
if(cljs.core.truth_(inst_24820)){
var statearr_24911_24997 = state_24907__$1;
(statearr_24911_24997[(1)] = (22));

} else {
var statearr_24912_24998 = state_24907__$1;
(statearr_24912_24998[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (27))){
var inst_24775 = (state_24907[(9)]);
var inst_24855 = (state_24907[(10)]);
var inst_24848 = (state_24907[(11)]);
var inst_24850 = (state_24907[(12)]);
var inst_24855__$1 = cljs.core._nth.call(null,inst_24848,inst_24850);
var inst_24856 = cljs.core.async.put_BANG_.call(null,inst_24855__$1,inst_24775,done);
var state_24907__$1 = (function (){var statearr_24913 = state_24907;
(statearr_24913[(10)] = inst_24855__$1);

return statearr_24913;
})();
if(cljs.core.truth_(inst_24856)){
var statearr_24914_24999 = state_24907__$1;
(statearr_24914_24999[(1)] = (30));

} else {
var statearr_24915_25000 = state_24907__$1;
(statearr_24915_25000[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (1))){
var state_24907__$1 = state_24907;
var statearr_24916_25001 = state_24907__$1;
(statearr_24916_25001[(2)] = null);

(statearr_24916_25001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (24))){
var inst_24806 = (state_24907[(7)]);
var inst_24825 = (state_24907[(2)]);
var inst_24826 = cljs.core.next.call(null,inst_24806);
var inst_24784 = inst_24826;
var inst_24785 = null;
var inst_24786 = (0);
var inst_24787 = (0);
var state_24907__$1 = (function (){var statearr_24917 = state_24907;
(statearr_24917[(13)] = inst_24784);

(statearr_24917[(14)] = inst_24825);

(statearr_24917[(15)] = inst_24785);

(statearr_24917[(16)] = inst_24786);

(statearr_24917[(17)] = inst_24787);

return statearr_24917;
})();
var statearr_24918_25002 = state_24907__$1;
(statearr_24918_25002[(2)] = null);

(statearr_24918_25002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (39))){
var state_24907__$1 = state_24907;
var statearr_24922_25003 = state_24907__$1;
(statearr_24922_25003[(2)] = null);

(statearr_24922_25003[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (4))){
var inst_24775 = (state_24907[(9)]);
var inst_24775__$1 = (state_24907[(2)]);
var inst_24776 = (inst_24775__$1 == null);
var state_24907__$1 = (function (){var statearr_24923 = state_24907;
(statearr_24923[(9)] = inst_24775__$1);

return statearr_24923;
})();
if(cljs.core.truth_(inst_24776)){
var statearr_24924_25004 = state_24907__$1;
(statearr_24924_25004[(1)] = (5));

} else {
var statearr_24925_25005 = state_24907__$1;
(statearr_24925_25005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (15))){
var inst_24784 = (state_24907[(13)]);
var inst_24785 = (state_24907[(15)]);
var inst_24786 = (state_24907[(16)]);
var inst_24787 = (state_24907[(17)]);
var inst_24802 = (state_24907[(2)]);
var inst_24803 = (inst_24787 + (1));
var tmp24919 = inst_24784;
var tmp24920 = inst_24785;
var tmp24921 = inst_24786;
var inst_24784__$1 = tmp24919;
var inst_24785__$1 = tmp24920;
var inst_24786__$1 = tmp24921;
var inst_24787__$1 = inst_24803;
var state_24907__$1 = (function (){var statearr_24926 = state_24907;
(statearr_24926[(13)] = inst_24784__$1);

(statearr_24926[(15)] = inst_24785__$1);

(statearr_24926[(16)] = inst_24786__$1);

(statearr_24926[(18)] = inst_24802);

(statearr_24926[(17)] = inst_24787__$1);

return statearr_24926;
})();
var statearr_24927_25006 = state_24907__$1;
(statearr_24927_25006[(2)] = null);

(statearr_24927_25006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (21))){
var inst_24829 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
var statearr_24931_25007 = state_24907__$1;
(statearr_24931_25007[(2)] = inst_24829);

(statearr_24931_25007[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (31))){
var inst_24855 = (state_24907[(10)]);
var inst_24859 = done.call(null,null);
var inst_24860 = cljs.core.async.untap_STAR_.call(null,m,inst_24855);
var state_24907__$1 = (function (){var statearr_24932 = state_24907;
(statearr_24932[(19)] = inst_24859);

return statearr_24932;
})();
var statearr_24933_25008 = state_24907__$1;
(statearr_24933_25008[(2)] = inst_24860);

(statearr_24933_25008[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (32))){
var inst_24847 = (state_24907[(20)]);
var inst_24849 = (state_24907[(21)]);
var inst_24848 = (state_24907[(11)]);
var inst_24850 = (state_24907[(12)]);
var inst_24862 = (state_24907[(2)]);
var inst_24863 = (inst_24850 + (1));
var tmp24928 = inst_24847;
var tmp24929 = inst_24849;
var tmp24930 = inst_24848;
var inst_24847__$1 = tmp24928;
var inst_24848__$1 = tmp24930;
var inst_24849__$1 = tmp24929;
var inst_24850__$1 = inst_24863;
var state_24907__$1 = (function (){var statearr_24934 = state_24907;
(statearr_24934[(20)] = inst_24847__$1);

(statearr_24934[(21)] = inst_24849__$1);

(statearr_24934[(11)] = inst_24848__$1);

(statearr_24934[(12)] = inst_24850__$1);

(statearr_24934[(22)] = inst_24862);

return statearr_24934;
})();
var statearr_24935_25009 = state_24907__$1;
(statearr_24935_25009[(2)] = null);

(statearr_24935_25009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (40))){
var inst_24875 = (state_24907[(23)]);
var inst_24879 = done.call(null,null);
var inst_24880 = cljs.core.async.untap_STAR_.call(null,m,inst_24875);
var state_24907__$1 = (function (){var statearr_24936 = state_24907;
(statearr_24936[(24)] = inst_24879);

return statearr_24936;
})();
var statearr_24937_25010 = state_24907__$1;
(statearr_24937_25010[(2)] = inst_24880);

(statearr_24937_25010[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (33))){
var inst_24866 = (state_24907[(25)]);
var inst_24868 = cljs.core.chunked_seq_QMARK_.call(null,inst_24866);
var state_24907__$1 = state_24907;
if(inst_24868){
var statearr_24938_25011 = state_24907__$1;
(statearr_24938_25011[(1)] = (36));

} else {
var statearr_24939_25012 = state_24907__$1;
(statearr_24939_25012[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (13))){
var inst_24796 = (state_24907[(26)]);
var inst_24799 = cljs.core.async.close_BANG_.call(null,inst_24796);
var state_24907__$1 = state_24907;
var statearr_24940_25013 = state_24907__$1;
(statearr_24940_25013[(2)] = inst_24799);

(statearr_24940_25013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (22))){
var inst_24819 = (state_24907[(8)]);
var inst_24822 = cljs.core.async.close_BANG_.call(null,inst_24819);
var state_24907__$1 = state_24907;
var statearr_24941_25014 = state_24907__$1;
(statearr_24941_25014[(2)] = inst_24822);

(statearr_24941_25014[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (36))){
var inst_24866 = (state_24907[(25)]);
var inst_24870 = cljs.core.chunk_first.call(null,inst_24866);
var inst_24871 = cljs.core.chunk_rest.call(null,inst_24866);
var inst_24872 = cljs.core.count.call(null,inst_24870);
var inst_24847 = inst_24871;
var inst_24848 = inst_24870;
var inst_24849 = inst_24872;
var inst_24850 = (0);
var state_24907__$1 = (function (){var statearr_24942 = state_24907;
(statearr_24942[(20)] = inst_24847);

(statearr_24942[(21)] = inst_24849);

(statearr_24942[(11)] = inst_24848);

(statearr_24942[(12)] = inst_24850);

return statearr_24942;
})();
var statearr_24943_25015 = state_24907__$1;
(statearr_24943_25015[(2)] = null);

(statearr_24943_25015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (41))){
var inst_24866 = (state_24907[(25)]);
var inst_24882 = (state_24907[(2)]);
var inst_24883 = cljs.core.next.call(null,inst_24866);
var inst_24847 = inst_24883;
var inst_24848 = null;
var inst_24849 = (0);
var inst_24850 = (0);
var state_24907__$1 = (function (){var statearr_24944 = state_24907;
(statearr_24944[(27)] = inst_24882);

(statearr_24944[(20)] = inst_24847);

(statearr_24944[(21)] = inst_24849);

(statearr_24944[(11)] = inst_24848);

(statearr_24944[(12)] = inst_24850);

return statearr_24944;
})();
var statearr_24945_25016 = state_24907__$1;
(statearr_24945_25016[(2)] = null);

(statearr_24945_25016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (43))){
var state_24907__$1 = state_24907;
var statearr_24946_25017 = state_24907__$1;
(statearr_24946_25017[(2)] = null);

(statearr_24946_25017[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (29))){
var inst_24891 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
var statearr_24947_25018 = state_24907__$1;
(statearr_24947_25018[(2)] = inst_24891);

(statearr_24947_25018[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (44))){
var inst_24900 = (state_24907[(2)]);
var state_24907__$1 = (function (){var statearr_24948 = state_24907;
(statearr_24948[(28)] = inst_24900);

return statearr_24948;
})();
var statearr_24949_25019 = state_24907__$1;
(statearr_24949_25019[(2)] = null);

(statearr_24949_25019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (6))){
var inst_24839 = (state_24907[(29)]);
var inst_24838 = cljs.core.deref.call(null,cs);
var inst_24839__$1 = cljs.core.keys.call(null,inst_24838);
var inst_24840 = cljs.core.count.call(null,inst_24839__$1);
var inst_24841 = cljs.core.reset_BANG_.call(null,dctr,inst_24840);
var inst_24846 = cljs.core.seq.call(null,inst_24839__$1);
var inst_24847 = inst_24846;
var inst_24848 = null;
var inst_24849 = (0);
var inst_24850 = (0);
var state_24907__$1 = (function (){var statearr_24950 = state_24907;
(statearr_24950[(29)] = inst_24839__$1);

(statearr_24950[(20)] = inst_24847);

(statearr_24950[(21)] = inst_24849);

(statearr_24950[(30)] = inst_24841);

(statearr_24950[(11)] = inst_24848);

(statearr_24950[(12)] = inst_24850);

return statearr_24950;
})();
var statearr_24951_25020 = state_24907__$1;
(statearr_24951_25020[(2)] = null);

(statearr_24951_25020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (28))){
var inst_24866 = (state_24907[(25)]);
var inst_24847 = (state_24907[(20)]);
var inst_24866__$1 = cljs.core.seq.call(null,inst_24847);
var state_24907__$1 = (function (){var statearr_24952 = state_24907;
(statearr_24952[(25)] = inst_24866__$1);

return statearr_24952;
})();
if(inst_24866__$1){
var statearr_24953_25021 = state_24907__$1;
(statearr_24953_25021[(1)] = (33));

} else {
var statearr_24954_25022 = state_24907__$1;
(statearr_24954_25022[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (25))){
var inst_24849 = (state_24907[(21)]);
var inst_24850 = (state_24907[(12)]);
var inst_24852 = (inst_24850 < inst_24849);
var inst_24853 = inst_24852;
var state_24907__$1 = state_24907;
if(cljs.core.truth_(inst_24853)){
var statearr_24955_25023 = state_24907__$1;
(statearr_24955_25023[(1)] = (27));

} else {
var statearr_24956_25024 = state_24907__$1;
(statearr_24956_25024[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (34))){
var state_24907__$1 = state_24907;
var statearr_24957_25025 = state_24907__$1;
(statearr_24957_25025[(2)] = null);

(statearr_24957_25025[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (17))){
var state_24907__$1 = state_24907;
var statearr_24958_25026 = state_24907__$1;
(statearr_24958_25026[(2)] = null);

(statearr_24958_25026[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (3))){
var inst_24905 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24907__$1,inst_24905);
} else {
if((state_val_24908 === (12))){
var inst_24834 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
var statearr_24959_25027 = state_24907__$1;
(statearr_24959_25027[(2)] = inst_24834);

(statearr_24959_25027[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (2))){
var state_24907__$1 = state_24907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24907__$1,(4),ch);
} else {
if((state_val_24908 === (23))){
var state_24907__$1 = state_24907;
var statearr_24960_25028 = state_24907__$1;
(statearr_24960_25028[(2)] = null);

(statearr_24960_25028[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (35))){
var inst_24889 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
var statearr_24961_25029 = state_24907__$1;
(statearr_24961_25029[(2)] = inst_24889);

(statearr_24961_25029[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (19))){
var inst_24806 = (state_24907[(7)]);
var inst_24810 = cljs.core.chunk_first.call(null,inst_24806);
var inst_24811 = cljs.core.chunk_rest.call(null,inst_24806);
var inst_24812 = cljs.core.count.call(null,inst_24810);
var inst_24784 = inst_24811;
var inst_24785 = inst_24810;
var inst_24786 = inst_24812;
var inst_24787 = (0);
var state_24907__$1 = (function (){var statearr_24962 = state_24907;
(statearr_24962[(13)] = inst_24784);

(statearr_24962[(15)] = inst_24785);

(statearr_24962[(16)] = inst_24786);

(statearr_24962[(17)] = inst_24787);

return statearr_24962;
})();
var statearr_24963_25030 = state_24907__$1;
(statearr_24963_25030[(2)] = null);

(statearr_24963_25030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (11))){
var inst_24784 = (state_24907[(13)]);
var inst_24806 = (state_24907[(7)]);
var inst_24806__$1 = cljs.core.seq.call(null,inst_24784);
var state_24907__$1 = (function (){var statearr_24964 = state_24907;
(statearr_24964[(7)] = inst_24806__$1);

return statearr_24964;
})();
if(inst_24806__$1){
var statearr_24965_25031 = state_24907__$1;
(statearr_24965_25031[(1)] = (16));

} else {
var statearr_24966_25032 = state_24907__$1;
(statearr_24966_25032[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (9))){
var inst_24836 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
var statearr_24967_25033 = state_24907__$1;
(statearr_24967_25033[(2)] = inst_24836);

(statearr_24967_25033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (5))){
var inst_24782 = cljs.core.deref.call(null,cs);
var inst_24783 = cljs.core.seq.call(null,inst_24782);
var inst_24784 = inst_24783;
var inst_24785 = null;
var inst_24786 = (0);
var inst_24787 = (0);
var state_24907__$1 = (function (){var statearr_24968 = state_24907;
(statearr_24968[(13)] = inst_24784);

(statearr_24968[(15)] = inst_24785);

(statearr_24968[(16)] = inst_24786);

(statearr_24968[(17)] = inst_24787);

return statearr_24968;
})();
var statearr_24969_25034 = state_24907__$1;
(statearr_24969_25034[(2)] = null);

(statearr_24969_25034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (14))){
var state_24907__$1 = state_24907;
var statearr_24970_25035 = state_24907__$1;
(statearr_24970_25035[(2)] = null);

(statearr_24970_25035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (45))){
var inst_24897 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
var statearr_24971_25036 = state_24907__$1;
(statearr_24971_25036[(2)] = inst_24897);

(statearr_24971_25036[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (26))){
var inst_24839 = (state_24907[(29)]);
var inst_24893 = (state_24907[(2)]);
var inst_24894 = cljs.core.seq.call(null,inst_24839);
var state_24907__$1 = (function (){var statearr_24972 = state_24907;
(statearr_24972[(31)] = inst_24893);

return statearr_24972;
})();
if(inst_24894){
var statearr_24973_25037 = state_24907__$1;
(statearr_24973_25037[(1)] = (42));

} else {
var statearr_24974_25038 = state_24907__$1;
(statearr_24974_25038[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (16))){
var inst_24806 = (state_24907[(7)]);
var inst_24808 = cljs.core.chunked_seq_QMARK_.call(null,inst_24806);
var state_24907__$1 = state_24907;
if(inst_24808){
var statearr_24975_25039 = state_24907__$1;
(statearr_24975_25039[(1)] = (19));

} else {
var statearr_24976_25040 = state_24907__$1;
(statearr_24976_25040[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (38))){
var inst_24886 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
var statearr_24977_25041 = state_24907__$1;
(statearr_24977_25041[(2)] = inst_24886);

(statearr_24977_25041[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (30))){
var state_24907__$1 = state_24907;
var statearr_24978_25042 = state_24907__$1;
(statearr_24978_25042[(2)] = null);

(statearr_24978_25042[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (10))){
var inst_24785 = (state_24907[(15)]);
var inst_24787 = (state_24907[(17)]);
var inst_24795 = cljs.core._nth.call(null,inst_24785,inst_24787);
var inst_24796 = cljs.core.nth.call(null,inst_24795,(0),null);
var inst_24797 = cljs.core.nth.call(null,inst_24795,(1),null);
var state_24907__$1 = (function (){var statearr_24979 = state_24907;
(statearr_24979[(26)] = inst_24796);

return statearr_24979;
})();
if(cljs.core.truth_(inst_24797)){
var statearr_24980_25043 = state_24907__$1;
(statearr_24980_25043[(1)] = (13));

} else {
var statearr_24981_25044 = state_24907__$1;
(statearr_24981_25044[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (18))){
var inst_24832 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
var statearr_24982_25045 = state_24907__$1;
(statearr_24982_25045[(2)] = inst_24832);

(statearr_24982_25045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (42))){
var state_24907__$1 = state_24907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24907__$1,(45),dchan);
} else {
if((state_val_24908 === (37))){
var inst_24866 = (state_24907[(25)]);
var inst_24875 = (state_24907[(23)]);
var inst_24775 = (state_24907[(9)]);
var inst_24875__$1 = cljs.core.first.call(null,inst_24866);
var inst_24876 = cljs.core.async.put_BANG_.call(null,inst_24875__$1,inst_24775,done);
var state_24907__$1 = (function (){var statearr_24983 = state_24907;
(statearr_24983[(23)] = inst_24875__$1);

return statearr_24983;
})();
if(cljs.core.truth_(inst_24876)){
var statearr_24984_25046 = state_24907__$1;
(statearr_24984_25046[(1)] = (39));

} else {
var statearr_24985_25047 = state_24907__$1;
(statearr_24985_25047[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (8))){
var inst_24786 = (state_24907[(16)]);
var inst_24787 = (state_24907[(17)]);
var inst_24789 = (inst_24787 < inst_24786);
var inst_24790 = inst_24789;
var state_24907__$1 = state_24907;
if(cljs.core.truth_(inst_24790)){
var statearr_24986_25048 = state_24907__$1;
(statearr_24986_25048[(1)] = (10));

} else {
var statearr_24987_25049 = state_24907__$1;
(statearr_24987_25049[(1)] = (11));

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
});})(c__23672__auto___24995,cs,m,dchan,dctr,done))
;
return ((function (switch__23560__auto__,c__23672__auto___24995,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23561__auto__ = null;
var cljs$core$async$mult_$_state_machine__23561__auto____0 = (function (){
var statearr_24991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24991[(0)] = cljs$core$async$mult_$_state_machine__23561__auto__);

(statearr_24991[(1)] = (1));

return statearr_24991;
});
var cljs$core$async$mult_$_state_machine__23561__auto____1 = (function (state_24907){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_24907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e24992){if((e24992 instanceof Object)){
var ex__23564__auto__ = e24992;
var statearr_24993_25050 = state_24907;
(statearr_24993_25050[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25051 = state_24907;
state_24907 = G__25051;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23561__auto__ = function(state_24907){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23561__auto____1.call(this,state_24907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23561__auto____0;
cljs$core$async$mult_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23561__auto____1;
return cljs$core$async$mult_$_state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___24995,cs,m,dchan,dctr,done))
})();
var state__23674__auto__ = (function (){var statearr_24994 = f__23673__auto__.call(null);
(statearr_24994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___24995);

return statearr_24994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___24995,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25052 = [];
var len__21524__auto___25055 = arguments.length;
var i__21525__auto___25056 = (0);
while(true){
if((i__21525__auto___25056 < len__21524__auto___25055)){
args25052.push((arguments[i__21525__auto___25056]));

var G__25057 = (i__21525__auto___25056 + (1));
i__21525__auto___25056 = G__25057;
continue;
} else {
}
break;
}

var G__25054 = args25052.length;
switch (G__25054) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25052.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__21112__auto__ = (((m == null))?null:m);
var m__21113__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__21112__auto__)]);
if(!((m__21113__auto__ == null))){
return m__21113__auto__.call(null,m,ch);
} else {
var m__21113__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__21113__auto____$1 == null))){
return m__21113__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__21112__auto__ = (((m == null))?null:m);
var m__21113__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__21112__auto__)]);
if(!((m__21113__auto__ == null))){
return m__21113__auto__.call(null,m,ch);
} else {
var m__21113__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__21113__auto____$1 == null))){
return m__21113__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__21112__auto__ = (((m == null))?null:m);
var m__21113__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__21112__auto__)]);
if(!((m__21113__auto__ == null))){
return m__21113__auto__.call(null,m);
} else {
var m__21113__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__21113__auto____$1 == null))){
return m__21113__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__21112__auto__ = (((m == null))?null:m);
var m__21113__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__21112__auto__)]);
if(!((m__21113__auto__ == null))){
return m__21113__auto__.call(null,m,state_map);
} else {
var m__21113__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__21113__auto____$1 == null))){
return m__21113__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__21112__auto__ = (((m == null))?null:m);
var m__21113__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__21112__auto__)]);
if(!((m__21113__auto__ == null))){
return m__21113__auto__.call(null,m,mode);
} else {
var m__21113__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__21113__auto____$1 == null))){
return m__21113__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21531__auto__ = [];
var len__21524__auto___25069 = arguments.length;
var i__21525__auto___25070 = (0);
while(true){
if((i__21525__auto___25070 < len__21524__auto___25069)){
args__21531__auto__.push((arguments[i__21525__auto___25070]));

var G__25071 = (i__21525__auto___25070 + (1));
i__21525__auto___25070 = G__25071;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((3) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21532__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25063){
var map__25064 = p__25063;
var map__25064__$1 = ((((!((map__25064 == null)))?((((map__25064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25064):map__25064);
var opts = map__25064__$1;
var statearr_25066_25072 = state;
(statearr_25066_25072[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__25064,map__25064__$1,opts){
return (function (val){
var statearr_25067_25073 = state;
(statearr_25067_25073[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25064,map__25064__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_25068_25074 = state;
(statearr_25068_25074[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25059){
var G__25060 = cljs.core.first.call(null,seq25059);
var seq25059__$1 = cljs.core.next.call(null,seq25059);
var G__25061 = cljs.core.first.call(null,seq25059__$1);
var seq25059__$2 = cljs.core.next.call(null,seq25059__$1);
var G__25062 = cljs.core.first.call(null,seq25059__$2);
var seq25059__$3 = cljs.core.next.call(null,seq25059__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25060,G__25061,G__25062,seq25059__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25240 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25241){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25241 = meta25241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25242,meta25241__$1){
var self__ = this;
var _25242__$1 = this;
return (new cljs.core.async.t_cljs$core$async25240(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25241__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25242){
var self__ = this;
var _25242__$1 = this;
return self__.meta25241;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25240.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25241","meta25241",966199587,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25240";

cljs.core.async.t_cljs$core$async25240.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__21055__auto__,writer__21056__auto__,opt__21057__auto__){
return cljs.core._write.call(null,writer__21056__auto__,"cljs.core.async/t_cljs$core$async25240");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25240 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25240(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25241){
return (new cljs.core.async.t_cljs$core$async25240(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25241));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25240(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23672__auto___25405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___25405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___25405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25342){
var state_val_25343 = (state_25342[(1)]);
if((state_val_25343 === (7))){
var inst_25258 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
var statearr_25344_25406 = state_25342__$1;
(statearr_25344_25406[(2)] = inst_25258);

(statearr_25344_25406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (20))){
var inst_25270 = (state_25342[(7)]);
var state_25342__$1 = state_25342;
var statearr_25345_25407 = state_25342__$1;
(statearr_25345_25407[(2)] = inst_25270);

(statearr_25345_25407[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (27))){
var state_25342__$1 = state_25342;
var statearr_25346_25408 = state_25342__$1;
(statearr_25346_25408[(2)] = null);

(statearr_25346_25408[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (1))){
var inst_25246 = (state_25342[(8)]);
var inst_25246__$1 = calc_state.call(null);
var inst_25248 = (inst_25246__$1 == null);
var inst_25249 = cljs.core.not.call(null,inst_25248);
var state_25342__$1 = (function (){var statearr_25347 = state_25342;
(statearr_25347[(8)] = inst_25246__$1);

return statearr_25347;
})();
if(inst_25249){
var statearr_25348_25409 = state_25342__$1;
(statearr_25348_25409[(1)] = (2));

} else {
var statearr_25349_25410 = state_25342__$1;
(statearr_25349_25410[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (24))){
var inst_25302 = (state_25342[(9)]);
var inst_25316 = (state_25342[(10)]);
var inst_25293 = (state_25342[(11)]);
var inst_25316__$1 = inst_25293.call(null,inst_25302);
var state_25342__$1 = (function (){var statearr_25350 = state_25342;
(statearr_25350[(10)] = inst_25316__$1);

return statearr_25350;
})();
if(cljs.core.truth_(inst_25316__$1)){
var statearr_25351_25411 = state_25342__$1;
(statearr_25351_25411[(1)] = (29));

} else {
var statearr_25352_25412 = state_25342__$1;
(statearr_25352_25412[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (4))){
var inst_25261 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
if(cljs.core.truth_(inst_25261)){
var statearr_25353_25413 = state_25342__$1;
(statearr_25353_25413[(1)] = (8));

} else {
var statearr_25354_25414 = state_25342__$1;
(statearr_25354_25414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (15))){
var inst_25287 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
if(cljs.core.truth_(inst_25287)){
var statearr_25355_25415 = state_25342__$1;
(statearr_25355_25415[(1)] = (19));

} else {
var statearr_25356_25416 = state_25342__$1;
(statearr_25356_25416[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (21))){
var inst_25292 = (state_25342[(12)]);
var inst_25292__$1 = (state_25342[(2)]);
var inst_25293 = cljs.core.get.call(null,inst_25292__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25294 = cljs.core.get.call(null,inst_25292__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25295 = cljs.core.get.call(null,inst_25292__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25342__$1 = (function (){var statearr_25357 = state_25342;
(statearr_25357[(12)] = inst_25292__$1);

(statearr_25357[(13)] = inst_25294);

(statearr_25357[(11)] = inst_25293);

return statearr_25357;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25342__$1,(22),inst_25295);
} else {
if((state_val_25343 === (31))){
var inst_25324 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
if(cljs.core.truth_(inst_25324)){
var statearr_25358_25417 = state_25342__$1;
(statearr_25358_25417[(1)] = (32));

} else {
var statearr_25359_25418 = state_25342__$1;
(statearr_25359_25418[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (32))){
var inst_25301 = (state_25342[(14)]);
var state_25342__$1 = state_25342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25342__$1,(35),out,inst_25301);
} else {
if((state_val_25343 === (33))){
var inst_25292 = (state_25342[(12)]);
var inst_25270 = inst_25292;
var state_25342__$1 = (function (){var statearr_25360 = state_25342;
(statearr_25360[(7)] = inst_25270);

return statearr_25360;
})();
var statearr_25361_25419 = state_25342__$1;
(statearr_25361_25419[(2)] = null);

(statearr_25361_25419[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (13))){
var inst_25270 = (state_25342[(7)]);
var inst_25277 = inst_25270.cljs$lang$protocol_mask$partition0$;
var inst_25278 = (inst_25277 & (64));
var inst_25279 = inst_25270.cljs$core$ISeq$;
var inst_25280 = (inst_25278) || (inst_25279);
var state_25342__$1 = state_25342;
if(cljs.core.truth_(inst_25280)){
var statearr_25362_25420 = state_25342__$1;
(statearr_25362_25420[(1)] = (16));

} else {
var statearr_25363_25421 = state_25342__$1;
(statearr_25363_25421[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (22))){
var inst_25301 = (state_25342[(14)]);
var inst_25302 = (state_25342[(9)]);
var inst_25300 = (state_25342[(2)]);
var inst_25301__$1 = cljs.core.nth.call(null,inst_25300,(0),null);
var inst_25302__$1 = cljs.core.nth.call(null,inst_25300,(1),null);
var inst_25303 = (inst_25301__$1 == null);
var inst_25304 = cljs.core._EQ_.call(null,inst_25302__$1,change);
var inst_25305 = (inst_25303) || (inst_25304);
var state_25342__$1 = (function (){var statearr_25364 = state_25342;
(statearr_25364[(14)] = inst_25301__$1);

(statearr_25364[(9)] = inst_25302__$1);

return statearr_25364;
})();
if(cljs.core.truth_(inst_25305)){
var statearr_25365_25422 = state_25342__$1;
(statearr_25365_25422[(1)] = (23));

} else {
var statearr_25366_25423 = state_25342__$1;
(statearr_25366_25423[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (36))){
var inst_25292 = (state_25342[(12)]);
var inst_25270 = inst_25292;
var state_25342__$1 = (function (){var statearr_25367 = state_25342;
(statearr_25367[(7)] = inst_25270);

return statearr_25367;
})();
var statearr_25368_25424 = state_25342__$1;
(statearr_25368_25424[(2)] = null);

(statearr_25368_25424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (29))){
var inst_25316 = (state_25342[(10)]);
var state_25342__$1 = state_25342;
var statearr_25369_25425 = state_25342__$1;
(statearr_25369_25425[(2)] = inst_25316);

(statearr_25369_25425[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (6))){
var state_25342__$1 = state_25342;
var statearr_25370_25426 = state_25342__$1;
(statearr_25370_25426[(2)] = false);

(statearr_25370_25426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (28))){
var inst_25312 = (state_25342[(2)]);
var inst_25313 = calc_state.call(null);
var inst_25270 = inst_25313;
var state_25342__$1 = (function (){var statearr_25371 = state_25342;
(statearr_25371[(7)] = inst_25270);

(statearr_25371[(15)] = inst_25312);

return statearr_25371;
})();
var statearr_25372_25427 = state_25342__$1;
(statearr_25372_25427[(2)] = null);

(statearr_25372_25427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (25))){
var inst_25338 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
var statearr_25373_25428 = state_25342__$1;
(statearr_25373_25428[(2)] = inst_25338);

(statearr_25373_25428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (34))){
var inst_25336 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
var statearr_25374_25429 = state_25342__$1;
(statearr_25374_25429[(2)] = inst_25336);

(statearr_25374_25429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (17))){
var state_25342__$1 = state_25342;
var statearr_25375_25430 = state_25342__$1;
(statearr_25375_25430[(2)] = false);

(statearr_25375_25430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (3))){
var state_25342__$1 = state_25342;
var statearr_25376_25431 = state_25342__$1;
(statearr_25376_25431[(2)] = false);

(statearr_25376_25431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (12))){
var inst_25340 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25342__$1,inst_25340);
} else {
if((state_val_25343 === (2))){
var inst_25246 = (state_25342[(8)]);
var inst_25251 = inst_25246.cljs$lang$protocol_mask$partition0$;
var inst_25252 = (inst_25251 & (64));
var inst_25253 = inst_25246.cljs$core$ISeq$;
var inst_25254 = (inst_25252) || (inst_25253);
var state_25342__$1 = state_25342;
if(cljs.core.truth_(inst_25254)){
var statearr_25377_25432 = state_25342__$1;
(statearr_25377_25432[(1)] = (5));

} else {
var statearr_25378_25433 = state_25342__$1;
(statearr_25378_25433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (23))){
var inst_25301 = (state_25342[(14)]);
var inst_25307 = (inst_25301 == null);
var state_25342__$1 = state_25342;
if(cljs.core.truth_(inst_25307)){
var statearr_25379_25434 = state_25342__$1;
(statearr_25379_25434[(1)] = (26));

} else {
var statearr_25380_25435 = state_25342__$1;
(statearr_25380_25435[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (35))){
var inst_25327 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
if(cljs.core.truth_(inst_25327)){
var statearr_25381_25436 = state_25342__$1;
(statearr_25381_25436[(1)] = (36));

} else {
var statearr_25382_25437 = state_25342__$1;
(statearr_25382_25437[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (19))){
var inst_25270 = (state_25342[(7)]);
var inst_25289 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25270);
var state_25342__$1 = state_25342;
var statearr_25383_25438 = state_25342__$1;
(statearr_25383_25438[(2)] = inst_25289);

(statearr_25383_25438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (11))){
var inst_25270 = (state_25342[(7)]);
var inst_25274 = (inst_25270 == null);
var inst_25275 = cljs.core.not.call(null,inst_25274);
var state_25342__$1 = state_25342;
if(inst_25275){
var statearr_25384_25439 = state_25342__$1;
(statearr_25384_25439[(1)] = (13));

} else {
var statearr_25385_25440 = state_25342__$1;
(statearr_25385_25440[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (9))){
var inst_25246 = (state_25342[(8)]);
var state_25342__$1 = state_25342;
var statearr_25386_25441 = state_25342__$1;
(statearr_25386_25441[(2)] = inst_25246);

(statearr_25386_25441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (5))){
var state_25342__$1 = state_25342;
var statearr_25387_25442 = state_25342__$1;
(statearr_25387_25442[(2)] = true);

(statearr_25387_25442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (14))){
var state_25342__$1 = state_25342;
var statearr_25388_25443 = state_25342__$1;
(statearr_25388_25443[(2)] = false);

(statearr_25388_25443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (26))){
var inst_25302 = (state_25342[(9)]);
var inst_25309 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25302);
var state_25342__$1 = state_25342;
var statearr_25389_25444 = state_25342__$1;
(statearr_25389_25444[(2)] = inst_25309);

(statearr_25389_25444[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (16))){
var state_25342__$1 = state_25342;
var statearr_25390_25445 = state_25342__$1;
(statearr_25390_25445[(2)] = true);

(statearr_25390_25445[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (38))){
var inst_25332 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
var statearr_25391_25446 = state_25342__$1;
(statearr_25391_25446[(2)] = inst_25332);

(statearr_25391_25446[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (30))){
var inst_25302 = (state_25342[(9)]);
var inst_25294 = (state_25342[(13)]);
var inst_25293 = (state_25342[(11)]);
var inst_25319 = cljs.core.empty_QMARK_.call(null,inst_25293);
var inst_25320 = inst_25294.call(null,inst_25302);
var inst_25321 = cljs.core.not.call(null,inst_25320);
var inst_25322 = (inst_25319) && (inst_25321);
var state_25342__$1 = state_25342;
var statearr_25392_25447 = state_25342__$1;
(statearr_25392_25447[(2)] = inst_25322);

(statearr_25392_25447[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (10))){
var inst_25246 = (state_25342[(8)]);
var inst_25266 = (state_25342[(2)]);
var inst_25267 = cljs.core.get.call(null,inst_25266,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25268 = cljs.core.get.call(null,inst_25266,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25269 = cljs.core.get.call(null,inst_25266,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25270 = inst_25246;
var state_25342__$1 = (function (){var statearr_25393 = state_25342;
(statearr_25393[(16)] = inst_25269);

(statearr_25393[(7)] = inst_25270);

(statearr_25393[(17)] = inst_25268);

(statearr_25393[(18)] = inst_25267);

return statearr_25393;
})();
var statearr_25394_25448 = state_25342__$1;
(statearr_25394_25448[(2)] = null);

(statearr_25394_25448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (18))){
var inst_25284 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
var statearr_25395_25449 = state_25342__$1;
(statearr_25395_25449[(2)] = inst_25284);

(statearr_25395_25449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (37))){
var state_25342__$1 = state_25342;
var statearr_25396_25450 = state_25342__$1;
(statearr_25396_25450[(2)] = null);

(statearr_25396_25450[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (8))){
var inst_25246 = (state_25342[(8)]);
var inst_25263 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25246);
var state_25342__$1 = state_25342;
var statearr_25397_25451 = state_25342__$1;
(statearr_25397_25451[(2)] = inst_25263);

(statearr_25397_25451[(1)] = (10));


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
});})(c__23672__auto___25405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23560__auto__,c__23672__auto___25405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23561__auto__ = null;
var cljs$core$async$mix_$_state_machine__23561__auto____0 = (function (){
var statearr_25401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25401[(0)] = cljs$core$async$mix_$_state_machine__23561__auto__);

(statearr_25401[(1)] = (1));

return statearr_25401;
});
var cljs$core$async$mix_$_state_machine__23561__auto____1 = (function (state_25342){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_25342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e25402){if((e25402 instanceof Object)){
var ex__23564__auto__ = e25402;
var statearr_25403_25452 = state_25342;
(statearr_25403_25452[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25453 = state_25342;
state_25342 = G__25453;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23561__auto__ = function(state_25342){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23561__auto____1.call(this,state_25342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23561__auto____0;
cljs$core$async$mix_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23561__auto____1;
return cljs$core$async$mix_$_state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___25405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23674__auto__ = (function (){var statearr_25404 = f__23673__auto__.call(null);
(statearr_25404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___25405);

return statearr_25404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___25405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__21112__auto__ = (((p == null))?null:p);
var m__21113__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__21112__auto__)]);
if(!((m__21113__auto__ == null))){
return m__21113__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__21113__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__21113__auto____$1 == null))){
return m__21113__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__21112__auto__ = (((p == null))?null:p);
var m__21113__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__21112__auto__)]);
if(!((m__21113__auto__ == null))){
return m__21113__auto__.call(null,p,v,ch);
} else {
var m__21113__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__21113__auto____$1 == null))){
return m__21113__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25454 = [];
var len__21524__auto___25457 = arguments.length;
var i__21525__auto___25458 = (0);
while(true){
if((i__21525__auto___25458 < len__21524__auto___25457)){
args25454.push((arguments[i__21525__auto___25458]));

var G__25459 = (i__21525__auto___25458 + (1));
i__21525__auto___25458 = G__25459;
continue;
} else {
}
break;
}

var G__25456 = args25454.length;
switch (G__25456) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25454.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__21112__auto__ = (((p == null))?null:p);
var m__21113__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21112__auto__)]);
if(!((m__21113__auto__ == null))){
return m__21113__auto__.call(null,p);
} else {
var m__21113__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21113__auto____$1 == null))){
return m__21113__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__21112__auto__ = (((p == null))?null:p);
var m__21113__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21112__auto__)]);
if(!((m__21113__auto__ == null))){
return m__21113__auto__.call(null,p,v);
} else {
var m__21113__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21113__auto____$1 == null))){
return m__21113__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25462 = [];
var len__21524__auto___25587 = arguments.length;
var i__21525__auto___25588 = (0);
while(true){
if((i__21525__auto___25588 < len__21524__auto___25587)){
args25462.push((arguments[i__21525__auto___25588]));

var G__25589 = (i__21525__auto___25588 + (1));
i__21525__auto___25588 = G__25589;
continue;
} else {
}
break;
}

var G__25464 = args25462.length;
switch (G__25464) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25462.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20449__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20449__auto__)){
return or__20449__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20449__auto__,mults){
return (function (p1__25461_SHARP_){
if(cljs.core.truth_(p1__25461_SHARP_.call(null,topic))){
return p1__25461_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25461_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20449__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25465 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25466){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25466 = meta25466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25467,meta25466__$1){
var self__ = this;
var _25467__$1 = this;
return (new cljs.core.async.t_cljs$core$async25465(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25466__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25467){
var self__ = this;
var _25467__$1 = this;
return self__.meta25466;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25465.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25465.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25465.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25465.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25465.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25465.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25465.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25465.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25466","meta25466",1352840627,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25465";

cljs.core.async.t_cljs$core$async25465.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__21055__auto__,writer__21056__auto__,opt__21057__auto__){
return cljs.core._write.call(null,writer__21056__auto__,"cljs.core.async/t_cljs$core$async25465");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25465 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25465(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25466){
return (new cljs.core.async.t_cljs$core$async25465(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25466));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25465(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23672__auto___25591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___25591,mults,ensure_mult,p){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___25591,mults,ensure_mult,p){
return (function (state_25539){
var state_val_25540 = (state_25539[(1)]);
if((state_val_25540 === (7))){
var inst_25535 = (state_25539[(2)]);
var state_25539__$1 = state_25539;
var statearr_25541_25592 = state_25539__$1;
(statearr_25541_25592[(2)] = inst_25535);

(statearr_25541_25592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (20))){
var state_25539__$1 = state_25539;
var statearr_25542_25593 = state_25539__$1;
(statearr_25542_25593[(2)] = null);

(statearr_25542_25593[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (1))){
var state_25539__$1 = state_25539;
var statearr_25543_25594 = state_25539__$1;
(statearr_25543_25594[(2)] = null);

(statearr_25543_25594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (24))){
var inst_25518 = (state_25539[(7)]);
var inst_25527 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25518);
var state_25539__$1 = state_25539;
var statearr_25544_25595 = state_25539__$1;
(statearr_25544_25595[(2)] = inst_25527);

(statearr_25544_25595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (4))){
var inst_25470 = (state_25539[(8)]);
var inst_25470__$1 = (state_25539[(2)]);
var inst_25471 = (inst_25470__$1 == null);
var state_25539__$1 = (function (){var statearr_25545 = state_25539;
(statearr_25545[(8)] = inst_25470__$1);

return statearr_25545;
})();
if(cljs.core.truth_(inst_25471)){
var statearr_25546_25596 = state_25539__$1;
(statearr_25546_25596[(1)] = (5));

} else {
var statearr_25547_25597 = state_25539__$1;
(statearr_25547_25597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (15))){
var inst_25512 = (state_25539[(2)]);
var state_25539__$1 = state_25539;
var statearr_25548_25598 = state_25539__$1;
(statearr_25548_25598[(2)] = inst_25512);

(statearr_25548_25598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (21))){
var inst_25532 = (state_25539[(2)]);
var state_25539__$1 = (function (){var statearr_25549 = state_25539;
(statearr_25549[(9)] = inst_25532);

return statearr_25549;
})();
var statearr_25550_25599 = state_25539__$1;
(statearr_25550_25599[(2)] = null);

(statearr_25550_25599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (13))){
var inst_25494 = (state_25539[(10)]);
var inst_25496 = cljs.core.chunked_seq_QMARK_.call(null,inst_25494);
var state_25539__$1 = state_25539;
if(inst_25496){
var statearr_25551_25600 = state_25539__$1;
(statearr_25551_25600[(1)] = (16));

} else {
var statearr_25552_25601 = state_25539__$1;
(statearr_25552_25601[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (22))){
var inst_25524 = (state_25539[(2)]);
var state_25539__$1 = state_25539;
if(cljs.core.truth_(inst_25524)){
var statearr_25553_25602 = state_25539__$1;
(statearr_25553_25602[(1)] = (23));

} else {
var statearr_25554_25603 = state_25539__$1;
(statearr_25554_25603[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (6))){
var inst_25470 = (state_25539[(8)]);
var inst_25518 = (state_25539[(7)]);
var inst_25520 = (state_25539[(11)]);
var inst_25518__$1 = topic_fn.call(null,inst_25470);
var inst_25519 = cljs.core.deref.call(null,mults);
var inst_25520__$1 = cljs.core.get.call(null,inst_25519,inst_25518__$1);
var state_25539__$1 = (function (){var statearr_25555 = state_25539;
(statearr_25555[(7)] = inst_25518__$1);

(statearr_25555[(11)] = inst_25520__$1);

return statearr_25555;
})();
if(cljs.core.truth_(inst_25520__$1)){
var statearr_25556_25604 = state_25539__$1;
(statearr_25556_25604[(1)] = (19));

} else {
var statearr_25557_25605 = state_25539__$1;
(statearr_25557_25605[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (25))){
var inst_25529 = (state_25539[(2)]);
var state_25539__$1 = state_25539;
var statearr_25558_25606 = state_25539__$1;
(statearr_25558_25606[(2)] = inst_25529);

(statearr_25558_25606[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (17))){
var inst_25494 = (state_25539[(10)]);
var inst_25503 = cljs.core.first.call(null,inst_25494);
var inst_25504 = cljs.core.async.muxch_STAR_.call(null,inst_25503);
var inst_25505 = cljs.core.async.close_BANG_.call(null,inst_25504);
var inst_25506 = cljs.core.next.call(null,inst_25494);
var inst_25480 = inst_25506;
var inst_25481 = null;
var inst_25482 = (0);
var inst_25483 = (0);
var state_25539__$1 = (function (){var statearr_25559 = state_25539;
(statearr_25559[(12)] = inst_25482);

(statearr_25559[(13)] = inst_25480);

(statearr_25559[(14)] = inst_25505);

(statearr_25559[(15)] = inst_25483);

(statearr_25559[(16)] = inst_25481);

return statearr_25559;
})();
var statearr_25560_25607 = state_25539__$1;
(statearr_25560_25607[(2)] = null);

(statearr_25560_25607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (3))){
var inst_25537 = (state_25539[(2)]);
var state_25539__$1 = state_25539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25539__$1,inst_25537);
} else {
if((state_val_25540 === (12))){
var inst_25514 = (state_25539[(2)]);
var state_25539__$1 = state_25539;
var statearr_25561_25608 = state_25539__$1;
(statearr_25561_25608[(2)] = inst_25514);

(statearr_25561_25608[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (2))){
var state_25539__$1 = state_25539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25539__$1,(4),ch);
} else {
if((state_val_25540 === (23))){
var state_25539__$1 = state_25539;
var statearr_25562_25609 = state_25539__$1;
(statearr_25562_25609[(2)] = null);

(statearr_25562_25609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (19))){
var inst_25470 = (state_25539[(8)]);
var inst_25520 = (state_25539[(11)]);
var inst_25522 = cljs.core.async.muxch_STAR_.call(null,inst_25520);
var state_25539__$1 = state_25539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25539__$1,(22),inst_25522,inst_25470);
} else {
if((state_val_25540 === (11))){
var inst_25494 = (state_25539[(10)]);
var inst_25480 = (state_25539[(13)]);
var inst_25494__$1 = cljs.core.seq.call(null,inst_25480);
var state_25539__$1 = (function (){var statearr_25563 = state_25539;
(statearr_25563[(10)] = inst_25494__$1);

return statearr_25563;
})();
if(inst_25494__$1){
var statearr_25564_25610 = state_25539__$1;
(statearr_25564_25610[(1)] = (13));

} else {
var statearr_25565_25611 = state_25539__$1;
(statearr_25565_25611[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (9))){
var inst_25516 = (state_25539[(2)]);
var state_25539__$1 = state_25539;
var statearr_25566_25612 = state_25539__$1;
(statearr_25566_25612[(2)] = inst_25516);

(statearr_25566_25612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (5))){
var inst_25477 = cljs.core.deref.call(null,mults);
var inst_25478 = cljs.core.vals.call(null,inst_25477);
var inst_25479 = cljs.core.seq.call(null,inst_25478);
var inst_25480 = inst_25479;
var inst_25481 = null;
var inst_25482 = (0);
var inst_25483 = (0);
var state_25539__$1 = (function (){var statearr_25567 = state_25539;
(statearr_25567[(12)] = inst_25482);

(statearr_25567[(13)] = inst_25480);

(statearr_25567[(15)] = inst_25483);

(statearr_25567[(16)] = inst_25481);

return statearr_25567;
})();
var statearr_25568_25613 = state_25539__$1;
(statearr_25568_25613[(2)] = null);

(statearr_25568_25613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (14))){
var state_25539__$1 = state_25539;
var statearr_25572_25614 = state_25539__$1;
(statearr_25572_25614[(2)] = null);

(statearr_25572_25614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (16))){
var inst_25494 = (state_25539[(10)]);
var inst_25498 = cljs.core.chunk_first.call(null,inst_25494);
var inst_25499 = cljs.core.chunk_rest.call(null,inst_25494);
var inst_25500 = cljs.core.count.call(null,inst_25498);
var inst_25480 = inst_25499;
var inst_25481 = inst_25498;
var inst_25482 = inst_25500;
var inst_25483 = (0);
var state_25539__$1 = (function (){var statearr_25573 = state_25539;
(statearr_25573[(12)] = inst_25482);

(statearr_25573[(13)] = inst_25480);

(statearr_25573[(15)] = inst_25483);

(statearr_25573[(16)] = inst_25481);

return statearr_25573;
})();
var statearr_25574_25615 = state_25539__$1;
(statearr_25574_25615[(2)] = null);

(statearr_25574_25615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (10))){
var inst_25482 = (state_25539[(12)]);
var inst_25480 = (state_25539[(13)]);
var inst_25483 = (state_25539[(15)]);
var inst_25481 = (state_25539[(16)]);
var inst_25488 = cljs.core._nth.call(null,inst_25481,inst_25483);
var inst_25489 = cljs.core.async.muxch_STAR_.call(null,inst_25488);
var inst_25490 = cljs.core.async.close_BANG_.call(null,inst_25489);
var inst_25491 = (inst_25483 + (1));
var tmp25569 = inst_25482;
var tmp25570 = inst_25480;
var tmp25571 = inst_25481;
var inst_25480__$1 = tmp25570;
var inst_25481__$1 = tmp25571;
var inst_25482__$1 = tmp25569;
var inst_25483__$1 = inst_25491;
var state_25539__$1 = (function (){var statearr_25575 = state_25539;
(statearr_25575[(12)] = inst_25482__$1);

(statearr_25575[(13)] = inst_25480__$1);

(statearr_25575[(17)] = inst_25490);

(statearr_25575[(15)] = inst_25483__$1);

(statearr_25575[(16)] = inst_25481__$1);

return statearr_25575;
})();
var statearr_25576_25616 = state_25539__$1;
(statearr_25576_25616[(2)] = null);

(statearr_25576_25616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (18))){
var inst_25509 = (state_25539[(2)]);
var state_25539__$1 = state_25539;
var statearr_25577_25617 = state_25539__$1;
(statearr_25577_25617[(2)] = inst_25509);

(statearr_25577_25617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25540 === (8))){
var inst_25482 = (state_25539[(12)]);
var inst_25483 = (state_25539[(15)]);
var inst_25485 = (inst_25483 < inst_25482);
var inst_25486 = inst_25485;
var state_25539__$1 = state_25539;
if(cljs.core.truth_(inst_25486)){
var statearr_25578_25618 = state_25539__$1;
(statearr_25578_25618[(1)] = (10));

} else {
var statearr_25579_25619 = state_25539__$1;
(statearr_25579_25619[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__23672__auto___25591,mults,ensure_mult,p))
;
return ((function (switch__23560__auto__,c__23672__auto___25591,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23561__auto__ = null;
var cljs$core$async$state_machine__23561__auto____0 = (function (){
var statearr_25583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25583[(0)] = cljs$core$async$state_machine__23561__auto__);

(statearr_25583[(1)] = (1));

return statearr_25583;
});
var cljs$core$async$state_machine__23561__auto____1 = (function (state_25539){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_25539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e25584){if((e25584 instanceof Object)){
var ex__23564__auto__ = e25584;
var statearr_25585_25620 = state_25539;
(statearr_25585_25620[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25621 = state_25539;
state_25539 = G__25621;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$state_machine__23561__auto__ = function(state_25539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23561__auto____1.call(this,state_25539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23561__auto____0;
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23561__auto____1;
return cljs$core$async$state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___25591,mults,ensure_mult,p))
})();
var state__23674__auto__ = (function (){var statearr_25586 = f__23673__auto__.call(null);
(statearr_25586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___25591);

return statearr_25586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___25591,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25622 = [];
var len__21524__auto___25625 = arguments.length;
var i__21525__auto___25626 = (0);
while(true){
if((i__21525__auto___25626 < len__21524__auto___25625)){
args25622.push((arguments[i__21525__auto___25626]));

var G__25627 = (i__21525__auto___25626 + (1));
i__21525__auto___25626 = G__25627;
continue;
} else {
}
break;
}

var G__25624 = args25622.length;
switch (G__25624) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25622.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25629 = [];
var len__21524__auto___25632 = arguments.length;
var i__21525__auto___25633 = (0);
while(true){
if((i__21525__auto___25633 < len__21524__auto___25632)){
args25629.push((arguments[i__21525__auto___25633]));

var G__25634 = (i__21525__auto___25633 + (1));
i__21525__auto___25633 = G__25634;
continue;
} else {
}
break;
}

var G__25631 = args25629.length;
switch (G__25631) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25629.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args25636 = [];
var len__21524__auto___25707 = arguments.length;
var i__21525__auto___25708 = (0);
while(true){
if((i__21525__auto___25708 < len__21524__auto___25707)){
args25636.push((arguments[i__21525__auto___25708]));

var G__25709 = (i__21525__auto___25708 + (1));
i__21525__auto___25708 = G__25709;
continue;
} else {
}
break;
}

var G__25638 = args25636.length;
switch (G__25638) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25636.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23672__auto___25711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___25711,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___25711,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25677){
var state_val_25678 = (state_25677[(1)]);
if((state_val_25678 === (7))){
var state_25677__$1 = state_25677;
var statearr_25679_25712 = state_25677__$1;
(statearr_25679_25712[(2)] = null);

(statearr_25679_25712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (1))){
var state_25677__$1 = state_25677;
var statearr_25680_25713 = state_25677__$1;
(statearr_25680_25713[(2)] = null);

(statearr_25680_25713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (4))){
var inst_25641 = (state_25677[(7)]);
var inst_25643 = (inst_25641 < cnt);
var state_25677__$1 = state_25677;
if(cljs.core.truth_(inst_25643)){
var statearr_25681_25714 = state_25677__$1;
(statearr_25681_25714[(1)] = (6));

} else {
var statearr_25682_25715 = state_25677__$1;
(statearr_25682_25715[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (15))){
var inst_25673 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
var statearr_25683_25716 = state_25677__$1;
(statearr_25683_25716[(2)] = inst_25673);

(statearr_25683_25716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (13))){
var inst_25666 = cljs.core.async.close_BANG_.call(null,out);
var state_25677__$1 = state_25677;
var statearr_25684_25717 = state_25677__$1;
(statearr_25684_25717[(2)] = inst_25666);

(statearr_25684_25717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (6))){
var state_25677__$1 = state_25677;
var statearr_25685_25718 = state_25677__$1;
(statearr_25685_25718[(2)] = null);

(statearr_25685_25718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (3))){
var inst_25675 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25677__$1,inst_25675);
} else {
if((state_val_25678 === (12))){
var inst_25663 = (state_25677[(8)]);
var inst_25663__$1 = (state_25677[(2)]);
var inst_25664 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25663__$1);
var state_25677__$1 = (function (){var statearr_25686 = state_25677;
(statearr_25686[(8)] = inst_25663__$1);

return statearr_25686;
})();
if(cljs.core.truth_(inst_25664)){
var statearr_25687_25719 = state_25677__$1;
(statearr_25687_25719[(1)] = (13));

} else {
var statearr_25688_25720 = state_25677__$1;
(statearr_25688_25720[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (2))){
var inst_25640 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25641 = (0);
var state_25677__$1 = (function (){var statearr_25689 = state_25677;
(statearr_25689[(9)] = inst_25640);

(statearr_25689[(7)] = inst_25641);

return statearr_25689;
})();
var statearr_25690_25721 = state_25677__$1;
(statearr_25690_25721[(2)] = null);

(statearr_25690_25721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (11))){
var inst_25641 = (state_25677[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25677,(10),Object,null,(9));
var inst_25650 = chs__$1.call(null,inst_25641);
var inst_25651 = done.call(null,inst_25641);
var inst_25652 = cljs.core.async.take_BANG_.call(null,inst_25650,inst_25651);
var state_25677__$1 = state_25677;
var statearr_25691_25722 = state_25677__$1;
(statearr_25691_25722[(2)] = inst_25652);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25677__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (9))){
var inst_25641 = (state_25677[(7)]);
var inst_25654 = (state_25677[(2)]);
var inst_25655 = (inst_25641 + (1));
var inst_25641__$1 = inst_25655;
var state_25677__$1 = (function (){var statearr_25692 = state_25677;
(statearr_25692[(7)] = inst_25641__$1);

(statearr_25692[(10)] = inst_25654);

return statearr_25692;
})();
var statearr_25693_25723 = state_25677__$1;
(statearr_25693_25723[(2)] = null);

(statearr_25693_25723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (5))){
var inst_25661 = (state_25677[(2)]);
var state_25677__$1 = (function (){var statearr_25694 = state_25677;
(statearr_25694[(11)] = inst_25661);

return statearr_25694;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25677__$1,(12),dchan);
} else {
if((state_val_25678 === (14))){
var inst_25663 = (state_25677[(8)]);
var inst_25668 = cljs.core.apply.call(null,f,inst_25663);
var state_25677__$1 = state_25677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25677__$1,(16),out,inst_25668);
} else {
if((state_val_25678 === (16))){
var inst_25670 = (state_25677[(2)]);
var state_25677__$1 = (function (){var statearr_25695 = state_25677;
(statearr_25695[(12)] = inst_25670);

return statearr_25695;
})();
var statearr_25696_25724 = state_25677__$1;
(statearr_25696_25724[(2)] = null);

(statearr_25696_25724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (10))){
var inst_25645 = (state_25677[(2)]);
var inst_25646 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25677__$1 = (function (){var statearr_25697 = state_25677;
(statearr_25697[(13)] = inst_25645);

return statearr_25697;
})();
var statearr_25698_25725 = state_25677__$1;
(statearr_25698_25725[(2)] = inst_25646);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25677__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (8))){
var inst_25659 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
var statearr_25699_25726 = state_25677__$1;
(statearr_25699_25726[(2)] = inst_25659);

(statearr_25699_25726[(1)] = (5));


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
});})(c__23672__auto___25711,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23560__auto__,c__23672__auto___25711,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23561__auto__ = null;
var cljs$core$async$state_machine__23561__auto____0 = (function (){
var statearr_25703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25703[(0)] = cljs$core$async$state_machine__23561__auto__);

(statearr_25703[(1)] = (1));

return statearr_25703;
});
var cljs$core$async$state_machine__23561__auto____1 = (function (state_25677){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_25677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e25704){if((e25704 instanceof Object)){
var ex__23564__auto__ = e25704;
var statearr_25705_25727 = state_25677;
(statearr_25705_25727[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25728 = state_25677;
state_25677 = G__25728;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$state_machine__23561__auto__ = function(state_25677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23561__auto____1.call(this,state_25677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23561__auto____0;
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23561__auto____1;
return cljs$core$async$state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___25711,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23674__auto__ = (function (){var statearr_25706 = f__23673__auto__.call(null);
(statearr_25706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___25711);

return statearr_25706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___25711,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25730 = [];
var len__21524__auto___25788 = arguments.length;
var i__21525__auto___25789 = (0);
while(true){
if((i__21525__auto___25789 < len__21524__auto___25788)){
args25730.push((arguments[i__21525__auto___25789]));

var G__25790 = (i__21525__auto___25789 + (1));
i__21525__auto___25789 = G__25790;
continue;
} else {
}
break;
}

var G__25732 = args25730.length;
switch (G__25732) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25730.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23672__auto___25792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___25792,out){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___25792,out){
return (function (state_25764){
var state_val_25765 = (state_25764[(1)]);
if((state_val_25765 === (7))){
var inst_25743 = (state_25764[(7)]);
var inst_25744 = (state_25764[(8)]);
var inst_25743__$1 = (state_25764[(2)]);
var inst_25744__$1 = cljs.core.nth.call(null,inst_25743__$1,(0),null);
var inst_25745 = cljs.core.nth.call(null,inst_25743__$1,(1),null);
var inst_25746 = (inst_25744__$1 == null);
var state_25764__$1 = (function (){var statearr_25766 = state_25764;
(statearr_25766[(7)] = inst_25743__$1);

(statearr_25766[(8)] = inst_25744__$1);

(statearr_25766[(9)] = inst_25745);

return statearr_25766;
})();
if(cljs.core.truth_(inst_25746)){
var statearr_25767_25793 = state_25764__$1;
(statearr_25767_25793[(1)] = (8));

} else {
var statearr_25768_25794 = state_25764__$1;
(statearr_25768_25794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (1))){
var inst_25733 = cljs.core.vec.call(null,chs);
var inst_25734 = inst_25733;
var state_25764__$1 = (function (){var statearr_25769 = state_25764;
(statearr_25769[(10)] = inst_25734);

return statearr_25769;
})();
var statearr_25770_25795 = state_25764__$1;
(statearr_25770_25795[(2)] = null);

(statearr_25770_25795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (4))){
var inst_25734 = (state_25764[(10)]);
var state_25764__$1 = state_25764;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25764__$1,(7),inst_25734);
} else {
if((state_val_25765 === (6))){
var inst_25760 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
var statearr_25771_25796 = state_25764__$1;
(statearr_25771_25796[(2)] = inst_25760);

(statearr_25771_25796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (3))){
var inst_25762 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25764__$1,inst_25762);
} else {
if((state_val_25765 === (2))){
var inst_25734 = (state_25764[(10)]);
var inst_25736 = cljs.core.count.call(null,inst_25734);
var inst_25737 = (inst_25736 > (0));
var state_25764__$1 = state_25764;
if(cljs.core.truth_(inst_25737)){
var statearr_25773_25797 = state_25764__$1;
(statearr_25773_25797[(1)] = (4));

} else {
var statearr_25774_25798 = state_25764__$1;
(statearr_25774_25798[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (11))){
var inst_25734 = (state_25764[(10)]);
var inst_25753 = (state_25764[(2)]);
var tmp25772 = inst_25734;
var inst_25734__$1 = tmp25772;
var state_25764__$1 = (function (){var statearr_25775 = state_25764;
(statearr_25775[(11)] = inst_25753);

(statearr_25775[(10)] = inst_25734__$1);

return statearr_25775;
})();
var statearr_25776_25799 = state_25764__$1;
(statearr_25776_25799[(2)] = null);

(statearr_25776_25799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (9))){
var inst_25744 = (state_25764[(8)]);
var state_25764__$1 = state_25764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25764__$1,(11),out,inst_25744);
} else {
if((state_val_25765 === (5))){
var inst_25758 = cljs.core.async.close_BANG_.call(null,out);
var state_25764__$1 = state_25764;
var statearr_25777_25800 = state_25764__$1;
(statearr_25777_25800[(2)] = inst_25758);

(statearr_25777_25800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (10))){
var inst_25756 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
var statearr_25778_25801 = state_25764__$1;
(statearr_25778_25801[(2)] = inst_25756);

(statearr_25778_25801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (8))){
var inst_25743 = (state_25764[(7)]);
var inst_25744 = (state_25764[(8)]);
var inst_25745 = (state_25764[(9)]);
var inst_25734 = (state_25764[(10)]);
var inst_25748 = (function (){var cs = inst_25734;
var vec__25739 = inst_25743;
var v = inst_25744;
var c = inst_25745;
return ((function (cs,vec__25739,v,c,inst_25743,inst_25744,inst_25745,inst_25734,state_val_25765,c__23672__auto___25792,out){
return (function (p1__25729_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25729_SHARP_);
});
;})(cs,vec__25739,v,c,inst_25743,inst_25744,inst_25745,inst_25734,state_val_25765,c__23672__auto___25792,out))
})();
var inst_25749 = cljs.core.filterv.call(null,inst_25748,inst_25734);
var inst_25734__$1 = inst_25749;
var state_25764__$1 = (function (){var statearr_25779 = state_25764;
(statearr_25779[(10)] = inst_25734__$1);

return statearr_25779;
})();
var statearr_25780_25802 = state_25764__$1;
(statearr_25780_25802[(2)] = null);

(statearr_25780_25802[(1)] = (2));


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
});})(c__23672__auto___25792,out))
;
return ((function (switch__23560__auto__,c__23672__auto___25792,out){
return (function() {
var cljs$core$async$state_machine__23561__auto__ = null;
var cljs$core$async$state_machine__23561__auto____0 = (function (){
var statearr_25784 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25784[(0)] = cljs$core$async$state_machine__23561__auto__);

(statearr_25784[(1)] = (1));

return statearr_25784;
});
var cljs$core$async$state_machine__23561__auto____1 = (function (state_25764){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_25764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e25785){if((e25785 instanceof Object)){
var ex__23564__auto__ = e25785;
var statearr_25786_25803 = state_25764;
(statearr_25786_25803[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25804 = state_25764;
state_25764 = G__25804;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$state_machine__23561__auto__ = function(state_25764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23561__auto____1.call(this,state_25764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23561__auto____0;
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23561__auto____1;
return cljs$core$async$state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___25792,out))
})();
var state__23674__auto__ = (function (){var statearr_25787 = f__23673__auto__.call(null);
(statearr_25787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___25792);

return statearr_25787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___25792,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25805 = [];
var len__21524__auto___25854 = arguments.length;
var i__21525__auto___25855 = (0);
while(true){
if((i__21525__auto___25855 < len__21524__auto___25854)){
args25805.push((arguments[i__21525__auto___25855]));

var G__25856 = (i__21525__auto___25855 + (1));
i__21525__auto___25855 = G__25856;
continue;
} else {
}
break;
}

var G__25807 = args25805.length;
switch (G__25807) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25805.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23672__auto___25858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___25858,out){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___25858,out){
return (function (state_25831){
var state_val_25832 = (state_25831[(1)]);
if((state_val_25832 === (7))){
var inst_25813 = (state_25831[(7)]);
var inst_25813__$1 = (state_25831[(2)]);
var inst_25814 = (inst_25813__$1 == null);
var inst_25815 = cljs.core.not.call(null,inst_25814);
var state_25831__$1 = (function (){var statearr_25833 = state_25831;
(statearr_25833[(7)] = inst_25813__$1);

return statearr_25833;
})();
if(inst_25815){
var statearr_25834_25859 = state_25831__$1;
(statearr_25834_25859[(1)] = (8));

} else {
var statearr_25835_25860 = state_25831__$1;
(statearr_25835_25860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25832 === (1))){
var inst_25808 = (0);
var state_25831__$1 = (function (){var statearr_25836 = state_25831;
(statearr_25836[(8)] = inst_25808);

return statearr_25836;
})();
var statearr_25837_25861 = state_25831__$1;
(statearr_25837_25861[(2)] = null);

(statearr_25837_25861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25832 === (4))){
var state_25831__$1 = state_25831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25831__$1,(7),ch);
} else {
if((state_val_25832 === (6))){
var inst_25826 = (state_25831[(2)]);
var state_25831__$1 = state_25831;
var statearr_25838_25862 = state_25831__$1;
(statearr_25838_25862[(2)] = inst_25826);

(statearr_25838_25862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25832 === (3))){
var inst_25828 = (state_25831[(2)]);
var inst_25829 = cljs.core.async.close_BANG_.call(null,out);
var state_25831__$1 = (function (){var statearr_25839 = state_25831;
(statearr_25839[(9)] = inst_25828);

return statearr_25839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25831__$1,inst_25829);
} else {
if((state_val_25832 === (2))){
var inst_25808 = (state_25831[(8)]);
var inst_25810 = (inst_25808 < n);
var state_25831__$1 = state_25831;
if(cljs.core.truth_(inst_25810)){
var statearr_25840_25863 = state_25831__$1;
(statearr_25840_25863[(1)] = (4));

} else {
var statearr_25841_25864 = state_25831__$1;
(statearr_25841_25864[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25832 === (11))){
var inst_25808 = (state_25831[(8)]);
var inst_25818 = (state_25831[(2)]);
var inst_25819 = (inst_25808 + (1));
var inst_25808__$1 = inst_25819;
var state_25831__$1 = (function (){var statearr_25842 = state_25831;
(statearr_25842[(10)] = inst_25818);

(statearr_25842[(8)] = inst_25808__$1);

return statearr_25842;
})();
var statearr_25843_25865 = state_25831__$1;
(statearr_25843_25865[(2)] = null);

(statearr_25843_25865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25832 === (9))){
var state_25831__$1 = state_25831;
var statearr_25844_25866 = state_25831__$1;
(statearr_25844_25866[(2)] = null);

(statearr_25844_25866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25832 === (5))){
var state_25831__$1 = state_25831;
var statearr_25845_25867 = state_25831__$1;
(statearr_25845_25867[(2)] = null);

(statearr_25845_25867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25832 === (10))){
var inst_25823 = (state_25831[(2)]);
var state_25831__$1 = state_25831;
var statearr_25846_25868 = state_25831__$1;
(statearr_25846_25868[(2)] = inst_25823);

(statearr_25846_25868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25832 === (8))){
var inst_25813 = (state_25831[(7)]);
var state_25831__$1 = state_25831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25831__$1,(11),out,inst_25813);
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
});})(c__23672__auto___25858,out))
;
return ((function (switch__23560__auto__,c__23672__auto___25858,out){
return (function() {
var cljs$core$async$state_machine__23561__auto__ = null;
var cljs$core$async$state_machine__23561__auto____0 = (function (){
var statearr_25850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25850[(0)] = cljs$core$async$state_machine__23561__auto__);

(statearr_25850[(1)] = (1));

return statearr_25850;
});
var cljs$core$async$state_machine__23561__auto____1 = (function (state_25831){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_25831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e25851){if((e25851 instanceof Object)){
var ex__23564__auto__ = e25851;
var statearr_25852_25869 = state_25831;
(statearr_25852_25869[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25870 = state_25831;
state_25831 = G__25870;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$state_machine__23561__auto__ = function(state_25831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23561__auto____1.call(this,state_25831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23561__auto____0;
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23561__auto____1;
return cljs$core$async$state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___25858,out))
})();
var state__23674__auto__ = (function (){var statearr_25853 = f__23673__auto__.call(null);
(statearr_25853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___25858);

return statearr_25853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___25858,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25878 = (function (map_LT_,f,ch,meta25879){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25879 = meta25879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25880,meta25879__$1){
var self__ = this;
var _25880__$1 = this;
return (new cljs.core.async.t_cljs$core$async25878(self__.map_LT_,self__.f,self__.ch,meta25879__$1));
});

cljs.core.async.t_cljs$core$async25878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25880){
var self__ = this;
var _25880__$1 = this;
return self__.meta25879;
});

cljs.core.async.t_cljs$core$async25878.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25878.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25878.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25878.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25878.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25881 = (function (map_LT_,f,ch,meta25879,_,fn1,meta25882){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25879 = meta25879;
this._ = _;
this.fn1 = fn1;
this.meta25882 = meta25882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25883,meta25882__$1){
var self__ = this;
var _25883__$1 = this;
return (new cljs.core.async.t_cljs$core$async25881(self__.map_LT_,self__.f,self__.ch,self__.meta25879,self__._,self__.fn1,meta25882__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25883){
var self__ = this;
var _25883__$1 = this;
return self__.meta25882;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25871_SHARP_){
return f1.call(null,(((p1__25871_SHARP_ == null))?null:self__.f.call(null,p1__25871_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25881.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25879","meta25879",656977919,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25878","cljs.core.async/t_cljs$core$async25878",567869019,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25882","meta25882",-1411646807,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25881";

cljs.core.async.t_cljs$core$async25881.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__21055__auto__,writer__21056__auto__,opt__21057__auto__){
return cljs.core._write.call(null,writer__21056__auto__,"cljs.core.async/t_cljs$core$async25881");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25881 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25881(map_LT___$1,f__$1,ch__$1,meta25879__$1,___$2,fn1__$1,meta25882){
return (new cljs.core.async.t_cljs$core$async25881(map_LT___$1,f__$1,ch__$1,meta25879__$1,___$2,fn1__$1,meta25882));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25881(self__.map_LT_,self__.f,self__.ch,self__.meta25879,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20437__auto__ = ret;
if(cljs.core.truth_(and__20437__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20437__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25878.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25878.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25879","meta25879",656977919,null)], null);
});

cljs.core.async.t_cljs$core$async25878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25878";

cljs.core.async.t_cljs$core$async25878.cljs$lang$ctorPrWriter = (function (this__21055__auto__,writer__21056__auto__,opt__21057__auto__){
return cljs.core._write.call(null,writer__21056__auto__,"cljs.core.async/t_cljs$core$async25878");
});

cljs.core.async.__GT_t_cljs$core$async25878 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25878(map_LT___$1,f__$1,ch__$1,meta25879){
return (new cljs.core.async.t_cljs$core$async25878(map_LT___$1,f__$1,ch__$1,meta25879));
});

}

return (new cljs.core.async.t_cljs$core$async25878(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25887 = (function (map_GT_,f,ch,meta25888){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25888 = meta25888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25889,meta25888__$1){
var self__ = this;
var _25889__$1 = this;
return (new cljs.core.async.t_cljs$core$async25887(self__.map_GT_,self__.f,self__.ch,meta25888__$1));
});

cljs.core.async.t_cljs$core$async25887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25889){
var self__ = this;
var _25889__$1 = this;
return self__.meta25888;
});

cljs.core.async.t_cljs$core$async25887.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25887.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25887.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25887.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25887.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25887.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25888","meta25888",-440717989,null)], null);
});

cljs.core.async.t_cljs$core$async25887.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25887";

cljs.core.async.t_cljs$core$async25887.cljs$lang$ctorPrWriter = (function (this__21055__auto__,writer__21056__auto__,opt__21057__auto__){
return cljs.core._write.call(null,writer__21056__auto__,"cljs.core.async/t_cljs$core$async25887");
});

cljs.core.async.__GT_t_cljs$core$async25887 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25887(map_GT___$1,f__$1,ch__$1,meta25888){
return (new cljs.core.async.t_cljs$core$async25887(map_GT___$1,f__$1,ch__$1,meta25888));
});

}

return (new cljs.core.async.t_cljs$core$async25887(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25893 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25893 = (function (filter_GT_,p,ch,meta25894){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25894 = meta25894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25895,meta25894__$1){
var self__ = this;
var _25895__$1 = this;
return (new cljs.core.async.t_cljs$core$async25893(self__.filter_GT_,self__.p,self__.ch,meta25894__$1));
});

cljs.core.async.t_cljs$core$async25893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25895){
var self__ = this;
var _25895__$1 = this;
return self__.meta25894;
});

cljs.core.async.t_cljs$core$async25893.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25893.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25893.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25893.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25893.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25893.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25893.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25894","meta25894",-158935750,null)], null);
});

cljs.core.async.t_cljs$core$async25893.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25893";

cljs.core.async.t_cljs$core$async25893.cljs$lang$ctorPrWriter = (function (this__21055__auto__,writer__21056__auto__,opt__21057__auto__){
return cljs.core._write.call(null,writer__21056__auto__,"cljs.core.async/t_cljs$core$async25893");
});

cljs.core.async.__GT_t_cljs$core$async25893 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25893(filter_GT___$1,p__$1,ch__$1,meta25894){
return (new cljs.core.async.t_cljs$core$async25893(filter_GT___$1,p__$1,ch__$1,meta25894));
});

}

return (new cljs.core.async.t_cljs$core$async25893(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args25896 = [];
var len__21524__auto___25940 = arguments.length;
var i__21525__auto___25941 = (0);
while(true){
if((i__21525__auto___25941 < len__21524__auto___25940)){
args25896.push((arguments[i__21525__auto___25941]));

var G__25942 = (i__21525__auto___25941 + (1));
i__21525__auto___25941 = G__25942;
continue;
} else {
}
break;
}

var G__25898 = args25896.length;
switch (G__25898) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25896.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23672__auto___25944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___25944,out){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___25944,out){
return (function (state_25919){
var state_val_25920 = (state_25919[(1)]);
if((state_val_25920 === (7))){
var inst_25915 = (state_25919[(2)]);
var state_25919__$1 = state_25919;
var statearr_25921_25945 = state_25919__$1;
(statearr_25921_25945[(2)] = inst_25915);

(statearr_25921_25945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (1))){
var state_25919__$1 = state_25919;
var statearr_25922_25946 = state_25919__$1;
(statearr_25922_25946[(2)] = null);

(statearr_25922_25946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (4))){
var inst_25901 = (state_25919[(7)]);
var inst_25901__$1 = (state_25919[(2)]);
var inst_25902 = (inst_25901__$1 == null);
var state_25919__$1 = (function (){var statearr_25923 = state_25919;
(statearr_25923[(7)] = inst_25901__$1);

return statearr_25923;
})();
if(cljs.core.truth_(inst_25902)){
var statearr_25924_25947 = state_25919__$1;
(statearr_25924_25947[(1)] = (5));

} else {
var statearr_25925_25948 = state_25919__$1;
(statearr_25925_25948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (6))){
var inst_25901 = (state_25919[(7)]);
var inst_25906 = p.call(null,inst_25901);
var state_25919__$1 = state_25919;
if(cljs.core.truth_(inst_25906)){
var statearr_25926_25949 = state_25919__$1;
(statearr_25926_25949[(1)] = (8));

} else {
var statearr_25927_25950 = state_25919__$1;
(statearr_25927_25950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (3))){
var inst_25917 = (state_25919[(2)]);
var state_25919__$1 = state_25919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25919__$1,inst_25917);
} else {
if((state_val_25920 === (2))){
var state_25919__$1 = state_25919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25919__$1,(4),ch);
} else {
if((state_val_25920 === (11))){
var inst_25909 = (state_25919[(2)]);
var state_25919__$1 = state_25919;
var statearr_25928_25951 = state_25919__$1;
(statearr_25928_25951[(2)] = inst_25909);

(statearr_25928_25951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (9))){
var state_25919__$1 = state_25919;
var statearr_25929_25952 = state_25919__$1;
(statearr_25929_25952[(2)] = null);

(statearr_25929_25952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (5))){
var inst_25904 = cljs.core.async.close_BANG_.call(null,out);
var state_25919__$1 = state_25919;
var statearr_25930_25953 = state_25919__$1;
(statearr_25930_25953[(2)] = inst_25904);

(statearr_25930_25953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (10))){
var inst_25912 = (state_25919[(2)]);
var state_25919__$1 = (function (){var statearr_25931 = state_25919;
(statearr_25931[(8)] = inst_25912);

return statearr_25931;
})();
var statearr_25932_25954 = state_25919__$1;
(statearr_25932_25954[(2)] = null);

(statearr_25932_25954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (8))){
var inst_25901 = (state_25919[(7)]);
var state_25919__$1 = state_25919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25919__$1,(11),out,inst_25901);
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
});})(c__23672__auto___25944,out))
;
return ((function (switch__23560__auto__,c__23672__auto___25944,out){
return (function() {
var cljs$core$async$state_machine__23561__auto__ = null;
var cljs$core$async$state_machine__23561__auto____0 = (function (){
var statearr_25936 = [null,null,null,null,null,null,null,null,null];
(statearr_25936[(0)] = cljs$core$async$state_machine__23561__auto__);

(statearr_25936[(1)] = (1));

return statearr_25936;
});
var cljs$core$async$state_machine__23561__auto____1 = (function (state_25919){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_25919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e25937){if((e25937 instanceof Object)){
var ex__23564__auto__ = e25937;
var statearr_25938_25955 = state_25919;
(statearr_25938_25955[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25956 = state_25919;
state_25919 = G__25956;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$state_machine__23561__auto__ = function(state_25919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23561__auto____1.call(this,state_25919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23561__auto____0;
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23561__auto____1;
return cljs$core$async$state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___25944,out))
})();
var state__23674__auto__ = (function (){var statearr_25939 = f__23673__auto__.call(null);
(statearr_25939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___25944);

return statearr_25939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___25944,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25957 = [];
var len__21524__auto___25960 = arguments.length;
var i__21525__auto___25961 = (0);
while(true){
if((i__21525__auto___25961 < len__21524__auto___25960)){
args25957.push((arguments[i__21525__auto___25961]));

var G__25962 = (i__21525__auto___25961 + (1));
i__21525__auto___25961 = G__25962;
continue;
} else {
}
break;
}

var G__25959 = args25957.length;
switch (G__25959) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25957.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto__){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto__){
return (function (state_26129){
var state_val_26130 = (state_26129[(1)]);
if((state_val_26130 === (7))){
var inst_26125 = (state_26129[(2)]);
var state_26129__$1 = state_26129;
var statearr_26131_26172 = state_26129__$1;
(statearr_26131_26172[(2)] = inst_26125);

(statearr_26131_26172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (20))){
var inst_26095 = (state_26129[(7)]);
var inst_26106 = (state_26129[(2)]);
var inst_26107 = cljs.core.next.call(null,inst_26095);
var inst_26081 = inst_26107;
var inst_26082 = null;
var inst_26083 = (0);
var inst_26084 = (0);
var state_26129__$1 = (function (){var statearr_26132 = state_26129;
(statearr_26132[(8)] = inst_26106);

(statearr_26132[(9)] = inst_26082);

(statearr_26132[(10)] = inst_26084);

(statearr_26132[(11)] = inst_26081);

(statearr_26132[(12)] = inst_26083);

return statearr_26132;
})();
var statearr_26133_26173 = state_26129__$1;
(statearr_26133_26173[(2)] = null);

(statearr_26133_26173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (1))){
var state_26129__$1 = state_26129;
var statearr_26134_26174 = state_26129__$1;
(statearr_26134_26174[(2)] = null);

(statearr_26134_26174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (4))){
var inst_26070 = (state_26129[(13)]);
var inst_26070__$1 = (state_26129[(2)]);
var inst_26071 = (inst_26070__$1 == null);
var state_26129__$1 = (function (){var statearr_26135 = state_26129;
(statearr_26135[(13)] = inst_26070__$1);

return statearr_26135;
})();
if(cljs.core.truth_(inst_26071)){
var statearr_26136_26175 = state_26129__$1;
(statearr_26136_26175[(1)] = (5));

} else {
var statearr_26137_26176 = state_26129__$1;
(statearr_26137_26176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (15))){
var state_26129__$1 = state_26129;
var statearr_26141_26177 = state_26129__$1;
(statearr_26141_26177[(2)] = null);

(statearr_26141_26177[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (21))){
var state_26129__$1 = state_26129;
var statearr_26142_26178 = state_26129__$1;
(statearr_26142_26178[(2)] = null);

(statearr_26142_26178[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (13))){
var inst_26082 = (state_26129[(9)]);
var inst_26084 = (state_26129[(10)]);
var inst_26081 = (state_26129[(11)]);
var inst_26083 = (state_26129[(12)]);
var inst_26091 = (state_26129[(2)]);
var inst_26092 = (inst_26084 + (1));
var tmp26138 = inst_26082;
var tmp26139 = inst_26081;
var tmp26140 = inst_26083;
var inst_26081__$1 = tmp26139;
var inst_26082__$1 = tmp26138;
var inst_26083__$1 = tmp26140;
var inst_26084__$1 = inst_26092;
var state_26129__$1 = (function (){var statearr_26143 = state_26129;
(statearr_26143[(14)] = inst_26091);

(statearr_26143[(9)] = inst_26082__$1);

(statearr_26143[(10)] = inst_26084__$1);

(statearr_26143[(11)] = inst_26081__$1);

(statearr_26143[(12)] = inst_26083__$1);

return statearr_26143;
})();
var statearr_26144_26179 = state_26129__$1;
(statearr_26144_26179[(2)] = null);

(statearr_26144_26179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (22))){
var state_26129__$1 = state_26129;
var statearr_26145_26180 = state_26129__$1;
(statearr_26145_26180[(2)] = null);

(statearr_26145_26180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (6))){
var inst_26070 = (state_26129[(13)]);
var inst_26079 = f.call(null,inst_26070);
var inst_26080 = cljs.core.seq.call(null,inst_26079);
var inst_26081 = inst_26080;
var inst_26082 = null;
var inst_26083 = (0);
var inst_26084 = (0);
var state_26129__$1 = (function (){var statearr_26146 = state_26129;
(statearr_26146[(9)] = inst_26082);

(statearr_26146[(10)] = inst_26084);

(statearr_26146[(11)] = inst_26081);

(statearr_26146[(12)] = inst_26083);

return statearr_26146;
})();
var statearr_26147_26181 = state_26129__$1;
(statearr_26147_26181[(2)] = null);

(statearr_26147_26181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (17))){
var inst_26095 = (state_26129[(7)]);
var inst_26099 = cljs.core.chunk_first.call(null,inst_26095);
var inst_26100 = cljs.core.chunk_rest.call(null,inst_26095);
var inst_26101 = cljs.core.count.call(null,inst_26099);
var inst_26081 = inst_26100;
var inst_26082 = inst_26099;
var inst_26083 = inst_26101;
var inst_26084 = (0);
var state_26129__$1 = (function (){var statearr_26148 = state_26129;
(statearr_26148[(9)] = inst_26082);

(statearr_26148[(10)] = inst_26084);

(statearr_26148[(11)] = inst_26081);

(statearr_26148[(12)] = inst_26083);

return statearr_26148;
})();
var statearr_26149_26182 = state_26129__$1;
(statearr_26149_26182[(2)] = null);

(statearr_26149_26182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (3))){
var inst_26127 = (state_26129[(2)]);
var state_26129__$1 = state_26129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26129__$1,inst_26127);
} else {
if((state_val_26130 === (12))){
var inst_26115 = (state_26129[(2)]);
var state_26129__$1 = state_26129;
var statearr_26150_26183 = state_26129__$1;
(statearr_26150_26183[(2)] = inst_26115);

(statearr_26150_26183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (2))){
var state_26129__$1 = state_26129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26129__$1,(4),in$);
} else {
if((state_val_26130 === (23))){
var inst_26123 = (state_26129[(2)]);
var state_26129__$1 = state_26129;
var statearr_26151_26184 = state_26129__$1;
(statearr_26151_26184[(2)] = inst_26123);

(statearr_26151_26184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (19))){
var inst_26110 = (state_26129[(2)]);
var state_26129__$1 = state_26129;
var statearr_26152_26185 = state_26129__$1;
(statearr_26152_26185[(2)] = inst_26110);

(statearr_26152_26185[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (11))){
var inst_26095 = (state_26129[(7)]);
var inst_26081 = (state_26129[(11)]);
var inst_26095__$1 = cljs.core.seq.call(null,inst_26081);
var state_26129__$1 = (function (){var statearr_26153 = state_26129;
(statearr_26153[(7)] = inst_26095__$1);

return statearr_26153;
})();
if(inst_26095__$1){
var statearr_26154_26186 = state_26129__$1;
(statearr_26154_26186[(1)] = (14));

} else {
var statearr_26155_26187 = state_26129__$1;
(statearr_26155_26187[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (9))){
var inst_26117 = (state_26129[(2)]);
var inst_26118 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26129__$1 = (function (){var statearr_26156 = state_26129;
(statearr_26156[(15)] = inst_26117);

return statearr_26156;
})();
if(cljs.core.truth_(inst_26118)){
var statearr_26157_26188 = state_26129__$1;
(statearr_26157_26188[(1)] = (21));

} else {
var statearr_26158_26189 = state_26129__$1;
(statearr_26158_26189[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (5))){
var inst_26073 = cljs.core.async.close_BANG_.call(null,out);
var state_26129__$1 = state_26129;
var statearr_26159_26190 = state_26129__$1;
(statearr_26159_26190[(2)] = inst_26073);

(statearr_26159_26190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (14))){
var inst_26095 = (state_26129[(7)]);
var inst_26097 = cljs.core.chunked_seq_QMARK_.call(null,inst_26095);
var state_26129__$1 = state_26129;
if(inst_26097){
var statearr_26160_26191 = state_26129__$1;
(statearr_26160_26191[(1)] = (17));

} else {
var statearr_26161_26192 = state_26129__$1;
(statearr_26161_26192[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (16))){
var inst_26113 = (state_26129[(2)]);
var state_26129__$1 = state_26129;
var statearr_26162_26193 = state_26129__$1;
(statearr_26162_26193[(2)] = inst_26113);

(statearr_26162_26193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (10))){
var inst_26082 = (state_26129[(9)]);
var inst_26084 = (state_26129[(10)]);
var inst_26089 = cljs.core._nth.call(null,inst_26082,inst_26084);
var state_26129__$1 = state_26129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26129__$1,(13),out,inst_26089);
} else {
if((state_val_26130 === (18))){
var inst_26095 = (state_26129[(7)]);
var inst_26104 = cljs.core.first.call(null,inst_26095);
var state_26129__$1 = state_26129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26129__$1,(20),out,inst_26104);
} else {
if((state_val_26130 === (8))){
var inst_26084 = (state_26129[(10)]);
var inst_26083 = (state_26129[(12)]);
var inst_26086 = (inst_26084 < inst_26083);
var inst_26087 = inst_26086;
var state_26129__$1 = state_26129;
if(cljs.core.truth_(inst_26087)){
var statearr_26163_26194 = state_26129__$1;
(statearr_26163_26194[(1)] = (10));

} else {
var statearr_26164_26195 = state_26129__$1;
(statearr_26164_26195[(1)] = (11));

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
}
}
}
}
}
}
});})(c__23672__auto__))
;
return ((function (switch__23560__auto__,c__23672__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23561__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23561__auto____0 = (function (){
var statearr_26168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26168[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23561__auto__);

(statearr_26168[(1)] = (1));

return statearr_26168;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23561__auto____1 = (function (state_26129){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_26129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e26169){if((e26169 instanceof Object)){
var ex__23564__auto__ = e26169;
var statearr_26170_26196 = state_26129;
(statearr_26170_26196[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26197 = state_26129;
state_26129 = G__26197;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23561__auto__ = function(state_26129){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23561__auto____1.call(this,state_26129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23561__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23561__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto__))
})();
var state__23674__auto__ = (function (){var statearr_26171 = f__23673__auto__.call(null);
(statearr_26171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto__);

return statearr_26171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto__))
);

return c__23672__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26198 = [];
var len__21524__auto___26201 = arguments.length;
var i__21525__auto___26202 = (0);
while(true){
if((i__21525__auto___26202 < len__21524__auto___26201)){
args26198.push((arguments[i__21525__auto___26202]));

var G__26203 = (i__21525__auto___26202 + (1));
i__21525__auto___26202 = G__26203;
continue;
} else {
}
break;
}

var G__26200 = args26198.length;
switch (G__26200) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26198.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26205 = [];
var len__21524__auto___26208 = arguments.length;
var i__21525__auto___26209 = (0);
while(true){
if((i__21525__auto___26209 < len__21524__auto___26208)){
args26205.push((arguments[i__21525__auto___26209]));

var G__26210 = (i__21525__auto___26209 + (1));
i__21525__auto___26209 = G__26210;
continue;
} else {
}
break;
}

var G__26207 = args26205.length;
switch (G__26207) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26205.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26212 = [];
var len__21524__auto___26263 = arguments.length;
var i__21525__auto___26264 = (0);
while(true){
if((i__21525__auto___26264 < len__21524__auto___26263)){
args26212.push((arguments[i__21525__auto___26264]));

var G__26265 = (i__21525__auto___26264 + (1));
i__21525__auto___26264 = G__26265;
continue;
} else {
}
break;
}

var G__26214 = args26212.length;
switch (G__26214) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26212.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23672__auto___26267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___26267,out){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___26267,out){
return (function (state_26238){
var state_val_26239 = (state_26238[(1)]);
if((state_val_26239 === (7))){
var inst_26233 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
var statearr_26240_26268 = state_26238__$1;
(statearr_26240_26268[(2)] = inst_26233);

(statearr_26240_26268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (1))){
var inst_26215 = null;
var state_26238__$1 = (function (){var statearr_26241 = state_26238;
(statearr_26241[(7)] = inst_26215);

return statearr_26241;
})();
var statearr_26242_26269 = state_26238__$1;
(statearr_26242_26269[(2)] = null);

(statearr_26242_26269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (4))){
var inst_26218 = (state_26238[(8)]);
var inst_26218__$1 = (state_26238[(2)]);
var inst_26219 = (inst_26218__$1 == null);
var inst_26220 = cljs.core.not.call(null,inst_26219);
var state_26238__$1 = (function (){var statearr_26243 = state_26238;
(statearr_26243[(8)] = inst_26218__$1);

return statearr_26243;
})();
if(inst_26220){
var statearr_26244_26270 = state_26238__$1;
(statearr_26244_26270[(1)] = (5));

} else {
var statearr_26245_26271 = state_26238__$1;
(statearr_26245_26271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (6))){
var state_26238__$1 = state_26238;
var statearr_26246_26272 = state_26238__$1;
(statearr_26246_26272[(2)] = null);

(statearr_26246_26272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (3))){
var inst_26235 = (state_26238[(2)]);
var inst_26236 = cljs.core.async.close_BANG_.call(null,out);
var state_26238__$1 = (function (){var statearr_26247 = state_26238;
(statearr_26247[(9)] = inst_26235);

return statearr_26247;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26238__$1,inst_26236);
} else {
if((state_val_26239 === (2))){
var state_26238__$1 = state_26238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26238__$1,(4),ch);
} else {
if((state_val_26239 === (11))){
var inst_26218 = (state_26238[(8)]);
var inst_26227 = (state_26238[(2)]);
var inst_26215 = inst_26218;
var state_26238__$1 = (function (){var statearr_26248 = state_26238;
(statearr_26248[(7)] = inst_26215);

(statearr_26248[(10)] = inst_26227);

return statearr_26248;
})();
var statearr_26249_26273 = state_26238__$1;
(statearr_26249_26273[(2)] = null);

(statearr_26249_26273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (9))){
var inst_26218 = (state_26238[(8)]);
var state_26238__$1 = state_26238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26238__$1,(11),out,inst_26218);
} else {
if((state_val_26239 === (5))){
var inst_26218 = (state_26238[(8)]);
var inst_26215 = (state_26238[(7)]);
var inst_26222 = cljs.core._EQ_.call(null,inst_26218,inst_26215);
var state_26238__$1 = state_26238;
if(inst_26222){
var statearr_26251_26274 = state_26238__$1;
(statearr_26251_26274[(1)] = (8));

} else {
var statearr_26252_26275 = state_26238__$1;
(statearr_26252_26275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (10))){
var inst_26230 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
var statearr_26253_26276 = state_26238__$1;
(statearr_26253_26276[(2)] = inst_26230);

(statearr_26253_26276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (8))){
var inst_26215 = (state_26238[(7)]);
var tmp26250 = inst_26215;
var inst_26215__$1 = tmp26250;
var state_26238__$1 = (function (){var statearr_26254 = state_26238;
(statearr_26254[(7)] = inst_26215__$1);

return statearr_26254;
})();
var statearr_26255_26277 = state_26238__$1;
(statearr_26255_26277[(2)] = null);

(statearr_26255_26277[(1)] = (2));


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
});})(c__23672__auto___26267,out))
;
return ((function (switch__23560__auto__,c__23672__auto___26267,out){
return (function() {
var cljs$core$async$state_machine__23561__auto__ = null;
var cljs$core$async$state_machine__23561__auto____0 = (function (){
var statearr_26259 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26259[(0)] = cljs$core$async$state_machine__23561__auto__);

(statearr_26259[(1)] = (1));

return statearr_26259;
});
var cljs$core$async$state_machine__23561__auto____1 = (function (state_26238){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_26238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e26260){if((e26260 instanceof Object)){
var ex__23564__auto__ = e26260;
var statearr_26261_26278 = state_26238;
(statearr_26261_26278[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26279 = state_26238;
state_26238 = G__26279;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$state_machine__23561__auto__ = function(state_26238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23561__auto____1.call(this,state_26238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23561__auto____0;
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23561__auto____1;
return cljs$core$async$state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___26267,out))
})();
var state__23674__auto__ = (function (){var statearr_26262 = f__23673__auto__.call(null);
(statearr_26262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___26267);

return statearr_26262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___26267,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26280 = [];
var len__21524__auto___26350 = arguments.length;
var i__21525__auto___26351 = (0);
while(true){
if((i__21525__auto___26351 < len__21524__auto___26350)){
args26280.push((arguments[i__21525__auto___26351]));

var G__26352 = (i__21525__auto___26351 + (1));
i__21525__auto___26351 = G__26352;
continue;
} else {
}
break;
}

var G__26282 = args26280.length;
switch (G__26282) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26280.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23672__auto___26354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___26354,out){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___26354,out){
return (function (state_26320){
var state_val_26321 = (state_26320[(1)]);
if((state_val_26321 === (7))){
var inst_26316 = (state_26320[(2)]);
var state_26320__$1 = state_26320;
var statearr_26322_26355 = state_26320__$1;
(statearr_26322_26355[(2)] = inst_26316);

(statearr_26322_26355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (1))){
var inst_26283 = (new Array(n));
var inst_26284 = inst_26283;
var inst_26285 = (0);
var state_26320__$1 = (function (){var statearr_26323 = state_26320;
(statearr_26323[(7)] = inst_26285);

(statearr_26323[(8)] = inst_26284);

return statearr_26323;
})();
var statearr_26324_26356 = state_26320__$1;
(statearr_26324_26356[(2)] = null);

(statearr_26324_26356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (4))){
var inst_26288 = (state_26320[(9)]);
var inst_26288__$1 = (state_26320[(2)]);
var inst_26289 = (inst_26288__$1 == null);
var inst_26290 = cljs.core.not.call(null,inst_26289);
var state_26320__$1 = (function (){var statearr_26325 = state_26320;
(statearr_26325[(9)] = inst_26288__$1);

return statearr_26325;
})();
if(inst_26290){
var statearr_26326_26357 = state_26320__$1;
(statearr_26326_26357[(1)] = (5));

} else {
var statearr_26327_26358 = state_26320__$1;
(statearr_26327_26358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (15))){
var inst_26310 = (state_26320[(2)]);
var state_26320__$1 = state_26320;
var statearr_26328_26359 = state_26320__$1;
(statearr_26328_26359[(2)] = inst_26310);

(statearr_26328_26359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (13))){
var state_26320__$1 = state_26320;
var statearr_26329_26360 = state_26320__$1;
(statearr_26329_26360[(2)] = null);

(statearr_26329_26360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (6))){
var inst_26285 = (state_26320[(7)]);
var inst_26306 = (inst_26285 > (0));
var state_26320__$1 = state_26320;
if(cljs.core.truth_(inst_26306)){
var statearr_26330_26361 = state_26320__$1;
(statearr_26330_26361[(1)] = (12));

} else {
var statearr_26331_26362 = state_26320__$1;
(statearr_26331_26362[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (3))){
var inst_26318 = (state_26320[(2)]);
var state_26320__$1 = state_26320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26320__$1,inst_26318);
} else {
if((state_val_26321 === (12))){
var inst_26284 = (state_26320[(8)]);
var inst_26308 = cljs.core.vec.call(null,inst_26284);
var state_26320__$1 = state_26320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26320__$1,(15),out,inst_26308);
} else {
if((state_val_26321 === (2))){
var state_26320__$1 = state_26320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26320__$1,(4),ch);
} else {
if((state_val_26321 === (11))){
var inst_26300 = (state_26320[(2)]);
var inst_26301 = (new Array(n));
var inst_26284 = inst_26301;
var inst_26285 = (0);
var state_26320__$1 = (function (){var statearr_26332 = state_26320;
(statearr_26332[(7)] = inst_26285);

(statearr_26332[(10)] = inst_26300);

(statearr_26332[(8)] = inst_26284);

return statearr_26332;
})();
var statearr_26333_26363 = state_26320__$1;
(statearr_26333_26363[(2)] = null);

(statearr_26333_26363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (9))){
var inst_26284 = (state_26320[(8)]);
var inst_26298 = cljs.core.vec.call(null,inst_26284);
var state_26320__$1 = state_26320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26320__$1,(11),out,inst_26298);
} else {
if((state_val_26321 === (5))){
var inst_26285 = (state_26320[(7)]);
var inst_26293 = (state_26320[(11)]);
var inst_26284 = (state_26320[(8)]);
var inst_26288 = (state_26320[(9)]);
var inst_26292 = (inst_26284[inst_26285] = inst_26288);
var inst_26293__$1 = (inst_26285 + (1));
var inst_26294 = (inst_26293__$1 < n);
var state_26320__$1 = (function (){var statearr_26334 = state_26320;
(statearr_26334[(11)] = inst_26293__$1);

(statearr_26334[(12)] = inst_26292);

return statearr_26334;
})();
if(cljs.core.truth_(inst_26294)){
var statearr_26335_26364 = state_26320__$1;
(statearr_26335_26364[(1)] = (8));

} else {
var statearr_26336_26365 = state_26320__$1;
(statearr_26336_26365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (14))){
var inst_26313 = (state_26320[(2)]);
var inst_26314 = cljs.core.async.close_BANG_.call(null,out);
var state_26320__$1 = (function (){var statearr_26338 = state_26320;
(statearr_26338[(13)] = inst_26313);

return statearr_26338;
})();
var statearr_26339_26366 = state_26320__$1;
(statearr_26339_26366[(2)] = inst_26314);

(statearr_26339_26366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (10))){
var inst_26304 = (state_26320[(2)]);
var state_26320__$1 = state_26320;
var statearr_26340_26367 = state_26320__$1;
(statearr_26340_26367[(2)] = inst_26304);

(statearr_26340_26367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (8))){
var inst_26293 = (state_26320[(11)]);
var inst_26284 = (state_26320[(8)]);
var tmp26337 = inst_26284;
var inst_26284__$1 = tmp26337;
var inst_26285 = inst_26293;
var state_26320__$1 = (function (){var statearr_26341 = state_26320;
(statearr_26341[(7)] = inst_26285);

(statearr_26341[(8)] = inst_26284__$1);

return statearr_26341;
})();
var statearr_26342_26368 = state_26320__$1;
(statearr_26342_26368[(2)] = null);

(statearr_26342_26368[(1)] = (2));


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
});})(c__23672__auto___26354,out))
;
return ((function (switch__23560__auto__,c__23672__auto___26354,out){
return (function() {
var cljs$core$async$state_machine__23561__auto__ = null;
var cljs$core$async$state_machine__23561__auto____0 = (function (){
var statearr_26346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26346[(0)] = cljs$core$async$state_machine__23561__auto__);

(statearr_26346[(1)] = (1));

return statearr_26346;
});
var cljs$core$async$state_machine__23561__auto____1 = (function (state_26320){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_26320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e26347){if((e26347 instanceof Object)){
var ex__23564__auto__ = e26347;
var statearr_26348_26369 = state_26320;
(statearr_26348_26369[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26370 = state_26320;
state_26320 = G__26370;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$state_machine__23561__auto__ = function(state_26320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23561__auto____1.call(this,state_26320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23561__auto____0;
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23561__auto____1;
return cljs$core$async$state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___26354,out))
})();
var state__23674__auto__ = (function (){var statearr_26349 = f__23673__auto__.call(null);
(statearr_26349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___26354);

return statearr_26349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___26354,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26371 = [];
var len__21524__auto___26445 = arguments.length;
var i__21525__auto___26446 = (0);
while(true){
if((i__21525__auto___26446 < len__21524__auto___26445)){
args26371.push((arguments[i__21525__auto___26446]));

var G__26447 = (i__21525__auto___26446 + (1));
i__21525__auto___26446 = G__26447;
continue;
} else {
}
break;
}

var G__26373 = args26371.length;
switch (G__26373) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26371.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23672__auto___26449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___26449,out){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___26449,out){
return (function (state_26415){
var state_val_26416 = (state_26415[(1)]);
if((state_val_26416 === (7))){
var inst_26411 = (state_26415[(2)]);
var state_26415__$1 = state_26415;
var statearr_26417_26450 = state_26415__$1;
(statearr_26417_26450[(2)] = inst_26411);

(statearr_26417_26450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (1))){
var inst_26374 = [];
var inst_26375 = inst_26374;
var inst_26376 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26415__$1 = (function (){var statearr_26418 = state_26415;
(statearr_26418[(7)] = inst_26376);

(statearr_26418[(8)] = inst_26375);

return statearr_26418;
})();
var statearr_26419_26451 = state_26415__$1;
(statearr_26419_26451[(2)] = null);

(statearr_26419_26451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (4))){
var inst_26379 = (state_26415[(9)]);
var inst_26379__$1 = (state_26415[(2)]);
var inst_26380 = (inst_26379__$1 == null);
var inst_26381 = cljs.core.not.call(null,inst_26380);
var state_26415__$1 = (function (){var statearr_26420 = state_26415;
(statearr_26420[(9)] = inst_26379__$1);

return statearr_26420;
})();
if(inst_26381){
var statearr_26421_26452 = state_26415__$1;
(statearr_26421_26452[(1)] = (5));

} else {
var statearr_26422_26453 = state_26415__$1;
(statearr_26422_26453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (15))){
var inst_26405 = (state_26415[(2)]);
var state_26415__$1 = state_26415;
var statearr_26423_26454 = state_26415__$1;
(statearr_26423_26454[(2)] = inst_26405);

(statearr_26423_26454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (13))){
var state_26415__$1 = state_26415;
var statearr_26424_26455 = state_26415__$1;
(statearr_26424_26455[(2)] = null);

(statearr_26424_26455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (6))){
var inst_26375 = (state_26415[(8)]);
var inst_26400 = inst_26375.length;
var inst_26401 = (inst_26400 > (0));
var state_26415__$1 = state_26415;
if(cljs.core.truth_(inst_26401)){
var statearr_26425_26456 = state_26415__$1;
(statearr_26425_26456[(1)] = (12));

} else {
var statearr_26426_26457 = state_26415__$1;
(statearr_26426_26457[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (3))){
var inst_26413 = (state_26415[(2)]);
var state_26415__$1 = state_26415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26415__$1,inst_26413);
} else {
if((state_val_26416 === (12))){
var inst_26375 = (state_26415[(8)]);
var inst_26403 = cljs.core.vec.call(null,inst_26375);
var state_26415__$1 = state_26415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26415__$1,(15),out,inst_26403);
} else {
if((state_val_26416 === (2))){
var state_26415__$1 = state_26415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26415__$1,(4),ch);
} else {
if((state_val_26416 === (11))){
var inst_26379 = (state_26415[(9)]);
var inst_26383 = (state_26415[(10)]);
var inst_26393 = (state_26415[(2)]);
var inst_26394 = [];
var inst_26395 = inst_26394.push(inst_26379);
var inst_26375 = inst_26394;
var inst_26376 = inst_26383;
var state_26415__$1 = (function (){var statearr_26427 = state_26415;
(statearr_26427[(7)] = inst_26376);

(statearr_26427[(11)] = inst_26393);

(statearr_26427[(8)] = inst_26375);

(statearr_26427[(12)] = inst_26395);

return statearr_26427;
})();
var statearr_26428_26458 = state_26415__$1;
(statearr_26428_26458[(2)] = null);

(statearr_26428_26458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (9))){
var inst_26375 = (state_26415[(8)]);
var inst_26391 = cljs.core.vec.call(null,inst_26375);
var state_26415__$1 = state_26415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26415__$1,(11),out,inst_26391);
} else {
if((state_val_26416 === (5))){
var inst_26379 = (state_26415[(9)]);
var inst_26376 = (state_26415[(7)]);
var inst_26383 = (state_26415[(10)]);
var inst_26383__$1 = f.call(null,inst_26379);
var inst_26384 = cljs.core._EQ_.call(null,inst_26383__$1,inst_26376);
var inst_26385 = cljs.core.keyword_identical_QMARK_.call(null,inst_26376,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26386 = (inst_26384) || (inst_26385);
var state_26415__$1 = (function (){var statearr_26429 = state_26415;
(statearr_26429[(10)] = inst_26383__$1);

return statearr_26429;
})();
if(cljs.core.truth_(inst_26386)){
var statearr_26430_26459 = state_26415__$1;
(statearr_26430_26459[(1)] = (8));

} else {
var statearr_26431_26460 = state_26415__$1;
(statearr_26431_26460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (14))){
var inst_26408 = (state_26415[(2)]);
var inst_26409 = cljs.core.async.close_BANG_.call(null,out);
var state_26415__$1 = (function (){var statearr_26433 = state_26415;
(statearr_26433[(13)] = inst_26408);

return statearr_26433;
})();
var statearr_26434_26461 = state_26415__$1;
(statearr_26434_26461[(2)] = inst_26409);

(statearr_26434_26461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (10))){
var inst_26398 = (state_26415[(2)]);
var state_26415__$1 = state_26415;
var statearr_26435_26462 = state_26415__$1;
(statearr_26435_26462[(2)] = inst_26398);

(statearr_26435_26462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26416 === (8))){
var inst_26379 = (state_26415[(9)]);
var inst_26383 = (state_26415[(10)]);
var inst_26375 = (state_26415[(8)]);
var inst_26388 = inst_26375.push(inst_26379);
var tmp26432 = inst_26375;
var inst_26375__$1 = tmp26432;
var inst_26376 = inst_26383;
var state_26415__$1 = (function (){var statearr_26436 = state_26415;
(statearr_26436[(14)] = inst_26388);

(statearr_26436[(7)] = inst_26376);

(statearr_26436[(8)] = inst_26375__$1);

return statearr_26436;
})();
var statearr_26437_26463 = state_26415__$1;
(statearr_26437_26463[(2)] = null);

(statearr_26437_26463[(1)] = (2));


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
});})(c__23672__auto___26449,out))
;
return ((function (switch__23560__auto__,c__23672__auto___26449,out){
return (function() {
var cljs$core$async$state_machine__23561__auto__ = null;
var cljs$core$async$state_machine__23561__auto____0 = (function (){
var statearr_26441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26441[(0)] = cljs$core$async$state_machine__23561__auto__);

(statearr_26441[(1)] = (1));

return statearr_26441;
});
var cljs$core$async$state_machine__23561__auto____1 = (function (state_26415){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_26415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e26442){if((e26442 instanceof Object)){
var ex__23564__auto__ = e26442;
var statearr_26443_26464 = state_26415;
(statearr_26443_26464[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26465 = state_26415;
state_26415 = G__26465;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
cljs$core$async$state_machine__23561__auto__ = function(state_26415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23561__auto____1.call(this,state_26415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23561__auto____0;
cljs$core$async$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23561__auto____1;
return cljs$core$async$state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___26449,out))
})();
var state__23674__auto__ = (function (){var statearr_26444 = f__23673__auto__.call(null);
(statearr_26444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___26449);

return statearr_26444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___26449,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1480335653246