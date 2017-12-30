// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40426){
var map__40427 = p__40426;
var map__40427__$1 = ((((!((map__40427 == null)))?((((map__40427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40427):map__40427);
var m = map__40427__$1;
var n = cljs.core.get.call(null,map__40427__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__40427__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40429_40451 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40430_40452 = null;
var count__40431_40453 = (0);
var i__40432_40454 = (0);
while(true){
if((i__40432_40454 < count__40431_40453)){
var f_40455 = cljs.core._nth.call(null,chunk__40430_40452,i__40432_40454);
cljs.core.println.call(null,"  ",f_40455);

var G__40456 = seq__40429_40451;
var G__40457 = chunk__40430_40452;
var G__40458 = count__40431_40453;
var G__40459 = (i__40432_40454 + (1));
seq__40429_40451 = G__40456;
chunk__40430_40452 = G__40457;
count__40431_40453 = G__40458;
i__40432_40454 = G__40459;
continue;
} else {
var temp__5457__auto___40460 = cljs.core.seq.call(null,seq__40429_40451);
if(temp__5457__auto___40460){
var seq__40429_40461__$1 = temp__5457__auto___40460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40429_40461__$1)){
var c__31161__auto___40462 = cljs.core.chunk_first.call(null,seq__40429_40461__$1);
var G__40463 = cljs.core.chunk_rest.call(null,seq__40429_40461__$1);
var G__40464 = c__31161__auto___40462;
var G__40465 = cljs.core.count.call(null,c__31161__auto___40462);
var G__40466 = (0);
seq__40429_40451 = G__40463;
chunk__40430_40452 = G__40464;
count__40431_40453 = G__40465;
i__40432_40454 = G__40466;
continue;
} else {
var f_40467 = cljs.core.first.call(null,seq__40429_40461__$1);
cljs.core.println.call(null,"  ",f_40467);

var G__40468 = cljs.core.next.call(null,seq__40429_40461__$1);
var G__40469 = null;
var G__40470 = (0);
var G__40471 = (0);
seq__40429_40451 = G__40468;
chunk__40430_40452 = G__40469;
count__40431_40453 = G__40470;
i__40432_40454 = G__40471;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40472 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30230__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30230__auto__)){
return or__30230__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40472);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40472)))?cljs.core.second.call(null,arglists_40472):arglists_40472));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40433_40473 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40434_40474 = null;
var count__40435_40475 = (0);
var i__40436_40476 = (0);
while(true){
if((i__40436_40476 < count__40435_40475)){
var vec__40437_40477 = cljs.core._nth.call(null,chunk__40434_40474,i__40436_40476);
var name_40478 = cljs.core.nth.call(null,vec__40437_40477,(0),null);
var map__40440_40479 = cljs.core.nth.call(null,vec__40437_40477,(1),null);
var map__40440_40480__$1 = ((((!((map__40440_40479 == null)))?((((map__40440_40479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40440_40479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40440_40479):map__40440_40479);
var doc_40481 = cljs.core.get.call(null,map__40440_40480__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40482 = cljs.core.get.call(null,map__40440_40480__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40478);

cljs.core.println.call(null," ",arglists_40482);

if(cljs.core.truth_(doc_40481)){
cljs.core.println.call(null," ",doc_40481);
} else {
}

var G__40483 = seq__40433_40473;
var G__40484 = chunk__40434_40474;
var G__40485 = count__40435_40475;
var G__40486 = (i__40436_40476 + (1));
seq__40433_40473 = G__40483;
chunk__40434_40474 = G__40484;
count__40435_40475 = G__40485;
i__40436_40476 = G__40486;
continue;
} else {
var temp__5457__auto___40487 = cljs.core.seq.call(null,seq__40433_40473);
if(temp__5457__auto___40487){
var seq__40433_40488__$1 = temp__5457__auto___40487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40433_40488__$1)){
var c__31161__auto___40489 = cljs.core.chunk_first.call(null,seq__40433_40488__$1);
var G__40490 = cljs.core.chunk_rest.call(null,seq__40433_40488__$1);
var G__40491 = c__31161__auto___40489;
var G__40492 = cljs.core.count.call(null,c__31161__auto___40489);
var G__40493 = (0);
seq__40433_40473 = G__40490;
chunk__40434_40474 = G__40491;
count__40435_40475 = G__40492;
i__40436_40476 = G__40493;
continue;
} else {
var vec__40442_40494 = cljs.core.first.call(null,seq__40433_40488__$1);
var name_40495 = cljs.core.nth.call(null,vec__40442_40494,(0),null);
var map__40445_40496 = cljs.core.nth.call(null,vec__40442_40494,(1),null);
var map__40445_40497__$1 = ((((!((map__40445_40496 == null)))?((((map__40445_40496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40445_40496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40445_40496):map__40445_40496);
var doc_40498 = cljs.core.get.call(null,map__40445_40497__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40499 = cljs.core.get.call(null,map__40445_40497__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40495);

cljs.core.println.call(null," ",arglists_40499);

if(cljs.core.truth_(doc_40498)){
cljs.core.println.call(null," ",doc_40498);
} else {
}

var G__40500 = cljs.core.next.call(null,seq__40433_40488__$1);
var G__40501 = null;
var G__40502 = (0);
var G__40503 = (0);
seq__40433_40473 = G__40500;
chunk__40434_40474 = G__40501;
count__40435_40475 = G__40502;
i__40436_40476 = G__40503;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__40447 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40448 = null;
var count__40449 = (0);
var i__40450 = (0);
while(true){
if((i__40450 < count__40449)){
var role = cljs.core._nth.call(null,chunk__40448,i__40450);
var temp__5457__auto___40504__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___40504__$1)){
var spec_40505 = temp__5457__auto___40504__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40505));
} else {
}

var G__40506 = seq__40447;
var G__40507 = chunk__40448;
var G__40508 = count__40449;
var G__40509 = (i__40450 + (1));
seq__40447 = G__40506;
chunk__40448 = G__40507;
count__40449 = G__40508;
i__40450 = G__40509;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__40447);
if(temp__5457__auto____$1){
var seq__40447__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40447__$1)){
var c__31161__auto__ = cljs.core.chunk_first.call(null,seq__40447__$1);
var G__40510 = cljs.core.chunk_rest.call(null,seq__40447__$1);
var G__40511 = c__31161__auto__;
var G__40512 = cljs.core.count.call(null,c__31161__auto__);
var G__40513 = (0);
seq__40447 = G__40510;
chunk__40448 = G__40511;
count__40449 = G__40512;
i__40450 = G__40513;
continue;
} else {
var role = cljs.core.first.call(null,seq__40447__$1);
var temp__5457__auto___40514__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___40514__$2)){
var spec_40515 = temp__5457__auto___40514__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40515));
} else {
}

var G__40516 = cljs.core.next.call(null,seq__40447__$1);
var G__40517 = null;
var G__40518 = (0);
var G__40519 = (0);
seq__40447 = G__40516;
chunk__40448 = G__40517;
count__40449 = G__40518;
i__40450 = G__40519;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1514673227562
