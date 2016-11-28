// Compiled by ClojureScript 1.9.227 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
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
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20449__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20449__auto__){
return or__20449__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20449__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20449__auto__)){
return or__20449__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26527_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26527_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
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
var seq__26532 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26533 = null;
var count__26534 = (0);
var i__26535 = (0);
while(true){
if((i__26535 < count__26534)){
var n = cljs.core._nth.call(null,chunk__26533,i__26535);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26536 = seq__26532;
var G__26537 = chunk__26533;
var G__26538 = count__26534;
var G__26539 = (i__26535 + (1));
seq__26532 = G__26536;
chunk__26533 = G__26537;
count__26534 = G__26538;
i__26535 = G__26539;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26532);
if(temp__4657__auto__){
var seq__26532__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26532__$1)){
var c__21260__auto__ = cljs.core.chunk_first.call(null,seq__26532__$1);
var G__26540 = cljs.core.chunk_rest.call(null,seq__26532__$1);
var G__26541 = c__21260__auto__;
var G__26542 = cljs.core.count.call(null,c__21260__auto__);
var G__26543 = (0);
seq__26532 = G__26540;
chunk__26533 = G__26541;
count__26534 = G__26542;
i__26535 = G__26543;
continue;
} else {
var n = cljs.core.first.call(null,seq__26532__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26544 = cljs.core.next.call(null,seq__26532__$1);
var G__26545 = null;
var G__26546 = (0);
var G__26547 = (0);
seq__26532 = G__26544;
chunk__26533 = G__26545;
count__26534 = G__26546;
i__26535 = G__26547;
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

var seq__26598_26609 = cljs.core.seq.call(null,deps);
var chunk__26599_26610 = null;
var count__26600_26611 = (0);
var i__26601_26612 = (0);
while(true){
if((i__26601_26612 < count__26600_26611)){
var dep_26613 = cljs.core._nth.call(null,chunk__26599_26610,i__26601_26612);
topo_sort_helper_STAR_.call(null,dep_26613,(depth + (1)),state);

var G__26614 = seq__26598_26609;
var G__26615 = chunk__26599_26610;
var G__26616 = count__26600_26611;
var G__26617 = (i__26601_26612 + (1));
seq__26598_26609 = G__26614;
chunk__26599_26610 = G__26615;
count__26600_26611 = G__26616;
i__26601_26612 = G__26617;
continue;
} else {
var temp__4657__auto___26618 = cljs.core.seq.call(null,seq__26598_26609);
if(temp__4657__auto___26618){
var seq__26598_26619__$1 = temp__4657__auto___26618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26598_26619__$1)){
var c__21260__auto___26620 = cljs.core.chunk_first.call(null,seq__26598_26619__$1);
var G__26621 = cljs.core.chunk_rest.call(null,seq__26598_26619__$1);
var G__26622 = c__21260__auto___26620;
var G__26623 = cljs.core.count.call(null,c__21260__auto___26620);
var G__26624 = (0);
seq__26598_26609 = G__26621;
chunk__26599_26610 = G__26622;
count__26600_26611 = G__26623;
i__26601_26612 = G__26624;
continue;
} else {
var dep_26625 = cljs.core.first.call(null,seq__26598_26619__$1);
topo_sort_helper_STAR_.call(null,dep_26625,(depth + (1)),state);

var G__26626 = cljs.core.next.call(null,seq__26598_26619__$1);
var G__26627 = null;
var G__26628 = (0);
var G__26629 = (0);
seq__26598_26609 = G__26626;
chunk__26599_26610 = G__26627;
count__26600_26611 = G__26628;
i__26601_26612 = G__26629;
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
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26602){
var vec__26606 = p__26602;
var seq__26607 = cljs.core.seq.call(null,vec__26606);
var first__26608 = cljs.core.first.call(null,seq__26607);
var seq__26607__$1 = cljs.core.next.call(null,seq__26607);
var x = first__26608;
var xs = seq__26607__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26606,seq__26607,first__26608,seq__26607__$1,x,xs,get_deps__$1){
return (function (p1__26548_SHARP_){
return clojure.set.difference.call(null,p1__26548_SHARP_,x);
});})(vec__26606,seq__26607,first__26608,seq__26607__$1,x,xs,get_deps__$1))
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
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26642 = cljs.core.seq.call(null,provides);
var chunk__26643 = null;
var count__26644 = (0);
var i__26645 = (0);
while(true){
if((i__26645 < count__26644)){
var prov = cljs.core._nth.call(null,chunk__26643,i__26645);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26646_26654 = cljs.core.seq.call(null,requires);
var chunk__26647_26655 = null;
var count__26648_26656 = (0);
var i__26649_26657 = (0);
while(true){
if((i__26649_26657 < count__26648_26656)){
var req_26658 = cljs.core._nth.call(null,chunk__26647_26655,i__26649_26657);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26658,prov);

var G__26659 = seq__26646_26654;
var G__26660 = chunk__26647_26655;
var G__26661 = count__26648_26656;
var G__26662 = (i__26649_26657 + (1));
seq__26646_26654 = G__26659;
chunk__26647_26655 = G__26660;
count__26648_26656 = G__26661;
i__26649_26657 = G__26662;
continue;
} else {
var temp__4657__auto___26663 = cljs.core.seq.call(null,seq__26646_26654);
if(temp__4657__auto___26663){
var seq__26646_26664__$1 = temp__4657__auto___26663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26646_26664__$1)){
var c__21260__auto___26665 = cljs.core.chunk_first.call(null,seq__26646_26664__$1);
var G__26666 = cljs.core.chunk_rest.call(null,seq__26646_26664__$1);
var G__26667 = c__21260__auto___26665;
var G__26668 = cljs.core.count.call(null,c__21260__auto___26665);
var G__26669 = (0);
seq__26646_26654 = G__26666;
chunk__26647_26655 = G__26667;
count__26648_26656 = G__26668;
i__26649_26657 = G__26669;
continue;
} else {
var req_26670 = cljs.core.first.call(null,seq__26646_26664__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26670,prov);

var G__26671 = cljs.core.next.call(null,seq__26646_26664__$1);
var G__26672 = null;
var G__26673 = (0);
var G__26674 = (0);
seq__26646_26654 = G__26671;
chunk__26647_26655 = G__26672;
count__26648_26656 = G__26673;
i__26649_26657 = G__26674;
continue;
}
} else {
}
}
break;
}

var G__26675 = seq__26642;
var G__26676 = chunk__26643;
var G__26677 = count__26644;
var G__26678 = (i__26645 + (1));
seq__26642 = G__26675;
chunk__26643 = G__26676;
count__26644 = G__26677;
i__26645 = G__26678;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26642);
if(temp__4657__auto__){
var seq__26642__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26642__$1)){
var c__21260__auto__ = cljs.core.chunk_first.call(null,seq__26642__$1);
var G__26679 = cljs.core.chunk_rest.call(null,seq__26642__$1);
var G__26680 = c__21260__auto__;
var G__26681 = cljs.core.count.call(null,c__21260__auto__);
var G__26682 = (0);
seq__26642 = G__26679;
chunk__26643 = G__26680;
count__26644 = G__26681;
i__26645 = G__26682;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26642__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26650_26683 = cljs.core.seq.call(null,requires);
var chunk__26651_26684 = null;
var count__26652_26685 = (0);
var i__26653_26686 = (0);
while(true){
if((i__26653_26686 < count__26652_26685)){
var req_26687 = cljs.core._nth.call(null,chunk__26651_26684,i__26653_26686);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26687,prov);

var G__26688 = seq__26650_26683;
var G__26689 = chunk__26651_26684;
var G__26690 = count__26652_26685;
var G__26691 = (i__26653_26686 + (1));
seq__26650_26683 = G__26688;
chunk__26651_26684 = G__26689;
count__26652_26685 = G__26690;
i__26653_26686 = G__26691;
continue;
} else {
var temp__4657__auto___26692__$1 = cljs.core.seq.call(null,seq__26650_26683);
if(temp__4657__auto___26692__$1){
var seq__26650_26693__$1 = temp__4657__auto___26692__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26650_26693__$1)){
var c__21260__auto___26694 = cljs.core.chunk_first.call(null,seq__26650_26693__$1);
var G__26695 = cljs.core.chunk_rest.call(null,seq__26650_26693__$1);
var G__26696 = c__21260__auto___26694;
var G__26697 = cljs.core.count.call(null,c__21260__auto___26694);
var G__26698 = (0);
seq__26650_26683 = G__26695;
chunk__26651_26684 = G__26696;
count__26652_26685 = G__26697;
i__26653_26686 = G__26698;
continue;
} else {
var req_26699 = cljs.core.first.call(null,seq__26650_26693__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26699,prov);

var G__26700 = cljs.core.next.call(null,seq__26650_26693__$1);
var G__26701 = null;
var G__26702 = (0);
var G__26703 = (0);
seq__26650_26683 = G__26700;
chunk__26651_26684 = G__26701;
count__26652_26685 = G__26702;
i__26653_26686 = G__26703;
continue;
}
} else {
}
}
break;
}

