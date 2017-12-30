// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35827 = arguments.length;
switch (G__35827) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async35828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35828 = (function (f,blockable,meta35829){
this.f = f;
this.blockable = blockable;
this.meta35829 = meta35829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35830,meta35829__$1){
var self__ = this;
var _35830__$1 = this;
return (new cljs.core.async.t_cljs$core$async35828(self__.f,self__.blockable,meta35829__$1));
});

cljs.core.async.t_cljs$core$async35828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35830){
var self__ = this;
var _35830__$1 = this;
return self__.meta35829;
});

cljs.core.async.t_cljs$core$async35828.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35828.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35828.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35828.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35829","meta35829",1842793668,null)], null);
});

cljs.core.async.t_cljs$core$async35828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35828";

cljs.core.async.t_cljs$core$async35828.cljs$lang$ctorPrWriter = (function (this__30901__auto__,writer__30902__auto__,opt__30903__auto__){
return cljs.core._write.call(null,writer__30902__auto__,"cljs.core.async/t_cljs$core$async35828");
});

cljs.core.async.__GT_t_cljs$core$async35828 = (function cljs$core$async$__GT_t_cljs$core$async35828(f__$1,blockable__$1,meta35829){
return (new cljs.core.async.t_cljs$core$async35828(f__$1,blockable__$1,meta35829));
});

}

return (new cljs.core.async.t_cljs$core$async35828(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__35834 = arguments.length;
switch (G__35834) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__35837 = arguments.length;
switch (G__35837) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__35840 = arguments.length;
switch (G__35840) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35842 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35842);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35842,ret){
return (function (){
return fn1.call(null,val_35842);
});})(val_35842,ret))
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
var G__35844 = arguments.length;
switch (G__35844) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__31275__auto___35846 = n;
var x_35847 = (0);
while(true){
if((x_35847 < n__31275__auto___35846)){
(a[x_35847] = (0));

var G__35848 = (x_35847 + (1));
x_35847 = G__35848;
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

var G__35849 = (i + (1));
i = G__35849;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35850 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35850 = (function (flag,meta35851){
this.flag = flag;
this.meta35851 = meta35851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35852,meta35851__$1){
var self__ = this;
var _35852__$1 = this;
return (new cljs.core.async.t_cljs$core$async35850(self__.flag,meta35851__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35852){
var self__ = this;
var _35852__$1 = this;
return self__.meta35851;
});})(flag))
;

cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35850.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35851","meta35851",336790106,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35850.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35850";

cljs.core.async.t_cljs$core$async35850.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30901__auto__,writer__30902__auto__,opt__30903__auto__){
return cljs.core._write.call(null,writer__30902__auto__,"cljs.core.async/t_cljs$core$async35850");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35850 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35850(flag__$1,meta35851){
return (new cljs.core.async.t_cljs$core$async35850(flag__$1,meta35851));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35850(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35853 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35853 = (function (flag,cb,meta35854){
this.flag = flag;
this.cb = cb;
this.meta35854 = meta35854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35855,meta35854__$1){
var self__ = this;
var _35855__$1 = this;
return (new cljs.core.async.t_cljs$core$async35853(self__.flag,self__.cb,meta35854__$1));
});

cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35855){
var self__ = this;
var _35855__$1 = this;
return self__.meta35854;
});

cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35854","meta35854",1380333453,null)], null);
});

cljs.core.async.t_cljs$core$async35853.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35853";

cljs.core.async.t_cljs$core$async35853.cljs$lang$ctorPrWriter = (function (this__30901__auto__,writer__30902__auto__,opt__30903__auto__){
return cljs.core._write.call(null,writer__30902__auto__,"cljs.core.async/t_cljs$core$async35853");
});

cljs.core.async.__GT_t_cljs$core$async35853 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35853(flag__$1,cb__$1,meta35854){
return (new cljs.core.async.t_cljs$core$async35853(flag__$1,cb__$1,meta35854));
});

}

