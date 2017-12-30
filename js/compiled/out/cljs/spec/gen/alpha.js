// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__30901__auto__,writer__30902__auto__,opt__30903__auto__){
return cljs.core._write.call(null,writer__30902__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39631 = arguments.length;
var i__31510__auto___39632 = (0);
while(true){
if((i__31510__auto___39632 < len__31509__auto___39631)){
args__31516__auto__.push((arguments[i__31510__auto___39632]));

var G__39633 = (i__31510__auto___39632 + (1));
i__31510__auto___39632 = G__39633;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq39630){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39630));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39635 = arguments.length;
var i__31510__auto___39636 = (0);
while(true){
if((i__31510__auto___39636 < len__31509__auto___39635)){
args__31516__auto__.push((arguments[i__31510__auto___39636]));

var G__39637 = (i__31510__auto___39636 + (1));
i__31510__auto___39636 = G__39637;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq39634){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39634));
});

var g_QMARK__39638 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_39639 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__39638){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__39638))
,null));
var mkg_39640 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__39638,g_39639){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__39638,g_39639))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__39638,g_39639,mkg_39640){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__39638).call(null,x);
});})(g_QMARK__39638,g_39639,mkg_39640))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__39638,g_39639,mkg_39640){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_39640).call(null,gfn);
});})(g_QMARK__39638,g_39639,mkg_39640))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__39638,g_39639,mkg_39640){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_39639).call(null,generator);
});})(g_QMARK__39638,g_39639,mkg_39640))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__33158__auto___39660 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__33158__auto___39660){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39661 = arguments.length;
var i__31510__auto___39662 = (0);
while(true){
if((i__31510__auto___39662 < len__31509__auto___39661)){
args__31516__auto__.push((arguments[i__31510__auto___39662]));

var G__39663 = (i__31510__auto___39662 + (1));
i__31510__auto___39662 = G__39663;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39660))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39660){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39660),args);
});})(g__33158__auto___39660))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__33158__auto___39660){
return (function (seq39641){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39641));
});})(g__33158__auto___39660))
;


var g__33158__auto___39664 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__33158__auto___39664){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39665 = arguments.length;
var i__31510__auto___39666 = (0);
while(true){
if((i__31510__auto___39666 < len__31509__auto___39665)){
args__31516__auto__.push((arguments[i__31510__auto___39666]));

var G__39667 = (i__31510__auto___39666 + (1));
i__31510__auto___39666 = G__39667;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39664))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39664){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39664),args);
});})(g__33158__auto___39664))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__33158__auto___39664){
return (function (seq39642){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39642));
});})(g__33158__auto___39664))
;


var g__33158__auto___39668 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__33158__auto___39668){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39669 = arguments.length;
var i__31510__auto___39670 = (0);
while(true){
if((i__31510__auto___39670 < len__31509__auto___39669)){
args__31516__auto__.push((arguments[i__31510__auto___39670]));

var G__39671 = (i__31510__auto___39670 + (1));
i__31510__auto___39670 = G__39671;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39668))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39668){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39668),args);
});})(g__33158__auto___39668))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__33158__auto___39668){
return (function (seq39643){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39643));
});})(g__33158__auto___39668))
;


var g__33158__auto___39672 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__33158__auto___39672){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39673 = arguments.length;
var i__31510__auto___39674 = (0);
while(true){
if((i__31510__auto___39674 < len__31509__auto___39673)){
args__31516__auto__.push((arguments[i__31510__auto___39674]));

var G__39675 = (i__31510__auto___39674 + (1));
i__31510__auto___39674 = G__39675;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39672))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39672){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39672),args);
});})(g__33158__auto___39672))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__33158__auto___39672){
return (function (seq39644){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39644));
});})(g__33158__auto___39672))
;


var g__33158__auto___39676 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__33158__auto___39676){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39677 = arguments.length;
var i__31510__auto___39678 = (0);
while(true){
if((i__31510__auto___39678 < len__31509__auto___39677)){
args__31516__auto__.push((arguments[i__31510__auto___39678]));

var G__39679 = (i__31510__auto___39678 + (1));
i__31510__auto___39678 = G__39679;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39676))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39676){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39676),args);
});})(g__33158__auto___39676))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__33158__auto___39676){
return (function (seq39645){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39645));
});})(g__33158__auto___39676))
;


