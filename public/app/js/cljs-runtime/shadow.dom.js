goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18053 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18053(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18056 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18056(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17448 = coll;
var G__17449 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17448,G__17449) : shadow.dom.lazy_native_coll_seq.call(null,G__17448,G__17449));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17509 = arguments.length;
switch (G__17509) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17517 = arguments.length;
switch (G__17517) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17519 = arguments.length;
switch (G__17519) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17539 = arguments.length;
switch (G__17539) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17559 = arguments.length;
switch (G__17559) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17561 = arguments.length;
switch (G__17561) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17562){if((e17562 instanceof Object)){
var e = e17562;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17562;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17563 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17564 = null;
var count__17565 = (0);
var i__17566 = (0);
while(true){
if((i__17566 < count__17565)){
var el = chunk__17564.cljs$core$IIndexed$_nth$arity$2(null,i__17566);
var handler_18078__$1 = ((function (seq__17563,chunk__17564,count__17565,i__17566,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17563,chunk__17564,count__17565,i__17566,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18078__$1);


var G__18079 = seq__17563;
var G__18080 = chunk__17564;
var G__18081 = count__17565;
var G__18082 = (i__17566 + (1));
seq__17563 = G__18079;
chunk__17564 = G__18080;
count__17565 = G__18081;
i__17566 = G__18082;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17563);
if(temp__5804__auto__){
var seq__17563__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17563__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17563__$1);
var G__18083 = cljs.core.chunk_rest(seq__17563__$1);
var G__18084 = c__5568__auto__;
var G__18085 = cljs.core.count(c__5568__auto__);
var G__18086 = (0);
seq__17563 = G__18083;
chunk__17564 = G__18084;
count__17565 = G__18085;
i__17566 = G__18086;
continue;
} else {
var el = cljs.core.first(seq__17563__$1);
var handler_18087__$1 = ((function (seq__17563,chunk__17564,count__17565,i__17566,el,seq__17563__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17563,chunk__17564,count__17565,i__17566,el,seq__17563__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18087__$1);


var G__18088 = cljs.core.next(seq__17563__$1);
var G__18089 = null;
var G__18090 = (0);
var G__18091 = (0);
seq__17563 = G__18088;
chunk__17564 = G__18089;
count__17565 = G__18090;
i__17566 = G__18091;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17570 = arguments.length;
switch (G__17570) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17573 = cljs.core.seq(events);
var chunk__17574 = null;
var count__17575 = (0);
var i__17576 = (0);
while(true){
if((i__17576 < count__17575)){
var vec__17583 = chunk__17574.cljs$core$IIndexed$_nth$arity$2(null,i__17576);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17583,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17583,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18093 = seq__17573;
var G__18094 = chunk__17574;
var G__18095 = count__17575;
var G__18096 = (i__17576 + (1));
seq__17573 = G__18093;
chunk__17574 = G__18094;
count__17575 = G__18095;
i__17576 = G__18096;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17573);
if(temp__5804__auto__){
var seq__17573__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17573__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17573__$1);
var G__18097 = cljs.core.chunk_rest(seq__17573__$1);
var G__18098 = c__5568__auto__;
var G__18099 = cljs.core.count(c__5568__auto__);
var G__18100 = (0);
seq__17573 = G__18097;
chunk__17574 = G__18098;
count__17575 = G__18099;
i__17576 = G__18100;
continue;
} else {
var vec__17586 = cljs.core.first(seq__17573__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17586,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17586,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18102 = cljs.core.next(seq__17573__$1);
var G__18103 = null;
var G__18104 = (0);
var G__18105 = (0);
seq__17573 = G__18102;
chunk__17574 = G__18103;
count__17575 = G__18104;
i__17576 = G__18105;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17592 = cljs.core.seq(styles);
var chunk__17593 = null;
var count__17594 = (0);
var i__17595 = (0);
while(true){
if((i__17595 < count__17594)){
var vec__17609 = chunk__17593.cljs$core$IIndexed$_nth$arity$2(null,i__17595);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17609,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17609,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18109 = seq__17592;
var G__18110 = chunk__17593;
var G__18111 = count__17594;
var G__18112 = (i__17595 + (1));
seq__17592 = G__18109;
chunk__17593 = G__18110;
count__17594 = G__18111;
i__17595 = G__18112;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17592);
if(temp__5804__auto__){
var seq__17592__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17592__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17592__$1);
var G__18113 = cljs.core.chunk_rest(seq__17592__$1);
var G__18114 = c__5568__auto__;
var G__18115 = cljs.core.count(c__5568__auto__);
var G__18116 = (0);
seq__17592 = G__18113;
chunk__17593 = G__18114;
count__17594 = G__18115;
i__17595 = G__18116;
continue;
} else {
var vec__17613 = cljs.core.first(seq__17592__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18117 = cljs.core.next(seq__17592__$1);
var G__18118 = null;
var G__18119 = (0);
var G__18120 = (0);
seq__17592 = G__18117;
chunk__17593 = G__18118;
count__17594 = G__18119;
i__17595 = G__18120;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17616_18121 = key;
var G__17616_18122__$1 = (((G__17616_18121 instanceof cljs.core.Keyword))?G__17616_18121.fqn:null);
switch (G__17616_18122__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18124 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_18124,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_18124,"aria-");
}
})())){
el.setAttribute(ks_18124,value);
} else {
(el[ks_18124] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17622){
var map__17623 = p__17622;
var map__17623__$1 = cljs.core.__destructure_map(map__17623);
var props = map__17623__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17623__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17624 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17624,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17624,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17624,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17627 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17627,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17627;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17629 = arguments.length;
switch (G__17629) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17640){
var vec__17641 = p__17640;
var seq__17642 = cljs.core.seq(vec__17641);
var first__17643 = cljs.core.first(seq__17642);
var seq__17642__$1 = cljs.core.next(seq__17642);
var nn = first__17643;
var first__17643__$1 = cljs.core.first(seq__17642__$1);
var seq__17642__$2 = cljs.core.next(seq__17642__$1);
var np = first__17643__$1;
var nc = seq__17642__$2;
var node = vec__17641;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17647 = nn;
var G__17648 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17647,G__17648) : create_fn.call(null,G__17647,G__17648));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17652 = nn;
var G__17653 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17652,G__17653) : create_fn.call(null,G__17652,G__17653));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17657 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17657,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17657,(1),null);
var seq__17660_18126 = cljs.core.seq(node_children);
var chunk__17661_18127 = null;
var count__17662_18128 = (0);
var i__17663_18129 = (0);
while(true){
if((i__17663_18129 < count__17662_18128)){
var child_struct_18130 = chunk__17661_18127.cljs$core$IIndexed$_nth$arity$2(null,i__17663_18129);
var children_18131 = shadow.dom.dom_node(child_struct_18130);
if(cljs.core.seq_QMARK_(children_18131)){
var seq__17689_18132 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18131));
var chunk__17691_18133 = null;
var count__17692_18134 = (0);
var i__17693_18135 = (0);
while(true){
if((i__17693_18135 < count__17692_18134)){
var child_18136 = chunk__17691_18133.cljs$core$IIndexed$_nth$arity$2(null,i__17693_18135);
if(cljs.core.truth_(child_18136)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18136);


var G__18137 = seq__17689_18132;
var G__18138 = chunk__17691_18133;
var G__18139 = count__17692_18134;
var G__18140 = (i__17693_18135 + (1));
seq__17689_18132 = G__18137;
chunk__17691_18133 = G__18138;
count__17692_18134 = G__18139;
i__17693_18135 = G__18140;
continue;
} else {
var G__18141 = seq__17689_18132;
var G__18142 = chunk__17691_18133;
var G__18143 = count__17692_18134;
var G__18144 = (i__17693_18135 + (1));
seq__17689_18132 = G__18141;
chunk__17691_18133 = G__18142;
count__17692_18134 = G__18143;
i__17693_18135 = G__18144;
continue;
}
} else {
var temp__5804__auto___18145 = cljs.core.seq(seq__17689_18132);
if(temp__5804__auto___18145){
var seq__17689_18146__$1 = temp__5804__auto___18145;
if(cljs.core.chunked_seq_QMARK_(seq__17689_18146__$1)){
var c__5568__auto___18147 = cljs.core.chunk_first(seq__17689_18146__$1);
var G__18148 = cljs.core.chunk_rest(seq__17689_18146__$1);
var G__18149 = c__5568__auto___18147;
var G__18150 = cljs.core.count(c__5568__auto___18147);
var G__18151 = (0);
seq__17689_18132 = G__18148;
chunk__17691_18133 = G__18149;
count__17692_18134 = G__18150;
i__17693_18135 = G__18151;
continue;
} else {
var child_18152 = cljs.core.first(seq__17689_18146__$1);
if(cljs.core.truth_(child_18152)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18152);


var G__18153 = cljs.core.next(seq__17689_18146__$1);
var G__18154 = null;
var G__18155 = (0);
var G__18156 = (0);
seq__17689_18132 = G__18153;
chunk__17691_18133 = G__18154;
count__17692_18134 = G__18155;
i__17693_18135 = G__18156;
continue;
} else {
var G__18157 = cljs.core.next(seq__17689_18146__$1);
var G__18158 = null;
var G__18159 = (0);
var G__18160 = (0);
seq__17689_18132 = G__18157;
chunk__17691_18133 = G__18158;
count__17692_18134 = G__18159;
i__17693_18135 = G__18160;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18131);
}


var G__18161 = seq__17660_18126;
var G__18162 = chunk__17661_18127;
var G__18163 = count__17662_18128;
var G__18164 = (i__17663_18129 + (1));
seq__17660_18126 = G__18161;
chunk__17661_18127 = G__18162;
count__17662_18128 = G__18163;
i__17663_18129 = G__18164;
continue;
} else {
var temp__5804__auto___18165 = cljs.core.seq(seq__17660_18126);
if(temp__5804__auto___18165){
var seq__17660_18166__$1 = temp__5804__auto___18165;
if(cljs.core.chunked_seq_QMARK_(seq__17660_18166__$1)){
var c__5568__auto___18167 = cljs.core.chunk_first(seq__17660_18166__$1);
var G__18168 = cljs.core.chunk_rest(seq__17660_18166__$1);
var G__18169 = c__5568__auto___18167;
var G__18170 = cljs.core.count(c__5568__auto___18167);
var G__18171 = (0);
seq__17660_18126 = G__18168;
chunk__17661_18127 = G__18169;
count__17662_18128 = G__18170;
i__17663_18129 = G__18171;
continue;
} else {
var child_struct_18172 = cljs.core.first(seq__17660_18166__$1);
var children_18173 = shadow.dom.dom_node(child_struct_18172);
if(cljs.core.seq_QMARK_(children_18173)){
var seq__17709_18174 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18173));
var chunk__17711_18175 = null;
var count__17712_18176 = (0);
var i__17713_18177 = (0);
while(true){
if((i__17713_18177 < count__17712_18176)){
var child_18178 = chunk__17711_18175.cljs$core$IIndexed$_nth$arity$2(null,i__17713_18177);
if(cljs.core.truth_(child_18178)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18178);


var G__18179 = seq__17709_18174;
var G__18180 = chunk__17711_18175;
var G__18181 = count__17712_18176;
var G__18182 = (i__17713_18177 + (1));
seq__17709_18174 = G__18179;
chunk__17711_18175 = G__18180;
count__17712_18176 = G__18181;
i__17713_18177 = G__18182;
continue;
} else {
var G__18183 = seq__17709_18174;
var G__18184 = chunk__17711_18175;
var G__18185 = count__17712_18176;
var G__18186 = (i__17713_18177 + (1));
seq__17709_18174 = G__18183;
chunk__17711_18175 = G__18184;
count__17712_18176 = G__18185;
i__17713_18177 = G__18186;
continue;
}
} else {
var temp__5804__auto___18187__$1 = cljs.core.seq(seq__17709_18174);
if(temp__5804__auto___18187__$1){
var seq__17709_18188__$1 = temp__5804__auto___18187__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17709_18188__$1)){
var c__5568__auto___18189 = cljs.core.chunk_first(seq__17709_18188__$1);
var G__18190 = cljs.core.chunk_rest(seq__17709_18188__$1);
var G__18191 = c__5568__auto___18189;
var G__18192 = cljs.core.count(c__5568__auto___18189);
var G__18193 = (0);
seq__17709_18174 = G__18190;
chunk__17711_18175 = G__18191;
count__17712_18176 = G__18192;
i__17713_18177 = G__18193;
continue;
} else {
var child_18194 = cljs.core.first(seq__17709_18188__$1);
if(cljs.core.truth_(child_18194)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18194);


var G__18195 = cljs.core.next(seq__17709_18188__$1);
var G__18196 = null;
var G__18197 = (0);
var G__18198 = (0);
seq__17709_18174 = G__18195;
chunk__17711_18175 = G__18196;
count__17712_18176 = G__18197;
i__17713_18177 = G__18198;
continue;
} else {
var G__18199 = cljs.core.next(seq__17709_18188__$1);
var G__18200 = null;
var G__18201 = (0);
var G__18202 = (0);
seq__17709_18174 = G__18199;
chunk__17711_18175 = G__18200;
count__17712_18176 = G__18201;
i__17713_18177 = G__18202;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18173);
}


var G__18203 = cljs.core.next(seq__17660_18166__$1);
var G__18204 = null;
var G__18205 = (0);
var G__18206 = (0);
seq__17660_18126 = G__18203;
chunk__17661_18127 = G__18204;
count__17662_18128 = G__18205;
i__17663_18129 = G__18206;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17730 = cljs.core.seq(node);
var chunk__17731 = null;
var count__17732 = (0);
var i__17733 = (0);
while(true){
if((i__17733 < count__17732)){
var n = chunk__17731.cljs$core$IIndexed$_nth$arity$2(null,i__17733);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18207 = seq__17730;
var G__18208 = chunk__17731;
var G__18209 = count__17732;
var G__18210 = (i__17733 + (1));
seq__17730 = G__18207;
chunk__17731 = G__18208;
count__17732 = G__18209;
i__17733 = G__18210;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17730);
if(temp__5804__auto__){
var seq__17730__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17730__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17730__$1);
var G__18211 = cljs.core.chunk_rest(seq__17730__$1);
var G__18212 = c__5568__auto__;
var G__18213 = cljs.core.count(c__5568__auto__);
var G__18214 = (0);
seq__17730 = G__18211;
chunk__17731 = G__18212;
count__17732 = G__18213;
i__17733 = G__18214;
continue;
} else {
var n = cljs.core.first(seq__17730__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18215 = cljs.core.next(seq__17730__$1);
var G__18216 = null;
var G__18217 = (0);
var G__18218 = (0);
seq__17730 = G__18215;
chunk__17731 = G__18216;
count__17732 = G__18217;
i__17733 = G__18218;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17752 = arguments.length;
switch (G__17752) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__17759 = arguments.length;
switch (G__17759) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__17775 = arguments.length;
switch (G__17775) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18222 = arguments.length;
var i__5770__auto___18223 = (0);
while(true){
if((i__5770__auto___18223 < len__5769__auto___18222)){
args__5775__auto__.push((arguments[i__5770__auto___18223]));

var G__18224 = (i__5770__auto___18223 + (1));
i__5770__auto___18223 = G__18224;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__17799_18225 = cljs.core.seq(nodes);
var chunk__17800_18226 = null;
var count__17801_18227 = (0);
var i__17802_18228 = (0);
while(true){
if((i__17802_18228 < count__17801_18227)){
var node_18229 = chunk__17800_18226.cljs$core$IIndexed$_nth$arity$2(null,i__17802_18228);
fragment.appendChild(shadow.dom._to_dom(node_18229));


var G__18230 = seq__17799_18225;
var G__18231 = chunk__17800_18226;
var G__18232 = count__17801_18227;
var G__18233 = (i__17802_18228 + (1));
seq__17799_18225 = G__18230;
chunk__17800_18226 = G__18231;
count__17801_18227 = G__18232;
i__17802_18228 = G__18233;
continue;
} else {
var temp__5804__auto___18234 = cljs.core.seq(seq__17799_18225);
if(temp__5804__auto___18234){
var seq__17799_18235__$1 = temp__5804__auto___18234;
if(cljs.core.chunked_seq_QMARK_(seq__17799_18235__$1)){
var c__5568__auto___18236 = cljs.core.chunk_first(seq__17799_18235__$1);
var G__18237 = cljs.core.chunk_rest(seq__17799_18235__$1);
var G__18238 = c__5568__auto___18236;
var G__18239 = cljs.core.count(c__5568__auto___18236);
var G__18240 = (0);
seq__17799_18225 = G__18237;
chunk__17800_18226 = G__18238;
count__17801_18227 = G__18239;
i__17802_18228 = G__18240;
continue;
} else {
var node_18241 = cljs.core.first(seq__17799_18235__$1);
fragment.appendChild(shadow.dom._to_dom(node_18241));


var G__18242 = cljs.core.next(seq__17799_18235__$1);
var G__18243 = null;
var G__18244 = (0);
var G__18245 = (0);
seq__17799_18225 = G__18242;
chunk__17800_18226 = G__18243;
count__17801_18227 = G__18244;
i__17802_18228 = G__18245;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq17796){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17796));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__17811_18246 = cljs.core.seq(scripts);
var chunk__17812_18247 = null;
var count__17813_18248 = (0);
var i__17814_18249 = (0);
while(true){
if((i__17814_18249 < count__17813_18248)){
var vec__17823_18250 = chunk__17812_18247.cljs$core$IIndexed$_nth$arity$2(null,i__17814_18249);
var script_tag_18251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17823_18250,(0),null);
var script_body_18252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17823_18250,(1),null);
eval(script_body_18252);


var G__18253 = seq__17811_18246;
var G__18254 = chunk__17812_18247;
var G__18255 = count__17813_18248;
var G__18256 = (i__17814_18249 + (1));
seq__17811_18246 = G__18253;
chunk__17812_18247 = G__18254;
count__17813_18248 = G__18255;
i__17814_18249 = G__18256;
continue;
} else {
var temp__5804__auto___18257 = cljs.core.seq(seq__17811_18246);
if(temp__5804__auto___18257){
var seq__17811_18258__$1 = temp__5804__auto___18257;
if(cljs.core.chunked_seq_QMARK_(seq__17811_18258__$1)){
var c__5568__auto___18259 = cljs.core.chunk_first(seq__17811_18258__$1);
var G__18260 = cljs.core.chunk_rest(seq__17811_18258__$1);
var G__18261 = c__5568__auto___18259;
var G__18262 = cljs.core.count(c__5568__auto___18259);
var G__18263 = (0);
seq__17811_18246 = G__18260;
chunk__17812_18247 = G__18261;
count__17813_18248 = G__18262;
i__17814_18249 = G__18263;
continue;
} else {
var vec__17826_18264 = cljs.core.first(seq__17811_18258__$1);
var script_tag_18265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17826_18264,(0),null);
var script_body_18266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17826_18264,(1),null);
eval(script_body_18266);


var G__18267 = cljs.core.next(seq__17811_18258__$1);
var G__18268 = null;
var G__18269 = (0);
var G__18270 = (0);
seq__17811_18246 = G__18267;
chunk__17812_18247 = G__18268;
count__17813_18248 = G__18269;
i__17814_18249 = G__18270;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17829){
var vec__17830 = p__17829;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17830,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17830,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__17834 = arguments.length;
switch (G__17834) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__17844 = cljs.core.seq(style_keys);
var chunk__17845 = null;
var count__17846 = (0);
var i__17847 = (0);
while(true){
if((i__17847 < count__17846)){
var it = chunk__17845.cljs$core$IIndexed$_nth$arity$2(null,i__17847);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18273 = seq__17844;
var G__18274 = chunk__17845;
var G__18275 = count__17846;
var G__18276 = (i__17847 + (1));
seq__17844 = G__18273;
chunk__17845 = G__18274;
count__17846 = G__18275;
i__17847 = G__18276;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17844);
if(temp__5804__auto__){
var seq__17844__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17844__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17844__$1);
var G__18278 = cljs.core.chunk_rest(seq__17844__$1);
var G__18279 = c__5568__auto__;
var G__18280 = cljs.core.count(c__5568__auto__);
var G__18281 = (0);
seq__17844 = G__18278;
chunk__17845 = G__18279;
count__17846 = G__18280;
i__17847 = G__18281;
continue;
} else {
var it = cljs.core.first(seq__17844__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18282 = cljs.core.next(seq__17844__$1);
var G__18283 = null;
var G__18284 = (0);
var G__18285 = (0);
seq__17844 = G__18282;
chunk__17845 = G__18283;
count__17846 = G__18284;
i__17847 = G__18285;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17856,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17875 = k17856;
var G__17875__$1 = (((G__17875 instanceof cljs.core.Keyword))?G__17875.fqn:null);
switch (G__17875__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17856,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17876){
var vec__17877 = p__17876;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17855){
var self__ = this;
var G__17855__$1 = this;
return (new cljs.core.RecordIter((0),G__17855__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17857,other17858){
var self__ = this;
var this17857__$1 = this;
return (((!((other17858 == null)))) && ((((this17857__$1.constructor === other17858.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17857__$1.x,other17858.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17857__$1.y,other17858.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17857__$1.__extmap,other17858.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17856){
var self__ = this;
var this__5350__auto____$1 = this;
var G__17887 = k17856;
var G__17887__$1 = (((G__17887 instanceof cljs.core.Keyword))?G__17887.fqn:null);
switch (G__17887__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17856);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17855){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__17888 = cljs.core.keyword_identical_QMARK_;
var expr__17889 = k__5352__auto__;
if(cljs.core.truth_((pred__17888.cljs$core$IFn$_invoke$arity$2 ? pred__17888.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__17889) : pred__17888.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__17889)))){
return (new shadow.dom.Coordinate(G__17855,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17888.cljs$core$IFn$_invoke$arity$2 ? pred__17888.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__17889) : pred__17888.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__17889)))){
return (new shadow.dom.Coordinate(self__.x,G__17855,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17855),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17855){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__17855,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__17859){
var extmap__5385__auto__ = (function (){var G__17897 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17859,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__17859)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17897);
} else {
return G__17897;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__17859),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__17859),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17908,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17916 = k17908;
var G__17916__$1 = (((G__17916 instanceof cljs.core.Keyword))?G__17916.fqn:null);
switch (G__17916__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17908,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17919){
var vec__17921 = p__17919;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17921,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17921,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17907){
var self__ = this;
var G__17907__$1 = this;
return (new cljs.core.RecordIter((0),G__17907__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17909,other17910){
var self__ = this;
var this17909__$1 = this;
return (((!((other17910 == null)))) && ((((this17909__$1.constructor === other17910.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17909__$1.w,other17910.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17909__$1.h,other17910.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17909__$1.__extmap,other17910.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17908){
var self__ = this;
var this__5350__auto____$1 = this;
var G__17928 = k17908;
var G__17928__$1 = (((G__17928 instanceof cljs.core.Keyword))?G__17928.fqn:null);
switch (G__17928__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17908);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17907){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__17930 = cljs.core.keyword_identical_QMARK_;
var expr__17931 = k__5352__auto__;
if(cljs.core.truth_((pred__17930.cljs$core$IFn$_invoke$arity$2 ? pred__17930.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__17931) : pred__17930.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__17931)))){
return (new shadow.dom.Size(G__17907,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17930.cljs$core$IFn$_invoke$arity$2 ? pred__17930.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__17931) : pred__17930.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__17931)))){
return (new shadow.dom.Size(self__.w,G__17907,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17907),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17907){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__17907,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__17911){
var extmap__5385__auto__ = (function (){var G__17934 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17911,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__17911)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17934);
} else {
return G__17934;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__17911),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__17911),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__18316 = (i + (1));
var G__18317 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__18316;
ret = G__18317;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17948){
var vec__17949 = p__17948;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17949,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17949,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__17953 = arguments.length;
switch (G__17953) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__18319 = ps;
var G__18320 = (i + (1));
el__$1 = G__18319;
i = G__18320;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__17963 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17963,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17963,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17963,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__17966_18325 = cljs.core.seq(props);
var chunk__17967_18326 = null;
var count__17968_18327 = (0);
var i__17969_18328 = (0);
while(true){
if((i__17969_18328 < count__17968_18327)){
var vec__17978_18329 = chunk__17967_18326.cljs$core$IIndexed$_nth$arity$2(null,i__17969_18328);
var k_18330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17978_18329,(0),null);
var v_18331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17978_18329,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_18330);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18330),v_18331);


var G__18332 = seq__17966_18325;
var G__18333 = chunk__17967_18326;
var G__18334 = count__17968_18327;
var G__18335 = (i__17969_18328 + (1));
seq__17966_18325 = G__18332;
chunk__17967_18326 = G__18333;
count__17968_18327 = G__18334;
i__17969_18328 = G__18335;
continue;
} else {
var temp__5804__auto___18336 = cljs.core.seq(seq__17966_18325);
if(temp__5804__auto___18336){
var seq__17966_18337__$1 = temp__5804__auto___18336;
if(cljs.core.chunked_seq_QMARK_(seq__17966_18337__$1)){
var c__5568__auto___18338 = cljs.core.chunk_first(seq__17966_18337__$1);
var G__18339 = cljs.core.chunk_rest(seq__17966_18337__$1);
var G__18340 = c__5568__auto___18338;
var G__18341 = cljs.core.count(c__5568__auto___18338);
var G__18342 = (0);
seq__17966_18325 = G__18339;
chunk__17967_18326 = G__18340;
count__17968_18327 = G__18341;
i__17969_18328 = G__18342;
continue;
} else {
var vec__17981_18343 = cljs.core.first(seq__17966_18337__$1);
var k_18344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17981_18343,(0),null);
var v_18345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17981_18343,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_18344);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18344),v_18345);


var G__18346 = cljs.core.next(seq__17966_18337__$1);
var G__18347 = null;
var G__18348 = (0);
var G__18349 = (0);
seq__17966_18325 = G__18346;
chunk__17967_18326 = G__18347;
count__17968_18327 = G__18348;
i__17969_18328 = G__18349;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__17985 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17985,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17985,(1),null);
var seq__17988_18353 = cljs.core.seq(node_children);
var chunk__17990_18354 = null;
var count__17991_18355 = (0);
var i__17992_18356 = (0);
while(true){
if((i__17992_18356 < count__17991_18355)){
var child_struct_18358 = chunk__17990_18354.cljs$core$IIndexed$_nth$arity$2(null,i__17992_18356);
if((!((child_struct_18358 == null)))){
if(typeof child_struct_18358 === 'string'){
var text_18360 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18360),child_struct_18358].join(''));
} else {
var children_18362 = shadow.dom.svg_node(child_struct_18358);
if(cljs.core.seq_QMARK_(children_18362)){
var seq__18013_18363 = cljs.core.seq(children_18362);
var chunk__18015_18364 = null;
var count__18016_18365 = (0);
var i__18017_18366 = (0);
while(true){
if((i__18017_18366 < count__18016_18365)){
var child_18367 = chunk__18015_18364.cljs$core$IIndexed$_nth$arity$2(null,i__18017_18366);
if(cljs.core.truth_(child_18367)){
node.appendChild(child_18367);


var G__18368 = seq__18013_18363;
var G__18369 = chunk__18015_18364;
var G__18370 = count__18016_18365;
var G__18371 = (i__18017_18366 + (1));
seq__18013_18363 = G__18368;
chunk__18015_18364 = G__18369;
count__18016_18365 = G__18370;
i__18017_18366 = G__18371;
continue;
} else {
var G__18372 = seq__18013_18363;
var G__18373 = chunk__18015_18364;
var G__18374 = count__18016_18365;
var G__18375 = (i__18017_18366 + (1));
seq__18013_18363 = G__18372;
chunk__18015_18364 = G__18373;
count__18016_18365 = G__18374;
i__18017_18366 = G__18375;
continue;
}
} else {
var temp__5804__auto___18376 = cljs.core.seq(seq__18013_18363);
if(temp__5804__auto___18376){
var seq__18013_18377__$1 = temp__5804__auto___18376;
if(cljs.core.chunked_seq_QMARK_(seq__18013_18377__$1)){
var c__5568__auto___18378 = cljs.core.chunk_first(seq__18013_18377__$1);
var G__18379 = cljs.core.chunk_rest(seq__18013_18377__$1);
var G__18380 = c__5568__auto___18378;
var G__18381 = cljs.core.count(c__5568__auto___18378);
var G__18382 = (0);
seq__18013_18363 = G__18379;
chunk__18015_18364 = G__18380;
count__18016_18365 = G__18381;
i__18017_18366 = G__18382;
continue;
} else {
var child_18383 = cljs.core.first(seq__18013_18377__$1);
if(cljs.core.truth_(child_18383)){
node.appendChild(child_18383);


var G__18384 = cljs.core.next(seq__18013_18377__$1);
var G__18385 = null;
var G__18386 = (0);
var G__18387 = (0);
seq__18013_18363 = G__18384;
chunk__18015_18364 = G__18385;
count__18016_18365 = G__18386;
i__18017_18366 = G__18387;
continue;
} else {
var G__18388 = cljs.core.next(seq__18013_18377__$1);
var G__18389 = null;
var G__18390 = (0);
var G__18391 = (0);
seq__18013_18363 = G__18388;
chunk__18015_18364 = G__18389;
count__18016_18365 = G__18390;
i__18017_18366 = G__18391;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18362);
}
}


var G__18392 = seq__17988_18353;
var G__18393 = chunk__17990_18354;
var G__18394 = count__17991_18355;
var G__18395 = (i__17992_18356 + (1));
seq__17988_18353 = G__18392;
chunk__17990_18354 = G__18393;
count__17991_18355 = G__18394;
i__17992_18356 = G__18395;
continue;
} else {
var G__18396 = seq__17988_18353;
var G__18397 = chunk__17990_18354;
var G__18398 = count__17991_18355;
var G__18399 = (i__17992_18356 + (1));
seq__17988_18353 = G__18396;
chunk__17990_18354 = G__18397;
count__17991_18355 = G__18398;
i__17992_18356 = G__18399;
continue;
}
} else {
var temp__5804__auto___18400 = cljs.core.seq(seq__17988_18353);
if(temp__5804__auto___18400){
var seq__17988_18401__$1 = temp__5804__auto___18400;
if(cljs.core.chunked_seq_QMARK_(seq__17988_18401__$1)){
var c__5568__auto___18402 = cljs.core.chunk_first(seq__17988_18401__$1);
var G__18403 = cljs.core.chunk_rest(seq__17988_18401__$1);
var G__18404 = c__5568__auto___18402;
var G__18405 = cljs.core.count(c__5568__auto___18402);
var G__18406 = (0);
seq__17988_18353 = G__18403;
chunk__17990_18354 = G__18404;
count__17991_18355 = G__18405;
i__17992_18356 = G__18406;
continue;
} else {
var child_struct_18407 = cljs.core.first(seq__17988_18401__$1);
if((!((child_struct_18407 == null)))){
if(typeof child_struct_18407 === 'string'){
var text_18408 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18408),child_struct_18407].join(''));
} else {
var children_18410 = shadow.dom.svg_node(child_struct_18407);
if(cljs.core.seq_QMARK_(children_18410)){
var seq__18019_18411 = cljs.core.seq(children_18410);
var chunk__18021_18412 = null;
var count__18022_18413 = (0);
var i__18023_18414 = (0);
while(true){
if((i__18023_18414 < count__18022_18413)){
var child_18415 = chunk__18021_18412.cljs$core$IIndexed$_nth$arity$2(null,i__18023_18414);
if(cljs.core.truth_(child_18415)){
node.appendChild(child_18415);


var G__18416 = seq__18019_18411;
var G__18417 = chunk__18021_18412;
var G__18418 = count__18022_18413;
var G__18419 = (i__18023_18414 + (1));
seq__18019_18411 = G__18416;
chunk__18021_18412 = G__18417;
count__18022_18413 = G__18418;
i__18023_18414 = G__18419;
continue;
} else {
var G__18421 = seq__18019_18411;
var G__18422 = chunk__18021_18412;
var G__18423 = count__18022_18413;
var G__18424 = (i__18023_18414 + (1));
seq__18019_18411 = G__18421;
chunk__18021_18412 = G__18422;
count__18022_18413 = G__18423;
i__18023_18414 = G__18424;
continue;
}
} else {
var temp__5804__auto___18425__$1 = cljs.core.seq(seq__18019_18411);
if(temp__5804__auto___18425__$1){
var seq__18019_18426__$1 = temp__5804__auto___18425__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18019_18426__$1)){
var c__5568__auto___18427 = cljs.core.chunk_first(seq__18019_18426__$1);
var G__18428 = cljs.core.chunk_rest(seq__18019_18426__$1);
var G__18429 = c__5568__auto___18427;
var G__18430 = cljs.core.count(c__5568__auto___18427);
var G__18431 = (0);
seq__18019_18411 = G__18428;
chunk__18021_18412 = G__18429;
count__18022_18413 = G__18430;
i__18023_18414 = G__18431;
continue;
} else {
var child_18432 = cljs.core.first(seq__18019_18426__$1);
if(cljs.core.truth_(child_18432)){
node.appendChild(child_18432);


var G__18433 = cljs.core.next(seq__18019_18426__$1);
var G__18434 = null;
var G__18435 = (0);
var G__18436 = (0);
seq__18019_18411 = G__18433;
chunk__18021_18412 = G__18434;
count__18022_18413 = G__18435;
i__18023_18414 = G__18436;
continue;
} else {
var G__18438 = cljs.core.next(seq__18019_18426__$1);
var G__18439 = null;
var G__18440 = (0);
var G__18441 = (0);
seq__18019_18411 = G__18438;
chunk__18021_18412 = G__18439;
count__18022_18413 = G__18440;
i__18023_18414 = G__18441;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18410);
}
}


var G__18443 = cljs.core.next(seq__17988_18401__$1);
var G__18444 = null;
var G__18445 = (0);
var G__18446 = (0);
seq__17988_18353 = G__18443;
chunk__17990_18354 = G__18444;
count__17991_18355 = G__18445;
i__17992_18356 = G__18446;
continue;
} else {
var G__18447 = cljs.core.next(seq__17988_18401__$1);
var G__18448 = null;
var G__18449 = (0);
var G__18450 = (0);
seq__17988_18353 = G__18447;
chunk__17990_18354 = G__18448;
count__17991_18355 = G__18449;
i__17992_18356 = G__18450;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18452 = arguments.length;
var i__5770__auto___18453 = (0);
while(true){
if((i__5770__auto___18453 < len__5769__auto___18452)){
args__5775__auto__.push((arguments[i__5770__auto___18453]));

var G__18454 = (i__5770__auto___18453 + (1));
i__5770__auto___18453 = G__18454;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18031){
var G__18032 = cljs.core.first(seq18031);
var seq18031__$1 = cljs.core.next(seq18031);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18032,seq18031__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18034 = arguments.length;
switch (G__18034) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__15335__auto___18458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15336__auto__ = (function (){var switch__15106__auto__ = (function (state_18039){
var state_val_18040 = (state_18039[(1)]);
if((state_val_18040 === (1))){
var state_18039__$1 = state_18039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18039__$1,(2),once_or_cleanup);
} else {
if((state_val_18040 === (2))){
var inst_18036 = (state_18039[(2)]);
var inst_18037 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18039__$1 = (function (){var statearr_18042 = state_18039;
(statearr_18042[(7)] = inst_18036);

return statearr_18042;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18039__$1,inst_18037);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__15107__auto__ = null;
var shadow$dom$state_machine__15107__auto____0 = (function (){
var statearr_18043 = [null,null,null,null,null,null,null,null];
(statearr_18043[(0)] = shadow$dom$state_machine__15107__auto__);

(statearr_18043[(1)] = (1));

return statearr_18043;
});
var shadow$dom$state_machine__15107__auto____1 = (function (state_18039){
while(true){
var ret_value__15108__auto__ = (function (){try{while(true){
var result__15109__auto__ = switch__15106__auto__(state_18039);
if(cljs.core.keyword_identical_QMARK_(result__15109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15109__auto__;
}
break;
}
}catch (e18045){var ex__15110__auto__ = e18045;
var statearr_18046_18460 = state_18039;
(statearr_18046_18460[(2)] = ex__15110__auto__);


if(cljs.core.seq((state_18039[(4)]))){
var statearr_18047_18461 = state_18039;
(statearr_18047_18461[(1)] = cljs.core.first((state_18039[(4)])));

} else {
throw ex__15110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18462 = state_18039;
state_18039 = G__18462;
continue;
} else {
return ret_value__15108__auto__;
}
break;
}
});
shadow$dom$state_machine__15107__auto__ = function(state_18039){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__15107__auto____0.call(this);
case 1:
return shadow$dom$state_machine__15107__auto____1.call(this,state_18039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__15107__auto____0;
shadow$dom$state_machine__15107__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__15107__auto____1;
return shadow$dom$state_machine__15107__auto__;
})()
})();
var state__15337__auto__ = (function (){var statearr_18051 = f__15336__auto__();
(statearr_18051[(6)] = c__15335__auto___18458);

return statearr_18051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15337__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
