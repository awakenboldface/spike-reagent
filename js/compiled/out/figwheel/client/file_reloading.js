// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30230__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30230__auto__){
return or__30230__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30230__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30230__auto__)){
return or__30230__auto__;
} else {
var or__30230__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30230__auto____$1)){
return or__30230__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38957_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38957_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__38958 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38959 = null;
var count__38960 = (0);
var i__38961 = (0);
while(true){
if((i__38961 < count__38960)){
var n = cljs.core._nth.call(null,chunk__38959,i__38961);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38962 = seq__38958;
var G__38963 = chunk__38959;
var G__38964 = count__38960;
var G__38965 = (i__38961 + (1));
seq__38958 = G__38962;
chunk__38959 = G__38963;
count__38960 = G__38964;
i__38961 = G__38965;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__38958);
if(temp__5457__auto__){
var seq__38958__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38958__$1)){
var c__31161__auto__ = cljs.core.chunk_first.call(null,seq__38958__$1);
var G__38966 = cljs.core.chunk_rest.call(null,seq__38958__$1);
var G__38967 = c__31161__auto__;
var G__38968 = cljs.core.count.call(null,c__31161__auto__);
var G__38969 = (0);
seq__38958 = G__38966;
chunk__38959 = G__38967;
count__38960 = G__38968;
i__38961 = G__38969;
continue;
} else {
var n = cljs.core.first.call(null,seq__38958__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38970 = cljs.core.next.call(null,seq__38958__$1);
var G__38971 = null;
var G__38972 = (0);
var G__38973 = (0);
seq__38958 = G__38970;
chunk__38959 = G__38971;
count__38960 = G__38972;
i__38961 = G__38973;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__38974){
var vec__38975 = p__38974;
var _ = cljs.core.nth.call(null,vec__38975,(0),null);
var v = cljs.core.nth.call(null,vec__38975,(1),null);
var and__30218__auto__ = v;
if(cljs.core.truth_(and__30218__auto__)){
return v.call(null,dep);
} else {
return and__30218__auto__;
}
}),cljs.core.filter.call(null,(function (p__38978){
var vec__38979 = p__38978;
var k = cljs.core.nth.call(null,vec__38979,(0),null);
var v = cljs.core.nth.call(null,vec__38979,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__38991_38999 = cljs.core.seq.call(null,deps);
var chunk__38992_39000 = null;
var count__38993_39001 = (0);
var i__38994_39002 = (0);
while(true){
if((i__38994_39002 < count__38993_39001)){
var dep_39003 = cljs.core._nth.call(null,chunk__38992_39000,i__38994_39002);
if(cljs.core.truth_((function (){var and__30218__auto__ = dep_39003;
if(cljs.core.truth_(and__30218__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_39003));
} else {
return and__30218__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_39003,(depth + (1)),state);
} else {
}

var G__39004 = seq__38991_38999;
var G__39005 = chunk__38992_39000;
var G__39006 = count__38993_39001;
var G__39007 = (i__38994_39002 + (1));
seq__38991_38999 = G__39004;
chunk__38992_39000 = G__39005;
count__38993_39001 = G__39006;
i__38994_39002 = G__39007;
continue;
} else {
var temp__5457__auto___39008 = cljs.core.seq.call(null,seq__38991_38999);
if(temp__5457__auto___39008){
var seq__38991_39009__$1 = temp__5457__auto___39008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38991_39009__$1)){
var c__31161__auto___39010 = cljs.core.chunk_first.call(null,seq__38991_39009__$1);
var G__39011 = cljs.core.chunk_rest.call(null,seq__38991_39009__$1);
var G__39012 = c__31161__auto___39010;
var G__39013 = cljs.core.count.call(null,c__31161__auto___39010);
var G__39014 = (0);
seq__38991_38999 = G__39011;
chunk__38992_39000 = G__39012;
count__38993_39001 = G__39013;
i__38994_39002 = G__39014;
continue;
} else {
var dep_39015 = cljs.core.first.call(null,seq__38991_39009__$1);
if(cljs.core.truth_((function (){var and__30218__auto__ = dep_39015;
if(cljs.core.truth_(and__30218__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_39015));
} else {
return and__30218__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_39015,(depth + (1)),state);
} else {
}

var G__39016 = cljs.core.next.call(null,seq__38991_39009__$1);
var G__39017 = null;
var G__39018 = (0);
var G__39019 = (0);
seq__38991_38999 = G__39016;
chunk__38992_39000 = G__39017;
count__38993_39001 = G__39018;
i__38994_39002 = G__39019;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38995){
var vec__38996 = p__38995;
var seq__38997 = cljs.core.seq.call(null,vec__38996);
var first__38998 = cljs.core.first.call(null,seq__38997);
var seq__38997__$1 = cljs.core.next.call(null,seq__38997);
var x = first__38998;
var xs = seq__38997__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38996,seq__38997,first__38998,seq__38997__$1,x,xs,get_deps__$1){
return (function (p1__38982_SHARP_){
return clojure.set.difference.call(null,p1__38982_SHARP_,x);
});})(vec__38996,seq__38997,first__38998,seq__38997__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__39020 = cljs.core.seq.call(null,provides);
var chunk__39021 = null;
var count__39022 = (0);
var i__39023 = (0);
while(true){
if((i__39023 < count__39022)){
var prov = cljs.core._nth.call(null,chunk__39021,i__39023);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39024_39032 = cljs.core.seq.call(null,requires);
var chunk__39025_39033 = null;
var count__39026_39034 = (0);
var i__39027_39035 = (0);
while(true){
if((i__39027_39035 < count__39026_39034)){
var req_39036 = cljs.core._nth.call(null,chunk__39025_39033,i__39027_39035);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39036,prov);

var G__39037 = seq__39024_39032;
var G__39038 = chunk__39025_39033;
var G__39039 = count__39026_39034;
var G__39040 = (i__39027_39035 + (1));
seq__39024_39032 = G__39037;
chunk__39025_39033 = G__39038;
count__39026_39034 = G__39039;
i__39027_39035 = G__39040;
continue;
} else {
var temp__5457__auto___39041 = cljs.core.seq.call(null,seq__39024_39032);
if(temp__5457__auto___39041){
var seq__39024_39042__$1 = temp__5457__auto___39041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39024_39042__$1)){
var c__31161__auto___39043 = cljs.core.chunk_first.call(null,seq__39024_39042__$1);
var G__39044 = cljs.core.chunk_rest.call(null,seq__39024_39042__$1);
var G__39045 = c__31161__auto___39043;
var G__39046 = cljs.core.count.call(null,c__31161__auto___39043);
var G__39047 = (0);
seq__39024_39032 = G__39044;
chunk__39025_39033 = G__39045;
count__39026_39034 = G__39046;
i__39027_39035 = G__39047;
continue;
} else {
var req_39048 = cljs.core.first.call(null,seq__39024_39042__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39048,prov);

var G__39049 = cljs.core.next.call(null,seq__39024_39042__$1);
var G__39050 = null;
var G__39051 = (0);
var G__39052 = (0);
seq__39024_39032 = G__39049;
chunk__39025_39033 = G__39050;
count__39026_39034 = G__39051;
i__39027_39035 = G__39052;
continue;
}
} else {
}
}
break;
}

var G__39053 = seq__39020;
var G__39054 = chunk__39021;
var G__39055 = count__39022;
var G__39056 = (i__39023 + (1));
seq__39020 = G__39053;
chunk__39021 = G__39054;
count__39022 = G__39055;
i__39023 = G__39056;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39020);
if(temp__5457__auto__){
var seq__39020__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39020__$1)){
var c__31161__auto__ = cljs.core.chunk_first.call(null,seq__39020__$1);
var G__39057 = cljs.core.chunk_rest.call(null,seq__39020__$1);
var G__39058 = c__31161__auto__;
var G__39059 = cljs.core.count.call(null,c__31161__auto__);
var G__39060 = (0);
seq__39020 = G__39057;
chunk__39021 = G__39058;
count__39022 = G__39059;
i__39023 = G__39060;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39020__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39028_39061 = cljs.core.seq.call(null,requires);
var chunk__39029_39062 = null;
var count__39030_39063 = (0);
var i__39031_39064 = (0);
while(true){
if((i__39031_39064 < count__39030_39063)){
var req_39065 = cljs.core._nth.call(null,chunk__39029_39062,i__39031_39064);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39065,prov);

var G__39066 = seq__39028_39061;
var G__39067 = chunk__39029_39062;
var G__39068 = count__39030_39063;
var G__39069 = (i__39031_39064 + (1));
seq__39028_39061 = G__39066;
chunk__39029_39062 = G__39067;
count__39030_39063 = G__39068;
i__39031_39064 = G__39069;
continue;
} else {
var temp__5457__auto___39070__$1 = cljs.core.seq.call(null,seq__39028_39061);
if(temp__5457__auto___39070__$1){
var seq__39028_39071__$1 = temp__5457__auto___39070__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39028_39071__$1)){
var c__31161__auto___39072 = cljs.core.chunk_first.call(null,seq__39028_39071__$1);
var G__39073 = cljs.core.chunk_rest.call(null,seq__39028_39071__$1);
var G__39074 = c__31161__auto___39072;
var G__39075 = cljs.core.count.call(null,c__31161__auto___39072);
var G__39076 = (0);
seq__39028_39061 = G__39073;
chunk__39029_39062 = G__39074;
count__39030_39063 = G__39075;
i__39031_39064 = G__39076;
continue;
} else {
var req_39077 = cljs.core.first.call(null,seq__39028_39071__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39077,prov);

var G__39078 = cljs.core.next.call(null,seq__39028_39071__$1);
var G__39079 = null;
var G__39080 = (0);
var G__39081 = (0);
seq__39028_39061 = G__39078;
chunk__39029_39062 = G__39079;
count__39030_39063 = G__39080;
i__39031_39064 = G__39081;
continue;
}
} else {
}
}
break;
}

var G__39082 = cljs.core.next.call(null,seq__39020__$1);
var G__39083 = null;
var G__39084 = (0);
var G__39085 = (0);
seq__39020 = G__39082;
chunk__39021 = G__39083;
count__39022 = G__39084;
i__39023 = G__39085;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__39086_39090 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39087_39091 = null;
var count__39088_39092 = (0);
var i__39089_39093 = (0);
while(true){
if((i__39089_39093 < count__39088_39092)){
var ns_39094 = cljs.core._nth.call(null,chunk__39087_39091,i__39089_39093);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39094);

var G__39095 = seq__39086_39090;
var G__39096 = chunk__39087_39091;
var G__39097 = count__39088_39092;
var G__39098 = (i__39089_39093 + (1));
seq__39086_39090 = G__39095;
chunk__39087_39091 = G__39096;
count__39088_39092 = G__39097;
i__39089_39093 = G__39098;
continue;
} else {
var temp__5457__auto___39099 = cljs.core.seq.call(null,seq__39086_39090);
if(temp__5457__auto___39099){
var seq__39086_39100__$1 = temp__5457__auto___39099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39086_39100__$1)){
var c__31161__auto___39101 = cljs.core.chunk_first.call(null,seq__39086_39100__$1);
var G__39102 = cljs.core.chunk_rest.call(null,seq__39086_39100__$1);
var G__39103 = c__31161__auto___39101;
var G__39104 = cljs.core.count.call(null,c__31161__auto___39101);
var G__39105 = (0);
seq__39086_39090 = G__39102;
chunk__39087_39091 = G__39103;
count__39088_39092 = G__39104;
i__39089_39093 = G__39105;
continue;
} else {
var ns_39106 = cljs.core.first.call(null,seq__39086_39100__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39106);

var G__39107 = cljs.core.next.call(null,seq__39086_39100__$1);
var G__39108 = null;
var G__39109 = (0);
var G__39110 = (0);
seq__39086_39090 = G__39107;
chunk__39087_39091 = G__39108;
count__39088_39092 = G__39109;
i__39089_39093 = G__39110;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30230__auto__ = goog.require__;
if(cljs.core.truth_(or__30230__auto__)){
return or__30230__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__39111__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39112__i = 0, G__39112__a = new Array(arguments.length -  0);
while (G__39112__i < G__39112__a.length) {G__39112__a[G__39112__i] = arguments[G__39112__i + 0]; ++G__39112__i;}
  args = new cljs.core.IndexedSeq(G__39112__a,0,null);
} 
return G__39111__delegate.call(this,args);};
G__39111.cljs$lang$maxFixedArity = 0;
G__39111.cljs$lang$applyTo = (function (arglist__39113){
var args = cljs.core.seq(arglist__39113);
return G__39111__delegate(args);
});
G__39111.cljs$core$IFn$_invoke$arity$variadic = G__39111__delegate;
return G__39111;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__39114_SHARP_,p2__39115_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39114_SHARP_)].join('')),p2__39115_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__39116_SHARP_,p2__39117_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39116_SHARP_)].join(''),p2__39117_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__39118 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__39118.addCallback(((function (G__39118){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__39118))
);

G__39118.addErrback(((function (G__39118){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__39118))
);

return G__39118;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e39119){if((e39119 instanceof Error)){
var e = e39119;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39119;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39120){if((e39120 instanceof Error)){
var e = e39120;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39120;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39121 = cljs.core._EQ_;
var expr__39122 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39121.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39122))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__39121.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39122))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__39121.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__39122))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__39121,expr__39122){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39121,expr__39122))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39124,callback){
var map__39125 = p__39124;
var map__39125__$1 = ((((!((map__39125 == null)))?((((map__39125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39125):map__39125);
var file_msg = map__39125__$1;
var request_url = cljs.core.get.call(null,map__39125__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30230__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30230__auto__)){
return or__30230__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__39125,map__39125__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39125,map__39125__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__35767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto__){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto__){
return (function (state_39165){
var state_val_39166 = (state_39165[(1)]);
if((state_val_39166 === (7))){
var inst_39161 = (state_39165[(2)]);
var state_39165__$1 = state_39165;
var statearr_39167_39194 = state_39165__$1;
(statearr_39167_39194[(2)] = inst_39161);

(statearr_39167_39194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39166 === (1))){
var state_39165__$1 = state_39165;
var statearr_39168_39195 = state_39165__$1;
(statearr_39168_39195[(2)] = null);

(statearr_39168_39195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39166 === (4))){
var inst_39129 = (state_39165[(7)]);
var inst_39129__$1 = (state_39165[(2)]);
var state_39165__$1 = (function (){var statearr_39169 = state_39165;
(statearr_39169[(7)] = inst_39129__$1);

return statearr_39169;
})();
if(cljs.core.truth_(inst_39129__$1)){
var statearr_39170_39196 = state_39165__$1;
(statearr_39170_39196[(1)] = (5));

} else {
var statearr_39171_39197 = state_39165__$1;
(statearr_39171_39197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39166 === (15))){
var inst_39143 = (state_39165[(8)]);
var inst_39146 = (state_39165[(9)]);
var inst_39148 = inst_39146.call(null,inst_39143);
var state_39165__$1 = state_39165;
var statearr_39172_39198 = state_39165__$1;
(statearr_39172_39198[(2)] = inst_39148);

(statearr_39172_39198[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39166 === (13))){
var inst_39155 = (state_39165[(2)]);
var state_39165__$1 = state_39165;
var statearr_39173_39199 = state_39165__$1;
(statearr_39173_39199[(2)] = inst_39155);

(statearr_39173_39199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39166 === (6))){
var state_39165__$1 = state_39165;
var statearr_39174_39200 = state_39165__$1;
(statearr_39174_39200[(2)] = null);

(statearr_39174_39200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39166 === (17))){
var inst_39152 = (state_39165[(2)]);
var state_39165__$1 = state_39165;
var statearr_39175_39201 = state_39165__$1;
(statearr_39175_39201[(2)] = inst_39152);

(statearr_39175_39201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39166 === (3))){
var inst_39163 = (state_39165[(2)]);
var state_39165__$1 = state_39165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39165__$1,inst_39163);
} else {
if((state_val_39166 === (12))){
var state_39165__$1 = state_39165;
var statearr_39176_39202 = state_39165__$1;
(statearr_39176_39202[(2)] = null);

(statearr_39176_39202[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39166 === (2))){
var state_39165__$1 = state_39165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39165__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39166 === (11))){
var inst_39134 = (state_39165[(10)]);
var inst_39141 = figwheel.client.file_reloading.blocking_load.call(null,inst_39134);
var state_39165__$1 = state_39165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39165__$1,(14),inst_39141);
} else {
if((state_val_39166 === (9))){
var inst_39134 = (state_39165[(10)]);
var state_39165__$1 = state_39165;
if(cljs.core.truth_(inst_39134)){
var statearr_39177_39203 = state_39165__$1;
(statearr_39177_39203[(1)] = (11));

} else {
var statearr_39178_39204 = state_39165__$1;
(statearr_39178_39204[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39166 === (5))){
var inst_39129 = (state_39165[(7)]);
var inst_39135 = (state_39165[(11)]);
var inst_39134 = cljs.core.nth.call(null,inst_39129,(0),null);
var inst_39135__$1 = cljs.core.nth.call(null,inst_39129,(1),null);
var state_39165__$1 = (function (){var statearr_39179 = state_39165;
(statearr_39179[(10)] = inst_39134);

(statearr_39179[(11)] = inst_39135__$1);

return statearr_39179;
})();
if(cljs.core.truth_(inst_39135__$1)){
var statearr_39180_39205 = state_39165__$1;
(statearr_39180_39205[(1)] = (8));

} else {
var statearr_39181_39206 = state_39165__$1;
(statearr_39181_39206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39166 === (14))){
var inst_39134 = (state_39165[(10)]);
var inst_39146 = (state_39165[(9)]);
var inst_39143 = (state_39165[(2)]);
var inst_39144 = console.log("Loading!",inst_39134);
var inst_39145 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39146__$1 = cljs.core.get.call(null,inst_39145,inst_39134);
var state_39165__$1 = (function (){var statearr_39182 = state_39165;
(statearr_39182[(8)] = inst_39143);

(statearr_39182[(12)] = inst_39144);

(statearr_39182[(9)] = inst_39146__$1);

return statearr_39182;
})();
if(cljs.core.truth_(inst_39146__$1)){
var statearr_39183_39207 = state_39165__$1;
(statearr_39183_39207[(1)] = (15));

} else {
var statearr_39184_39208 = state_39165__$1;
(statearr_39184_39208[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39166 === (16))){
var inst_39143 = (state_39165[(8)]);
var inst_39150 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39143);
var state_39165__$1 = state_39165;
var statearr_39185_39209 = state_39165__$1;
(statearr_39185_39209[(2)] = inst_39150);

(statearr_39185_39209[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39166 === (10))){
var inst_39157 = (state_39165[(2)]);
var state_39165__$1 = (function (){var statearr_39186 = state_39165;
(statearr_39186[(13)] = inst_39157);

return statearr_39186;
})();
var statearr_39187_39210 = state_39165__$1;
(statearr_39187_39210[(2)] = null);

(statearr_39187_39210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39166 === (8))){
var inst_39135 = (state_39165[(11)]);
var inst_39137 = console.log("Evaling!",inst_39135);
var inst_39138 = eval(inst_39135);
var state_39165__$1 = (function (){var statearr_39188 = state_39165;
(statearr_39188[(14)] = inst_39137);

return statearr_39188;
})();
var statearr_39189_39211 = state_39165__$1;
(statearr_39189_39211[(2)] = inst_39138);

(statearr_39189_39211[(1)] = (10));


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
});})(c__35767__auto__))
;
return ((function (switch__35677__auto__,c__35767__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35678__auto__ = null;
var figwheel$client$file_reloading$state_machine__35678__auto____0 = (function (){
var statearr_39190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39190[(0)] = figwheel$client$file_reloading$state_machine__35678__auto__);

(statearr_39190[(1)] = (1));

return statearr_39190;
});
var figwheel$client$file_reloading$state_machine__35678__auto____1 = (function (state_39165){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_39165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e39191){if((e39191 instanceof Object)){
var ex__35681__auto__ = e39191;
var statearr_39192_39212 = state_39165;
(statearr_39192_39212[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39213 = state_39165;
state_39165 = G__39213;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35678__auto__ = function(state_39165){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35678__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35678__auto____1.call(this,state_39165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35678__auto____0;
figwheel$client$file_reloading$state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35678__auto____1;
return figwheel$client$file_reloading$state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto__))
})();
var state__35769__auto__ = (function (){var statearr_39193 = f__35768__auto__.call(null);
(statearr_39193[(6)] = c__35767__auto__);

return statearr_39193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto__))
);

return c__35767__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__39215 = arguments.length;
switch (G__39215) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39217,callback){
var map__39218 = p__39217;
var map__39218__$1 = ((((!((map__39218 == null)))?((((map__39218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39218):map__39218);
var file_msg = map__39218__$1;
var namespace = cljs.core.get.call(null,map__39218__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39218,map__39218__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39218,map__39218__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__39220){
var map__39221 = p__39220;
var map__39221__$1 = ((((!((map__39221 == null)))?((((map__39221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39221):map__39221);
var file_msg = map__39221__$1;
var namespace = cljs.core.get.call(null,map__39221__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39223){
var map__39224 = p__39223;
var map__39224__$1 = ((((!((map__39224 == null)))?((((map__39224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39224):map__39224);
var file_msg = map__39224__$1;
var namespace = cljs.core.get.call(null,map__39224__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30218__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30218__auto__){
var or__30230__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30230__auto__)){
return or__30230__auto__;
} else {
var or__30230__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30230__auto____$1)){
return or__30230__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30218__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39226,callback){
var map__39227 = p__39226;
var map__39227__$1 = ((((!((map__39227 == null)))?((((map__39227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39227):map__39227);
var file_msg = map__39227__$1;
var request_url = cljs.core.get.call(null,map__39227__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39227__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__35767__auto___39277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___39277,out){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___39277,out){
return (function (state_39262){
var state_val_39263 = (state_39262[(1)]);
if((state_val_39263 === (1))){
var inst_39236 = cljs.core.seq.call(null,files);
var inst_39237 = cljs.core.first.call(null,inst_39236);
var inst_39238 = cljs.core.next.call(null,inst_39236);
var inst_39239 = files;
var state_39262__$1 = (function (){var statearr_39264 = state_39262;
(statearr_39264[(7)] = inst_39237);

(statearr_39264[(8)] = inst_39239);

(statearr_39264[(9)] = inst_39238);

return statearr_39264;
})();
var statearr_39265_39278 = state_39262__$1;
(statearr_39265_39278[(2)] = null);

(statearr_39265_39278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39263 === (2))){
var inst_39245 = (state_39262[(10)]);
var inst_39239 = (state_39262[(8)]);
var inst_39244 = cljs.core.seq.call(null,inst_39239);
var inst_39245__$1 = cljs.core.first.call(null,inst_39244);
var inst_39246 = cljs.core.next.call(null,inst_39244);
var inst_39247 = (inst_39245__$1 == null);
var inst_39248 = cljs.core.not.call(null,inst_39247);
var state_39262__$1 = (function (){var statearr_39266 = state_39262;
(statearr_39266[(11)] = inst_39246);

(statearr_39266[(10)] = inst_39245__$1);

return statearr_39266;
})();
if(inst_39248){
var statearr_39267_39279 = state_39262__$1;
(statearr_39267_39279[(1)] = (4));

} else {
var statearr_39268_39280 = state_39262__$1;
(statearr_39268_39280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39263 === (3))){
var inst_39260 = (state_39262[(2)]);
var state_39262__$1 = state_39262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39262__$1,inst_39260);
} else {
if((state_val_39263 === (4))){
var inst_39245 = (state_39262[(10)]);
var inst_39250 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39245);
var state_39262__$1 = state_39262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39262__$1,(7),inst_39250);
} else {
if((state_val_39263 === (5))){
var inst_39256 = cljs.core.async.close_BANG_.call(null,out);
var state_39262__$1 = state_39262;
var statearr_39269_39281 = state_39262__$1;
(statearr_39269_39281[(2)] = inst_39256);

(statearr_39269_39281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39263 === (6))){
var inst_39258 = (state_39262[(2)]);
var state_39262__$1 = state_39262;
var statearr_39270_39282 = state_39262__$1;
(statearr_39270_39282[(2)] = inst_39258);

(statearr_39270_39282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39263 === (7))){
var inst_39246 = (state_39262[(11)]);
var inst_39252 = (state_39262[(2)]);
var inst_39253 = cljs.core.async.put_BANG_.call(null,out,inst_39252);
var inst_39239 = inst_39246;
var state_39262__$1 = (function (){var statearr_39271 = state_39262;
(statearr_39271[(12)] = inst_39253);

(statearr_39271[(8)] = inst_39239);

return statearr_39271;
})();
var statearr_39272_39283 = state_39262__$1;
(statearr_39272_39283[(2)] = null);

(statearr_39272_39283[(1)] = (2));


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
});})(c__35767__auto___39277,out))
;
return ((function (switch__35677__auto__,c__35767__auto___39277,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35678__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35678__auto____0 = (function (){
var statearr_39273 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39273[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35678__auto__);

(statearr_39273[(1)] = (1));

return statearr_39273;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35678__auto____1 = (function (state_39262){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_39262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e39274){if((e39274 instanceof Object)){
var ex__35681__auto__ = e39274;
var statearr_39275_39284 = state_39262;
(statearr_39275_39284[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39285 = state_39262;
state_39262 = G__39285;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35678__auto__ = function(state_39262){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35678__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35678__auto____1.call(this,state_39262);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35678__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35678__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___39277,out))
})();
var state__35769__auto__ = (function (){var statearr_39276 = f__35768__auto__.call(null);
(statearr_39276[(6)] = c__35767__auto___39277);

return statearr_39276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___39277,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39286,opts){
var map__39287 = p__39286;
var map__39287__$1 = ((((!((map__39287 == null)))?((((map__39287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39287):map__39287);
var eval_body = cljs.core.get.call(null,map__39287__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39287__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30218__auto__ = eval_body;
if(cljs.core.truth_(and__30218__auto__)){
return typeof eval_body === 'string';
} else {
return and__30218__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39289){var e = e39289;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__39290_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39290_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__39291){
var vec__39292 = p__39291;
var k = cljs.core.nth.call(null,vec__39292,(0),null);
var v = cljs.core.nth.call(null,vec__39292,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39295){
var vec__39296 = p__39295;
var k = cljs.core.nth.call(null,vec__39296,(0),null);
var v = cljs.core.nth.call(null,vec__39296,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39302,p__39303){
var map__39304 = p__39302;
var map__39304__$1 = ((((!((map__39304 == null)))?((((map__39304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39304):map__39304);
var opts = map__39304__$1;
var before_jsload = cljs.core.get.call(null,map__39304__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39304__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39304__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39305 = p__39303;
var map__39305__$1 = ((((!((map__39305 == null)))?((((map__39305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39305):map__39305);
var msg = map__39305__$1;
var files = cljs.core.get.call(null,map__39305__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39305__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39305__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39459){
var state_val_39460 = (state_39459[(1)]);
if((state_val_39460 === (7))){
var inst_39320 = (state_39459[(7)]);
var inst_39321 = (state_39459[(8)]);
var inst_39322 = (state_39459[(9)]);
var inst_39319 = (state_39459[(10)]);
var inst_39327 = cljs.core._nth.call(null,inst_39320,inst_39322);
var inst_39328 = figwheel.client.file_reloading.eval_body.call(null,inst_39327,opts);
var inst_39329 = (inst_39322 + (1));
var tmp39461 = inst_39320;
var tmp39462 = inst_39321;
var tmp39463 = inst_39319;
var inst_39319__$1 = tmp39463;
var inst_39320__$1 = tmp39461;
var inst_39321__$1 = tmp39462;
var inst_39322__$1 = inst_39329;
var state_39459__$1 = (function (){var statearr_39464 = state_39459;
(statearr_39464[(7)] = inst_39320__$1);

(statearr_39464[(8)] = inst_39321__$1);

(statearr_39464[(9)] = inst_39322__$1);

(statearr_39464[(11)] = inst_39328);

(statearr_39464[(10)] = inst_39319__$1);

return statearr_39464;
})();
var statearr_39465_39548 = state_39459__$1;
(statearr_39465_39548[(2)] = null);

(statearr_39465_39548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (20))){
var inst_39362 = (state_39459[(12)]);
var inst_39370 = figwheel.client.file_reloading.sort_files.call(null,inst_39362);
var state_39459__$1 = state_39459;
var statearr_39466_39549 = state_39459__$1;
(statearr_39466_39549[(2)] = inst_39370);

(statearr_39466_39549[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (27))){
var state_39459__$1 = state_39459;
var statearr_39467_39550 = state_39459__$1;
(statearr_39467_39550[(2)] = null);

(statearr_39467_39550[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (1))){
var inst_39311 = (state_39459[(13)]);
var inst_39308 = before_jsload.call(null,files);
var inst_39309 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39310 = (function (){return ((function (inst_39311,inst_39308,inst_39309,state_val_39460,c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39299_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39299_SHARP_);
});
;})(inst_39311,inst_39308,inst_39309,state_val_39460,c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39311__$1 = cljs.core.filter.call(null,inst_39310,files);
var inst_39312 = cljs.core.not_empty.call(null,inst_39311__$1);
var state_39459__$1 = (function (){var statearr_39468 = state_39459;
(statearr_39468[(14)] = inst_39308);

(statearr_39468[(15)] = inst_39309);

(statearr_39468[(13)] = inst_39311__$1);

return statearr_39468;
})();
if(cljs.core.truth_(inst_39312)){
var statearr_39469_39551 = state_39459__$1;
(statearr_39469_39551[(1)] = (2));

} else {
var statearr_39470_39552 = state_39459__$1;
(statearr_39470_39552[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (24))){
var state_39459__$1 = state_39459;
var statearr_39471_39553 = state_39459__$1;
(statearr_39471_39553[(2)] = null);

(statearr_39471_39553[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (39))){
var inst_39412 = (state_39459[(16)]);
var state_39459__$1 = state_39459;
var statearr_39472_39554 = state_39459__$1;
(statearr_39472_39554[(2)] = inst_39412);

(statearr_39472_39554[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (46))){
var inst_39454 = (state_39459[(2)]);
var state_39459__$1 = state_39459;
var statearr_39473_39555 = state_39459__$1;
(statearr_39473_39555[(2)] = inst_39454);

(statearr_39473_39555[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (4))){
var inst_39356 = (state_39459[(2)]);
var inst_39357 = cljs.core.List.EMPTY;
var inst_39358 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39357);
var inst_39359 = (function (){return ((function (inst_39356,inst_39357,inst_39358,state_val_39460,c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39300_SHARP_){
var and__30218__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39300_SHARP_);
if(cljs.core.truth_(and__30218__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39300_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__39300_SHARP_)));
} else {
return and__30218__auto__;
}
});
;})(inst_39356,inst_39357,inst_39358,state_val_39460,c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39360 = cljs.core.filter.call(null,inst_39359,files);
var inst_39361 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39362 = cljs.core.concat.call(null,inst_39360,inst_39361);
var state_39459__$1 = (function (){var statearr_39474 = state_39459;
(statearr_39474[(17)] = inst_39358);

(statearr_39474[(12)] = inst_39362);

(statearr_39474[(18)] = inst_39356);

return statearr_39474;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39475_39556 = state_39459__$1;
(statearr_39475_39556[(1)] = (16));

} else {
var statearr_39476_39557 = state_39459__$1;
(statearr_39476_39557[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (15))){
var inst_39346 = (state_39459[(2)]);
var state_39459__$1 = state_39459;
var statearr_39477_39558 = state_39459__$1;
(statearr_39477_39558[(2)] = inst_39346);

(statearr_39477_39558[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (21))){
var inst_39372 = (state_39459[(19)]);
var inst_39372__$1 = (state_39459[(2)]);
var inst_39373 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39372__$1);
var state_39459__$1 = (function (){var statearr_39478 = state_39459;
(statearr_39478[(19)] = inst_39372__$1);

return statearr_39478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39459__$1,(22),inst_39373);
} else {
if((state_val_39460 === (31))){
var inst_39457 = (state_39459[(2)]);
var state_39459__$1 = state_39459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39459__$1,inst_39457);
} else {
if((state_val_39460 === (32))){
var inst_39412 = (state_39459[(16)]);
var inst_39417 = inst_39412.cljs$lang$protocol_mask$partition0$;
var inst_39418 = (inst_39417 & (64));
var inst_39419 = inst_39412.cljs$core$ISeq$;
var inst_39420 = (cljs.core.PROTOCOL_SENTINEL === inst_39419);
var inst_39421 = (inst_39418) || (inst_39420);
var state_39459__$1 = state_39459;
if(cljs.core.truth_(inst_39421)){
var statearr_39479_39559 = state_39459__$1;
(statearr_39479_39559[(1)] = (35));

} else {
var statearr_39480_39560 = state_39459__$1;
(statearr_39480_39560[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (40))){
var inst_39434 = (state_39459[(20)]);
var inst_39433 = (state_39459[(2)]);
var inst_39434__$1 = cljs.core.get.call(null,inst_39433,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39435 = cljs.core.get.call(null,inst_39433,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39436 = cljs.core.not_empty.call(null,inst_39434__$1);
var state_39459__$1 = (function (){var statearr_39481 = state_39459;
(statearr_39481[(20)] = inst_39434__$1);

(statearr_39481[(21)] = inst_39435);

return statearr_39481;
})();
if(cljs.core.truth_(inst_39436)){
var statearr_39482_39561 = state_39459__$1;
(statearr_39482_39561[(1)] = (41));

} else {
var statearr_39483_39562 = state_39459__$1;
(statearr_39483_39562[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (33))){
var state_39459__$1 = state_39459;
var statearr_39484_39563 = state_39459__$1;
(statearr_39484_39563[(2)] = false);

(statearr_39484_39563[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (13))){
var inst_39332 = (state_39459[(22)]);
var inst_39336 = cljs.core.chunk_first.call(null,inst_39332);
var inst_39337 = cljs.core.chunk_rest.call(null,inst_39332);
var inst_39338 = cljs.core.count.call(null,inst_39336);
var inst_39319 = inst_39337;
var inst_39320 = inst_39336;
var inst_39321 = inst_39338;
var inst_39322 = (0);
var state_39459__$1 = (function (){var statearr_39485 = state_39459;
(statearr_39485[(7)] = inst_39320);

(statearr_39485[(8)] = inst_39321);

(statearr_39485[(9)] = inst_39322);

(statearr_39485[(10)] = inst_39319);

return statearr_39485;
})();
var statearr_39486_39564 = state_39459__$1;
(statearr_39486_39564[(2)] = null);

(statearr_39486_39564[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (22))){
var inst_39372 = (state_39459[(19)]);
var inst_39376 = (state_39459[(23)]);
var inst_39375 = (state_39459[(24)]);
var inst_39380 = (state_39459[(25)]);
var inst_39375__$1 = (state_39459[(2)]);
var inst_39376__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39375__$1);
var inst_39377 = (function (){var all_files = inst_39372;
var res_SINGLEQUOTE_ = inst_39375__$1;
var res = inst_39376__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39372,inst_39376,inst_39375,inst_39380,inst_39375__$1,inst_39376__$1,state_val_39460,c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39301_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39301_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39372,inst_39376,inst_39375,inst_39380,inst_39375__$1,inst_39376__$1,state_val_39460,c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39378 = cljs.core.filter.call(null,inst_39377,inst_39375__$1);
var inst_39379 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39380__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39379);
var inst_39381 = cljs.core.not_empty.call(null,inst_39380__$1);
var state_39459__$1 = (function (){var statearr_39487 = state_39459;
(statearr_39487[(23)] = inst_39376__$1);

(statearr_39487[(24)] = inst_39375__$1);

(statearr_39487[(26)] = inst_39378);

(statearr_39487[(25)] = inst_39380__$1);

return statearr_39487;
})();
if(cljs.core.truth_(inst_39381)){
var statearr_39488_39565 = state_39459__$1;
(statearr_39488_39565[(1)] = (23));

} else {
var statearr_39489_39566 = state_39459__$1;
(statearr_39489_39566[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (36))){
var state_39459__$1 = state_39459;
var statearr_39490_39567 = state_39459__$1;
(statearr_39490_39567[(2)] = false);

(statearr_39490_39567[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (41))){
var inst_39434 = (state_39459[(20)]);
var inst_39438 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39439 = cljs.core.map.call(null,inst_39438,inst_39434);
var inst_39440 = cljs.core.pr_str.call(null,inst_39439);
var inst_39441 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39440)].join('');
var inst_39442 = figwheel.client.utils.log.call(null,inst_39441);
var state_39459__$1 = state_39459;
var statearr_39491_39568 = state_39459__$1;
(statearr_39491_39568[(2)] = inst_39442);

(statearr_39491_39568[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (43))){
var inst_39435 = (state_39459[(21)]);
var inst_39445 = (state_39459[(2)]);
var inst_39446 = cljs.core.not_empty.call(null,inst_39435);
var state_39459__$1 = (function (){var statearr_39492 = state_39459;
(statearr_39492[(27)] = inst_39445);

return statearr_39492;
})();
if(cljs.core.truth_(inst_39446)){
var statearr_39493_39569 = state_39459__$1;
(statearr_39493_39569[(1)] = (44));

} else {
var statearr_39494_39570 = state_39459__$1;
(statearr_39494_39570[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (29))){
var inst_39372 = (state_39459[(19)]);
var inst_39376 = (state_39459[(23)]);
var inst_39375 = (state_39459[(24)]);
var inst_39378 = (state_39459[(26)]);
var inst_39380 = (state_39459[(25)]);
var inst_39412 = (state_39459[(16)]);
var inst_39408 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39411 = (function (){var all_files = inst_39372;
var res_SINGLEQUOTE_ = inst_39375;
var res = inst_39376;
var files_not_loaded = inst_39378;
var dependencies_that_loaded = inst_39380;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39372,inst_39376,inst_39375,inst_39378,inst_39380,inst_39412,inst_39408,state_val_39460,c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39410){
var map__39495 = p__39410;
var map__39495__$1 = ((((!((map__39495 == null)))?((((map__39495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39495):map__39495);
var namespace = cljs.core.get.call(null,map__39495__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39372,inst_39376,inst_39375,inst_39378,inst_39380,inst_39412,inst_39408,state_val_39460,c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39412__$1 = cljs.core.group_by.call(null,inst_39411,inst_39378);
var inst_39414 = (inst_39412__$1 == null);
var inst_39415 = cljs.core.not.call(null,inst_39414);
var state_39459__$1 = (function (){var statearr_39497 = state_39459;
(statearr_39497[(28)] = inst_39408);

(statearr_39497[(16)] = inst_39412__$1);

return statearr_39497;
})();
if(inst_39415){
var statearr_39498_39571 = state_39459__$1;
(statearr_39498_39571[(1)] = (32));

} else {
var statearr_39499_39572 = state_39459__$1;
(statearr_39499_39572[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (44))){
var inst_39435 = (state_39459[(21)]);
var inst_39448 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39435);
var inst_39449 = cljs.core.pr_str.call(null,inst_39448);
var inst_39450 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39449)].join('');
var inst_39451 = figwheel.client.utils.log.call(null,inst_39450);
var state_39459__$1 = state_39459;
var statearr_39500_39573 = state_39459__$1;
(statearr_39500_39573[(2)] = inst_39451);

(statearr_39500_39573[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (6))){
var inst_39353 = (state_39459[(2)]);
var state_39459__$1 = state_39459;
var statearr_39501_39574 = state_39459__$1;
(statearr_39501_39574[(2)] = inst_39353);

(statearr_39501_39574[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (28))){
var inst_39378 = (state_39459[(26)]);
var inst_39405 = (state_39459[(2)]);
var inst_39406 = cljs.core.not_empty.call(null,inst_39378);
var state_39459__$1 = (function (){var statearr_39502 = state_39459;
(statearr_39502[(29)] = inst_39405);

return statearr_39502;
})();
if(cljs.core.truth_(inst_39406)){
var statearr_39503_39575 = state_39459__$1;
(statearr_39503_39575[(1)] = (29));

} else {
var statearr_39504_39576 = state_39459__$1;
(statearr_39504_39576[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (25))){
var inst_39376 = (state_39459[(23)]);
var inst_39392 = (state_39459[(2)]);
var inst_39393 = cljs.core.not_empty.call(null,inst_39376);
var state_39459__$1 = (function (){var statearr_39505 = state_39459;
(statearr_39505[(30)] = inst_39392);

return statearr_39505;
})();
if(cljs.core.truth_(inst_39393)){
var statearr_39506_39577 = state_39459__$1;
(statearr_39506_39577[(1)] = (26));

} else {
var statearr_39507_39578 = state_39459__$1;
(statearr_39507_39578[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (34))){
var inst_39428 = (state_39459[(2)]);
var state_39459__$1 = state_39459;
if(cljs.core.truth_(inst_39428)){
var statearr_39508_39579 = state_39459__$1;
(statearr_39508_39579[(1)] = (38));

} else {
var statearr_39509_39580 = state_39459__$1;
(statearr_39509_39580[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (17))){
var state_39459__$1 = state_39459;
var statearr_39510_39581 = state_39459__$1;
(statearr_39510_39581[(2)] = recompile_dependents);

(statearr_39510_39581[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (3))){
var state_39459__$1 = state_39459;
var statearr_39511_39582 = state_39459__$1;
(statearr_39511_39582[(2)] = null);

(statearr_39511_39582[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (12))){
var inst_39349 = (state_39459[(2)]);
var state_39459__$1 = state_39459;
var statearr_39512_39583 = state_39459__$1;
(statearr_39512_39583[(2)] = inst_39349);

(statearr_39512_39583[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (2))){
var inst_39311 = (state_39459[(13)]);
var inst_39318 = cljs.core.seq.call(null,inst_39311);
var inst_39319 = inst_39318;
var inst_39320 = null;
var inst_39321 = (0);
var inst_39322 = (0);
var state_39459__$1 = (function (){var statearr_39513 = state_39459;
(statearr_39513[(7)] = inst_39320);

(statearr_39513[(8)] = inst_39321);

(statearr_39513[(9)] = inst_39322);

(statearr_39513[(10)] = inst_39319);

return statearr_39513;
})();
var statearr_39514_39584 = state_39459__$1;
(statearr_39514_39584[(2)] = null);

(statearr_39514_39584[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (23))){
var inst_39372 = (state_39459[(19)]);
var inst_39376 = (state_39459[(23)]);
var inst_39375 = (state_39459[(24)]);
var inst_39378 = (state_39459[(26)]);
var inst_39380 = (state_39459[(25)]);
var inst_39383 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39385 = (function (){var all_files = inst_39372;
var res_SINGLEQUOTE_ = inst_39375;
var res = inst_39376;
var files_not_loaded = inst_39378;
var dependencies_that_loaded = inst_39380;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39372,inst_39376,inst_39375,inst_39378,inst_39380,inst_39383,state_val_39460,c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39384){
var map__39515 = p__39384;
var map__39515__$1 = ((((!((map__39515 == null)))?((((map__39515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39515):map__39515);
var request_url = cljs.core.get.call(null,map__39515__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39372,inst_39376,inst_39375,inst_39378,inst_39380,inst_39383,state_val_39460,c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39386 = cljs.core.reverse.call(null,inst_39380);
var inst_39387 = cljs.core.map.call(null,inst_39385,inst_39386);
var inst_39388 = cljs.core.pr_str.call(null,inst_39387);
var inst_39389 = figwheel.client.utils.log.call(null,inst_39388);
var state_39459__$1 = (function (){var statearr_39517 = state_39459;
(statearr_39517[(31)] = inst_39383);

return statearr_39517;
})();
var statearr_39518_39585 = state_39459__$1;
(statearr_39518_39585[(2)] = inst_39389);

(statearr_39518_39585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (35))){
var state_39459__$1 = state_39459;
var statearr_39519_39586 = state_39459__$1;
(statearr_39519_39586[(2)] = true);

(statearr_39519_39586[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (19))){
var inst_39362 = (state_39459[(12)]);
var inst_39368 = figwheel.client.file_reloading.expand_files.call(null,inst_39362);
var state_39459__$1 = state_39459;
var statearr_39520_39587 = state_39459__$1;
(statearr_39520_39587[(2)] = inst_39368);

(statearr_39520_39587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (11))){
var state_39459__$1 = state_39459;
var statearr_39521_39588 = state_39459__$1;
(statearr_39521_39588[(2)] = null);

(statearr_39521_39588[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (9))){
var inst_39351 = (state_39459[(2)]);
var state_39459__$1 = state_39459;
var statearr_39522_39589 = state_39459__$1;
(statearr_39522_39589[(2)] = inst_39351);

(statearr_39522_39589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (5))){
var inst_39321 = (state_39459[(8)]);
var inst_39322 = (state_39459[(9)]);
var inst_39324 = (inst_39322 < inst_39321);
var inst_39325 = inst_39324;
var state_39459__$1 = state_39459;
if(cljs.core.truth_(inst_39325)){
var statearr_39523_39590 = state_39459__$1;
(statearr_39523_39590[(1)] = (7));

} else {
var statearr_39524_39591 = state_39459__$1;
(statearr_39524_39591[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (14))){
var inst_39332 = (state_39459[(22)]);
var inst_39341 = cljs.core.first.call(null,inst_39332);
var inst_39342 = figwheel.client.file_reloading.eval_body.call(null,inst_39341,opts);
var inst_39343 = cljs.core.next.call(null,inst_39332);
var inst_39319 = inst_39343;
var inst_39320 = null;
var inst_39321 = (0);
var inst_39322 = (0);
var state_39459__$1 = (function (){var statearr_39525 = state_39459;
(statearr_39525[(32)] = inst_39342);

(statearr_39525[(7)] = inst_39320);

(statearr_39525[(8)] = inst_39321);

(statearr_39525[(9)] = inst_39322);

(statearr_39525[(10)] = inst_39319);

return statearr_39525;
})();
var statearr_39526_39592 = state_39459__$1;
(statearr_39526_39592[(2)] = null);

(statearr_39526_39592[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (45))){
var state_39459__$1 = state_39459;
var statearr_39527_39593 = state_39459__$1;
(statearr_39527_39593[(2)] = null);

(statearr_39527_39593[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (26))){
var inst_39372 = (state_39459[(19)]);
var inst_39376 = (state_39459[(23)]);
var inst_39375 = (state_39459[(24)]);
var inst_39378 = (state_39459[(26)]);
var inst_39380 = (state_39459[(25)]);
var inst_39395 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39397 = (function (){var all_files = inst_39372;
var res_SINGLEQUOTE_ = inst_39375;
var res = inst_39376;
var files_not_loaded = inst_39378;
var dependencies_that_loaded = inst_39380;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39372,inst_39376,inst_39375,inst_39378,inst_39380,inst_39395,state_val_39460,c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39396){
var map__39528 = p__39396;
var map__39528__$1 = ((((!((map__39528 == null)))?((((map__39528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39528):map__39528);
var namespace = cljs.core.get.call(null,map__39528__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39528__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39372,inst_39376,inst_39375,inst_39378,inst_39380,inst_39395,state_val_39460,c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39398 = cljs.core.map.call(null,inst_39397,inst_39376);
var inst_39399 = cljs.core.pr_str.call(null,inst_39398);
var inst_39400 = figwheel.client.utils.log.call(null,inst_39399);
var inst_39401 = (function (){var all_files = inst_39372;
var res_SINGLEQUOTE_ = inst_39375;
var res = inst_39376;
var files_not_loaded = inst_39378;
var dependencies_that_loaded = inst_39380;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39372,inst_39376,inst_39375,inst_39378,inst_39380,inst_39395,inst_39397,inst_39398,inst_39399,inst_39400,state_val_39460,c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39372,inst_39376,inst_39375,inst_39378,inst_39380,inst_39395,inst_39397,inst_39398,inst_39399,inst_39400,state_val_39460,c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39402 = setTimeout(inst_39401,(10));
var state_39459__$1 = (function (){var statearr_39530 = state_39459;
(statearr_39530[(33)] = inst_39400);

(statearr_39530[(34)] = inst_39395);

return statearr_39530;
})();
var statearr_39531_39594 = state_39459__$1;
(statearr_39531_39594[(2)] = inst_39402);

(statearr_39531_39594[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (16))){
var state_39459__$1 = state_39459;
var statearr_39532_39595 = state_39459__$1;
(statearr_39532_39595[(2)] = reload_dependents);

(statearr_39532_39595[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (38))){
var inst_39412 = (state_39459[(16)]);
var inst_39430 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39412);
var state_39459__$1 = state_39459;
var statearr_39533_39596 = state_39459__$1;
(statearr_39533_39596[(2)] = inst_39430);

(statearr_39533_39596[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (30))){
var state_39459__$1 = state_39459;
var statearr_39534_39597 = state_39459__$1;
(statearr_39534_39597[(2)] = null);

(statearr_39534_39597[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (10))){
var inst_39332 = (state_39459[(22)]);
var inst_39334 = cljs.core.chunked_seq_QMARK_.call(null,inst_39332);
var state_39459__$1 = state_39459;
if(inst_39334){
var statearr_39535_39598 = state_39459__$1;
(statearr_39535_39598[(1)] = (13));

} else {
var statearr_39536_39599 = state_39459__$1;
(statearr_39536_39599[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (18))){
var inst_39366 = (state_39459[(2)]);
var state_39459__$1 = state_39459;
if(cljs.core.truth_(inst_39366)){
var statearr_39537_39600 = state_39459__$1;
(statearr_39537_39600[(1)] = (19));

} else {
var statearr_39538_39601 = state_39459__$1;
(statearr_39538_39601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (42))){
var state_39459__$1 = state_39459;
var statearr_39539_39602 = state_39459__$1;
(statearr_39539_39602[(2)] = null);

(statearr_39539_39602[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (37))){
var inst_39425 = (state_39459[(2)]);
var state_39459__$1 = state_39459;
var statearr_39540_39603 = state_39459__$1;
(statearr_39540_39603[(2)] = inst_39425);

(statearr_39540_39603[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (8))){
var inst_39332 = (state_39459[(22)]);
var inst_39319 = (state_39459[(10)]);
var inst_39332__$1 = cljs.core.seq.call(null,inst_39319);
var state_39459__$1 = (function (){var statearr_39541 = state_39459;
(statearr_39541[(22)] = inst_39332__$1);

return statearr_39541;
})();
if(inst_39332__$1){
var statearr_39542_39604 = state_39459__$1;
(statearr_39542_39604[(1)] = (10));

} else {
var statearr_39543_39605 = state_39459__$1;
(statearr_39543_39605[(1)] = (11));

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
}
});})(c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35677__auto__,c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35678__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35678__auto____0 = (function (){
var statearr_39544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39544[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35678__auto__);

(statearr_39544[(1)] = (1));

return statearr_39544;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35678__auto____1 = (function (state_39459){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_39459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e39545){if((e39545 instanceof Object)){
var ex__35681__auto__ = e39545;
var statearr_39546_39606 = state_39459;
(statearr_39546_39606[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39607 = state_39459;
state_39459 = G__39607;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35678__auto__ = function(state_39459){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35678__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35678__auto____1.call(this,state_39459);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35678__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35678__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35769__auto__ = (function (){var statearr_39547 = f__35768__auto__.call(null);
(statearr_39547[(6)] = c__35767__auto__);

return statearr_39547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto__,map__39304,map__39304__$1,opts,before_jsload,on_jsload,reload_dependents,map__39305,map__39305__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35767__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39610,link){
var map__39611 = p__39610;
var map__39611__$1 = ((((!((map__39611 == null)))?((((map__39611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39611):map__39611);
var file = cljs.core.get.call(null,map__39611__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__39611,map__39611__$1,file){
return (function (p1__39608_SHARP_,p2__39609_SHARP_){
if(cljs.core._EQ_.call(null,p1__39608_SHARP_,p2__39609_SHARP_)){
return p1__39608_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__39611,map__39611__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39614){
var map__39615 = p__39614;
var map__39615__$1 = ((((!((map__39615 == null)))?((((map__39615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39615):map__39615);
var match_length = cljs.core.get.call(null,map__39615__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39615__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39613_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39613_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39617_SHARP_,p2__39618_SHARP_){
return cljs.core.assoc.call(null,p1__39617_SHARP_,cljs.core.get.call(null,p2__39618_SHARP_,key),p2__39618_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_39619 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_39619);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_39619);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39620,p__39621){
var map__39622 = p__39620;
var map__39622__$1 = ((((!((map__39622 == null)))?((((map__39622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39622):map__39622);
var on_cssload = cljs.core.get.call(null,map__39622__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__39623 = p__39621;
var map__39623__$1 = ((((!((map__39623 == null)))?((((map__39623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39623.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39623):map__39623);
var files_msg = map__39623__$1;
var files = cljs.core.get.call(null,map__39623__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1514673226162