var g__33158__auto___39680 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__33158__auto___39680){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39681 = arguments.length;
var i__31510__auto___39682 = (0);
while(true){
if((i__31510__auto___39682 < len__31509__auto___39681)){
args__31516__auto__.push((arguments[i__31510__auto___39682]));

var G__39683 = (i__31510__auto___39682 + (1));
i__31510__auto___39682 = G__39683;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39680))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39680){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39680),args);
});})(g__33158__auto___39680))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__33158__auto___39680){
return (function (seq39646){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39646));
});})(g__33158__auto___39680))
;


var g__33158__auto___39684 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__33158__auto___39684){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39685 = arguments.length;
var i__31510__auto___39686 = (0);
while(true){
if((i__31510__auto___39686 < len__31509__auto___39685)){
args__31516__auto__.push((arguments[i__31510__auto___39686]));

var G__39687 = (i__31510__auto___39686 + (1));
i__31510__auto___39686 = G__39687;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39684))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39684){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39684),args);
});})(g__33158__auto___39684))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__33158__auto___39684){
return (function (seq39647){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39647));
});})(g__33158__auto___39684))
;


var g__33158__auto___39688 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__33158__auto___39688){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39689 = arguments.length;
var i__31510__auto___39690 = (0);
while(true){
if((i__31510__auto___39690 < len__31509__auto___39689)){
args__31516__auto__.push((arguments[i__31510__auto___39690]));

var G__39691 = (i__31510__auto___39690 + (1));
i__31510__auto___39690 = G__39691;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39688))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39688){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39688),args);
});})(g__33158__auto___39688))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__33158__auto___39688){
return (function (seq39648){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39648));
});})(g__33158__auto___39688))
;


var g__33158__auto___39692 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__33158__auto___39692){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39693 = arguments.length;
var i__31510__auto___39694 = (0);
while(true){
if((i__31510__auto___39694 < len__31509__auto___39693)){
args__31516__auto__.push((arguments[i__31510__auto___39694]));

var G__39695 = (i__31510__auto___39694 + (1));
i__31510__auto___39694 = G__39695;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39692))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39692){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39692),args);
});})(g__33158__auto___39692))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__33158__auto___39692){
return (function (seq39649){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39649));
});})(g__33158__auto___39692))
;


var g__33158__auto___39696 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__33158__auto___39696){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39697 = arguments.length;
var i__31510__auto___39698 = (0);
while(true){
if((i__31510__auto___39698 < len__31509__auto___39697)){
args__31516__auto__.push((arguments[i__31510__auto___39698]));

var G__39699 = (i__31510__auto___39698 + (1));
i__31510__auto___39698 = G__39699;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39696))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39696){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39696),args);
});})(g__33158__auto___39696))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__33158__auto___39696){
return (function (seq39650){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39650));
});})(g__33158__auto___39696))
;


var g__33158__auto___39700 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__33158__auto___39700){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39701 = arguments.length;
var i__31510__auto___39702 = (0);
while(true){
if((i__31510__auto___39702 < len__31509__auto___39701)){
args__31516__auto__.push((arguments[i__31510__auto___39702]));

var G__39703 = (i__31510__auto___39702 + (1));
i__31510__auto___39702 = G__39703;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39700))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39700){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39700),args);
});})(g__33158__auto___39700))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__33158__auto___39700){
return (function (seq39651){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39651));
});})(g__33158__auto___39700))
;


var g__33158__auto___39704 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__33158__auto___39704){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39705 = arguments.length;
var i__31510__auto___39706 = (0);
while(true){
if((i__31510__auto___39706 < len__31509__auto___39705)){
args__31516__auto__.push((arguments[i__31510__auto___39706]));

var G__39707 = (i__31510__auto___39706 + (1));
i__31510__auto___39706 = G__39707;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39704))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39704){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39704),args);
});})(g__33158__auto___39704))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__33158__auto___39704){
return (function (seq39652){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39652));
});})(g__33158__auto___39704))
;


