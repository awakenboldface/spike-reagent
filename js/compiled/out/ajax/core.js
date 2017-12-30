// Compiled by ClojureScript 1.9.946 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__31516__auto__ = [];
var len__31509__auto___33444 = arguments.length;
var i__31510__auto___33445 = (0);
while(true){
if((i__31510__auto___33445 < len__31509__auto___33444)){
args__31516__auto__.push((arguments[i__31510__auto___33445]));

var G__33446 = (i__31510__auto___33445 + (1));
i__31510__auto___33445 = G__33446;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((1) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31517__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32727__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__32727__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32727__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq33442){
var G__33443 = cljs.core.first.call(null,seq33442);
var seq33442__$1 = cljs.core.next.call(null,seq33442);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__33443,seq33442__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__31516__auto__ = [];
var len__31509__auto___33449 = arguments.length;
var i__31510__auto___33450 = (0);
while(true){
if((i__31510__auto___33450 < len__31509__auto___33449)){
args__31516__auto__.push((arguments[i__31510__auto___33450]));

var G__33451 = (i__31510__auto___33450 + (1));
i__31510__auto___33450 = G__33451;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((1) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31517__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32727__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__32727__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32727__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq33447){
var G__33448 = cljs.core.first.call(null,seq33447);
var seq33447__$1 = cljs.core.next.call(null,seq33447);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__33448,seq33447__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__31516__auto__ = [];
var len__31509__auto___33454 = arguments.length;
var i__31510__auto___33455 = (0);
while(true){
if((i__31510__auto___33455 < len__31509__auto___33454)){
args__31516__auto__.push((arguments[i__31510__auto___33455]));

var G__33456 = (i__31510__auto___33455 + (1));
i__31510__auto___33455 = G__33456;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((1) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31517__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32727__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__32727__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32727__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq33452){
var G__33453 = cljs.core.first.call(null,seq33452);
var seq33452__$1 = cljs.core.next.call(null,seq33452);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__33453,seq33452__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__31516__auto__ = [];
var len__31509__auto___33459 = arguments.length;
var i__31510__auto___33460 = (0);
while(true){
if((i__31510__auto___33460 < len__31509__auto___33459)){
args__31516__auto__.push((arguments[i__31510__auto___33460]));

var G__33461 = (i__31510__auto___33460 + (1));
i__31510__auto___33460 = G__33461;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((1) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31517__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32727__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__32727__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32727__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq33457){
var G__33458 = cljs.core.first.call(null,seq33457);
var seq33457__$1 = cljs.core.next.call(null,seq33457);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__33458,seq33457__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__31516__auto__ = [];
var len__31509__auto___33464 = arguments.length;
var i__31510__auto___33465 = (0);
while(true){
if((i__31510__auto___33465 < len__31509__auto___33464)){
args__31516__auto__.push((arguments[i__31510__auto___33465]));

var G__33466 = (i__31510__auto___33465 + (1));
i__31510__auto___33465 = G__33466;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((1) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31517__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32727__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__32727__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32727__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq33462){
var G__33463 = cljs.core.first.call(null,seq33462);
var seq33462__$1 = cljs.core.next.call(null,seq33462);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__33463,seq33462__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__31516__auto__ = [];
var len__31509__auto___33469 = arguments.length;
var i__31510__auto___33470 = (0);
while(true){
if((i__31510__auto___33470 < len__31509__auto___33469)){
args__31516__auto__.push((arguments[i__31510__auto___33470]));

var G__33471 = (i__31510__auto___33470 + (1));
i__31510__auto___33470 = G__33471;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((1) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31517__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32727__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__32727__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32727__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq33467){
var G__33468 = cljs.core.first.call(null,seq33467);
var seq33467__$1 = cljs.core.next.call(null,seq33467);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__33468,seq33467__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__31516__auto__ = [];
var len__31509__auto___33474 = arguments.length;
var i__31510__auto___33475 = (0);
while(true){
if((i__31510__auto___33475 < len__31509__auto___33474)){
args__31516__auto__.push((arguments[i__31510__auto___33475]));

var G__33476 = (i__31510__auto___33475 + (1));
i__31510__auto___33475 = G__33476;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((1) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31517__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32727__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__32727__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32727__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq33472){
var G__33473 = cljs.core.first.call(null,seq33472);
var seq33472__$1 = cljs.core.next.call(null,seq33472);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__33473,seq33472__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__31516__auto__ = [];
var len__31509__auto___33479 = arguments.length;
var i__31510__auto___33480 = (0);
while(true){
if((i__31510__auto___33480 < len__31509__auto___33479)){
args__31516__auto__.push((arguments[i__31510__auto___33480]));

var G__33481 = (i__31510__auto___33480 + (1));
i__31510__auto___33480 = G__33481;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((1) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31517__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32727__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__32727__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32727__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq33477){
var G__33478 = cljs.core.first.call(null,seq33477);
var seq33477__$1 = cljs.core.next.call(null,seq33477);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__33478,seq33477__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__31516__auto__ = [];
var len__31509__auto___33484 = arguments.length;
var i__31510__auto___33485 = (0);
while(true){
if((i__31510__auto___33485 < len__31509__auto___33484)){
args__31516__auto__.push((arguments[i__31510__auto___33485]));

var G__33486 = (i__31510__auto___33485 + (1));
i__31510__auto___33485 = G__33486;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((1) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31517__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32727__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__32727__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32727__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq33482){
var G__33483 = cljs.core.first.call(null,seq33482);
var seq33482__$1 = cljs.core.next.call(null,seq33482);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__33483,seq33482__$1);
});


//# sourceMappingURL=core.js.map?rel=1514673220066
