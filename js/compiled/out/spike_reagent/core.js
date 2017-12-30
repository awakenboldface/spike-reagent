// Compiled by ClojureScript 1.9.946 {}
goog.provide('spike_reagent.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/spike-reagent/core.cljs. Go ahead and edit it and see reloading in action.");
if(typeof spike_reagent.core.app_state !== 'undefined'){
} else {
spike_reagent.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"New York Yankees is American baseball team."], null));
}
spike_reagent.core.url = "http://35.186.236.218/";
if(typeof spike_reagent.core.output_state !== 'undefined'){
} else {
spike_reagent.core.output_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null));
}
spike_reagent.core.nativize = (function spike_reagent$core$nativize(){
return ajax.core.POST.call(null,spike_reagent.core.url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (x){
cljs.core.println.call(null,x);

return cljs.core.reset_BANG_.call(null,spike_reagent.core.output_state,cljs.reader.read_string.call(null,x));
}),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/edn"], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,cljs.core.deref.call(null,spike_reagent.core.app_state)),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"raw","raw",1604651272)], null));
});
spike_reagent.core.hello_world = (function spike_reagent$core$hello_world(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"8rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_.call(null,spike_reagent.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),e.target.value], null));
})], null),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,spike_reagent.core.app_state))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"2rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),spike_reagent.core.nativize], null),"Nativize"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,spike_reagent.core.output_state))], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spike_reagent.core.hello_world], null),document.getElementById("app"));
spike_reagent.core.on_js_reload = (function spike_reagent$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1514676536865
