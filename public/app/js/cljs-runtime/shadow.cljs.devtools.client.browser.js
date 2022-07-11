goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21081 = arguments.length;
var i__5770__auto___21082 = (0);
while(true){
if((i__5770__auto___21082 < len__5769__auto___21081)){
args__5775__auto__.push((arguments[i__5770__auto___21082]));

var G__21083 = (i__5770__auto___21082 + (1));
i__5770__auto___21082 = G__21083;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20794){
var G__20795 = cljs.core.first(seq20794);
var seq20794__$1 = cljs.core.next(seq20794);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20795,seq20794__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20801 = cljs.core.seq(sources);
var chunk__20802 = null;
var count__20803 = (0);
var i__20804 = (0);
while(true){
if((i__20804 < count__20803)){
var map__20811 = chunk__20802.cljs$core$IIndexed$_nth$arity$2(null,i__20804);
var map__20811__$1 = cljs.core.__destructure_map(map__20811);
var src = map__20811__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20811__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20811__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20811__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20811__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20812){var e_21084 = e20812;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21084);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21084.message)].join('')));
}

var G__21085 = seq__20801;
var G__21086 = chunk__20802;
var G__21087 = count__20803;
var G__21088 = (i__20804 + (1));
seq__20801 = G__21085;
chunk__20802 = G__21086;
count__20803 = G__21087;
i__20804 = G__21088;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20801);
if(temp__5804__auto__){
var seq__20801__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20801__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20801__$1);
var G__21089 = cljs.core.chunk_rest(seq__20801__$1);
var G__21090 = c__5568__auto__;
var G__21091 = cljs.core.count(c__5568__auto__);
var G__21092 = (0);
seq__20801 = G__21089;
chunk__20802 = G__21090;
count__20803 = G__21091;
i__20804 = G__21092;
continue;
} else {
var map__20813 = cljs.core.first(seq__20801__$1);
var map__20813__$1 = cljs.core.__destructure_map(map__20813);
var src = map__20813__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20813__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20813__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20813__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20813__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20814){var e_21093 = e20814;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21093);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21093.message)].join('')));
}

var G__21094 = cljs.core.next(seq__20801__$1);
var G__21095 = null;
var G__21096 = (0);
var G__21097 = (0);
seq__20801 = G__21094;
chunk__20802 = G__21095;
count__20803 = G__21096;
i__20804 = G__21097;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20815 = cljs.core.seq(js_requires);
var chunk__20816 = null;
var count__20817 = (0);
var i__20818 = (0);
while(true){
if((i__20818 < count__20817)){
var js_ns = chunk__20816.cljs$core$IIndexed$_nth$arity$2(null,i__20818);
var require_str_21098 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21098);


var G__21099 = seq__20815;
var G__21100 = chunk__20816;
var G__21101 = count__20817;
var G__21102 = (i__20818 + (1));
seq__20815 = G__21099;
chunk__20816 = G__21100;
count__20817 = G__21101;
i__20818 = G__21102;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20815);
if(temp__5804__auto__){
var seq__20815__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20815__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20815__$1);
var G__21103 = cljs.core.chunk_rest(seq__20815__$1);
var G__21104 = c__5568__auto__;
var G__21105 = cljs.core.count(c__5568__auto__);
var G__21106 = (0);
seq__20815 = G__21103;
chunk__20816 = G__21104;
count__20817 = G__21105;
i__20818 = G__21106;
continue;
} else {
var js_ns = cljs.core.first(seq__20815__$1);
var require_str_21107 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21107);


