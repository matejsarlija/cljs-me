goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__19154,res){
var map__19155 = p__19154;
var map__19155__$1 = cljs.core.__destructure_map(map__19155);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19155__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19155__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__19156 = res;
var G__19156__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19156,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__19156);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19156__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__19156__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__19183 = arguments.length;
switch (G__19183) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__19195,msg,handlers,timeout_after_ms){
var map__19196 = p__19195;
var map__19196__$1 = cljs.core.__destructure_map(map__19196);
var runtime = map__19196__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19196__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19325 = arguments.length;
var i__5770__auto___19326 = (0);
while(true){
if((i__5770__auto___19326 < len__5769__auto___19325)){
args__5775__auto__.push((arguments[i__5770__auto___19326]));

var G__19327 = (i__5770__auto___19326 + (1));
i__5770__auto___19326 = G__19327;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19204,ev,args){
var map__19205 = p__19204;
var map__19205__$1 = cljs.core.__destructure_map(map__19205);
var runtime = map__19205__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19205__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__19206 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19209 = null;
var count__19210 = (0);
var i__19211 = (0);
while(true){
if((i__19211 < count__19210)){
var ext = chunk__19209.cljs$core$IIndexed$_nth$arity$2(null,i__19211);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19329 = seq__19206;
var G__19330 = chunk__19209;
var G__19331 = count__19210;
var G__19332 = (i__19211 + (1));
seq__19206 = G__19329;
chunk__19209 = G__19330;
count__19210 = G__19331;
i__19211 = G__19332;
continue;
} else {
var G__19333 = seq__19206;
var G__19334 = chunk__19209;
var G__19335 = count__19210;
var G__19336 = (i__19211 + (1));
seq__19206 = G__19333;
chunk__19209 = G__19334;
count__19210 = G__19335;
i__19211 = G__19336;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19206);
if(temp__5804__auto__){
var seq__19206__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19206__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19206__$1);
var G__19337 = cljs.core.chunk_rest(seq__19206__$1);
var G__19338 = c__5568__auto__;
var G__19339 = cljs.core.count(c__5568__auto__);
var G__19340 = (0);
seq__19206 = G__19337;
chunk__19209 = G__19338;
count__19210 = G__19339;
i__19211 = G__19340;
continue;
} else {
var ext = cljs.core.first(seq__19206__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19341 = cljs.core.next(seq__19206__$1);
var G__19342 = null;
var G__19343 = (0);
var G__19344 = (0);
seq__19206 = G__19341;
chunk__19209 = G__19342;
count__19210 = G__19343;
i__19211 = G__19344;
continue;
} else {
var G__19345 = cljs.core.next(seq__19206__$1);
var G__19346 = null;
var G__19347 = (0);
var G__19348 = (0);
seq__19206 = G__19345;
chunk__19209 = G__19346;
count__19210 = G__19347;
i__19211 = G__19348;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq19198){
var G__19199 = cljs.core.first(seq19198);
var seq19198__$1 = cljs.core.next(seq19198);
var G__19200 = cljs.core.first(seq19198__$1);
var seq19198__$2 = cljs.core.next(seq19198__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19199,G__19200,seq19198__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__19250,p__19251){
var map__19252 = p__19250;
var map__19252__$1 = cljs.core.__destructure_map(map__19252);
var runtime = map__19252__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19252__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19253 = p__19251;
var map__19253__$1 = cljs.core.__destructure_map(map__19253);
var msg = map__19253__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__19256 = cljs.core.deref(state_ref);
var map__19256__$1 = cljs.core.__destructure_map(map__19256);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19256__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19256__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__19262){
var map__19263 = p__19262;
var map__19263__$1 = cljs.core.__destructure_map(map__19263);
var runtime = map__19263__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19263__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__19264,msg){
var map__19265 = p__19264;
var map__19265__$1 = cljs.core.__destructure_map(map__19265);
var runtime = map__19265__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19265__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__19267,key,p__19268){
var map__19269 = p__19267;
var map__19269__$1 = cljs.core.__destructure_map(map__19269);
var state = map__19269__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19269__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__19270 = p__19268;
var map__19270__$1 = cljs.core.__destructure_map(map__19270);
var spec = map__19270__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19270__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__19280,key,spec){
var map__19281 = p__19280;
var map__19281__$1 = cljs.core.__destructure_map(map__19281);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19281__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__19282_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__19282_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__19283_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__19283_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__19284_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__19284_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__19285_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__19285_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__19286_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__19286_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__19287,key){
var map__19288 = p__19287;
var map__19288__$1 = cljs.core.__destructure_map(map__19288);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19288__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__19289,msg){
var map__19290 = p__19289;
var map__19290__$1 = cljs.core.__destructure_map(map__19290);
var runtime = map__19290__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19290__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__19294,p__19295){
var map__19296 = p__19294;
var map__19296__$1 = cljs.core.__destructure_map(map__19296);
var runtime = map__19296__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19296__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19297 = p__19295;
var map__19297__$1 = cljs.core.__destructure_map(map__19297);
var msg = map__19297__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19297__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19297__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__19300 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19302 = null;
var count__19303 = (0);
var i__19304 = (0);
while(true){
if((i__19304 < count__19303)){
var map__19314 = chunk__19302.cljs$core$IIndexed$_nth$arity$2(null,i__19304);
var map__19314__$1 = cljs.core.__destructure_map(map__19314);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19314__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19354 = seq__19300;
var G__19355 = chunk__19302;
var G__19356 = count__19303;
var G__19357 = (i__19304 + (1));
seq__19300 = G__19354;
chunk__19302 = G__19355;
count__19303 = G__19356;
i__19304 = G__19357;
continue;
} else {
var G__19358 = seq__19300;
var G__19359 = chunk__19302;
var G__19360 = count__19303;
var G__19361 = (i__19304 + (1));
seq__19300 = G__19358;
chunk__19302 = G__19359;
count__19303 = G__19360;
i__19304 = G__19361;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19300);
if(temp__5804__auto__){
var seq__19300__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19300__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19300__$1);
var G__19362 = cljs.core.chunk_rest(seq__19300__$1);
var G__19363 = c__5568__auto__;
var G__19364 = cljs.core.count(c__5568__auto__);
var G__19365 = (0);
seq__19300 = G__19362;
chunk__19302 = G__19363;
count__19303 = G__19364;
i__19304 = G__19365;
continue;
} else {
var map__19315 = cljs.core.first(seq__19300__$1);
var map__19315__$1 = cljs.core.__destructure_map(map__19315);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19315__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19366 = cljs.core.next(seq__19300__$1);
var G__19367 = null;
var G__19368 = (0);
var G__19369 = (0);
seq__19300 = G__19366;
chunk__19302 = G__19367;
count__19303 = G__19368;
i__19304 = G__19369;
continue;
} else {
var G__19370 = cljs.core.next(seq__19300__$1);
var G__19371 = null;
var G__19372 = (0);
var G__19373 = (0);
seq__19300 = G__19370;
chunk__19302 = G__19371;
count__19303 = G__19372;
i__19304 = G__19373;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