var g__33158__auto___39708 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__33158__auto___39708){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39709 = arguments.length;
var i__31510__auto___39710 = (0);
while(true){
if((i__31510__auto___39710 < len__31509__auto___39709)){
args__31516__auto__.push((arguments[i__31510__auto___39710]));

var G__39711 = (i__31510__auto___39710 + (1));
i__31510__auto___39710 = G__39711;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39708))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39708){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39708),args);
});})(g__33158__auto___39708))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__33158__auto___39708){
return (function (seq39653){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39653));
});})(g__33158__auto___39708))
;


var g__33158__auto___39712 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__33158__auto___39712){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39713 = arguments.length;
var i__31510__auto___39714 = (0);
while(true){
if((i__31510__auto___39714 < len__31509__auto___39713)){
args__31516__auto__.push((arguments[i__31510__auto___39714]));

var G__39715 = (i__31510__auto___39714 + (1));
i__31510__auto___39714 = G__39715;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39712))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39712){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39712),args);
});})(g__33158__auto___39712))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__33158__auto___39712){
return (function (seq39654){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39654));
});})(g__33158__auto___39712))
;


var g__33158__auto___39716 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__33158__auto___39716){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39717 = arguments.length;
var i__31510__auto___39718 = (0);
while(true){
if((i__31510__auto___39718 < len__31509__auto___39717)){
args__31516__auto__.push((arguments[i__31510__auto___39718]));

var G__39719 = (i__31510__auto___39718 + (1));
i__31510__auto___39718 = G__39719;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39716))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39716){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39716),args);
});})(g__33158__auto___39716))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__33158__auto___39716){
return (function (seq39655){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39655));
});})(g__33158__auto___39716))
;


var g__33158__auto___39720 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__33158__auto___39720){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39721 = arguments.length;
var i__31510__auto___39722 = (0);
while(true){
if((i__31510__auto___39722 < len__31509__auto___39721)){
args__31516__auto__.push((arguments[i__31510__auto___39722]));

var G__39723 = (i__31510__auto___39722 + (1));
i__31510__auto___39722 = G__39723;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39720))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39720){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39720),args);
});})(g__33158__auto___39720))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__33158__auto___39720){
return (function (seq39656){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39656));
});})(g__33158__auto___39720))
;


var g__33158__auto___39724 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__33158__auto___39724){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39725 = arguments.length;
var i__31510__auto___39726 = (0);
while(true){
if((i__31510__auto___39726 < len__31509__auto___39725)){
args__31516__auto__.push((arguments[i__31510__auto___39726]));

var G__39727 = (i__31510__auto___39726 + (1));
i__31510__auto___39726 = G__39727;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39724))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39724){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39724),args);
});})(g__33158__auto___39724))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__33158__auto___39724){
return (function (seq39657){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39657));
});})(g__33158__auto___39724))
;


var g__33158__auto___39728 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__33158__auto___39728){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39729 = arguments.length;
var i__31510__auto___39730 = (0);
while(true){
if((i__31510__auto___39730 < len__31509__auto___39729)){
args__31516__auto__.push((arguments[i__31510__auto___39730]));

var G__39731 = (i__31510__auto___39730 + (1));
i__31510__auto___39730 = G__39731;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39728))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39728){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39728),args);
});})(g__33158__auto___39728))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__33158__auto___39728){
return (function (seq39658){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39658));
});})(g__33158__auto___39728))
;


var g__33158__auto___39732 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__33158__auto___39732){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39733 = arguments.length;
var i__31510__auto___39734 = (0);
while(true){
if((i__31510__auto___39734 < len__31509__auto___39733)){
args__31516__auto__.push((arguments[i__31510__auto___39734]));

var G__39735 = (i__31510__auto___39734 + (1));
i__31510__auto___39734 = G__39735;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33158__auto___39732))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33158__auto___39732){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33158__auto___39732),args);
});})(g__33158__auto___39732))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__33158__auto___39732){
return (function (seq39659){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39659));
});})(g__33158__auto___39732))
;

