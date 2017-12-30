// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__33605__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33605 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33606__i = 0, G__33606__a = new Array(arguments.length -  0);
while (G__33606__i < G__33606__a.length) {G__33606__a[G__33606__i] = arguments[G__33606__i + 0]; ++G__33606__i;}
  args = new cljs.core.IndexedSeq(G__33606__a,0,null);
} 
return G__33605__delegate.call(this,args);};
G__33605.cljs$lang$maxFixedArity = 0;
G__33605.cljs$lang$applyTo = (function (arglist__33607){
var args = cljs.core.seq(arglist__33607);
return G__33605__delegate(args);
});
G__33605.cljs$core$IFn$_invoke$arity$variadic = G__33605__delegate;
return G__33605;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__33608__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33608 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33609__i = 0, G__33609__a = new Array(arguments.length -  0);
while (G__33609__i < G__33609__a.length) {G__33609__a[G__33609__i] = arguments[G__33609__i + 0]; ++G__33609__i;}
  args = new cljs.core.IndexedSeq(G__33609__a,0,null);
} 
return G__33608__delegate.call(this,args);};
G__33608.cljs$lang$maxFixedArity = 0;
G__33608.cljs$lang$applyTo = (function (arglist__33610){
var args = cljs.core.seq(arglist__33610);
return G__33608__delegate(args);
});
G__33608.cljs$core$IFn$_invoke$arity$variadic = G__33608__delegate;
return G__33608;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1514673220146