var G__21108 = cljs.core.next(seq__20815__$1);
var G__21109 = null;
var G__21110 = (0);
var G__21111 = (0);
seq__20815 = G__21108;
chunk__20816 = G__21109;
count__20817 = G__21110;
i__20818 = G__21111;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20820){
var map__20821 = p__20820;
var map__20821__$1 = cljs.core.__destructure_map(map__20821);
var msg = map__20821__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20821__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20821__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20822(s__20823){
return (new cljs.core.LazySeq(null,(function (){
var s__20823__$1 = s__20823;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20823__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20828 = cljs.core.first(xs__6360__auto__);
var map__20828__$1 = cljs.core.__destructure_map(map__20828);
var src = map__20828__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20828__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20828__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20823__$1,map__20828,map__20828__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20821,map__20821__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20822_$_iter__20824(s__20825){
return (new cljs.core.LazySeq(null,((function (s__20823__$1,map__20828,map__20828__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20821,map__20821__$1,msg,info,reload_info){
return (function (){
var s__20825__$1 = s__20825;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20825__$1);
if(temp__5804__auto____$1){
var s__20825__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20825__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20825__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20827 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20826 = (0);
while(true){
if((i__20826 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20826);
cljs.core.chunk_append(b__20827,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21112 = (i__20826 + (1));
i__20826 = G__21112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20827),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20822_$_iter__20824(cljs.core.chunk_rest(s__20825__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20827),null);
}
} else {
var warning = cljs.core.first(s__20825__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20822_$_iter__20824(cljs.core.rest(s__20825__$2)));
}
} else {
return null;
}
break;
}
});})(s__20823__$1,map__20828,map__20828__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20821,map__20821__$1,msg,info,reload_info))
,null,null));
});})(s__20823__$1,map__20828,map__20828__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20821,map__20821__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20822(cljs.core.rest(s__20823__$1)));
} else {
var G__21113 = cljs.core.rest(s__20823__$1);
s__20823__$1 = G__21113;
continue;
}
} else {
var G__21114 = cljs.core.rest(s__20823__$1);
s__20823__$1 = G__21114;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20829_21115 = cljs.core.seq(warnings);
var chunk__20830_21116 = null;
var count__20831_21117 = (0);
var i__20832_21118 = (0);
while(true){
if((i__20832_21118 < count__20831_21117)){
var map__20835_21119 = chunk__20830_21116.cljs$core$IIndexed$_nth$arity$2(null,i__20832_21118);
var map__20835_21120__$1 = cljs.core.__destructure_map(map__20835_21119);
var w_21121 = map__20835_21120__$1;
var msg_21122__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835_21120__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835_21120__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835_21120__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835_21120__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21125)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21123),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21124),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21122__$1)].join(''));


var G__21126 = seq__20829_21115;
var G__21127 = chunk__20830_21116;
var G__21128 = count__20831_21117;
var G__21129 = (i__20832_21118 + (1));
seq__20829_21115 = G__21126;
chunk__20830_21116 = G__21127;
count__20831_21117 = G__21128;
i__20832_21118 = G__21129;
continue;
} else {
var temp__5804__auto___21130 = cljs.core.seq(seq__20829_21115);
if(temp__5804__auto___21130){
var seq__20829_21131__$1 = temp__5804__auto___21130;
if(cljs.core.chunked_seq_QMARK_(seq__20829_21131__$1)){
var c__5568__auto___21132 = cljs.core.chunk_first(seq__20829_21131__$1);
var G__21133 = cljs.core.chunk_rest(seq__20829_21131__$1);
var G__21134 = c__5568__auto___21132;
var G__21135 = cljs.core.count(c__5568__auto___21132);
var G__21136 = (0);
seq__20829_21115 = G__21133;
chunk__20830_21116 = G__21134;
count__20831_21117 = G__21135;
i__20832_21118 = G__21136;
continue;
} else {
var map__20836_21137 = cljs.core.first(seq__20829_21131__$1);
var map__20836_21138__$1 = cljs.core.__destructure_map(map__20836_21137);
var w_21139 = map__20836_21138__$1;
var msg_21140__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836_21138__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836_21138__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836_21138__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836_21138__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21143)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21141),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21142),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21140__$1)].join(''));