var g__33171__auto___39757 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__33171__auto___39757){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39758 = arguments.length;
var i__31510__auto___39759 = (0);
while(true){
if((i__31510__auto___39759 < len__31509__auto___39758)){
args__31516__auto__.push((arguments[i__31510__auto___39759]));

var G__39760 = (i__31510__auto___39759 + (1));
i__31510__auto___39759 = G__39760;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39757))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39757){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39757);
});})(g__33171__auto___39757))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__33171__auto___39757){
return (function (seq39736){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39736));
});})(g__33171__auto___39757))
;


var g__33171__auto___39761 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__33171__auto___39761){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39762 = arguments.length;
var i__31510__auto___39763 = (0);
while(true){
if((i__31510__auto___39763 < len__31509__auto___39762)){
args__31516__auto__.push((arguments[i__31510__auto___39763]));

var G__39764 = (i__31510__auto___39763 + (1));
i__31510__auto___39763 = G__39764;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39761))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39761){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39761);
});})(g__33171__auto___39761))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__33171__auto___39761){
return (function (seq39737){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39737));
});})(g__33171__auto___39761))
;


var g__33171__auto___39765 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__33171__auto___39765){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39766 = arguments.length;
var i__31510__auto___39767 = (0);
while(true){
if((i__31510__auto___39767 < len__31509__auto___39766)){
args__31516__auto__.push((arguments[i__31510__auto___39767]));

var G__39768 = (i__31510__auto___39767 + (1));
i__31510__auto___39767 = G__39768;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39765))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39765){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39765);
});})(g__33171__auto___39765))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__33171__auto___39765){
return (function (seq39738){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39738));
});})(g__33171__auto___39765))
;


var g__33171__auto___39769 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__33171__auto___39769){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39770 = arguments.length;
var i__31510__auto___39771 = (0);
while(true){
if((i__31510__auto___39771 < len__31509__auto___39770)){
args__31516__auto__.push((arguments[i__31510__auto___39771]));

var G__39772 = (i__31510__auto___39771 + (1));
i__31510__auto___39771 = G__39772;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39769))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39769){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39769);
});})(g__33171__auto___39769))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__33171__auto___39769){
return (function (seq39739){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39739));
});})(g__33171__auto___39769))
;


var g__33171__auto___39773 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__33171__auto___39773){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39774 = arguments.length;
var i__31510__auto___39775 = (0);
while(true){
if((i__31510__auto___39775 < len__31509__auto___39774)){
args__31516__auto__.push((arguments[i__31510__auto___39775]));

var G__39776 = (i__31510__auto___39775 + (1));
i__31510__auto___39775 = G__39776;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39773))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39773){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39773);
});})(g__33171__auto___39773))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__33171__auto___39773){
return (function (seq39740){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39740));
});})(g__33171__auto___39773))
;


var g__33171__auto___39777 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__33171__auto___39777){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39778 = arguments.length;
var i__31510__auto___39779 = (0);
while(true){
if((i__31510__auto___39779 < len__31509__auto___39778)){
args__31516__auto__.push((arguments[i__31510__auto___39779]));

var G__39780 = (i__31510__auto___39779 + (1));
i__31510__auto___39779 = G__39780;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39777))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39777){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39777);
});})(g__33171__auto___39777))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__33171__auto___39777){
return (function (seq39741){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39741));
});})(g__33171__auto___39777))
;


var g__33171__auto___39781 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__33171__auto___39781){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39782 = arguments.length;
var i__31510__auto___39783 = (0);
while(true){
if((i__31510__auto___39783 < len__31509__auto___39782)){
args__31516__auto__.push((arguments[i__31510__auto___39783]));

var G__39784 = (i__31510__auto___39783 + (1));
i__31510__auto___39783 = G__39784;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39781))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39781){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39781);
});})(g__33171__auto___39781))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__33171__auto___39781){
return (function (seq39742){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39742));
});})(g__33171__auto___39781))
;


