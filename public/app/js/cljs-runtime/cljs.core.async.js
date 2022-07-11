goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15395 = arguments.length;
switch (G__15395) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15396 = (function (f,blockable,meta15397){
this.f = f;
this.blockable = blockable;
this.meta15397 = meta15397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15398,meta15397__$1){
var self__ = this;
var _15398__$1 = this;
return (new cljs.core.async.t_cljs$core$async15396(self__.f,self__.blockable,meta15397__$1));
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15398){
var self__ = this;
var _15398__$1 = this;
return self__.meta15397;
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15397","meta15397",2040931615,null)], null);
}));

(cljs.core.async.t_cljs$core$async15396.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15396");

(cljs.core.async.t_cljs$core$async15396.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15396");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15396.
 */
cljs.core.async.__GT_t_cljs$core$async15396 = (function cljs$core$async$__GT_t_cljs$core$async15396(f__$1,blockable__$1,meta15397){
return (new cljs.core.async.t_cljs$core$async15396(f__$1,blockable__$1,meta15397));
});

}

return (new cljs.core.async.t_cljs$core$async15396(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__15421 = arguments.length;
switch (G__15421) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15431 = arguments.length;
switch (G__15431) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__15440 = arguments.length;
switch (G__15440) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17438 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17438) : fn1.call(null,val_17438));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17438) : fn1.call(null,val_17438));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15454 = arguments.length;
switch (G__15454) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17445 = n;
var x_17446 = (0);
while(true){
if((x_17446 < n__5636__auto___17445)){
(a[x_17446] = x_17446);

var G__17447 = (x_17446 + (1));
x_17446 = G__17447;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15482 = (function (flag,meta15483){
this.flag = flag;
this.meta15483 = meta15483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15484,meta15483__$1){
var self__ = this;
var _15484__$1 = this;
return (new cljs.core.async.t_cljs$core$async15482(self__.flag,meta15483__$1));
}));

(cljs.core.async.t_cljs$core$async15482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15484){
var self__ = this;
var _15484__$1 = this;
return self__.meta15483;
}));

(cljs.core.async.t_cljs$core$async15482.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15482.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15482.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15482.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15483","meta15483",1705184323,null)], null);
}));

(cljs.core.async.t_cljs$core$async15482.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15482");

(cljs.core.async.t_cljs$core$async15482.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15482");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15482.
 */
cljs.core.async.__GT_t_cljs$core$async15482 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15482(flag__$1,meta15483){
return (new cljs.core.async.t_cljs$core$async15482(flag__$1,meta15483));
});

}

return (new cljs.core.async.t_cljs$core$async15482(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15494 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15494 = (function (flag,cb,meta15495){
this.flag = flag;
this.cb = cb;
this.meta15495 = meta15495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15496,meta15495__$1){
var self__ = this;
var _15496__$1 = this;
return (new cljs.core.async.t_cljs$core$async15494(self__.flag,self__.cb,meta15495__$1));
}));

(cljs.core.async.t_cljs$core$async15494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15496){
var self__ = this;
var _15496__$1 = this;
return self__.meta15495;
}));

(cljs.core.async.t_cljs$core$async15494.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15494.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15495","meta15495",1747836082,null)], null);
}));

(cljs.core.async.t_cljs$core$async15494.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15494");

(cljs.core.async.t_cljs$core$async15494.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15494");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15494.
 */
cljs.core.async.__GT_t_cljs$core$async15494 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15494(flag__$1,cb__$1,meta15495){
return (new cljs.core.async.t_cljs$core$async15494(flag__$1,cb__$1,meta15495));
});

}

