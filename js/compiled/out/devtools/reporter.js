// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__31516__auto__ = [];
var len__31509__auto___43792 = arguments.length;
var i__31510__auto___43793 = (0);
while(true){
if((i__31510__auto___43793 < len__31509__auto___43792)){
args__31516__auto__.push((arguments[i__31510__auto___43793]));

var G__43794 = (i__31510__auto___43793 + (1));
i__31510__auto___43793 = G__43794;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((1) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31517__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__43787){
var vec__43788 = p__43787;
var context = cljs.core.nth.call(null,vec__43788,(0),null);
var footer = cljs.core.nth.call(null,vec__43788,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__30230__auto__ = e.message;
if(cljs.core.truth_(or__30230__auto__)){
return or__30230__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):".")),"\n\n"].join('');
var footer_msg = ((!((footer == null)))?footer:["\n\n","---\n","Please report the issue here: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = (c["groupCollapsed"]);
var log = (c["log"]);
var group_end = (c["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e43791){var e__$1 = e43791;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq43785){
var G__43786 = cljs.core.first.call(null,seq43785);
var seq43785__$1 = cljs.core.next.call(null,seq43785);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43786,seq43785__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1514673231490