var g__33171__auto___39785 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__33171__auto___39785){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39786 = arguments.length;
var i__31510__auto___39787 = (0);
while(true){
if((i__31510__auto___39787 < len__31509__auto___39786)){
args__31516__auto__.push((arguments[i__31510__auto___39787]));

var G__39788 = (i__31510__auto___39787 + (1));
i__31510__auto___39787 = G__39788;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39785))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39785){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39785);
});})(g__33171__auto___39785))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__33171__auto___39785){
return (function (seq39743){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39743));
});})(g__33171__auto___39785))
;


var g__33171__auto___39789 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__33171__auto___39789){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39790 = arguments.length;
var i__31510__auto___39791 = (0);
while(true){
if((i__31510__auto___39791 < len__31509__auto___39790)){
args__31516__auto__.push((arguments[i__31510__auto___39791]));

var G__39792 = (i__31510__auto___39791 + (1));
i__31510__auto___39791 = G__39792;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39789))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39789){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39789);
});})(g__33171__auto___39789))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__33171__auto___39789){
return (function (seq39744){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39744));
});})(g__33171__auto___39789))
;


var g__33171__auto___39793 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__33171__auto___39793){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39794 = arguments.length;
var i__31510__auto___39795 = (0);
while(true){
if((i__31510__auto___39795 < len__31509__auto___39794)){
args__31516__auto__.push((arguments[i__31510__auto___39795]));

var G__39796 = (i__31510__auto___39795 + (1));
i__31510__auto___39795 = G__39796;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39793))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39793){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39793);
});})(g__33171__auto___39793))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__33171__auto___39793){
return (function (seq39745){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39745));
});})(g__33171__auto___39793))
;


var g__33171__auto___39797 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__33171__auto___39797){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39798 = arguments.length;
var i__31510__auto___39799 = (0);
while(true){
if((i__31510__auto___39799 < len__31509__auto___39798)){
args__31516__auto__.push((arguments[i__31510__auto___39799]));

var G__39800 = (i__31510__auto___39799 + (1));
i__31510__auto___39799 = G__39800;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39797))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39797){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39797);
});})(g__33171__auto___39797))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__33171__auto___39797){
return (function (seq39746){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39746));
});})(g__33171__auto___39797))
;


var g__33171__auto___39801 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__33171__auto___39801){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39802 = arguments.length;
var i__31510__auto___39803 = (0);
while(true){
if((i__31510__auto___39803 < len__31509__auto___39802)){
args__31516__auto__.push((arguments[i__31510__auto___39803]));

var G__39804 = (i__31510__auto___39803 + (1));
i__31510__auto___39803 = G__39804;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39801))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39801){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39801);
});})(g__33171__auto___39801))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__33171__auto___39801){
return (function (seq39747){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39747));
});})(g__33171__auto___39801))
;


var g__33171__auto___39805 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__33171__auto___39805){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39806 = arguments.length;
var i__31510__auto___39807 = (0);
while(true){
if((i__31510__auto___39807 < len__31509__auto___39806)){
args__31516__auto__.push((arguments[i__31510__auto___39807]));

var G__39808 = (i__31510__auto___39807 + (1));
i__31510__auto___39807 = G__39808;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39805))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39805){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39805);
});})(g__33171__auto___39805))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__33171__auto___39805){
return (function (seq39748){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39748));
});})(g__33171__auto___39805))
;


var g__33171__auto___39809 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__33171__auto___39809){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39810 = arguments.length;
var i__31510__auto___39811 = (0);
while(true){
if((i__31510__auto___39811 < len__31509__auto___39810)){
args__31516__auto__.push((arguments[i__31510__auto___39811]));

var G__39812 = (i__31510__auto___39811 + (1));
i__31510__auto___39811 = G__39812;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39809))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39809){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39809);
});})(g__33171__auto___39809))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__33171__auto___39809){
return (function (seq39749){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39749));
});})(g__33171__auto___39809))
;


var g__33171__auto___39813 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__33171__auto___39813){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39814 = arguments.length;
var i__31510__auto___39815 = (0);
while(true){
if((i__31510__auto___39815 < len__31509__auto___39814)){
args__31516__auto__.push((arguments[i__31510__auto___39815]));

var G__39816 = (i__31510__auto___39815 + (1));
i__31510__auto___39815 = G__39816;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39813))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39813){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39813);
});})(g__33171__auto___39813))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__33171__auto___39813){
return (function (seq39750){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39750));
});})(g__33171__auto___39813))
;