var G__21144 = cljs.core.next(seq__20829_21131__$1);
var G__21145 = null;
var G__21146 = (0);
var G__21147 = (0);
seq__20829_21115 = G__21144;
chunk__20830_21116 = G__21145;
count__20831_21117 = G__21146;
i__20832_21118 = G__21147;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20819_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20819_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20837){
var map__20838 = p__20837;
var map__20838__$1 = cljs.core.__destructure_map(map__20838);
var msg = map__20838__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20838__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20838__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20839 = cljs.core.seq(updates);
var chunk__20841 = null;
var count__20842 = (0);
var i__20843 = (0);
while(true){
if((i__20843 < count__20842)){
var path = chunk__20841.cljs$core$IIndexed$_nth$arity$2(null,i__20843);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20953_21148 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20957_21149 = null;
var count__20958_21150 = (0);
var i__20959_21151 = (0);
while(true){
if((i__20959_21151 < count__20958_21150)){
var node_21152 = chunk__20957_21149.cljs$core$IIndexed$_nth$arity$2(null,i__20959_21151);
if(cljs.core.not(node_21152.shadow$old)){
var path_match_21153 = shadow.cljs.devtools.client.browser.match_paths(node_21152.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21153)){
var new_link_21154 = (function (){var G__20985 = node_21152.cloneNode(true);
G__20985.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21153),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20985;
})();
(node_21152.shadow$old = true);

(new_link_21154.onload = ((function (seq__20953_21148,chunk__20957_21149,count__20958_21150,i__20959_21151,seq__20839,chunk__20841,count__20842,i__20843,new_link_21154,path_match_21153,node_21152,path,map__20838,map__20838__$1,msg,updates,reload_info){
return (function (e){
var seq__20986_21155 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20988_21156 = null;
var count__20989_21157 = (0);
var i__20990_21158 = (0);
while(true){
if((i__20990_21158 < count__20989_21157)){
var map__20994_21159 = chunk__20988_21156.cljs$core$IIndexed$_nth$arity$2(null,i__20990_21158);
var map__20994_21160__$1 = cljs.core.__destructure_map(map__20994_21159);
var task_21161 = map__20994_21160__$1;
var fn_str_21162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994_21160__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994_21160__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21164 = goog.getObjectByName(fn_str_21162,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21163)].join(''));

(fn_obj_21164.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21164.cljs$core$IFn$_invoke$arity$2(path,new_link_21154) : fn_obj_21164.call(null,path,new_link_21154));


var G__21165 = seq__20986_21155;
var G__21166 = chunk__20988_21156;
var G__21167 = count__20989_21157;
var G__21168 = (i__20990_21158 + (1));
seq__20986_21155 = G__21165;
chunk__20988_21156 = G__21166;
count__20989_21157 = G__21167;
i__20990_21158 = G__21168;
continue;
} else {
var temp__5804__auto___21169 = cljs.core.seq(seq__20986_21155);
if(temp__5804__auto___21169){
var seq__20986_21170__$1 = temp__5804__auto___21169;
if(cljs.core.chunked_seq_QMARK_(seq__20986_21170__$1)){
var c__5568__auto___21171 = cljs.core.chunk_first(seq__20986_21170__$1);
var G__21172 = cljs.core.chunk_rest(seq__20986_21170__$1);
var G__21173 = c__5568__auto___21171;
var G__21174 = cljs.core.count(c__5568__auto___21171);
var G__21175 = (0);
seq__20986_21155 = G__21172;
chunk__20988_21156 = G__21173;
count__20989_21157 = G__21174;
i__20990_21158 = G__21175;
continue;
} else {
var map__20995_21176 = cljs.core.first(seq__20986_21170__$1);
var map__20995_21177__$1 = cljs.core.__destructure_map(map__20995_21176);
var task_21178 = map__20995_21177__$1;
var fn_str_21179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20995_21177__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20995_21177__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21181 = goog.getObjectByName(fn_str_21179,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21180)].join(''));

(fn_obj_21181.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21181.cljs$core$IFn$_invoke$arity$2(path,new_link_21154) : fn_obj_21181.call(null,path,new_link_21154));


var G__21182 = cljs.core.next(seq__20986_21170__$1);
var G__21183 = null;
var G__21184 = (0);
var G__21185 = (0);
seq__20986_21155 = G__21182;
chunk__20988_21156 = G__21183;
count__20989_21157 = G__21184;
i__20990_21158 = G__21185;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21152);
});})(seq__20953_21148,chunk__20957_21149,count__20958_21150,i__20959_21151,seq__20839,chunk__20841,count__20842,i__20843,new_link_21154,path_match_21153,node_21152,path,map__20838,map__20838__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21153], 0));

goog.dom.insertSiblingAfter(new_link_21154,node_21152);


var G__21186 = seq__20953_21148;
var G__21187 = chunk__20957_21149;
var G__21188 = count__20958_21150;
var G__21189 = (i__20959_21151 + (1));
seq__20953_21148 = G__21186;
chunk__20957_21149 = G__21187;
count__20958_21150 = G__21188;
i__20959_21151 = G__21189;
continue;
} else {
var G__21190 = seq__20953_21148;
var G__21191 = chunk__20957_21149;
var G__21192 = count__20958_21150;
var G__21193 = (i__20959_21151 + (1));
seq__20953_21148 = G__21190;
chunk__20957_21149 = G__21191;
count__20958_21150 = G__21192;
i__20959_21151 = G__21193;
continue;
}
} else {
var G__21194 = seq__20953_21148;
var G__21195 = chunk__20957_21149;
var G__21196 = count__20958_21150;
var G__21197 = (i__20959_21151 + (1));
seq__20953_21148 = G__21194;
chunk__20957_21149 = G__21195;
count__20958_21150 = G__21196;
i__20959_21151 = G__21197;
continue;
}
} else {
var temp__5804__auto___21198 = cljs.core.seq(seq__20953_21148);
if(temp__5804__auto___21198){
var seq__20953_21199__$1 = temp__5804__auto___21198;
if(cljs.core.chunked_seq_QMARK_(seq__20953_21199__$1)){
var c__5568__auto___21200 = cljs.core.chunk_first(seq__20953_21199__$1);
var G__21201 = cljs.core.chunk_rest(seq__20953_21199__$1);
var G__21202 = c__5568__auto___21200;
var G__21203 = cljs.core.count(c__5568__auto___21200);
var G__21204 = (0);
seq__20953_21148 = G__21201;
chunk__20957_21149 = G__21202;
count__20958_21150 = G__21203;
i__20959_21151 = G__21204;
continue;
} else {
var node_21205 = cljs.core.first(seq__20953_21199__$1);
if(cljs.core.not(node_21205.shadow$old)){
var path_match_21206 = shadow.cljs.devtools.client.browser.match_paths(node_21205.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21206)){
var new_link_21207 = (function (){var G__20996 = node_21205.cloneNode(true);
G__20996.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21206),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20996;
})();
(node_21205.shadow$old = true);

(new_link_21207.onload = ((function (seq__20953_21148,chunk__20957_21149,count__20958_21150,i__20959_21151,seq__20839,chunk__20841,count__20842,i__20843,new_link_21207,path_match_21206,node_21205,seq__20953_21199__$1,temp__5804__auto___21198,path,map__20838,map__20838__$1,msg,updates,reload_info){
return (function (e){
var seq__20997_21208 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20999_21209 = null;
var count__21000_21210 = (0);
var i__21001_21211 = (0);
while(true){
if((i__21001_21211 < count__21000_21210)){
var map__21005_21212 = chunk__20999_21209.cljs$core$IIndexed$_nth$arity$2(null,i__21001_21211);
var map__21005_21213__$1 = cljs.core.__destructure_map(map__21005_21212);
var task_21214 = map__21005_21213__$1;
var fn_str_21215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21005_21213__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21005_21213__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21217 = goog.getObjectByName(fn_str_21215,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21216)].join(''));

(fn_obj_21217.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21217.cljs$core$IFn$_invoke$arity$2(path,new_link_21207) : fn_obj_21217.call(null,path,new_link_21207));


var G__21218 = seq__20997_21208;
var G__21219 = chunk__20999_21209;
var G__21220 = count__21000_21210;
var G__21221 = (i__21001_21211 + (1));
seq__20997_21208 = G__21218;
chunk__20999_21209 = G__21219;
count__21000_21210 = G__21220;
i__21001_21211 = G__21221;
continue;
} else {
var temp__5804__auto___21222__$1 = cljs.core.seq(seq__20997_21208);
if(temp__5804__auto___21222__$1){
var seq__20997_21223__$1 = temp__5804__auto___21222__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20997_21223__$1)){
var c__5568__auto___21224 = cljs.core.chunk_first(seq__20997_21223__$1);
var G__21225 = cljs.core.chunk_rest(seq__20997_21223__$1);
var G__21226 = c__5568__auto___21224;
var G__21227 = cljs.core.count(c__5568__auto___21224);
var G__21228 = (0);
seq__20997_21208 = G__21225;
chunk__20999_21209 = G__21226;
count__21000_21210 = G__21227;
i__21001_21211 = G__21228;
continue;
} else {
var map__21006_21229 = cljs.core.first(seq__20997_21223__$1);
var map__21006_21230__$1 = cljs.core.__destructure_map(map__21006_21229);
var task_21231 = map__21006_21230__$1;
var fn_str_21232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21006_21230__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21006_21230__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21234 = goog.getObjectByName(fn_str_21232,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21233)].join(''));

(fn_obj_21234.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21234.cljs$core$IFn$_invoke$arity$2(path,new_link_21207) : fn_obj_21234.call(null,path,new_link_21207));


var G__21235 = cljs.core.next(seq__20997_21223__$1);
var G__21236 = null;
var G__21237 = (0);
var G__21238 = (0);
seq__20997_21208 = G__21235;
chunk__20999_21209 = G__21236;
count__21000_21210 = G__21237;
i__21001_21211 = G__21238;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21205);
});})(seq__20953_21148,chunk__20957_21149,count__20958_21150,i__20959_21151,seq__20839,chunk__20841,count__20842,i__20843,new_link_21207,path_match_21206,node_21205,seq__20953_21199__$1,temp__5804__auto___21198,path,map__20838,map__20838__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21206], 0));

goog.dom.insertSiblingAfter(new_link_21207,node_21205);


var G__21239 = cljs.core.next(seq__20953_21199__$1);
var G__21240 = null;
var G__21241 = (0);
var G__21242 = (0);
seq__20953_21148 = G__21239;
chunk__20957_21149 = G__21240;
count__20958_21150 = G__21241;
i__20959_21151 = G__21242;
continue;
} else {
var G__21243 = cljs.core.next(seq__20953_21199__$1);
var G__21244 = null;
var G__21245 = (0);
var G__21246 = (0);
seq__20953_21148 = G__21243;
chunk__20957_21149 = G__21244;
count__20958_21150 = G__21245;
i__20959_21151 = G__21246;
continue;
}
} else {
var G__21247 = cljs.core.next(seq__20953_21199__$1);
var G__21248 = null;
var G__21249 = (0);
var G__21250 = (0);
seq__20953_21148 = G__21247;
chunk__20957_21149 = G__21248;
count__20958_21150 = G__21249;
i__20959_21151 = G__21250;
continue;
}
}
} else {
}
}
break;
}


