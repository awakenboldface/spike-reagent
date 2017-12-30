// Compiled by ClojureScript 1.9.946 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__32872,handler){
var map__32873 = p__32872;
var map__32873__$1 = ((((!((map__32873 == null)))?((((map__32873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32873.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32873):map__32873);
var uri = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__32873,map__32873__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__32871_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__32871_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__32873,map__32873__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___32885 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___32885)){
var response_type_32886 = temp__5457__auto___32885;
this$__$1.responseType = cljs.core.name.call(null,response_type_32886);
} else {
}

var seq__32875_32887 = cljs.core.seq.call(null,headers);
var chunk__32876_32888 = null;
var count__32877_32889 = (0);
var i__32878_32890 = (0);
while(true){
if((i__32878_32890 < count__32877_32889)){
var vec__32879_32891 = cljs.core._nth.call(null,chunk__32876_32888,i__32878_32890);
var k_32892 = cljs.core.nth.call(null,vec__32879_32891,(0),null);
var v_32893 = cljs.core.nth.call(null,vec__32879_32891,(1),null);
this$__$1.setRequestHeader(k_32892,v_32893);

var G__32894 = seq__32875_32887;
var G__32895 = chunk__32876_32888;
var G__32896 = count__32877_32889;
var G__32897 = (i__32878_32890 + (1));
seq__32875_32887 = G__32894;
chunk__32876_32888 = G__32895;
count__32877_32889 = G__32896;
i__32878_32890 = G__32897;
continue;
} else {
var temp__5457__auto___32898 = cljs.core.seq.call(null,seq__32875_32887);
if(temp__5457__auto___32898){
var seq__32875_32899__$1 = temp__5457__auto___32898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32875_32899__$1)){
var c__31161__auto___32900 = cljs.core.chunk_first.call(null,seq__32875_32899__$1);
var G__32901 = cljs.core.chunk_rest.call(null,seq__32875_32899__$1);
var G__32902 = c__31161__auto___32900;
var G__32903 = cljs.core.count.call(null,c__31161__auto___32900);
var G__32904 = (0);
seq__32875_32887 = G__32901;
chunk__32876_32888 = G__32902;
count__32877_32889 = G__32903;
i__32878_32890 = G__32904;
continue;
} else {
var vec__32882_32905 = cljs.core.first.call(null,seq__32875_32899__$1);
var k_32906 = cljs.core.nth.call(null,vec__32882_32905,(0),null);
var v_32907 = cljs.core.nth.call(null,vec__32882_32905,(1),null);
this$__$1.setRequestHeader(k_32906,v_32907);

var G__32908 = cljs.core.next.call(null,seq__32875_32899__$1);
var G__32909 = null;
var G__32910 = (0);
var G__32911 = (0);
seq__32875_32887 = G__32908;
chunk__32876_32888 = G__32909;
count__32877_32889 = G__32910;
i__32878_32890 = G__32911;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__30230__auto__ = body;
if(cljs.core.truth_(or__30230__auto__)){
return or__30230__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1514673219523
