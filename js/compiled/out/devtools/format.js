// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__30963__auto__ = (((value == null))?null:value);
var m__30964__auto__ = (devtools.format._header[goog.typeOf(x__30963__auto__)]);
if(!((m__30964__auto__ == null))){
return m__30964__auto__.call(null,value);
} else {
var m__30964__auto____$1 = (devtools.format._header["_"]);
if(!((m__30964__auto____$1 == null))){
return m__30964__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__30963__auto__ = (((value == null))?null:value);
var m__30964__auto__ = (devtools.format._has_body[goog.typeOf(x__30963__auto__)]);
if(!((m__30964__auto__ == null))){
return m__30964__auto__.call(null,value);
} else {
var m__30964__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30964__auto____$1 == null))){
return m__30964__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__30963__auto__ = (((value == null))?null:value);
var m__30964__auto__ = (devtools.format._body[goog.typeOf(x__30963__auto__)]);
if(!((m__30964__auto__ == null))){
return m__30964__auto__.call(null,value);
} else {
var m__30964__auto____$1 = (devtools.format._body["_"]);
if(!((m__30964__auto____$1 == null))){
return m__30964__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41993 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41993["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41994 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41994["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41995 = temp__5455__auto____$2;
return (o41995["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41996 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41996["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o41997 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o41997["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o41998 = temp__5455__auto____$2;
return (o41998["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o41999 = temp__5455__auto__;
var temp__5455__auto____$1 = (o41999["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o42000 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o42000["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o42001 = temp__5455__auto____$2;
return (o42001["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o42002 = temp__5455__auto__;
var temp__5455__auto____$1 = (o42002["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o42003 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o42003["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o42004 = temp__5455__auto____$2;
return (o42004["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o42005 = temp__5455__auto__;
var temp__5455__auto____$1 = (o42005["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o42006 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o42006["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o42007 = temp__5455__auto____$2;
return (o42007["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o42008 = temp__5455__auto__;
var temp__5455__auto____$1 = (o42008["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o42009 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o42009["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o42010 = temp__5455__auto____$2;
return (o42010["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o42011 = temp__5455__auto__;
var temp__5455__auto____$1 = (o42011["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o42012 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o42012["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o42013 = temp__5455__auto____$2;
return (o42013["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__31516__auto__ = [];
var len__31509__auto___42015 = arguments.length;
var i__31510__auto___42016 = (0);
while(true){
if((i__31510__auto___42016 < len__31509__auto___42015)){
args__31516__auto__.push((arguments[i__31510__auto___42016]));

var G__42017 = (i__31510__auto___42016 + (1));
i__31510__auto___42016 = G__42017;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq42014){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42014));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31516__auto__ = [];
var len__31509__auto___42019 = arguments.length;
var i__31510__auto___42020 = (0);
while(true){
if((i__31510__auto___42020 < len__31509__auto___42019)){
args__31516__auto__.push((arguments[i__31510__auto___42020]));

var G__42021 = (i__31510__auto___42020 + (1));
i__31510__auto___42020 = G__42021;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq42018){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42018));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31516__auto__ = [];
var len__31509__auto___42023 = arguments.length;
var i__31510__auto___42024 = (0);
while(true){
if((i__31510__auto___42024 < len__31509__auto___42023)){
args__31516__auto__.push((arguments[i__31510__auto___42024]));

var G__42025 = (i__31510__auto___42024 + (1));
i__31510__auto___42024 = G__42025;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq42022){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42022));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31516__auto__ = [];
var len__31509__auto___42027 = arguments.length;
var i__31510__auto___42028 = (0);
while(true){
if((i__31510__auto___42028 < len__31509__auto___42027)){
args__31516__auto__.push((arguments[i__31510__auto___42028]));

var G__42029 = (i__31510__auto___42028 + (1));
i__31510__auto___42028 = G__42029;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq42026){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42026));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31516__auto__ = [];
var len__31509__auto___42031 = arguments.length;
var i__31510__auto___42032 = (0);
while(true){
if((i__31510__auto___42032 < len__31509__auto___42031)){
args__31516__auto__.push((arguments[i__31510__auto___42032]));

var G__42033 = (i__31510__auto___42032 + (1));
i__31510__auto___42032 = G__42033;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq42030){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42030));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31516__auto__ = [];
var len__31509__auto___42035 = arguments.length;
var i__31510__auto___42036 = (0);
while(true){
if((i__31510__auto___42036 < len__31509__auto___42035)){
args__31516__auto__.push((arguments[i__31510__auto___42036]));

var G__42037 = (i__31510__auto___42036 + (1));
i__31510__auto___42036 = G__42037;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq42034){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42034));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31516__auto__ = [];
var len__31509__auto___42039 = arguments.length;
var i__31510__auto___42040 = (0);
while(true){
if((i__31510__auto___42040 < len__31509__auto___42039)){
args__31516__auto__.push((arguments[i__31510__auto___42040]));

var G__42041 = (i__31510__auto___42040 + (1));
i__31510__auto___42040 = G__42041;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq42038){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42038));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31516__auto__ = [];
var len__31509__auto___42049 = arguments.length;
var i__31510__auto___42050 = (0);
while(true){
if((i__31510__auto___42050 < len__31509__auto___42049)){
args__31516__auto__.push((arguments[i__31510__auto___42050]));

var G__42051 = (i__31510__auto___42050 + (1));
i__31510__auto___42050 = G__42051;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((1) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31517__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__42045){
var vec__42046 = p__42045;
var state_override = cljs.core.nth.call(null,vec__42046,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__42046,state_override){
return (function (p1__42042_SHARP_){
return cljs.core.merge.call(null,p1__42042_SHARP_,state_override);
});})(vec__42046,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq42043){
var G__42044 = cljs.core.first.call(null,seq42043);
var seq42043__$1 = cljs.core.next.call(null,seq42043);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__42044,seq42043__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31516__auto__ = [];
var len__31509__auto___42053 = arguments.length;
var i__31510__auto___42054 = (0);
while(true){
if((i__31510__auto___42054 < len__31509__auto___42053)){
args__31516__auto__.push((arguments[i__31510__auto___42054]));

var G__42055 = (i__31510__auto___42054 + (1));
i__31510__auto___42054 = G__42055;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq42052){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42052));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31516__auto__ = [];
var len__31509__auto___42058 = arguments.length;
var i__31510__auto___42059 = (0);
while(true){
if((i__31510__auto___42059 < len__31509__auto___42058)){
args__31516__auto__.push((arguments[i__31510__auto___42059]));

var G__42060 = (i__31510__auto___42059 + (1));
i__31510__auto___42059 = G__42060;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((1) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31517__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq42056){
var G__42057 = cljs.core.first.call(null,seq42056);
var seq42056__$1 = cljs.core.next.call(null,seq42056);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__42057,seq42056__$1);
});


//# sourceMappingURL=format.js.map?rel=1514673228708