var G__21251 = seq__20839;
var G__21252 = chunk__20841;
var G__21253 = count__20842;
var G__21254 = (i__20843 + (1));
seq__20839 = G__21251;
chunk__20841 = G__21252;
count__20842 = G__21253;
i__20843 = G__21254;
continue;
} else {
var G__21255 = seq__20839;
var G__21256 = chunk__20841;
var G__21257 = count__20842;
var G__21258 = (i__20843 + (1));
seq__20839 = G__21255;
chunk__20841 = G__21256;
count__20842 = G__21257;
i__20843 = G__21258;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20839);
if(temp__5804__auto__){
var seq__20839__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20839__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20839__$1);
var G__21259 = cljs.core.chunk_rest(seq__20839__$1);
var G__21260 = c__5568__auto__;
var G__21261 = cljs.core.count(c__5568__auto__);
var G__21262 = (0);
seq__20839 = G__21259;
chunk__20841 = G__21260;
count__20842 = G__21261;
i__20843 = G__21262;
continue;
} else {
var path = cljs.core.first(seq__20839__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21007_21263 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21011_21264 = null;
var count__21012_21265 = (0);
var i__21013_21266 = (0);
while(true){
if((i__21013_21266 < count__21012_21265)){
var node_21267 = chunk__21011_21264.cljs$core$IIndexed$_nth$arity$2(null,i__21013_21266);
if(cljs.core.not(node_21267.shadow$old)){
var path_match_21268 = shadow.cljs.devtools.client.browser.match_paths(node_21267.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21268)){
var new_link_21269 = (function (){var G__21039 = node_21267.cloneNode(true);
G__21039.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21268),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21039;
})();
(node_21267.shadow$old = true);

(new_link_21269.onload = ((function (seq__21007_21263,chunk__21011_21264,count__21012_21265,i__21013_21266,seq__20839,chunk__20841,count__20842,i__20843,new_link_21269,path_match_21268,node_21267,path,seq__20839__$1,temp__5804__auto__,map__20838,map__20838__$1,msg,updates,reload_info){
return (function (e){
var seq__21040_21270 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21042_21271 = null;
var count__21043_21272 = (0);
var i__21044_21273 = (0);
while(true){
if((i__21044_21273 < count__21043_21272)){
var map__21048_21274 = chunk__21042_21271.cljs$core$IIndexed$_nth$arity$2(null,i__21044_21273);
var map__21048_21275__$1 = cljs.core.__destructure_map(map__21048_21274);
var task_21276 = map__21048_21275__$1;
var fn_str_21277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21048_21275__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21048_21275__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21279 = goog.getObjectByName(fn_str_21277,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21278)].join(''));

(fn_obj_21279.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21279.cljs$core$IFn$_invoke$arity$2(path,new_link_21269) : fn_obj_21279.call(null,path,new_link_21269));


var G__21280 = seq__21040_21270;
var G__21281 = chunk__21042_21271;
var G__21282 = count__21043_21272;
var G__21283 = (i__21044_21273 + (1));
seq__21040_21270 = G__21280;
chunk__21042_21271 = G__21281;
count__21043_21272 = G__21282;
i__21044_21273 = G__21283;
continue;
} else {
var temp__5804__auto___21284__$1 = cljs.core.seq(seq__21040_21270);
if(temp__5804__auto___21284__$1){
var seq__21040_21285__$1 = temp__5804__auto___21284__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21040_21285__$1)){
var c__5568__auto___21286 = cljs.core.chunk_first(seq__21040_21285__$1);
var G__21287 = cljs.core.chunk_rest(seq__21040_21285__$1);
var G__21288 = c__5568__auto___21286;
var G__21289 = cljs.core.count(c__5568__auto___21286);
var G__21290 = (0);
seq__21040_21270 = G__21287;
chunk__21042_21271 = G__21288;
count__21043_21272 = G__21289;
i__21044_21273 = G__21290;
continue;
} else {
var map__21049_21291 = cljs.core.first(seq__21040_21285__$1);
var map__21049_21292__$1 = cljs.core.__destructure_map(map__21049_21291);
var task_21293 = map__21049_21292__$1;
var fn_str_21294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21049_21292__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21049_21292__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21296 = goog.getObjectByName(fn_str_21294,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21295)].join(''));

(fn_obj_21296.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21296.cljs$core$IFn$_invoke$arity$2(path,new_link_21269) : fn_obj_21296.call(null,path,new_link_21269));


var G__21297 = cljs.core.next(seq__21040_21285__$1);
var G__21298 = null;
var G__21299 = (0);
var G__21300 = (0);
seq__21040_21270 = G__21297;
chunk__21042_21271 = G__21298;
count__21043_21272 = G__21299;
i__21044_21273 = G__21300;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21267);
});})(seq__21007_21263,chunk__21011_21264,count__21012_21265,i__21013_21266,seq__20839,chunk__20841,count__20842,i__20843,new_link_21269,path_match_21268,node_21267,path,seq__20839__$1,temp__5804__auto__,map__20838,map__20838__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21268], 0));

goog.dom.insertSiblingAfter(new_link_21269,node_21267);


var G__21301 = seq__21007_21263;
var G__21302 = chunk__21011_21264;
var G__21303 = count__21012_21265;
var G__21304 = (i__21013_21266 + (1));
seq__21007_21263 = G__21301;
chunk__21011_21264 = G__21302;
count__21012_21265 = G__21303;
i__21013_21266 = G__21304;
continue;
} else {
var G__21305 = seq__21007_21263;
var G__21306 = chunk__21011_21264;
var G__21307 = count__21012_21265;
var G__21308 = (i__21013_21266 + (1));
seq__21007_21263 = G__21305;
chunk__21011_21264 = G__21306;
count__21012_21265 = G__21307;
i__21013_21266 = G__21308;
continue;
}
} else {
var G__21309 = seq__21007_21263;
var G__21310 = chunk__21011_21264;
var G__21311 = count__21012_21265;
var G__21312 = (i__21013_21266 + (1));
seq__21007_21263 = G__21309;
chunk__21011_21264 = G__21310;
count__21012_21265 = G__21311;
i__21013_21266 = G__21312;
continue;
}
} else {
var temp__5804__auto___21313__$1 = cljs.core.seq(seq__21007_21263);
if(temp__5804__auto___21313__$1){
var seq__21007_21314__$1 = temp__5804__auto___21313__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21007_21314__$1)){
var c__5568__auto___21315 = cljs.core.chunk_first(seq__21007_21314__$1);
var G__21316 = cljs.core.chunk_rest(seq__21007_21314__$1);
var G__21317 = c__5568__auto___21315;
var G__21318 = cljs.core.count(c__5568__auto___21315);
var G__21319 = (0);
seq__21007_21263 = G__21316;
chunk__21011_21264 = G__21317;
count__21012_21265 = G__21318;
i__21013_21266 = G__21319;
continue;
} else {
var node_21320 = cljs.core.first(seq__21007_21314__$1);
if(cljs.core.not(node_21320.shadow$old)){
var path_match_21321 = shadow.cljs.devtools.client.browser.match_paths(node_21320.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21321)){
var new_link_21322 = (function (){var G__21050 = node_21320.cloneNode(true);
G__21050.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21321),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21050;
})();
(node_21320.shadow$old = true);

(new_link_21322.onload = ((function (seq__21007_21263,chunk__21011_21264,count__21012_21265,i__21013_21266,seq__20839,chunk__20841,count__20842,i__20843,new_link_21322,path_match_21321,node_21320,seq__21007_21314__$1,temp__5804__auto___21313__$1,path,seq__20839__$1,temp__5804__auto__,map__20838,map__20838__$1,msg,updates,reload_info){
return (function (e){
var seq__21051_21323 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21053_21324 = null;
var count__21054_21325 = (0);
var i__21055_21326 = (0);
while(true){
if((i__21055_21326 < count__21054_21325)){
var map__21059_21327 = chunk__21053_21324.cljs$core$IIndexed$_nth$arity$2(null,i__21055_21326);
var map__21059_21328__$1 = cljs.core.__destructure_map(map__21059_21327);
var task_21329 = map__21059_21328__$1;
var fn_str_21330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21059_21328__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21059_21328__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21332 = goog.getObjectByName(fn_str_21330,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21331)].join(''));

(fn_obj_21332.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21332.cljs$core$IFn$_invoke$arity$2(path,new_link_21322) : fn_obj_21332.call(null,path,new_link_21322));


var G__21333 = seq__21051_21323;
var G__21334 = chunk__21053_21324;
var G__21335 = count__21054_21325;
var G__21336 = (i__21055_21326 + (1));
seq__21051_21323 = G__21333;
chunk__21053_21324 = G__21334;
count__21054_21325 = G__21335;
i__21055_21326 = G__21336;
continue;
} else {
var temp__5804__auto___21337__$2 = cljs.core.seq(seq__21051_21323);
if(temp__5804__auto___21337__$2){
var seq__21051_21338__$1 = temp__5804__auto___21337__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21051_21338__$1)){
var c__5568__auto___21339 = cljs.core.chunk_first(seq__21051_21338__$1);
var G__21340 = cljs.core.chunk_rest(seq__21051_21338__$1);
var G__21341 = c__5568__auto___21339;
var G__21342 = cljs.core.count(c__5568__auto___21339);
var G__21343 = (0);
seq__21051_21323 = G__21340;
chunk__21053_21324 = G__21341;
count__21054_21325 = G__21342;
i__21055_21326 = G__21343;
continue;
} else {
var map__21060_21344 = cljs.core.first(seq__21051_21338__$1);
var map__21060_21345__$1 = cljs.core.__destructure_map(map__21060_21344);
var task_21346 = map__21060_21345__$1;
var fn_str_21347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21060_21345__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21060_21345__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21349 = goog.getObjectByName(fn_str_21347,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21348)].join(''));

(fn_obj_21349.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21349.cljs$core$IFn$_invoke$arity$2(path,new_link_21322) : fn_obj_21349.call(null,path,new_link_21322));


var G__21350 = cljs.core.next(seq__21051_21338__$1);
var G__21351 = null;
var G__21352 = (0);
var G__21353 = (0);
seq__21051_21323 = G__21350;
chunk__21053_21324 = G__21351;
count__21054_21325 = G__21352;
i__21055_21326 = G__21353;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21320);
});})(seq__21007_21263,chunk__21011_21264,count__21012_21265,i__21013_21266,seq__20839,chunk__20841,count__20842,i__20843,new_link_21322,path_match_21321,node_21320,seq__21007_21314__$1,temp__5804__auto___21313__$1,path,seq__20839__$1,temp__5804__auto__,map__20838,map__20838__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21321], 0));

