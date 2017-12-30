// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__31516__auto__ = [];
var len__31509__auto___40539 = arguments.length;
var i__31510__auto___40540 = (0);
while(true){
if((i__31510__auto___40540 < len__31509__auto___40539)){
args__31516__auto__.push((arguments[i__31510__auto___40540]));

var G__40541 = (i__31510__auto___40540 + (1));
i__31510__auto___40540 = G__40541;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((2) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31517__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__40531_40542 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__40532_40543 = null;
var count__40533_40544 = (0);
var i__40534_40545 = (0);
while(true){
if((i__40534_40545 < count__40533_40544)){
var k_40546 = cljs.core._nth.call(null,chunk__40532_40543,i__40534_40545);
e.setAttribute(cljs.core.name.call(null,k_40546),cljs.core.get.call(null,attrs,k_40546));

var G__40547 = seq__40531_40542;
var G__40548 = chunk__40532_40543;
var G__40549 = count__40533_40544;
var G__40550 = (i__40534_40545 + (1));
seq__40531_40542 = G__40547;
chunk__40532_40543 = G__40548;
count__40533_40544 = G__40549;
i__40534_40545 = G__40550;
continue;
} else {
var temp__5457__auto___40551 = cljs.core.seq.call(null,seq__40531_40542);
if(temp__5457__auto___40551){
var seq__40531_40552__$1 = temp__5457__auto___40551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40531_40552__$1)){
var c__31161__auto___40553 = cljs.core.chunk_first.call(null,seq__40531_40552__$1);
var G__40554 = cljs.core.chunk_rest.call(null,seq__40531_40552__$1);
var G__40555 = c__31161__auto___40553;
var G__40556 = cljs.core.count.call(null,c__31161__auto___40553);
var G__40557 = (0);
seq__40531_40542 = G__40554;
chunk__40532_40543 = G__40555;
count__40533_40544 = G__40556;
i__40534_40545 = G__40557;
continue;
} else {
var k_40558 = cljs.core.first.call(null,seq__40531_40552__$1);
e.setAttribute(cljs.core.name.call(null,k_40558),cljs.core.get.call(null,attrs,k_40558));

var G__40559 = cljs.core.next.call(null,seq__40531_40552__$1);
var G__40560 = null;
var G__40561 = (0);
var G__40562 = (0);
seq__40531_40542 = G__40559;
chunk__40532_40543 = G__40560;
count__40533_40544 = G__40561;
i__40534_40545 = G__40562;
continue;
}
} else {
}
}
break;
}

var seq__40535_40563 = cljs.core.seq.call(null,children);
var chunk__40536_40564 = null;
var count__40537_40565 = (0);
var i__40538_40566 = (0);
while(true){
if((i__40538_40566 < count__40537_40565)){
var ch_40567 = cljs.core._nth.call(null,chunk__40536_40564,i__40538_40566);
e.appendChild(ch_40567);

var G__40568 = seq__40535_40563;
var G__40569 = chunk__40536_40564;
var G__40570 = count__40537_40565;
var G__40571 = (i__40538_40566 + (1));
seq__40535_40563 = G__40568;
chunk__40536_40564 = G__40569;
count__40537_40565 = G__40570;
i__40538_40566 = G__40571;
continue;
} else {
var temp__5457__auto___40572 = cljs.core.seq.call(null,seq__40535_40563);
if(temp__5457__auto___40572){
var seq__40535_40573__$1 = temp__5457__auto___40572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40535_40573__$1)){
var c__31161__auto___40574 = cljs.core.chunk_first.call(null,seq__40535_40573__$1);
var G__40575 = cljs.core.chunk_rest.call(null,seq__40535_40573__$1);
var G__40576 = c__31161__auto___40574;
var G__40577 = cljs.core.count.call(null,c__31161__auto___40574);
var G__40578 = (0);
seq__40535_40563 = G__40575;
chunk__40536_40564 = G__40576;
count__40537_40565 = G__40577;
i__40538_40566 = G__40578;
continue;
} else {
var ch_40579 = cljs.core.first.call(null,seq__40535_40573__$1);
e.appendChild(ch_40579);

var G__40580 = cljs.core.next.call(null,seq__40535_40573__$1);
var G__40581 = null;
var G__40582 = (0);
var G__40583 = (0);
seq__40535_40563 = G__40580;
chunk__40536_40564 = G__40581;
count__40537_40565 = G__40582;
i__40538_40566 = G__40583;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq40528){
var G__40529 = cljs.core.first.call(null,seq40528);
var seq40528__$1 = cljs.core.next.call(null,seq40528);
var G__40530 = cljs.core.first.call(null,seq40528__$1);
var seq40528__$2 = cljs.core.next.call(null,seq40528__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__40529,G__40530,seq40528__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__31285__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31286__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31287__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31288__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31289__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__31285__auto__,prefer_table__31286__auto__,method_cache__31287__auto__,cached_hierarchy__31288__auto__,hierarchy__31289__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__31285__auto__,prefer_table__31286__auto__,method_cache__31287__auto__,cached_hierarchy__31288__auto__,hierarchy__31289__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31289__auto__,method_table__31285__auto__,prefer_table__31286__auto__,method_cache__31287__auto__,cached_hierarchy__31288__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_40584 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_40584.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_40584.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_40584.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_40584);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__40585,st_map){
var map__40586 = p__40585;
var map__40586__$1 = ((((!((map__40586 == null)))?((((map__40586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40586):map__40586);
var container_el = cljs.core.get.call(null,map__40586__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__40586,map__40586__$1,container_el){
return (function (p__40588){
var vec__40589 = p__40588;
var k = cljs.core.nth.call(null,vec__40589,(0),null);
var v = cljs.core.nth.call(null,vec__40589,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__40586,map__40586__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__40592,dom_str){
var map__40593 = p__40592;
var map__40593__$1 = ((((!((map__40593 == null)))?((((map__40593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40593):map__40593);
var c = map__40593__$1;
var content_area_el = cljs.core.get.call(null,map__40593__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__40595){
var map__40596 = p__40595;
var map__40596__$1 = ((((!((map__40596 == null)))?((((map__40596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40596):map__40596);
var content_area_el = cljs.core.get.call(null,map__40596__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__35767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto__){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto__){
return (function (state_40613){
var state_val_40614 = (state_40613[(1)]);
if((state_val_40614 === (1))){
var inst_40598 = (state_40613[(7)]);
var inst_40598__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_40599 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_40600 = ["10px","10px","100%","68px","1.0"];
var inst_40601 = cljs.core.PersistentHashMap.fromArrays(inst_40599,inst_40600);
var inst_40602 = cljs.core.merge.call(null,inst_40601,style);
var inst_40603 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40598__$1,inst_40602);
var inst_40604 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_40598__$1,msg);
var inst_40605 = cljs.core.async.timeout.call(null,(300));
var state_40613__$1 = (function (){var statearr_40615 = state_40613;
(statearr_40615[(7)] = inst_40598__$1);

(statearr_40615[(8)] = inst_40604);

(statearr_40615[(9)] = inst_40603);

return statearr_40615;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40613__$1,(2),inst_40605);
} else {
if((state_val_40614 === (2))){
var inst_40598 = (state_40613[(7)]);
var inst_40607 = (state_40613[(2)]);
var inst_40608 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_40609 = ["auto"];
var inst_40610 = cljs.core.PersistentHashMap.fromArrays(inst_40608,inst_40609);
var inst_40611 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40598,inst_40610);
var state_40613__$1 = (function (){var statearr_40616 = state_40613;
(statearr_40616[(10)] = inst_40607);

return statearr_40616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40613__$1,inst_40611);
} else {
return null;
}
}
});})(c__35767__auto__))
;
return ((function (switch__35677__auto__,c__35767__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__35678__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__35678__auto____0 = (function (){
var statearr_40617 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40617[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__35678__auto__);

(statearr_40617[(1)] = (1));

return statearr_40617;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__35678__auto____1 = (function (state_40613){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_40613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e40618){if((e40618 instanceof Object)){
var ex__35681__auto__ = e40618;
var statearr_40619_40621 = state_40613;
(statearr_40619_40621[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40622 = state_40613;
state_40613 = G__40622;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__35678__auto__ = function(state_40613){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__35678__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__35678__auto____1.call(this,state_40613);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__35678__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__35678__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto__))
})();
var state__35769__auto__ = (function (){var statearr_40620 = f__35768__auto__.call(null);
(statearr_40620[(6)] = c__35767__auto__);

return statearr_40620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto__))
);

return c__35767__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__40624 = arguments.length;
switch (G__40624) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__40626){
var map__40627 = p__40626;
var map__40627__$1 = ((((!((map__40627 == null)))?((((map__40627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40627):map__40627);
var file = cljs.core.get.call(null,map__40627__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40627__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40627__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__30230__auto__ = file;
if(cljs.core.truth_(or__30230__auto__)){
return or__30230__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__40629){
var vec__40630 = p__40629;
var typ = cljs.core.nth.call(null,vec__40630,(0),null);
var line_number = cljs.core.nth.call(null,vec__40630,(1),null);
var line = cljs.core.nth.call(null,vec__40630,(2),null);
var pred__40633 = cljs.core._EQ_;
var expr__40634 = typ;
if(cljs.core.truth_(pred__40633.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__40634))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__40633.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__40634))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__40633.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__40634))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__40636_SHARP_){
return cljs.core.update_in.call(null,p1__40636_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__40637_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__40637_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__40640){
var map__40641 = p__40640;
var map__40641__$1 = ((((!((map__40641 == null)))?((((map__40641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40641.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40641):map__40641);
var exception = map__40641__$1;
var message = cljs.core.get.call(null,map__40641__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__40641__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__40641__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__40641__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__40641__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__40641__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__40641__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__40641__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__40641__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__40641__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__40641__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__30218__auto__ = file;
if(cljs.core.truth_(and__30218__auto__)){
return line;
} else {
return and__30218__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__40641,map__40641__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__40638_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40638_SHARP_),"</div>"].join('');
});})(last_message,map__40641,map__40641__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__40641,map__40641__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__40639_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__40639_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__40639_SHARP_)))].join('');
});})(last_message,map__40641,map__40641__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__40643){
var map__40644 = p__40643;
var map__40644__$1 = ((((!((map__40644 == null)))?((((map__40644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40644):map__40644);
var file = cljs.core.get.call(null,map__40644__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40644__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40644__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__40647 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__40647__$1 = ((((!((map__40647 == null)))?((((map__40647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40647):map__40647);
var head = cljs.core.get.call(null,map__40647__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__40647__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__40647__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__40647__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__40647__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40647__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40647__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__40650){
var map__40651 = p__40650;
var map__40651__$1 = ((((!((map__40651 == null)))?((((map__40651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40651):map__40651);
var warning_data = map__40651__$1;
var file = cljs.core.get.call(null,map__40651__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40651__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40651__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__40651__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__40651__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__30218__auto__ = file;
if(cljs.core.truth_(and__30218__auto__)){
return line;
} else {
return and__30218__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__40651,map__40651__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__40649_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40649_SHARP_),"</div>"].join('');
});})(last_message,map__40651,map__40651__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__40653 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__40653__$1 = ((((!((map__40653 == null)))?((((map__40653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40653):map__40653);
var head = cljs.core.get.call(null,map__40653__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__40653__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__40653__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__40653__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__40653__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40653__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40653__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__40655){
var map__40656 = p__40655;
var map__40656__$1 = ((((!((map__40656 == null)))?((((map__40656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40656.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40656):map__40656);
var warning_data = map__40656__$1;
var message = cljs.core.get.call(null,map__40656__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__40656__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40656__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40656__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40658 = message;
var G__40658__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40658)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__40658);
var G__40658__$2 = (cljs.core.truth_((function (){var and__30218__auto__ = line;
if(cljs.core.truth_(and__30218__auto__)){
return column;
} else {
return and__30218__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40658__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__40658__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40658__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__40658__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__40659){
var map__40660 = p__40659;
var map__40660__$1 = ((((!((map__40660 == null)))?((((map__40660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40660):map__40660);
var warning_data = map__40660__$1;
var message = cljs.core.get.call(null,map__40660__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__40660__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40660__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40660__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__40662 = figwheel.client.heads_up.ensure_container.call(null);
var map__40662__$1 = ((((!((map__40662 == null)))?((((map__40662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40662):map__40662);
var content_area_el = cljs.core.get.call(null,map__40662__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5457__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5457__auto__)){
var last_child = temp__5457__auto__;
var temp__5455__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5455__auto__)){
var message_count = temp__5455__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__35767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto__){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto__){
return (function (state_40681){
var state_val_40682 = (state_40681[(1)]);
if((state_val_40682 === (1))){
var inst_40664 = (state_40681[(7)]);
var inst_40664__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_40665 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_40666 = ["0.0"];
var inst_40667 = cljs.core.PersistentHashMap.fromArrays(inst_40665,inst_40666);
var inst_40668 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40664__$1,inst_40667);
var inst_40669 = cljs.core.async.timeout.call(null,(300));
var state_40681__$1 = (function (){var statearr_40683 = state_40681;
(statearr_40683[(8)] = inst_40668);

(statearr_40683[(7)] = inst_40664__$1);

return statearr_40683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40681__$1,(2),inst_40669);
} else {
if((state_val_40682 === (2))){
var inst_40664 = (state_40681[(7)]);
var inst_40671 = (state_40681[(2)]);
var inst_40672 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_40673 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_40674 = cljs.core.PersistentHashMap.fromArrays(inst_40672,inst_40673);
var inst_40675 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40664,inst_40674);
var inst_40676 = cljs.core.async.timeout.call(null,(200));
var state_40681__$1 = (function (){var statearr_40684 = state_40681;
(statearr_40684[(9)] = inst_40675);

(statearr_40684[(10)] = inst_40671);

return statearr_40684;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40681__$1,(3),inst_40676);
} else {
if((state_val_40682 === (3))){
var inst_40664 = (state_40681[(7)]);
var inst_40678 = (state_40681[(2)]);
var inst_40679 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_40664,"");
var state_40681__$1 = (function (){var statearr_40685 = state_40681;
(statearr_40685[(11)] = inst_40678);

return statearr_40685;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40681__$1,inst_40679);
} else {
return null;
}
}
}
});})(c__35767__auto__))
;
return ((function (switch__35677__auto__,c__35767__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__35678__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__35678__auto____0 = (function (){
var statearr_40686 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40686[(0)] = figwheel$client$heads_up$clear_$_state_machine__35678__auto__);

(statearr_40686[(1)] = (1));

return statearr_40686;
});
var figwheel$client$heads_up$clear_$_state_machine__35678__auto____1 = (function (state_40681){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_40681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e40687){if((e40687 instanceof Object)){
var ex__35681__auto__ = e40687;
var statearr_40688_40690 = state_40681;
(statearr_40688_40690[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40691 = state_40681;
state_40681 = G__40691;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__35678__auto__ = function(state_40681){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__35678__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__35678__auto____1.call(this,state_40681);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__35678__auto____0;
figwheel$client$heads_up$clear_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__35678__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto__))
})();
var state__35769__auto__ = (function (){var statearr_40689 = f__35768__auto__.call(null);
(statearr_40689[(6)] = c__35767__auto__);

return statearr_40689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto__))
);

return c__35767__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__35767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto__){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto__){
return (function (state_40702){
var state_val_40703 = (state_40702[(1)]);
if((state_val_40703 === (1))){
var inst_40692 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_40702__$1 = state_40702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40702__$1,(2),inst_40692);
} else {
if((state_val_40703 === (2))){
var inst_40694 = (state_40702[(2)]);
var inst_40695 = cljs.core.async.timeout.call(null,(400));
var state_40702__$1 = (function (){var statearr_40704 = state_40702;
(statearr_40704[(7)] = inst_40694);

return statearr_40704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40702__$1,(3),inst_40695);
} else {
if((state_val_40703 === (3))){
var inst_40697 = (state_40702[(2)]);
var inst_40698 = figwheel.client.heads_up.clear.call(null);
var state_40702__$1 = (function (){var statearr_40705 = state_40702;
(statearr_40705[(8)] = inst_40697);

return statearr_40705;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40702__$1,(4),inst_40698);
} else {
if((state_val_40703 === (4))){
var inst_40700 = (state_40702[(2)]);
var state_40702__$1 = state_40702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40702__$1,inst_40700);
} else {
return null;
}
}
}
}
});})(c__35767__auto__))
;
return ((function (switch__35677__auto__,c__35767__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__35678__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__35678__auto____0 = (function (){
var statearr_40706 = [null,null,null,null,null,null,null,null,null];
(statearr_40706[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__35678__auto__);

(statearr_40706[(1)] = (1));

return statearr_40706;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__35678__auto____1 = (function (state_40702){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_40702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e40707){if((e40707 instanceof Object)){
var ex__35681__auto__ = e40707;
var statearr_40708_40710 = state_40702;
(statearr_40708_40710[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40711 = state_40702;
state_40702 = G__40711;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__35678__auto__ = function(state_40702){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__35678__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__35678__auto____1.call(this,state_40702);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__35678__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__35678__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto__))
})();
var state__35769__auto__ = (function (){var statearr_40709 = f__35768__auto__.call(null);
(statearr_40709[(6)] = c__35767__auto__);

return statearr_40709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto__))
);

return c__35767__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5457__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1514673227762