var G__26704 = cljs.core.next.call(null,seq__26642__$1);
var G__26705 = null;
var G__26706 = (0);
var G__26707 = (0);
seq__26642 = G__26704;
chunk__26643 = G__26705;
count__26644 = G__26706;
i__26645 = G__26707;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26712_26716 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26713_26717 = null;
var count__26714_26718 = (0);
var i__26715_26719 = (0);
while(true){
if((i__26715_26719 < count__26714_26718)){
var ns_26720 = cljs.core._nth.call(null,chunk__26713_26717,i__26715_26719);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26720);

var G__26721 = seq__26712_26716;
var G__26722 = chunk__26713_26717;
var G__26723 = count__26714_26718;
var G__26724 = (i__26715_26719 + (1));
seq__26712_26716 = G__26721;
chunk__26713_26717 = G__26722;
count__26714_26718 = G__26723;
i__26715_26719 = G__26724;
continue;
} else {
var temp__4657__auto___26725 = cljs.core.seq.call(null,seq__26712_26716);
if(temp__4657__auto___26725){
var seq__26712_26726__$1 = temp__4657__auto___26725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26712_26726__$1)){
var c__21260__auto___26727 = cljs.core.chunk_first.call(null,seq__26712_26726__$1);
var G__26728 = cljs.core.chunk_rest.call(null,seq__26712_26726__$1);
var G__26729 = c__21260__auto___26727;
var G__26730 = cljs.core.count.call(null,c__21260__auto___26727);
var G__26731 = (0);
seq__26712_26716 = G__26728;
chunk__26713_26717 = G__26729;
count__26714_26718 = G__26730;
i__26715_26719 = G__26731;
continue;
} else {
var ns_26732 = cljs.core.first.call(null,seq__26712_26726__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26732);

var G__26733 = cljs.core.next.call(null,seq__26712_26726__$1);
var G__26734 = null;
var G__26735 = (0);
var G__26736 = (0);
seq__26712_26716 = G__26733;
chunk__26713_26717 = G__26734;
count__26714_26718 = G__26735;
i__26715_26719 = G__26736;
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
goog.require_figwheel_backup_ = (function (){var or__20449__auto__ = goog.require__;
if(cljs.core.truth_(or__20449__auto__)){
return or__20449__auto__;
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
var G__26737__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26737 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26738__i = 0, G__26738__a = new Array(arguments.length -  0);
while (G__26738__i < G__26738__a.length) {G__26738__a[G__26738__i] = arguments[G__26738__i + 0]; ++G__26738__i;}
  args = new cljs.core.IndexedSeq(G__26738__a,0);
} 
return G__26737__delegate.call(this,args);};
G__26737.cljs$lang$maxFixedArity = 0;
G__26737.cljs$lang$applyTo = (function (arglist__26739){
var args = cljs.core.seq(arglist__26739);
return G__26737__delegate(args);
});
G__26737.cljs$core$IFn$_invoke$arity$variadic = G__26737__delegate;
return G__26737;
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
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26741 = cljs.core._EQ_;
var expr__26742 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26741.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26742))){
var path_parts = ((function (pred__26741,expr__26742){
return (function (p1__26740_SHARP_){
return clojure.string.split.call(null,p1__26740_SHARP_,/[\/\\]/);
});})(pred__26741,expr__26742))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26741,expr__26742){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26744){if((e26744 instanceof Error)){
var e = e26744;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26744;

}
}})());
});
;})(path_parts,sep,root,pred__26741,expr__26742))
} else {
if(cljs.core.truth_(pred__26741.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26742))){
return ((function (pred__26741,expr__26742){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__26741,expr__26742){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26741,expr__26742))
);

return deferred.addErrback(((function (deferred,pred__26741,expr__26742){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26741,expr__26742))
);
});
;})(pred__26741,expr__26742))
} else {
return ((function (pred__26741,expr__26742){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26741,expr__26742))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26745,callback){
var map__26748 = p__26745;
var map__26748__$1 = ((((!((map__26748 == null)))?((((map__26748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26748):map__26748);
var file_msg = map__26748__$1;
var request_url = cljs.core.get.call(null,map__26748__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26748,map__26748__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26748,map__26748__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto__){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto__){
return (function (state_26772){
var state_val_26773 = (state_26772[(1)]);
if((state_val_26773 === (7))){
var inst_26768 = (state_26772[(2)]);
var state_26772__$1 = state_26772;
var statearr_26774_26794 = state_26772__$1;
(statearr_26774_26794[(2)] = inst_26768);

(statearr_26774_26794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26773 === (1))){
var state_26772__$1 = state_26772;
var statearr_26775_26795 = state_26772__$1;
(statearr_26775_26795[(2)] = null);

(statearr_26775_26795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26773 === (4))){
var inst_26752 = (state_26772[(7)]);
var inst_26752__$1 = (state_26772[(2)]);
var state_26772__$1 = (function (){var statearr_26776 = state_26772;
(statearr_26776[(7)] = inst_26752__$1);

return statearr_26776;
})();
if(cljs.core.truth_(inst_26752__$1)){
var statearr_26777_26796 = state_26772__$1;
(statearr_26777_26796[(1)] = (5));

} else {
var statearr_26778_26797 = state_26772__$1;
(statearr_26778_26797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26773 === (6))){
var state_26772__$1 = state_26772;
var statearr_26779_26798 = state_26772__$1;
(statearr_26779_26798[(2)] = null);

(statearr_26779_26798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26773 === (3))){
var inst_26770 = (state_26772[(2)]);
var state_26772__$1 = state_26772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26772__$1,inst_26770);
} else {
if((state_val_26773 === (2))){
var state_26772__$1 = state_26772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26772__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26773 === (11))){
var inst_26764 = (state_26772[(2)]);
var state_26772__$1 = (function (){var statearr_26780 = state_26772;
(statearr_26780[(8)] = inst_26764);

return statearr_26780;
})();
var statearr_26781_26799 = state_26772__$1;
(statearr_26781_26799[(2)] = null);

(statearr_26781_26799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26773 === (9))){
var inst_26756 = (state_26772[(9)]);
var inst_26758 = (state_26772[(10)]);
var inst_26760 = inst_26758.call(null,inst_26756);
var state_26772__$1 = state_26772;
var statearr_26782_26800 = state_26772__$1;
(statearr_26782_26800[(2)] = inst_26760);

(statearr_26782_26800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26773 === (5))){
var inst_26752 = (state_26772[(7)]);
var inst_26754 = figwheel.client.file_reloading.blocking_load.call(null,inst_26752);
var state_26772__$1 = state_26772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26772__$1,(8),inst_26754);
} else {
if((state_val_26773 === (10))){
var inst_26756 = (state_26772[(9)]);
var inst_26762 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26756);
var state_26772__$1 = state_26772;
var statearr_26783_26801 = state_26772__$1;
(statearr_26783_26801[(2)] = inst_26762);

(statearr_26783_26801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26773 === (8))){
var inst_26752 = (state_26772[(7)]);
var inst_26758 = (state_26772[(10)]);
var inst_26756 = (state_26772[(2)]);
var inst_26757 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26758__$1 = cljs.core.get.call(null,inst_26757,inst_26752);
var state_26772__$1 = (function (){var statearr_26784 = state_26772;
(statearr_26784[(9)] = inst_26756);

(statearr_26784[(10)] = inst_26758__$1);

return statearr_26784;
})();
if(cljs.core.truth_(inst_26758__$1)){
var statearr_26785_26802 = state_26772__$1;
(statearr_26785_26802[(1)] = (9));

} else {
var statearr_26786_26803 = state_26772__$1;
(statearr_26786_26803[(1)] = (10));

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
});})(c__23672__auto__))
;
return ((function (switch__23560__auto__,c__23672__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23561__auto__ = null;
var figwheel$client$file_reloading$state_machine__23561__auto____0 = (function (){
var statearr_26790 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26790[(0)] = figwheel$client$file_reloading$state_machine__23561__auto__);

(statearr_26790[(1)] = (1));

return statearr_26790;
});
var figwheel$client$file_reloading$state_machine__23561__auto____1 = (function (state_26772){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_26772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e26791){if((e26791 instanceof Object)){
var ex__23564__auto__ = e26791;
var statearr_26792_26804 = state_26772;
(statearr_26792_26804[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26805 = state_26772;
state_26772 = G__26805;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23561__auto__ = function(state_26772){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23561__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23561__auto____1.call(this,state_26772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23561__auto____0;
figwheel$client$file_reloading$state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23561__auto____1;
return figwheel$client$file_reloading$state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto__))
})();
var state__23674__auto__ = (function (){var statearr_26793 = f__23673__auto__.call(null);
(statearr_26793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto__);

return statearr_26793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto__))
);

return c__23672__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26806,callback){
var map__26809 = p__26806;
var map__26809__$1 = ((((!((map__26809 == null)))?((((map__26809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26809):map__26809);
var file_msg = map__26809__$1;
var namespace = cljs.core.get.call(null,map__26809__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26809,map__26809__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26809,map__26809__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26811){
var map__26814 = p__26811;
var map__26814__$1 = ((((!((map__26814 == null)))?((((map__26814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26814):map__26814);
var file_msg = map__26814__$1;
var namespace = cljs.core.get.call(null,map__26814__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20437__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20437__auto__){
var or__20449__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20449__auto__)){
return or__20449__auto__;
} else {
var or__20449__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20449__auto____$1)){
return or__20449__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20437__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26816,callback){
var map__26819 = p__26816;
var map__26819__$1 = ((((!((map__26819 == null)))?((((map__26819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26819):map__26819);
var file_msg = map__26819__$1;
var request_url = cljs.core.get.call(null,map__26819__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26819__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

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
var c__23672__auto___26923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto___26923,out){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto___26923,out){
return (function (state_26905){
var state_val_26906 = (state_26905[(1)]);
if((state_val_26906 === (1))){
var inst_26879 = cljs.core.seq.call(null,files);
var inst_26880 = cljs.core.first.call(null,inst_26879);
var inst_26881 = cljs.core.next.call(null,inst_26879);
var inst_26882 = files;
var state_26905__$1 = (function (){var statearr_26907 = state_26905;
(statearr_26907[(7)] = inst_26882);

(statearr_26907[(8)] = inst_26881);

(statearr_26907[(9)] = inst_26880);

return statearr_26907;
})();
var statearr_26908_26924 = state_26905__$1;
(statearr_26908_26924[(2)] = null);

(statearr_26908_26924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (2))){
var inst_26888 = (state_26905[(10)]);
var inst_26882 = (state_26905[(7)]);
var inst_26887 = cljs.core.seq.call(null,inst_26882);
var inst_26888__$1 = cljs.core.first.call(null,inst_26887);
var inst_26889 = cljs.core.next.call(null,inst_26887);
var inst_26890 = (inst_26888__$1 == null);
var inst_26891 = cljs.core.not.call(null,inst_26890);
var state_26905__$1 = (function (){var statearr_26909 = state_26905;
(statearr_26909[(10)] = inst_26888__$1);

(statearr_26909[(11)] = inst_26889);

return statearr_26909;
})();
if(inst_26891){
var statearr_26910_26925 = state_26905__$1;
(statearr_26910_26925[(1)] = (4));

} else {
var statearr_26911_26926 = state_26905__$1;
(statearr_26911_26926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (3))){
var inst_26903 = (state_26905[(2)]);
var state_26905__$1 = state_26905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26905__$1,inst_26903);
} else {
if((state_val_26906 === (4))){
var inst_26888 = (state_26905[(10)]);
var inst_26893 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26888);
var state_26905__$1 = state_26905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26905__$1,(7),inst_26893);
} else {
if((state_val_26906 === (5))){
var inst_26899 = cljs.core.async.close_BANG_.call(null,out);
var state_26905__$1 = state_26905;
var statearr_26912_26927 = state_26905__$1;
(statearr_26912_26927[(2)] = inst_26899);

(statearr_26912_26927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (6))){
var inst_26901 = (state_26905[(2)]);
var state_26905__$1 = state_26905;
var statearr_26913_26928 = state_26905__$1;
(statearr_26913_26928[(2)] = inst_26901);

(statearr_26913_26928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (7))){
var inst_26889 = (state_26905[(11)]);
var inst_26895 = (state_26905[(2)]);
var inst_26896 = cljs.core.async.put_BANG_.call(null,out,inst_26895);
var inst_26882 = inst_26889;
var state_26905__$1 = (function (){var statearr_26914 = state_26905;
(statearr_26914[(12)] = inst_26896);

(statearr_26914[(7)] = inst_26882);

return statearr_26914;
})();
var statearr_26915_26929 = state_26905__$1;
(statearr_26915_26929[(2)] = null);

(statearr_26915_26929[(1)] = (2));


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
});})(c__23672__auto___26923,out))
;
return ((function (switch__23560__auto__,c__23672__auto___26923,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23561__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23561__auto____0 = (function (){
var statearr_26919 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26919[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23561__auto__);

(statearr_26919[(1)] = (1));

return statearr_26919;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23561__auto____1 = (function (state_26905){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_26905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e26920){if((e26920 instanceof Object)){
var ex__23564__auto__ = e26920;
var statearr_26921_26930 = state_26905;
(statearr_26921_26930[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26931 = state_26905;
state_26905 = G__26931;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23561__auto__ = function(state_26905){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23561__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23561__auto____1.call(this,state_26905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23561__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23561__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto___26923,out))
})();
var state__23674__auto__ = (function (){var statearr_26922 = f__23673__auto__.call(null);
(statearr_26922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto___26923);

return statearr_26922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto___26923,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26932,opts){
var map__26936 = p__26932;
var map__26936__$1 = ((((!((map__26936 == null)))?((((map__26936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26936):map__26936);
var eval_body__$1 = cljs.core.get.call(null,map__26936__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26936__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20437__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20437__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20437__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26938){var e = e26938;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26939_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26939_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.call(null,(function (p__26948){
var vec__26949 = p__26948;
var k = cljs.core.nth.call(null,vec__26949,(0),null);
var v = cljs.core.nth.call(null,vec__26949,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26952){
var vec__26953 = p__26952;
var k = cljs.core.nth.call(null,vec__26953,(0),null);
var v = cljs.core.nth.call(null,vec__26953,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26959,p__26960){
var map__27207 = p__26959;
var map__27207__$1 = ((((!((map__27207 == null)))?((((map__27207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27207):map__27207);
var opts = map__27207__$1;
var before_jsload = cljs.core.get.call(null,map__27207__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27207__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27207__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27208 = p__26960;
var map__27208__$1 = ((((!((map__27208 == null)))?((((map__27208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27208):map__27208);
var msg = map__27208__$1;
var files = cljs.core.get.call(null,map__27208__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27208__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27208__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23673__auto__ = (function (){var switch__23560__auto__ = ((function (c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27361){
var state_val_27362 = (state_27361[(1)]);
if((state_val_27362 === (7))){
var inst_27224 = (state_27361[(7)]);
var inst_27222 = (state_27361[(8)]);
var inst_27223 = (state_27361[(9)]);
var inst_27225 = (state_27361[(10)]);
var inst_27230 = cljs.core._nth.call(null,inst_27223,inst_27225);
var inst_27231 = figwheel.client.file_reloading.eval_body.call(null,inst_27230,opts);
var inst_27232 = (inst_27225 + (1));
var tmp27363 = inst_27224;
var tmp27364 = inst_27222;
var tmp27365 = inst_27223;
var inst_27222__$1 = tmp27364;
var inst_27223__$1 = tmp27365;
var inst_27224__$1 = tmp27363;
var inst_27225__$1 = inst_27232;
var state_27361__$1 = (function (){var statearr_27366 = state_27361;
(statearr_27366[(7)] = inst_27224__$1);

(statearr_27366[(11)] = inst_27231);

(statearr_27366[(8)] = inst_27222__$1);

(statearr_27366[(9)] = inst_27223__$1);

(statearr_27366[(10)] = inst_27225__$1);

return statearr_27366;
})();
var statearr_27367_27453 = state_27361__$1;
(statearr_27367_27453[(2)] = null);

(statearr_27367_27453[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (20))){
var inst_27265 = (state_27361[(12)]);
var inst_27273 = figwheel.client.file_reloading.sort_files.call(null,inst_27265);
var state_27361__$1 = state_27361;
var statearr_27368_27454 = state_27361__$1;
(statearr_27368_27454[(2)] = inst_27273);

(statearr_27368_27454[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (27))){
var state_27361__$1 = state_27361;
var statearr_27369_27455 = state_27361__$1;
(statearr_27369_27455[(2)] = null);

(statearr_27369_27455[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (1))){
var inst_27214 = (state_27361[(13)]);
var inst_27211 = before_jsload.call(null,files);
var inst_27212 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27213 = (function (){return ((function (inst_27214,inst_27211,inst_27212,state_val_27362,c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26956_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26956_SHARP_);
});
;})(inst_27214,inst_27211,inst_27212,state_val_27362,c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27214__$1 = cljs.core.filter.call(null,inst_27213,files);
var inst_27215 = cljs.core.not_empty.call(null,inst_27214__$1);
var state_27361__$1 = (function (){var statearr_27370 = state_27361;
(statearr_27370[(14)] = inst_27212);

(statearr_27370[(13)] = inst_27214__$1);

(statearr_27370[(15)] = inst_27211);

return statearr_27370;
})();
if(cljs.core.truth_(inst_27215)){
var statearr_27371_27456 = state_27361__$1;
(statearr_27371_27456[(1)] = (2));

} else {
var statearr_27372_27457 = state_27361__$1;
(statearr_27372_27457[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (24))){
var state_27361__$1 = state_27361;
var statearr_27373_27458 = state_27361__$1;
(statearr_27373_27458[(2)] = null);

(statearr_27373_27458[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (39))){
var inst_27315 = (state_27361[(16)]);
var state_27361__$1 = state_27361;
var statearr_27374_27459 = state_27361__$1;
(statearr_27374_27459[(2)] = inst_27315);

(statearr_27374_27459[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (46))){
var inst_27356 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
var statearr_27375_27460 = state_27361__$1;
(statearr_27375_27460[(2)] = inst_27356);

(statearr_27375_27460[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (4))){
var inst_27259 = (state_27361[(2)]);
var inst_27260 = cljs.core.List.EMPTY;
var inst_27261 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27260);
var inst_27262 = (function (){return ((function (inst_27259,inst_27260,inst_27261,state_val_27362,c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26957_SHARP_){
var and__20437__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26957_SHARP_);
if(cljs.core.truth_(and__20437__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26957_SHARP_));
} else {
return and__20437__auto__;
}
});
;})(inst_27259,inst_27260,inst_27261,state_val_27362,c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27263 = cljs.core.filter.call(null,inst_27262,files);
var inst_27264 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27265 = cljs.core.concat.call(null,inst_27263,inst_27264);
var state_27361__$1 = (function (){var statearr_27376 = state_27361;
(statearr_27376[(12)] = inst_27265);

(statearr_27376[(17)] = inst_27259);

(statearr_27376[(18)] = inst_27261);

return statearr_27376;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27377_27461 = state_27361__$1;
(statearr_27377_27461[(1)] = (16));

} else {
var statearr_27378_27462 = state_27361__$1;
(statearr_27378_27462[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (15))){
var inst_27249 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
var statearr_27379_27463 = state_27361__$1;
(statearr_27379_27463[(2)] = inst_27249);

(statearr_27379_27463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (21))){
var inst_27275 = (state_27361[(19)]);
var inst_27275__$1 = (state_27361[(2)]);
var inst_27276 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27275__$1);
var state_27361__$1 = (function (){var statearr_27380 = state_27361;
(statearr_27380[(19)] = inst_27275__$1);

return statearr_27380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27361__$1,(22),inst_27276);
} else {
if((state_val_27362 === (31))){
var inst_27359 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27361__$1,inst_27359);
} else {
if((state_val_27362 === (32))){
var inst_27315 = (state_27361[(16)]);
var inst_27320 = inst_27315.cljs$lang$protocol_mask$partition0$;
var inst_27321 = (inst_27320 & (64));
var inst_27322 = inst_27315.cljs$core$ISeq$;
var inst_27323 = (inst_27321) || (inst_27322);
var state_27361__$1 = state_27361;
if(cljs.core.truth_(inst_27323)){
var statearr_27381_27464 = state_27361__$1;
(statearr_27381_27464[(1)] = (35));

} else {
var statearr_27382_27465 = state_27361__$1;
(statearr_27382_27465[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (40))){
var inst_27336 = (state_27361[(20)]);
var inst_27335 = (state_27361[(2)]);
var inst_27336__$1 = cljs.core.get.call(null,inst_27335,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27337 = cljs.core.get.call(null,inst_27335,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27338 = cljs.core.not_empty.call(null,inst_27336__$1);
var state_27361__$1 = (function (){var statearr_27383 = state_27361;
(statearr_27383[(20)] = inst_27336__$1);

(statearr_27383[(21)] = inst_27337);

return statearr_27383;
})();
if(cljs.core.truth_(inst_27338)){
var statearr_27384_27466 = state_27361__$1;
(statearr_27384_27466[(1)] = (41));

} else {
var statearr_27385_27467 = state_27361__$1;
(statearr_27385_27467[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (33))){
var state_27361__$1 = state_27361;
var statearr_27386_27468 = state_27361__$1;
(statearr_27386_27468[(2)] = false);

(statearr_27386_27468[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (13))){
var inst_27235 = (state_27361[(22)]);
var inst_27239 = cljs.core.chunk_first.call(null,inst_27235);
var inst_27240 = cljs.core.chunk_rest.call(null,inst_27235);
var inst_27241 = cljs.core.count.call(null,inst_27239);
var inst_27222 = inst_27240;
var inst_27223 = inst_27239;
var inst_27224 = inst_27241;
var inst_27225 = (0);
var state_27361__$1 = (function (){var statearr_27387 = state_27361;
(statearr_27387[(7)] = inst_27224);

(statearr_27387[(8)] = inst_27222);

(statearr_27387[(9)] = inst_27223);

(statearr_27387[(10)] = inst_27225);

return statearr_27387;
})();
var statearr_27388_27469 = state_27361__$1;
(statearr_27388_27469[(2)] = null);

(statearr_27388_27469[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (22))){
var inst_27283 = (state_27361[(23)]);
var inst_27275 = (state_27361[(19)]);
var inst_27278 = (state_27361[(24)]);
var inst_27279 = (state_27361[(25)]);
var inst_27278__$1 = (state_27361[(2)]);
var inst_27279__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27278__$1);
var inst_27280 = (function (){var all_files = inst_27275;
var res_SINGLEQUOTE_ = inst_27278__$1;
var res = inst_27279__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27283,inst_27275,inst_27278,inst_27279,inst_27278__$1,inst_27279__$1,state_val_27362,c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26958_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26958_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27283,inst_27275,inst_27278,inst_27279,inst_27278__$1,inst_27279__$1,state_val_27362,c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27281 = cljs.core.filter.call(null,inst_27280,inst_27278__$1);
var inst_27282 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27283__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27282);
var inst_27284 = cljs.core.not_empty.call(null,inst_27283__$1);
var state_27361__$1 = (function (){var statearr_27389 = state_27361;
(statearr_27389[(23)] = inst_27283__$1);

(statearr_27389[(24)] = inst_27278__$1);

(statearr_27389[(26)] = inst_27281);

(statearr_27389[(25)] = inst_27279__$1);

return statearr_27389;
})();
if(cljs.core.truth_(inst_27284)){
var statearr_27390_27470 = state_27361__$1;
(statearr_27390_27470[(1)] = (23));

} else {
var statearr_27391_27471 = state_27361__$1;
(statearr_27391_27471[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (36))){
var state_27361__$1 = state_27361;
var statearr_27392_27472 = state_27361__$1;
(statearr_27392_27472[(2)] = false);

(statearr_27392_27472[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (41))){
var inst_27336 = (state_27361[(20)]);
var inst_27340 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27341 = cljs.core.map.call(null,inst_27340,inst_27336);
var inst_27342 = cljs.core.pr_str.call(null,inst_27341);
var inst_27343 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27342)].join('');
var inst_27344 = figwheel.client.utils.log.call(null,inst_27343);
var state_27361__$1 = state_27361;
var statearr_27393_27473 = state_27361__$1;
(statearr_27393_27473[(2)] = inst_27344);

(statearr_27393_27473[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (43))){
var inst_27337 = (state_27361[(21)]);
var inst_27347 = (state_27361[(2)]);
var inst_27348 = cljs.core.not_empty.call(null,inst_27337);
var state_27361__$1 = (function (){var statearr_27394 = state_27361;
(statearr_27394[(27)] = inst_27347);

return statearr_27394;
})();
if(cljs.core.truth_(inst_27348)){
var statearr_27395_27474 = state_27361__$1;
(statearr_27395_27474[(1)] = (44));

} else {
var statearr_27396_27475 = state_27361__$1;
(statearr_27396_27475[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (29))){
var inst_27283 = (state_27361[(23)]);
var inst_27275 = (state_27361[(19)]);
var inst_27278 = (state_27361[(24)]);
var inst_27315 = (state_27361[(16)]);
var inst_27281 = (state_27361[(26)]);
var inst_27279 = (state_27361[(25)]);
var inst_27311 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27314 = (function (){var all_files = inst_27275;
var res_SINGLEQUOTE_ = inst_27278;
var res = inst_27279;
var files_not_loaded = inst_27281;
var dependencies_that_loaded = inst_27283;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27283,inst_27275,inst_27278,inst_27315,inst_27281,inst_27279,inst_27311,state_val_27362,c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27313){
var map__27397 = p__27313;
var map__27397__$1 = ((((!((map__27397 == null)))?((((map__27397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27397):map__27397);
var namespace = cljs.core.get.call(null,map__27397__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27283,inst_27275,inst_27278,inst_27315,inst_27281,inst_27279,inst_27311,state_val_27362,c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27315__$1 = cljs.core.group_by.call(null,inst_27314,inst_27281);
var inst_27317 = (inst_27315__$1 == null);
var inst_27318 = cljs.core.not.call(null,inst_27317);
var state_27361__$1 = (function (){var statearr_27399 = state_27361;
(statearr_27399[(28)] = inst_27311);

(statearr_27399[(16)] = inst_27315__$1);

return statearr_27399;
})();
if(inst_27318){
var statearr_27400_27476 = state_27361__$1;
(statearr_27400_27476[(1)] = (32));

} else {
var statearr_27401_27477 = state_27361__$1;
(statearr_27401_27477[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (44))){
var inst_27337 = (state_27361[(21)]);
var inst_27350 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27337);
var inst_27351 = cljs.core.pr_str.call(null,inst_27350);
var inst_27352 = [cljs.core.str("not required: "),cljs.core.str(inst_27351)].join('');
var inst_27353 = figwheel.client.utils.log.call(null,inst_27352);
var state_27361__$1 = state_27361;
var statearr_27402_27478 = state_27361__$1;
(statearr_27402_27478[(2)] = inst_27353);

(statearr_27402_27478[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (6))){
var inst_27256 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
var statearr_27403_27479 = state_27361__$1;
(statearr_27403_27479[(2)] = inst_27256);

(statearr_27403_27479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (28))){
var inst_27281 = (state_27361[(26)]);
var inst_27308 = (state_27361[(2)]);
var inst_27309 = cljs.core.not_empty.call(null,inst_27281);
var state_27361__$1 = (function (){var statearr_27404 = state_27361;
(statearr_27404[(29)] = inst_27308);

return statearr_27404;
})();
if(cljs.core.truth_(inst_27309)){
var statearr_27405_27480 = state_27361__$1;
(statearr_27405_27480[(1)] = (29));

} else {
var statearr_27406_27481 = state_27361__$1;
(statearr_27406_27481[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (25))){
var inst_27279 = (state_27361[(25)]);
var inst_27295 = (state_27361[(2)]);
var inst_27296 = cljs.core.not_empty.call(null,inst_27279);
var state_27361__$1 = (function (){var statearr_27407 = state_27361;
(statearr_27407[(30)] = inst_27295);

return statearr_27407;
})();
if(cljs.core.truth_(inst_27296)){
var statearr_27408_27482 = state_27361__$1;
(statearr_27408_27482[(1)] = (26));

} else {
var statearr_27409_27483 = state_27361__$1;
(statearr_27409_27483[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (34))){
var inst_27330 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
if(cljs.core.truth_(inst_27330)){
var statearr_27410_27484 = state_27361__$1;
(statearr_27410_27484[(1)] = (38));

} else {
var statearr_27411_27485 = state_27361__$1;
(statearr_27411_27485[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (17))){
var state_27361__$1 = state_27361;
var statearr_27412_27486 = state_27361__$1;
(statearr_27412_27486[(2)] = recompile_dependents);

(statearr_27412_27486[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (3))){
var state_27361__$1 = state_27361;
var statearr_27413_27487 = state_27361__$1;
(statearr_27413_27487[(2)] = null);

(statearr_27413_27487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (12))){
var inst_27252 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
var statearr_27414_27488 = state_27361__$1;
(statearr_27414_27488[(2)] = inst_27252);

(statearr_27414_27488[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (2))){
var inst_27214 = (state_27361[(13)]);
var inst_27221 = cljs.core.seq.call(null,inst_27214);
var inst_27222 = inst_27221;
var inst_27223 = null;
var inst_27224 = (0);
var inst_27225 = (0);
var state_27361__$1 = (function (){var statearr_27415 = state_27361;
(statearr_27415[(7)] = inst_27224);

(statearr_27415[(8)] = inst_27222);

(statearr_27415[(9)] = inst_27223);

(statearr_27415[(10)] = inst_27225);

return statearr_27415;
})();
var statearr_27416_27489 = state_27361__$1;
(statearr_27416_27489[(2)] = null);

(statearr_27416_27489[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (23))){
var inst_27283 = (state_27361[(23)]);
var inst_27275 = (state_27361[(19)]);
var inst_27278 = (state_27361[(24)]);
var inst_27281 = (state_27361[(26)]);
var inst_27279 = (state_27361[(25)]);
var inst_27286 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27288 = (function (){var all_files = inst_27275;
var res_SINGLEQUOTE_ = inst_27278;
var res = inst_27279;
var files_not_loaded = inst_27281;
var dependencies_that_loaded = inst_27283;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27283,inst_27275,inst_27278,inst_27281,inst_27279,inst_27286,state_val_27362,c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27287){
var map__27417 = p__27287;
var map__27417__$1 = ((((!((map__27417 == null)))?((((map__27417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27417):map__27417);
var request_url = cljs.core.get.call(null,map__27417__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27283,inst_27275,inst_27278,inst_27281,inst_27279,inst_27286,state_val_27362,c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27289 = cljs.core.reverse.call(null,inst_27283);
var inst_27290 = cljs.core.map.call(null,inst_27288,inst_27289);
var inst_27291 = cljs.core.pr_str.call(null,inst_27290);
var inst_27292 = figwheel.client.utils.log.call(null,inst_27291);
var state_27361__$1 = (function (){var statearr_27419 = state_27361;
(statearr_27419[(31)] = inst_27286);

return statearr_27419;
})();
var statearr_27420_27490 = state_27361__$1;
(statearr_27420_27490[(2)] = inst_27292);

(statearr_27420_27490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (35))){
var state_27361__$1 = state_27361;
var statearr_27421_27491 = state_27361__$1;
(statearr_27421_27491[(2)] = true);

(statearr_27421_27491[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (19))){
var inst_27265 = (state_27361[(12)]);
var inst_27271 = figwheel.client.file_reloading.expand_files.call(null,inst_27265);
var state_27361__$1 = state_27361;
var statearr_27422_27492 = state_27361__$1;
(statearr_27422_27492[(2)] = inst_27271);

(statearr_27422_27492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (11))){
var state_27361__$1 = state_27361;
var statearr_27423_27493 = state_27361__$1;
(statearr_27423_27493[(2)] = null);

(statearr_27423_27493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (9))){
var inst_27254 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
var statearr_27424_27494 = state_27361__$1;
(statearr_27424_27494[(2)] = inst_27254);

(statearr_27424_27494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (5))){
var inst_27224 = (state_27361[(7)]);
var inst_27225 = (state_27361[(10)]);
var inst_27227 = (inst_27225 < inst_27224);
var inst_27228 = inst_27227;
var state_27361__$1 = state_27361;
if(cljs.core.truth_(inst_27228)){
var statearr_27425_27495 = state_27361__$1;
(statearr_27425_27495[(1)] = (7));

} else {
var statearr_27426_27496 = state_27361__$1;
(statearr_27426_27496[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (14))){
var inst_27235 = (state_27361[(22)]);
var inst_27244 = cljs.core.first.call(null,inst_27235);
var inst_27245 = figwheel.client.file_reloading.eval_body.call(null,inst_27244,opts);
var inst_27246 = cljs.core.next.call(null,inst_27235);
var inst_27222 = inst_27246;
var inst_27223 = null;
var inst_27224 = (0);
var inst_27225 = (0);
var state_27361__$1 = (function (){var statearr_27427 = state_27361;
(statearr_27427[(7)] = inst_27224);

(statearr_27427[(8)] = inst_27222);

(statearr_27427[(9)] = inst_27223);

(statearr_27427[(32)] = inst_27245);

(statearr_27427[(10)] = inst_27225);

return statearr_27427;
})();
var statearr_27428_27497 = state_27361__$1;
(statearr_27428_27497[(2)] = null);

(statearr_27428_27497[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (45))){
var state_27361__$1 = state_27361;
var statearr_27429_27498 = state_27361__$1;
(statearr_27429_27498[(2)] = null);

(statearr_27429_27498[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (26))){
var inst_27283 = (state_27361[(23)]);
var inst_27275 = (state_27361[(19)]);
var inst_27278 = (state_27361[(24)]);
var inst_27281 = (state_27361[(26)]);
var inst_27279 = (state_27361[(25)]);
var inst_27298 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27300 = (function (){var all_files = inst_27275;
var res_SINGLEQUOTE_ = inst_27278;
var res = inst_27279;
var files_not_loaded = inst_27281;
var dependencies_that_loaded = inst_27283;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27283,inst_27275,inst_27278,inst_27281,inst_27279,inst_27298,state_val_27362,c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27299){
var map__27430 = p__27299;
var map__27430__$1 = ((((!((map__27430 == null)))?((((map__27430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27430):map__27430);
var namespace = cljs.core.get.call(null,map__27430__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27430__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27283,inst_27275,inst_27278,inst_27281,inst_27279,inst_27298,state_val_27362,c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27301 = cljs.core.map.call(null,inst_27300,inst_27279);
var inst_27302 = cljs.core.pr_str.call(null,inst_27301);
var inst_27303 = figwheel.client.utils.log.call(null,inst_27302);
var inst_27304 = (function (){var all_files = inst_27275;
var res_SINGLEQUOTE_ = inst_27278;
var res = inst_27279;
var files_not_loaded = inst_27281;
var dependencies_that_loaded = inst_27283;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27283,inst_27275,inst_27278,inst_27281,inst_27279,inst_27298,inst_27300,inst_27301,inst_27302,inst_27303,state_val_27362,c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27283,inst_27275,inst_27278,inst_27281,inst_27279,inst_27298,inst_27300,inst_27301,inst_27302,inst_27303,state_val_27362,c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27305 = setTimeout(inst_27304,(10));
var state_27361__$1 = (function (){var statearr_27432 = state_27361;
(statearr_27432[(33)] = inst_27298);

(statearr_27432[(34)] = inst_27303);

return statearr_27432;
})();
var statearr_27433_27499 = state_27361__$1;
(statearr_27433_27499[(2)] = inst_27305);

(statearr_27433_27499[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (16))){
var state_27361__$1 = state_27361;
var statearr_27434_27500 = state_27361__$1;
(statearr_27434_27500[(2)] = reload_dependents);

(statearr_27434_27500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (38))){
var inst_27315 = (state_27361[(16)]);
var inst_27332 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27315);
var state_27361__$1 = state_27361;
var statearr_27435_27501 = state_27361__$1;
(statearr_27435_27501[(2)] = inst_27332);

(statearr_27435_27501[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (30))){
var state_27361__$1 = state_27361;
var statearr_27436_27502 = state_27361__$1;
(statearr_27436_27502[(2)] = null);

(statearr_27436_27502[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (10))){
var inst_27235 = (state_27361[(22)]);
var inst_27237 = cljs.core.chunked_seq_QMARK_.call(null,inst_27235);
var state_27361__$1 = state_27361;
if(inst_27237){
var statearr_27437_27503 = state_27361__$1;
(statearr_27437_27503[(1)] = (13));

} else {
var statearr_27438_27504 = state_27361__$1;
(statearr_27438_27504[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (18))){
var inst_27269 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
if(cljs.core.truth_(inst_27269)){
var statearr_27439_27505 = state_27361__$1;
(statearr_27439_27505[(1)] = (19));

} else {
var statearr_27440_27506 = state_27361__$1;
(statearr_27440_27506[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (42))){
var state_27361__$1 = state_27361;
var statearr_27441_27507 = state_27361__$1;
(statearr_27441_27507[(2)] = null);

(statearr_27441_27507[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (37))){
var inst_27327 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
var statearr_27442_27508 = state_27361__$1;
(statearr_27442_27508[(2)] = inst_27327);

(statearr_27442_27508[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (8))){
var inst_27222 = (state_27361[(8)]);
var inst_27235 = (state_27361[(22)]);
var inst_27235__$1 = cljs.core.seq.call(null,inst_27222);
var state_27361__$1 = (function (){var statearr_27443 = state_27361;
(statearr_27443[(22)] = inst_27235__$1);

return statearr_27443;
})();
if(inst_27235__$1){
var statearr_27444_27509 = state_27361__$1;
(statearr_27444_27509[(1)] = (10));

} else {
var statearr_27445_27510 = state_27361__$1;
(statearr_27445_27510[(1)] = (11));

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
});})(c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23560__auto__,c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23561__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23561__auto____0 = (function (){
var statearr_27449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27449[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23561__auto__);

(statearr_27449[(1)] = (1));

return statearr_27449;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23561__auto____1 = (function (state_27361){
while(true){
var ret_value__23562__auto__ = (function (){try{while(true){
var result__23563__auto__ = switch__23560__auto__.call(null,state_27361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23563__auto__;
}
break;
}
}catch (e27450){if((e27450 instanceof Object)){
var ex__23564__auto__ = e27450;
var statearr_27451_27511 = state_27361;
(statearr_27451_27511[(5)] = ex__23564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27512 = state_27361;
state_27361 = G__27512;
continue;
} else {
return ret_value__23562__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23561__auto__ = function(state_27361){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23561__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23561__auto____1.call(this,state_27361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23561__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23561__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23561__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23561__auto__;
})()
;})(switch__23560__auto__,c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23674__auto__ = (function (){var statearr_27452 = f__23673__auto__.call(null);
(statearr_27452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23672__auto__);

return statearr_27452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23674__auto__);
});})(c__23672__auto__,map__27207,map__27207__$1,opts,before_jsload,on_jsload,reload_dependents,map__27208,map__27208__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23672__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27515,link){
var map__27518 = p__27515;
var map__27518__$1 = ((((!((map__27518 == null)))?((((map__27518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27518):map__27518);
var file = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27518,map__27518__$1,file){
return (function (p1__27513_SHARP_,p2__27514_SHARP_){
if(cljs.core._EQ_.call(null,p1__27513_SHARP_,p2__27514_SHARP_)){
return p1__27513_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27518,map__27518__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27524){
var map__27525 = p__27524;
var map__27525__$1 = ((((!((map__27525 == null)))?((((map__27525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27525):map__27525);
var match_length = cljs.core.get.call(null,map__27525__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27525__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27520_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27520_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27527 = [];
var len__21524__auto___27530 = arguments.length;
var i__21525__auto___27531 = (0);
while(true){
if((i__21525__auto___27531 < len__21524__auto___27530)){
args27527.push((arguments[i__21525__auto___27531]));

var G__27532 = (i__21525__auto___27531 + (1));
i__21525__auto___27531 = G__27532;
continue;
} else {
}
break;
}

var G__27529 = args27527.length;
switch (G__27529) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27527.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27534_SHARP_,p2__27535_SHARP_){
return cljs.core.assoc.call(null,p1__27534_SHARP_,cljs.core.get.call(null,p2__27535_SHARP_,key),p2__27535_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27536){
var map__27539 = p__27536;
var map__27539__$1 = ((((!((map__27539 == null)))?((((map__27539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27539):map__27539);
var f_data = map__27539__$1;
var file = cljs.core.get.call(null,map__27539__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27541,files_msg){
var map__27548 = p__27541;
var map__27548__$1 = ((((!((map__27548 == null)))?((((map__27548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27548):map__27548);
var opts = map__27548__$1;
var on_cssload = cljs.core.get.call(null,map__27548__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27550_27554 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27551_27555 = null;
var count__27552_27556 = (0);
var i__27553_27557 = (0);
while(true){
if((i__27553_27557 < count__27552_27556)){
var f_27558 = cljs.core._nth.call(null,chunk__27551_27555,i__27553_27557);
figwheel.client.file_reloading.reload_css_file.call(null,f_27558);

var G__27559 = seq__27550_27554;
var G__27560 = chunk__27551_27555;
var G__27561 = count__27552_27556;
var G__27562 = (i__27553_27557 + (1));
seq__27550_27554 = G__27559;
chunk__27551_27555 = G__27560;
count__27552_27556 = G__27561;
i__27553_27557 = G__27562;
continue;
} else {
var temp__4657__auto___27563 = cljs.core.seq.call(null,seq__27550_27554);
if(temp__4657__auto___27563){
var seq__27550_27564__$1 = temp__4657__auto___27563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27550_27564__$1)){
var c__21260__auto___27565 = cljs.core.chunk_first.call(null,seq__27550_27564__$1);
var G__27566 = cljs.core.chunk_rest.call(null,seq__27550_27564__$1);
var G__27567 = c__21260__auto___27565;
var G__27568 = cljs.core.count.call(null,c__21260__auto___27565);
var G__27569 = (0);
seq__27550_27554 = G__27566;
chunk__27551_27555 = G__27567;
count__27552_27556 = G__27568;
i__27553_27557 = G__27569;
continue;
} else {
var f_27570 = cljs.core.first.call(null,seq__27550_27564__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27570);

var G__27571 = cljs.core.next.call(null,seq__27550_27564__$1);
var G__27572 = null;
var G__27573 = (0);
var G__27574 = (0);
seq__27550_27554 = G__27571;
chunk__27551_27555 = G__27572;
count__27552_27556 = G__27573;
i__27553_27557 = G__27574;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27548,map__27548__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27548,map__27548__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1480335654384