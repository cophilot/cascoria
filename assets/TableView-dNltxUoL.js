import{_ as p,o as n,c as a,a as r,F as u,r as o,t as s,p as m,b as y,e as f,f as b}from"./index-eRvjxSmF.js";const g={name:"CasTable",props:{count:{type:Number,required:!0}},methods:{goToHome(){this.$router.push({name:"home"})},getArray(){const t=[];for(let d=0;d<this.count;d++)t.push(d+1);return t}}},c=t=>(m("data-v-696df6d4"),t=t(),y(),t),A=c(()=>r("td",null,null,-1)),I=c(()=>r("td",null,"Bear",-1)),k=c(()=>r("td",null,"Dear",-1)),v=c(()=>r("td",null,"Fox",-1)),T=c(()=>r("td",null,"Fish",-1)),x=c(()=>r("td",null,"Bird",-1));function B(t,d,i,h,_,l){return n(),a("div",null,[r("table",null,[r("tr",null,[A,(n(!0),a(u,null,o(l.getArray(),e=>(n(),a("td",{key:e},s("P"+e),1))),128))]),r("tr",null,[I,(n(!0),a(u,null,o(l.getArray(),e=>(n(),a("td",{key:e},s(e),1))),128))]),r("tr",null,[k,(n(!0),a(u,null,o(l.getArray(),e=>(n(),a("td",{key:e},s(e),1))),128))]),r("tr",null,[v,(n(!0),a(u,null,o(l.getArray(),e=>(n(),a("td",{key:e},s(e),1))),128))]),r("tr",null,[T,(n(!0),a(u,null,o(l.getArray(),e=>(n(),a("td",{key:e},s(e),1))),128))]),r("tr",null,[x,(n(!0),a(u,null,o(l.getArray(),e=>(n(),a("td",{key:e},s(e),1))),128))])])])}const C=p(g,[["render",B],["__scopeId","data-v-696df6d4"]]),N={name:"TableView",components:{CasTable:C},data(){return{count:1}},mounted(){let t=this.$route.params.count;Array.isArray(t)&&(t=t[0]),!t||isNaN(parseInt(t))||parseInt(t)<1||parseInt(t)>4?this.$router.push({name:"home"}):this.count=parseInt(t)}};function $(t,d,i,h,_,l){const e=f("CasTable");return n(),a("div",null,[r("h1",null,s(_.count)+" Player",1),r("div",null,[b(e,{count:_.count},null,8,["count"])])])}const S=p(N,[["render",$],["__scopeId","data-v-78cdf0be"]]);export{S as default};