var g__33171__auto___39817 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__33171__auto___39817){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39818 = arguments.length;
var i__31510__auto___39819 = (0);
while(true){
if((i__31510__auto___39819 < len__31509__auto___39818)){
args__31516__auto__.push((arguments[i__31510__auto___39819]));

var G__39820 = (i__31510__auto___39819 + (1));
i__31510__auto___39819 = G__39820;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39817))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39817){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39817);
});})(g__33171__auto___39817))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__33171__auto___39817){
return (function (seq39751){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39751));
});})(g__33171__auto___39817))
;


var g__33171__auto___39821 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__33171__auto___39821){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39822 = arguments.length;
var i__31510__auto___39823 = (0);
while(true){
if((i__31510__auto___39823 < len__31509__auto___39822)){
args__31516__auto__.push((arguments[i__31510__auto___39823]));

var G__39824 = (i__31510__auto___39823 + (1));
i__31510__auto___39823 = G__39824;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39821))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39821){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39821);
});})(g__33171__auto___39821))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__33171__auto___39821){
return (function (seq39752){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39752));
});})(g__33171__auto___39821))
;


var g__33171__auto___39825 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__33171__auto___39825){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39826 = arguments.length;
var i__31510__auto___39827 = (0);
while(true){
if((i__31510__auto___39827 < len__31509__auto___39826)){
args__31516__auto__.push((arguments[i__31510__auto___39827]));

var G__39828 = (i__31510__auto___39827 + (1));
i__31510__auto___39827 = G__39828;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39825))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39825){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39825);
});})(g__33171__auto___39825))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__33171__auto___39825){
return (function (seq39753){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39753));
});})(g__33171__auto___39825))
;


var g__33171__auto___39829 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__33171__auto___39829){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39830 = arguments.length;
var i__31510__auto___39831 = (0);
while(true){
if((i__31510__auto___39831 < len__31509__auto___39830)){
args__31516__auto__.push((arguments[i__31510__auto___39831]));

var G__39832 = (i__31510__auto___39831 + (1));
i__31510__auto___39831 = G__39832;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39829))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39829){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39829);
});})(g__33171__auto___39829))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__33171__auto___39829){
return (function (seq39754){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39754));
});})(g__33171__auto___39829))
;


var g__33171__auto___39833 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__33171__auto___39833){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39834 = arguments.length;
var i__31510__auto___39835 = (0);
while(true){
if((i__31510__auto___39835 < len__31509__auto___39834)){
args__31516__auto__.push((arguments[i__31510__auto___39835]));

var G__39836 = (i__31510__auto___39835 + (1));
i__31510__auto___39835 = G__39836;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39833))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39833){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39833);
});})(g__33171__auto___39833))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__33171__auto___39833){
return (function (seq39755){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39755));
});})(g__33171__auto___39833))
;


var g__33171__auto___39837 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__33171__auto___39837){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39838 = arguments.length;
var i__31510__auto___39839 = (0);
while(true){
if((i__31510__auto___39839 < len__31509__auto___39838)){
args__31516__auto__.push((arguments[i__31510__auto___39839]));

var G__39840 = (i__31510__auto___39839 + (1));
i__31510__auto___39839 = G__39840;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});})(g__33171__auto___39837))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33171__auto___39837){
return (function (args){
return cljs.core.deref.call(null,g__33171__auto___39837);
});})(g__33171__auto___39837))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__33171__auto___39837){
return (function (seq39756){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39756));
});})(g__33171__auto___39837))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31516__auto__ = [];
var len__31509__auto___39843 = arguments.length;
var i__31510__auto___39844 = (0);
while(true){
if((i__31510__auto___39844 < len__31509__auto___39843)){
args__31516__auto__.push((arguments[i__31510__auto___39844]));

var G__39845 = (i__31510__auto___39844 + (1));
i__31510__auto___39844 = G__39845;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__39841_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__39841_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq39842){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39842));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__39846_SHARP_){
return (new Date(p1__39846_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1514673226503