goog.dom.insertSiblingAfter(new_link_21322,node_21320);


var G__21354 = cljs.core.next(seq__21007_21314__$1);
var G__21355 = null;
var G__21356 = (0);
var G__21357 = (0);
seq__21007_21263 = G__21354;
chunk__21011_21264 = G__21355;
count__21012_21265 = G__21356;
i__21013_21266 = G__21357;
continue;
} else {
var G__21358 = cljs.core.next(seq__21007_21314__$1);
var G__21359 = null;
var G__21360 = (0);
var G__21361 = (0);
seq__21007_21263 = G__21358;
chunk__21011_21264 = G__21359;
count__21012_21265 = G__21360;
i__21013_21266 = G__21361;
continue;
}
} else {
var G__21362 = cljs.core.next(seq__21007_21314__$1);
var G__21363 = null;
var G__21364 = (0);
var G__21365 = (0);
seq__21007_21263 = G__21362;
chunk__21011_21264 = G__21363;
count__21012_21265 = G__21364;
i__21013_21266 = G__21365;
continue;
}
}
} else {
}
}
break;
}


var G__21366 = cljs.core.next(seq__20839__$1);
var G__21367 = null;
var G__21368 = (0);
var G__21369 = (0);
seq__20839 = G__21366;
chunk__20841 = G__21367;
count__20842 = G__21368;
i__20843 = G__21369;
continue;
} else {
var G__21370 = cljs.core.next(seq__20839__$1);
var G__21371 = null;
var G__21372 = (0);
var G__21373 = (0);
seq__20839 = G__21370;
chunk__20841 = G__21371;
count__20842 = G__21372;
i__20843 = G__21373;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21061){
var map__21062 = p__21061;
var map__21062__$1 = cljs.core.__destructure_map(map__21062);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21062__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21063){
var map__21064 = p__21063;
var map__21064__$1 = cljs.core.__destructure_map(map__21064);
var _ = map__21064__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21064__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21065,done,error){
var map__21066 = p__21065;
var map__21066__$1 = cljs.core.__destructure_map(map__21066);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21066__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21067,done,error){
var map__21068 = p__21067;
var map__21068__$1 = cljs.core.__destructure_map(map__21068);
var msg = map__21068__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21069){
var map__21070 = p__21069;
var map__21070__$1 = cljs.core.__destructure_map(map__21070);
var src = map__21070__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21070__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21071 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21071) : done.call(null,G__21071));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21072){
var map__21073 = p__21072;
var map__21073__$1 = cljs.core.__destructure_map(map__21073);
var msg__$1 = map__21073__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21073__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21074){var ex = e21074;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21075){
var map__21076 = p__21075;
var map__21076__$1 = cljs.core.__destructure_map(map__21076);
var env = map__21076__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21076__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21077){
var map__21078 = p__21077;
var map__21078__$1 = cljs.core.__destructure_map(map__21078);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21078__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21078__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21079){
var map__21080 = p__21079;
var map__21080__$1 = cljs.core.__destructure_map(map__21080);
var svc = map__21080__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21080__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
