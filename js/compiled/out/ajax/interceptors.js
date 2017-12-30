// Compiled by ClojureScript 1.9.946 {}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30918__auto__,k__30919__auto__){
var self__ = this;
var this__30918__auto____$1 = this;
return this__30918__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30919__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30920__auto__,k32736,else__30921__auto__){
var self__ = this;
var this__30920__auto____$1 = this;
var G__32740 = k32736;
var G__32740__$1 = (((G__32740 instanceof cljs.core.Keyword))?G__32740.fqn:null);
switch (G__32740__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32736,else__30921__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__32741,opts){
var self__ = this;
var map__32742 = p__32741;
var map__32742__$1 = ((((!((map__32742 == null)))?((((map__32742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32742):map__32742);
var request__$1 = cljs.core.get.call(null,map__32742__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__32744 = this;
var map__32744__$1 = ((((!((map__32744 == null)))?((((map__32744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32744):map__32744);
var request__$2 = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__32746,xhrio){
var self__ = this;
var map__32747 = p__32746;
var map__32747__$1 = ((((!((map__32747 == null)))?((((map__32747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32747):map__32747);
var response__$1 = cljs.core.get.call(null,map__32747__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__32749 = this;
var map__32749__$1 = ((((!((map__32749 == null)))?((((map__32749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32749):map__32749);
var response__$2 = cljs.core.get.call(null,map__32749__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30932__auto__,writer__30933__auto__,opts__30934__auto__){
var self__ = this;
var this__30932__auto____$1 = this;
var pr_pair__30935__auto__ = ((function (this__30932__auto____$1){
return (function (keyval__30936__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30933__auto__,cljs.core.pr_writer,""," ","",opts__30934__auto__,keyval__30936__auto__);
});})(this__30932__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30933__auto__,pr_pair__30935__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__30934__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32735){
var self__ = this;
var G__32735__$1 = this;
return (new cljs.core.RecordIter((0),G__32735__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30916__auto__){
var self__ = this;
var this__30916__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30913__auto__){
var self__ = this;
var this__30913__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30922__auto__){
var self__ = this;
var this__30922__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30914__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
var h__30686__auto__ = self__.__hash;
if(!((h__30686__auto__ == null))){
return h__30686__auto__;
} else {
var h__30686__auto____$1 = ((function (h__30686__auto__,this__30914__auto____$1){
return (function (coll__30915__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__30915__auto__));
});})(h__30686__auto__,this__30914__auto____$1))
.call(null,this__30914__auto____$1);
self__.__hash = h__30686__auto____$1;

return h__30686__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32737,other32738){
var self__ = this;
var this32737__$1 = this;
return (!((other32738 == null))) && ((this32737__$1.constructor === other32738.constructor)) && (cljs.core._EQ_.call(null,this32737__$1.name,other32738.name)) && (cljs.core._EQ_.call(null,this32737__$1.request,other32738.request)) && (cljs.core._EQ_.call(null,this32737__$1.response,other32738.response)) && (cljs.core._EQ_.call(null,this32737__$1.__extmap,other32738.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30927__auto__,k__30928__auto__){
var self__ = this;
var this__30927__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__30928__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30927__auto____$1),self__.__meta),k__30928__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30928__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30925__auto__,k__30926__auto__,G__32735){
var self__ = this;
var this__30925__auto____$1 = this;
var pred__32751 = cljs.core.keyword_identical_QMARK_;
var expr__32752 = k__30926__auto__;
if(cljs.core.truth_(pred__32751.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__32752))){
return (new ajax.interceptors.StandardInterceptor(G__32735,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32751.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__32752))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__32735,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32751.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__32752))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__32735,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30926__auto__,G__32735),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30930__auto__){
var self__ = this;
var this__30930__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30917__auto__,G__32735){
var self__ = this;
var this__30917__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__32735,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30923__auto__,entry__30924__auto__){
var self__ = this;
var this__30923__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30924__auto__)){
return this__30923__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30924__auto__,(0)),cljs.core._nth.call(null,entry__30924__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30923__auto____$1,entry__30924__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__30956__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__30956__auto__,writer__30957__auto__){
return cljs.core._write.call(null,writer__30957__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__32739){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__32739),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__32739),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__32739),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__32739,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__32755,xhrio){
var map__32756 = p__32755;
var map__32756__$1 = ((((!((map__32756 == null)))?((((map__32756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32756):map__32756);
var description = cljs.core.get.call(null,map__32756__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message.call(null,e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__31516__auto__ = [];
var len__31509__auto___32762 = arguments.length;
var i__31510__auto___32763 = (0);
while(true){
if((i__31510__auto___32763 < len__31509__auto___32762)){
args__31516__auto__.push((arguments[i__31510__auto___32763]));

var G__32764 = (i__31510__auto___32763 + (1));
i__31510__auto___32763 = G__32764;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((3) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31517__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq32758){
var G__32759 = cljs.core.first.call(null,seq32758);
var seq32758__$1 = cljs.core.next.call(null,seq32758);
var G__32760 = cljs.core.first.call(null,seq32758__$1);
var seq32758__$2 = cljs.core.next.call(null,seq32758__$1);
var G__32761 = cljs.core.first.call(null,seq32758__$2);
var seq32758__$3 = cljs.core.next.call(null,seq32758__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__32759,G__32760,G__32761,seq32758__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30918__auto__,k__30919__auto__){
var self__ = this;
var this__30918__auto____$1 = this;
return this__30918__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30919__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30920__auto__,k32767,else__30921__auto__){
var self__ = this;
var this__30920__auto____$1 = this;
var G__32771 = k32767;
var G__32771__$1 = (((G__32771 instanceof cljs.core.Keyword))?G__32771.fqn:null);
switch (G__32771__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32767,else__30921__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__32772,request){
var self__ = this;
var map__32773 = p__32772;
var map__32773__$1 = ((((!((map__32773 == null)))?((((map__32773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32773):map__32773);
var content_type__$1 = cljs.core.get.call(null,map__32773__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__32775 = this;
var map__32775__$1 = ((((!((map__32775 == null)))?((((map__32775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32775):map__32775);
var content_type__$2 = cljs.core.get.call(null,map__32775__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__32775,map__32775__$1,content_type__$2,map__32773,map__32773__$1,content_type__$1){
return (function (p1__32765_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__30230__auto__ = p1__32765_SHARP_;
if(cljs.core.truth_(or__30230__auto__)){
return or__30230__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__32775,map__32775__$1,content_type__$2,map__32773,map__32773__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__32777,xhrio){
var self__ = this;
var map__32778 = p__32777;
var map__32778__$1 = ((((!((map__32778 == null)))?((((map__32778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32778):map__32778);
var format = map__32778__$1;
var read__$1 = cljs.core.get.call(null,map__32778__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__32780 = this;
var map__32780__$1 = ((((!((map__32780 == null)))?((((map__32780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32780):map__32780);
var format__$1 = map__32780__$1;
var read__$2 = cljs.core.get.call(null,map__32780__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__32783 = status;
switch (G__32783) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e32784){if((e32784 instanceof Object)){
var e = e32784;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e32784;

}
}
}
}catch (e32782){if((e32782 instanceof Object)){
var e = e32782;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e32782;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30932__auto__,writer__30933__auto__,opts__30934__auto__){
var self__ = this;
var this__30932__auto____$1 = this;
var pr_pair__30935__auto__ = ((function (this__30932__auto____$1){
return (function (keyval__30936__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30933__auto__,cljs.core.pr_writer,""," ","",opts__30934__auto__,keyval__30936__auto__);
});})(this__30932__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30933__auto__,pr_pair__30935__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__30934__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32766){
var self__ = this;
var G__32766__$1 = this;
return (new cljs.core.RecordIter((0),G__32766__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30916__auto__){
var self__ = this;
var this__30916__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30913__auto__){
var self__ = this;
var this__30913__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30922__auto__){
var self__ = this;
var this__30922__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30914__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
var h__30686__auto__ = self__.__hash;
if(!((h__30686__auto__ == null))){
return h__30686__auto__;
} else {
var h__30686__auto____$1 = ((function (h__30686__auto__,this__30914__auto____$1){
return (function (coll__30915__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__30915__auto__));
});})(h__30686__auto__,this__30914__auto____$1))
.call(null,this__30914__auto____$1);
self__.__hash = h__30686__auto____$1;

return h__30686__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32768,other32769){
var self__ = this;
var this32768__$1 = this;
return (!((other32769 == null))) && ((this32768__$1.constructor === other32769.constructor)) && (cljs.core._EQ_.call(null,this32768__$1.read,other32769.read)) && (cljs.core._EQ_.call(null,this32768__$1.description,other32769.description)) && (cljs.core._EQ_.call(null,this32768__$1.content_type,other32769.content_type)) && (cljs.core._EQ_.call(null,this32768__$1.__extmap,other32769.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30927__auto__,k__30928__auto__){
var self__ = this;
var this__30927__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__30928__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30927__auto____$1),self__.__meta),k__30928__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30928__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30925__auto__,k__30926__auto__,G__32766){
var self__ = this;
var this__30925__auto____$1 = this;
var pred__32785 = cljs.core.keyword_identical_QMARK_;
var expr__32786 = k__30926__auto__;
if(cljs.core.truth_(pred__32785.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__32786))){
return (new ajax.interceptors.ResponseFormat(G__32766,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32785.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__32786))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__32766,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32785.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__32786))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__32766,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30926__auto__,G__32766),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30930__auto__){
var self__ = this;
var this__30930__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30917__auto__,G__32766){
var self__ = this;
var this__30917__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__32766,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30923__auto__,entry__30924__auto__){
var self__ = this;
var this__30923__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30924__auto__)){
return this__30923__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30924__auto__,(0)),cljs.core._nth.call(null,entry__30924__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30923__auto____$1,entry__30924__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__30956__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__30956__auto__,writer__30957__auto__){
return cljs.core._write.call(null,writer__30957__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__32770){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__32770),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__32770),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__32770),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__32770,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30918__auto__,k__30919__auto__){
var self__ = this;
var this__30918__auto____$1 = this;
return this__30918__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30919__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30920__auto__,k32791,else__30921__auto__){
var self__ = this;
var this__30920__auto____$1 = this;
var G__32795 = k32791;
switch (G__32795) {
default:
return cljs.core.get.call(null,self__.__extmap,k32791,else__30921__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__32796){
var self__ = this;
var map__32797 = p__32796;
var map__32797__$1 = ((((!((map__32797 == null)))?((((map__32797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32797):map__32797);
var request = map__32797__$1;
var uri = cljs.core.get.call(null,map__32797__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__32797__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__32797__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__32797__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__32797__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__32799 = ajax.interceptors.get_request_format.call(null,format);
var map__32799__$1 = ((((!((map__32799 == null)))?((((map__32799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32799):map__32799);
var write = cljs.core.get.call(null,map__32799__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__32799__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__30230__auto__ = headers;
if(cljs.core.truth_(or__30230__auto__)){
return or__30230__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30932__auto__,writer__30933__auto__,opts__30934__auto__){
var self__ = this;
var this__30932__auto____$1 = this;
var pr_pair__30935__auto__ = ((function (this__30932__auto____$1){
return (function (keyval__30936__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30933__auto__,cljs.core.pr_writer,""," ","",opts__30934__auto__,keyval__30936__auto__);
});})(this__30932__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30933__auto__,pr_pair__30935__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__30934__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32790){
var self__ = this;
var G__32790__$1 = this;
return (new cljs.core.RecordIter((0),G__32790__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30916__auto__){
var self__ = this;
var this__30916__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30913__auto__){
var self__ = this;
var this__30913__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30922__auto__){
var self__ = this;
var this__30922__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30914__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
var h__30686__auto__ = self__.__hash;
if(!((h__30686__auto__ == null))){
return h__30686__auto__;
} else {
var h__30686__auto____$1 = ((function (h__30686__auto__,this__30914__auto____$1){
return (function (coll__30915__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__30915__auto__));
});})(h__30686__auto__,this__30914__auto____$1))
.call(null,this__30914__auto____$1);
self__.__hash = h__30686__auto____$1;

return h__30686__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32792,other32793){
var self__ = this;
var this32792__$1 = this;
return (!((other32793 == null))) && ((this32792__$1.constructor === other32793.constructor)) && (cljs.core._EQ_.call(null,this32792__$1.__extmap,other32793.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30927__auto__,k__30928__auto__){
var self__ = this;
var this__30927__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__30928__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30927__auto____$1),self__.__meta),k__30928__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30928__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30925__auto__,k__30926__auto__,G__32790){
var self__ = this;
var this__30925__auto____$1 = this;
var pred__32801 = cljs.core.keyword_identical_QMARK_;
var expr__32802 = k__30926__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30926__auto__,G__32790),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30930__auto__){
var self__ = this;
var this__30930__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30917__auto__,G__32790){
var self__ = this;
var this__30917__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__32790,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30923__auto__,entry__30924__auto__){
var self__ = this;
var this__30923__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30924__auto__)){
return this__30923__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30924__auto__,(0)),cljs.core._nth.call(null,entry__30924__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30923__auto____$1,entry__30924__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__30956__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__30956__auto__,writer__30957__auto__){
return cljs.core._write.call(null,writer__30957__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__32794){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__32794)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__32806 = arguments.length;
switch (G__32806) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__32807,uri){
var map__32808 = p__32807;
var map__32808__$1 = ((((!((map__32808 == null)))?((((map__32808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32808):map__32808);
var vec_strategy = cljs.core.get.call(null,map__32808__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__32808__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__32810){
var map__32811 = p__32810;
var map__32811__$1 = ((((!((map__32811 == null)))?((((map__32811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32811):map__32811);
var vec_strategy = cljs.core.get.call(null,map__32811__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__32811__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__32811,map__32811__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__32811,map__32811__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30918__auto__,k__30919__auto__){
var self__ = this;
var this__30918__auto____$1 = this;
return this__30918__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30919__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30920__auto__,k32815,else__30921__auto__){
var self__ = this;
var this__30920__auto____$1 = this;
var G__32819 = k32815;
switch (G__32819) {
default:
return cljs.core.get.call(null,self__.__extmap,k32815,else__30921__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__32820){
var self__ = this;
var map__32821 = p__32820;
var map__32821__$1 = ((((!((map__32821 == null)))?((((map__32821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32821):map__32821);
var request = map__32821__$1;
var method = cljs.core.get.call(null,map__32821__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30932__auto__,writer__30933__auto__,opts__30934__auto__){
var self__ = this;
var this__30932__auto____$1 = this;
var pr_pair__30935__auto__ = ((function (this__30932__auto____$1){
return (function (keyval__30936__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30933__auto__,cljs.core.pr_writer,""," ","",opts__30934__auto__,keyval__30936__auto__);
});})(this__30932__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30933__auto__,pr_pair__30935__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__30934__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32814){
var self__ = this;
var G__32814__$1 = this;
return (new cljs.core.RecordIter((0),G__32814__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30916__auto__){
var self__ = this;
var this__30916__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30913__auto__){
var self__ = this;
var this__30913__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30922__auto__){
var self__ = this;
var this__30922__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30914__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
var h__30686__auto__ = self__.__hash;
if(!((h__30686__auto__ == null))){
return h__30686__auto__;
} else {
var h__30686__auto____$1 = ((function (h__30686__auto__,this__30914__auto____$1){
return (function (coll__30915__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__30915__auto__));
});})(h__30686__auto__,this__30914__auto____$1))
.call(null,this__30914__auto____$1);
self__.__hash = h__30686__auto____$1;

return h__30686__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32816,other32817){
var self__ = this;
var this32816__$1 = this;
return (!((other32817 == null))) && ((this32816__$1.constructor === other32817.constructor)) && (cljs.core._EQ_.call(null,this32816__$1.__extmap,other32817.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30927__auto__,k__30928__auto__){
var self__ = this;
var this__30927__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__30928__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30927__auto____$1),self__.__meta),k__30928__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30928__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30925__auto__,k__30926__auto__,G__32814){
var self__ = this;
var this__30925__auto____$1 = this;
var pred__32823 = cljs.core.keyword_identical_QMARK_;
var expr__32824 = k__30926__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30926__auto__,G__32814),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30930__auto__){
var self__ = this;
var this__30930__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30917__auto__,G__32814){
var self__ = this;
var this__30917__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__32814,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30923__auto__,entry__30924__auto__){
var self__ = this;
var this__30923__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30924__auto__)){
return this__30923__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30924__auto__,(0)),cljs.core._nth.call(null,entry__30924__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30923__auto____$1,entry__30924__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__30956__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__30956__auto__,writer__30957__auto__){
return cljs.core._write.call(null,writer__30957__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__32818){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__32818)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30918__auto__,k__30919__auto__){
var self__ = this;
var this__30918__auto____$1 = this;
return this__30918__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30919__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30920__auto__,k32828,else__30921__auto__){
var self__ = this;
var this__30920__auto____$1 = this;
var G__32832 = k32828;
switch (G__32832) {
default:
return cljs.core.get.call(null,self__.__extmap,k32828,else__30921__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__32833){
var self__ = this;
var map__32834 = p__32833;
var map__32834__$1 = ((((!((map__32834 == null)))?((((map__32834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32834):map__32834);
var request = map__32834__$1;
var body = cljs.core.get.call(null,map__32834__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30932__auto__,writer__30933__auto__,opts__30934__auto__){
var self__ = this;
var this__30932__auto____$1 = this;
var pr_pair__30935__auto__ = ((function (this__30932__auto____$1){
return (function (keyval__30936__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30933__auto__,cljs.core.pr_writer,""," ","",opts__30934__auto__,keyval__30936__auto__);
});})(this__30932__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30933__auto__,pr_pair__30935__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__30934__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32827){
var self__ = this;
var G__32827__$1 = this;
return (new cljs.core.RecordIter((0),G__32827__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30916__auto__){
var self__ = this;
var this__30916__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30913__auto__){
var self__ = this;
var this__30913__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30922__auto__){
var self__ = this;
var this__30922__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30914__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
var h__30686__auto__ = self__.__hash;
if(!((h__30686__auto__ == null))){
return h__30686__auto__;
} else {
var h__30686__auto____$1 = ((function (h__30686__auto__,this__30914__auto____$1){
return (function (coll__30915__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__30915__auto__));
});})(h__30686__auto__,this__30914__auto____$1))
.call(null,this__30914__auto____$1);
self__.__hash = h__30686__auto____$1;

return h__30686__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32829,other32830){
var self__ = this;
var this32829__$1 = this;
return (!((other32830 == null))) && ((this32829__$1.constructor === other32830.constructor)) && (cljs.core._EQ_.call(null,this32829__$1.__extmap,other32830.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30927__auto__,k__30928__auto__){
var self__ = this;
var this__30927__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__30928__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30927__auto____$1),self__.__meta),k__30928__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30928__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30925__auto__,k__30926__auto__,G__32827){
var self__ = this;
var this__30925__auto____$1 = this;
var pred__32836 = cljs.core.keyword_identical_QMARK_;
var expr__32837 = k__30926__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30926__auto__,G__32827),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30930__auto__){
var self__ = this;
var this__30930__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30917__auto__,G__32827){
var self__ = this;
var this__30917__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__32827,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30923__auto__,entry__30924__auto__){
var self__ = this;
var this__30923__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30924__auto__)){
return this__30923__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30924__auto__,(0)),cljs.core._nth.call(null,entry__30924__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30923__auto____$1,entry__30924__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__30956__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__30956__auto__,writer__30957__auto__){
return cljs.core._write.call(null,writer__30957__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__32831){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__32831)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__32840){
var map__32841 = p__32840;
var map__32841__$1 = ((((!((map__32841 == null)))?((((map__32841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32841):map__32841);
var opts = map__32841__$1;
var response_format = cljs.core.get.call(null,map__32841__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_.call(null,response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});

//# sourceMappingURL=interceptors.js.map?rel=1514673219412