return (new cljs.core.async.t_cljs$core$async35853(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35856_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35856_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35857_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35857_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30230__auto__ = wport;
if(cljs.core.truth_(or__30230__auto__)){
return or__30230__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35858 = (i + (1));
i = G__35858;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30230__auto__ = ret;
if(cljs.core.truth_(or__30230__auto__)){
return or__30230__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30218__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30218__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30218__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__31516__auto__ = [];
var len__31509__auto___35864 = arguments.length;
var i__31510__auto___35865 = (0);
while(true){
if((i__31510__auto___35865 < len__31509__auto___35864)){
args__31516__auto__.push((arguments[i__31510__auto___35865]));

var G__35866 = (i__31510__auto___35865 + (1));
i__31510__auto___35865 = G__35866;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((1) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31517__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35861){
var map__35862 = p__35861;
var map__35862__$1 = ((((!((map__35862 == null)))?((((map__35862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35862):map__35862);
var opts = map__35862__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35859){
var G__35860 = cljs.core.first.call(null,seq35859);
var seq35859__$1 = cljs.core.next.call(null,seq35859);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35860,seq35859__$1);
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
var G__35868 = arguments.length;
switch (G__35868) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35767__auto___35914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___35914){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___35914){
return (function (state_35892){
var state_val_35893 = (state_35892[(1)]);
if((state_val_35893 === (7))){
var inst_35888 = (state_35892[(2)]);
var state_35892__$1 = state_35892;
var statearr_35894_35915 = state_35892__$1;
(statearr_35894_35915[(2)] = inst_35888);

(statearr_35894_35915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (1))){
var state_35892__$1 = state_35892;
var statearr_35895_35916 = state_35892__$1;
(statearr_35895_35916[(2)] = null);

(statearr_35895_35916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (4))){
var inst_35871 = (state_35892[(7)]);
var inst_35871__$1 = (state_35892[(2)]);
var inst_35872 = (inst_35871__$1 == null);
var state_35892__$1 = (function (){var statearr_35896 = state_35892;
(statearr_35896[(7)] = inst_35871__$1);

return statearr_35896;
})();
if(cljs.core.truth_(inst_35872)){
var statearr_35897_35917 = state_35892__$1;
(statearr_35897_35917[(1)] = (5));

} else {
var statearr_35898_35918 = state_35892__$1;
(statearr_35898_35918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (13))){
var state_35892__$1 = state_35892;
var statearr_35899_35919 = state_35892__$1;
(statearr_35899_35919[(2)] = null);

(statearr_35899_35919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (6))){
var inst_35871 = (state_35892[(7)]);
var state_35892__$1 = state_35892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35892__$1,(11),to,inst_35871);
} else {
if((state_val_35893 === (3))){
var inst_35890 = (state_35892[(2)]);
var state_35892__$1 = state_35892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35892__$1,inst_35890);
} else {
if((state_val_35893 === (12))){
var state_35892__$1 = state_35892;
var statearr_35900_35920 = state_35892__$1;
(statearr_35900_35920[(2)] = null);

(statearr_35900_35920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (2))){
var state_35892__$1 = state_35892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35892__$1,(4),from);
} else {
if((state_val_35893 === (11))){
var inst_35881 = (state_35892[(2)]);
var state_35892__$1 = state_35892;
if(cljs.core.truth_(inst_35881)){
var statearr_35901_35921 = state_35892__$1;
(statearr_35901_35921[(1)] = (12));

} else {
var statearr_35902_35922 = state_35892__$1;
(statearr_35902_35922[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (9))){
var state_35892__$1 = state_35892;
var statearr_35903_35923 = state_35892__$1;
(statearr_35903_35923[(2)] = null);

(statearr_35903_35923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (5))){
var state_35892__$1 = state_35892;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35904_35924 = state_35892__$1;
(statearr_35904_35924[(1)] = (8));

} else {
var statearr_35905_35925 = state_35892__$1;
(statearr_35905_35925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (14))){
var inst_35886 = (state_35892[(2)]);
var state_35892__$1 = state_35892;
var statearr_35906_35926 = state_35892__$1;
(statearr_35906_35926[(2)] = inst_35886);

(statearr_35906_35926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (10))){
var inst_35878 = (state_35892[(2)]);
var state_35892__$1 = state_35892;
var statearr_35907_35927 = state_35892__$1;
(statearr_35907_35927[(2)] = inst_35878);

(statearr_35907_35927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (8))){
var inst_35875 = cljs.core.async.close_BANG_.call(null,to);
var state_35892__$1 = state_35892;
var statearr_35908_35928 = state_35892__$1;
(statearr_35908_35928[(2)] = inst_35875);

(statearr_35908_35928[(1)] = (10));


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
});})(c__35767__auto___35914))
;
return ((function (switch__35677__auto__,c__35767__auto___35914){
return (function() {
var cljs$core$async$state_machine__35678__auto__ = null;
var cljs$core$async$state_machine__35678__auto____0 = (function (){
var statearr_35909 = [null,null,null,null,null,null,null,null];
(statearr_35909[(0)] = cljs$core$async$state_machine__35678__auto__);

(statearr_35909[(1)] = (1));

return statearr_35909;
});
var cljs$core$async$state_machine__35678__auto____1 = (function (state_35892){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_35892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e35910){if((e35910 instanceof Object)){
var ex__35681__auto__ = e35910;
var statearr_35911_35929 = state_35892;
(statearr_35911_35929[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35930 = state_35892;
state_35892 = G__35930;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$state_machine__35678__auto__ = function(state_35892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35678__auto____1.call(this,state_35892);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35678__auto____0;
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35678__auto____1;
return cljs$core$async$state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___35914))
})();
var state__35769__auto__ = (function (){var statearr_35912 = f__35768__auto__.call(null);
(statearr_35912[(6)] = c__35767__auto___35914);

return statearr_35912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___35914))
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
return (function (p__35931){
var vec__35932 = p__35931;
var v = cljs.core.nth.call(null,vec__35932,(0),null);
var p = cljs.core.nth.call(null,vec__35932,(1),null);
var job = vec__35932;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35767__auto___36103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___36103,res,vec__35932,v,p,job,jobs,results){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___36103,res,vec__35932,v,p,job,jobs,results){
return (function (state_35939){
var state_val_35940 = (state_35939[(1)]);
if((state_val_35940 === (1))){
var state_35939__$1 = state_35939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35939__$1,(2),res,v);
} else {
if((state_val_35940 === (2))){
var inst_35936 = (state_35939[(2)]);
var inst_35937 = cljs.core.async.close_BANG_.call(null,res);
var state_35939__$1 = (function (){var statearr_35941 = state_35939;
(statearr_35941[(7)] = inst_35936);

return statearr_35941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35939__$1,inst_35937);
} else {
return null;
}
}
});})(c__35767__auto___36103,res,vec__35932,v,p,job,jobs,results))
;
return ((function (switch__35677__auto__,c__35767__auto___36103,res,vec__35932,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____0 = (function (){
var statearr_35942 = [null,null,null,null,null,null,null,null];
(statearr_35942[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__);

(statearr_35942[(1)] = (1));

return statearr_35942;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____1 = (function (state_35939){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_35939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e35943){if((e35943 instanceof Object)){
var ex__35681__auto__ = e35943;
var statearr_35944_36104 = state_35939;
(statearr_35944_36104[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36105 = state_35939;
state_35939 = G__36105;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__ = function(state_35939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____1.call(this,state_35939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___36103,res,vec__35932,v,p,job,jobs,results))
})();
var state__35769__auto__ = (function (){var statearr_35945 = f__35768__auto__.call(null);
(statearr_35945[(6)] = c__35767__auto___36103);

return statearr_35945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___36103,res,vec__35932,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35946){
var vec__35947 = p__35946;
var v = cljs.core.nth.call(null,vec__35947,(0),null);
var p = cljs.core.nth.call(null,vec__35947,(1),null);
var job = vec__35947;
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
var n__31275__auto___36106 = n;
var __36107 = (0);
while(true){
if((__36107 < n__31275__auto___36106)){
var G__35950_36108 = type;
var G__35950_36109__$1 = (((G__35950_36108 instanceof cljs.core.Keyword))?G__35950_36108.fqn:null);
switch (G__35950_36109__$1) {
case "compute":
var c__35767__auto___36111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36107,c__35767__auto___36111,G__35950_36108,G__35950_36109__$1,n__31275__auto___36106,jobs,results,process,async){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (__36107,c__35767__auto___36111,G__35950_36108,G__35950_36109__$1,n__31275__auto___36106,jobs,results,process,async){
return (function (state_35963){
var state_val_35964 = (state_35963[(1)]);
if((state_val_35964 === (1))){
var state_35963__$1 = state_35963;
var statearr_35965_36112 = state_35963__$1;
(statearr_35965_36112[(2)] = null);

(statearr_35965_36112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (2))){
var state_35963__$1 = state_35963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35963__$1,(4),jobs);
} else {
if((state_val_35964 === (3))){
var inst_35961 = (state_35963[(2)]);
var state_35963__$1 = state_35963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35963__$1,inst_35961);
} else {
if((state_val_35964 === (4))){
var inst_35953 = (state_35963[(2)]);
var inst_35954 = process.call(null,inst_35953);
var state_35963__$1 = state_35963;
if(cljs.core.truth_(inst_35954)){
var statearr_35966_36113 = state_35963__$1;
(statearr_35966_36113[(1)] = (5));

} else {
var statearr_35967_36114 = state_35963__$1;
(statearr_35967_36114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (5))){
var state_35963__$1 = state_35963;
var statearr_35968_36115 = state_35963__$1;
(statearr_35968_36115[(2)] = null);

(statearr_35968_36115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (6))){
var state_35963__$1 = state_35963;
var statearr_35969_36116 = state_35963__$1;
(statearr_35969_36116[(2)] = null);

(statearr_35969_36116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (7))){
var inst_35959 = (state_35963[(2)]);
var state_35963__$1 = state_35963;
var statearr_35970_36117 = state_35963__$1;
(statearr_35970_36117[(2)] = inst_35959);

(statearr_35970_36117[(1)] = (3));


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
});})(__36107,c__35767__auto___36111,G__35950_36108,G__35950_36109__$1,n__31275__auto___36106,jobs,results,process,async))
;
return ((function (__36107,switch__35677__auto__,c__35767__auto___36111,G__35950_36108,G__35950_36109__$1,n__31275__auto___36106,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____0 = (function (){
var statearr_35971 = [null,null,null,null,null,null,null];
(statearr_35971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__);

(statearr_35971[(1)] = (1));

return statearr_35971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____1 = (function (state_35963){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_35963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e35972){if((e35972 instanceof Object)){
var ex__35681__auto__ = e35972;
var statearr_35973_36118 = state_35963;
(statearr_35973_36118[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36119 = state_35963;
state_35963 = G__36119;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__ = function(state_35963){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____1.call(this,state_35963);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__;
})()
;})(__36107,switch__35677__auto__,c__35767__auto___36111,G__35950_36108,G__35950_36109__$1,n__31275__auto___36106,jobs,results,process,async))
})();
var state__35769__auto__ = (function (){var statearr_35974 = f__35768__auto__.call(null);
(statearr_35974[(6)] = c__35767__auto___36111);

return statearr_35974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(__36107,c__35767__auto___36111,G__35950_36108,G__35950_36109__$1,n__31275__auto___36106,jobs,results,process,async))
);


break;
case "async":
var c__35767__auto___36120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36107,c__35767__auto___36120,G__35950_36108,G__35950_36109__$1,n__31275__auto___36106,jobs,results,process,async){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (__36107,c__35767__auto___36120,G__35950_36108,G__35950_36109__$1,n__31275__auto___36106,jobs,results,process,async){
return (function (state_35987){
var state_val_35988 = (state_35987[(1)]);
if((state_val_35988 === (1))){
var state_35987__$1 = state_35987;
var statearr_35989_36121 = state_35987__$1;
(statearr_35989_36121[(2)] = null);

(statearr_35989_36121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35988 === (2))){
var state_35987__$1 = state_35987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35987__$1,(4),jobs);
} else {
if((state_val_35988 === (3))){
var inst_35985 = (state_35987[(2)]);
var state_35987__$1 = state_35987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35987__$1,inst_35985);
} else {
if((state_val_35988 === (4))){
var inst_35977 = (state_35987[(2)]);
var inst_35978 = async.call(null,inst_35977);
var state_35987__$1 = state_35987;
if(cljs.core.truth_(inst_35978)){
var statearr_35990_36122 = state_35987__$1;
(statearr_35990_36122[(1)] = (5));

} else {
var statearr_35991_36123 = state_35987__$1;
(statearr_35991_36123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35988 === (5))){
var state_35987__$1 = state_35987;
var statearr_35992_36124 = state_35987__$1;
(statearr_35992_36124[(2)] = null);

(statearr_35992_36124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35988 === (6))){
var state_35987__$1 = state_35987;
var statearr_35993_36125 = state_35987__$1;
(statearr_35993_36125[(2)] = null);

(statearr_35993_36125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35988 === (7))){
var inst_35983 = (state_35987[(2)]);
var state_35987__$1 = state_35987;
var statearr_35994_36126 = state_35987__$1;
(statearr_35994_36126[(2)] = inst_35983);

(statearr_35994_36126[(1)] = (3));


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
});})(__36107,c__35767__auto___36120,G__35950_36108,G__35950_36109__$1,n__31275__auto___36106,jobs,results,process,async))
;
return ((function (__36107,switch__35677__auto__,c__35767__auto___36120,G__35950_36108,G__35950_36109__$1,n__31275__auto___36106,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____0 = (function (){
var statearr_35995 = [null,null,null,null,null,null,null];
(statearr_35995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__);

(statearr_35995[(1)] = (1));

return statearr_35995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____1 = (function (state_35987){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_35987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e35996){if((e35996 instanceof Object)){
var ex__35681__auto__ = e35996;
var statearr_35997_36127 = state_35987;
(statearr_35997_36127[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36128 = state_35987;
state_35987 = G__36128;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__ = function(state_35987){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____1.call(this,state_35987);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__;
})()
;})(__36107,switch__35677__auto__,c__35767__auto___36120,G__35950_36108,G__35950_36109__$1,n__31275__auto___36106,jobs,results,process,async))
})();
var state__35769__auto__ = (function (){var statearr_35998 = f__35768__auto__.call(null);
(statearr_35998[(6)] = c__35767__auto___36120);

return statearr_35998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(__36107,c__35767__auto___36120,G__35950_36108,G__35950_36109__$1,n__31275__auto___36106,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35950_36109__$1)].join('')));

}

var G__36129 = (__36107 + (1));
__36107 = G__36129;
continue;
} else {
}
break;
}

var c__35767__auto___36130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___36130,jobs,results,process,async){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___36130,jobs,results,process,async){
return (function (state_36020){
var state_val_36021 = (state_36020[(1)]);
if((state_val_36021 === (1))){
var state_36020__$1 = state_36020;
var statearr_36022_36131 = state_36020__$1;
(statearr_36022_36131[(2)] = null);

(statearr_36022_36131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (2))){
var state_36020__$1 = state_36020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36020__$1,(4),from);
} else {
if((state_val_36021 === (3))){
var inst_36018 = (state_36020[(2)]);
var state_36020__$1 = state_36020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36020__$1,inst_36018);
} else {
if((state_val_36021 === (4))){
var inst_36001 = (state_36020[(7)]);
var inst_36001__$1 = (state_36020[(2)]);
var inst_36002 = (inst_36001__$1 == null);
var state_36020__$1 = (function (){var statearr_36023 = state_36020;
(statearr_36023[(7)] = inst_36001__$1);

return statearr_36023;
})();
if(cljs.core.truth_(inst_36002)){
var statearr_36024_36132 = state_36020__$1;
(statearr_36024_36132[(1)] = (5));

} else {
var statearr_36025_36133 = state_36020__$1;
(statearr_36025_36133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (5))){
var inst_36004 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36020__$1 = state_36020;
var statearr_36026_36134 = state_36020__$1;
(statearr_36026_36134[(2)] = inst_36004);

(statearr_36026_36134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (6))){
var inst_36001 = (state_36020[(7)]);
var inst_36006 = (state_36020[(8)]);
var inst_36006__$1 = cljs.core.async.chan.call(null,(1));
var inst_36007 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36008 = [inst_36001,inst_36006__$1];
var inst_36009 = (new cljs.core.PersistentVector(null,2,(5),inst_36007,inst_36008,null));
var state_36020__$1 = (function (){var statearr_36027 = state_36020;
(statearr_36027[(8)] = inst_36006__$1);

return statearr_36027;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36020__$1,(8),jobs,inst_36009);
} else {
if((state_val_36021 === (7))){
var inst_36016 = (state_36020[(2)]);
var state_36020__$1 = state_36020;
var statearr_36028_36135 = state_36020__$1;
(statearr_36028_36135[(2)] = inst_36016);

(statearr_36028_36135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (8))){
var inst_36006 = (state_36020[(8)]);
var inst_36011 = (state_36020[(2)]);
var state_36020__$1 = (function (){var statearr_36029 = state_36020;
(statearr_36029[(9)] = inst_36011);

return statearr_36029;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36020__$1,(9),results,inst_36006);
} else {
if((state_val_36021 === (9))){
var inst_36013 = (state_36020[(2)]);
var state_36020__$1 = (function (){var statearr_36030 = state_36020;
(statearr_36030[(10)] = inst_36013);

return statearr_36030;
})();
var statearr_36031_36136 = state_36020__$1;
(statearr_36031_36136[(2)] = null);

(statearr_36031_36136[(1)] = (2));


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
});})(c__35767__auto___36130,jobs,results,process,async))
;
return ((function (switch__35677__auto__,c__35767__auto___36130,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____0 = (function (){
var statearr_36032 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36032[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__);

(statearr_36032[(1)] = (1));

return statearr_36032;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____1 = (function (state_36020){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_36020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e36033){if((e36033 instanceof Object)){
var ex__35681__auto__ = e36033;
var statearr_36034_36137 = state_36020;
(statearr_36034_36137[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36138 = state_36020;
state_36020 = G__36138;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__ = function(state_36020){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____1.call(this,state_36020);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___36130,jobs,results,process,async))
})();
var state__35769__auto__ = (function (){var statearr_36035 = f__35768__auto__.call(null);
(statearr_36035[(6)] = c__35767__auto___36130);

return statearr_36035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___36130,jobs,results,process,async))
);


var c__35767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto__,jobs,results,process,async){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto__,jobs,results,process,async){
return (function (state_36073){
var state_val_36074 = (state_36073[(1)]);
if((state_val_36074 === (7))){
var inst_36069 = (state_36073[(2)]);
var state_36073__$1 = state_36073;
var statearr_36075_36139 = state_36073__$1;
(statearr_36075_36139[(2)] = inst_36069);

(statearr_36075_36139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (20))){
var state_36073__$1 = state_36073;
var statearr_36076_36140 = state_36073__$1;
(statearr_36076_36140[(2)] = null);

(statearr_36076_36140[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (1))){
var state_36073__$1 = state_36073;
var statearr_36077_36141 = state_36073__$1;
(statearr_36077_36141[(2)] = null);

(statearr_36077_36141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (4))){
var inst_36038 = (state_36073[(7)]);
var inst_36038__$1 = (state_36073[(2)]);
var inst_36039 = (inst_36038__$1 == null);
var state_36073__$1 = (function (){var statearr_36078 = state_36073;
(statearr_36078[(7)] = inst_36038__$1);

return statearr_36078;
})();
if(cljs.core.truth_(inst_36039)){
var statearr_36079_36142 = state_36073__$1;
(statearr_36079_36142[(1)] = (5));

} else {
var statearr_36080_36143 = state_36073__$1;
(statearr_36080_36143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (15))){
var inst_36051 = (state_36073[(8)]);
var state_36073__$1 = state_36073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36073__$1,(18),to,inst_36051);
} else {
if((state_val_36074 === (21))){
var inst_36064 = (state_36073[(2)]);
var state_36073__$1 = state_36073;
var statearr_36081_36144 = state_36073__$1;
(statearr_36081_36144[(2)] = inst_36064);

(statearr_36081_36144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (13))){
var inst_36066 = (state_36073[(2)]);
var state_36073__$1 = (function (){var statearr_36082 = state_36073;
(statearr_36082[(9)] = inst_36066);

return statearr_36082;
})();
var statearr_36083_36145 = state_36073__$1;
(statearr_36083_36145[(2)] = null);

(statearr_36083_36145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (6))){
var inst_36038 = (state_36073[(7)]);
var state_36073__$1 = state_36073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36073__$1,(11),inst_36038);
} else {
if((state_val_36074 === (17))){
var inst_36059 = (state_36073[(2)]);
var state_36073__$1 = state_36073;
if(cljs.core.truth_(inst_36059)){
var statearr_36084_36146 = state_36073__$1;
(statearr_36084_36146[(1)] = (19));

} else {
var statearr_36085_36147 = state_36073__$1;
(statearr_36085_36147[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (3))){
var inst_36071 = (state_36073[(2)]);
var state_36073__$1 = state_36073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36073__$1,inst_36071);
} else {
if((state_val_36074 === (12))){
var inst_36048 = (state_36073[(10)]);
var state_36073__$1 = state_36073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36073__$1,(14),inst_36048);
} else {
if((state_val_36074 === (2))){
var state_36073__$1 = state_36073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36073__$1,(4),results);
} else {
if((state_val_36074 === (19))){
var state_36073__$1 = state_36073;
var statearr_36086_36148 = state_36073__$1;
(statearr_36086_36148[(2)] = null);

(statearr_36086_36148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (11))){
var inst_36048 = (state_36073[(2)]);
var state_36073__$1 = (function (){var statearr_36087 = state_36073;
(statearr_36087[(10)] = inst_36048);

return statearr_36087;
})();
var statearr_36088_36149 = state_36073__$1;
(statearr_36088_36149[(2)] = null);

(statearr_36088_36149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (9))){
var state_36073__$1 = state_36073;
var statearr_36089_36150 = state_36073__$1;
(statearr_36089_36150[(2)] = null);

(statearr_36089_36150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (5))){
var state_36073__$1 = state_36073;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36090_36151 = state_36073__$1;
(statearr_36090_36151[(1)] = (8));

} else {
var statearr_36091_36152 = state_36073__$1;
(statearr_36091_36152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (14))){
var inst_36051 = (state_36073[(8)]);
var inst_36053 = (state_36073[(11)]);
var inst_36051__$1 = (state_36073[(2)]);
var inst_36052 = (inst_36051__$1 == null);
var inst_36053__$1 = cljs.core.not.call(null,inst_36052);
var state_36073__$1 = (function (){var statearr_36092 = state_36073;
(statearr_36092[(8)] = inst_36051__$1);

(statearr_36092[(11)] = inst_36053__$1);

return statearr_36092;
})();
if(inst_36053__$1){
var statearr_36093_36153 = state_36073__$1;
(statearr_36093_36153[(1)] = (15));

} else {
var statearr_36094_36154 = state_36073__$1;
(statearr_36094_36154[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (16))){
var inst_36053 = (state_36073[(11)]);
var state_36073__$1 = state_36073;
var statearr_36095_36155 = state_36073__$1;
(statearr_36095_36155[(2)] = inst_36053);

(statearr_36095_36155[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (10))){
var inst_36045 = (state_36073[(2)]);
var state_36073__$1 = state_36073;
var statearr_36096_36156 = state_36073__$1;
(statearr_36096_36156[(2)] = inst_36045);

(statearr_36096_36156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (18))){
var inst_36056 = (state_36073[(2)]);
var state_36073__$1 = state_36073;
var statearr_36097_36157 = state_36073__$1;
(statearr_36097_36157[(2)] = inst_36056);

(statearr_36097_36157[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (8))){
var inst_36042 = cljs.core.async.close_BANG_.call(null,to);
var state_36073__$1 = state_36073;
var statearr_36098_36158 = state_36073__$1;
(statearr_36098_36158[(2)] = inst_36042);

(statearr_36098_36158[(1)] = (10));


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
});})(c__35767__auto__,jobs,results,process,async))
;
return ((function (switch__35677__auto__,c__35767__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____0 = (function (){
var statearr_36099 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__);

(statearr_36099[(1)] = (1));

return statearr_36099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____1 = (function (state_36073){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_36073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e36100){if((e36100 instanceof Object)){
var ex__35681__auto__ = e36100;
var statearr_36101_36159 = state_36073;
(statearr_36101_36159[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36160 = state_36073;
state_36073 = G__36160;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__ = function(state_36073){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____1.call(this,state_36073);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35678__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto__,jobs,results,process,async))
})();
var state__35769__auto__ = (function (){var statearr_36102 = f__35768__auto__.call(null);
(statearr_36102[(6)] = c__35767__auto__);

return statearr_36102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto__,jobs,results,process,async))
);

return c__35767__auto__;
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
var G__36162 = arguments.length;
switch (G__36162) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__36165 = arguments.length;
switch (G__36165) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__36168 = arguments.length;
switch (G__36168) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35767__auto___36217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___36217,tc,fc){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___36217,tc,fc){
return (function (state_36194){
var state_val_36195 = (state_36194[(1)]);
if((state_val_36195 === (7))){
var inst_36190 = (state_36194[(2)]);
var state_36194__$1 = state_36194;
var statearr_36196_36218 = state_36194__$1;
(statearr_36196_36218[(2)] = inst_36190);

(statearr_36196_36218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (1))){
var state_36194__$1 = state_36194;
var statearr_36197_36219 = state_36194__$1;
(statearr_36197_36219[(2)] = null);

(statearr_36197_36219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (4))){
var inst_36171 = (state_36194[(7)]);
var inst_36171__$1 = (state_36194[(2)]);
var inst_36172 = (inst_36171__$1 == null);
var state_36194__$1 = (function (){var statearr_36198 = state_36194;
(statearr_36198[(7)] = inst_36171__$1);

return statearr_36198;
})();
if(cljs.core.truth_(inst_36172)){
var statearr_36199_36220 = state_36194__$1;
(statearr_36199_36220[(1)] = (5));

} else {
var statearr_36200_36221 = state_36194__$1;
(statearr_36200_36221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (13))){
var state_36194__$1 = state_36194;
var statearr_36201_36222 = state_36194__$1;
(statearr_36201_36222[(2)] = null);

(statearr_36201_36222[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (6))){
var inst_36171 = (state_36194[(7)]);
var inst_36177 = p.call(null,inst_36171);
var state_36194__$1 = state_36194;
if(cljs.core.truth_(inst_36177)){
var statearr_36202_36223 = state_36194__$1;
(statearr_36202_36223[(1)] = (9));

} else {
var statearr_36203_36224 = state_36194__$1;
(statearr_36203_36224[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (3))){
var inst_36192 = (state_36194[(2)]);
var state_36194__$1 = state_36194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36194__$1,inst_36192);
} else {
if((state_val_36195 === (12))){
var state_36194__$1 = state_36194;
var statearr_36204_36225 = state_36194__$1;
(statearr_36204_36225[(2)] = null);

(statearr_36204_36225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (2))){
var state_36194__$1 = state_36194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36194__$1,(4),ch);
} else {
if((state_val_36195 === (11))){
var inst_36171 = (state_36194[(7)]);
var inst_36181 = (state_36194[(2)]);
var state_36194__$1 = state_36194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36194__$1,(8),inst_36181,inst_36171);
} else {
if((state_val_36195 === (9))){
var state_36194__$1 = state_36194;
var statearr_36205_36226 = state_36194__$1;
(statearr_36205_36226[(2)] = tc);

(statearr_36205_36226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (5))){
var inst_36174 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36175 = cljs.core.async.close_BANG_.call(null,fc);
var state_36194__$1 = (function (){var statearr_36206 = state_36194;
(statearr_36206[(8)] = inst_36174);

return statearr_36206;
})();
var statearr_36207_36227 = state_36194__$1;
(statearr_36207_36227[(2)] = inst_36175);

(statearr_36207_36227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (14))){
var inst_36188 = (state_36194[(2)]);
var state_36194__$1 = state_36194;
var statearr_36208_36228 = state_36194__$1;
(statearr_36208_36228[(2)] = inst_36188);

(statearr_36208_36228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (10))){
var state_36194__$1 = state_36194;
var statearr_36209_36229 = state_36194__$1;
(statearr_36209_36229[(2)] = fc);

(statearr_36209_36229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (8))){
var inst_36183 = (state_36194[(2)]);
var state_36194__$1 = state_36194;
if(cljs.core.truth_(inst_36183)){
var statearr_36210_36230 = state_36194__$1;
(statearr_36210_36230[(1)] = (12));

} else {
var statearr_36211_36231 = state_36194__$1;
(statearr_36211_36231[(1)] = (13));

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
});})(c__35767__auto___36217,tc,fc))
;
return ((function (switch__35677__auto__,c__35767__auto___36217,tc,fc){
return (function() {
var cljs$core$async$state_machine__35678__auto__ = null;
var cljs$core$async$state_machine__35678__auto____0 = (function (){
var statearr_36212 = [null,null,null,null,null,null,null,null,null];
(statearr_36212[(0)] = cljs$core$async$state_machine__35678__auto__);

(statearr_36212[(1)] = (1));

return statearr_36212;
});
var cljs$core$async$state_machine__35678__auto____1 = (function (state_36194){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_36194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e36213){if((e36213 instanceof Object)){
var ex__35681__auto__ = e36213;
var statearr_36214_36232 = state_36194;
(statearr_36214_36232[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36233 = state_36194;
state_36194 = G__36233;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$state_machine__35678__auto__ = function(state_36194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35678__auto____1.call(this,state_36194);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35678__auto____0;
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35678__auto____1;
return cljs$core$async$state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___36217,tc,fc))
})();
var state__35769__auto__ = (function (){var statearr_36215 = f__35768__auto__.call(null);
(statearr_36215[(6)] = c__35767__auto___36217);

return statearr_36215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___36217,tc,fc))
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
var c__35767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto__){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto__){
return (function (state_36254){
var state_val_36255 = (state_36254[(1)]);
if((state_val_36255 === (7))){
var inst_36250 = (state_36254[(2)]);
var state_36254__$1 = state_36254;
var statearr_36256_36274 = state_36254__$1;
(statearr_36256_36274[(2)] = inst_36250);

(statearr_36256_36274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (1))){
var inst_36234 = init;
var state_36254__$1 = (function (){var statearr_36257 = state_36254;
(statearr_36257[(7)] = inst_36234);

return statearr_36257;
})();
var statearr_36258_36275 = state_36254__$1;
(statearr_36258_36275[(2)] = null);

(statearr_36258_36275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (4))){
var inst_36237 = (state_36254[(8)]);
var inst_36237__$1 = (state_36254[(2)]);
var inst_36238 = (inst_36237__$1 == null);
var state_36254__$1 = (function (){var statearr_36259 = state_36254;
(statearr_36259[(8)] = inst_36237__$1);

return statearr_36259;
})();
if(cljs.core.truth_(inst_36238)){
var statearr_36260_36276 = state_36254__$1;
(statearr_36260_36276[(1)] = (5));

} else {
var statearr_36261_36277 = state_36254__$1;
(statearr_36261_36277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (6))){
var inst_36237 = (state_36254[(8)]);
var inst_36234 = (state_36254[(7)]);
var inst_36241 = (state_36254[(9)]);
var inst_36241__$1 = f.call(null,inst_36234,inst_36237);
var inst_36242 = cljs.core.reduced_QMARK_.call(null,inst_36241__$1);
var state_36254__$1 = (function (){var statearr_36262 = state_36254;
(statearr_36262[(9)] = inst_36241__$1);

return statearr_36262;
})();
if(inst_36242){
var statearr_36263_36278 = state_36254__$1;
(statearr_36263_36278[(1)] = (8));

} else {
var statearr_36264_36279 = state_36254__$1;
(statearr_36264_36279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (3))){
var inst_36252 = (state_36254[(2)]);
var state_36254__$1 = state_36254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36254__$1,inst_36252);
} else {
if((state_val_36255 === (2))){
var state_36254__$1 = state_36254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36254__$1,(4),ch);
} else {
if((state_val_36255 === (9))){
var inst_36241 = (state_36254[(9)]);
var inst_36234 = inst_36241;
var state_36254__$1 = (function (){var statearr_36265 = state_36254;
(statearr_36265[(7)] = inst_36234);

return statearr_36265;
})();
var statearr_36266_36280 = state_36254__$1;
(statearr_36266_36280[(2)] = null);

(statearr_36266_36280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (5))){
var inst_36234 = (state_36254[(7)]);
var state_36254__$1 = state_36254;
var statearr_36267_36281 = state_36254__$1;
(statearr_36267_36281[(2)] = inst_36234);

(statearr_36267_36281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (10))){
var inst_36248 = (state_36254[(2)]);
var state_36254__$1 = state_36254;
var statearr_36268_36282 = state_36254__$1;
(statearr_36268_36282[(2)] = inst_36248);

(statearr_36268_36282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (8))){
var inst_36241 = (state_36254[(9)]);
var inst_36244 = cljs.core.deref.call(null,inst_36241);
var state_36254__$1 = state_36254;
var statearr_36269_36283 = state_36254__$1;
(statearr_36269_36283[(2)] = inst_36244);

(statearr_36269_36283[(1)] = (10));


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
});})(c__35767__auto__))
;
return ((function (switch__35677__auto__,c__35767__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35678__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35678__auto____0 = (function (){
var statearr_36270 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36270[(0)] = cljs$core$async$reduce_$_state_machine__35678__auto__);

(statearr_36270[(1)] = (1));

return statearr_36270;
});
var cljs$core$async$reduce_$_state_machine__35678__auto____1 = (function (state_36254){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_36254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e36271){if((e36271 instanceof Object)){
var ex__35681__auto__ = e36271;
var statearr_36272_36284 = state_36254;
(statearr_36272_36284[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36285 = state_36254;
state_36254 = G__36285;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35678__auto__ = function(state_36254){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35678__auto____1.call(this,state_36254);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35678__auto____0;
cljs$core$async$reduce_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35678__auto____1;
return cljs$core$async$reduce_$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto__))
})();
var state__35769__auto__ = (function (){var statearr_36273 = f__35768__auto__.call(null);
(statearr_36273[(6)] = c__35767__auto__);

return statearr_36273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto__))
);

return c__35767__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__35767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto__,f__$1){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto__,f__$1){
return (function (state_36291){
var state_val_36292 = (state_36291[(1)]);
if((state_val_36292 === (1))){
var inst_36286 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_36291__$1 = state_36291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36291__$1,(2),inst_36286);
} else {
if((state_val_36292 === (2))){
var inst_36288 = (state_36291[(2)]);
var inst_36289 = f__$1.call(null,inst_36288);
var state_36291__$1 = state_36291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36291__$1,inst_36289);
} else {
return null;
}
}
});})(c__35767__auto__,f__$1))
;
return ((function (switch__35677__auto__,c__35767__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__35678__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35678__auto____0 = (function (){
var statearr_36293 = [null,null,null,null,null,null,null];
(statearr_36293[(0)] = cljs$core$async$transduce_$_state_machine__35678__auto__);

(statearr_36293[(1)] = (1));

return statearr_36293;
});
var cljs$core$async$transduce_$_state_machine__35678__auto____1 = (function (state_36291){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_36291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e36294){if((e36294 instanceof Object)){
var ex__35681__auto__ = e36294;
var statearr_36295_36297 = state_36291;
(statearr_36295_36297[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36298 = state_36291;
state_36291 = G__36298;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35678__auto__ = function(state_36291){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35678__auto____1.call(this,state_36291);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35678__auto____0;
cljs$core$async$transduce_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35678__auto____1;
return cljs$core$async$transduce_$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto__,f__$1))
})();
var state__35769__auto__ = (function (){var statearr_36296 = f__35768__auto__.call(null);
(statearr_36296[(6)] = c__35767__auto__);

return statearr_36296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto__,f__$1))
);

return c__35767__auto__;
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
var G__36300 = arguments.length;
switch (G__36300) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto__){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto__){
return (function (state_36325){
var state_val_36326 = (state_36325[(1)]);
if((state_val_36326 === (7))){
var inst_36307 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36327_36348 = state_36325__$1;
(statearr_36327_36348[(2)] = inst_36307);

(statearr_36327_36348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (1))){
var inst_36301 = cljs.core.seq.call(null,coll);
var inst_36302 = inst_36301;
var state_36325__$1 = (function (){var statearr_36328 = state_36325;
(statearr_36328[(7)] = inst_36302);

return statearr_36328;
})();
var statearr_36329_36349 = state_36325__$1;
(statearr_36329_36349[(2)] = null);

(statearr_36329_36349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (4))){
var inst_36302 = (state_36325[(7)]);
var inst_36305 = cljs.core.first.call(null,inst_36302);
var state_36325__$1 = state_36325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36325__$1,(7),ch,inst_36305);
} else {
if((state_val_36326 === (13))){
var inst_36319 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36330_36350 = state_36325__$1;
(statearr_36330_36350[(2)] = inst_36319);

(statearr_36330_36350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (6))){
var inst_36310 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
if(cljs.core.truth_(inst_36310)){
var statearr_36331_36351 = state_36325__$1;
(statearr_36331_36351[(1)] = (8));

} else {
var statearr_36332_36352 = state_36325__$1;
(statearr_36332_36352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (3))){
var inst_36323 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36325__$1,inst_36323);
} else {
if((state_val_36326 === (12))){
var state_36325__$1 = state_36325;
var statearr_36333_36353 = state_36325__$1;
(statearr_36333_36353[(2)] = null);

(statearr_36333_36353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (2))){
var inst_36302 = (state_36325[(7)]);
var state_36325__$1 = state_36325;
if(cljs.core.truth_(inst_36302)){
var statearr_36334_36354 = state_36325__$1;
(statearr_36334_36354[(1)] = (4));

} else {
var statearr_36335_36355 = state_36325__$1;
(statearr_36335_36355[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (11))){
var inst_36316 = cljs.core.async.close_BANG_.call(null,ch);
var state_36325__$1 = state_36325;
var statearr_36336_36356 = state_36325__$1;
(statearr_36336_36356[(2)] = inst_36316);

(statearr_36336_36356[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (9))){
var state_36325__$1 = state_36325;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36337_36357 = state_36325__$1;
(statearr_36337_36357[(1)] = (11));

} else {
var statearr_36338_36358 = state_36325__$1;
(statearr_36338_36358[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (5))){
var inst_36302 = (state_36325[(7)]);
var state_36325__$1 = state_36325;
var statearr_36339_36359 = state_36325__$1;
(statearr_36339_36359[(2)] = inst_36302);

(statearr_36339_36359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (10))){
var inst_36321 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36340_36360 = state_36325__$1;
(statearr_36340_36360[(2)] = inst_36321);

(statearr_36340_36360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (8))){
var inst_36302 = (state_36325[(7)]);
var inst_36312 = cljs.core.next.call(null,inst_36302);
var inst_36302__$1 = inst_36312;
var state_36325__$1 = (function (){var statearr_36341 = state_36325;
(statearr_36341[(7)] = inst_36302__$1);

return statearr_36341;
})();
var statearr_36342_36361 = state_36325__$1;
(statearr_36342_36361[(2)] = null);

(statearr_36342_36361[(1)] = (2));


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
});})(c__35767__auto__))
;
return ((function (switch__35677__auto__,c__35767__auto__){
return (function() {
var cljs$core$async$state_machine__35678__auto__ = null;
var cljs$core$async$state_machine__35678__auto____0 = (function (){
var statearr_36343 = [null,null,null,null,null,null,null,null];
(statearr_36343[(0)] = cljs$core$async$state_machine__35678__auto__);

(statearr_36343[(1)] = (1));

return statearr_36343;
});
var cljs$core$async$state_machine__35678__auto____1 = (function (state_36325){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_36325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e36344){if((e36344 instanceof Object)){
var ex__35681__auto__ = e36344;
var statearr_36345_36362 = state_36325;
(statearr_36345_36362[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36363 = state_36325;
state_36325 = G__36363;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$state_machine__35678__auto__ = function(state_36325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35678__auto____1.call(this,state_36325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35678__auto____0;
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35678__auto____1;
return cljs$core$async$state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto__))
})();
var state__35769__auto__ = (function (){var statearr_36346 = f__35768__auto__.call(null);
(statearr_36346[(6)] = c__35767__auto__);

return statearr_36346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto__))
);

return c__35767__auto__;
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
var x__30963__auto__ = (((_ == null))?null:_);
var m__30964__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30963__auto__)]);
if(!((m__30964__auto__ == null))){
return m__30964__auto__.call(null,_);
} else {
var m__30964__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30964__auto____$1 == null))){
return m__30964__auto____$1.call(null,_);
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
var x__30963__auto__ = (((m == null))?null:m);
var m__30964__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30963__auto__)]);
if(!((m__30964__auto__ == null))){
return m__30964__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30964__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30964__auto____$1 == null))){
return m__30964__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__30963__auto__ = (((m == null))?null:m);
var m__30964__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30963__auto__)]);
if(!((m__30964__auto__ == null))){
return m__30964__auto__.call(null,m,ch);
} else {
var m__30964__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30964__auto____$1 == null))){
return m__30964__auto____$1.call(null,m,ch);
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
var x__30963__auto__ = (((m == null))?null:m);
var m__30964__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30963__auto__)]);
if(!((m__30964__auto__ == null))){
return m__30964__auto__.call(null,m);
} else {
var m__30964__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30964__auto____$1 == null))){
return m__30964__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async36364 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36364 = (function (ch,cs,meta36365){
this.ch = ch;
this.cs = cs;
this.meta36365 = meta36365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36366,meta36365__$1){
var self__ = this;
var _36366__$1 = this;
return (new cljs.core.async.t_cljs$core$async36364(self__.ch,self__.cs,meta36365__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36366){
var self__ = this;
var _36366__$1 = this;
return self__.meta36365;
});})(cs))
;

cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36364.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36365","meta36365",-994124455,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36364.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36364";

cljs.core.async.t_cljs$core$async36364.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30901__auto__,writer__30902__auto__,opt__30903__auto__){
return cljs.core._write.call(null,writer__30902__auto__,"cljs.core.async/t_cljs$core$async36364");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async36364 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36364(ch__$1,cs__$1,meta36365){
return (new cljs.core.async.t_cljs$core$async36364(ch__$1,cs__$1,meta36365));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36364(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35767__auto___36586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___36586,cs,m,dchan,dctr,done){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___36586,cs,m,dchan,dctr,done){
return (function (state_36501){
var state_val_36502 = (state_36501[(1)]);
if((state_val_36502 === (7))){
var inst_36497 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
var statearr_36503_36587 = state_36501__$1;
(statearr_36503_36587[(2)] = inst_36497);

(statearr_36503_36587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (20))){
var inst_36400 = (state_36501[(7)]);
var inst_36412 = cljs.core.first.call(null,inst_36400);
var inst_36413 = cljs.core.nth.call(null,inst_36412,(0),null);
var inst_36414 = cljs.core.nth.call(null,inst_36412,(1),null);
var state_36501__$1 = (function (){var statearr_36504 = state_36501;
(statearr_36504[(8)] = inst_36413);

return statearr_36504;
})();
if(cljs.core.truth_(inst_36414)){
var statearr_36505_36588 = state_36501__$1;
(statearr_36505_36588[(1)] = (22));

} else {
var statearr_36506_36589 = state_36501__$1;
(statearr_36506_36589[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (27))){
var inst_36442 = (state_36501[(9)]);
var inst_36369 = (state_36501[(10)]);
var inst_36444 = (state_36501[(11)]);
var inst_36449 = (state_36501[(12)]);
var inst_36449__$1 = cljs.core._nth.call(null,inst_36442,inst_36444);
var inst_36450 = cljs.core.async.put_BANG_.call(null,inst_36449__$1,inst_36369,done);
var state_36501__$1 = (function (){var statearr_36507 = state_36501;
(statearr_36507[(12)] = inst_36449__$1);

return statearr_36507;
})();
if(cljs.core.truth_(inst_36450)){
var statearr_36508_36590 = state_36501__$1;
(statearr_36508_36590[(1)] = (30));

} else {
var statearr_36509_36591 = state_36501__$1;
(statearr_36509_36591[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (1))){
var state_36501__$1 = state_36501;
var statearr_36510_36592 = state_36501__$1;
(statearr_36510_36592[(2)] = null);

(statearr_36510_36592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (24))){
var inst_36400 = (state_36501[(7)]);
var inst_36419 = (state_36501[(2)]);
var inst_36420 = cljs.core.next.call(null,inst_36400);
var inst_36378 = inst_36420;
var inst_36379 = null;
var inst_36380 = (0);
var inst_36381 = (0);
var state_36501__$1 = (function (){var statearr_36511 = state_36501;
(statearr_36511[(13)] = inst_36419);

(statearr_36511[(14)] = inst_36380);

(statearr_36511[(15)] = inst_36381);

(statearr_36511[(16)] = inst_36378);

(statearr_36511[(17)] = inst_36379);

return statearr_36511;
})();
var statearr_36512_36593 = state_36501__$1;
(statearr_36512_36593[(2)] = null);

(statearr_36512_36593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (39))){
var state_36501__$1 = state_36501;
var statearr_36516_36594 = state_36501__$1;
(statearr_36516_36594[(2)] = null);

(statearr_36516_36594[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (4))){
var inst_36369 = (state_36501[(10)]);
var inst_36369__$1 = (state_36501[(2)]);
var inst_36370 = (inst_36369__$1 == null);
var state_36501__$1 = (function (){var statearr_36517 = state_36501;
(statearr_36517[(10)] = inst_36369__$1);

return statearr_36517;
})();
if(cljs.core.truth_(inst_36370)){
var statearr_36518_36595 = state_36501__$1;
(statearr_36518_36595[(1)] = (5));

} else {
var statearr_36519_36596 = state_36501__$1;
(statearr_36519_36596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (15))){
var inst_36380 = (state_36501[(14)]);
var inst_36381 = (state_36501[(15)]);
var inst_36378 = (state_36501[(16)]);
var inst_36379 = (state_36501[(17)]);
var inst_36396 = (state_36501[(2)]);
var inst_36397 = (inst_36381 + (1));
var tmp36513 = inst_36380;
var tmp36514 = inst_36378;
var tmp36515 = inst_36379;
var inst_36378__$1 = tmp36514;
var inst_36379__$1 = tmp36515;
var inst_36380__$1 = tmp36513;
var inst_36381__$1 = inst_36397;
var state_36501__$1 = (function (){var statearr_36520 = state_36501;
(statearr_36520[(18)] = inst_36396);

(statearr_36520[(14)] = inst_36380__$1);

(statearr_36520[(15)] = inst_36381__$1);

(statearr_36520[(16)] = inst_36378__$1);

(statearr_36520[(17)] = inst_36379__$1);

return statearr_36520;
})();
var statearr_36521_36597 = state_36501__$1;
(statearr_36521_36597[(2)] = null);

(statearr_36521_36597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (21))){
var inst_36423 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
var statearr_36525_36598 = state_36501__$1;
(statearr_36525_36598[(2)] = inst_36423);

(statearr_36525_36598[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (31))){
var inst_36449 = (state_36501[(12)]);
var inst_36453 = done.call(null,null);
var inst_36454 = cljs.core.async.untap_STAR_.call(null,m,inst_36449);
var state_36501__$1 = (function (){var statearr_36526 = state_36501;
(statearr_36526[(19)] = inst_36453);

return statearr_36526;
})();
var statearr_36527_36599 = state_36501__$1;
(statearr_36527_36599[(2)] = inst_36454);

(statearr_36527_36599[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (32))){
var inst_36442 = (state_36501[(9)]);
var inst_36444 = (state_36501[(11)]);
var inst_36443 = (state_36501[(20)]);
var inst_36441 = (state_36501[(21)]);
var inst_36456 = (state_36501[(2)]);
var inst_36457 = (inst_36444 + (1));
var tmp36522 = inst_36442;
var tmp36523 = inst_36443;
var tmp36524 = inst_36441;
var inst_36441__$1 = tmp36524;
var inst_36442__$1 = tmp36522;
var inst_36443__$1 = tmp36523;
var inst_36444__$1 = inst_36457;
var state_36501__$1 = (function (){var statearr_36528 = state_36501;
(statearr_36528[(9)] = inst_36442__$1);

(statearr_36528[(11)] = inst_36444__$1);

(statearr_36528[(22)] = inst_36456);

(statearr_36528[(20)] = inst_36443__$1);

(statearr_36528[(21)] = inst_36441__$1);

return statearr_36528;
})();
var statearr_36529_36600 = state_36501__$1;
(statearr_36529_36600[(2)] = null);

(statearr_36529_36600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (40))){
var inst_36469 = (state_36501[(23)]);
var inst_36473 = done.call(null,null);
var inst_36474 = cljs.core.async.untap_STAR_.call(null,m,inst_36469);
var state_36501__$1 = (function (){var statearr_36530 = state_36501;
(statearr_36530[(24)] = inst_36473);

return statearr_36530;
})();
var statearr_36531_36601 = state_36501__$1;
(statearr_36531_36601[(2)] = inst_36474);

(statearr_36531_36601[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (33))){
var inst_36460 = (state_36501[(25)]);
var inst_36462 = cljs.core.chunked_seq_QMARK_.call(null,inst_36460);
var state_36501__$1 = state_36501;
if(inst_36462){
var statearr_36532_36602 = state_36501__$1;
(statearr_36532_36602[(1)] = (36));

} else {
var statearr_36533_36603 = state_36501__$1;
(statearr_36533_36603[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (13))){
var inst_36390 = (state_36501[(26)]);
var inst_36393 = cljs.core.async.close_BANG_.call(null,inst_36390);
var state_36501__$1 = state_36501;
var statearr_36534_36604 = state_36501__$1;
(statearr_36534_36604[(2)] = inst_36393);

(statearr_36534_36604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (22))){
var inst_36413 = (state_36501[(8)]);
var inst_36416 = cljs.core.async.close_BANG_.call(null,inst_36413);
var state_36501__$1 = state_36501;
var statearr_36535_36605 = state_36501__$1;
(statearr_36535_36605[(2)] = inst_36416);

(statearr_36535_36605[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (36))){
var inst_36460 = (state_36501[(25)]);
var inst_36464 = cljs.core.chunk_first.call(null,inst_36460);
var inst_36465 = cljs.core.chunk_rest.call(null,inst_36460);
var inst_36466 = cljs.core.count.call(null,inst_36464);
var inst_36441 = inst_36465;
var inst_36442 = inst_36464;
var inst_36443 = inst_36466;
var inst_36444 = (0);
var state_36501__$1 = (function (){var statearr_36536 = state_36501;
(statearr_36536[(9)] = inst_36442);

(statearr_36536[(11)] = inst_36444);

(statearr_36536[(20)] = inst_36443);

(statearr_36536[(21)] = inst_36441);

return statearr_36536;
})();
var statearr_36537_36606 = state_36501__$1;
(statearr_36537_36606[(2)] = null);

(statearr_36537_36606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (41))){
var inst_36460 = (state_36501[(25)]);
var inst_36476 = (state_36501[(2)]);
var inst_36477 = cljs.core.next.call(null,inst_36460);
var inst_36441 = inst_36477;
var inst_36442 = null;
var inst_36443 = (0);
var inst_36444 = (0);
var state_36501__$1 = (function (){var statearr_36538 = state_36501;
(statearr_36538[(9)] = inst_36442);

(statearr_36538[(27)] = inst_36476);

(statearr_36538[(11)] = inst_36444);

(statearr_36538[(20)] = inst_36443);

(statearr_36538[(21)] = inst_36441);

return statearr_36538;
})();
var statearr_36539_36607 = state_36501__$1;
(statearr_36539_36607[(2)] = null);

(statearr_36539_36607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (43))){
var state_36501__$1 = state_36501;
var statearr_36540_36608 = state_36501__$1;
(statearr_36540_36608[(2)] = null);

(statearr_36540_36608[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (29))){
var inst_36485 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
var statearr_36541_36609 = state_36501__$1;
(statearr_36541_36609[(2)] = inst_36485);

(statearr_36541_36609[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (44))){
var inst_36494 = (state_36501[(2)]);
var state_36501__$1 = (function (){var statearr_36542 = state_36501;
(statearr_36542[(28)] = inst_36494);

return statearr_36542;
})();
var statearr_36543_36610 = state_36501__$1;
(statearr_36543_36610[(2)] = null);

(statearr_36543_36610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (6))){
var inst_36433 = (state_36501[(29)]);
var inst_36432 = cljs.core.deref.call(null,cs);
var inst_36433__$1 = cljs.core.keys.call(null,inst_36432);
var inst_36434 = cljs.core.count.call(null,inst_36433__$1);
var inst_36435 = cljs.core.reset_BANG_.call(null,dctr,inst_36434);
var inst_36440 = cljs.core.seq.call(null,inst_36433__$1);
var inst_36441 = inst_36440;
var inst_36442 = null;
var inst_36443 = (0);
var inst_36444 = (0);
var state_36501__$1 = (function (){var statearr_36544 = state_36501;
(statearr_36544[(9)] = inst_36442);

(statearr_36544[(29)] = inst_36433__$1);

(statearr_36544[(11)] = inst_36444);

(statearr_36544[(20)] = inst_36443);

(statearr_36544[(21)] = inst_36441);

(statearr_36544[(30)] = inst_36435);

return statearr_36544;
})();
var statearr_36545_36611 = state_36501__$1;
(statearr_36545_36611[(2)] = null);

(statearr_36545_36611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (28))){
var inst_36460 = (state_36501[(25)]);
var inst_36441 = (state_36501[(21)]);
var inst_36460__$1 = cljs.core.seq.call(null,inst_36441);
var state_36501__$1 = (function (){var statearr_36546 = state_36501;
(statearr_36546[(25)] = inst_36460__$1);

return statearr_36546;
})();
if(inst_36460__$1){
var statearr_36547_36612 = state_36501__$1;
(statearr_36547_36612[(1)] = (33));

} else {
var statearr_36548_36613 = state_36501__$1;
(statearr_36548_36613[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (25))){
var inst_36444 = (state_36501[(11)]);
var inst_36443 = (state_36501[(20)]);
var inst_36446 = (inst_36444 < inst_36443);
var inst_36447 = inst_36446;
var state_36501__$1 = state_36501;
if(cljs.core.truth_(inst_36447)){
var statearr_36549_36614 = state_36501__$1;
(statearr_36549_36614[(1)] = (27));

} else {
var statearr_36550_36615 = state_36501__$1;
(statearr_36550_36615[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (34))){
var state_36501__$1 = state_36501;
var statearr_36551_36616 = state_36501__$1;
(statearr_36551_36616[(2)] = null);

(statearr_36551_36616[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (17))){
var state_36501__$1 = state_36501;
var statearr_36552_36617 = state_36501__$1;
(statearr_36552_36617[(2)] = null);

(statearr_36552_36617[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (3))){
var inst_36499 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36501__$1,inst_36499);
} else {
if((state_val_36502 === (12))){
var inst_36428 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
var statearr_36553_36618 = state_36501__$1;
(statearr_36553_36618[(2)] = inst_36428);

(statearr_36553_36618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (2))){
var state_36501__$1 = state_36501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36501__$1,(4),ch);
} else {
if((state_val_36502 === (23))){
var state_36501__$1 = state_36501;
var statearr_36554_36619 = state_36501__$1;
(statearr_36554_36619[(2)] = null);

(statearr_36554_36619[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (35))){
var inst_36483 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
var statearr_36555_36620 = state_36501__$1;
(statearr_36555_36620[(2)] = inst_36483);

(statearr_36555_36620[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (19))){
var inst_36400 = (state_36501[(7)]);
var inst_36404 = cljs.core.chunk_first.call(null,inst_36400);
var inst_36405 = cljs.core.chunk_rest.call(null,inst_36400);
var inst_36406 = cljs.core.count.call(null,inst_36404);
var inst_36378 = inst_36405;
var inst_36379 = inst_36404;
var inst_36380 = inst_36406;
var inst_36381 = (0);
var state_36501__$1 = (function (){var statearr_36556 = state_36501;
(statearr_36556[(14)] = inst_36380);

(statearr_36556[(15)] = inst_36381);

(statearr_36556[(16)] = inst_36378);

(statearr_36556[(17)] = inst_36379);

return statearr_36556;
})();
var statearr_36557_36621 = state_36501__$1;
(statearr_36557_36621[(2)] = null);

(statearr_36557_36621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (11))){
var inst_36400 = (state_36501[(7)]);
var inst_36378 = (state_36501[(16)]);
var inst_36400__$1 = cljs.core.seq.call(null,inst_36378);
var state_36501__$1 = (function (){var statearr_36558 = state_36501;
(statearr_36558[(7)] = inst_36400__$1);

return statearr_36558;
})();
if(inst_36400__$1){
var statearr_36559_36622 = state_36501__$1;
(statearr_36559_36622[(1)] = (16));

} else {
var statearr_36560_36623 = state_36501__$1;
(statearr_36560_36623[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (9))){
var inst_36430 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
var statearr_36561_36624 = state_36501__$1;
(statearr_36561_36624[(2)] = inst_36430);

(statearr_36561_36624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (5))){
var inst_36376 = cljs.core.deref.call(null,cs);
var inst_36377 = cljs.core.seq.call(null,inst_36376);
var inst_36378 = inst_36377;
var inst_36379 = null;
var inst_36380 = (0);
var inst_36381 = (0);
var state_36501__$1 = (function (){var statearr_36562 = state_36501;
(statearr_36562[(14)] = inst_36380);

(statearr_36562[(15)] = inst_36381);

(statearr_36562[(16)] = inst_36378);

(statearr_36562[(17)] = inst_36379);

return statearr_36562;
})();
var statearr_36563_36625 = state_36501__$1;
(statearr_36563_36625[(2)] = null);

(statearr_36563_36625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (14))){
var state_36501__$1 = state_36501;
var statearr_36564_36626 = state_36501__$1;
(statearr_36564_36626[(2)] = null);

(statearr_36564_36626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (45))){
var inst_36491 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
var statearr_36565_36627 = state_36501__$1;
(statearr_36565_36627[(2)] = inst_36491);

(statearr_36565_36627[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (26))){
var inst_36433 = (state_36501[(29)]);
var inst_36487 = (state_36501[(2)]);
var inst_36488 = cljs.core.seq.call(null,inst_36433);
var state_36501__$1 = (function (){var statearr_36566 = state_36501;
(statearr_36566[(31)] = inst_36487);

return statearr_36566;
})();
if(inst_36488){
var statearr_36567_36628 = state_36501__$1;
(statearr_36567_36628[(1)] = (42));

} else {
var statearr_36568_36629 = state_36501__$1;
(statearr_36568_36629[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (16))){
var inst_36400 = (state_36501[(7)]);
var inst_36402 = cljs.core.chunked_seq_QMARK_.call(null,inst_36400);
var state_36501__$1 = state_36501;
if(inst_36402){
var statearr_36569_36630 = state_36501__$1;
(statearr_36569_36630[(1)] = (19));

} else {
var statearr_36570_36631 = state_36501__$1;
(statearr_36570_36631[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (38))){
var inst_36480 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
var statearr_36571_36632 = state_36501__$1;
(statearr_36571_36632[(2)] = inst_36480);

(statearr_36571_36632[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (30))){
var state_36501__$1 = state_36501;
var statearr_36572_36633 = state_36501__$1;
(statearr_36572_36633[(2)] = null);

(statearr_36572_36633[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (10))){
var inst_36381 = (state_36501[(15)]);
var inst_36379 = (state_36501[(17)]);
var inst_36389 = cljs.core._nth.call(null,inst_36379,inst_36381);
var inst_36390 = cljs.core.nth.call(null,inst_36389,(0),null);
var inst_36391 = cljs.core.nth.call(null,inst_36389,(1),null);
var state_36501__$1 = (function (){var statearr_36573 = state_36501;
(statearr_36573[(26)] = inst_36390);

return statearr_36573;
})();
if(cljs.core.truth_(inst_36391)){
var statearr_36574_36634 = state_36501__$1;
(statearr_36574_36634[(1)] = (13));

} else {
var statearr_36575_36635 = state_36501__$1;
(statearr_36575_36635[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (18))){
var inst_36426 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
var statearr_36576_36636 = state_36501__$1;
(statearr_36576_36636[(2)] = inst_36426);

(statearr_36576_36636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (42))){
var state_36501__$1 = state_36501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36501__$1,(45),dchan);
} else {
if((state_val_36502 === (37))){
var inst_36369 = (state_36501[(10)]);
var inst_36460 = (state_36501[(25)]);
var inst_36469 = (state_36501[(23)]);
var inst_36469__$1 = cljs.core.first.call(null,inst_36460);
var inst_36470 = cljs.core.async.put_BANG_.call(null,inst_36469__$1,inst_36369,done);
var state_36501__$1 = (function (){var statearr_36577 = state_36501;
(statearr_36577[(23)] = inst_36469__$1);

return statearr_36577;
})();
if(cljs.core.truth_(inst_36470)){
var statearr_36578_36637 = state_36501__$1;
(statearr_36578_36637[(1)] = (39));

} else {
var statearr_36579_36638 = state_36501__$1;
(statearr_36579_36638[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (8))){
var inst_36380 = (state_36501[(14)]);
var inst_36381 = (state_36501[(15)]);
var inst_36383 = (inst_36381 < inst_36380);
var inst_36384 = inst_36383;
var state_36501__$1 = state_36501;
if(cljs.core.truth_(inst_36384)){
var statearr_36580_36639 = state_36501__$1;
(statearr_36580_36639[(1)] = (10));

} else {
var statearr_36581_36640 = state_36501__$1;
(statearr_36581_36640[(1)] = (11));

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
});})(c__35767__auto___36586,cs,m,dchan,dctr,done))
;
return ((function (switch__35677__auto__,c__35767__auto___36586,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35678__auto__ = null;
var cljs$core$async$mult_$_state_machine__35678__auto____0 = (function (){
var statearr_36582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36582[(0)] = cljs$core$async$mult_$_state_machine__35678__auto__);

(statearr_36582[(1)] = (1));

return statearr_36582;
});
var cljs$core$async$mult_$_state_machine__35678__auto____1 = (function (state_36501){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_36501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e36583){if((e36583 instanceof Object)){
var ex__35681__auto__ = e36583;
var statearr_36584_36641 = state_36501;
(statearr_36584_36641[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36642 = state_36501;
state_36501 = G__36642;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35678__auto__ = function(state_36501){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35678__auto____1.call(this,state_36501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35678__auto____0;
cljs$core$async$mult_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35678__auto____1;
return cljs$core$async$mult_$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___36586,cs,m,dchan,dctr,done))
})();
var state__35769__auto__ = (function (){var statearr_36585 = f__35768__auto__.call(null);
(statearr_36585[(6)] = c__35767__auto___36586);

return statearr_36585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___36586,cs,m,dchan,dctr,done))
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
var G__36644 = arguments.length;
switch (G__36644) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var x__30963__auto__ = (((m == null))?null:m);
var m__30964__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30963__auto__)]);
if(!((m__30964__auto__ == null))){
return m__30964__auto__.call(null,m,ch);
} else {
var m__30964__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30964__auto____$1 == null))){
return m__30964__auto____$1.call(null,m,ch);
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
var x__30963__auto__ = (((m == null))?null:m);
var m__30964__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30963__auto__)]);
if(!((m__30964__auto__ == null))){
return m__30964__auto__.call(null,m,ch);
} else {
var m__30964__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30964__auto____$1 == null))){
return m__30964__auto____$1.call(null,m,ch);
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
var x__30963__auto__ = (((m == null))?null:m);
var m__30964__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30963__auto__)]);
if(!((m__30964__auto__ == null))){
return m__30964__auto__.call(null,m);
} else {
var m__30964__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30964__auto____$1 == null))){
return m__30964__auto____$1.call(null,m);
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
var x__30963__auto__ = (((m == null))?null:m);
var m__30964__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30963__auto__)]);
if(!((m__30964__auto__ == null))){
return m__30964__auto__.call(null,m,state_map);
} else {
var m__30964__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30964__auto____$1 == null))){
return m__30964__auto____$1.call(null,m,state_map);
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
var x__30963__auto__ = (((m == null))?null:m);
var m__30964__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30963__auto__)]);
if(!((m__30964__auto__ == null))){
return m__30964__auto__.call(null,m,mode);
} else {
var m__30964__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30964__auto____$1 == null))){
return m__30964__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31516__auto__ = [];
var len__31509__auto___36656 = arguments.length;
var i__31510__auto___36657 = (0);
while(true){
if((i__31510__auto___36657 < len__31509__auto___36656)){
args__31516__auto__.push((arguments[i__31510__auto___36657]));

var G__36658 = (i__31510__auto___36657 + (1));
i__31510__auto___36657 = G__36658;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((3) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31517__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36650){
var map__36651 = p__36650;
var map__36651__$1 = ((((!((map__36651 == null)))?((((map__36651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36651):map__36651);
var opts = map__36651__$1;
var statearr_36653_36659 = state;
(statearr_36653_36659[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__36651,map__36651__$1,opts){
return (function (val){
var statearr_36654_36660 = state;
(statearr_36654_36660[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36651,map__36651__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_36655_36661 = state;
(statearr_36655_36661[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36646){
var G__36647 = cljs.core.first.call(null,seq36646);
var seq36646__$1 = cljs.core.next.call(null,seq36646);
var G__36648 = cljs.core.first.call(null,seq36646__$1);
var seq36646__$2 = cljs.core.next.call(null,seq36646__$1);
var G__36649 = cljs.core.first.call(null,seq36646__$2);
var seq36646__$3 = cljs.core.next.call(null,seq36646__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36647,G__36648,G__36649,seq36646__$3);
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
if(typeof cljs.core.async.t_cljs$core$async36662 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36662 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta36663){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta36663 = meta36663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36664,meta36663__$1){
var self__ = this;
var _36664__$1 = this;
return (new cljs.core.async.t_cljs$core$async36662(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta36663__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36662.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36664){
var self__ = this;
var _36664__$1 = this;
return self__.meta36663;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36662.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36662.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36662.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36662.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36662.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36662.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36662.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36662.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36662.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta36663","meta36663",1471232337,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36662.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36662";

cljs.core.async.t_cljs$core$async36662.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30901__auto__,writer__30902__auto__,opt__30903__auto__){
return cljs.core._write.call(null,writer__30902__auto__,"cljs.core.async/t_cljs$core$async36662");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async36662 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36662(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36663){
return (new cljs.core.async.t_cljs$core$async36662(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36663));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36662(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35767__auto___36826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___36826,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___36826,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36766){
var state_val_36767 = (state_36766[(1)]);
if((state_val_36767 === (7))){
var inst_36681 = (state_36766[(2)]);
var state_36766__$1 = state_36766;
var statearr_36768_36827 = state_36766__$1;
(statearr_36768_36827[(2)] = inst_36681);

(statearr_36768_36827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (20))){
var inst_36693 = (state_36766[(7)]);
var state_36766__$1 = state_36766;
var statearr_36769_36828 = state_36766__$1;
(statearr_36769_36828[(2)] = inst_36693);

(statearr_36769_36828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (27))){
var state_36766__$1 = state_36766;
var statearr_36770_36829 = state_36766__$1;
(statearr_36770_36829[(2)] = null);

(statearr_36770_36829[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (1))){
var inst_36668 = (state_36766[(8)]);
var inst_36668__$1 = calc_state.call(null);
var inst_36670 = (inst_36668__$1 == null);
var inst_36671 = cljs.core.not.call(null,inst_36670);
var state_36766__$1 = (function (){var statearr_36771 = state_36766;
(statearr_36771[(8)] = inst_36668__$1);

return statearr_36771;
})();
if(inst_36671){
var statearr_36772_36830 = state_36766__$1;
(statearr_36772_36830[(1)] = (2));

} else {
var statearr_36773_36831 = state_36766__$1;
(statearr_36773_36831[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (24))){
var inst_36740 = (state_36766[(9)]);
var inst_36726 = (state_36766[(10)]);
var inst_36717 = (state_36766[(11)]);
var inst_36740__$1 = inst_36717.call(null,inst_36726);
var state_36766__$1 = (function (){var statearr_36774 = state_36766;
(statearr_36774[(9)] = inst_36740__$1);

return statearr_36774;
})();
if(cljs.core.truth_(inst_36740__$1)){
var statearr_36775_36832 = state_36766__$1;
(statearr_36775_36832[(1)] = (29));

} else {
var statearr_36776_36833 = state_36766__$1;
(statearr_36776_36833[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (4))){
var inst_36684 = (state_36766[(2)]);
var state_36766__$1 = state_36766;
if(cljs.core.truth_(inst_36684)){
var statearr_36777_36834 = state_36766__$1;
(statearr_36777_36834[(1)] = (8));

} else {
var statearr_36778_36835 = state_36766__$1;
(statearr_36778_36835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (15))){
var inst_36711 = (state_36766[(2)]);
var state_36766__$1 = state_36766;
if(cljs.core.truth_(inst_36711)){
var statearr_36779_36836 = state_36766__$1;
(statearr_36779_36836[(1)] = (19));

} else {
var statearr_36780_36837 = state_36766__$1;
(statearr_36780_36837[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (21))){
var inst_36716 = (state_36766[(12)]);
var inst_36716__$1 = (state_36766[(2)]);
var inst_36717 = cljs.core.get.call(null,inst_36716__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36718 = cljs.core.get.call(null,inst_36716__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36719 = cljs.core.get.call(null,inst_36716__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36766__$1 = (function (){var statearr_36781 = state_36766;
(statearr_36781[(13)] = inst_36718);

(statearr_36781[(12)] = inst_36716__$1);

(statearr_36781[(11)] = inst_36717);

return statearr_36781;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36766__$1,(22),inst_36719);
} else {
if((state_val_36767 === (31))){
var inst_36748 = (state_36766[(2)]);
var state_36766__$1 = state_36766;
if(cljs.core.truth_(inst_36748)){
var statearr_36782_36838 = state_36766__$1;
(statearr_36782_36838[(1)] = (32));

} else {
var statearr_36783_36839 = state_36766__$1;
(statearr_36783_36839[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (32))){
var inst_36725 = (state_36766[(14)]);
var state_36766__$1 = state_36766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36766__$1,(35),out,inst_36725);
} else {
if((state_val_36767 === (33))){
var inst_36716 = (state_36766[(12)]);
var inst_36693 = inst_36716;
var state_36766__$1 = (function (){var statearr_36784 = state_36766;
(statearr_36784[(7)] = inst_36693);

return statearr_36784;
})();
var statearr_36785_36840 = state_36766__$1;
(statearr_36785_36840[(2)] = null);

(statearr_36785_36840[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (13))){
var inst_36693 = (state_36766[(7)]);
var inst_36700 = inst_36693.cljs$lang$protocol_mask$partition0$;
var inst_36701 = (inst_36700 & (64));
var inst_36702 = inst_36693.cljs$core$ISeq$;
var inst_36703 = (cljs.core.PROTOCOL_SENTINEL === inst_36702);
var inst_36704 = (inst_36701) || (inst_36703);
var state_36766__$1 = state_36766;
if(cljs.core.truth_(inst_36704)){
var statearr_36786_36841 = state_36766__$1;
(statearr_36786_36841[(1)] = (16));

} else {
var statearr_36787_36842 = state_36766__$1;
(statearr_36787_36842[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (22))){
var inst_36725 = (state_36766[(14)]);
var inst_36726 = (state_36766[(10)]);
var inst_36724 = (state_36766[(2)]);
var inst_36725__$1 = cljs.core.nth.call(null,inst_36724,(0),null);
var inst_36726__$1 = cljs.core.nth.call(null,inst_36724,(1),null);
var inst_36727 = (inst_36725__$1 == null);
var inst_36728 = cljs.core._EQ_.call(null,inst_36726__$1,change);
var inst_36729 = (inst_36727) || (inst_36728);
var state_36766__$1 = (function (){var statearr_36788 = state_36766;
(statearr_36788[(14)] = inst_36725__$1);

(statearr_36788[(10)] = inst_36726__$1);

return statearr_36788;
})();
if(cljs.core.truth_(inst_36729)){
var statearr_36789_36843 = state_36766__$1;
(statearr_36789_36843[(1)] = (23));

} else {
var statearr_36790_36844 = state_36766__$1;
(statearr_36790_36844[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (36))){
var inst_36716 = (state_36766[(12)]);
var inst_36693 = inst_36716;
var state_36766__$1 = (function (){var statearr_36791 = state_36766;
(statearr_36791[(7)] = inst_36693);

return statearr_36791;
})();
var statearr_36792_36845 = state_36766__$1;
(statearr_36792_36845[(2)] = null);

(statearr_36792_36845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (29))){
var inst_36740 = (state_36766[(9)]);
var state_36766__$1 = state_36766;
var statearr_36793_36846 = state_36766__$1;
(statearr_36793_36846[(2)] = inst_36740);

(statearr_36793_36846[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (6))){
var state_36766__$1 = state_36766;
var statearr_36794_36847 = state_36766__$1;
(statearr_36794_36847[(2)] = false);

(statearr_36794_36847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (28))){
var inst_36736 = (state_36766[(2)]);
var inst_36737 = calc_state.call(null);
var inst_36693 = inst_36737;
var state_36766__$1 = (function (){var statearr_36795 = state_36766;
(statearr_36795[(15)] = inst_36736);

(statearr_36795[(7)] = inst_36693);

return statearr_36795;
})();
var statearr_36796_36848 = state_36766__$1;
(statearr_36796_36848[(2)] = null);

(statearr_36796_36848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (25))){
var inst_36762 = (state_36766[(2)]);
var state_36766__$1 = state_36766;
var statearr_36797_36849 = state_36766__$1;
(statearr_36797_36849[(2)] = inst_36762);

(statearr_36797_36849[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (34))){
var inst_36760 = (state_36766[(2)]);
var state_36766__$1 = state_36766;
var statearr_36798_36850 = state_36766__$1;
(statearr_36798_36850[(2)] = inst_36760);

(statearr_36798_36850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (17))){
var state_36766__$1 = state_36766;
var statearr_36799_36851 = state_36766__$1;
(statearr_36799_36851[(2)] = false);

(statearr_36799_36851[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (3))){
var state_36766__$1 = state_36766;
var statearr_36800_36852 = state_36766__$1;
(statearr_36800_36852[(2)] = false);

(statearr_36800_36852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (12))){
var inst_36764 = (state_36766[(2)]);
var state_36766__$1 = state_36766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36766__$1,inst_36764);
} else {
if((state_val_36767 === (2))){
var inst_36668 = (state_36766[(8)]);
var inst_36673 = inst_36668.cljs$lang$protocol_mask$partition0$;
var inst_36674 = (inst_36673 & (64));
var inst_36675 = inst_36668.cljs$core$ISeq$;
var inst_36676 = (cljs.core.PROTOCOL_SENTINEL === inst_36675);
var inst_36677 = (inst_36674) || (inst_36676);
var state_36766__$1 = state_36766;
if(cljs.core.truth_(inst_36677)){
var statearr_36801_36853 = state_36766__$1;
(statearr_36801_36853[(1)] = (5));

} else {
var statearr_36802_36854 = state_36766__$1;
(statearr_36802_36854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (23))){
var inst_36725 = (state_36766[(14)]);
var inst_36731 = (inst_36725 == null);
var state_36766__$1 = state_36766;
if(cljs.core.truth_(inst_36731)){
var statearr_36803_36855 = state_36766__$1;
(statearr_36803_36855[(1)] = (26));

} else {
var statearr_36804_36856 = state_36766__$1;
(statearr_36804_36856[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (35))){
var inst_36751 = (state_36766[(2)]);
var state_36766__$1 = state_36766;
if(cljs.core.truth_(inst_36751)){
var statearr_36805_36857 = state_36766__$1;
(statearr_36805_36857[(1)] = (36));

} else {
var statearr_36806_36858 = state_36766__$1;
(statearr_36806_36858[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (19))){
var inst_36693 = (state_36766[(7)]);
var inst_36713 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36693);
var state_36766__$1 = state_36766;
var statearr_36807_36859 = state_36766__$1;
(statearr_36807_36859[(2)] = inst_36713);

(statearr_36807_36859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (11))){
var inst_36693 = (state_36766[(7)]);
var inst_36697 = (inst_36693 == null);
var inst_36698 = cljs.core.not.call(null,inst_36697);
var state_36766__$1 = state_36766;
if(inst_36698){
var statearr_36808_36860 = state_36766__$1;
(statearr_36808_36860[(1)] = (13));

} else {
var statearr_36809_36861 = state_36766__$1;
(statearr_36809_36861[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (9))){
var inst_36668 = (state_36766[(8)]);
var state_36766__$1 = state_36766;
var statearr_36810_36862 = state_36766__$1;
(statearr_36810_36862[(2)] = inst_36668);

(statearr_36810_36862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (5))){
var state_36766__$1 = state_36766;
var statearr_36811_36863 = state_36766__$1;
(statearr_36811_36863[(2)] = true);

(statearr_36811_36863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (14))){
var state_36766__$1 = state_36766;
var statearr_36812_36864 = state_36766__$1;
(statearr_36812_36864[(2)] = false);

(statearr_36812_36864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (26))){
var inst_36726 = (state_36766[(10)]);
var inst_36733 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36726);
var state_36766__$1 = state_36766;
var statearr_36813_36865 = state_36766__$1;
(statearr_36813_36865[(2)] = inst_36733);

(statearr_36813_36865[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (16))){
var state_36766__$1 = state_36766;
var statearr_36814_36866 = state_36766__$1;
(statearr_36814_36866[(2)] = true);

(statearr_36814_36866[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (38))){
var inst_36756 = (state_36766[(2)]);
var state_36766__$1 = state_36766;
var statearr_36815_36867 = state_36766__$1;
(statearr_36815_36867[(2)] = inst_36756);

(statearr_36815_36867[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (30))){
var inst_36726 = (state_36766[(10)]);
var inst_36718 = (state_36766[(13)]);
var inst_36717 = (state_36766[(11)]);
var inst_36743 = cljs.core.empty_QMARK_.call(null,inst_36717);
var inst_36744 = inst_36718.call(null,inst_36726);
var inst_36745 = cljs.core.not.call(null,inst_36744);
var inst_36746 = (inst_36743) && (inst_36745);
var state_36766__$1 = state_36766;
var statearr_36816_36868 = state_36766__$1;
(statearr_36816_36868[(2)] = inst_36746);

(statearr_36816_36868[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (10))){
var inst_36668 = (state_36766[(8)]);
var inst_36689 = (state_36766[(2)]);
var inst_36690 = cljs.core.get.call(null,inst_36689,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36691 = cljs.core.get.call(null,inst_36689,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36692 = cljs.core.get.call(null,inst_36689,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36693 = inst_36668;
var state_36766__$1 = (function (){var statearr_36817 = state_36766;
(statearr_36817[(16)] = inst_36691);

(statearr_36817[(7)] = inst_36693);

(statearr_36817[(17)] = inst_36692);

(statearr_36817[(18)] = inst_36690);

return statearr_36817;
})();
var statearr_36818_36869 = state_36766__$1;
(statearr_36818_36869[(2)] = null);

(statearr_36818_36869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (18))){
var inst_36708 = (state_36766[(2)]);
var state_36766__$1 = state_36766;
var statearr_36819_36870 = state_36766__$1;
(statearr_36819_36870[(2)] = inst_36708);

(statearr_36819_36870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (37))){
var state_36766__$1 = state_36766;
var statearr_36820_36871 = state_36766__$1;
(statearr_36820_36871[(2)] = null);

(statearr_36820_36871[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (8))){
var inst_36668 = (state_36766[(8)]);
var inst_36686 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36668);
var state_36766__$1 = state_36766;
var statearr_36821_36872 = state_36766__$1;
(statearr_36821_36872[(2)] = inst_36686);

(statearr_36821_36872[(1)] = (10));


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
});})(c__35767__auto___36826,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35677__auto__,c__35767__auto___36826,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35678__auto__ = null;
var cljs$core$async$mix_$_state_machine__35678__auto____0 = (function (){
var statearr_36822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36822[(0)] = cljs$core$async$mix_$_state_machine__35678__auto__);

(statearr_36822[(1)] = (1));

return statearr_36822;
});
var cljs$core$async$mix_$_state_machine__35678__auto____1 = (function (state_36766){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_36766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e36823){if((e36823 instanceof Object)){
var ex__35681__auto__ = e36823;
var statearr_36824_36873 = state_36766;
(statearr_36824_36873[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36874 = state_36766;
state_36766 = G__36874;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35678__auto__ = function(state_36766){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35678__auto____1.call(this,state_36766);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35678__auto____0;
cljs$core$async$mix_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35678__auto____1;
return cljs$core$async$mix_$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___36826,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35769__auto__ = (function (){var statearr_36825 = f__35768__auto__.call(null);
(statearr_36825[(6)] = c__35767__auto___36826);

return statearr_36825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___36826,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__30963__auto__ = (((p == null))?null:p);
var m__30964__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30963__auto__)]);
if(!((m__30964__auto__ == null))){
return m__30964__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30964__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30964__auto____$1 == null))){
return m__30964__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__30963__auto__ = (((p == null))?null:p);
var m__30964__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30963__auto__)]);
if(!((m__30964__auto__ == null))){
return m__30964__auto__.call(null,p,v,ch);
} else {
var m__30964__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30964__auto____$1 == null))){
return m__30964__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36876 = arguments.length;
switch (G__36876) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30963__auto__ = (((p == null))?null:p);
var m__30964__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30963__auto__)]);
if(!((m__30964__auto__ == null))){
return m__30964__auto__.call(null,p);
} else {
var m__30964__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30964__auto____$1 == null))){
return m__30964__auto____$1.call(null,p);
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
var x__30963__auto__ = (((p == null))?null:p);
var m__30964__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30963__auto__)]);
if(!((m__30964__auto__ == null))){
return m__30964__auto__.call(null,p,v);
} else {
var m__30964__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30964__auto____$1 == null))){
return m__30964__auto____$1.call(null,p,v);
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
var G__36880 = arguments.length;
switch (G__36880) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30230__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30230__auto__)){
return or__30230__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30230__auto__,mults){
return (function (p1__36878_SHARP_){
if(cljs.core.truth_(p1__36878_SHARP_.call(null,topic))){
return p1__36878_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36878_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30230__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36881 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36882){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36882 = meta36882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36883,meta36882__$1){
var self__ = this;
var _36883__$1 = this;
return (new cljs.core.async.t_cljs$core$async36881(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36882__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36883){
var self__ = this;
var _36883__$1 = this;
return self__.meta36882;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36881.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36881.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36881.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36881.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36881.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36881.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36881.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36881.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36882","meta36882",-1560378881,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36881";

cljs.core.async.t_cljs$core$async36881.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30901__auto__,writer__30902__auto__,opt__30903__auto__){
return cljs.core._write.call(null,writer__30902__auto__,"cljs.core.async/t_cljs$core$async36881");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async36881 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36881(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36882){
return (new cljs.core.async.t_cljs$core$async36881(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36882));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36881(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35767__auto___37001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___37001,mults,ensure_mult,p){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___37001,mults,ensure_mult,p){
return (function (state_36955){
var state_val_36956 = (state_36955[(1)]);
if((state_val_36956 === (7))){
var inst_36951 = (state_36955[(2)]);
var state_36955__$1 = state_36955;
var statearr_36957_37002 = state_36955__$1;
(statearr_36957_37002[(2)] = inst_36951);

(statearr_36957_37002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (20))){
var state_36955__$1 = state_36955;
var statearr_36958_37003 = state_36955__$1;
(statearr_36958_37003[(2)] = null);

(statearr_36958_37003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (1))){
var state_36955__$1 = state_36955;
var statearr_36959_37004 = state_36955__$1;
(statearr_36959_37004[(2)] = null);

(statearr_36959_37004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (24))){
var inst_36934 = (state_36955[(7)]);
var inst_36943 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36934);
var state_36955__$1 = state_36955;
var statearr_36960_37005 = state_36955__$1;
(statearr_36960_37005[(2)] = inst_36943);

(statearr_36960_37005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (4))){
var inst_36886 = (state_36955[(8)]);
var inst_36886__$1 = (state_36955[(2)]);
var inst_36887 = (inst_36886__$1 == null);
var state_36955__$1 = (function (){var statearr_36961 = state_36955;
(statearr_36961[(8)] = inst_36886__$1);

return statearr_36961;
})();
if(cljs.core.truth_(inst_36887)){
var statearr_36962_37006 = state_36955__$1;
(statearr_36962_37006[(1)] = (5));

} else {
var statearr_36963_37007 = state_36955__$1;
(statearr_36963_37007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (15))){
var inst_36928 = (state_36955[(2)]);
var state_36955__$1 = state_36955;
var statearr_36964_37008 = state_36955__$1;
(statearr_36964_37008[(2)] = inst_36928);

(statearr_36964_37008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (21))){
var inst_36948 = (state_36955[(2)]);
var state_36955__$1 = (function (){var statearr_36965 = state_36955;
(statearr_36965[(9)] = inst_36948);

return statearr_36965;
})();
var statearr_36966_37009 = state_36955__$1;
(statearr_36966_37009[(2)] = null);

(statearr_36966_37009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (13))){
var inst_36910 = (state_36955[(10)]);
var inst_36912 = cljs.core.chunked_seq_QMARK_.call(null,inst_36910);
var state_36955__$1 = state_36955;
if(inst_36912){
var statearr_36967_37010 = state_36955__$1;
(statearr_36967_37010[(1)] = (16));

} else {
var statearr_36968_37011 = state_36955__$1;
(statearr_36968_37011[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (22))){
var inst_36940 = (state_36955[(2)]);
var state_36955__$1 = state_36955;
if(cljs.core.truth_(inst_36940)){
var statearr_36969_37012 = state_36955__$1;
(statearr_36969_37012[(1)] = (23));

} else {
var statearr_36970_37013 = state_36955__$1;
(statearr_36970_37013[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (6))){
var inst_36936 = (state_36955[(11)]);
var inst_36886 = (state_36955[(8)]);
var inst_36934 = (state_36955[(7)]);
var inst_36934__$1 = topic_fn.call(null,inst_36886);
var inst_36935 = cljs.core.deref.call(null,mults);
var inst_36936__$1 = cljs.core.get.call(null,inst_36935,inst_36934__$1);
var state_36955__$1 = (function (){var statearr_36971 = state_36955;
(statearr_36971[(11)] = inst_36936__$1);

(statearr_36971[(7)] = inst_36934__$1);

return statearr_36971;
})();
if(cljs.core.truth_(inst_36936__$1)){
var statearr_36972_37014 = state_36955__$1;
(statearr_36972_37014[(1)] = (19));

} else {
var statearr_36973_37015 = state_36955__$1;
(statearr_36973_37015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (25))){
var inst_36945 = (state_36955[(2)]);
var state_36955__$1 = state_36955;
var statearr_36974_37016 = state_36955__$1;
(statearr_36974_37016[(2)] = inst_36945);

(statearr_36974_37016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (17))){
var inst_36910 = (state_36955[(10)]);
var inst_36919 = cljs.core.first.call(null,inst_36910);
var inst_36920 = cljs.core.async.muxch_STAR_.call(null,inst_36919);
var inst_36921 = cljs.core.async.close_BANG_.call(null,inst_36920);
var inst_36922 = cljs.core.next.call(null,inst_36910);
var inst_36896 = inst_36922;
var inst_36897 = null;
var inst_36898 = (0);
var inst_36899 = (0);
var state_36955__$1 = (function (){var statearr_36975 = state_36955;
(statearr_36975[(12)] = inst_36898);

(statearr_36975[(13)] = inst_36897);

(statearr_36975[(14)] = inst_36899);

(statearr_36975[(15)] = inst_36921);

(statearr_36975[(16)] = inst_36896);

return statearr_36975;
})();
var statearr_36976_37017 = state_36955__$1;
(statearr_36976_37017[(2)] = null);

(statearr_36976_37017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (3))){
var inst_36953 = (state_36955[(2)]);
var state_36955__$1 = state_36955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36955__$1,inst_36953);
} else {
if((state_val_36956 === (12))){
var inst_36930 = (state_36955[(2)]);
var state_36955__$1 = state_36955;
var statearr_36977_37018 = state_36955__$1;
(statearr_36977_37018[(2)] = inst_36930);

(statearr_36977_37018[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (2))){
var state_36955__$1 = state_36955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36955__$1,(4),ch);
} else {
if((state_val_36956 === (23))){
var state_36955__$1 = state_36955;
var statearr_36978_37019 = state_36955__$1;
(statearr_36978_37019[(2)] = null);

(statearr_36978_37019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (19))){
var inst_36936 = (state_36955[(11)]);
var inst_36886 = (state_36955[(8)]);
var inst_36938 = cljs.core.async.muxch_STAR_.call(null,inst_36936);
var state_36955__$1 = state_36955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36955__$1,(22),inst_36938,inst_36886);
} else {
if((state_val_36956 === (11))){
var inst_36910 = (state_36955[(10)]);
var inst_36896 = (state_36955[(16)]);
var inst_36910__$1 = cljs.core.seq.call(null,inst_36896);
var state_36955__$1 = (function (){var statearr_36979 = state_36955;
(statearr_36979[(10)] = inst_36910__$1);

return statearr_36979;
})();
if(inst_36910__$1){
var statearr_36980_37020 = state_36955__$1;
(statearr_36980_37020[(1)] = (13));

} else {
var statearr_36981_37021 = state_36955__$1;
(statearr_36981_37021[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (9))){
var inst_36932 = (state_36955[(2)]);
var state_36955__$1 = state_36955;
var statearr_36982_37022 = state_36955__$1;
(statearr_36982_37022[(2)] = inst_36932);

(statearr_36982_37022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (5))){
var inst_36893 = cljs.core.deref.call(null,mults);
var inst_36894 = cljs.core.vals.call(null,inst_36893);
var inst_36895 = cljs.core.seq.call(null,inst_36894);
var inst_36896 = inst_36895;
var inst_36897 = null;
var inst_36898 = (0);
var inst_36899 = (0);
var state_36955__$1 = (function (){var statearr_36983 = state_36955;
(statearr_36983[(12)] = inst_36898);

(statearr_36983[(13)] = inst_36897);

(statearr_36983[(14)] = inst_36899);

(statearr_36983[(16)] = inst_36896);

return statearr_36983;
})();
var statearr_36984_37023 = state_36955__$1;
(statearr_36984_37023[(2)] = null);

(statearr_36984_37023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (14))){
var state_36955__$1 = state_36955;
var statearr_36988_37024 = state_36955__$1;
(statearr_36988_37024[(2)] = null);

(statearr_36988_37024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (16))){
var inst_36910 = (state_36955[(10)]);
var inst_36914 = cljs.core.chunk_first.call(null,inst_36910);
var inst_36915 = cljs.core.chunk_rest.call(null,inst_36910);
var inst_36916 = cljs.core.count.call(null,inst_36914);
var inst_36896 = inst_36915;
var inst_36897 = inst_36914;
var inst_36898 = inst_36916;
var inst_36899 = (0);
var state_36955__$1 = (function (){var statearr_36989 = state_36955;
(statearr_36989[(12)] = inst_36898);

(statearr_36989[(13)] = inst_36897);

(statearr_36989[(14)] = inst_36899);

(statearr_36989[(16)] = inst_36896);

return statearr_36989;
})();
var statearr_36990_37025 = state_36955__$1;
(statearr_36990_37025[(2)] = null);

(statearr_36990_37025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (10))){
var inst_36898 = (state_36955[(12)]);
var inst_36897 = (state_36955[(13)]);
var inst_36899 = (state_36955[(14)]);
var inst_36896 = (state_36955[(16)]);
var inst_36904 = cljs.core._nth.call(null,inst_36897,inst_36899);
var inst_36905 = cljs.core.async.muxch_STAR_.call(null,inst_36904);
var inst_36906 = cljs.core.async.close_BANG_.call(null,inst_36905);
var inst_36907 = (inst_36899 + (1));
var tmp36985 = inst_36898;
var tmp36986 = inst_36897;
var tmp36987 = inst_36896;
var inst_36896__$1 = tmp36987;
var inst_36897__$1 = tmp36986;
var inst_36898__$1 = tmp36985;
var inst_36899__$1 = inst_36907;
var state_36955__$1 = (function (){var statearr_36991 = state_36955;
(statearr_36991[(12)] = inst_36898__$1);

(statearr_36991[(13)] = inst_36897__$1);

(statearr_36991[(14)] = inst_36899__$1);

(statearr_36991[(17)] = inst_36906);

(statearr_36991[(16)] = inst_36896__$1);

return statearr_36991;
})();
var statearr_36992_37026 = state_36955__$1;
(statearr_36992_37026[(2)] = null);

(statearr_36992_37026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (18))){
var inst_36925 = (state_36955[(2)]);
var state_36955__$1 = state_36955;
var statearr_36993_37027 = state_36955__$1;
(statearr_36993_37027[(2)] = inst_36925);

(statearr_36993_37027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (8))){
var inst_36898 = (state_36955[(12)]);
var inst_36899 = (state_36955[(14)]);
var inst_36901 = (inst_36899 < inst_36898);
var inst_36902 = inst_36901;
var state_36955__$1 = state_36955;
if(cljs.core.truth_(inst_36902)){
var statearr_36994_37028 = state_36955__$1;
(statearr_36994_37028[(1)] = (10));

} else {
var statearr_36995_37029 = state_36955__$1;
(statearr_36995_37029[(1)] = (11));

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
});})(c__35767__auto___37001,mults,ensure_mult,p))
;
return ((function (switch__35677__auto__,c__35767__auto___37001,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35678__auto__ = null;
var cljs$core$async$state_machine__35678__auto____0 = (function (){
var statearr_36996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36996[(0)] = cljs$core$async$state_machine__35678__auto__);

(statearr_36996[(1)] = (1));

return statearr_36996;
});
var cljs$core$async$state_machine__35678__auto____1 = (function (state_36955){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_36955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e36997){if((e36997 instanceof Object)){
var ex__35681__auto__ = e36997;
var statearr_36998_37030 = state_36955;
(statearr_36998_37030[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37031 = state_36955;
state_36955 = G__37031;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$state_machine__35678__auto__ = function(state_36955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35678__auto____1.call(this,state_36955);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35678__auto____0;
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35678__auto____1;
return cljs$core$async$state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___37001,mults,ensure_mult,p))
})();
var state__35769__auto__ = (function (){var statearr_36999 = f__35768__auto__.call(null);
(statearr_36999[(6)] = c__35767__auto___37001);

return statearr_36999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___37001,mults,ensure_mult,p))
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
var G__37033 = arguments.length;
switch (G__37033) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__37036 = arguments.length;
switch (G__37036) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__37039 = arguments.length;
switch (G__37039) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__35767__auto___37106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___37106,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___37106,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37078){
var state_val_37079 = (state_37078[(1)]);
if((state_val_37079 === (7))){
var state_37078__$1 = state_37078;
var statearr_37080_37107 = state_37078__$1;
(statearr_37080_37107[(2)] = null);

(statearr_37080_37107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37079 === (1))){
var state_37078__$1 = state_37078;
var statearr_37081_37108 = state_37078__$1;
(statearr_37081_37108[(2)] = null);

(statearr_37081_37108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37079 === (4))){
var inst_37042 = (state_37078[(7)]);
var inst_37044 = (inst_37042 < cnt);
var state_37078__$1 = state_37078;
if(cljs.core.truth_(inst_37044)){
var statearr_37082_37109 = state_37078__$1;
(statearr_37082_37109[(1)] = (6));

} else {
var statearr_37083_37110 = state_37078__$1;
(statearr_37083_37110[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37079 === (15))){
var inst_37074 = (state_37078[(2)]);
var state_37078__$1 = state_37078;
var statearr_37084_37111 = state_37078__$1;
(statearr_37084_37111[(2)] = inst_37074);

(statearr_37084_37111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37079 === (13))){
var inst_37067 = cljs.core.async.close_BANG_.call(null,out);
var state_37078__$1 = state_37078;
var statearr_37085_37112 = state_37078__$1;
(statearr_37085_37112[(2)] = inst_37067);

(statearr_37085_37112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37079 === (6))){
var state_37078__$1 = state_37078;
var statearr_37086_37113 = state_37078__$1;
(statearr_37086_37113[(2)] = null);

(statearr_37086_37113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37079 === (3))){
var inst_37076 = (state_37078[(2)]);
var state_37078__$1 = state_37078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37078__$1,inst_37076);
} else {
if((state_val_37079 === (12))){
var inst_37064 = (state_37078[(8)]);
var inst_37064__$1 = (state_37078[(2)]);
var inst_37065 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37064__$1);
var state_37078__$1 = (function (){var statearr_37087 = state_37078;
(statearr_37087[(8)] = inst_37064__$1);

return statearr_37087;
})();
if(cljs.core.truth_(inst_37065)){
var statearr_37088_37114 = state_37078__$1;
(statearr_37088_37114[(1)] = (13));

} else {
var statearr_37089_37115 = state_37078__$1;
(statearr_37089_37115[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37079 === (2))){
var inst_37041 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37042 = (0);
var state_37078__$1 = (function (){var statearr_37090 = state_37078;
(statearr_37090[(7)] = inst_37042);

(statearr_37090[(9)] = inst_37041);

return statearr_37090;
})();
var statearr_37091_37116 = state_37078__$1;
(statearr_37091_37116[(2)] = null);

(statearr_37091_37116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37079 === (11))){
var inst_37042 = (state_37078[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37078,(10),Object,null,(9));
var inst_37051 = chs__$1.call(null,inst_37042);
var inst_37052 = done.call(null,inst_37042);
var inst_37053 = cljs.core.async.take_BANG_.call(null,inst_37051,inst_37052);
var state_37078__$1 = state_37078;
var statearr_37092_37117 = state_37078__$1;
(statearr_37092_37117[(2)] = inst_37053);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37078__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37079 === (9))){
var inst_37042 = (state_37078[(7)]);
var inst_37055 = (state_37078[(2)]);
var inst_37056 = (inst_37042 + (1));
var inst_37042__$1 = inst_37056;
var state_37078__$1 = (function (){var statearr_37093 = state_37078;
(statearr_37093[(7)] = inst_37042__$1);

(statearr_37093[(10)] = inst_37055);

return statearr_37093;
})();
var statearr_37094_37118 = state_37078__$1;
(statearr_37094_37118[(2)] = null);

(statearr_37094_37118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37079 === (5))){
var inst_37062 = (state_37078[(2)]);
var state_37078__$1 = (function (){var statearr_37095 = state_37078;
(statearr_37095[(11)] = inst_37062);

return statearr_37095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37078__$1,(12),dchan);
} else {
if((state_val_37079 === (14))){
var inst_37064 = (state_37078[(8)]);
var inst_37069 = cljs.core.apply.call(null,f,inst_37064);
var state_37078__$1 = state_37078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37078__$1,(16),out,inst_37069);
} else {
if((state_val_37079 === (16))){
var inst_37071 = (state_37078[(2)]);
var state_37078__$1 = (function (){var statearr_37096 = state_37078;
(statearr_37096[(12)] = inst_37071);

return statearr_37096;
})();
var statearr_37097_37119 = state_37078__$1;
(statearr_37097_37119[(2)] = null);

(statearr_37097_37119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37079 === (10))){
var inst_37046 = (state_37078[(2)]);
var inst_37047 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37078__$1 = (function (){var statearr_37098 = state_37078;
(statearr_37098[(13)] = inst_37046);

return statearr_37098;
})();
var statearr_37099_37120 = state_37078__$1;
(statearr_37099_37120[(2)] = inst_37047);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37078__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37079 === (8))){
var inst_37060 = (state_37078[(2)]);
var state_37078__$1 = state_37078;
var statearr_37100_37121 = state_37078__$1;
(statearr_37100_37121[(2)] = inst_37060);

(statearr_37100_37121[(1)] = (5));


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
});})(c__35767__auto___37106,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35677__auto__,c__35767__auto___37106,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35678__auto__ = null;
var cljs$core$async$state_machine__35678__auto____0 = (function (){
var statearr_37101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37101[(0)] = cljs$core$async$state_machine__35678__auto__);

(statearr_37101[(1)] = (1));

return statearr_37101;
});
var cljs$core$async$state_machine__35678__auto____1 = (function (state_37078){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_37078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e37102){if((e37102 instanceof Object)){
var ex__35681__auto__ = e37102;
var statearr_37103_37122 = state_37078;
(statearr_37103_37122[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37123 = state_37078;
state_37078 = G__37123;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$state_machine__35678__auto__ = function(state_37078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35678__auto____1.call(this,state_37078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35678__auto____0;
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35678__auto____1;
return cljs$core$async$state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___37106,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35769__auto__ = (function (){var statearr_37104 = f__35768__auto__.call(null);
(statearr_37104[(6)] = c__35767__auto___37106);

return statearr_37104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___37106,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__37126 = arguments.length;
switch (G__37126) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35767__auto___37180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___37180,out){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___37180,out){
return (function (state_37158){
var state_val_37159 = (state_37158[(1)]);
if((state_val_37159 === (7))){
var inst_37138 = (state_37158[(7)]);
var inst_37137 = (state_37158[(8)]);
var inst_37137__$1 = (state_37158[(2)]);
var inst_37138__$1 = cljs.core.nth.call(null,inst_37137__$1,(0),null);
var inst_37139 = cljs.core.nth.call(null,inst_37137__$1,(1),null);
var inst_37140 = (inst_37138__$1 == null);
var state_37158__$1 = (function (){var statearr_37160 = state_37158;
(statearr_37160[(7)] = inst_37138__$1);

(statearr_37160[(8)] = inst_37137__$1);

(statearr_37160[(9)] = inst_37139);

return statearr_37160;
})();
if(cljs.core.truth_(inst_37140)){
var statearr_37161_37181 = state_37158__$1;
(statearr_37161_37181[(1)] = (8));

} else {
var statearr_37162_37182 = state_37158__$1;
(statearr_37162_37182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37159 === (1))){
var inst_37127 = cljs.core.vec.call(null,chs);
var inst_37128 = inst_37127;
var state_37158__$1 = (function (){var statearr_37163 = state_37158;
(statearr_37163[(10)] = inst_37128);

return statearr_37163;
})();
var statearr_37164_37183 = state_37158__$1;
(statearr_37164_37183[(2)] = null);

(statearr_37164_37183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37159 === (4))){
var inst_37128 = (state_37158[(10)]);
var state_37158__$1 = state_37158;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37158__$1,(7),inst_37128);
} else {
if((state_val_37159 === (6))){
var inst_37154 = (state_37158[(2)]);
var state_37158__$1 = state_37158;
var statearr_37165_37184 = state_37158__$1;
(statearr_37165_37184[(2)] = inst_37154);

(statearr_37165_37184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37159 === (3))){
var inst_37156 = (state_37158[(2)]);
var state_37158__$1 = state_37158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37158__$1,inst_37156);
} else {
if((state_val_37159 === (2))){
var inst_37128 = (state_37158[(10)]);
var inst_37130 = cljs.core.count.call(null,inst_37128);
var inst_37131 = (inst_37130 > (0));
var state_37158__$1 = state_37158;
if(cljs.core.truth_(inst_37131)){
var statearr_37167_37185 = state_37158__$1;
(statearr_37167_37185[(1)] = (4));

} else {
var statearr_37168_37186 = state_37158__$1;
(statearr_37168_37186[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37159 === (11))){
var inst_37128 = (state_37158[(10)]);
var inst_37147 = (state_37158[(2)]);
var tmp37166 = inst_37128;
var inst_37128__$1 = tmp37166;
var state_37158__$1 = (function (){var statearr_37169 = state_37158;
(statearr_37169[(11)] = inst_37147);

(statearr_37169[(10)] = inst_37128__$1);

return statearr_37169;
})();
var statearr_37170_37187 = state_37158__$1;
(statearr_37170_37187[(2)] = null);

(statearr_37170_37187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37159 === (9))){
var inst_37138 = (state_37158[(7)]);
var state_37158__$1 = state_37158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37158__$1,(11),out,inst_37138);
} else {
if((state_val_37159 === (5))){
var inst_37152 = cljs.core.async.close_BANG_.call(null,out);
var state_37158__$1 = state_37158;
var statearr_37171_37188 = state_37158__$1;
(statearr_37171_37188[(2)] = inst_37152);

(statearr_37171_37188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37159 === (10))){
var inst_37150 = (state_37158[(2)]);
var state_37158__$1 = state_37158;
var statearr_37172_37189 = state_37158__$1;
(statearr_37172_37189[(2)] = inst_37150);

(statearr_37172_37189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37159 === (8))){
var inst_37138 = (state_37158[(7)]);
var inst_37128 = (state_37158[(10)]);
var inst_37137 = (state_37158[(8)]);
var inst_37139 = (state_37158[(9)]);
var inst_37142 = (function (){var cs = inst_37128;
var vec__37133 = inst_37137;
var v = inst_37138;
var c = inst_37139;
return ((function (cs,vec__37133,v,c,inst_37138,inst_37128,inst_37137,inst_37139,state_val_37159,c__35767__auto___37180,out){
return (function (p1__37124_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37124_SHARP_);
});
;})(cs,vec__37133,v,c,inst_37138,inst_37128,inst_37137,inst_37139,state_val_37159,c__35767__auto___37180,out))
})();
var inst_37143 = cljs.core.filterv.call(null,inst_37142,inst_37128);
var inst_37128__$1 = inst_37143;
var state_37158__$1 = (function (){var statearr_37173 = state_37158;
(statearr_37173[(10)] = inst_37128__$1);

return statearr_37173;
})();
var statearr_37174_37190 = state_37158__$1;
(statearr_37174_37190[(2)] = null);

(statearr_37174_37190[(1)] = (2));


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
});})(c__35767__auto___37180,out))
;
return ((function (switch__35677__auto__,c__35767__auto___37180,out){
return (function() {
var cljs$core$async$state_machine__35678__auto__ = null;
var cljs$core$async$state_machine__35678__auto____0 = (function (){
var statearr_37175 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37175[(0)] = cljs$core$async$state_machine__35678__auto__);

(statearr_37175[(1)] = (1));

return statearr_37175;
});
var cljs$core$async$state_machine__35678__auto____1 = (function (state_37158){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_37158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e37176){if((e37176 instanceof Object)){
var ex__35681__auto__ = e37176;
var statearr_37177_37191 = state_37158;
(statearr_37177_37191[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37192 = state_37158;
state_37158 = G__37192;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$state_machine__35678__auto__ = function(state_37158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35678__auto____1.call(this,state_37158);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35678__auto____0;
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35678__auto____1;
return cljs$core$async$state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___37180,out))
})();
var state__35769__auto__ = (function (){var statearr_37178 = f__35768__auto__.call(null);
(statearr_37178[(6)] = c__35767__auto___37180);

return statearr_37178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___37180,out))
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
var G__37194 = arguments.length;
switch (G__37194) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35767__auto___37239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___37239,out){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___37239,out){
return (function (state_37218){
var state_val_37219 = (state_37218[(1)]);
if((state_val_37219 === (7))){
var inst_37200 = (state_37218[(7)]);
var inst_37200__$1 = (state_37218[(2)]);
var inst_37201 = (inst_37200__$1 == null);
var inst_37202 = cljs.core.not.call(null,inst_37201);
var state_37218__$1 = (function (){var statearr_37220 = state_37218;
(statearr_37220[(7)] = inst_37200__$1);

return statearr_37220;
})();
if(inst_37202){
var statearr_37221_37240 = state_37218__$1;
(statearr_37221_37240[(1)] = (8));

} else {
var statearr_37222_37241 = state_37218__$1;
(statearr_37222_37241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37219 === (1))){
var inst_37195 = (0);
var state_37218__$1 = (function (){var statearr_37223 = state_37218;
(statearr_37223[(8)] = inst_37195);

return statearr_37223;
})();
var statearr_37224_37242 = state_37218__$1;
(statearr_37224_37242[(2)] = null);

(statearr_37224_37242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37219 === (4))){
var state_37218__$1 = state_37218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37218__$1,(7),ch);
} else {
if((state_val_37219 === (6))){
var inst_37213 = (state_37218[(2)]);
var state_37218__$1 = state_37218;
var statearr_37225_37243 = state_37218__$1;
(statearr_37225_37243[(2)] = inst_37213);

(statearr_37225_37243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37219 === (3))){
var inst_37215 = (state_37218[(2)]);
var inst_37216 = cljs.core.async.close_BANG_.call(null,out);
var state_37218__$1 = (function (){var statearr_37226 = state_37218;
(statearr_37226[(9)] = inst_37215);

return statearr_37226;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37218__$1,inst_37216);
} else {
if((state_val_37219 === (2))){
var inst_37195 = (state_37218[(8)]);
var inst_37197 = (inst_37195 < n);
var state_37218__$1 = state_37218;
if(cljs.core.truth_(inst_37197)){
var statearr_37227_37244 = state_37218__$1;
(statearr_37227_37244[(1)] = (4));

} else {
var statearr_37228_37245 = state_37218__$1;
(statearr_37228_37245[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37219 === (11))){
var inst_37195 = (state_37218[(8)]);
var inst_37205 = (state_37218[(2)]);
var inst_37206 = (inst_37195 + (1));
var inst_37195__$1 = inst_37206;
var state_37218__$1 = (function (){var statearr_37229 = state_37218;
(statearr_37229[(8)] = inst_37195__$1);

(statearr_37229[(10)] = inst_37205);

return statearr_37229;
})();
var statearr_37230_37246 = state_37218__$1;
(statearr_37230_37246[(2)] = null);

(statearr_37230_37246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37219 === (9))){
var state_37218__$1 = state_37218;
var statearr_37231_37247 = state_37218__$1;
(statearr_37231_37247[(2)] = null);

(statearr_37231_37247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37219 === (5))){
var state_37218__$1 = state_37218;
var statearr_37232_37248 = state_37218__$1;
(statearr_37232_37248[(2)] = null);

(statearr_37232_37248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37219 === (10))){
var inst_37210 = (state_37218[(2)]);
var state_37218__$1 = state_37218;
var statearr_37233_37249 = state_37218__$1;
(statearr_37233_37249[(2)] = inst_37210);

(statearr_37233_37249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37219 === (8))){
var inst_37200 = (state_37218[(7)]);
var state_37218__$1 = state_37218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37218__$1,(11),out,inst_37200);
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
});})(c__35767__auto___37239,out))
;
return ((function (switch__35677__auto__,c__35767__auto___37239,out){
return (function() {
var cljs$core$async$state_machine__35678__auto__ = null;
var cljs$core$async$state_machine__35678__auto____0 = (function (){
var statearr_37234 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37234[(0)] = cljs$core$async$state_machine__35678__auto__);

(statearr_37234[(1)] = (1));

return statearr_37234;
});
var cljs$core$async$state_machine__35678__auto____1 = (function (state_37218){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_37218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e37235){if((e37235 instanceof Object)){
var ex__35681__auto__ = e37235;
var statearr_37236_37250 = state_37218;
(statearr_37236_37250[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37251 = state_37218;
state_37218 = G__37251;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$state_machine__35678__auto__ = function(state_37218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35678__auto____1.call(this,state_37218);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35678__auto____0;
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35678__auto____1;
return cljs$core$async$state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___37239,out))
})();
var state__35769__auto__ = (function (){var statearr_37237 = f__35768__auto__.call(null);
(statearr_37237[(6)] = c__35767__auto___37239);

return statearr_37237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___37239,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37253 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37253 = (function (f,ch,meta37254){
this.f = f;
this.ch = ch;
this.meta37254 = meta37254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37255,meta37254__$1){
var self__ = this;
var _37255__$1 = this;
return (new cljs.core.async.t_cljs$core$async37253(self__.f,self__.ch,meta37254__$1));
});

cljs.core.async.t_cljs$core$async37253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37255){
var self__ = this;
var _37255__$1 = this;
return self__.meta37254;
});

cljs.core.async.t_cljs$core$async37253.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37253.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37253.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37253.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37253.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async37256 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37256 = (function (f,ch,meta37254,_,fn1,meta37257){
this.f = f;
this.ch = ch;
this.meta37254 = meta37254;
this._ = _;
this.fn1 = fn1;
this.meta37257 = meta37257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37258,meta37257__$1){
var self__ = this;
var _37258__$1 = this;
return (new cljs.core.async.t_cljs$core$async37256(self__.f,self__.ch,self__.meta37254,self__._,self__.fn1,meta37257__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async37256.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37258){
var self__ = this;
var _37258__$1 = this;
return self__.meta37257;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37256.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37256.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37252_SHARP_){
return f1.call(null,(((p1__37252_SHARP_ == null))?null:self__.f.call(null,p1__37252_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async37256.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37254","meta37254",-1973060909,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37253","cljs.core.async/t_cljs$core$async37253",-2076964039,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37257","meta37257",-337943557,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37256.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37256";

cljs.core.async.t_cljs$core$async37256.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30901__auto__,writer__30902__auto__,opt__30903__auto__){
return cljs.core._write.call(null,writer__30902__auto__,"cljs.core.async/t_cljs$core$async37256");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async37256 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37256(f__$1,ch__$1,meta37254__$1,___$2,fn1__$1,meta37257){
return (new cljs.core.async.t_cljs$core$async37256(f__$1,ch__$1,meta37254__$1,___$2,fn1__$1,meta37257));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async37256(self__.f,self__.ch,self__.meta37254,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30218__auto__ = ret;
if(cljs.core.truth_(and__30218__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30218__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async37253.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37253.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async37253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37254","meta37254",-1973060909,null)], null);
});

cljs.core.async.t_cljs$core$async37253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37253";

cljs.core.async.t_cljs$core$async37253.cljs$lang$ctorPrWriter = (function (this__30901__auto__,writer__30902__auto__,opt__30903__auto__){
return cljs.core._write.call(null,writer__30902__auto__,"cljs.core.async/t_cljs$core$async37253");
});

cljs.core.async.__GT_t_cljs$core$async37253 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37253(f__$1,ch__$1,meta37254){
return (new cljs.core.async.t_cljs$core$async37253(f__$1,ch__$1,meta37254));
});

}

return (new cljs.core.async.t_cljs$core$async37253(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37259 = (function (f,ch,meta37260){
this.f = f;
this.ch = ch;
this.meta37260 = meta37260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37261,meta37260__$1){
var self__ = this;
var _37261__$1 = this;
return (new cljs.core.async.t_cljs$core$async37259(self__.f,self__.ch,meta37260__$1));
});

cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37261){
var self__ = this;
var _37261__$1 = this;
return self__.meta37260;
});

cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async37259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37260","meta37260",1270711298,null)], null);
});

cljs.core.async.t_cljs$core$async37259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37259";

cljs.core.async.t_cljs$core$async37259.cljs$lang$ctorPrWriter = (function (this__30901__auto__,writer__30902__auto__,opt__30903__auto__){
return cljs.core._write.call(null,writer__30902__auto__,"cljs.core.async/t_cljs$core$async37259");
});

cljs.core.async.__GT_t_cljs$core$async37259 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37259(f__$1,ch__$1,meta37260){
return (new cljs.core.async.t_cljs$core$async37259(f__$1,ch__$1,meta37260));
});

}

return (new cljs.core.async.t_cljs$core$async37259(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async37262 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37262 = (function (p,ch,meta37263){
this.p = p;
this.ch = ch;
this.meta37263 = meta37263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37264,meta37263__$1){
var self__ = this;
var _37264__$1 = this;
return (new cljs.core.async.t_cljs$core$async37262(self__.p,self__.ch,meta37263__$1));
});

cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37264){
var self__ = this;
var _37264__$1 = this;
return self__.meta37263;
});

cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async37262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37263","meta37263",336908905,null)], null);
});

cljs.core.async.t_cljs$core$async37262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37262";

cljs.core.async.t_cljs$core$async37262.cljs$lang$ctorPrWriter = (function (this__30901__auto__,writer__30902__auto__,opt__30903__auto__){
return cljs.core._write.call(null,writer__30902__auto__,"cljs.core.async/t_cljs$core$async37262");
});

cljs.core.async.__GT_t_cljs$core$async37262 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37262(p__$1,ch__$1,meta37263){
return (new cljs.core.async.t_cljs$core$async37262(p__$1,ch__$1,meta37263));
});

}

return (new cljs.core.async.t_cljs$core$async37262(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37266 = arguments.length;
switch (G__37266) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35767__auto___37306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___37306,out){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___37306,out){
return (function (state_37287){
var state_val_37288 = (state_37287[(1)]);
if((state_val_37288 === (7))){
var inst_37283 = (state_37287[(2)]);
var state_37287__$1 = state_37287;
var statearr_37289_37307 = state_37287__$1;
(statearr_37289_37307[(2)] = inst_37283);

(statearr_37289_37307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (1))){
var state_37287__$1 = state_37287;
var statearr_37290_37308 = state_37287__$1;
(statearr_37290_37308[(2)] = null);

(statearr_37290_37308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (4))){
var inst_37269 = (state_37287[(7)]);
var inst_37269__$1 = (state_37287[(2)]);
var inst_37270 = (inst_37269__$1 == null);
var state_37287__$1 = (function (){var statearr_37291 = state_37287;
(statearr_37291[(7)] = inst_37269__$1);

return statearr_37291;
})();
if(cljs.core.truth_(inst_37270)){
var statearr_37292_37309 = state_37287__$1;
(statearr_37292_37309[(1)] = (5));

} else {
var statearr_37293_37310 = state_37287__$1;
(statearr_37293_37310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (6))){
var inst_37269 = (state_37287[(7)]);
var inst_37274 = p.call(null,inst_37269);
var state_37287__$1 = state_37287;
if(cljs.core.truth_(inst_37274)){
var statearr_37294_37311 = state_37287__$1;
(statearr_37294_37311[(1)] = (8));

} else {
var statearr_37295_37312 = state_37287__$1;
(statearr_37295_37312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (3))){
var inst_37285 = (state_37287[(2)]);
var state_37287__$1 = state_37287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37287__$1,inst_37285);
} else {
if((state_val_37288 === (2))){
var state_37287__$1 = state_37287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37287__$1,(4),ch);
} else {
if((state_val_37288 === (11))){
var inst_37277 = (state_37287[(2)]);
var state_37287__$1 = state_37287;
var statearr_37296_37313 = state_37287__$1;
(statearr_37296_37313[(2)] = inst_37277);

(statearr_37296_37313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (9))){
var state_37287__$1 = state_37287;
var statearr_37297_37314 = state_37287__$1;
(statearr_37297_37314[(2)] = null);

(statearr_37297_37314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (5))){
var inst_37272 = cljs.core.async.close_BANG_.call(null,out);
var state_37287__$1 = state_37287;
var statearr_37298_37315 = state_37287__$1;
(statearr_37298_37315[(2)] = inst_37272);

(statearr_37298_37315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (10))){
var inst_37280 = (state_37287[(2)]);
var state_37287__$1 = (function (){var statearr_37299 = state_37287;
(statearr_37299[(8)] = inst_37280);

return statearr_37299;
})();
var statearr_37300_37316 = state_37287__$1;
(statearr_37300_37316[(2)] = null);

(statearr_37300_37316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (8))){
var inst_37269 = (state_37287[(7)]);
var state_37287__$1 = state_37287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37287__$1,(11),out,inst_37269);
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
});})(c__35767__auto___37306,out))
;
return ((function (switch__35677__auto__,c__35767__auto___37306,out){
return (function() {
var cljs$core$async$state_machine__35678__auto__ = null;
var cljs$core$async$state_machine__35678__auto____0 = (function (){
var statearr_37301 = [null,null,null,null,null,null,null,null,null];
(statearr_37301[(0)] = cljs$core$async$state_machine__35678__auto__);

(statearr_37301[(1)] = (1));

return statearr_37301;
});
var cljs$core$async$state_machine__35678__auto____1 = (function (state_37287){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_37287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e37302){if((e37302 instanceof Object)){
var ex__35681__auto__ = e37302;
var statearr_37303_37317 = state_37287;
(statearr_37303_37317[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37318 = state_37287;
state_37287 = G__37318;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$state_machine__35678__auto__ = function(state_37287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35678__auto____1.call(this,state_37287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35678__auto____0;
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35678__auto____1;
return cljs$core$async$state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___37306,out))
})();
var state__35769__auto__ = (function (){var statearr_37304 = f__35768__auto__.call(null);
(statearr_37304[(6)] = c__35767__auto___37306);

return statearr_37304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___37306,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37320 = arguments.length;
switch (G__37320) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__35767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto__){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto__){
return (function (state_37383){
var state_val_37384 = (state_37383[(1)]);
if((state_val_37384 === (7))){
var inst_37379 = (state_37383[(2)]);
var state_37383__$1 = state_37383;
var statearr_37385_37423 = state_37383__$1;
(statearr_37385_37423[(2)] = inst_37379);

(statearr_37385_37423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (20))){
var inst_37349 = (state_37383[(7)]);
var inst_37360 = (state_37383[(2)]);
var inst_37361 = cljs.core.next.call(null,inst_37349);
var inst_37335 = inst_37361;
var inst_37336 = null;
var inst_37337 = (0);
var inst_37338 = (0);
var state_37383__$1 = (function (){var statearr_37386 = state_37383;
(statearr_37386[(8)] = inst_37337);

(statearr_37386[(9)] = inst_37336);

(statearr_37386[(10)] = inst_37360);

(statearr_37386[(11)] = inst_37338);

(statearr_37386[(12)] = inst_37335);

return statearr_37386;
})();
var statearr_37387_37424 = state_37383__$1;
(statearr_37387_37424[(2)] = null);

(statearr_37387_37424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (1))){
var state_37383__$1 = state_37383;
var statearr_37388_37425 = state_37383__$1;
(statearr_37388_37425[(2)] = null);

(statearr_37388_37425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (4))){
var inst_37324 = (state_37383[(13)]);
var inst_37324__$1 = (state_37383[(2)]);
var inst_37325 = (inst_37324__$1 == null);
var state_37383__$1 = (function (){var statearr_37389 = state_37383;
(statearr_37389[(13)] = inst_37324__$1);

return statearr_37389;
})();
if(cljs.core.truth_(inst_37325)){
var statearr_37390_37426 = state_37383__$1;
(statearr_37390_37426[(1)] = (5));

} else {
var statearr_37391_37427 = state_37383__$1;
(statearr_37391_37427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (15))){
var state_37383__$1 = state_37383;
var statearr_37395_37428 = state_37383__$1;
(statearr_37395_37428[(2)] = null);

(statearr_37395_37428[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (21))){
var state_37383__$1 = state_37383;
var statearr_37396_37429 = state_37383__$1;
(statearr_37396_37429[(2)] = null);

(statearr_37396_37429[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (13))){
var inst_37337 = (state_37383[(8)]);
var inst_37336 = (state_37383[(9)]);
var inst_37338 = (state_37383[(11)]);
var inst_37335 = (state_37383[(12)]);
var inst_37345 = (state_37383[(2)]);
var inst_37346 = (inst_37338 + (1));
var tmp37392 = inst_37337;
var tmp37393 = inst_37336;
var tmp37394 = inst_37335;
var inst_37335__$1 = tmp37394;
var inst_37336__$1 = tmp37393;
var inst_37337__$1 = tmp37392;
var inst_37338__$1 = inst_37346;
var state_37383__$1 = (function (){var statearr_37397 = state_37383;
(statearr_37397[(8)] = inst_37337__$1);

(statearr_37397[(9)] = inst_37336__$1);

(statearr_37397[(14)] = inst_37345);

(statearr_37397[(11)] = inst_37338__$1);

(statearr_37397[(12)] = inst_37335__$1);

return statearr_37397;
})();
var statearr_37398_37430 = state_37383__$1;
(statearr_37398_37430[(2)] = null);

(statearr_37398_37430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (22))){
var state_37383__$1 = state_37383;
var statearr_37399_37431 = state_37383__$1;
(statearr_37399_37431[(2)] = null);

(statearr_37399_37431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (6))){
var inst_37324 = (state_37383[(13)]);
var inst_37333 = f.call(null,inst_37324);
var inst_37334 = cljs.core.seq.call(null,inst_37333);
var inst_37335 = inst_37334;
var inst_37336 = null;
var inst_37337 = (0);
var inst_37338 = (0);
var state_37383__$1 = (function (){var statearr_37400 = state_37383;
(statearr_37400[(8)] = inst_37337);

(statearr_37400[(9)] = inst_37336);

(statearr_37400[(11)] = inst_37338);

(statearr_37400[(12)] = inst_37335);

return statearr_37400;
})();
var statearr_37401_37432 = state_37383__$1;
(statearr_37401_37432[(2)] = null);

(statearr_37401_37432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (17))){
var inst_37349 = (state_37383[(7)]);
var inst_37353 = cljs.core.chunk_first.call(null,inst_37349);
var inst_37354 = cljs.core.chunk_rest.call(null,inst_37349);
var inst_37355 = cljs.core.count.call(null,inst_37353);
var inst_37335 = inst_37354;
var inst_37336 = inst_37353;
var inst_37337 = inst_37355;
var inst_37338 = (0);
var state_37383__$1 = (function (){var statearr_37402 = state_37383;
(statearr_37402[(8)] = inst_37337);

(statearr_37402[(9)] = inst_37336);

(statearr_37402[(11)] = inst_37338);

(statearr_37402[(12)] = inst_37335);

return statearr_37402;
})();
var statearr_37403_37433 = state_37383__$1;
(statearr_37403_37433[(2)] = null);

(statearr_37403_37433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (3))){
var inst_37381 = (state_37383[(2)]);
var state_37383__$1 = state_37383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37383__$1,inst_37381);
} else {
if((state_val_37384 === (12))){
var inst_37369 = (state_37383[(2)]);
var state_37383__$1 = state_37383;
var statearr_37404_37434 = state_37383__$1;
(statearr_37404_37434[(2)] = inst_37369);

(statearr_37404_37434[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (2))){
var state_37383__$1 = state_37383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37383__$1,(4),in$);
} else {
if((state_val_37384 === (23))){
var inst_37377 = (state_37383[(2)]);
var state_37383__$1 = state_37383;
var statearr_37405_37435 = state_37383__$1;
(statearr_37405_37435[(2)] = inst_37377);

(statearr_37405_37435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (19))){
var inst_37364 = (state_37383[(2)]);
var state_37383__$1 = state_37383;
var statearr_37406_37436 = state_37383__$1;
(statearr_37406_37436[(2)] = inst_37364);

(statearr_37406_37436[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (11))){
var inst_37349 = (state_37383[(7)]);
var inst_37335 = (state_37383[(12)]);
var inst_37349__$1 = cljs.core.seq.call(null,inst_37335);
var state_37383__$1 = (function (){var statearr_37407 = state_37383;
(statearr_37407[(7)] = inst_37349__$1);

return statearr_37407;
})();
if(inst_37349__$1){
var statearr_37408_37437 = state_37383__$1;
(statearr_37408_37437[(1)] = (14));

} else {
var statearr_37409_37438 = state_37383__$1;
(statearr_37409_37438[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (9))){
var inst_37371 = (state_37383[(2)]);
var inst_37372 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37383__$1 = (function (){var statearr_37410 = state_37383;
(statearr_37410[(15)] = inst_37371);

return statearr_37410;
})();
if(cljs.core.truth_(inst_37372)){
var statearr_37411_37439 = state_37383__$1;
(statearr_37411_37439[(1)] = (21));

} else {
var statearr_37412_37440 = state_37383__$1;
(statearr_37412_37440[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (5))){
var inst_37327 = cljs.core.async.close_BANG_.call(null,out);
var state_37383__$1 = state_37383;
var statearr_37413_37441 = state_37383__$1;
(statearr_37413_37441[(2)] = inst_37327);

(statearr_37413_37441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (14))){
var inst_37349 = (state_37383[(7)]);
var inst_37351 = cljs.core.chunked_seq_QMARK_.call(null,inst_37349);
var state_37383__$1 = state_37383;
if(inst_37351){
var statearr_37414_37442 = state_37383__$1;
(statearr_37414_37442[(1)] = (17));

} else {
var statearr_37415_37443 = state_37383__$1;
(statearr_37415_37443[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (16))){
var inst_37367 = (state_37383[(2)]);
var state_37383__$1 = state_37383;
var statearr_37416_37444 = state_37383__$1;
(statearr_37416_37444[(2)] = inst_37367);

(statearr_37416_37444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (10))){
var inst_37336 = (state_37383[(9)]);
var inst_37338 = (state_37383[(11)]);
var inst_37343 = cljs.core._nth.call(null,inst_37336,inst_37338);
var state_37383__$1 = state_37383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37383__$1,(13),out,inst_37343);
} else {
if((state_val_37384 === (18))){
var inst_37349 = (state_37383[(7)]);
var inst_37358 = cljs.core.first.call(null,inst_37349);
var state_37383__$1 = state_37383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37383__$1,(20),out,inst_37358);
} else {
if((state_val_37384 === (8))){
var inst_37337 = (state_37383[(8)]);
var inst_37338 = (state_37383[(11)]);
var inst_37340 = (inst_37338 < inst_37337);
var inst_37341 = inst_37340;
var state_37383__$1 = state_37383;
if(cljs.core.truth_(inst_37341)){
var statearr_37417_37445 = state_37383__$1;
(statearr_37417_37445[(1)] = (10));

} else {
var statearr_37418_37446 = state_37383__$1;
(statearr_37418_37446[(1)] = (11));

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
});})(c__35767__auto__))
;
return ((function (switch__35677__auto__,c__35767__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35678__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35678__auto____0 = (function (){
var statearr_37419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37419[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35678__auto__);

(statearr_37419[(1)] = (1));

return statearr_37419;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35678__auto____1 = (function (state_37383){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_37383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e37420){if((e37420 instanceof Object)){
var ex__35681__auto__ = e37420;
var statearr_37421_37447 = state_37383;
(statearr_37421_37447[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37448 = state_37383;
state_37383 = G__37448;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35678__auto__ = function(state_37383){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35678__auto____1.call(this,state_37383);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35678__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35678__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto__))
})();
var state__35769__auto__ = (function (){var statearr_37422 = f__35768__auto__.call(null);
(statearr_37422[(6)] = c__35767__auto__);

return statearr_37422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto__))
);

return c__35767__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37450 = arguments.length;
switch (G__37450) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__37453 = arguments.length;
switch (G__37453) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__37456 = arguments.length;
switch (G__37456) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35767__auto___37503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___37503,out){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___37503,out){
return (function (state_37480){
var state_val_37481 = (state_37480[(1)]);
if((state_val_37481 === (7))){
var inst_37475 = (state_37480[(2)]);
var state_37480__$1 = state_37480;
var statearr_37482_37504 = state_37480__$1;
(statearr_37482_37504[(2)] = inst_37475);

(statearr_37482_37504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37481 === (1))){
var inst_37457 = null;
var state_37480__$1 = (function (){var statearr_37483 = state_37480;
(statearr_37483[(7)] = inst_37457);

return statearr_37483;
})();
var statearr_37484_37505 = state_37480__$1;
(statearr_37484_37505[(2)] = null);

(statearr_37484_37505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37481 === (4))){
var inst_37460 = (state_37480[(8)]);
var inst_37460__$1 = (state_37480[(2)]);
var inst_37461 = (inst_37460__$1 == null);
var inst_37462 = cljs.core.not.call(null,inst_37461);
var state_37480__$1 = (function (){var statearr_37485 = state_37480;
(statearr_37485[(8)] = inst_37460__$1);

return statearr_37485;
})();
if(inst_37462){
var statearr_37486_37506 = state_37480__$1;
(statearr_37486_37506[(1)] = (5));

} else {
var statearr_37487_37507 = state_37480__$1;
(statearr_37487_37507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37481 === (6))){
var state_37480__$1 = state_37480;
var statearr_37488_37508 = state_37480__$1;
(statearr_37488_37508[(2)] = null);

(statearr_37488_37508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37481 === (3))){
var inst_37477 = (state_37480[(2)]);
var inst_37478 = cljs.core.async.close_BANG_.call(null,out);
var state_37480__$1 = (function (){var statearr_37489 = state_37480;
(statearr_37489[(9)] = inst_37477);

return statearr_37489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37480__$1,inst_37478);
} else {
if((state_val_37481 === (2))){
var state_37480__$1 = state_37480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37480__$1,(4),ch);
} else {
if((state_val_37481 === (11))){
var inst_37460 = (state_37480[(8)]);
var inst_37469 = (state_37480[(2)]);
var inst_37457 = inst_37460;
var state_37480__$1 = (function (){var statearr_37490 = state_37480;
(statearr_37490[(10)] = inst_37469);

(statearr_37490[(7)] = inst_37457);

return statearr_37490;
})();
var statearr_37491_37509 = state_37480__$1;
(statearr_37491_37509[(2)] = null);

(statearr_37491_37509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37481 === (9))){
var inst_37460 = (state_37480[(8)]);
var state_37480__$1 = state_37480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37480__$1,(11),out,inst_37460);
} else {
if((state_val_37481 === (5))){
var inst_37457 = (state_37480[(7)]);
var inst_37460 = (state_37480[(8)]);
var inst_37464 = cljs.core._EQ_.call(null,inst_37460,inst_37457);
var state_37480__$1 = state_37480;
if(inst_37464){
var statearr_37493_37510 = state_37480__$1;
(statearr_37493_37510[(1)] = (8));

} else {
var statearr_37494_37511 = state_37480__$1;
(statearr_37494_37511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37481 === (10))){
var inst_37472 = (state_37480[(2)]);
var state_37480__$1 = state_37480;
var statearr_37495_37512 = state_37480__$1;
(statearr_37495_37512[(2)] = inst_37472);

(statearr_37495_37512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37481 === (8))){
var inst_37457 = (state_37480[(7)]);
var tmp37492 = inst_37457;
var inst_37457__$1 = tmp37492;
var state_37480__$1 = (function (){var statearr_37496 = state_37480;
(statearr_37496[(7)] = inst_37457__$1);

return statearr_37496;
})();
var statearr_37497_37513 = state_37480__$1;
(statearr_37497_37513[(2)] = null);

(statearr_37497_37513[(1)] = (2));


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
});})(c__35767__auto___37503,out))
;
return ((function (switch__35677__auto__,c__35767__auto___37503,out){
return (function() {
var cljs$core$async$state_machine__35678__auto__ = null;
var cljs$core$async$state_machine__35678__auto____0 = (function (){
var statearr_37498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37498[(0)] = cljs$core$async$state_machine__35678__auto__);

(statearr_37498[(1)] = (1));

return statearr_37498;
});
var cljs$core$async$state_machine__35678__auto____1 = (function (state_37480){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_37480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e37499){if((e37499 instanceof Object)){
var ex__35681__auto__ = e37499;
var statearr_37500_37514 = state_37480;
(statearr_37500_37514[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37515 = state_37480;
state_37480 = G__37515;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$state_machine__35678__auto__ = function(state_37480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35678__auto____1.call(this,state_37480);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35678__auto____0;
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35678__auto____1;
return cljs$core$async$state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___37503,out))
})();
var state__35769__auto__ = (function (){var statearr_37501 = f__35768__auto__.call(null);
(statearr_37501[(6)] = c__35767__auto___37503);

return statearr_37501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___37503,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37517 = arguments.length;
switch (G__37517) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35767__auto___37583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___37583,out){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___37583,out){
return (function (state_37555){
var state_val_37556 = (state_37555[(1)]);
if((state_val_37556 === (7))){
var inst_37551 = (state_37555[(2)]);
var state_37555__$1 = state_37555;
var statearr_37557_37584 = state_37555__$1;
(statearr_37557_37584[(2)] = inst_37551);

(statearr_37557_37584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37556 === (1))){
var inst_37518 = (new Array(n));
var inst_37519 = inst_37518;
var inst_37520 = (0);
var state_37555__$1 = (function (){var statearr_37558 = state_37555;
(statearr_37558[(7)] = inst_37520);

(statearr_37558[(8)] = inst_37519);

return statearr_37558;
})();
var statearr_37559_37585 = state_37555__$1;
(statearr_37559_37585[(2)] = null);

(statearr_37559_37585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37556 === (4))){
var inst_37523 = (state_37555[(9)]);
var inst_37523__$1 = (state_37555[(2)]);
var inst_37524 = (inst_37523__$1 == null);
var inst_37525 = cljs.core.not.call(null,inst_37524);
var state_37555__$1 = (function (){var statearr_37560 = state_37555;
(statearr_37560[(9)] = inst_37523__$1);

return statearr_37560;
})();
if(inst_37525){
var statearr_37561_37586 = state_37555__$1;
(statearr_37561_37586[(1)] = (5));

} else {
var statearr_37562_37587 = state_37555__$1;
(statearr_37562_37587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37556 === (15))){
var inst_37545 = (state_37555[(2)]);
var state_37555__$1 = state_37555;
var statearr_37563_37588 = state_37555__$1;
(statearr_37563_37588[(2)] = inst_37545);

(statearr_37563_37588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37556 === (13))){
var state_37555__$1 = state_37555;
var statearr_37564_37589 = state_37555__$1;
(statearr_37564_37589[(2)] = null);

(statearr_37564_37589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37556 === (6))){
var inst_37520 = (state_37555[(7)]);
var inst_37541 = (inst_37520 > (0));
var state_37555__$1 = state_37555;
if(cljs.core.truth_(inst_37541)){
var statearr_37565_37590 = state_37555__$1;
(statearr_37565_37590[(1)] = (12));

} else {
var statearr_37566_37591 = state_37555__$1;
(statearr_37566_37591[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37556 === (3))){
var inst_37553 = (state_37555[(2)]);
var state_37555__$1 = state_37555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37555__$1,inst_37553);
} else {
if((state_val_37556 === (12))){
var inst_37519 = (state_37555[(8)]);
var inst_37543 = cljs.core.vec.call(null,inst_37519);
var state_37555__$1 = state_37555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37555__$1,(15),out,inst_37543);
} else {
if((state_val_37556 === (2))){
var state_37555__$1 = state_37555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37555__$1,(4),ch);
} else {
if((state_val_37556 === (11))){
var inst_37535 = (state_37555[(2)]);
var inst_37536 = (new Array(n));
var inst_37519 = inst_37536;
var inst_37520 = (0);
var state_37555__$1 = (function (){var statearr_37567 = state_37555;
(statearr_37567[(10)] = inst_37535);

(statearr_37567[(7)] = inst_37520);

(statearr_37567[(8)] = inst_37519);

return statearr_37567;
})();
var statearr_37568_37592 = state_37555__$1;
(statearr_37568_37592[(2)] = null);

(statearr_37568_37592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37556 === (9))){
var inst_37519 = (state_37555[(8)]);
var inst_37533 = cljs.core.vec.call(null,inst_37519);
var state_37555__$1 = state_37555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37555__$1,(11),out,inst_37533);
} else {
if((state_val_37556 === (5))){
var inst_37520 = (state_37555[(7)]);
var inst_37523 = (state_37555[(9)]);
var inst_37528 = (state_37555[(11)]);
var inst_37519 = (state_37555[(8)]);
var inst_37527 = (inst_37519[inst_37520] = inst_37523);
var inst_37528__$1 = (inst_37520 + (1));
var inst_37529 = (inst_37528__$1 < n);
var state_37555__$1 = (function (){var statearr_37569 = state_37555;
(statearr_37569[(12)] = inst_37527);

(statearr_37569[(11)] = inst_37528__$1);

return statearr_37569;
})();
if(cljs.core.truth_(inst_37529)){
var statearr_37570_37593 = state_37555__$1;
(statearr_37570_37593[(1)] = (8));

} else {
var statearr_37571_37594 = state_37555__$1;
(statearr_37571_37594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37556 === (14))){
var inst_37548 = (state_37555[(2)]);
var inst_37549 = cljs.core.async.close_BANG_.call(null,out);
var state_37555__$1 = (function (){var statearr_37573 = state_37555;
(statearr_37573[(13)] = inst_37548);

return statearr_37573;
})();
var statearr_37574_37595 = state_37555__$1;
(statearr_37574_37595[(2)] = inst_37549);

(statearr_37574_37595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37556 === (10))){
var inst_37539 = (state_37555[(2)]);
var state_37555__$1 = state_37555;
var statearr_37575_37596 = state_37555__$1;
(statearr_37575_37596[(2)] = inst_37539);

(statearr_37575_37596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37556 === (8))){
var inst_37528 = (state_37555[(11)]);
var inst_37519 = (state_37555[(8)]);
var tmp37572 = inst_37519;
var inst_37519__$1 = tmp37572;
var inst_37520 = inst_37528;
var state_37555__$1 = (function (){var statearr_37576 = state_37555;
(statearr_37576[(7)] = inst_37520);

(statearr_37576[(8)] = inst_37519__$1);

return statearr_37576;
})();
var statearr_37577_37597 = state_37555__$1;
(statearr_37577_37597[(2)] = null);

(statearr_37577_37597[(1)] = (2));


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
});})(c__35767__auto___37583,out))
;
return ((function (switch__35677__auto__,c__35767__auto___37583,out){
return (function() {
var cljs$core$async$state_machine__35678__auto__ = null;
var cljs$core$async$state_machine__35678__auto____0 = (function (){
var statearr_37578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37578[(0)] = cljs$core$async$state_machine__35678__auto__);

(statearr_37578[(1)] = (1));

return statearr_37578;
});
var cljs$core$async$state_machine__35678__auto____1 = (function (state_37555){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_37555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e37579){if((e37579 instanceof Object)){
var ex__35681__auto__ = e37579;
var statearr_37580_37598 = state_37555;
(statearr_37580_37598[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37599 = state_37555;
state_37555 = G__37599;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$state_machine__35678__auto__ = function(state_37555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35678__auto____1.call(this,state_37555);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35678__auto____0;
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35678__auto____1;
return cljs$core$async$state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___37583,out))
})();
var state__35769__auto__ = (function (){var statearr_37581 = f__35768__auto__.call(null);
(statearr_37581[(6)] = c__35767__auto___37583);

return statearr_37581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___37583,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37601 = arguments.length;
switch (G__37601) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35767__auto___37671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___37671,out){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___37671,out){
return (function (state_37643){
var state_val_37644 = (state_37643[(1)]);
if((state_val_37644 === (7))){
var inst_37639 = (state_37643[(2)]);
var state_37643__$1 = state_37643;
var statearr_37645_37672 = state_37643__$1;
(statearr_37645_37672[(2)] = inst_37639);

(statearr_37645_37672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37644 === (1))){
var inst_37602 = [];
var inst_37603 = inst_37602;
var inst_37604 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37643__$1 = (function (){var statearr_37646 = state_37643;
(statearr_37646[(7)] = inst_37603);

(statearr_37646[(8)] = inst_37604);

return statearr_37646;
})();
var statearr_37647_37673 = state_37643__$1;
(statearr_37647_37673[(2)] = null);

(statearr_37647_37673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37644 === (4))){
var inst_37607 = (state_37643[(9)]);
var inst_37607__$1 = (state_37643[(2)]);
var inst_37608 = (inst_37607__$1 == null);
var inst_37609 = cljs.core.not.call(null,inst_37608);
var state_37643__$1 = (function (){var statearr_37648 = state_37643;
(statearr_37648[(9)] = inst_37607__$1);

return statearr_37648;
})();
if(inst_37609){
var statearr_37649_37674 = state_37643__$1;
(statearr_37649_37674[(1)] = (5));

} else {
var statearr_37650_37675 = state_37643__$1;
(statearr_37650_37675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37644 === (15))){
var inst_37633 = (state_37643[(2)]);
var state_37643__$1 = state_37643;
var statearr_37651_37676 = state_37643__$1;
(statearr_37651_37676[(2)] = inst_37633);

(statearr_37651_37676[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37644 === (13))){
var state_37643__$1 = state_37643;
var statearr_37652_37677 = state_37643__$1;
(statearr_37652_37677[(2)] = null);

(statearr_37652_37677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37644 === (6))){
var inst_37603 = (state_37643[(7)]);
var inst_37628 = inst_37603.length;
var inst_37629 = (inst_37628 > (0));
var state_37643__$1 = state_37643;
if(cljs.core.truth_(inst_37629)){
var statearr_37653_37678 = state_37643__$1;
(statearr_37653_37678[(1)] = (12));

} else {
var statearr_37654_37679 = state_37643__$1;
(statearr_37654_37679[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37644 === (3))){
var inst_37641 = (state_37643[(2)]);
var state_37643__$1 = state_37643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37643__$1,inst_37641);
} else {
if((state_val_37644 === (12))){
var inst_37603 = (state_37643[(7)]);
var inst_37631 = cljs.core.vec.call(null,inst_37603);
var state_37643__$1 = state_37643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37643__$1,(15),out,inst_37631);
} else {
if((state_val_37644 === (2))){
var state_37643__$1 = state_37643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37643__$1,(4),ch);
} else {
if((state_val_37644 === (11))){
var inst_37607 = (state_37643[(9)]);
var inst_37611 = (state_37643[(10)]);
var inst_37621 = (state_37643[(2)]);
var inst_37622 = [];
var inst_37623 = inst_37622.push(inst_37607);
var inst_37603 = inst_37622;
var inst_37604 = inst_37611;
var state_37643__$1 = (function (){var statearr_37655 = state_37643;
(statearr_37655[(7)] = inst_37603);

(statearr_37655[(11)] = inst_37621);

(statearr_37655[(12)] = inst_37623);

(statearr_37655[(8)] = inst_37604);

return statearr_37655;
})();
var statearr_37656_37680 = state_37643__$1;
(statearr_37656_37680[(2)] = null);

(statearr_37656_37680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37644 === (9))){
var inst_37603 = (state_37643[(7)]);
var inst_37619 = cljs.core.vec.call(null,inst_37603);
var state_37643__$1 = state_37643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37643__$1,(11),out,inst_37619);
} else {
if((state_val_37644 === (5))){
var inst_37607 = (state_37643[(9)]);
var inst_37604 = (state_37643[(8)]);
var inst_37611 = (state_37643[(10)]);
var inst_37611__$1 = f.call(null,inst_37607);
var inst_37612 = cljs.core._EQ_.call(null,inst_37611__$1,inst_37604);
var inst_37613 = cljs.core.keyword_identical_QMARK_.call(null,inst_37604,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37614 = (inst_37612) || (inst_37613);
var state_37643__$1 = (function (){var statearr_37657 = state_37643;
(statearr_37657[(10)] = inst_37611__$1);

return statearr_37657;
})();
if(cljs.core.truth_(inst_37614)){
var statearr_37658_37681 = state_37643__$1;
(statearr_37658_37681[(1)] = (8));

} else {
var statearr_37659_37682 = state_37643__$1;
(statearr_37659_37682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37644 === (14))){
var inst_37636 = (state_37643[(2)]);
var inst_37637 = cljs.core.async.close_BANG_.call(null,out);
var state_37643__$1 = (function (){var statearr_37661 = state_37643;
(statearr_37661[(13)] = inst_37636);

return statearr_37661;
})();
var statearr_37662_37683 = state_37643__$1;
(statearr_37662_37683[(2)] = inst_37637);

(statearr_37662_37683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37644 === (10))){
var inst_37626 = (state_37643[(2)]);
var state_37643__$1 = state_37643;
var statearr_37663_37684 = state_37643__$1;
(statearr_37663_37684[(2)] = inst_37626);

(statearr_37663_37684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37644 === (8))){
var inst_37607 = (state_37643[(9)]);
var inst_37603 = (state_37643[(7)]);
var inst_37611 = (state_37643[(10)]);
var inst_37616 = inst_37603.push(inst_37607);
var tmp37660 = inst_37603;
var inst_37603__$1 = tmp37660;
var inst_37604 = inst_37611;
var state_37643__$1 = (function (){var statearr_37664 = state_37643;
(statearr_37664[(7)] = inst_37603__$1);

(statearr_37664[(14)] = inst_37616);

(statearr_37664[(8)] = inst_37604);

return statearr_37664;
})();
var statearr_37665_37685 = state_37643__$1;
(statearr_37665_37685[(2)] = null);

(statearr_37665_37685[(1)] = (2));


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
});})(c__35767__auto___37671,out))
;
return ((function (switch__35677__auto__,c__35767__auto___37671,out){
return (function() {
var cljs$core$async$state_machine__35678__auto__ = null;
var cljs$core$async$state_machine__35678__auto____0 = (function (){
var statearr_37666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37666[(0)] = cljs$core$async$state_machine__35678__auto__);

(statearr_37666[(1)] = (1));

return statearr_37666;
});
var cljs$core$async$state_machine__35678__auto____1 = (function (state_37643){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_37643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e37667){if((e37667 instanceof Object)){
var ex__35681__auto__ = e37667;
var statearr_37668_37686 = state_37643;
(statearr_37668_37686[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37687 = state_37643;
state_37643 = G__37687;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
cljs$core$async$state_machine__35678__auto__ = function(state_37643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35678__auto____1.call(this,state_37643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35678__auto____0;
cljs$core$async$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35678__auto____1;
return cljs$core$async$state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___37671,out))
})();
var state__35769__auto__ = (function (){var statearr_37669 = f__35768__auto__.call(null);
(statearr_37669[(6)] = c__35767__auto___37671);

return statearr_37669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___37671,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1514673223853
