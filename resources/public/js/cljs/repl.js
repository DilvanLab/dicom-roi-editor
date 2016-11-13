// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28608){
var map__28633 = p__28608;
var map__28633__$1 = ((((!((map__28633 == null)))?((((map__28633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28633):map__28633);
var m = map__28633__$1;
var n = cljs.core.get.call(null,map__28633__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28633__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28635_28657 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28636_28658 = null;
var count__28637_28659 = (0);
var i__28638_28660 = (0);
while(true){
if((i__28638_28660 < count__28637_28659)){
var f_28661 = cljs.core._nth.call(null,chunk__28636_28658,i__28638_28660);
cljs.core.println.call(null,"  ",f_28661);

var G__28662 = seq__28635_28657;
var G__28663 = chunk__28636_28658;
var G__28664 = count__28637_28659;
var G__28665 = (i__28638_28660 + (1));
seq__28635_28657 = G__28662;
chunk__28636_28658 = G__28663;
count__28637_28659 = G__28664;
i__28638_28660 = G__28665;
continue;
} else {
var temp__4657__auto___28666 = cljs.core.seq.call(null,seq__28635_28657);
if(temp__4657__auto___28666){
var seq__28635_28667__$1 = temp__4657__auto___28666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28635_28667__$1)){
var c__21260__auto___28668 = cljs.core.chunk_first.call(null,seq__28635_28667__$1);
var G__28669 = cljs.core.chunk_rest.call(null,seq__28635_28667__$1);
var G__28670 = c__21260__auto___28668;
var G__28671 = cljs.core.count.call(null,c__21260__auto___28668);
var G__28672 = (0);
seq__28635_28657 = G__28669;
chunk__28636_28658 = G__28670;
count__28637_28659 = G__28671;
i__28638_28660 = G__28672;
continue;
} else {
var f_28673 = cljs.core.first.call(null,seq__28635_28667__$1);
cljs.core.println.call(null,"  ",f_28673);

var G__28674 = cljs.core.next.call(null,seq__28635_28667__$1);
var G__28675 = null;
var G__28676 = (0);
var G__28677 = (0);
seq__28635_28657 = G__28674;
chunk__28636_28658 = G__28675;
count__28637_28659 = G__28676;
i__28638_28660 = G__28677;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28678 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20449__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20449__auto__)){
return or__20449__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28678);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28678)))?cljs.core.second.call(null,arglists_28678):arglists_28678));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__28639_28679 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28640_28680 = null;
var count__28641_28681 = (0);
var i__28642_28682 = (0);
while(true){
if((i__28642_28682 < count__28641_28681)){
var vec__28643_28683 = cljs.core._nth.call(null,chunk__28640_28680,i__28642_28682);
var name_28684 = cljs.core.nth.call(null,vec__28643_28683,(0),null);
var map__28646_28685 = cljs.core.nth.call(null,vec__28643_28683,(1),null);
var map__28646_28686__$1 = ((((!((map__28646_28685 == null)))?((((map__28646_28685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28646_28685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28646_28685):map__28646_28685);
var doc_28687 = cljs.core.get.call(null,map__28646_28686__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28688 = cljs.core.get.call(null,map__28646_28686__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28684);

cljs.core.println.call(null," ",arglists_28688);

if(cljs.core.truth_(doc_28687)){
cljs.core.println.call(null," ",doc_28687);
} else {
}

var G__28689 = seq__28639_28679;
var G__28690 = chunk__28640_28680;
var G__28691 = count__28641_28681;
var G__28692 = (i__28642_28682 + (1));
seq__28639_28679 = G__28689;
chunk__28640_28680 = G__28690;
count__28641_28681 = G__28691;
i__28642_28682 = G__28692;
continue;
} else {
var temp__4657__auto___28693 = cljs.core.seq.call(null,seq__28639_28679);
if(temp__4657__auto___28693){
var seq__28639_28694__$1 = temp__4657__auto___28693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28639_28694__$1)){
var c__21260__auto___28695 = cljs.core.chunk_first.call(null,seq__28639_28694__$1);
var G__28696 = cljs.core.chunk_rest.call(null,seq__28639_28694__$1);
var G__28697 = c__21260__auto___28695;
var G__28698 = cljs.core.count.call(null,c__21260__auto___28695);
var G__28699 = (0);
seq__28639_28679 = G__28696;
chunk__28640_28680 = G__28697;
count__28641_28681 = G__28698;
i__28642_28682 = G__28699;
continue;
} else {
var vec__28648_28700 = cljs.core.first.call(null,seq__28639_28694__$1);
var name_28701 = cljs.core.nth.call(null,vec__28648_28700,(0),null);
var map__28651_28702 = cljs.core.nth.call(null,vec__28648_28700,(1),null);
var map__28651_28703__$1 = ((((!((map__28651_28702 == null)))?((((map__28651_28702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28651_28702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28651_28702):map__28651_28702);
var doc_28704 = cljs.core.get.call(null,map__28651_28703__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28705 = cljs.core.get.call(null,map__28651_28703__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28701);

cljs.core.println.call(null," ",arglists_28705);

if(cljs.core.truth_(doc_28704)){
cljs.core.println.call(null," ",doc_28704);
} else {
}

var G__28706 = cljs.core.next.call(null,seq__28639_28694__$1);
var G__28707 = null;
var G__28708 = (0);
var G__28709 = (0);
seq__28639_28679 = G__28706;
chunk__28640_28680 = G__28707;
count__28641_28681 = G__28708;
i__28642_28682 = G__28709;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__28653 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28654 = null;
var count__28655 = (0);
var i__28656 = (0);
while(true){
if((i__28656 < count__28655)){
var role = cljs.core._nth.call(null,chunk__28654,i__28656);
var temp__4657__auto___28710__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28710__$1)){
var spec_28711 = temp__4657__auto___28710__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28711));
} else {
}

var G__28712 = seq__28653;
var G__28713 = chunk__28654;
var G__28714 = count__28655;
var G__28715 = (i__28656 + (1));
seq__28653 = G__28712;
chunk__28654 = G__28713;
count__28655 = G__28714;
i__28656 = G__28715;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__28653);
if(temp__4657__auto____$1){
var seq__28653__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28653__$1)){
var c__21260__auto__ = cljs.core.chunk_first.call(null,seq__28653__$1);
var G__28716 = cljs.core.chunk_rest.call(null,seq__28653__$1);
var G__28717 = c__21260__auto__;
var G__28718 = cljs.core.count.call(null,c__21260__auto__);
var G__28719 = (0);
seq__28653 = G__28716;
chunk__28654 = G__28717;
count__28655 = G__28718;
i__28656 = G__28719;
continue;
} else {
var role = cljs.core.first.call(null,seq__28653__$1);
var temp__4657__auto___28720__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28720__$2)){
var spec_28721 = temp__4657__auto___28720__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28721));
} else {
}

var G__28722 = cljs.core.next.call(null,seq__28653__$1);
var G__28723 = null;
var G__28724 = (0);
var G__28725 = (0);
seq__28653 = G__28722;
chunk__28654 = G__28723;
count__28655 = G__28724;
i__28656 = G__28725;
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

//# sourceMappingURL=repl.js.map?rel=1478875884941