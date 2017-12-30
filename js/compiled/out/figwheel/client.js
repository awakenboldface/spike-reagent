// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e40714){if((e40714 instanceof Error)){
var e = e40714;
return "Error: Unable to stringify";
} else {
throw e40714;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__40717 = arguments.length;
switch (G__40717) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__40715_SHARP_){
if(typeof p1__40715_SHARP_ === 'string'){
return p1__40715_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__40715_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31516__auto__ = [];
var len__31509__auto___40720 = arguments.length;
var i__31510__auto___40721 = (0);
while(true){
if((i__31510__auto___40721 < len__31509__auto___40720)){
args__31516__auto__.push((arguments[i__31510__auto___40721]));

var G__40722 = (i__31510__auto___40721 + (1));
i__31510__auto___40721 = G__40722;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq40719){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40719));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31516__auto__ = [];
var len__31509__auto___40724 = arguments.length;
var i__31510__auto___40725 = (0);
while(true){
if((i__31510__auto___40725 < len__31509__auto___40724)){
args__31516__auto__.push((arguments[i__31510__auto___40725]));

var G__40726 = (i__31510__auto___40725 + (1));
i__31510__auto___40725 = G__40726;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq40723){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40723));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40727){
var map__40728 = p__40727;
var map__40728__$1 = ((((!((map__40728 == null)))?((((map__40728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40728):map__40728);
var message = cljs.core.get.call(null,map__40728__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40728__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30230__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30230__auto__)){
return or__30230__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30218__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30218__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30218__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__35767__auto___40807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___40807,ch){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___40807,ch){
return (function (state_40779){
var state_val_40780 = (state_40779[(1)]);
if((state_val_40780 === (7))){
var inst_40775 = (state_40779[(2)]);
var state_40779__$1 = state_40779;
var statearr_40781_40808 = state_40779__$1;
(statearr_40781_40808[(2)] = inst_40775);

(statearr_40781_40808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (1))){
var state_40779__$1 = state_40779;
var statearr_40782_40809 = state_40779__$1;
(statearr_40782_40809[(2)] = null);

(statearr_40782_40809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (4))){
var inst_40732 = (state_40779[(7)]);
var inst_40732__$1 = (state_40779[(2)]);
var state_40779__$1 = (function (){var statearr_40783 = state_40779;
(statearr_40783[(7)] = inst_40732__$1);

return statearr_40783;
})();
if(cljs.core.truth_(inst_40732__$1)){
var statearr_40784_40810 = state_40779__$1;
(statearr_40784_40810[(1)] = (5));

} else {
var statearr_40785_40811 = state_40779__$1;
(statearr_40785_40811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (15))){
var inst_40739 = (state_40779[(8)]);
var inst_40754 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40739);
var inst_40755 = cljs.core.first.call(null,inst_40754);
var inst_40756 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40755);
var inst_40757 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40756)].join('');
var inst_40758 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40757);
var state_40779__$1 = state_40779;
var statearr_40786_40812 = state_40779__$1;
(statearr_40786_40812[(2)] = inst_40758);

(statearr_40786_40812[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (13))){
var inst_40763 = (state_40779[(2)]);
var state_40779__$1 = state_40779;
var statearr_40787_40813 = state_40779__$1;
(statearr_40787_40813[(2)] = inst_40763);

(statearr_40787_40813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (6))){
var state_40779__$1 = state_40779;
var statearr_40788_40814 = state_40779__$1;
(statearr_40788_40814[(2)] = null);

(statearr_40788_40814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (17))){
var inst_40761 = (state_40779[(2)]);
var state_40779__$1 = state_40779;
var statearr_40789_40815 = state_40779__$1;
(statearr_40789_40815[(2)] = inst_40761);

(statearr_40789_40815[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (3))){
var inst_40777 = (state_40779[(2)]);
var state_40779__$1 = state_40779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40779__$1,inst_40777);
} else {
if((state_val_40780 === (12))){
var inst_40738 = (state_40779[(9)]);
var inst_40752 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40738,opts);
var state_40779__$1 = state_40779;
if(cljs.core.truth_(inst_40752)){
var statearr_40790_40816 = state_40779__$1;
(statearr_40790_40816[(1)] = (15));

} else {
var statearr_40791_40817 = state_40779__$1;
(statearr_40791_40817[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (2))){
var state_40779__$1 = state_40779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40779__$1,(4),ch);
} else {
if((state_val_40780 === (11))){
var inst_40739 = (state_40779[(8)]);
var inst_40744 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40745 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40739);
var inst_40746 = cljs.core.async.timeout.call(null,(1000));
var inst_40747 = [inst_40745,inst_40746];
var inst_40748 = (new cljs.core.PersistentVector(null,2,(5),inst_40744,inst_40747,null));
var state_40779__$1 = state_40779;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40779__$1,(14),inst_40748);
} else {
if((state_val_40780 === (9))){
var inst_40739 = (state_40779[(8)]);
var inst_40765 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40766 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40739);
var inst_40767 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40766);
var inst_40768 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40767)].join('');
var inst_40769 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40768);
var state_40779__$1 = (function (){var statearr_40792 = state_40779;
(statearr_40792[(10)] = inst_40765);

return statearr_40792;
})();
var statearr_40793_40818 = state_40779__$1;
(statearr_40793_40818[(2)] = inst_40769);

(statearr_40793_40818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (5))){
var inst_40732 = (state_40779[(7)]);
var inst_40734 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40735 = (new cljs.core.PersistentArrayMap(null,2,inst_40734,null));
var inst_40736 = (new cljs.core.PersistentHashSet(null,inst_40735,null));
var inst_40737 = figwheel.client.focus_msgs.call(null,inst_40736,inst_40732);
var inst_40738 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40737);
var inst_40739 = cljs.core.first.call(null,inst_40737);
var inst_40740 = figwheel.client.autoload_QMARK_.call(null);
var state_40779__$1 = (function (){var statearr_40794 = state_40779;
(statearr_40794[(9)] = inst_40738);

(statearr_40794[(8)] = inst_40739);

return statearr_40794;
})();
if(cljs.core.truth_(inst_40740)){
var statearr_40795_40819 = state_40779__$1;
(statearr_40795_40819[(1)] = (8));

} else {
var statearr_40796_40820 = state_40779__$1;
(statearr_40796_40820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (14))){
var inst_40750 = (state_40779[(2)]);
var state_40779__$1 = state_40779;
var statearr_40797_40821 = state_40779__$1;
(statearr_40797_40821[(2)] = inst_40750);

(statearr_40797_40821[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (16))){
var state_40779__$1 = state_40779;
var statearr_40798_40822 = state_40779__$1;
(statearr_40798_40822[(2)] = null);

(statearr_40798_40822[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (10))){
var inst_40771 = (state_40779[(2)]);
var state_40779__$1 = (function (){var statearr_40799 = state_40779;
(statearr_40799[(11)] = inst_40771);

return statearr_40799;
})();
var statearr_40800_40823 = state_40779__$1;
(statearr_40800_40823[(2)] = null);

(statearr_40800_40823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (8))){
var inst_40738 = (state_40779[(9)]);
var inst_40742 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40738,opts);
var state_40779__$1 = state_40779;
if(cljs.core.truth_(inst_40742)){
var statearr_40801_40824 = state_40779__$1;
(statearr_40801_40824[(1)] = (11));

} else {
var statearr_40802_40825 = state_40779__$1;
(statearr_40802_40825[(1)] = (12));

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
});})(c__35767__auto___40807,ch))
;
return ((function (switch__35677__auto__,c__35767__auto___40807,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35678__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35678__auto____0 = (function (){
var statearr_40803 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40803[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35678__auto__);

(statearr_40803[(1)] = (1));

return statearr_40803;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35678__auto____1 = (function (state_40779){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_40779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e40804){if((e40804 instanceof Object)){
var ex__35681__auto__ = e40804;
var statearr_40805_40826 = state_40779;
(statearr_40805_40826[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40827 = state_40779;
state_40779 = G__40827;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35678__auto__ = function(state_40779){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35678__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35678__auto____1.call(this,state_40779);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35678__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35678__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___40807,ch))
})();
var state__35769__auto__ = (function (){var statearr_40806 = f__35768__auto__.call(null);
(statearr_40806[(6)] = c__35767__auto___40807);

return statearr_40806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___40807,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40828_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40828_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_40830 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40830){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e40829){if((e40829 instanceof Error)){
var e = e40829;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40830], null));
} else {
var e = e40829;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_40830))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40831){
var map__40832 = p__40831;
var map__40832__$1 = ((((!((map__40832 == null)))?((((map__40832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40832):map__40832);
var opts = map__40832__$1;
var build_id = cljs.core.get.call(null,map__40832__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40832,map__40832__$1,opts,build_id){
return (function (p__40834){
var vec__40835 = p__40834;
var seq__40836 = cljs.core.seq.call(null,vec__40835);
var first__40837 = cljs.core.first.call(null,seq__40836);
var seq__40836__$1 = cljs.core.next.call(null,seq__40836);
var map__40838 = first__40837;
var map__40838__$1 = ((((!((map__40838 == null)))?((((map__40838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40838):map__40838);
var msg = map__40838__$1;
var msg_name = cljs.core.get.call(null,map__40838__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40836__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40835,seq__40836,first__40837,seq__40836__$1,map__40838,map__40838__$1,msg,msg_name,_,map__40832,map__40832__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40835,seq__40836,first__40837,seq__40836__$1,map__40838,map__40838__$1,msg,msg_name,_,map__40832,map__40832__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40832,map__40832__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40840){
var vec__40841 = p__40840;
var seq__40842 = cljs.core.seq.call(null,vec__40841);
var first__40843 = cljs.core.first.call(null,seq__40842);
var seq__40842__$1 = cljs.core.next.call(null,seq__40842);
var map__40844 = first__40843;
var map__40844__$1 = ((((!((map__40844 == null)))?((((map__40844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40844):map__40844);
var msg = map__40844__$1;
var msg_name = cljs.core.get.call(null,map__40844__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40842__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40846){
var map__40847 = p__40846;
var map__40847__$1 = ((((!((map__40847 == null)))?((((map__40847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40847):map__40847);
var on_compile_warning = cljs.core.get.call(null,map__40847__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40847__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40847,map__40847__$1,on_compile_warning,on_compile_fail){
return (function (p__40849){
var vec__40850 = p__40849;
var seq__40851 = cljs.core.seq.call(null,vec__40850);
var first__40852 = cljs.core.first.call(null,seq__40851);
var seq__40851__$1 = cljs.core.next.call(null,seq__40851);
var map__40853 = first__40852;
var map__40853__$1 = ((((!((map__40853 == null)))?((((map__40853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40853):map__40853);
var msg = map__40853__$1;
var msg_name = cljs.core.get.call(null,map__40853__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40851__$1;
var pred__40855 = cljs.core._EQ_;
var expr__40856 = msg_name;
if(cljs.core.truth_(pred__40855.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40856))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40855.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40856))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40847,map__40847__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto__,msg_hist,msg_names,msg){
return (function (state_40945){
var state_val_40946 = (state_40945[(1)]);
if((state_val_40946 === (7))){
var inst_40865 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
if(cljs.core.truth_(inst_40865)){
var statearr_40947_40994 = state_40945__$1;
(statearr_40947_40994[(1)] = (8));

} else {
var statearr_40948_40995 = state_40945__$1;
(statearr_40948_40995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (20))){
var inst_40939 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40949_40996 = state_40945__$1;
(statearr_40949_40996[(2)] = inst_40939);

(statearr_40949_40996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (27))){
var inst_40935 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40950_40997 = state_40945__$1;
(statearr_40950_40997[(2)] = inst_40935);

(statearr_40950_40997[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (1))){
var inst_40858 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40945__$1 = state_40945;
if(cljs.core.truth_(inst_40858)){
var statearr_40951_40998 = state_40945__$1;
(statearr_40951_40998[(1)] = (2));

} else {
var statearr_40952_40999 = state_40945__$1;
(statearr_40952_40999[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (24))){
var inst_40937 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40953_41000 = state_40945__$1;
(statearr_40953_41000[(2)] = inst_40937);

(statearr_40953_41000[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (4))){
var inst_40943 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40945__$1,inst_40943);
} else {
if((state_val_40946 === (15))){
var inst_40941 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40954_41001 = state_40945__$1;
(statearr_40954_41001[(2)] = inst_40941);

(statearr_40954_41001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (21))){
var inst_40894 = (state_40945[(2)]);
var inst_40895 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40896 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40895);
var state_40945__$1 = (function (){var statearr_40955 = state_40945;
(statearr_40955[(7)] = inst_40894);

return statearr_40955;
})();
var statearr_40956_41002 = state_40945__$1;
(statearr_40956_41002[(2)] = inst_40896);

(statearr_40956_41002[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (31))){
var inst_40924 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40945__$1 = state_40945;
if(cljs.core.truth_(inst_40924)){
var statearr_40957_41003 = state_40945__$1;
(statearr_40957_41003[(1)] = (34));

} else {
var statearr_40958_41004 = state_40945__$1;
(statearr_40958_41004[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (32))){
var inst_40933 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40959_41005 = state_40945__$1;
(statearr_40959_41005[(2)] = inst_40933);

(statearr_40959_41005[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (33))){
var inst_40920 = (state_40945[(2)]);
var inst_40921 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40922 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40921);
var state_40945__$1 = (function (){var statearr_40960 = state_40945;
(statearr_40960[(8)] = inst_40920);

return statearr_40960;
})();
var statearr_40961_41006 = state_40945__$1;
(statearr_40961_41006[(2)] = inst_40922);

(statearr_40961_41006[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (13))){
var inst_40879 = figwheel.client.heads_up.clear.call(null);
var state_40945__$1 = state_40945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40945__$1,(16),inst_40879);
} else {
if((state_val_40946 === (22))){
var inst_40900 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40901 = figwheel.client.heads_up.append_warning_message.call(null,inst_40900);
var state_40945__$1 = state_40945;
var statearr_40962_41007 = state_40945__$1;
(statearr_40962_41007[(2)] = inst_40901);

(statearr_40962_41007[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (36))){
var inst_40931 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40963_41008 = state_40945__$1;
(statearr_40963_41008[(2)] = inst_40931);

(statearr_40963_41008[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (29))){
var inst_40911 = (state_40945[(2)]);
var inst_40912 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40913 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40912);
var state_40945__$1 = (function (){var statearr_40964 = state_40945;
(statearr_40964[(9)] = inst_40911);

return statearr_40964;
})();
var statearr_40965_41009 = state_40945__$1;
(statearr_40965_41009[(2)] = inst_40913);

(statearr_40965_41009[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (6))){
var inst_40860 = (state_40945[(10)]);
var state_40945__$1 = state_40945;
var statearr_40966_41010 = state_40945__$1;
(statearr_40966_41010[(2)] = inst_40860);

(statearr_40966_41010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (28))){
var inst_40907 = (state_40945[(2)]);
var inst_40908 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40909 = figwheel.client.heads_up.display_warning.call(null,inst_40908);
var state_40945__$1 = (function (){var statearr_40967 = state_40945;
(statearr_40967[(11)] = inst_40907);

return statearr_40967;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40945__$1,(29),inst_40909);
} else {
if((state_val_40946 === (25))){
var inst_40905 = figwheel.client.heads_up.clear.call(null);
var state_40945__$1 = state_40945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40945__$1,(28),inst_40905);
} else {
if((state_val_40946 === (34))){
var inst_40926 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40945__$1 = state_40945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40945__$1,(37),inst_40926);
} else {
if((state_val_40946 === (17))){
var inst_40885 = (state_40945[(2)]);
var inst_40886 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40887 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40886);
var state_40945__$1 = (function (){var statearr_40968 = state_40945;
(statearr_40968[(12)] = inst_40885);

return statearr_40968;
})();
var statearr_40969_41011 = state_40945__$1;
(statearr_40969_41011[(2)] = inst_40887);

(statearr_40969_41011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (3))){
var inst_40877 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40945__$1 = state_40945;
if(cljs.core.truth_(inst_40877)){
var statearr_40970_41012 = state_40945__$1;
(statearr_40970_41012[(1)] = (13));

} else {
var statearr_40971_41013 = state_40945__$1;
(statearr_40971_41013[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (12))){
var inst_40873 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40972_41014 = state_40945__$1;
(statearr_40972_41014[(2)] = inst_40873);

(statearr_40972_41014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (2))){
var inst_40860 = (state_40945[(10)]);
var inst_40860__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40945__$1 = (function (){var statearr_40973 = state_40945;
(statearr_40973[(10)] = inst_40860__$1);

return statearr_40973;
})();
if(cljs.core.truth_(inst_40860__$1)){
var statearr_40974_41015 = state_40945__$1;
(statearr_40974_41015[(1)] = (5));

} else {
var statearr_40975_41016 = state_40945__$1;
(statearr_40975_41016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (23))){
var inst_40903 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40945__$1 = state_40945;
if(cljs.core.truth_(inst_40903)){
var statearr_40976_41017 = state_40945__$1;
(statearr_40976_41017[(1)] = (25));

} else {
var statearr_40977_41018 = state_40945__$1;
(statearr_40977_41018[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (35))){
var state_40945__$1 = state_40945;
var statearr_40978_41019 = state_40945__$1;
(statearr_40978_41019[(2)] = null);

(statearr_40978_41019[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (19))){
var inst_40898 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40945__$1 = state_40945;
if(cljs.core.truth_(inst_40898)){
var statearr_40979_41020 = state_40945__$1;
(statearr_40979_41020[(1)] = (22));

} else {
var statearr_40980_41021 = state_40945__$1;
(statearr_40980_41021[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (11))){
var inst_40869 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40981_41022 = state_40945__$1;
(statearr_40981_41022[(2)] = inst_40869);

(statearr_40981_41022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (9))){
var inst_40871 = figwheel.client.heads_up.clear.call(null);
var state_40945__$1 = state_40945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40945__$1,(12),inst_40871);
} else {
if((state_val_40946 === (5))){
var inst_40862 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40945__$1 = state_40945;
var statearr_40982_41023 = state_40945__$1;
(statearr_40982_41023[(2)] = inst_40862);

(statearr_40982_41023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (14))){
var inst_40889 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40945__$1 = state_40945;
if(cljs.core.truth_(inst_40889)){
var statearr_40983_41024 = state_40945__$1;
(statearr_40983_41024[(1)] = (18));

} else {
var statearr_40984_41025 = state_40945__$1;
(statearr_40984_41025[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (26))){
var inst_40915 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40945__$1 = state_40945;
if(cljs.core.truth_(inst_40915)){
var statearr_40985_41026 = state_40945__$1;
(statearr_40985_41026[(1)] = (30));

} else {
var statearr_40986_41027 = state_40945__$1;
(statearr_40986_41027[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (16))){
var inst_40881 = (state_40945[(2)]);
var inst_40882 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40883 = figwheel.client.heads_up.display_exception.call(null,inst_40882);
var state_40945__$1 = (function (){var statearr_40987 = state_40945;
(statearr_40987[(13)] = inst_40881);

return statearr_40987;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40945__$1,(17),inst_40883);
} else {
if((state_val_40946 === (30))){
var inst_40917 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40918 = figwheel.client.heads_up.display_warning.call(null,inst_40917);
var state_40945__$1 = state_40945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40945__$1,(33),inst_40918);
} else {
if((state_val_40946 === (10))){
var inst_40875 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40988_41028 = state_40945__$1;
(statearr_40988_41028[(2)] = inst_40875);

(statearr_40988_41028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (18))){
var inst_40891 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40892 = figwheel.client.heads_up.display_exception.call(null,inst_40891);
var state_40945__$1 = state_40945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40945__$1,(21),inst_40892);
} else {
if((state_val_40946 === (37))){
var inst_40928 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40989_41029 = state_40945__$1;
(statearr_40989_41029[(2)] = inst_40928);

(statearr_40989_41029[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (8))){
var inst_40867 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40945__$1 = state_40945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40945__$1,(11),inst_40867);
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
});})(c__35767__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35677__auto__,c__35767__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35678__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35678__auto____0 = (function (){
var statearr_40990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40990[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35678__auto__);

(statearr_40990[(1)] = (1));

return statearr_40990;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35678__auto____1 = (function (state_40945){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_40945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e40991){if((e40991 instanceof Object)){
var ex__35681__auto__ = e40991;
var statearr_40992_41030 = state_40945;
(statearr_40992_41030[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41031 = state_40945;
state_40945 = G__41031;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35678__auto__ = function(state_40945){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35678__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35678__auto____1.call(this,state_40945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35678__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35678__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto__,msg_hist,msg_names,msg))
})();
var state__35769__auto__ = (function (){var statearr_40993 = f__35768__auto__.call(null);
(statearr_40993[(6)] = c__35767__auto__);

return statearr_40993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto__,msg_hist,msg_names,msg))
);

return c__35767__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35767__auto___41060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto___41060,ch){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto___41060,ch){
return (function (state_41046){
var state_val_41047 = (state_41046[(1)]);
if((state_val_41047 === (1))){
var state_41046__$1 = state_41046;
var statearr_41048_41061 = state_41046__$1;
(statearr_41048_41061[(2)] = null);

(statearr_41048_41061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41047 === (2))){
var state_41046__$1 = state_41046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41046__$1,(4),ch);
} else {
if((state_val_41047 === (3))){
var inst_41044 = (state_41046[(2)]);
var state_41046__$1 = state_41046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41046__$1,inst_41044);
} else {
if((state_val_41047 === (4))){
var inst_41034 = (state_41046[(7)]);
var inst_41034__$1 = (state_41046[(2)]);
var state_41046__$1 = (function (){var statearr_41049 = state_41046;
(statearr_41049[(7)] = inst_41034__$1);

return statearr_41049;
})();
if(cljs.core.truth_(inst_41034__$1)){
var statearr_41050_41062 = state_41046__$1;
(statearr_41050_41062[(1)] = (5));

} else {
var statearr_41051_41063 = state_41046__$1;
(statearr_41051_41063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41047 === (5))){
var inst_41034 = (state_41046[(7)]);
var inst_41036 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41034);
var state_41046__$1 = state_41046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41046__$1,(8),inst_41036);
} else {
if((state_val_41047 === (6))){
var state_41046__$1 = state_41046;
var statearr_41052_41064 = state_41046__$1;
(statearr_41052_41064[(2)] = null);

(statearr_41052_41064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41047 === (7))){
var inst_41042 = (state_41046[(2)]);
var state_41046__$1 = state_41046;
var statearr_41053_41065 = state_41046__$1;
(statearr_41053_41065[(2)] = inst_41042);

(statearr_41053_41065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41047 === (8))){
var inst_41038 = (state_41046[(2)]);
var state_41046__$1 = (function (){var statearr_41054 = state_41046;
(statearr_41054[(8)] = inst_41038);

return statearr_41054;
})();
var statearr_41055_41066 = state_41046__$1;
(statearr_41055_41066[(2)] = null);

(statearr_41055_41066[(1)] = (2));


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
});})(c__35767__auto___41060,ch))
;
return ((function (switch__35677__auto__,c__35767__auto___41060,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35678__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35678__auto____0 = (function (){
var statearr_41056 = [null,null,null,null,null,null,null,null,null];
(statearr_41056[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35678__auto__);

(statearr_41056[(1)] = (1));

return statearr_41056;
});
var figwheel$client$heads_up_plugin_$_state_machine__35678__auto____1 = (function (state_41046){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_41046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e41057){if((e41057 instanceof Object)){
var ex__35681__auto__ = e41057;
var statearr_41058_41067 = state_41046;
(statearr_41058_41067[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41068 = state_41046;
state_41046 = G__41068;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35678__auto__ = function(state_41046){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35678__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35678__auto____1.call(this,state_41046);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35678__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35678__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto___41060,ch))
})();
var state__35769__auto__ = (function (){var statearr_41059 = f__35768__auto__.call(null);
(statearr_41059[(6)] = c__35767__auto___41060);

return statearr_41059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto___41060,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto__){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto__){
return (function (state_41074){
var state_val_41075 = (state_41074[(1)]);
if((state_val_41075 === (1))){
var inst_41069 = cljs.core.async.timeout.call(null,(3000));
var state_41074__$1 = state_41074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41074__$1,(2),inst_41069);
} else {
if((state_val_41075 === (2))){
var inst_41071 = (state_41074[(2)]);
var inst_41072 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41074__$1 = (function (){var statearr_41076 = state_41074;
(statearr_41076[(7)] = inst_41071);

return statearr_41076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41074__$1,inst_41072);
} else {
return null;
}
}
});})(c__35767__auto__))
;
return ((function (switch__35677__auto__,c__35767__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35678__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35678__auto____0 = (function (){
var statearr_41077 = [null,null,null,null,null,null,null,null];
(statearr_41077[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35678__auto__);

(statearr_41077[(1)] = (1));

return statearr_41077;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35678__auto____1 = (function (state_41074){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_41074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e41078){if((e41078 instanceof Object)){
var ex__35681__auto__ = e41078;
var statearr_41079_41081 = state_41074;
(statearr_41079_41081[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41082 = state_41074;
state_41074 = G__41082;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35678__auto__ = function(state_41074){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35678__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35678__auto____1.call(this,state_41074);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35678__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35678__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto__))
})();
var state__35769__auto__ = (function (){var statearr_41080 = f__35768__auto__.call(null);
(statearr_41080[(6)] = c__35767__auto__);

return statearr_41080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto__))
);

return c__35767__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35767__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__35768__auto__ = (function (){var switch__35677__auto__ = ((function (c__35767__auto__,figwheel_version,temp__5457__auto__){
return (function (state_41089){
var state_val_41090 = (state_41089[(1)]);
if((state_val_41090 === (1))){
var inst_41083 = cljs.core.async.timeout.call(null,(2000));
var state_41089__$1 = state_41089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41089__$1,(2),inst_41083);
} else {
if((state_val_41090 === (2))){
var inst_41085 = (state_41089[(2)]);
var inst_41086 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_41087 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_41086);
var state_41089__$1 = (function (){var statearr_41091 = state_41089;
(statearr_41091[(7)] = inst_41085);

return statearr_41091;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41089__$1,inst_41087);
} else {
return null;
}
}
});})(c__35767__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__35677__auto__,c__35767__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35678__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35678__auto____0 = (function (){
var statearr_41092 = [null,null,null,null,null,null,null,null];
(statearr_41092[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35678__auto__);

(statearr_41092[(1)] = (1));

return statearr_41092;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35678__auto____1 = (function (state_41089){
while(true){
var ret_value__35679__auto__ = (function (){try{while(true){
var result__35680__auto__ = switch__35677__auto__.call(null,state_41089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35680__auto__;
}
break;
}
}catch (e41093){if((e41093 instanceof Object)){
var ex__35681__auto__ = e41093;
var statearr_41094_41096 = state_41089;
(statearr_41094_41096[(5)] = ex__35681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41097 = state_41089;
state_41089 = G__41097;
continue;
} else {
return ret_value__35679__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35678__auto__ = function(state_41089){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35678__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35678__auto____1.call(this,state_41089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35678__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35678__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35678__auto__;
})()
;})(switch__35677__auto__,c__35767__auto__,figwheel_version,temp__5457__auto__))
})();
var state__35769__auto__ = (function (){var statearr_41095 = f__35768__auto__.call(null);
(statearr_41095[(6)] = c__35767__auto__);

return statearr_41095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35769__auto__);
});})(c__35767__auto__,figwheel_version,temp__5457__auto__))
);

return c__35767__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__41098){
var map__41099 = p__41098;
var map__41099__$1 = ((((!((map__41099 == null)))?((((map__41099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41099):map__41099);
var file = cljs.core.get.call(null,map__41099__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41099__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41099__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__41101 = "";
var G__41101__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41101),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__41101);
var G__41101__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41101__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__41101__$1);
if(cljs.core.truth_((function (){var and__30218__auto__ = line;
if(cljs.core.truth_(and__30218__auto__)){
return column;
} else {
return and__30218__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41101__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__41101__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41102){
var map__41103 = p__41102;
var map__41103__$1 = ((((!((map__41103 == null)))?((((map__41103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41103):map__41103);
var ed = map__41103__$1;
var formatted_exception = cljs.core.get.call(null,map__41103__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41103__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41103__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41105_41109 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41106_41110 = null;
var count__41107_41111 = (0);
var i__41108_41112 = (0);
while(true){
if((i__41108_41112 < count__41107_41111)){
var msg_41113 = cljs.core._nth.call(null,chunk__41106_41110,i__41108_41112);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41113);

var G__41114 = seq__41105_41109;
var G__41115 = chunk__41106_41110;
var G__41116 = count__41107_41111;
var G__41117 = (i__41108_41112 + (1));
seq__41105_41109 = G__41114;
chunk__41106_41110 = G__41115;
count__41107_41111 = G__41116;
i__41108_41112 = G__41117;
continue;
} else {
var temp__5457__auto___41118 = cljs.core.seq.call(null,seq__41105_41109);
if(temp__5457__auto___41118){
var seq__41105_41119__$1 = temp__5457__auto___41118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41105_41119__$1)){
var c__31161__auto___41120 = cljs.core.chunk_first.call(null,seq__41105_41119__$1);
var G__41121 = cljs.core.chunk_rest.call(null,seq__41105_41119__$1);
var G__41122 = c__31161__auto___41120;
var G__41123 = cljs.core.count.call(null,c__31161__auto___41120);
var G__41124 = (0);
seq__41105_41109 = G__41121;
chunk__41106_41110 = G__41122;
count__41107_41111 = G__41123;
i__41108_41112 = G__41124;
continue;
} else {
var msg_41125 = cljs.core.first.call(null,seq__41105_41119__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41125);

var G__41126 = cljs.core.next.call(null,seq__41105_41119__$1);
var G__41127 = null;
var G__41128 = (0);
var G__41129 = (0);
seq__41105_41109 = G__41126;
chunk__41106_41110 = G__41127;
count__41107_41111 = G__41128;
i__41108_41112 = G__41129;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41130){
var map__41131 = p__41130;
var map__41131__$1 = ((((!((map__41131 == null)))?((((map__41131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41131):map__41131);
var w = map__41131__$1;
var message = cljs.core.get.call(null,map__41131__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30218__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30218__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30218__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__41133 = cljs.core.seq.call(null,plugins);
var chunk__41134 = null;
var count__41135 = (0);
var i__41136 = (0);
while(true){
if((i__41136 < count__41135)){
var vec__41137 = cljs.core._nth.call(null,chunk__41134,i__41136);
var k = cljs.core.nth.call(null,vec__41137,(0),null);
var plugin = cljs.core.nth.call(null,vec__41137,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41143 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41133,chunk__41134,count__41135,i__41136,pl_41143,vec__41137,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41143.call(null,msg_hist);
});})(seq__41133,chunk__41134,count__41135,i__41136,pl_41143,vec__41137,k,plugin))
);
} else {
}

var G__41144 = seq__41133;
var G__41145 = chunk__41134;
var G__41146 = count__41135;
var G__41147 = (i__41136 + (1));
seq__41133 = G__41144;
chunk__41134 = G__41145;
count__41135 = G__41146;
i__41136 = G__41147;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41133);
if(temp__5457__auto__){
var seq__41133__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41133__$1)){
var c__31161__auto__ = cljs.core.chunk_first.call(null,seq__41133__$1);
var G__41148 = cljs.core.chunk_rest.call(null,seq__41133__$1);
var G__41149 = c__31161__auto__;
var G__41150 = cljs.core.count.call(null,c__31161__auto__);
var G__41151 = (0);
seq__41133 = G__41148;
chunk__41134 = G__41149;
count__41135 = G__41150;
i__41136 = G__41151;
continue;
} else {
var vec__41140 = cljs.core.first.call(null,seq__41133__$1);
var k = cljs.core.nth.call(null,vec__41140,(0),null);
var plugin = cljs.core.nth.call(null,vec__41140,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41152 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41133,chunk__41134,count__41135,i__41136,pl_41152,vec__41140,k,plugin,seq__41133__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41152.call(null,msg_hist);
});})(seq__41133,chunk__41134,count__41135,i__41136,pl_41152,vec__41140,k,plugin,seq__41133__$1,temp__5457__auto__))
);
} else {
}

var G__41153 = cljs.core.next.call(null,seq__41133__$1);
var G__41154 = null;
var G__41155 = (0);
var G__41156 = (0);
seq__41133 = G__41153;
chunk__41134 = G__41154;
count__41135 = G__41155;
i__41136 = G__41156;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__41158 = arguments.length;
switch (G__41158) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__41159_41164 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__41160_41165 = null;
var count__41161_41166 = (0);
var i__41162_41167 = (0);
while(true){
if((i__41162_41167 < count__41161_41166)){
var msg_41168 = cljs.core._nth.call(null,chunk__41160_41165,i__41162_41167);
figwheel.client.socket.handle_incoming_message.call(null,msg_41168);

var G__41169 = seq__41159_41164;
var G__41170 = chunk__41160_41165;
var G__41171 = count__41161_41166;
var G__41172 = (i__41162_41167 + (1));
seq__41159_41164 = G__41169;
chunk__41160_41165 = G__41170;
count__41161_41166 = G__41171;
i__41162_41167 = G__41172;
continue;
} else {
var temp__5457__auto___41173 = cljs.core.seq.call(null,seq__41159_41164);
if(temp__5457__auto___41173){
var seq__41159_41174__$1 = temp__5457__auto___41173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41159_41174__$1)){
var c__31161__auto___41175 = cljs.core.chunk_first.call(null,seq__41159_41174__$1);
var G__41176 = cljs.core.chunk_rest.call(null,seq__41159_41174__$1);
var G__41177 = c__31161__auto___41175;
var G__41178 = cljs.core.count.call(null,c__31161__auto___41175);
var G__41179 = (0);
seq__41159_41164 = G__41176;
chunk__41160_41165 = G__41177;
count__41161_41166 = G__41178;
i__41162_41167 = G__41179;
continue;
} else {
var msg_41180 = cljs.core.first.call(null,seq__41159_41174__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_41180);

var G__41181 = cljs.core.next.call(null,seq__41159_41174__$1);
var G__41182 = null;
var G__41183 = (0);
var G__41184 = (0);
seq__41159_41164 = G__41181;
chunk__41160_41165 = G__41182;
count__41161_41166 = G__41183;
i__41162_41167 = G__41184;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31516__auto__ = [];
var len__31509__auto___41189 = arguments.length;
var i__31510__auto___41190 = (0);
while(true){
if((i__31510__auto___41190 < len__31509__auto___41189)){
args__31516__auto__.push((arguments[i__31510__auto___41190]));

var G__41191 = (i__31510__auto___41190 + (1));
i__31510__auto___41190 = G__41191;
continue;
} else {
}
break;
}

var argseq__31517__auto__ = ((((0) < args__31516__auto__.length))?(new cljs.core.IndexedSeq(args__31516__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31517__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41186){
var map__41187 = p__41186;
var map__41187__$1 = ((((!((map__41187 == null)))?((((map__41187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41187):map__41187);
var opts = map__41187__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41185){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41185));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e41192){if((e41192 instanceof Error)){
var e = e41192;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e41192;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__41193){
var map__41194 = p__41193;
var map__41194__$1 = ((((!((map__41194 == null)))?((((map__41194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41194):map__41194);
var msg_name = cljs.core.get.call(null,map__41194__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1514673228075