return (new cljs.core.async.t_cljs$core$async15494(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15502_SHARP_){
var G__15505 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15502_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15505) : fret.call(null,G__15505));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15503_SHARP_){
var G__15506 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15503_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15506) : fret.call(null,G__15506));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17456 = (i + (1));
i = G__17456;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5775__auto__ = [];
var len__5769__auto___17460 = arguments.length;
var i__5770__auto___17462 = (0);
while(true){
if((i__5770__auto___17462 < len__5769__auto___17460)){
args__5775__auto__.push((arguments[i__5770__auto___17462]));

var G__17463 = (i__5770__auto___17462 + (1));
i__5770__auto___17462 = G__17463;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15513){
var map__15514 = p__15513;
var map__15514__$1 = cljs.core.__destructure_map(map__15514);
var opts = map__15514__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15511){
var G__15512 = cljs.core.first(seq15511);
var seq15511__$1 = cljs.core.next(seq15511);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15512,seq15511__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__15527 = arguments.length;
switch (G__15527) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15335__auto___17466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_15568){
var state_val_15569 = (state_15568[(1)]);
if((state_val_15569 === (7))){
var inst_15564 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15570_17467 = state_15568__$1;
(statearr_15570_17467[(2)] = inst_15564);

(statearr_15570_17467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (1))){
var state_15568__$1 = state_15568;
var statearr_15572_17468 = state_15568__$1;
(statearr_15572_17468[(2)] = null);

(statearr_15572_17468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (4))){
var inst_15547 = (state_15568[(7)]);
var inst_15547__$1 = (state_15568[(2)]);
var inst_15548 = (inst_15547__$1 == null);
var state_15568__$1 = (function (){var statearr_15573 = state_15568;
(statearr_15573[(7)] = inst_15547__$1);

return statearr_15573;
})();
if(cljs.core.truth_(inst_15548)){
var statearr_15574_17469 = state_15568__$1;
(statearr_15574_17469[(1)] = (5));

} else {
var statearr_15575_17470 = state_15568__$1;
(statearr_15575_17470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (13))){
var state_15568__$1 = state_15568;
var statearr_15576_17471 = state_15568__$1;
(statearr_15576_17471[(2)] = null);

(statearr_15576_17471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (6))){
var inst_15547 = (state_15568[(7)]);
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15568__$1,(11),to,inst_15547);
} else {
if((state_val_15569 === (3))){
var inst_15566 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15568__$1,inst_15566);
} else {
if((state_val_15569 === (12))){
var state_15568__$1 = state_15568;
var statearr_15577_17472 = state_15568__$1;
(statearr_15577_17472[(2)] = null);

(statearr_15577_17472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (2))){
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15568__$1,(4),from);
} else {
if((state_val_15569 === (11))){
var inst_15557 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
if(cljs.core.truth_(inst_15557)){
var statearr_15578_17473 = state_15568__$1;
(statearr_15578_17473[(1)] = (12));

} else {
var statearr_15579_17474 = state_15568__$1;
(statearr_15579_17474[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (9))){
var state_15568__$1 = state_15568;
var statearr_15580_17475 = state_15568__$1;
(statearr_15580_17475[(2)] = null);

(statearr_15580_17475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (5))){
var state_15568__$1 = state_15568;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15581_17476 = state_15568__$1;
(statearr_15581_17476[(1)] = (8));

} else {
var statearr_15582_17477 = state_15568__$1;
(statearr_15582_17477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (14))){
var inst_15562 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15583_17478 = state_15568__$1;
(statearr_15583_17478[(2)] = inst_15562);

(statearr_15583_17478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (10))){
var inst_15554 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15584_17479 = state_15568__$1;
(statearr_15584_17479[(2)] = inst_15554);

(statearr_15584_17479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (8))){
var inst_15551 = cljs.core.async.close_BANG_(to);
var state_15568__$1 = state_15568;
var statearr_15585_17480 = state_15568__$1;
(statearr_15585_17480[(2)] = inst_15551);

(statearr_15585_17480[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__15107__auto__ = null;
var cljs$core$async$state_machine__15107__auto____0 = (function (){
var statearr_15591 = [null,null,null,null,null,null,null,null];
(statearr_15591[(0)] = cljs$core$async$state_machine__15107__auto__);

(statearr_15591[(1)] = (1));

return statearr_15591;
});
var cljs$core$async$state_machine__15107__auto____1 = (function (state_15568){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_15568);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e15592){var ex__15110__auto__ = e15592;
var statearr_15593_17481 = state_15568;
(statearr_15593_17481[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_15568[(4)]))){
var statearr_15594_17482 = state_15568;
(statearr_15594_17482[(1)] = cljs.core.first((state_15568[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17483 = state_15568;
state_15568 = G__17483;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$state_machine__15107__auto__ = function(state_15568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15107__auto____1.call(this,state_15568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15107__auto____0;
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15107__auto____1;
return cljs$core$async$state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_15595 = f__15336__auto__();
(statearr_15595[(6)] = c__15335__auto___17466);

return statearr_15595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15609){
var vec__15610 = p__15609;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15610,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15610,(1),null);
var job = vec__15610;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15335__auto___17485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_15617){
var state_val_15618 = (state_15617[(1)]);
if((state_val_15618 === (1))){
var state_15617__$1 = state_15617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15617__$1,(2),res,v);
} else {
if((state_val_15618 === (2))){
var inst_15614 = (state_15617[(2)]);
var inst_15615 = cljs.core.async.close_BANG_(res);
var state_15617__$1 = (function (){var statearr_15625 = state_15617;
(statearr_15625[(7)] = inst_15614);

return statearr_15625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15617__$1,inst_15615);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____0 = (function (){
var statearr_15627 = [null,null,null,null,null,null,null,null];
(statearr_15627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__);

(statearr_15627[(1)] = (1));

return statearr_15627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____1 = (function (state_15617){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_15617);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e15628){var ex__15110__auto__ = e15628;
var statearr_15629_17494 = state_15617;
(statearr_15629_17494[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_15617[(4)]))){
var statearr_15630_17495 = state_15617;
(statearr_15630_17495[(1)] = cljs.core.first((state_15617[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17496 = state_15617;
state_15617 = G__17496;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__ = function(state_15617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____1.call(this,state_15617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_15631 = f__15336__auto__();
(statearr_15631[(6)] = c__15335__auto___17485);

return statearr_15631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15633){
var vec__15634 = p__15633;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15634,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15634,(1),null);
var job = vec__15634;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17498 = n;
var __17499 = (0);
while(true){
if((__17499 < n__5636__auto___17498)){
var G__15637_17500 = type;
var G__15637_17501__$1 = (((G__15637_17500 instanceof cljs.core.Keyword))?G__15637_17500.fqn:null);
switch (G__15637_17501__$1) {
case "compute":
var c__15335__auto___17503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17499,c__15335__auto___17503,G__15637_17500,G__15637_17501__$1,n__5636__auto___17498,jobs,results,process__$1,async){
return (function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = ((function (__17499,c__15335__auto___17503,G__15637_17500,G__15637_17501__$1,n__5636__auto___17498,jobs,results,process__$1,async){
return (function (state_15650){
var state_val_15651 = (state_15650[(1)]);
if((state_val_15651 === (1))){
var state_15650__$1 = state_15650;
var statearr_15659_17504 = state_15650__$1;
(statearr_15659_17504[(2)] = null);

(statearr_15659_17504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15651 === (2))){
var state_15650__$1 = state_15650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15650__$1,(4),jobs);
} else {
if((state_val_15651 === (3))){
var inst_15648 = (state_15650[(2)]);
var state_15650__$1 = state_15650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15650__$1,inst_15648);
} else {
if((state_val_15651 === (4))){
var inst_15640 = (state_15650[(2)]);
var inst_15641 = process__$1(inst_15640);
var state_15650__$1 = state_15650;
if(cljs.core.truth_(inst_15641)){
var statearr_15660_17505 = state_15650__$1;
(statearr_15660_17505[(1)] = (5));

} else {
var statearr_15661_17506 = state_15650__$1;
(statearr_15661_17506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15651 === (5))){
var state_15650__$1 = state_15650;
var statearr_15664_17507 = state_15650__$1;
(statearr_15664_17507[(2)] = null);

(statearr_15664_17507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15651 === (6))){
var state_15650__$1 = state_15650;
var statearr_15665_17510 = state_15650__$1;
(statearr_15665_17510[(2)] = null);

(statearr_15665_17510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15651 === (7))){
var inst_15646 = (state_15650[(2)]);
var state_15650__$1 = state_15650;
var statearr_15668_17511 = state_15650__$1;
(statearr_15668_17511[(2)] = inst_15646);

(statearr_15668_17511[(1)] = (3));


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
});})(__17499,c__15335__auto___17503,G__15637_17500,G__15637_17501__$1,n__5636__auto___17498,jobs,results,process__$1,async))
;
return ((function (__17499,switch__15106__auto__,c__15335__auto___17503,G__15637_17500,G__15637_17501__$1,n__5636__auto___17498,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____0 = (function (){
var statearr_15674 = [null,null,null,null,null,null,null];
(statearr_15674[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__);

(statearr_15674[(1)] = (1));

return statearr_15674;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____1 = (function (state_15650){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_15650);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e15679){var ex__15110__auto__ = e15679;
var statearr_15681_17512 = state_15650;
(statearr_15681_17512[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_15650[(4)]))){
var statearr_15683_17513 = state_15650;
(statearr_15683_17513[(1)] = cljs.core.first((state_15650[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17514 = state_15650;
state_15650 = G__17514;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__ = function(state_15650){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____1.call(this,state_15650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__;
})()
;})(__17499,switch__15106__auto__,c__15335__auto___17503,G__15637_17500,G__15637_17501__$1,n__5636__auto___17498,jobs,results,process__$1,async))
})();
var state__15337__auto__ = (function (){var statearr_15689 = f__15336__auto__();
(statearr_15689[(6)] = c__15335__auto___17503);

return statearr_15689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
});})(__17499,c__15335__auto___17503,G__15637_17500,G__15637_17501__$1,n__5636__auto___17498,jobs,results,process__$1,async))
);


break;
case "async":
var c__15335__auto___17515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17499,c__15335__auto___17515,G__15637_17500,G__15637_17501__$1,n__5636__auto___17498,jobs,results,process__$1,async){
return (function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = ((function (__17499,c__15335__auto___17515,G__15637_17500,G__15637_17501__$1,n__5636__auto___17498,jobs,results,process__$1,async){
return (function (state_15702){
var state_val_15703 = (state_15702[(1)]);
if((state_val_15703 === (1))){
var state_15702__$1 = state_15702;
var statearr_15707_17520 = state_15702__$1;
(statearr_15707_17520[(2)] = null);

(statearr_15707_17520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15703 === (2))){
var state_15702__$1 = state_15702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15702__$1,(4),jobs);
} else {
if((state_val_15703 === (3))){
var inst_15700 = (state_15702[(2)]);
var state_15702__$1 = state_15702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15702__$1,inst_15700);
} else {
if((state_val_15703 === (4))){
var inst_15692 = (state_15702[(2)]);
var inst_15693 = async(inst_15692);
var state_15702__$1 = state_15702;
if(cljs.core.truth_(inst_15693)){
var statearr_15710_17521 = state_15702__$1;
(statearr_15710_17521[(1)] = (5));

} else {
var statearr_15711_17522 = state_15702__$1;
(statearr_15711_17522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15703 === (5))){
var state_15702__$1 = state_15702;
var statearr_15712_17523 = state_15702__$1;
(statearr_15712_17523[(2)] = null);

(statearr_15712_17523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15703 === (6))){
var state_15702__$1 = state_15702;
var statearr_15729_17524 = state_15702__$1;
(statearr_15729_17524[(2)] = null);

(statearr_15729_17524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15703 === (7))){
var inst_15698 = (state_15702[(2)]);
var state_15702__$1 = state_15702;
var statearr_15731_17525 = state_15702__$1;
(statearr_15731_17525[(2)] = inst_15698);

(statearr_15731_17525[(1)] = (3));


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
});})(__17499,c__15335__auto___17515,G__15637_17500,G__15637_17501__$1,n__5636__auto___17498,jobs,results,process__$1,async))
;
return ((function (__17499,switch__15106__auto__,c__15335__auto___17515,G__15637_17500,G__15637_17501__$1,n__5636__auto___17498,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____0 = (function (){
var statearr_15736 = [null,null,null,null,null,null,null];
(statearr_15736[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__);

(statearr_15736[(1)] = (1));

return statearr_15736;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____1 = (function (state_15702){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_15702);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e15737){var ex__15110__auto__ = e15737;
var statearr_15738_17526 = state_15702;
(statearr_15738_17526[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_15702[(4)]))){
var statearr_15739_17527 = state_15702;
(statearr_15739_17527[(1)] = cljs.core.first((state_15702[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17528 = state_15702;
state_15702 = G__17528;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__ = function(state_15702){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____1.call(this,state_15702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__;
})()
;})(__17499,switch__15106__auto__,c__15335__auto___17515,G__15637_17500,G__15637_17501__$1,n__5636__auto___17498,jobs,results,process__$1,async))
})();
var state__15337__auto__ = (function (){var statearr_15740 = f__15336__auto__();
(statearr_15740[(6)] = c__15335__auto___17515);

return statearr_15740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
});})(__17499,c__15335__auto___17515,G__15637_17500,G__15637_17501__$1,n__5636__auto___17498,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15637_17501__$1)].join('')));

}

var G__17533 = (__17499 + (1));
__17499 = G__17533;
continue;
} else {
}
break;
}

var c__15335__auto___17534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_15768){
var state_val_15769 = (state_15768[(1)]);
if((state_val_15769 === (7))){
var inst_15764 = (state_15768[(2)]);
var state_15768__$1 = state_15768;
var statearr_15773_17535 = state_15768__$1;
(statearr_15773_17535[(2)] = inst_15764);

(statearr_15773_17535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15769 === (1))){
var state_15768__$1 = state_15768;
var statearr_15774_17536 = state_15768__$1;
(statearr_15774_17536[(2)] = null);

(statearr_15774_17536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15769 === (4))){
var inst_15747 = (state_15768[(7)]);
var inst_15747__$1 = (state_15768[(2)]);
var inst_15750 = (inst_15747__$1 == null);
var state_15768__$1 = (function (){var statearr_15784 = state_15768;
(statearr_15784[(7)] = inst_15747__$1);

return statearr_15784;
})();
if(cljs.core.truth_(inst_15750)){
var statearr_15785_17541 = state_15768__$1;
(statearr_15785_17541[(1)] = (5));

} else {
var statearr_15786_17542 = state_15768__$1;
(statearr_15786_17542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15769 === (6))){
var inst_15747 = (state_15768[(7)]);
var inst_15754 = (state_15768[(8)]);
var inst_15754__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15755 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15756 = [inst_15747,inst_15754__$1];
var inst_15757 = (new cljs.core.PersistentVector(null,2,(5),inst_15755,inst_15756,null));
var state_15768__$1 = (function (){var statearr_15789 = state_15768;
(statearr_15789[(8)] = inst_15754__$1);

return statearr_15789;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15768__$1,(8),jobs,inst_15757);
} else {
if((state_val_15769 === (3))){
var inst_15766 = (state_15768[(2)]);
var state_15768__$1 = state_15768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15768__$1,inst_15766);
} else {
if((state_val_15769 === (2))){
var state_15768__$1 = state_15768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15768__$1,(4),from);
} else {
if((state_val_15769 === (9))){
var inst_15761 = (state_15768[(2)]);
var state_15768__$1 = (function (){var statearr_15793 = state_15768;
(statearr_15793[(9)] = inst_15761);

return statearr_15793;
})();
var statearr_15794_17544 = state_15768__$1;
(statearr_15794_17544[(2)] = null);

(statearr_15794_17544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15769 === (5))){
var inst_15752 = cljs.core.async.close_BANG_(jobs);
var state_15768__$1 = state_15768;
var statearr_15795_17549 = state_15768__$1;
(statearr_15795_17549[(2)] = inst_15752);

(statearr_15795_17549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15769 === (8))){
var inst_15754 = (state_15768[(8)]);
var inst_15759 = (state_15768[(2)]);
var state_15768__$1 = (function (){var statearr_15796 = state_15768;
(statearr_15796[(10)] = inst_15759);

return statearr_15796;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15768__$1,(9),results,inst_15754);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____0 = (function (){
var statearr_15797 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15797[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__);

(statearr_15797[(1)] = (1));

return statearr_15797;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____1 = (function (state_15768){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_15768);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e15798){var ex__15110__auto__ = e15798;
var statearr_15799_17550 = state_15768;
(statearr_15799_17550[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_15768[(4)]))){
var statearr_15800_17551 = state_15768;
(statearr_15800_17551[(1)] = cljs.core.first((state_15768[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17552 = state_15768;
state_15768 = G__17552;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__ = function(state_15768){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____1.call(this,state_15768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_15802 = f__15336__auto__();
(statearr_15802[(6)] = c__15335__auto___17534);

return statearr_15802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));


var c__15335__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_15841){
var state_val_15842 = (state_15841[(1)]);
if((state_val_15842 === (7))){
var inst_15837 = (state_15841[(2)]);
var state_15841__$1 = state_15841;
var statearr_15843_17553 = state_15841__$1;
(statearr_15843_17553[(2)] = inst_15837);

(statearr_15843_17553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15842 === (20))){
var state_15841__$1 = state_15841;
var statearr_15844_17554 = state_15841__$1;
(statearr_15844_17554[(2)] = null);

(statearr_15844_17554[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15842 === (1))){
var state_15841__$1 = state_15841;
var statearr_15845_17555 = state_15841__$1;
(statearr_15845_17555[(2)] = null);

(statearr_15845_17555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15842 === (4))){
var inst_15805 = (state_15841[(7)]);
var inst_15805__$1 = (state_15841[(2)]);
var inst_15806 = (inst_15805__$1 == null);
var state_15841__$1 = (function (){var statearr_15846 = state_15841;
(statearr_15846[(7)] = inst_15805__$1);

return statearr_15846;
})();
if(cljs.core.truth_(inst_15806)){
var statearr_15847_17557 = state_15841__$1;
(statearr_15847_17557[(1)] = (5));

} else {
var statearr_15848_17558 = state_15841__$1;
(statearr_15848_17558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15842 === (15))){
var inst_15819 = (state_15841[(8)]);
var state_15841__$1 = state_15841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15841__$1,(18),to,inst_15819);
} else {
if((state_val_15842 === (21))){
var inst_15832 = (state_15841[(2)]);
var state_15841__$1 = state_15841;
var statearr_15849_17567 = state_15841__$1;
(statearr_15849_17567[(2)] = inst_15832);

(statearr_15849_17567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15842 === (13))){
var inst_15834 = (state_15841[(2)]);
var state_15841__$1 = (function (){var statearr_15850 = state_15841;
(statearr_15850[(9)] = inst_15834);

return statearr_15850;
})();
var statearr_15851_17569 = state_15841__$1;
(statearr_15851_17569[(2)] = null);

(statearr_15851_17569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15842 === (6))){
var inst_15805 = (state_15841[(7)]);
var state_15841__$1 = state_15841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15841__$1,(11),inst_15805);
} else {
if((state_val_15842 === (17))){
var inst_15827 = (state_15841[(2)]);
var state_15841__$1 = state_15841;
if(cljs.core.truth_(inst_15827)){
var statearr_15852_17571 = state_15841__$1;
(statearr_15852_17571[(1)] = (19));

} else {
var statearr_15853_17572 = state_15841__$1;
(statearr_15853_17572[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15842 === (3))){
var inst_15839 = (state_15841[(2)]);
var state_15841__$1 = state_15841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15841__$1,inst_15839);
} else {
if((state_val_15842 === (12))){
var inst_15816 = (state_15841[(10)]);
var state_15841__$1 = state_15841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15841__$1,(14),inst_15816);
} else {
if((state_val_15842 === (2))){
var state_15841__$1 = state_15841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15841__$1,(4),results);
} else {
if((state_val_15842 === (19))){
var state_15841__$1 = state_15841;
var statearr_15854_17589 = state_15841__$1;
(statearr_15854_17589[(2)] = null);

(statearr_15854_17589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15842 === (11))){
var inst_15816 = (state_15841[(2)]);
var state_15841__$1 = (function (){var statearr_15855 = state_15841;
(statearr_15855[(10)] = inst_15816);

return statearr_15855;
})();
var statearr_15856_17590 = state_15841__$1;
(statearr_15856_17590[(2)] = null);

(statearr_15856_17590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15842 === (9))){
var state_15841__$1 = state_15841;
var statearr_15857_17591 = state_15841__$1;
(statearr_15857_17591[(2)] = null);

(statearr_15857_17591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15842 === (5))){
var state_15841__$1 = state_15841;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15858_17596 = state_15841__$1;
(statearr_15858_17596[(1)] = (8));

} else {
var statearr_15859_17597 = state_15841__$1;
(statearr_15859_17597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15842 === (14))){
var inst_15819 = (state_15841[(8)]);
var inst_15821 = (state_15841[(11)]);
var inst_15819__$1 = (state_15841[(2)]);
var inst_15820 = (inst_15819__$1 == null);
var inst_15821__$1 = cljs.core.not(inst_15820);
var state_15841__$1 = (function (){var statearr_15860 = state_15841;
(statearr_15860[(8)] = inst_15819__$1);

(statearr_15860[(11)] = inst_15821__$1);

return statearr_15860;
})();
if(inst_15821__$1){
var statearr_15861_17601 = state_15841__$1;
(statearr_15861_17601[(1)] = (15));

} else {
var statearr_15862_17602 = state_15841__$1;
(statearr_15862_17602[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15842 === (16))){
var inst_15821 = (state_15841[(11)]);
var state_15841__$1 = state_15841;
var statearr_15863_17603 = state_15841__$1;
(statearr_15863_17603[(2)] = inst_15821);

(statearr_15863_17603[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15842 === (10))){
var inst_15813 = (state_15841[(2)]);
var state_15841__$1 = state_15841;
var statearr_15864_17604 = state_15841__$1;
(statearr_15864_17604[(2)] = inst_15813);

(statearr_15864_17604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15842 === (18))){
var inst_15824 = (state_15841[(2)]);
var state_15841__$1 = state_15841;
var statearr_15865_17605 = state_15841__$1;
(statearr_15865_17605[(2)] = inst_15824);

(statearr_15865_17605[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15842 === (8))){
var inst_15809 = cljs.core.async.close_BANG_(to);
var state_15841__$1 = state_15841;
var statearr_15866_17612 = state_15841__$1;
(statearr_15866_17612[(2)] = inst_15809);

(statearr_15866_17612[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____0 = (function (){
var statearr_15873 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__);

(statearr_15873[(1)] = (1));

return statearr_15873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____1 = (function (state_15841){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_15841);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e15874){var ex__15110__auto__ = e15874;
var statearr_15875_17617 = state_15841;
(statearr_15875_17617[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_15841[(4)]))){
var statearr_15876_17618 = state_15841;
(statearr_15876_17618[(1)] = cljs.core.first((state_15841[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17619 = state_15841;
state_15841 = G__17619;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__ = function(state_15841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____1.call(this,state_15841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15107__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_15877 = f__15336__auto__();
(statearr_15877[(6)] = c__15335__auto__);

return statearr_15877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));

return c__15335__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15879 = arguments.length;
switch (G__15879) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__15881 = arguments.length;
switch (G__15881) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__15889 = arguments.length;
switch (G__15889) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15335__auto___17631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_15917){
var state_val_15918 = (state_15917[(1)]);
if((state_val_15918 === (7))){
var inst_15913 = (state_15917[(2)]);
var state_15917__$1 = state_15917;
var statearr_15919_17632 = state_15917__$1;
(statearr_15919_17632[(2)] = inst_15913);

(statearr_15919_17632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (1))){
var state_15917__$1 = state_15917;
var statearr_15920_17633 = state_15917__$1;
(statearr_15920_17633[(2)] = null);

(statearr_15920_17633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (4))){
var inst_15894 = (state_15917[(7)]);
var inst_15894__$1 = (state_15917[(2)]);
var inst_15895 = (inst_15894__$1 == null);
var state_15917__$1 = (function (){var statearr_15921 = state_15917;
(statearr_15921[(7)] = inst_15894__$1);

return statearr_15921;
})();
if(cljs.core.truth_(inst_15895)){
var statearr_15922_17634 = state_15917__$1;
(statearr_15922_17634[(1)] = (5));

} else {
var statearr_15923_17635 = state_15917__$1;
(statearr_15923_17635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (13))){
var state_15917__$1 = state_15917;
var statearr_15924_17636 = state_15917__$1;
(statearr_15924_17636[(2)] = null);

(statearr_15924_17636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (6))){
var inst_15894 = (state_15917[(7)]);
var inst_15900 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15894) : p.call(null,inst_15894));
var state_15917__$1 = state_15917;
if(cljs.core.truth_(inst_15900)){
var statearr_15925_17637 = state_15917__$1;
(statearr_15925_17637[(1)] = (9));

} else {
var statearr_15926_17638 = state_15917__$1;
(statearr_15926_17638[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (3))){
var inst_15915 = (state_15917[(2)]);
var state_15917__$1 = state_15917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15917__$1,inst_15915);
} else {
if((state_val_15918 === (12))){
var state_15917__$1 = state_15917;
var statearr_15927_17639 = state_15917__$1;
(statearr_15927_17639[(2)] = null);

(statearr_15927_17639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (2))){
var state_15917__$1 = state_15917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15917__$1,(4),ch);
} else {
if((state_val_15918 === (11))){
var inst_15894 = (state_15917[(7)]);
var inst_15904 = (state_15917[(2)]);
var state_15917__$1 = state_15917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15917__$1,(8),inst_15904,inst_15894);
} else {
if((state_val_15918 === (9))){
var state_15917__$1 = state_15917;
var statearr_15933_17644 = state_15917__$1;
(statearr_15933_17644[(2)] = tc);

(statearr_15933_17644[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (5))){
var inst_15897 = cljs.core.async.close_BANG_(tc);
var inst_15898 = cljs.core.async.close_BANG_(fc);
var state_15917__$1 = (function (){var statearr_15934 = state_15917;
(statearr_15934[(8)] = inst_15897);

return statearr_15934;
})();
var statearr_15935_17645 = state_15917__$1;
(statearr_15935_17645[(2)] = inst_15898);

(statearr_15935_17645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (14))){
var inst_15911 = (state_15917[(2)]);
var state_15917__$1 = state_15917;
var statearr_15939_17646 = state_15917__$1;
(statearr_15939_17646[(2)] = inst_15911);

(statearr_15939_17646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (10))){
var state_15917__$1 = state_15917;
var statearr_15940_17649 = state_15917__$1;
(statearr_15940_17649[(2)] = fc);

(statearr_15940_17649[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (8))){
var inst_15906 = (state_15917[(2)]);
var state_15917__$1 = state_15917;
if(cljs.core.truth_(inst_15906)){
var statearr_15941_17650 = state_15917__$1;
(statearr_15941_17650[(1)] = (12));

} else {
var statearr_15942_17651 = state_15917__$1;
(statearr_15942_17651[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__15107__auto__ = null;
var cljs$core$async$state_machine__15107__auto____0 = (function (){
var statearr_15951 = [null,null,null,null,null,null,null,null,null];
(statearr_15951[(0)] = cljs$core$async$state_machine__15107__auto__);

(statearr_15951[(1)] = (1));

return statearr_15951;
});
var cljs$core$async$state_machine__15107__auto____1 = (function (state_15917){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_15917);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e15952){var ex__15110__auto__ = e15952;
var statearr_15953_17654 = state_15917;
(statearr_15953_17654[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_15917[(4)]))){
var statearr_15954_17655 = state_15917;
(statearr_15954_17655[(1)] = cljs.core.first((state_15917[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17656 = state_15917;
state_15917 = G__17656;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$state_machine__15107__auto__ = function(state_15917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15107__auto____1.call(this,state_15917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15107__auto____0;
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15107__auto____1;
return cljs$core$async$state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_15955 = f__15336__auto__();
(statearr_15955[(6)] = c__15335__auto___17631);

return statearr_15955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15335__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_15979){
var state_val_15980 = (state_15979[(1)]);
if((state_val_15980 === (7))){
var inst_15975 = (state_15979[(2)]);
var state_15979__$1 = state_15979;
var statearr_15981_17664 = state_15979__$1;
(statearr_15981_17664[(2)] = inst_15975);

(statearr_15981_17664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (1))){
var inst_15958 = init;
var inst_15959 = inst_15958;
var state_15979__$1 = (function (){var statearr_15982 = state_15979;
(statearr_15982[(7)] = inst_15959);

return statearr_15982;
})();
var statearr_15984_17671 = state_15979__$1;
(statearr_15984_17671[(2)] = null);

(statearr_15984_17671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (4))){
var inst_15962 = (state_15979[(8)]);
var inst_15962__$1 = (state_15979[(2)]);
var inst_15963 = (inst_15962__$1 == null);
var state_15979__$1 = (function (){var statearr_15985 = state_15979;
(statearr_15985[(8)] = inst_15962__$1);

return statearr_15985;
})();
if(cljs.core.truth_(inst_15963)){
var statearr_15986_17672 = state_15979__$1;
(statearr_15986_17672[(1)] = (5));

} else {
var statearr_15987_17673 = state_15979__$1;
(statearr_15987_17673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (6))){
var inst_15959 = (state_15979[(7)]);
var inst_15966 = (state_15979[(9)]);
var inst_15962 = (state_15979[(8)]);
var inst_15966__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15959,inst_15962) : f.call(null,inst_15959,inst_15962));
var inst_15967 = cljs.core.reduced_QMARK_(inst_15966__$1);
var state_15979__$1 = (function (){var statearr_15988 = state_15979;
(statearr_15988[(9)] = inst_15966__$1);

return statearr_15988;
})();
if(inst_15967){
var statearr_15989_17674 = state_15979__$1;
(statearr_15989_17674[(1)] = (8));

} else {
var statearr_15990_17675 = state_15979__$1;
(statearr_15990_17675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (3))){
var inst_15977 = (state_15979[(2)]);
var state_15979__$1 = state_15979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15979__$1,inst_15977);
} else {
if((state_val_15980 === (2))){
var state_15979__$1 = state_15979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15979__$1,(4),ch);
} else {
if((state_val_15980 === (9))){
var inst_15966 = (state_15979[(9)]);
var inst_15959 = inst_15966;
var state_15979__$1 = (function (){var statearr_15991 = state_15979;
(statearr_15991[(7)] = inst_15959);

return statearr_15991;
})();
var statearr_15992_17676 = state_15979__$1;
(statearr_15992_17676[(2)] = null);

(statearr_15992_17676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (5))){
var inst_15959 = (state_15979[(7)]);
var state_15979__$1 = state_15979;
var statearr_15993_17677 = state_15979__$1;
(statearr_15993_17677[(2)] = inst_15959);

(statearr_15993_17677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (10))){
var inst_15973 = (state_15979[(2)]);
var state_15979__$1 = state_15979;
var statearr_15994_17678 = state_15979__$1;
(statearr_15994_17678[(2)] = inst_15973);

(statearr_15994_17678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (8))){
var inst_15966 = (state_15979[(9)]);
var inst_15969 = cljs.core.deref(inst_15966);
var state_15979__$1 = state_15979;
var statearr_15995_17679 = state_15979__$1;
(statearr_15995_17679[(2)] = inst_15969);

(statearr_15995_17679[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__15107__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15107__auto____0 = (function (){
var statearr_16001 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16001[(0)] = cljs$core$async$reduce_$_state_machine__15107__auto__);

(statearr_16001[(1)] = (1));

return statearr_16001;
});
var cljs$core$async$reduce_$_state_machine__15107__auto____1 = (function (state_15979){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_15979);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e16002){var ex__15110__auto__ = e16002;
var statearr_16003_17686 = state_15979;
(statearr_16003_17686[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_15979[(4)]))){
var statearr_16008_17687 = state_15979;
(statearr_16008_17687[(1)] = cljs.core.first((state_15979[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17688 = state_15979;
state_15979 = G__17688;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15107__auto__ = function(state_15979){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15107__auto____1.call(this,state_15979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15107__auto____0;
cljs$core$async$reduce_$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15107__auto____1;
return cljs$core$async$reduce_$_state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_16033 = f__15336__auto__();
(statearr_16033[(6)] = c__15335__auto__);

return statearr_16033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));

return c__15335__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15335__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_16044){
var state_val_16045 = (state_16044[(1)]);
if((state_val_16045 === (1))){
var inst_16034 = cljs.core.async.reduce(f__$1,init,ch);
var state_16044__$1 = state_16044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16044__$1,(2),inst_16034);
} else {
if((state_val_16045 === (2))){
var inst_16036 = (state_16044[(2)]);
var inst_16042 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16036) : f__$1.call(null,inst_16036));
var state_16044__$1 = state_16044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16044__$1,inst_16042);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15107__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15107__auto____0 = (function (){
var statearr_16047 = [null,null,null,null,null,null,null];
(statearr_16047[(0)] = cljs$core$async$transduce_$_state_machine__15107__auto__);

(statearr_16047[(1)] = (1));

return statearr_16047;
});
var cljs$core$async$transduce_$_state_machine__15107__auto____1 = (function (state_16044){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_16044);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e16048){var ex__15110__auto__ = e16048;
var statearr_16049_17695 = state_16044;
(statearr_16049_17695[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_16044[(4)]))){
var statearr_16050_17696 = state_16044;
(statearr_16050_17696[(1)] = cljs.core.first((state_16044[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17697 = state_16044;
state_16044 = G__17697;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15107__auto__ = function(state_16044){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15107__auto____1.call(this,state_16044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15107__auto____0;
cljs$core$async$transduce_$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15107__auto____1;
return cljs$core$async$transduce_$_state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_16051 = f__15336__auto__();
(statearr_16051[(6)] = c__15335__auto__);

return statearr_16051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));

return c__15335__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16053 = arguments.length;
switch (G__16053) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15335__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_16078){
var state_val_16079 = (state_16078[(1)]);
if((state_val_16079 === (7))){
var inst_16060 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
var statearr_16080_17699 = state_16078__$1;
(statearr_16080_17699[(2)] = inst_16060);

(statearr_16080_17699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (1))){
var inst_16054 = cljs.core.seq(coll);
var inst_16055 = inst_16054;
var state_16078__$1 = (function (){var statearr_16084 = state_16078;
(statearr_16084[(7)] = inst_16055);

return statearr_16084;
})();
var statearr_16085_17700 = state_16078__$1;
(statearr_16085_17700[(2)] = null);

(statearr_16085_17700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (4))){
var inst_16055 = (state_16078[(7)]);
var inst_16058 = cljs.core.first(inst_16055);
var state_16078__$1 = state_16078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16078__$1,(7),ch,inst_16058);
} else {
if((state_val_16079 === (13))){
var inst_16072 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
var statearr_16086_17701 = state_16078__$1;
(statearr_16086_17701[(2)] = inst_16072);

(statearr_16086_17701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (6))){
var inst_16063 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
if(cljs.core.truth_(inst_16063)){
var statearr_16089_17702 = state_16078__$1;
(statearr_16089_17702[(1)] = (8));

} else {
var statearr_16090_17703 = state_16078__$1;
(statearr_16090_17703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (3))){
var inst_16076 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16078__$1,inst_16076);
} else {
if((state_val_16079 === (12))){
var state_16078__$1 = state_16078;
var statearr_16091_17704 = state_16078__$1;
(statearr_16091_17704[(2)] = null);

(statearr_16091_17704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (2))){
var inst_16055 = (state_16078[(7)]);
var state_16078__$1 = state_16078;
if(cljs.core.truth_(inst_16055)){
var statearr_16095_17705 = state_16078__$1;
(statearr_16095_17705[(1)] = (4));

} else {
var statearr_16096_17706 = state_16078__$1;
(statearr_16096_17706[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (11))){
var inst_16069 = cljs.core.async.close_BANG_(ch);
var state_16078__$1 = state_16078;
var statearr_16099_17707 = state_16078__$1;
(statearr_16099_17707[(2)] = inst_16069);

(statearr_16099_17707[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (9))){
var state_16078__$1 = state_16078;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16100_17708 = state_16078__$1;
(statearr_16100_17708[(1)] = (11));

} else {
var statearr_16101_17715 = state_16078__$1;
(statearr_16101_17715[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (5))){
var inst_16055 = (state_16078[(7)]);
var state_16078__$1 = state_16078;
var statearr_16102_17716 = state_16078__$1;
(statearr_16102_17716[(2)] = inst_16055);

(statearr_16102_17716[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (10))){
var inst_16074 = (state_16078[(2)]);
var state_16078__$1 = state_16078;
var statearr_16103_17717 = state_16078__$1;
(statearr_16103_17717[(2)] = inst_16074);

(statearr_16103_17717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16079 === (8))){
var inst_16055 = (state_16078[(7)]);
var inst_16065 = cljs.core.next(inst_16055);
var inst_16055__$1 = inst_16065;
var state_16078__$1 = (function (){var statearr_16104 = state_16078;
(statearr_16104[(7)] = inst_16055__$1);

return statearr_16104;
})();
var statearr_16105_17718 = state_16078__$1;
(statearr_16105_17718[(2)] = null);

(statearr_16105_17718[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__15107__auto__ = null;
var cljs$core$async$state_machine__15107__auto____0 = (function (){
var statearr_16106 = [null,null,null,null,null,null,null,null];
(statearr_16106[(0)] = cljs$core$async$state_machine__15107__auto__);

(statearr_16106[(1)] = (1));

return statearr_16106;
});
var cljs$core$async$state_machine__15107__auto____1 = (function (state_16078){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_16078);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e16107){var ex__15110__auto__ = e16107;
var statearr_16108_17719 = state_16078;
(statearr_16108_17719[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_16078[(4)]))){
var statearr_16109_17720 = state_16078;
(statearr_16109_17720[(1)] = cljs.core.first((state_16078[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17721 = state_16078;
state_16078 = G__17721;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$state_machine__15107__auto__ = function(state_16078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15107__auto____1.call(this,state_16078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15107__auto____0;
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15107__auto____1;
return cljs$core$async$state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_16110 = f__15336__auto__();
(statearr_16110[(6)] = c__15335__auto__);

return statearr_16110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));

return c__15335__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16115 = arguments.length;
switch (G__16115) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17723 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17723(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17724 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17724(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17725 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17725(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17726 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17726(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16124 = (function (ch,cs,meta16125){
this.ch = ch;
this.cs = cs;
this.meta16125 = meta16125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16126,meta16125__$1){
var self__ = this;
var _16126__$1 = this;
return (new cljs.core.async.t_cljs$core$async16124(self__.ch,self__.cs,meta16125__$1));
}));

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16126){
var self__ = this;
var _16126__$1 = this;
return self__.meta16125;
}));

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16125","meta16125",519741344,null)], null);
}));

(cljs.core.async.t_cljs$core$async16124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16124");

(cljs.core.async.t_cljs$core$async16124.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16124.
 */
cljs.core.async.__GT_t_cljs$core$async16124 = (function cljs$core$async$mult_$___GT_t_cljs$core$async16124(ch__$1,cs__$1,meta16125){
return (new cljs.core.async.t_cljs$core$async16124(ch__$1,cs__$1,meta16125));
});

}

return (new cljs.core.async.t_cljs$core$async16124(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15335__auto___17728 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_16272){
var state_val_16273 = (state_16272[(1)]);
if((state_val_16273 === (7))){
var inst_16268 = (state_16272[(2)]);
var state_16272__$1 = state_16272;
var statearr_16274_17729 = state_16272__$1;
(statearr_16274_17729[(2)] = inst_16268);

(statearr_16274_17729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (20))){
var inst_16160 = (state_16272[(7)]);
var inst_16172 = cljs.core.first(inst_16160);
var inst_16173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16172,(0),null);
var inst_16174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16172,(1),null);
var state_16272__$1 = (function (){var statearr_16275 = state_16272;
(statearr_16275[(8)] = inst_16173);

return statearr_16275;
})();
if(cljs.core.truth_(inst_16174)){
var statearr_16276_17734 = state_16272__$1;
(statearr_16276_17734[(1)] = (22));

} else {
var statearr_16277_17735 = state_16272__$1;
(statearr_16277_17735[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (27))){
var inst_16215 = (state_16272[(9)]);
var inst_16222 = (state_16272[(10)]);
var inst_16217 = (state_16272[(11)]);
var inst_16129 = (state_16272[(12)]);
var inst_16222__$1 = cljs.core._nth(inst_16215,inst_16217);
var inst_16223 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16222__$1,inst_16129,done);
var state_16272__$1 = (function (){var statearr_16278 = state_16272;
(statearr_16278[(10)] = inst_16222__$1);

return statearr_16278;
})();
if(cljs.core.truth_(inst_16223)){
var statearr_16289_17736 = state_16272__$1;
(statearr_16289_17736[(1)] = (30));

} else {
var statearr_16290_17737 = state_16272__$1;
(statearr_16290_17737[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (1))){
var state_16272__$1 = state_16272;
var statearr_16291_17738 = state_16272__$1;
(statearr_16291_17738[(2)] = null);

(statearr_16291_17738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (24))){
var inst_16160 = (state_16272[(7)]);
var inst_16179 = (state_16272[(2)]);
var inst_16180 = cljs.core.next(inst_16160);
var inst_16138 = inst_16180;
var inst_16139 = null;
var inst_16140 = (0);
var inst_16141 = (0);
var state_16272__$1 = (function (){var statearr_16292 = state_16272;
(statearr_16292[(13)] = inst_16179);

(statearr_16292[(14)] = inst_16138);

(statearr_16292[(15)] = inst_16139);

(statearr_16292[(16)] = inst_16141);

(statearr_16292[(17)] = inst_16140);

return statearr_16292;
})();
var statearr_16293_17739 = state_16272__$1;
(statearr_16293_17739[(2)] = null);

(statearr_16293_17739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (39))){
var state_16272__$1 = state_16272;
var statearr_16297_17740 = state_16272__$1;
(statearr_16297_17740[(2)] = null);

(statearr_16297_17740[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (4))){
var inst_16129 = (state_16272[(12)]);
var inst_16129__$1 = (state_16272[(2)]);
var inst_16130 = (inst_16129__$1 == null);
var state_16272__$1 = (function (){var statearr_16298 = state_16272;
(statearr_16298[(12)] = inst_16129__$1);

return statearr_16298;
})();
if(cljs.core.truth_(inst_16130)){
var statearr_16299_17741 = state_16272__$1;
(statearr_16299_17741[(1)] = (5));

} else {
var statearr_16300_17742 = state_16272__$1;
(statearr_16300_17742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (15))){
var inst_16138 = (state_16272[(14)]);
var inst_16139 = (state_16272[(15)]);
var inst_16141 = (state_16272[(16)]);
var inst_16140 = (state_16272[(17)]);
var inst_16156 = (state_16272[(2)]);
var inst_16157 = (inst_16141 + (1));
var tmp16294 = inst_16138;
var tmp16295 = inst_16139;
var tmp16296 = inst_16140;
var inst_16138__$1 = tmp16294;
var inst_16139__$1 = tmp16295;
var inst_16140__$1 = tmp16296;
var inst_16141__$1 = inst_16157;
var state_16272__$1 = (function (){var statearr_16301 = state_16272;
(statearr_16301[(18)] = inst_16156);

(statearr_16301[(14)] = inst_16138__$1);

(statearr_16301[(15)] = inst_16139__$1);

(statearr_16301[(16)] = inst_16141__$1);

(statearr_16301[(17)] = inst_16140__$1);

return statearr_16301;
})();
var statearr_16302_17743 = state_16272__$1;
(statearr_16302_17743[(2)] = null);

(statearr_16302_17743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (21))){
var inst_16183 = (state_16272[(2)]);
var state_16272__$1 = state_16272;
var statearr_16306_17744 = state_16272__$1;
(statearr_16306_17744[(2)] = inst_16183);

(statearr_16306_17744[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (31))){
var inst_16222 = (state_16272[(10)]);
var inst_16226 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16222);
var state_16272__$1 = state_16272;
var statearr_16307_17745 = state_16272__$1;
(statearr_16307_17745[(2)] = inst_16226);

(statearr_16307_17745[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (32))){
var inst_16215 = (state_16272[(9)]);
var inst_16216 = (state_16272[(19)]);
var inst_16217 = (state_16272[(11)]);
var inst_16214 = (state_16272[(20)]);
var inst_16228 = (state_16272[(2)]);
var inst_16229 = (inst_16217 + (1));
var tmp16303 = inst_16215;
var tmp16304 = inst_16216;
var tmp16305 = inst_16214;
var inst_16214__$1 = tmp16305;
var inst_16215__$1 = tmp16303;
var inst_16216__$1 = tmp16304;
var inst_16217__$1 = inst_16229;
var state_16272__$1 = (function (){var statearr_16308 = state_16272;
(statearr_16308[(9)] = inst_16215__$1);

(statearr_16308[(19)] = inst_16216__$1);

(statearr_16308[(21)] = inst_16228);

(statearr_16308[(11)] = inst_16217__$1);

(statearr_16308[(20)] = inst_16214__$1);

return statearr_16308;
})();
var statearr_16309_17746 = state_16272__$1;
(statearr_16309_17746[(2)] = null);

(statearr_16309_17746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (40))){
var inst_16241 = (state_16272[(22)]);
var inst_16245 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16241);
var state_16272__$1 = state_16272;
var statearr_16310_17747 = state_16272__$1;
(statearr_16310_17747[(2)] = inst_16245);

(statearr_16310_17747[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (33))){
var inst_16232 = (state_16272[(23)]);
var inst_16234 = cljs.core.chunked_seq_QMARK_(inst_16232);
var state_16272__$1 = state_16272;
if(inst_16234){
var statearr_16311_17748 = state_16272__$1;
(statearr_16311_17748[(1)] = (36));

} else {
var statearr_16312_17750 = state_16272__$1;
(statearr_16312_17750[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (13))){
var inst_16150 = (state_16272[(24)]);
var inst_16153 = cljs.core.async.close_BANG_(inst_16150);
var state_16272__$1 = state_16272;
var statearr_16313_17751 = state_16272__$1;
(statearr_16313_17751[(2)] = inst_16153);

(statearr_16313_17751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (22))){
var inst_16173 = (state_16272[(8)]);
var inst_16176 = cljs.core.async.close_BANG_(inst_16173);
var state_16272__$1 = state_16272;
var statearr_16314_17753 = state_16272__$1;
(statearr_16314_17753[(2)] = inst_16176);

(statearr_16314_17753[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (36))){
var inst_16232 = (state_16272[(23)]);
var inst_16236 = cljs.core.chunk_first(inst_16232);
var inst_16237 = cljs.core.chunk_rest(inst_16232);
var inst_16238 = cljs.core.count(inst_16236);
var inst_16214 = inst_16237;
var inst_16215 = inst_16236;
var inst_16216 = inst_16238;
var inst_16217 = (0);
var state_16272__$1 = (function (){var statearr_16315 = state_16272;
(statearr_16315[(9)] = inst_16215);

(statearr_16315[(19)] = inst_16216);

(statearr_16315[(11)] = inst_16217);

(statearr_16315[(20)] = inst_16214);

return statearr_16315;
})();
var statearr_16316_17754 = state_16272__$1;
(statearr_16316_17754[(2)] = null);

(statearr_16316_17754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (41))){
var inst_16232 = (state_16272[(23)]);
var inst_16247 = (state_16272[(2)]);
var inst_16248 = cljs.core.next(inst_16232);
var inst_16214 = inst_16248;
var inst_16215 = null;
var inst_16216 = (0);
var inst_16217 = (0);
var state_16272__$1 = (function (){var statearr_16317 = state_16272;
(statearr_16317[(9)] = inst_16215);

(statearr_16317[(19)] = inst_16216);

(statearr_16317[(11)] = inst_16217);

(statearr_16317[(25)] = inst_16247);

(statearr_16317[(20)] = inst_16214);

return statearr_16317;
})();
var statearr_16319_17755 = state_16272__$1;
(statearr_16319_17755[(2)] = null);

(statearr_16319_17755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (43))){
var state_16272__$1 = state_16272;
var statearr_16320_17756 = state_16272__$1;
(statearr_16320_17756[(2)] = null);

(statearr_16320_17756[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (29))){
var inst_16256 = (state_16272[(2)]);
var state_16272__$1 = state_16272;
var statearr_16321_17758 = state_16272__$1;
(statearr_16321_17758[(2)] = inst_16256);

(statearr_16321_17758[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (44))){
var inst_16265 = (state_16272[(2)]);
var state_16272__$1 = (function (){var statearr_16322 = state_16272;
(statearr_16322[(26)] = inst_16265);

return statearr_16322;
})();
var statearr_16323_17760 = state_16272__$1;
(statearr_16323_17760[(2)] = null);

(statearr_16323_17760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (6))){
var inst_16193 = (state_16272[(27)]);
var inst_16192 = cljs.core.deref(cs);
var inst_16193__$1 = cljs.core.keys(inst_16192);
var inst_16207 = cljs.core.count(inst_16193__$1);
var inst_16208 = cljs.core.reset_BANG_(dctr,inst_16207);
var inst_16213 = cljs.core.seq(inst_16193__$1);
var inst_16214 = inst_16213;
var inst_16215 = null;
var inst_16216 = (0);
var inst_16217 = (0);
var state_16272__$1 = (function (){var statearr_16324 = state_16272;
(statearr_16324[(27)] = inst_16193__$1);

(statearr_16324[(9)] = inst_16215);

(statearr_16324[(28)] = inst_16208);

(statearr_16324[(19)] = inst_16216);

(statearr_16324[(11)] = inst_16217);

(statearr_16324[(20)] = inst_16214);

return statearr_16324;
})();
var statearr_16325_17761 = state_16272__$1;
(statearr_16325_17761[(2)] = null);

(statearr_16325_17761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (28))){
var inst_16232 = (state_16272[(23)]);
var inst_16214 = (state_16272[(20)]);
var inst_16232__$1 = cljs.core.seq(inst_16214);
var state_16272__$1 = (function (){var statearr_16326 = state_16272;
(statearr_16326[(23)] = inst_16232__$1);

return statearr_16326;
})();
if(inst_16232__$1){
var statearr_16329_17762 = state_16272__$1;
(statearr_16329_17762[(1)] = (33));

} else {
var statearr_16330_17763 = state_16272__$1;
(statearr_16330_17763[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (25))){
var inst_16216 = (state_16272[(19)]);
var inst_16217 = (state_16272[(11)]);
var inst_16219 = (inst_16217 < inst_16216);
var inst_16220 = inst_16219;
var state_16272__$1 = state_16272;
if(cljs.core.truth_(inst_16220)){
var statearr_16331_17764 = state_16272__$1;
(statearr_16331_17764[(1)] = (27));

} else {
var statearr_16332_17765 = state_16272__$1;
(statearr_16332_17765[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (34))){
var state_16272__$1 = state_16272;
var statearr_16339_17766 = state_16272__$1;
(statearr_16339_17766[(2)] = null);

(statearr_16339_17766[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (17))){
var state_16272__$1 = state_16272;
var statearr_16348_17767 = state_16272__$1;
(statearr_16348_17767[(2)] = null);

(statearr_16348_17767[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (3))){
var inst_16270 = (state_16272[(2)]);
var state_16272__$1 = state_16272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16272__$1,inst_16270);
} else {
if((state_val_16273 === (12))){
var inst_16188 = (state_16272[(2)]);
var state_16272__$1 = state_16272;
var statearr_16364_17768 = state_16272__$1;
(statearr_16364_17768[(2)] = inst_16188);

(statearr_16364_17768[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (2))){
var state_16272__$1 = state_16272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16272__$1,(4),ch);
} else {
if((state_val_16273 === (23))){
var state_16272__$1 = state_16272;
var statearr_16367_17769 = state_16272__$1;
(statearr_16367_17769[(2)] = null);

(statearr_16367_17769[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (35))){
var inst_16254 = (state_16272[(2)]);
var state_16272__$1 = state_16272;
var statearr_16371_17770 = state_16272__$1;
(statearr_16371_17770[(2)] = inst_16254);

(statearr_16371_17770[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (19))){
var inst_16160 = (state_16272[(7)]);
var inst_16164 = cljs.core.chunk_first(inst_16160);
var inst_16165 = cljs.core.chunk_rest(inst_16160);
var inst_16166 = cljs.core.count(inst_16164);
var inst_16138 = inst_16165;
var inst_16139 = inst_16164;
var inst_16140 = inst_16166;
var inst_16141 = (0);
var state_16272__$1 = (function (){var statearr_16379 = state_16272;
(statearr_16379[(14)] = inst_16138);

(statearr_16379[(15)] = inst_16139);

(statearr_16379[(16)] = inst_16141);

(statearr_16379[(17)] = inst_16140);

return statearr_16379;
})();
var statearr_16380_17771 = state_16272__$1;
(statearr_16380_17771[(2)] = null);

(statearr_16380_17771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (11))){
var inst_16138 = (state_16272[(14)]);
var inst_16160 = (state_16272[(7)]);
var inst_16160__$1 = cljs.core.seq(inst_16138);
var state_16272__$1 = (function (){var statearr_16381 = state_16272;
(statearr_16381[(7)] = inst_16160__$1);

return statearr_16381;
})();
if(inst_16160__$1){
var statearr_16382_17773 = state_16272__$1;
(statearr_16382_17773[(1)] = (16));

} else {
var statearr_16383_17774 = state_16272__$1;
(statearr_16383_17774[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (9))){
var inst_16190 = (state_16272[(2)]);
var state_16272__$1 = state_16272;
var statearr_16403_17776 = state_16272__$1;
(statearr_16403_17776[(2)] = inst_16190);

(statearr_16403_17776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (5))){
var inst_16136 = cljs.core.deref(cs);
var inst_16137 = cljs.core.seq(inst_16136);
var inst_16138 = inst_16137;
var inst_16139 = null;
var inst_16140 = (0);
var inst_16141 = (0);
var state_16272__$1 = (function (){var statearr_16415 = state_16272;
(statearr_16415[(14)] = inst_16138);

(statearr_16415[(15)] = inst_16139);

(statearr_16415[(16)] = inst_16141);

(statearr_16415[(17)] = inst_16140);

return statearr_16415;
})();
var statearr_16439_17777 = state_16272__$1;
(statearr_16439_17777[(2)] = null);

(statearr_16439_17777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (14))){
var state_16272__$1 = state_16272;
var statearr_16443_17778 = state_16272__$1;
(statearr_16443_17778[(2)] = null);

(statearr_16443_17778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (45))){
var inst_16262 = (state_16272[(2)]);
var state_16272__$1 = state_16272;
var statearr_16447_17779 = state_16272__$1;
(statearr_16447_17779[(2)] = inst_16262);

(statearr_16447_17779[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (26))){
var inst_16193 = (state_16272[(27)]);
var inst_16258 = (state_16272[(2)]);
var inst_16259 = cljs.core.seq(inst_16193);
var state_16272__$1 = (function (){var statearr_16457 = state_16272;
(statearr_16457[(29)] = inst_16258);

return statearr_16457;
})();
if(inst_16259){
var statearr_16458_17780 = state_16272__$1;
(statearr_16458_17780[(1)] = (42));

} else {
var statearr_16460_17781 = state_16272__$1;
(statearr_16460_17781[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (16))){
var inst_16160 = (state_16272[(7)]);
var inst_16162 = cljs.core.chunked_seq_QMARK_(inst_16160);
var state_16272__$1 = state_16272;
if(inst_16162){
var statearr_16469_17782 = state_16272__$1;
(statearr_16469_17782[(1)] = (19));

} else {
var statearr_16471_17783 = state_16272__$1;
(statearr_16471_17783[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (38))){
var inst_16251 = (state_16272[(2)]);
var state_16272__$1 = state_16272;
var statearr_16513_17784 = state_16272__$1;
(statearr_16513_17784[(2)] = inst_16251);

(statearr_16513_17784[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (30))){
var state_16272__$1 = state_16272;
var statearr_16516_17785 = state_16272__$1;
(statearr_16516_17785[(2)] = null);

(statearr_16516_17785[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (10))){
var inst_16139 = (state_16272[(15)]);
var inst_16141 = (state_16272[(16)]);
var inst_16149 = cljs.core._nth(inst_16139,inst_16141);
var inst_16150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16149,(0),null);
var inst_16151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16149,(1),null);
var state_16272__$1 = (function (){var statearr_16521 = state_16272;
(statearr_16521[(24)] = inst_16150);

return statearr_16521;
})();
if(cljs.core.truth_(inst_16151)){
var statearr_16522_17786 = state_16272__$1;
(statearr_16522_17786[(1)] = (13));

} else {
var statearr_16524_17787 = state_16272__$1;
(statearr_16524_17787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (18))){
var inst_16186 = (state_16272[(2)]);
var state_16272__$1 = state_16272;
var statearr_16533_17788 = state_16272__$1;
(statearr_16533_17788[(2)] = inst_16186);

(statearr_16533_17788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (42))){
var state_16272__$1 = state_16272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16272__$1,(45),dchan);
} else {
if((state_val_16273 === (37))){
var inst_16232 = (state_16272[(23)]);
var inst_16241 = (state_16272[(22)]);
var inst_16129 = (state_16272[(12)]);
var inst_16241__$1 = cljs.core.first(inst_16232);
var inst_16242 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16241__$1,inst_16129,done);
var state_16272__$1 = (function (){var statearr_16536 = state_16272;
(statearr_16536[(22)] = inst_16241__$1);

return statearr_16536;
})();
if(cljs.core.truth_(inst_16242)){
var statearr_16537_17789 = state_16272__$1;
(statearr_16537_17789[(1)] = (39));

} else {
var statearr_16538_17790 = state_16272__$1;
(statearr_16538_17790[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16273 === (8))){
var inst_16141 = (state_16272[(16)]);
var inst_16140 = (state_16272[(17)]);
var inst_16143 = (inst_16141 < inst_16140);
var inst_16144 = inst_16143;
var state_16272__$1 = state_16272;
if(cljs.core.truth_(inst_16144)){
var statearr_16539_17791 = state_16272__$1;
(statearr_16539_17791[(1)] = (10));

} else {
var statearr_16540_17792 = state_16272__$1;
(statearr_16540_17792[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__15107__auto__ = null;
var cljs$core$async$mult_$_state_machine__15107__auto____0 = (function (){
var statearr_16553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16553[(0)] = cljs$core$async$mult_$_state_machine__15107__auto__);

(statearr_16553[(1)] = (1));

return statearr_16553;
});
var cljs$core$async$mult_$_state_machine__15107__auto____1 = (function (state_16272){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_16272);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e16554){var ex__15110__auto__ = e16554;
var statearr_16555_17793 = state_16272;
(statearr_16555_17793[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_16272[(4)]))){
var statearr_16556_17794 = state_16272;
(statearr_16556_17794[(1)] = cljs.core.first((state_16272[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17795 = state_16272;
state_16272 = G__17795;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15107__auto__ = function(state_16272){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15107__auto____1.call(this,state_16272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15107__auto____0;
cljs$core$async$mult_$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15107__auto____1;
return cljs$core$async$mult_$_state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_16558 = f__15336__auto__();
(statearr_16558[(6)] = c__15335__auto___17728);

return statearr_16558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16560 = arguments.length;
switch (G__16560) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17798 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17798(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17803 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17803(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17804 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17804(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17805 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17805(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17806 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17806(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17807 = arguments.length;
var i__5770__auto___17808 = (0);
while(true){
if((i__5770__auto___17808 < len__5769__auto___17807)){
args__5775__auto__.push((arguments[i__5770__auto___17808]));

var G__17809 = (i__5770__auto___17808 + (1));
i__5770__auto___17808 = G__17809;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16578){
var map__16579 = p__16578;
var map__16579__$1 = cljs.core.__destructure_map(map__16579);
var opts = map__16579__$1;
var statearr_16580_17810 = state;
(statearr_16580_17810[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16581_17815 = state;
(statearr_16581_17815[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16582_17816 = state;
(statearr_16582_17816[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16574){
var G__16575 = cljs.core.first(seq16574);
var seq16574__$1 = cljs.core.next(seq16574);
var G__16576 = cljs.core.first(seq16574__$1);
var seq16574__$2 = cljs.core.next(seq16574__$1);
var G__16577 = cljs.core.first(seq16574__$2);
var seq16574__$3 = cljs.core.next(seq16574__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16575,G__16576,G__16577,seq16574__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16583 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16584){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16584 = meta16584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16585,meta16584__$1){
var self__ = this;
var _16585__$1 = this;
return (new cljs.core.async.t_cljs$core$async16583(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16584__$1));
}));

(cljs.core.async.t_cljs$core$async16583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16585){
var self__ = this;
var _16585__$1 = this;
return self__.meta16584;
}));

(cljs.core.async.t_cljs$core$async16583.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16583.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16583.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16583.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16583.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16583.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16583.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16583.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16584","meta16584",-583250793,null)], null);
}));

(cljs.core.async.t_cljs$core$async16583.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16583");

(cljs.core.async.t_cljs$core$async16583.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16583");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16583.
 */
cljs.core.async.__GT_t_cljs$core$async16583 = (function cljs$core$async$mix_$___GT_t_cljs$core$async16583(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16584){
return (new cljs.core.async.t_cljs$core$async16583(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16584));
});

}

return (new cljs.core.async.t_cljs$core$async16583(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15335__auto___17835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_16653){
var state_val_16654 = (state_16653[(1)]);
if((state_val_16654 === (7))){
var inst_16613 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
if(cljs.core.truth_(inst_16613)){
var statearr_16655_17836 = state_16653__$1;
(statearr_16655_17836[(1)] = (8));

} else {
var statearr_16656_17837 = state_16653__$1;
(statearr_16656_17837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (20))){
var inst_16606 = (state_16653[(7)]);
var state_16653__$1 = state_16653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16653__$1,(23),out,inst_16606);
} else {
if((state_val_16654 === (1))){
var inst_16589 = calc_state();
var inst_16590 = cljs.core.__destructure_map(inst_16589);
var inst_16591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16590,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16590,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16590,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16594 = inst_16589;
var state_16653__$1 = (function (){var statearr_16657 = state_16653;
(statearr_16657[(8)] = inst_16593);

(statearr_16657[(9)] = inst_16592);

(statearr_16657[(10)] = inst_16594);

(statearr_16657[(11)] = inst_16591);

return statearr_16657;
})();
var statearr_16658_17838 = state_16653__$1;
(statearr_16658_17838[(2)] = null);

(statearr_16658_17838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (24))){
var inst_16597 = (state_16653[(12)]);
var inst_16594 = inst_16597;
var state_16653__$1 = (function (){var statearr_16659 = state_16653;
(statearr_16659[(10)] = inst_16594);

return statearr_16659;
})();
var statearr_16660_17839 = state_16653__$1;
(statearr_16660_17839[(2)] = null);

(statearr_16660_17839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (4))){
var inst_16606 = (state_16653[(7)]);
var inst_16608 = (state_16653[(13)]);
var inst_16605 = (state_16653[(2)]);
var inst_16606__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16605,(0),null);
var inst_16607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16605,(1),null);
var inst_16608__$1 = (inst_16606__$1 == null);
var state_16653__$1 = (function (){var statearr_16661 = state_16653;
(statearr_16661[(14)] = inst_16607);

(statearr_16661[(7)] = inst_16606__$1);

(statearr_16661[(13)] = inst_16608__$1);

return statearr_16661;
})();
if(cljs.core.truth_(inst_16608__$1)){
var statearr_16662_17840 = state_16653__$1;
(statearr_16662_17840[(1)] = (5));

} else {
var statearr_16663_17841 = state_16653__$1;
(statearr_16663_17841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (15))){
var inst_16598 = (state_16653[(15)]);
var inst_16627 = (state_16653[(16)]);
var inst_16627__$1 = cljs.core.empty_QMARK_(inst_16598);
var state_16653__$1 = (function (){var statearr_16664 = state_16653;
(statearr_16664[(16)] = inst_16627__$1);

return statearr_16664;
})();
if(inst_16627__$1){
var statearr_16665_17842 = state_16653__$1;
(statearr_16665_17842[(1)] = (17));

} else {
var statearr_16666_17843 = state_16653__$1;
(statearr_16666_17843[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (21))){
var inst_16597 = (state_16653[(12)]);
var inst_16594 = inst_16597;
var state_16653__$1 = (function (){var statearr_16667 = state_16653;
(statearr_16667[(10)] = inst_16594);

return statearr_16667;
})();
var statearr_16668_17848 = state_16653__$1;
(statearr_16668_17848[(2)] = null);

(statearr_16668_17848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (13))){
var inst_16620 = (state_16653[(2)]);
var inst_16621 = calc_state();
var inst_16594 = inst_16621;
var state_16653__$1 = (function (){var statearr_16669 = state_16653;
(statearr_16669[(17)] = inst_16620);

(statearr_16669[(10)] = inst_16594);

return statearr_16669;
})();
var statearr_16670_17849 = state_16653__$1;
(statearr_16670_17849[(2)] = null);

(statearr_16670_17849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (22))){
var inst_16647 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
var statearr_16671_17850 = state_16653__$1;
(statearr_16671_17850[(2)] = inst_16647);

(statearr_16671_17850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (6))){
var inst_16607 = (state_16653[(14)]);
var inst_16611 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16607,change);
var state_16653__$1 = state_16653;
var statearr_16672_17851 = state_16653__$1;
(statearr_16672_17851[(2)] = inst_16611);

(statearr_16672_17851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (25))){
var state_16653__$1 = state_16653;
var statearr_16673_17852 = state_16653__$1;
(statearr_16673_17852[(2)] = null);

(statearr_16673_17852[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (17))){
var inst_16607 = (state_16653[(14)]);
var inst_16599 = (state_16653[(18)]);
var inst_16629 = (inst_16599.cljs$core$IFn$_invoke$arity$1 ? inst_16599.cljs$core$IFn$_invoke$arity$1(inst_16607) : inst_16599.call(null,inst_16607));
var inst_16630 = cljs.core.not(inst_16629);
var state_16653__$1 = state_16653;
var statearr_16674_17853 = state_16653__$1;
(statearr_16674_17853[(2)] = inst_16630);

(statearr_16674_17853[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (3))){
var inst_16651 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16653__$1,inst_16651);
} else {
if((state_val_16654 === (12))){
var state_16653__$1 = state_16653;
var statearr_16675_17854 = state_16653__$1;
(statearr_16675_17854[(2)] = null);

(statearr_16675_17854[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (2))){
var inst_16594 = (state_16653[(10)]);
var inst_16597 = (state_16653[(12)]);
var inst_16597__$1 = cljs.core.__destructure_map(inst_16594);
var inst_16598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16597__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16597__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16597__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16653__$1 = (function (){var statearr_16676 = state_16653;
(statearr_16676[(15)] = inst_16598);

(statearr_16676[(18)] = inst_16599);

(statearr_16676[(12)] = inst_16597__$1);

return statearr_16676;
})();
return cljs.core.async.ioc_alts_BANG_(state_16653__$1,(4),inst_16600);
} else {
if((state_val_16654 === (23))){
var inst_16638 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
if(cljs.core.truth_(inst_16638)){
var statearr_16677_17860 = state_16653__$1;
(statearr_16677_17860[(1)] = (24));

} else {
var statearr_16678_17861 = state_16653__$1;
(statearr_16678_17861[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (19))){
var inst_16633 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
var statearr_16679_17862 = state_16653__$1;
(statearr_16679_17862[(2)] = inst_16633);

(statearr_16679_17862[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (11))){
var inst_16607 = (state_16653[(14)]);
var inst_16617 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16607);
var state_16653__$1 = state_16653;
var statearr_16680_17863 = state_16653__$1;
(statearr_16680_17863[(2)] = inst_16617);

(statearr_16680_17863[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (9))){
var inst_16607 = (state_16653[(14)]);
var inst_16598 = (state_16653[(15)]);
var inst_16624 = (state_16653[(19)]);
var inst_16624__$1 = (inst_16598.cljs$core$IFn$_invoke$arity$1 ? inst_16598.cljs$core$IFn$_invoke$arity$1(inst_16607) : inst_16598.call(null,inst_16607));
var state_16653__$1 = (function (){var statearr_16681 = state_16653;
(statearr_16681[(19)] = inst_16624__$1);

return statearr_16681;
})();
if(cljs.core.truth_(inst_16624__$1)){
var statearr_16682_17864 = state_16653__$1;
(statearr_16682_17864[(1)] = (14));

} else {
var statearr_16683_17865 = state_16653__$1;
(statearr_16683_17865[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (5))){
var inst_16608 = (state_16653[(13)]);
var state_16653__$1 = state_16653;
var statearr_16684_17866 = state_16653__$1;
(statearr_16684_17866[(2)] = inst_16608);

(statearr_16684_17866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (14))){
var inst_16624 = (state_16653[(19)]);
var state_16653__$1 = state_16653;
var statearr_16685_17867 = state_16653__$1;
(statearr_16685_17867[(2)] = inst_16624);

(statearr_16685_17867[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (26))){
var inst_16643 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
var statearr_16686_17868 = state_16653__$1;
(statearr_16686_17868[(2)] = inst_16643);

(statearr_16686_17868[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (16))){
var inst_16635 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
if(cljs.core.truth_(inst_16635)){
var statearr_16687_17869 = state_16653__$1;
(statearr_16687_17869[(1)] = (20));

} else {
var statearr_16688_17870 = state_16653__$1;
(statearr_16688_17870[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (10))){
var inst_16649 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
var statearr_16689_17871 = state_16653__$1;
(statearr_16689_17871[(2)] = inst_16649);

(statearr_16689_17871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (18))){
var inst_16627 = (state_16653[(16)]);
var state_16653__$1 = state_16653;
var statearr_16690_17872 = state_16653__$1;
(statearr_16690_17872[(2)] = inst_16627);

(statearr_16690_17872[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (8))){
var inst_16606 = (state_16653[(7)]);
var inst_16615 = (inst_16606 == null);
var state_16653__$1 = state_16653;
if(cljs.core.truth_(inst_16615)){
var statearr_16691_17873 = state_16653__$1;
(statearr_16691_17873[(1)] = (11));

} else {
var statearr_16692_17874 = state_16653__$1;
(statearr_16692_17874[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__15107__auto__ = null;
var cljs$core$async$mix_$_state_machine__15107__auto____0 = (function (){
var statearr_16693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16693[(0)] = cljs$core$async$mix_$_state_machine__15107__auto__);

(statearr_16693[(1)] = (1));

return statearr_16693;
});
var cljs$core$async$mix_$_state_machine__15107__auto____1 = (function (state_16653){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_16653);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e16694){var ex__15110__auto__ = e16694;
var statearr_16695_17880 = state_16653;
(statearr_16695_17880[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_16653[(4)]))){
var statearr_16696_17881 = state_16653;
(statearr_16696_17881[(1)] = cljs.core.first((state_16653[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17882 = state_16653;
state_16653 = G__17882;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15107__auto__ = function(state_16653){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15107__auto____1.call(this,state_16653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15107__auto____0;
cljs$core$async$mix_$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15107__auto____1;
return cljs$core$async$mix_$_state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_16697 = f__15336__auto__();
(statearr_16697[(6)] = c__15335__auto___17835);

return statearr_16697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17883 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17883(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17884 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17884(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17885 = (function() {
var G__17886 = null;
var G__17886__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17886__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17886 = function(p,v){
switch(arguments.length){
case 1:
return G__17886__1.call(this,p);
case 2:
return G__17886__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17886.cljs$core$IFn$_invoke$arity$1 = G__17886__1;
G__17886.cljs$core$IFn$_invoke$arity$2 = G__17886__2;
return G__17886;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16699 = arguments.length;
switch (G__16699) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17885(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17885(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__16702 = arguments.length;
switch (G__16702) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16700_SHARP_){
if(cljs.core.truth_((p1__16700_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16700_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16700_SHARP_.call(null,topic)))){
return p1__16700_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16700_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16703 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16703 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16704){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16704 = meta16704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16705,meta16704__$1){
var self__ = this;
var _16705__$1 = this;
return (new cljs.core.async.t_cljs$core$async16703(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16704__$1));
}));

(cljs.core.async.t_cljs$core$async16703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16705){
var self__ = this;
var _16705__$1 = this;
return self__.meta16704;
}));

(cljs.core.async.t_cljs$core$async16703.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16703.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16703.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16703.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16704","meta16704",469532861,null)], null);
}));

(cljs.core.async.t_cljs$core$async16703.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16703");

(cljs.core.async.t_cljs$core$async16703.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16703");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16703.
 */
cljs.core.async.__GT_t_cljs$core$async16703 = (function cljs$core$async$__GT_t_cljs$core$async16703(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16704){
return (new cljs.core.async.t_cljs$core$async16703(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16704));
});

}

return (new cljs.core.async.t_cljs$core$async16703(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15335__auto___17893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_16777){
var state_val_16778 = (state_16777[(1)]);
if((state_val_16778 === (7))){
var inst_16773 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16779_17894 = state_16777__$1;
(statearr_16779_17894[(2)] = inst_16773);

(statearr_16779_17894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (20))){
var state_16777__$1 = state_16777;
var statearr_16780_17895 = state_16777__$1;
(statearr_16780_17895[(2)] = null);

(statearr_16780_17895[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (1))){
var state_16777__$1 = state_16777;
var statearr_16781_17896 = state_16777__$1;
(statearr_16781_17896[(2)] = null);

(statearr_16781_17896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (24))){
var inst_16756 = (state_16777[(7)]);
var inst_16765 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16756);
var state_16777__$1 = state_16777;
var statearr_16782_17898 = state_16777__$1;
(statearr_16782_17898[(2)] = inst_16765);

(statearr_16782_17898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (4))){
var inst_16708 = (state_16777[(8)]);
var inst_16708__$1 = (state_16777[(2)]);
var inst_16709 = (inst_16708__$1 == null);
var state_16777__$1 = (function (){var statearr_16783 = state_16777;
(statearr_16783[(8)] = inst_16708__$1);

return statearr_16783;
})();
if(cljs.core.truth_(inst_16709)){
var statearr_16784_17899 = state_16777__$1;
(statearr_16784_17899[(1)] = (5));

} else {
var statearr_16785_17900 = state_16777__$1;
(statearr_16785_17900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (15))){
var inst_16750 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16786_17901 = state_16777__$1;
(statearr_16786_17901[(2)] = inst_16750);

(statearr_16786_17901[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (21))){
var inst_16770 = (state_16777[(2)]);
var state_16777__$1 = (function (){var statearr_16787 = state_16777;
(statearr_16787[(9)] = inst_16770);

return statearr_16787;
})();
var statearr_16788_17902 = state_16777__$1;
(statearr_16788_17902[(2)] = null);

(statearr_16788_17902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (13))){
var inst_16732 = (state_16777[(10)]);
var inst_16734 = cljs.core.chunked_seq_QMARK_(inst_16732);
var state_16777__$1 = state_16777;
if(inst_16734){
var statearr_16789_17903 = state_16777__$1;
(statearr_16789_17903[(1)] = (16));

} else {
var statearr_16790_17904 = state_16777__$1;
(statearr_16790_17904[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (22))){
var inst_16762 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
if(cljs.core.truth_(inst_16762)){
var statearr_16791_17905 = state_16777__$1;
(statearr_16791_17905[(1)] = (23));

} else {
var statearr_16792_17906 = state_16777__$1;
(statearr_16792_17906[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (6))){
var inst_16758 = (state_16777[(11)]);
var inst_16756 = (state_16777[(7)]);
var inst_16708 = (state_16777[(8)]);
var inst_16756__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16708) : topic_fn.call(null,inst_16708));
var inst_16757 = cljs.core.deref(mults);
var inst_16758__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16757,inst_16756__$1);
var state_16777__$1 = (function (){var statearr_16793 = state_16777;
(statearr_16793[(11)] = inst_16758__$1);

(statearr_16793[(7)] = inst_16756__$1);

return statearr_16793;
})();
if(cljs.core.truth_(inst_16758__$1)){
var statearr_16794_17912 = state_16777__$1;
(statearr_16794_17912[(1)] = (19));

} else {
var statearr_16795_17913 = state_16777__$1;
(statearr_16795_17913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (25))){
var inst_16767 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16796_17914 = state_16777__$1;
(statearr_16796_17914[(2)] = inst_16767);

(statearr_16796_17914[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (17))){
var inst_16732 = (state_16777[(10)]);
var inst_16741 = cljs.core.first(inst_16732);
var inst_16742 = cljs.core.async.muxch_STAR_(inst_16741);
var inst_16743 = cljs.core.async.close_BANG_(inst_16742);
var inst_16744 = cljs.core.next(inst_16732);
var inst_16718 = inst_16744;
var inst_16719 = null;
var inst_16720 = (0);
var inst_16721 = (0);
var state_16777__$1 = (function (){var statearr_16797 = state_16777;
(statearr_16797[(12)] = inst_16721);

(statearr_16797[(13)] = inst_16743);

(statearr_16797[(14)] = inst_16719);

(statearr_16797[(15)] = inst_16718);

(statearr_16797[(16)] = inst_16720);

return statearr_16797;
})();
var statearr_16798_17915 = state_16777__$1;
(statearr_16798_17915[(2)] = null);

(statearr_16798_17915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (3))){
var inst_16775 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16777__$1,inst_16775);
} else {
if((state_val_16778 === (12))){
var inst_16752 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16799_17917 = state_16777__$1;
(statearr_16799_17917[(2)] = inst_16752);

(statearr_16799_17917[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (2))){
var state_16777__$1 = state_16777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16777__$1,(4),ch);
} else {
if((state_val_16778 === (23))){
var state_16777__$1 = state_16777;
var statearr_16800_17918 = state_16777__$1;
(statearr_16800_17918[(2)] = null);

(statearr_16800_17918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (19))){
var inst_16758 = (state_16777[(11)]);
var inst_16708 = (state_16777[(8)]);
var inst_16760 = cljs.core.async.muxch_STAR_(inst_16758);
var state_16777__$1 = state_16777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16777__$1,(22),inst_16760,inst_16708);
} else {
if((state_val_16778 === (11))){
var inst_16718 = (state_16777[(15)]);
var inst_16732 = (state_16777[(10)]);
var inst_16732__$1 = cljs.core.seq(inst_16718);
var state_16777__$1 = (function (){var statearr_16801 = state_16777;
(statearr_16801[(10)] = inst_16732__$1);

return statearr_16801;
})();
if(inst_16732__$1){
var statearr_16802_17920 = state_16777__$1;
(statearr_16802_17920[(1)] = (13));

} else {
var statearr_16803_17924 = state_16777__$1;
(statearr_16803_17924[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (9))){
var inst_16754 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16804_17925 = state_16777__$1;
(statearr_16804_17925[(2)] = inst_16754);

(statearr_16804_17925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (5))){
var inst_16715 = cljs.core.deref(mults);
var inst_16716 = cljs.core.vals(inst_16715);
var inst_16717 = cljs.core.seq(inst_16716);
var inst_16718 = inst_16717;
var inst_16719 = null;
var inst_16720 = (0);
var inst_16721 = (0);
var state_16777__$1 = (function (){var statearr_16805 = state_16777;
(statearr_16805[(12)] = inst_16721);

(statearr_16805[(14)] = inst_16719);

(statearr_16805[(15)] = inst_16718);

(statearr_16805[(16)] = inst_16720);

return statearr_16805;
})();
var statearr_16806_17926 = state_16777__$1;
(statearr_16806_17926[(2)] = null);

(statearr_16806_17926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (14))){
var state_16777__$1 = state_16777;
var statearr_16810_17927 = state_16777__$1;
(statearr_16810_17927[(2)] = null);

(statearr_16810_17927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (16))){
var inst_16732 = (state_16777[(10)]);
var inst_16736 = cljs.core.chunk_first(inst_16732);
var inst_16737 = cljs.core.chunk_rest(inst_16732);
var inst_16738 = cljs.core.count(inst_16736);
var inst_16718 = inst_16737;
var inst_16719 = inst_16736;
var inst_16720 = inst_16738;
var inst_16721 = (0);
var state_16777__$1 = (function (){var statearr_16811 = state_16777;
(statearr_16811[(12)] = inst_16721);

(statearr_16811[(14)] = inst_16719);

(statearr_16811[(15)] = inst_16718);

(statearr_16811[(16)] = inst_16720);

return statearr_16811;
})();
var statearr_16812_17929 = state_16777__$1;
(statearr_16812_17929[(2)] = null);

(statearr_16812_17929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (10))){
var inst_16721 = (state_16777[(12)]);
var inst_16719 = (state_16777[(14)]);
var inst_16718 = (state_16777[(15)]);
var inst_16720 = (state_16777[(16)]);
var inst_16726 = cljs.core._nth(inst_16719,inst_16721);
var inst_16727 = cljs.core.async.muxch_STAR_(inst_16726);
var inst_16728 = cljs.core.async.close_BANG_(inst_16727);
var inst_16729 = (inst_16721 + (1));
var tmp16807 = inst_16719;
var tmp16808 = inst_16718;
var tmp16809 = inst_16720;
var inst_16718__$1 = tmp16808;
var inst_16719__$1 = tmp16807;
var inst_16720__$1 = tmp16809;
var inst_16721__$1 = inst_16729;
var state_16777__$1 = (function (){var statearr_16813 = state_16777;
(statearr_16813[(12)] = inst_16721__$1);

(statearr_16813[(14)] = inst_16719__$1);

(statearr_16813[(17)] = inst_16728);

(statearr_16813[(15)] = inst_16718__$1);

(statearr_16813[(16)] = inst_16720__$1);

return statearr_16813;
})();
var statearr_16814_17933 = state_16777__$1;
(statearr_16814_17933[(2)] = null);

(statearr_16814_17933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (18))){
var inst_16747 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16815_17935 = state_16777__$1;
(statearr_16815_17935[(2)] = inst_16747);

(statearr_16815_17935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (8))){
var inst_16721 = (state_16777[(12)]);
var inst_16720 = (state_16777[(16)]);
var inst_16723 = (inst_16721 < inst_16720);
var inst_16724 = inst_16723;
var state_16777__$1 = state_16777;
if(cljs.core.truth_(inst_16724)){
var statearr_16816_17936 = state_16777__$1;
(statearr_16816_17936[(1)] = (10));

} else {
var statearr_16817_17937 = state_16777__$1;
(statearr_16817_17937[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__15107__auto__ = null;
var cljs$core$async$state_machine__15107__auto____0 = (function (){
var statearr_16818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16818[(0)] = cljs$core$async$state_machine__15107__auto__);

(statearr_16818[(1)] = (1));

return statearr_16818;
});
var cljs$core$async$state_machine__15107__auto____1 = (function (state_16777){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_16777);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e16819){var ex__15110__auto__ = e16819;
var statearr_16820_17938 = state_16777;
(statearr_16820_17938[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_16777[(4)]))){
var statearr_16821_17939 = state_16777;
(statearr_16821_17939[(1)] = cljs.core.first((state_16777[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17940 = state_16777;
state_16777 = G__17940;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$state_machine__15107__auto__ = function(state_16777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15107__auto____1.call(this,state_16777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15107__auto____0;
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15107__auto____1;
return cljs$core$async$state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_16822 = f__15336__auto__();
(statearr_16822[(6)] = c__15335__auto___17893);

return statearr_16822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16824 = arguments.length;
switch (G__16824) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16826 = arguments.length;
switch (G__16826) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__16828 = arguments.length;
switch (G__16828) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15335__auto___17954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_16871){
var state_val_16872 = (state_16871[(1)]);
if((state_val_16872 === (7))){
var state_16871__$1 = state_16871;
var statearr_16873_17955 = state_16871__$1;
(statearr_16873_17955[(2)] = null);

(statearr_16873_17955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (1))){
var state_16871__$1 = state_16871;
var statearr_16874_17956 = state_16871__$1;
(statearr_16874_17956[(2)] = null);

(statearr_16874_17956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (4))){
var inst_16832 = (state_16871[(7)]);
var inst_16831 = (state_16871[(8)]);
var inst_16834 = (inst_16832 < inst_16831);
var state_16871__$1 = state_16871;
if(cljs.core.truth_(inst_16834)){
var statearr_16875_17957 = state_16871__$1;
(statearr_16875_17957[(1)] = (6));

} else {
var statearr_16876_17958 = state_16871__$1;
(statearr_16876_17958[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (15))){
var inst_16857 = (state_16871[(9)]);
var inst_16862 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16857);
var state_16871__$1 = state_16871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16871__$1,(17),out,inst_16862);
} else {
if((state_val_16872 === (13))){
var inst_16857 = (state_16871[(9)]);
var inst_16857__$1 = (state_16871[(2)]);
var inst_16858 = cljs.core.some(cljs.core.nil_QMARK_,inst_16857__$1);
var state_16871__$1 = (function (){var statearr_16877 = state_16871;
(statearr_16877[(9)] = inst_16857__$1);

return statearr_16877;
})();
if(cljs.core.truth_(inst_16858)){
var statearr_16878_17959 = state_16871__$1;
(statearr_16878_17959[(1)] = (14));

} else {
var statearr_16879_17960 = state_16871__$1;
(statearr_16879_17960[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (6))){
var state_16871__$1 = state_16871;
var statearr_16880_17961 = state_16871__$1;
(statearr_16880_17961[(2)] = null);

(statearr_16880_17961[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (17))){
var inst_16864 = (state_16871[(2)]);
var state_16871__$1 = (function (){var statearr_16882 = state_16871;
(statearr_16882[(10)] = inst_16864);

return statearr_16882;
})();
var statearr_16883_17962 = state_16871__$1;
(statearr_16883_17962[(2)] = null);

(statearr_16883_17962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (3))){
var inst_16869 = (state_16871[(2)]);
var state_16871__$1 = state_16871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16871__$1,inst_16869);
} else {
if((state_val_16872 === (12))){
var _ = (function (){var statearr_16884 = state_16871;
(statearr_16884[(4)] = cljs.core.rest((state_16871[(4)])));

return statearr_16884;
})();
var state_16871__$1 = state_16871;
var ex16881 = (state_16871__$1[(2)]);
var statearr_16885_17973 = state_16871__$1;
(statearr_16885_17973[(5)] = ex16881);


if((ex16881 instanceof Object)){
var statearr_16886_17977 = state_16871__$1;
(statearr_16886_17977[(1)] = (11));

(statearr_16886_17977[(5)] = null);

} else {
throw ex16881;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (2))){
var inst_16830 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16831 = cnt;
var inst_16832 = (0);
var state_16871__$1 = (function (){var statearr_16887 = state_16871;
(statearr_16887[(7)] = inst_16832);

(statearr_16887[(11)] = inst_16830);

(statearr_16887[(8)] = inst_16831);

return statearr_16887;
})();
var statearr_16888_18000 = state_16871__$1;
(statearr_16888_18000[(2)] = null);

(statearr_16888_18000[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (11))){
var inst_16836 = (state_16871[(2)]);
var inst_16837 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16871__$1 = (function (){var statearr_16889 = state_16871;
(statearr_16889[(12)] = inst_16836);

return statearr_16889;
})();
var statearr_16890_18001 = state_16871__$1;
(statearr_16890_18001[(2)] = inst_16837);

(statearr_16890_18001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (9))){
var inst_16832 = (state_16871[(7)]);
var _ = (function (){var statearr_16891 = state_16871;
(statearr_16891[(4)] = cljs.core.cons((12),(state_16871[(4)])));

return statearr_16891;
})();
var inst_16843 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16832) : chs__$1.call(null,inst_16832));
var inst_16844 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16832) : done.call(null,inst_16832));
var inst_16845 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16843,inst_16844);
var ___$1 = (function (){var statearr_16892 = state_16871;
(statearr_16892[(4)] = cljs.core.rest((state_16871[(4)])));

return statearr_16892;
})();
var state_16871__$1 = state_16871;
var statearr_16893_18002 = state_16871__$1;
(statearr_16893_18002[(2)] = inst_16845);

(statearr_16893_18002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (5))){
var inst_16855 = (state_16871[(2)]);
var state_16871__$1 = (function (){var statearr_16894 = state_16871;
(statearr_16894[(13)] = inst_16855);

return statearr_16894;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16871__$1,(13),dchan);
} else {
if((state_val_16872 === (14))){
var inst_16860 = cljs.core.async.close_BANG_(out);
var state_16871__$1 = state_16871;
var statearr_16895_18009 = state_16871__$1;
(statearr_16895_18009[(2)] = inst_16860);

(statearr_16895_18009[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (16))){
var inst_16867 = (state_16871[(2)]);
var state_16871__$1 = state_16871;
var statearr_16896_18010 = state_16871__$1;
(statearr_16896_18010[(2)] = inst_16867);

(statearr_16896_18010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (10))){
var inst_16832 = (state_16871[(7)]);
var inst_16848 = (state_16871[(2)]);
var inst_16849 = (inst_16832 + (1));
var inst_16832__$1 = inst_16849;
var state_16871__$1 = (function (){var statearr_16897 = state_16871;
(statearr_16897[(7)] = inst_16832__$1);

(statearr_16897[(14)] = inst_16848);

return statearr_16897;
})();
var statearr_16898_18011 = state_16871__$1;
(statearr_16898_18011[(2)] = null);

(statearr_16898_18011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16872 === (8))){
var inst_16853 = (state_16871[(2)]);
var state_16871__$1 = state_16871;
var statearr_16899_18012 = state_16871__$1;
(statearr_16899_18012[(2)] = inst_16853);

(statearr_16899_18012[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__15107__auto__ = null;
var cljs$core$async$state_machine__15107__auto____0 = (function (){
var statearr_16900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16900[(0)] = cljs$core$async$state_machine__15107__auto__);

(statearr_16900[(1)] = (1));

return statearr_16900;
});
var cljs$core$async$state_machine__15107__auto____1 = (function (state_16871){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_16871);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e16901){var ex__15110__auto__ = e16901;
var statearr_16902_18025 = state_16871;
(statearr_16902_18025[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_16871[(4)]))){
var statearr_16903_18026 = state_16871;
(statearr_16903_18026[(1)] = cljs.core.first((state_16871[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18027 = state_16871;
state_16871 = G__18027;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$state_machine__15107__auto__ = function(state_16871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15107__auto____1.call(this,state_16871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15107__auto____0;
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15107__auto____1;
return cljs$core$async$state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_16904 = f__15336__auto__();
(statearr_16904[(6)] = c__15335__auto___17954);

return statearr_16904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16907 = arguments.length;
switch (G__16907) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15335__auto___18029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_16939){
var state_val_16940 = (state_16939[(1)]);
if((state_val_16940 === (7))){
var inst_16919 = (state_16939[(7)]);
var inst_16918 = (state_16939[(8)]);
var inst_16918__$1 = (state_16939[(2)]);
var inst_16919__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16918__$1,(0),null);
var inst_16920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16918__$1,(1),null);
var inst_16921 = (inst_16919__$1 == null);
var state_16939__$1 = (function (){var statearr_16941 = state_16939;
(statearr_16941[(7)] = inst_16919__$1);

(statearr_16941[(9)] = inst_16920);

(statearr_16941[(8)] = inst_16918__$1);

return statearr_16941;
})();
if(cljs.core.truth_(inst_16921)){
var statearr_16942_18030 = state_16939__$1;
(statearr_16942_18030[(1)] = (8));

} else {
var statearr_16943_18041 = state_16939__$1;
(statearr_16943_18041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (1))){
var inst_16908 = cljs.core.vec(chs);
var inst_16909 = inst_16908;
var state_16939__$1 = (function (){var statearr_16944 = state_16939;
(statearr_16944[(10)] = inst_16909);

return statearr_16944;
})();
var statearr_16945_18044 = state_16939__$1;
(statearr_16945_18044[(2)] = null);

(statearr_16945_18044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (4))){
var inst_16909 = (state_16939[(10)]);
var state_16939__$1 = state_16939;
return cljs.core.async.ioc_alts_BANG_(state_16939__$1,(7),inst_16909);
} else {
if((state_val_16940 === (6))){
var inst_16935 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
var statearr_16946_18048 = state_16939__$1;
(statearr_16946_18048[(2)] = inst_16935);

(statearr_16946_18048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (3))){
var inst_16937 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16939__$1,inst_16937);
} else {
if((state_val_16940 === (2))){
var inst_16909 = (state_16939[(10)]);
var inst_16911 = cljs.core.count(inst_16909);
var inst_16912 = (inst_16911 > (0));
var state_16939__$1 = state_16939;
if(cljs.core.truth_(inst_16912)){
var statearr_16948_18049 = state_16939__$1;
(statearr_16948_18049[(1)] = (4));

} else {
var statearr_16949_18050 = state_16939__$1;
(statearr_16949_18050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (11))){
var inst_16909 = (state_16939[(10)]);
var inst_16928 = (state_16939[(2)]);
var tmp16947 = inst_16909;
var inst_16909__$1 = tmp16947;
var state_16939__$1 = (function (){var statearr_16950 = state_16939;
(statearr_16950[(11)] = inst_16928);

(statearr_16950[(10)] = inst_16909__$1);

return statearr_16950;
})();
var statearr_16951_18052 = state_16939__$1;
(statearr_16951_18052[(2)] = null);

(statearr_16951_18052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (9))){
var inst_16919 = (state_16939[(7)]);
var state_16939__$1 = state_16939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16939__$1,(11),out,inst_16919);
} else {
if((state_val_16940 === (5))){
var inst_16933 = cljs.core.async.close_BANG_(out);
var state_16939__$1 = state_16939;
var statearr_16952_18054 = state_16939__$1;
(statearr_16952_18054[(2)] = inst_16933);

(statearr_16952_18054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (10))){
var inst_16931 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
var statearr_16953_18055 = state_16939__$1;
(statearr_16953_18055[(2)] = inst_16931);

(statearr_16953_18055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (8))){
var inst_16909 = (state_16939[(10)]);
var inst_16919 = (state_16939[(7)]);
var inst_16920 = (state_16939[(9)]);
var inst_16918 = (state_16939[(8)]);
var inst_16923 = (function (){var cs = inst_16909;
var vec__16914 = inst_16918;
var v = inst_16919;
var c = inst_16920;
return (function (p1__16905_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16905_SHARP_);
});
})();
var inst_16924 = cljs.core.filterv(inst_16923,inst_16909);
var inst_16909__$1 = inst_16924;
var state_16939__$1 = (function (){var statearr_16954 = state_16939;
(statearr_16954[(10)] = inst_16909__$1);

return statearr_16954;
})();
var statearr_16955_18057 = state_16939__$1;
(statearr_16955_18057[(2)] = null);

(statearr_16955_18057[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__15107__auto__ = null;
var cljs$core$async$state_machine__15107__auto____0 = (function (){
var statearr_16956 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16956[(0)] = cljs$core$async$state_machine__15107__auto__);

(statearr_16956[(1)] = (1));

return statearr_16956;
});
var cljs$core$async$state_machine__15107__auto____1 = (function (state_16939){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_16939);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e16957){var ex__15110__auto__ = e16957;
var statearr_16958_18058 = state_16939;
(statearr_16958_18058[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_16939[(4)]))){
var statearr_16959_18059 = state_16939;
(statearr_16959_18059[(1)] = cljs.core.first((state_16939[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18060 = state_16939;
state_16939 = G__18060;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$state_machine__15107__auto__ = function(state_16939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15107__auto____1.call(this,state_16939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15107__auto____0;
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15107__auto____1;
return cljs$core$async$state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_16960 = f__15336__auto__();
(statearr_16960[(6)] = c__15335__auto___18029);

return statearr_16960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16962 = arguments.length;
switch (G__16962) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15335__auto___18064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_16986){
var state_val_16987 = (state_16986[(1)]);
if((state_val_16987 === (7))){
var inst_16968 = (state_16986[(7)]);
var inst_16968__$1 = (state_16986[(2)]);
var inst_16969 = (inst_16968__$1 == null);
var inst_16970 = cljs.core.not(inst_16969);
var state_16986__$1 = (function (){var statearr_16988 = state_16986;
(statearr_16988[(7)] = inst_16968__$1);

return statearr_16988;
})();
if(inst_16970){
var statearr_16989_18065 = state_16986__$1;
(statearr_16989_18065[(1)] = (8));

} else {
var statearr_16990_18067 = state_16986__$1;
(statearr_16990_18067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16987 === (1))){
var inst_16963 = (0);
var state_16986__$1 = (function (){var statearr_16991 = state_16986;
(statearr_16991[(8)] = inst_16963);

return statearr_16991;
})();
var statearr_16992_18068 = state_16986__$1;
(statearr_16992_18068[(2)] = null);

(statearr_16992_18068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16987 === (4))){
var state_16986__$1 = state_16986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16986__$1,(7),ch);
} else {
if((state_val_16987 === (6))){
var inst_16981 = (state_16986[(2)]);
var state_16986__$1 = state_16986;
var statearr_16993_18070 = state_16986__$1;
(statearr_16993_18070[(2)] = inst_16981);

(statearr_16993_18070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16987 === (3))){
var inst_16983 = (state_16986[(2)]);
var inst_16984 = cljs.core.async.close_BANG_(out);
var state_16986__$1 = (function (){var statearr_16994 = state_16986;
(statearr_16994[(9)] = inst_16983);

return statearr_16994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16986__$1,inst_16984);
} else {
if((state_val_16987 === (2))){
var inst_16963 = (state_16986[(8)]);
var inst_16965 = (inst_16963 < n);
var state_16986__$1 = state_16986;
if(cljs.core.truth_(inst_16965)){
var statearr_16995_18071 = state_16986__$1;
(statearr_16995_18071[(1)] = (4));

} else {
var statearr_16996_18072 = state_16986__$1;
(statearr_16996_18072[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16987 === (11))){
var inst_16963 = (state_16986[(8)]);
var inst_16973 = (state_16986[(2)]);
var inst_16974 = (inst_16963 + (1));
var inst_16963__$1 = inst_16974;
var state_16986__$1 = (function (){var statearr_16997 = state_16986;
(statearr_16997[(10)] = inst_16973);

(statearr_16997[(8)] = inst_16963__$1);

return statearr_16997;
})();
var statearr_16998_18074 = state_16986__$1;
(statearr_16998_18074[(2)] = null);

(statearr_16998_18074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16987 === (9))){
var state_16986__$1 = state_16986;
var statearr_16999_18075 = state_16986__$1;
(statearr_16999_18075[(2)] = null);

(statearr_16999_18075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16987 === (5))){
var state_16986__$1 = state_16986;
var statearr_17000_18076 = state_16986__$1;
(statearr_17000_18076[(2)] = null);

(statearr_17000_18076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16987 === (10))){
var inst_16978 = (state_16986[(2)]);
var state_16986__$1 = state_16986;
var statearr_17001_18101 = state_16986__$1;
(statearr_17001_18101[(2)] = inst_16978);

(statearr_17001_18101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16987 === (8))){
var inst_16968 = (state_16986[(7)]);
var state_16986__$1 = state_16986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16986__$1,(11),out,inst_16968);
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
});
return (function() {
var cljs$core$async$state_machine__15107__auto__ = null;
var cljs$core$async$state_machine__15107__auto____0 = (function (){
var statearr_17002 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17002[(0)] = cljs$core$async$state_machine__15107__auto__);

(statearr_17002[(1)] = (1));

return statearr_17002;
});
var cljs$core$async$state_machine__15107__auto____1 = (function (state_16986){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_16986);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e17003){var ex__15110__auto__ = e17003;
var statearr_17004_18106 = state_16986;
(statearr_17004_18106[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_16986[(4)]))){
var statearr_17005_18107 = state_16986;
(statearr_17005_18107[(1)] = cljs.core.first((state_16986[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18108 = state_16986;
state_16986 = G__18108;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$state_machine__15107__auto__ = function(state_16986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15107__auto____1.call(this,state_16986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15107__auto____0;
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15107__auto____1;
return cljs$core$async$state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_17006 = f__15336__auto__();
(statearr_17006[(6)] = c__15335__auto___18064);

return statearr_17006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17008 = (function (f,ch,meta17009){
this.f = f;
this.ch = ch;
this.meta17009 = meta17009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17010,meta17009__$1){
var self__ = this;
var _17010__$1 = this;
return (new cljs.core.async.t_cljs$core$async17008(self__.f,self__.ch,meta17009__$1));
}));

(cljs.core.async.t_cljs$core$async17008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17010){
var self__ = this;
var _17010__$1 = this;
return self__.meta17009;
}));

(cljs.core.async.t_cljs$core$async17008.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17008.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17008.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17008.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17008.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17011 = (function (f,ch,meta17009,_,fn1,meta17012){
this.f = f;
this.ch = ch;
this.meta17009 = meta17009;
this._ = _;
this.fn1 = fn1;
this.meta17012 = meta17012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17013,meta17012__$1){
var self__ = this;
var _17013__$1 = this;
return (new cljs.core.async.t_cljs$core$async17011(self__.f,self__.ch,self__.meta17009,self__._,self__.fn1,meta17012__$1));
}));

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17013){
var self__ = this;
var _17013__$1 = this;
return self__.meta17012;
}));

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17007_SHARP_){
var G__17014 = (((p1__17007_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17007_SHARP_) : self__.f.call(null,p1__17007_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17014) : f1.call(null,G__17014));
});
}));

(cljs.core.async.t_cljs$core$async17011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17009","meta17009",817888567,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17008","cljs.core.async/t_cljs$core$async17008",1396139904,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17012","meta17012",1594935113,null)], null);
}));

(cljs.core.async.t_cljs$core$async17011.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17011");

(cljs.core.async.t_cljs$core$async17011.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17011");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17011.
 */
cljs.core.async.__GT_t_cljs$core$async17011 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17011(f__$1,ch__$1,meta17009__$1,___$2,fn1__$1,meta17012){
return (new cljs.core.async.t_cljs$core$async17011(f__$1,ch__$1,meta17009__$1,___$2,fn1__$1,meta17012));
});

}

return (new cljs.core.async.t_cljs$core$async17011(self__.f,self__.ch,self__.meta17009,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17015 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17015) : self__.f.call(null,G__17015));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17008.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17008.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17009","meta17009",817888567,null)], null);
}));

(cljs.core.async.t_cljs$core$async17008.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17008");

(cljs.core.async.t_cljs$core$async17008.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17008");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17008.
 */
cljs.core.async.__GT_t_cljs$core$async17008 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17008(f__$1,ch__$1,meta17009){
return (new cljs.core.async.t_cljs$core$async17008(f__$1,ch__$1,meta17009));
});

}

return (new cljs.core.async.t_cljs$core$async17008(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17016 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17016 = (function (f,ch,meta17017){
this.f = f;
this.ch = ch;
this.meta17017 = meta17017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17018,meta17017__$1){
var self__ = this;
var _17018__$1 = this;
return (new cljs.core.async.t_cljs$core$async17016(self__.f,self__.ch,meta17017__$1));
}));

(cljs.core.async.t_cljs$core$async17016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17018){
var self__ = this;
var _17018__$1 = this;
return self__.meta17017;
}));

(cljs.core.async.t_cljs$core$async17016.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17016.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17016.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17016.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17016.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17016.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17017","meta17017",2089100602,null)], null);
}));

(cljs.core.async.t_cljs$core$async17016.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17016");

(cljs.core.async.t_cljs$core$async17016.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17016");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17016.
 */
cljs.core.async.__GT_t_cljs$core$async17016 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17016(f__$1,ch__$1,meta17017){
return (new cljs.core.async.t_cljs$core$async17016(f__$1,ch__$1,meta17017));
});

}

return (new cljs.core.async.t_cljs$core$async17016(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17019 = (function (p,ch,meta17020){
this.p = p;
this.ch = ch;
this.meta17020 = meta17020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17021,meta17020__$1){
var self__ = this;
var _17021__$1 = this;
return (new cljs.core.async.t_cljs$core$async17019(self__.p,self__.ch,meta17020__$1));
}));

(cljs.core.async.t_cljs$core$async17019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17021){
var self__ = this;
var _17021__$1 = this;
return self__.meta17020;
}));

(cljs.core.async.t_cljs$core$async17019.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17019.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17019.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17019.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17019.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17019.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17019.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17020","meta17020",1326758879,null)], null);
}));

(cljs.core.async.t_cljs$core$async17019.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17019");

(cljs.core.async.t_cljs$core$async17019.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17019");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17019.
 */
cljs.core.async.__GT_t_cljs$core$async17019 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17019(p__$1,ch__$1,meta17020){
return (new cljs.core.async.t_cljs$core$async17019(p__$1,ch__$1,meta17020));
});

}

return (new cljs.core.async.t_cljs$core$async17019(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17023 = arguments.length;
switch (G__17023) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15335__auto___18277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_17044){
var state_val_17045 = (state_17044[(1)]);
if((state_val_17045 === (7))){
var inst_17040 = (state_17044[(2)]);
var state_17044__$1 = state_17044;
var statearr_17046_18286 = state_17044__$1;
(statearr_17046_18286[(2)] = inst_17040);

(statearr_17046_18286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17045 === (1))){
var state_17044__$1 = state_17044;
var statearr_17047_18287 = state_17044__$1;
(statearr_17047_18287[(2)] = null);

(statearr_17047_18287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17045 === (4))){
var inst_17026 = (state_17044[(7)]);
var inst_17026__$1 = (state_17044[(2)]);
var inst_17027 = (inst_17026__$1 == null);
var state_17044__$1 = (function (){var statearr_17048 = state_17044;
(statearr_17048[(7)] = inst_17026__$1);

return statearr_17048;
})();
if(cljs.core.truth_(inst_17027)){
var statearr_17049_18289 = state_17044__$1;
(statearr_17049_18289[(1)] = (5));

} else {
var statearr_17050_18290 = state_17044__$1;
(statearr_17050_18290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17045 === (6))){
var inst_17026 = (state_17044[(7)]);
var inst_17031 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17026) : p.call(null,inst_17026));
var state_17044__$1 = state_17044;
if(cljs.core.truth_(inst_17031)){
var statearr_17051_18291 = state_17044__$1;
(statearr_17051_18291[(1)] = (8));

} else {
var statearr_17052_18292 = state_17044__$1;
(statearr_17052_18292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17045 === (3))){
var inst_17042 = (state_17044[(2)]);
var state_17044__$1 = state_17044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17044__$1,inst_17042);
} else {
if((state_val_17045 === (2))){
var state_17044__$1 = state_17044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17044__$1,(4),ch);
} else {
if((state_val_17045 === (11))){
var inst_17034 = (state_17044[(2)]);
var state_17044__$1 = state_17044;
var statearr_17053_18293 = state_17044__$1;
(statearr_17053_18293[(2)] = inst_17034);

(statearr_17053_18293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17045 === (9))){
var state_17044__$1 = state_17044;
var statearr_17054_18294 = state_17044__$1;
(statearr_17054_18294[(2)] = null);

(statearr_17054_18294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17045 === (5))){
var inst_17029 = cljs.core.async.close_BANG_(out);
var state_17044__$1 = state_17044;
var statearr_17055_18295 = state_17044__$1;
(statearr_17055_18295[(2)] = inst_17029);

(statearr_17055_18295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17045 === (10))){
var inst_17037 = (state_17044[(2)]);
var state_17044__$1 = (function (){var statearr_17056 = state_17044;
(statearr_17056[(8)] = inst_17037);

return statearr_17056;
})();
var statearr_17057_18296 = state_17044__$1;
(statearr_17057_18296[(2)] = null);

(statearr_17057_18296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17045 === (8))){
var inst_17026 = (state_17044[(7)]);
var state_17044__$1 = state_17044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17044__$1,(11),out,inst_17026);
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
});
return (function() {
var cljs$core$async$state_machine__15107__auto__ = null;
var cljs$core$async$state_machine__15107__auto____0 = (function (){
var statearr_17058 = [null,null,null,null,null,null,null,null,null];
(statearr_17058[(0)] = cljs$core$async$state_machine__15107__auto__);

(statearr_17058[(1)] = (1));

return statearr_17058;
});
var cljs$core$async$state_machine__15107__auto____1 = (function (state_17044){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_17044);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e17059){var ex__15110__auto__ = e17059;
var statearr_17060_18298 = state_17044;
(statearr_17060_18298[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_17044[(4)]))){
var statearr_17061_18299 = state_17044;
(statearr_17061_18299[(1)] = cljs.core.first((state_17044[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18300 = state_17044;
state_17044 = G__18300;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$state_machine__15107__auto__ = function(state_17044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15107__auto____1.call(this,state_17044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15107__auto____0;
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15107__auto____1;
return cljs$core$async$state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_17062 = f__15336__auto__();
(statearr_17062[(6)] = c__15335__auto___18277);

return statearr_17062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17064 = arguments.length;
switch (G__17064) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15335__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_17126){
var state_val_17127 = (state_17126[(1)]);
if((state_val_17127 === (7))){
var inst_17122 = (state_17126[(2)]);
var state_17126__$1 = state_17126;
var statearr_17132_18302 = state_17126__$1;
(statearr_17132_18302[(2)] = inst_17122);

(statearr_17132_18302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (20))){
var inst_17092 = (state_17126[(7)]);
var inst_17103 = (state_17126[(2)]);
var inst_17104 = cljs.core.next(inst_17092);
var inst_17078 = inst_17104;
var inst_17079 = null;
var inst_17080 = (0);
var inst_17081 = (0);
var state_17126__$1 = (function (){var statearr_17136 = state_17126;
(statearr_17136[(8)] = inst_17080);

(statearr_17136[(9)] = inst_17078);

(statearr_17136[(10)] = inst_17081);

(statearr_17136[(11)] = inst_17079);

(statearr_17136[(12)] = inst_17103);

return statearr_17136;
})();
var statearr_17137_18304 = state_17126__$1;
(statearr_17137_18304[(2)] = null);

(statearr_17137_18304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (1))){
var state_17126__$1 = state_17126;
var statearr_17138_18305 = state_17126__$1;
(statearr_17138_18305[(2)] = null);

(statearr_17138_18305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (4))){
var inst_17067 = (state_17126[(13)]);
var inst_17067__$1 = (state_17126[(2)]);
var inst_17068 = (inst_17067__$1 == null);
var state_17126__$1 = (function (){var statearr_17139 = state_17126;
(statearr_17139[(13)] = inst_17067__$1);

return statearr_17139;
})();
if(cljs.core.truth_(inst_17068)){
var statearr_17140_18306 = state_17126__$1;
(statearr_17140_18306[(1)] = (5));

} else {
var statearr_17141_18307 = state_17126__$1;
(statearr_17141_18307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (15))){
var state_17126__$1 = state_17126;
var statearr_17145_18308 = state_17126__$1;
(statearr_17145_18308[(2)] = null);

(statearr_17145_18308[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (21))){
var state_17126__$1 = state_17126;
var statearr_17146_18309 = state_17126__$1;
(statearr_17146_18309[(2)] = null);

(statearr_17146_18309[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (13))){
var inst_17080 = (state_17126[(8)]);
var inst_17078 = (state_17126[(9)]);
var inst_17081 = (state_17126[(10)]);
var inst_17079 = (state_17126[(11)]);
var inst_17088 = (state_17126[(2)]);
var inst_17089 = (inst_17081 + (1));
var tmp17142 = inst_17080;
var tmp17143 = inst_17078;
var tmp17144 = inst_17079;
var inst_17078__$1 = tmp17143;
var inst_17079__$1 = tmp17144;
var inst_17080__$1 = tmp17142;
var inst_17081__$1 = inst_17089;
var state_17126__$1 = (function (){var statearr_17147 = state_17126;
(statearr_17147[(8)] = inst_17080__$1);

(statearr_17147[(14)] = inst_17088);

(statearr_17147[(9)] = inst_17078__$1);

(statearr_17147[(10)] = inst_17081__$1);

(statearr_17147[(11)] = inst_17079__$1);

return statearr_17147;
})();
var statearr_17149_18310 = state_17126__$1;
(statearr_17149_18310[(2)] = null);

(statearr_17149_18310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (22))){
var state_17126__$1 = state_17126;
var statearr_17150_18311 = state_17126__$1;
(statearr_17150_18311[(2)] = null);

(statearr_17150_18311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (6))){
var inst_17067 = (state_17126[(13)]);
var inst_17076 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17067) : f.call(null,inst_17067));
var inst_17077 = cljs.core.seq(inst_17076);
var inst_17078 = inst_17077;
var inst_17079 = null;
var inst_17080 = (0);
var inst_17081 = (0);
var state_17126__$1 = (function (){var statearr_17151 = state_17126;
(statearr_17151[(8)] = inst_17080);

(statearr_17151[(9)] = inst_17078);

(statearr_17151[(10)] = inst_17081);

(statearr_17151[(11)] = inst_17079);

return statearr_17151;
})();
var statearr_17152_18313 = state_17126__$1;
(statearr_17152_18313[(2)] = null);

(statearr_17152_18313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (17))){
var inst_17092 = (state_17126[(7)]);
var inst_17096 = cljs.core.chunk_first(inst_17092);
var inst_17097 = cljs.core.chunk_rest(inst_17092);
var inst_17098 = cljs.core.count(inst_17096);
var inst_17078 = inst_17097;
var inst_17079 = inst_17096;
var inst_17080 = inst_17098;
var inst_17081 = (0);
var state_17126__$1 = (function (){var statearr_17153 = state_17126;
(statearr_17153[(8)] = inst_17080);

(statearr_17153[(9)] = inst_17078);

(statearr_17153[(10)] = inst_17081);

(statearr_17153[(11)] = inst_17079);

return statearr_17153;
})();
var statearr_17155_18314 = state_17126__$1;
(statearr_17155_18314[(2)] = null);

(statearr_17155_18314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (3))){
var inst_17124 = (state_17126[(2)]);
var state_17126__$1 = state_17126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17126__$1,inst_17124);
} else {
if((state_val_17127 === (12))){
var inst_17112 = (state_17126[(2)]);
var state_17126__$1 = state_17126;
var statearr_17156_18315 = state_17126__$1;
(statearr_17156_18315[(2)] = inst_17112);

(statearr_17156_18315[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (2))){
var state_17126__$1 = state_17126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17126__$1,(4),in$);
} else {
if((state_val_17127 === (23))){
var inst_17120 = (state_17126[(2)]);
var state_17126__$1 = state_17126;
var statearr_17157_18321 = state_17126__$1;
(statearr_17157_18321[(2)] = inst_17120);

(statearr_17157_18321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (19))){
var inst_17107 = (state_17126[(2)]);
var state_17126__$1 = state_17126;
var statearr_17158_18322 = state_17126__$1;
(statearr_17158_18322[(2)] = inst_17107);

(statearr_17158_18322[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (11))){
var inst_17078 = (state_17126[(9)]);
var inst_17092 = (state_17126[(7)]);
var inst_17092__$1 = cljs.core.seq(inst_17078);
var state_17126__$1 = (function (){var statearr_17159 = state_17126;
(statearr_17159[(7)] = inst_17092__$1);

return statearr_17159;
})();
if(inst_17092__$1){
var statearr_17160_18323 = state_17126__$1;
(statearr_17160_18323[(1)] = (14));

} else {
var statearr_17161_18324 = state_17126__$1;
(statearr_17161_18324[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (9))){
var inst_17114 = (state_17126[(2)]);
var inst_17115 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17126__$1 = (function (){var statearr_17162 = state_17126;
(statearr_17162[(15)] = inst_17114);

return statearr_17162;
})();
if(cljs.core.truth_(inst_17115)){
var statearr_17163_18350 = state_17126__$1;
(statearr_17163_18350[(1)] = (21));

} else {
var statearr_17164_18351 = state_17126__$1;
(statearr_17164_18351[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (5))){
var inst_17070 = cljs.core.async.close_BANG_(out);
var state_17126__$1 = state_17126;
var statearr_17165_18352 = state_17126__$1;
(statearr_17165_18352[(2)] = inst_17070);

(statearr_17165_18352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (14))){
var inst_17092 = (state_17126[(7)]);
var inst_17094 = cljs.core.chunked_seq_QMARK_(inst_17092);
var state_17126__$1 = state_17126;
if(inst_17094){
var statearr_17166_18357 = state_17126__$1;
(statearr_17166_18357[(1)] = (17));

} else {
var statearr_17167_18359 = state_17126__$1;
(statearr_17167_18359[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (16))){
var inst_17110 = (state_17126[(2)]);
var state_17126__$1 = state_17126;
var statearr_17168_18361 = state_17126__$1;
(statearr_17168_18361[(2)] = inst_17110);

(statearr_17168_18361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17127 === (10))){
var inst_17081 = (state_17126[(10)]);
var inst_17079 = (state_17126[(11)]);
var inst_17086 = cljs.core._nth(inst_17079,inst_17081);
var state_17126__$1 = state_17126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17126__$1,(13),out,inst_17086);
} else {
if((state_val_17127 === (18))){
var inst_17092 = (state_17126[(7)]);
var inst_17101 = cljs.core.first(inst_17092);
var state_17126__$1 = state_17126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17126__$1,(20),out,inst_17101);
} else {
if((state_val_17127 === (8))){
var inst_17080 = (state_17126[(8)]);
var inst_17081 = (state_17126[(10)]);
var inst_17083 = (inst_17081 < inst_17080);
var inst_17084 = inst_17083;
var state_17126__$1 = state_17126;
if(cljs.core.truth_(inst_17084)){
var statearr_17169_18409 = state_17126__$1;
(statearr_17169_18409[(1)] = (10));

} else {
var statearr_17170_18420 = state_17126__$1;
(statearr_17170_18420[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15107__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15107__auto____0 = (function (){
var statearr_17171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17171[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15107__auto__);

(statearr_17171[(1)] = (1));

return statearr_17171;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15107__auto____1 = (function (state_17126){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_17126);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e17172){var ex__15110__auto__ = e17172;
var statearr_17173_18437 = state_17126;
(statearr_17173_18437[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_17126[(4)]))){
var statearr_17174_18442 = state_17126;
(statearr_17174_18442[(1)] = cljs.core.first((state_17126[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18451 = state_17126;
state_17126 = G__18451;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15107__auto__ = function(state_17126){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15107__auto____1.call(this,state_17126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15107__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15107__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_17175 = f__15336__auto__();
(statearr_17175[(6)] = c__15335__auto__);

return statearr_17175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));

return c__15335__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17177 = arguments.length;
switch (G__17177) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17179 = arguments.length;
switch (G__17179) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17181 = arguments.length;
switch (G__17181) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15335__auto___18463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_17205){
var state_val_17206 = (state_17205[(1)]);
if((state_val_17206 === (7))){
var inst_17200 = (state_17205[(2)]);
var state_17205__$1 = state_17205;
var statearr_17207_18464 = state_17205__$1;
(statearr_17207_18464[(2)] = inst_17200);

(statearr_17207_18464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17206 === (1))){
var inst_17182 = null;
var state_17205__$1 = (function (){var statearr_17208 = state_17205;
(statearr_17208[(7)] = inst_17182);

return statearr_17208;
})();
var statearr_17209_18465 = state_17205__$1;
(statearr_17209_18465[(2)] = null);

(statearr_17209_18465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17206 === (4))){
var inst_17185 = (state_17205[(8)]);
var inst_17185__$1 = (state_17205[(2)]);
var inst_17186 = (inst_17185__$1 == null);
var inst_17187 = cljs.core.not(inst_17186);
var state_17205__$1 = (function (){var statearr_17210 = state_17205;
(statearr_17210[(8)] = inst_17185__$1);

return statearr_17210;
})();
if(inst_17187){
var statearr_17211_18466 = state_17205__$1;
(statearr_17211_18466[(1)] = (5));

} else {
var statearr_17212_18467 = state_17205__$1;
(statearr_17212_18467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17206 === (6))){
var state_17205__$1 = state_17205;
var statearr_17213_18468 = state_17205__$1;
(statearr_17213_18468[(2)] = null);

(statearr_17213_18468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17206 === (3))){
var inst_17202 = (state_17205[(2)]);
var inst_17203 = cljs.core.async.close_BANG_(out);
var state_17205__$1 = (function (){var statearr_17215 = state_17205;
(statearr_17215[(9)] = inst_17202);

return statearr_17215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17205__$1,inst_17203);
} else {
if((state_val_17206 === (2))){
var state_17205__$1 = state_17205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17205__$1,(4),ch);
} else {
if((state_val_17206 === (11))){
var inst_17185 = (state_17205[(8)]);
var inst_17194 = (state_17205[(2)]);
var inst_17182 = inst_17185;
var state_17205__$1 = (function (){var statearr_17217 = state_17205;
(statearr_17217[(10)] = inst_17194);

(statearr_17217[(7)] = inst_17182);

return statearr_17217;
})();
var statearr_17218_18469 = state_17205__$1;
(statearr_17218_18469[(2)] = null);

(statearr_17218_18469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17206 === (9))){
var inst_17185 = (state_17205[(8)]);
var state_17205__$1 = state_17205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17205__$1,(11),out,inst_17185);
} else {
if((state_val_17206 === (5))){
var inst_17185 = (state_17205[(8)]);
var inst_17182 = (state_17205[(7)]);
var inst_17189 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17185,inst_17182);
var state_17205__$1 = state_17205;
if(inst_17189){
var statearr_17221_18470 = state_17205__$1;
(statearr_17221_18470[(1)] = (8));

} else {
var statearr_17222_18471 = state_17205__$1;
(statearr_17222_18471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17206 === (10))){
var inst_17197 = (state_17205[(2)]);
var state_17205__$1 = state_17205;
var statearr_17223_18472 = state_17205__$1;
(statearr_17223_18472[(2)] = inst_17197);

(statearr_17223_18472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17206 === (8))){
var inst_17182 = (state_17205[(7)]);
var tmp17220 = inst_17182;
var inst_17182__$1 = tmp17220;
var state_17205__$1 = (function (){var statearr_17224 = state_17205;
(statearr_17224[(7)] = inst_17182__$1);

return statearr_17224;
})();
var statearr_17225_18473 = state_17205__$1;
(statearr_17225_18473[(2)] = null);

(statearr_17225_18473[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__15107__auto__ = null;
var cljs$core$async$state_machine__15107__auto____0 = (function (){
var statearr_17226 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17226[(0)] = cljs$core$async$state_machine__15107__auto__);

(statearr_17226[(1)] = (1));

return statearr_17226;
});
var cljs$core$async$state_machine__15107__auto____1 = (function (state_17205){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_17205);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e17227){var ex__15110__auto__ = e17227;
var statearr_17228_18474 = state_17205;
(statearr_17228_18474[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_17205[(4)]))){
var statearr_17229_18475 = state_17205;
(statearr_17229_18475[(1)] = cljs.core.first((state_17205[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18476 = state_17205;
state_17205 = G__18476;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$state_machine__15107__auto__ = function(state_17205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15107__auto____1.call(this,state_17205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15107__auto____0;
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15107__auto____1;
return cljs$core$async$state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_17230 = f__15336__auto__();
(statearr_17230[(6)] = c__15335__auto___18463);

return statearr_17230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17232 = arguments.length;
switch (G__17232) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15335__auto___18478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_17270){
var state_val_17271 = (state_17270[(1)]);
if((state_val_17271 === (7))){
var inst_17266 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
var statearr_17272_18479 = state_17270__$1;
(statearr_17272_18479[(2)] = inst_17266);

(statearr_17272_18479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (1))){
var inst_17233 = (new Array(n));
var inst_17234 = inst_17233;
var inst_17235 = (0);
var state_17270__$1 = (function (){var statearr_17274 = state_17270;
(statearr_17274[(7)] = inst_17235);

(statearr_17274[(8)] = inst_17234);

return statearr_17274;
})();
var statearr_17275_18480 = state_17270__$1;
(statearr_17275_18480[(2)] = null);

(statearr_17275_18480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (4))){
var inst_17238 = (state_17270[(9)]);
var inst_17238__$1 = (state_17270[(2)]);
var inst_17239 = (inst_17238__$1 == null);
var inst_17240 = cljs.core.not(inst_17239);
var state_17270__$1 = (function (){var statearr_17278 = state_17270;
(statearr_17278[(9)] = inst_17238__$1);

return statearr_17278;
})();
if(inst_17240){
var statearr_17279_18481 = state_17270__$1;
(statearr_17279_18481[(1)] = (5));

} else {
var statearr_17280_18482 = state_17270__$1;
(statearr_17280_18482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (15))){
var inst_17260 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
var statearr_17281_18483 = state_17270__$1;
(statearr_17281_18483[(2)] = inst_17260);

(statearr_17281_18483[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (13))){
var state_17270__$1 = state_17270;
var statearr_17282_18484 = state_17270__$1;
(statearr_17282_18484[(2)] = null);

(statearr_17282_18484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (6))){
var inst_17235 = (state_17270[(7)]);
var inst_17256 = (inst_17235 > (0));
var state_17270__$1 = state_17270;
if(cljs.core.truth_(inst_17256)){
var statearr_17283_18485 = state_17270__$1;
(statearr_17283_18485[(1)] = (12));

} else {
var statearr_17284_18486 = state_17270__$1;
(statearr_17284_18486[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (3))){
var inst_17268 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17270__$1,inst_17268);
} else {
if((state_val_17271 === (12))){
var inst_17234 = (state_17270[(8)]);
var inst_17258 = cljs.core.vec(inst_17234);
var state_17270__$1 = state_17270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17270__$1,(15),out,inst_17258);
} else {
if((state_val_17271 === (2))){
var state_17270__$1 = state_17270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17270__$1,(4),ch);
} else {
if((state_val_17271 === (11))){
var inst_17250 = (state_17270[(2)]);
var inst_17251 = (new Array(n));
var inst_17234 = inst_17251;
var inst_17235 = (0);
var state_17270__$1 = (function (){var statearr_17285 = state_17270;
(statearr_17285[(7)] = inst_17235);

(statearr_17285[(10)] = inst_17250);

(statearr_17285[(8)] = inst_17234);

return statearr_17285;
})();
var statearr_17286_18487 = state_17270__$1;
(statearr_17286_18487[(2)] = null);

(statearr_17286_18487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (9))){
var inst_17234 = (state_17270[(8)]);
var inst_17248 = cljs.core.vec(inst_17234);
var state_17270__$1 = state_17270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17270__$1,(11),out,inst_17248);
} else {
if((state_val_17271 === (5))){
var inst_17235 = (state_17270[(7)]);
var inst_17243 = (state_17270[(11)]);
var inst_17238 = (state_17270[(9)]);
var inst_17234 = (state_17270[(8)]);
var inst_17242 = (inst_17234[inst_17235] = inst_17238);
var inst_17243__$1 = (inst_17235 + (1));
var inst_17244 = (inst_17243__$1 < n);
var state_17270__$1 = (function (){var statearr_17287 = state_17270;
(statearr_17287[(11)] = inst_17243__$1);

(statearr_17287[(12)] = inst_17242);

return statearr_17287;
})();
if(cljs.core.truth_(inst_17244)){
var statearr_17288_18488 = state_17270__$1;
(statearr_17288_18488[(1)] = (8));

} else {
var statearr_17289_18489 = state_17270__$1;
(statearr_17289_18489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (14))){
var inst_17263 = (state_17270[(2)]);
var inst_17264 = cljs.core.async.close_BANG_(out);
var state_17270__$1 = (function (){var statearr_17291 = state_17270;
(statearr_17291[(13)] = inst_17263);

return statearr_17291;
})();
var statearr_17292_18492 = state_17270__$1;
(statearr_17292_18492[(2)] = inst_17264);

(statearr_17292_18492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (10))){
var inst_17254 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
var statearr_17293_18493 = state_17270__$1;
(statearr_17293_18493[(2)] = inst_17254);

(statearr_17293_18493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (8))){
var inst_17243 = (state_17270[(11)]);
var inst_17234 = (state_17270[(8)]);
var tmp17290 = inst_17234;
var inst_17234__$1 = tmp17290;
var inst_17235 = inst_17243;
var state_17270__$1 = (function (){var statearr_17294 = state_17270;
(statearr_17294[(7)] = inst_17235);

(statearr_17294[(8)] = inst_17234__$1);

return statearr_17294;
})();
var statearr_17296_18494 = state_17270__$1;
(statearr_17296_18494[(2)] = null);

(statearr_17296_18494[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__15107__auto__ = null;
var cljs$core$async$state_machine__15107__auto____0 = (function (){
var statearr_17297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17297[(0)] = cljs$core$async$state_machine__15107__auto__);

(statearr_17297[(1)] = (1));

return statearr_17297;
});
var cljs$core$async$state_machine__15107__auto____1 = (function (state_17270){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_17270);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e17298){var ex__15110__auto__ = e17298;
var statearr_17299_18495 = state_17270;
(statearr_17299_18495[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_17270[(4)]))){
var statearr_17301_18496 = state_17270;
(statearr_17301_18496[(1)] = cljs.core.first((state_17270[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18497 = state_17270;
state_17270 = G__18497;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$state_machine__15107__auto__ = function(state_17270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15107__auto____1.call(this,state_17270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15107__auto____0;
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15107__auto____1;
return cljs$core$async$state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_17303 = f__15336__auto__();
(statearr_17303[(6)] = c__15335__auto___18478);

return statearr_17303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17305 = arguments.length;
switch (G__17305) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15335__auto___18499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_17351){
var state_val_17352 = (state_17351[(1)]);
if((state_val_17352 === (7))){
var inst_17347 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17353_18500 = state_17351__$1;
(statearr_17353_18500[(2)] = inst_17347);

(statearr_17353_18500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (1))){
var inst_17307 = [];
var inst_17308 = inst_17307;
var inst_17309 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17351__$1 = (function (){var statearr_17354 = state_17351;
(statearr_17354[(7)] = inst_17308);

(statearr_17354[(8)] = inst_17309);

return statearr_17354;
})();
var statearr_17355_18501 = state_17351__$1;
(statearr_17355_18501[(2)] = null);

(statearr_17355_18501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (4))){
var inst_17312 = (state_17351[(9)]);
var inst_17312__$1 = (state_17351[(2)]);
var inst_17313 = (inst_17312__$1 == null);
var inst_17314 = cljs.core.not(inst_17313);
var state_17351__$1 = (function (){var statearr_17356 = state_17351;
(statearr_17356[(9)] = inst_17312__$1);

return statearr_17356;
})();
if(inst_17314){
var statearr_17357_18502 = state_17351__$1;
(statearr_17357_18502[(1)] = (5));

} else {
var statearr_17358_18503 = state_17351__$1;
(statearr_17358_18503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (15))){
var inst_17308 = (state_17351[(7)]);
var inst_17339 = cljs.core.vec(inst_17308);
var state_17351__$1 = state_17351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17351__$1,(18),out,inst_17339);
} else {
if((state_val_17352 === (13))){
var inst_17334 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17359_18504 = state_17351__$1;
(statearr_17359_18504[(2)] = inst_17334);

(statearr_17359_18504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (6))){
var inst_17308 = (state_17351[(7)]);
var inst_17336 = inst_17308.length;
var inst_17337 = (inst_17336 > (0));
var state_17351__$1 = state_17351;
if(cljs.core.truth_(inst_17337)){
var statearr_17360_18505 = state_17351__$1;
(statearr_17360_18505[(1)] = (15));

} else {
var statearr_17361_18507 = state_17351__$1;
(statearr_17361_18507[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (17))){
var inst_17344 = (state_17351[(2)]);
var inst_17345 = cljs.core.async.close_BANG_(out);
var state_17351__$1 = (function (){var statearr_17362 = state_17351;
(statearr_17362[(10)] = inst_17344);

return statearr_17362;
})();
var statearr_17363_18508 = state_17351__$1;
(statearr_17363_18508[(2)] = inst_17345);

(statearr_17363_18508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (3))){
var inst_17349 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17351__$1,inst_17349);
} else {
if((state_val_17352 === (12))){
var inst_17308 = (state_17351[(7)]);
var inst_17327 = cljs.core.vec(inst_17308);
var state_17351__$1 = state_17351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17351__$1,(14),out,inst_17327);
} else {
if((state_val_17352 === (2))){
var state_17351__$1 = state_17351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17351__$1,(4),ch);
} else {
if((state_val_17352 === (11))){
var inst_17312 = (state_17351[(9)]);
var inst_17308 = (state_17351[(7)]);
var inst_17316 = (state_17351[(11)]);
var inst_17324 = inst_17308.push(inst_17312);
var tmp17364 = inst_17308;
var inst_17308__$1 = tmp17364;
var inst_17309 = inst_17316;
var state_17351__$1 = (function (){var statearr_17365 = state_17351;
(statearr_17365[(7)] = inst_17308__$1);

(statearr_17365[(8)] = inst_17309);

(statearr_17365[(12)] = inst_17324);

return statearr_17365;
})();
var statearr_17366_18509 = state_17351__$1;
(statearr_17366_18509[(2)] = null);

(statearr_17366_18509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (9))){
var inst_17309 = (state_17351[(8)]);
var inst_17320 = cljs.core.keyword_identical_QMARK_(inst_17309,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17351__$1 = state_17351;
var statearr_17367_18510 = state_17351__$1;
(statearr_17367_18510[(2)] = inst_17320);

(statearr_17367_18510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (5))){
var inst_17312 = (state_17351[(9)]);
var inst_17309 = (state_17351[(8)]);
var inst_17317 = (state_17351[(13)]);
var inst_17316 = (state_17351[(11)]);
var inst_17316__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17312) : f.call(null,inst_17312));
var inst_17317__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17316__$1,inst_17309);
var state_17351__$1 = (function (){var statearr_17368 = state_17351;
(statearr_17368[(13)] = inst_17317__$1);

(statearr_17368[(11)] = inst_17316__$1);

return statearr_17368;
})();
if(inst_17317__$1){
var statearr_17369_18512 = state_17351__$1;
(statearr_17369_18512[(1)] = (8));

} else {
var statearr_17370_18514 = state_17351__$1;
(statearr_17370_18514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (14))){
var inst_17312 = (state_17351[(9)]);
var inst_17316 = (state_17351[(11)]);
var inst_17329 = (state_17351[(2)]);
var inst_17330 = [];
var inst_17331 = inst_17330.push(inst_17312);
var inst_17308 = inst_17330;
var inst_17309 = inst_17316;
var state_17351__$1 = (function (){var statearr_17371 = state_17351;
(statearr_17371[(14)] = inst_17329);

(statearr_17371[(7)] = inst_17308);

(statearr_17371[(15)] = inst_17331);

(statearr_17371[(8)] = inst_17309);

return statearr_17371;
})();
var statearr_17372_18515 = state_17351__$1;
(statearr_17372_18515[(2)] = null);

(statearr_17372_18515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (16))){
var state_17351__$1 = state_17351;
var statearr_17373_18516 = state_17351__$1;
(statearr_17373_18516[(2)] = null);

(statearr_17373_18516[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (10))){
var inst_17322 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
if(cljs.core.truth_(inst_17322)){
var statearr_17374_18517 = state_17351__$1;
(statearr_17374_18517[(1)] = (11));

} else {
var statearr_17375_18518 = state_17351__$1;
(statearr_17375_18518[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (18))){
var inst_17341 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17376_18519 = state_17351__$1;
(statearr_17376_18519[(2)] = inst_17341);

(statearr_17376_18519[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (8))){
var inst_17317 = (state_17351[(13)]);
var state_17351__$1 = state_17351;
var statearr_17377_18520 = state_17351__$1;
(statearr_17377_18520[(2)] = inst_17317);

(statearr_17377_18520[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__15107__auto__ = null;
var cljs$core$async$state_machine__15107__auto____0 = (function (){
var statearr_17378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17378[(0)] = cljs$core$async$state_machine__15107__auto__);

(statearr_17378[(1)] = (1));

return statearr_17378;
});
var cljs$core$async$state_machine__15107__auto____1 = (function (state_17351){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_17351);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e17379){var ex__15110__auto__ = e17379;
var statearr_17380_18521 = state_17351;
(statearr_17380_18521[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_17351[(4)]))){
var statearr_17381_18522 = state_17351;
(statearr_17381_18522[(1)] = cljs.core.first((state_17351[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18523 = state_17351;
state_17351 = G__18523;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
cljs$core$async$state_machine__15107__auto__ = function(state_17351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15107__auto____1.call(this,state_17351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15107__auto____0;
cljs$core$async$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15107__auto____1;
return cljs$core$async$state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_17382 = f__15336__auto__();
(statearr_17382[(6)] = c__15335__auto___18499);

return statearr_17382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
