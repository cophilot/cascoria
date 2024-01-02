import{L as y,_ as M,o as i,c as l,a as s,F as h,r as m,t as p,n as g,p as w,b as v,M as I,e as x,f as b,g as S,h as k}from"./index-zO_8kZv8.js";const A={name:"CasTable",props:{count:{type:Number,required:!0}},data(){return{wMatrix:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],hMatrix:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],bonusMatrix:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],coneRow:[0,0,0,0,0,0],names:["","","","","",""]}},watch:{hMatrix:{handler:function(o){this.updateBonusMatrix()},deep:!0}},mounted(){setTimeout(()=>{const o=y.get(this.count+"wMatrix"),e=y.get(this.count+"hMatrix"),u=y.get(this.count+"coneRow"),c=y.get(this.count+"names");o&&(this.wMatrix=JSON.parse(o)),e&&(this.hMatrix=JSON.parse(e)),u&&(this.coneRow=JSON.parse(u)),c&&(this.names=JSON.parse(c))},10)},methods:{reset(){localStorage.removeItem(this.count+"wMatrix"),localStorage.removeItem(this.count+"hMatrix"),localStorage.removeItem(this.count+"coneRow"),localStorage.removeItem(this.count+"names"),this.wMatrix=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],this.hMatrix=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],this.coneRow=[0,0,0,0,0,0],this.names=["","","","","",""]},goToHome(){this.$router.push({name:"home"})},getArray(){const o=[];for(let e=0;e<this.count;e++)o.push(e+1);return o},setWMatrix(o,e,u){this.wMatrix[o-1][e-1]=parseInt(u.target.value)||0,y.set(this.count+"wMatrix",JSON.stringify(this.wMatrix))},setHMatrix(o,e,u){this.hMatrix[o-1][e-1]=parseInt(u.target.value)||0,y.set(this.count+"hMatrix",JSON.stringify(this.hMatrix))},setConeRow(o,e){this.coneRow[o-1]=parseInt(e.target.value)||0,y.set(this.count+"coneRow",JSON.stringify(this.coneRow))},setName(o,e){this.names[o-1]=e.target.value||"",y.set(this.count+"names",JSON.stringify(this.names))},updateBonusMatrix(){const o=[];if(this.count==1){for(let e of this.hMatrix)o.push(e[0]>=7?[2]:[0]);this.bonusMatrix=o;return}if(this.count==2){for(let e of this.hMatrix)e[0]>e[1]?o.push([2,0]):e[0]<e[1]?o.push([0,2]):e[0]!=0&&e[1]!=0?o.push([1,1]):o.push([0,0]);this.bonusMatrix=o;return}for(let e of this.hMatrix){let u=0,c=0;for(let d=0;d<e.length;d++)e[d]>u?(c=u,u=e[d]):e[d]>c&&(c=e[d]);if(u==0){o.push([0,0,0,0,0]);continue}let n=0,r=0;for(let d=0;d<e.length;d++)e[d]==u&&n++,e[d]==c&&r++;let t=0,a=0;n==1?(t=3,r==1&&c!=0&&(a=1)):n==2?t=2:n>2&&(t=1);let f=[];for(let d=0;d<e.length;d++)e[d]==u?f.push(t):e[d]==c?f.push(a):f.push(0);o.push(f)}this.bonusMatrix=o}},computed:{getWScore(){const o=[];for(let e=0;e<this.count;e++){let u=0;for(let c=0;c<5;c++)u+=this.wMatrix[c][e];o.push(u)}return o},getHScore(){const o=[];for(let e=0;e<this.count;e++){let u=0;for(let c=0;c<5;c++)u+=this.hMatrix[c][e]+this.bonusMatrix[c][e];o.push(u)}return o},getTotalScore(){const o=[];for(let e=0;e<this.count;e++)o.push(this.getWScore[e]+this.getHScore[e]+this.coneRow[e]);return o}}},H="/assets/bear-T6cN_upw.png",N="/assets/deer-iI-3_9NE.png",C="/assets/salmon-i4XScbsS.png",R="/assets/hawk-nfmjhbyD.png",T="/assets/fox-FfIYypCI.png",E="/assets/wildness-kDo9Serr.png",D="/assets/mountains-z1tN5QUz.png",B="/assets/forest-8QvoXQEv.png",F="/assets/desert-zMc0HDba.png",W="/assets/swamp-REfn_sKM.png",O="/assets/water-Aeg3rj-q.png",L="/assets/hectare-j6kyQtnn.png",J="/assets/cone-RGHoypaE.png",P="/assets/final_score-qo-FqKyy.png",_=o=>(w("data-v-72eb5b30"),o=o(),v(),o),j={class:"sticky name-row print-off"},q=_(()=>s("td",{class:"num-td"},null,-1)),V=["placeholder","onInput","value"],z={class:"print-only"},Q={class:"name-row"},K=_(()=>s("td",{class:"num-td"},null,-1)),X={class:"print-only print-label",style:{"margin-top":"10px"}},Y=_(()=>s("td",{class:"icon-td"},[s("img",{src:H,alt:"Bear",class:"icon"})],-1)),G=["id","onInput","value"],U={class:"print-only print-label"},Z=_(()=>s("td",{class:"icon-td"},[s("img",{src:N,alt:"Deer",class:"icon"})],-1)),$=["id","onInput","value"],tt={class:"print-only print-label"},st=_(()=>s("td",{class:"icon-td"},[s("img",{src:C,alt:"Salmon",class:"icon"})],-1)),et=["id","onInput","value"],nt={class:"print-only print-label"},ot=_(()=>s("td",{class:"icon-td"},[s("img",{src:R,alt:"Hawk",class:"icon"})],-1)),rt=["id","onInput","value"],it={class:"print-only print-label"},lt=_(()=>s("td",{class:"icon-td"},[s("img",{src:T,alt:"Fox",class:"icon"})],-1)),at=["id","onInput","value"],ct={class:"print-only print-label"},ut={class:"sub-divider sub-score"},pt=_(()=>s("td",{class:"icon-td"},[s("img",{src:E,alt:"W",class:"icon"})],-1)),ht=["value"],dt={class:"print-only print-label"},mt=_(()=>s("td",{class:"icon-td"},[s("img",{src:D,alt:"Mountains",class:"icon"})],-1)),_t=["id","onInput","value"],yt={class:"print-only print-label",style:{"margin-top":"0","margin-bottom":"-5px"}},ft=_(()=>s("td",{class:"icon-td"},[s("img",{src:B,alt:"Forest",class:"icon"})],-1)),gt=["id","onInput","value"],bt={class:"print-only print-label",style:{"margin-top":"0","margin-bottom":"-5px"}},xt=_(()=>s("td",{class:"icon-td"},[s("img",{src:F,alt:"Desert",class:"icon"})],-1)),Mt=["id","onInput","value"],wt={class:"print-only print-label",style:{"margin-top":"0","margin-bottom":"-5px"}},vt=_(()=>s("td",{class:"icon-td"},[s("img",{src:W,alt:"Swamp",class:"icon"})],-1)),It=["id","onInput","value"],St={class:"print-only print-label",style:{"margin-top":"0","margin-bottom":"-5px"}},kt=_(()=>s("td",{class:"icon-td"},[s("img",{src:O,alt:"Water",class:"icon"})],-1)),At=["id","onInput","value"],Ht={class:"print-only print-label",style:{"margin-top":"0","margin-bottom":"-5px"}},Nt={class:"sub-divider sub-score"},Ct=_(()=>s("td",{class:"icon-td"},[s("img",{src:L,alt:"H",class:"icon"})],-1)),Rt=["value"],Tt={class:"print-only print-label"},Et={class:"sub-divider"},Dt=_(()=>s("td",{class:"icon-td"},[s("img",{src:J,alt:"Cone",class:"icon"})],-1)),Bt=["id","onInput","value"],Ft={class:"print-only print-label"},Wt={class:"final-score"},Ot=_(()=>s("td",{class:"icon-td"},[s("img",{src:P,alt:"Final Score",class:"icon"})],-1)),Lt=["value"],Jt={class:"print-only print-label"};function Pt(o,e,u,c,n,r){return i(),l(h,null,[s("div",null,[s("table",null,[s("tr",j,[q,(i(!0),l(h,null,m(r.getArray(),t=>(i(),l("td",{key:"n"+t,class:"num-td"},[s("input",{type:"text",placeholder:"P"+t,class:"my-input name-input print-off",onInput:a=>r.setName(t,a),value:n.names[t-1]},null,40,V)]))),128))]),s("div",z,[s("tr",Q,[K,(i(!0),l(h,null,m(r.getArray(),t=>(i(),l("td",{key:"n"+t,class:"num-td"},[s("p",X,p(n.names[t-1]==""?"P"+t:n.names[t-1]),1)]))),128))])]),s("tr",null,[Y,(i(!0),l(h,null,m(r.getArray(),t=>(i(),l("td",{key:"w1"+t,class:"num-td"},[s("input",{type:"number",placeholder:"0",class:"my-input print-off",id:"w1"+t,onInput:a=>r.setWMatrix(1,t,a),value:n.wMatrix[0][t-1]==0?"":n.wMatrix[0][t-1]},null,40,G),s("p",U,p(n.wMatrix[0][t-1]),1)]))),128))]),s("tr",null,[Z,(i(!0),l(h,null,m(r.getArray(),t=>(i(),l("td",{key:"w2"+t,class:"num-td"},[s("input",{type:"number",placeholder:"0",class:"my-input print-off",id:"w2"+t,onInput:a=>r.setWMatrix(2,t,a),value:n.wMatrix[1][t-1]==0?"":n.wMatrix[1][t-1]},null,40,$),s("p",tt,p(n.wMatrix[1][t-1]),1)]))),128))]),s("tr",null,[st,(i(!0),l(h,null,m(r.getArray(),t=>(i(),l("td",{key:"w3"+t,class:"num-td"},[s("input",{type:"number",placeholder:"0",class:"my-input print-off",id:"w3"+t,onInput:a=>r.setWMatrix(3,t,a),value:n.wMatrix[2][t-1]==0?"":n.wMatrix[2][t-1]},null,40,et),s("p",nt,p(n.wMatrix[2][t-1]),1)]))),128))]),s("tr",null,[ot,(i(!0),l(h,null,m(r.getArray(),t=>(i(),l("td",{key:"w4"+t,class:"num-td"},[s("input",{type:"number",placeholder:"0",class:"my-input print-off",id:"w4"+t,onInput:a=>r.setWMatrix(4,t,a),value:n.wMatrix[3][t-1]==0?"":n.wMatrix[3][t-1]},null,40,rt),s("p",it,p(n.wMatrix[3][t-1]),1)]))),128))]),s("tr",null,[lt,(i(!0),l(h,null,m(r.getArray(),t=>(i(),l("td",{key:"w5"+t,class:"num-td"},[s("input",{type:"number",placeholder:"0",class:"my-input print-off",id:"w5"+t,onInput:a=>r.setWMatrix(5,t,a),value:n.wMatrix[4][t-1]==0?"":n.wMatrix[4][t-1]},null,40,at),s("p",ct,p(n.wMatrix[4][t-1]),1)]))),128))]),s("tr",ut,[pt,(i(!0),l(h,null,m(r.getWScore,(t,a)=>(i(),l("td",{key:"W"+a,class:"num-td"},[s("input",{type:"number",class:"my-input print-off",value:t,disabled:""},null,8,ht),s("p",dt,p(t),1)]))),128))]),s("tr",null,[mt,(i(!0),l(h,null,m(r.getArray(),t=>(i(),l("td",{key:"h1"+t,class:"num-td"},[s("input",{type:"number",placeholder:"0",class:"my-input print-off",id:"h1"+t,onInput:a=>r.setHMatrix(1,t,a),value:n.hMatrix[0][t-1]==0?"":n.hMatrix[0][t-1]},null,40,_t),s("p",yt,p(n.hMatrix[0][t-1]),1),s("p",{class:"bonus",style:g({opacity:n.bonusMatrix[0][t-1]==0?"0":"0.6"})},p("+"+n.bonusMatrix[0][t-1]),5)]))),128))]),s("tr",null,[ft,(i(!0),l(h,null,m(r.getArray(),t=>(i(),l("td",{key:"h2"+t,class:"num-td"},[s("input",{type:"number",placeholder:"0",class:"my-input print-off",id:"h2"+t,onInput:a=>r.setHMatrix(2,t,a),value:n.hMatrix[1][t-1]==0?"":n.hMatrix[1][t-1]},null,40,gt),s("p",bt,p(n.hMatrix[1][t-1]),1),s("p",{class:"bonus",style:g({opacity:n.bonusMatrix[1][t-1]==0?"0":"0.6"})},p("+"+n.bonusMatrix[1][t-1]),5)]))),128))]),s("tr",null,[xt,(i(!0),l(h,null,m(r.getArray(),t=>(i(),l("td",{key:"h3"+t,class:"num-td"},[s("input",{type:"number",placeholder:"0",class:"my-input print-off",id:"h3"+t,onInput:a=>r.setHMatrix(3,t,a),value:n.hMatrix[2][t-1]==0?"":n.hMatrix[2][t-1]},null,40,Mt),s("p",wt,p(n.hMatrix[2][t-1]),1),s("p",{class:"bonus",style:g({opacity:n.bonusMatrix[2][t-1]==0?"0":"0.6"})},p("+"+n.bonusMatrix[2][t-1]),5)]))),128))]),s("tr",null,[vt,(i(!0),l(h,null,m(r.getArray(),t=>(i(),l("td",{key:"h4"+t,class:"num-td"},[s("input",{type:"number",placeholder:"0",class:"my-input print-off",id:"h4"+t,onInput:a=>r.setHMatrix(4,t,a),value:n.hMatrix[3][t-1]==0?"":n.hMatrix[3][t-1]},null,40,It),s("p",St,p(n.hMatrix[3][t-1]),1),s("p",{class:"bonus",style:g({opacity:n.bonusMatrix[3][t-1]==0?"0":"0.6"})},p("+"+n.bonusMatrix[3][t-1]),5)]))),128))]),s("tr",null,[kt,(i(!0),l(h,null,m(r.getArray(),t=>(i(),l("td",{key:"h5"+t,class:"num-td"},[s("input",{type:"number",placeholder:"0",class:"my-input print-off",id:"h5"+t,onInput:a=>r.setHMatrix(5,t,a),value:n.hMatrix[4][t-1]==0?"":n.hMatrix[4][t-1]},null,40,At),s("p",Ht,p(n.hMatrix[4][t-1]),1),s("p",{class:"bonus",style:g({opacity:n.bonusMatrix[4][t-1]==0?"0":"0.6"})},p("+"+n.bonusMatrix[4][t-1]),5)]))),128))]),s("tr",Nt,[Ct,(i(!0),l(h,null,m(r.getHScore,(t,a)=>(i(),l("td",{key:"H"+a,class:"num-td"},[s("input",{type:"number",class:"my-input print-off",value:t,disabled:""},null,8,Rt),s("p",Tt,p(t),1)]))),128))]),s("tr",Et,[Dt,(i(!0),l(h,null,m(r.getArray(),t=>(i(),l("td",{key:"C"+t,class:"num-td"},[s("input",{type:"number",placeholder:"0",class:"my-input print-off",id:"C"+t,onInput:a=>r.setConeRow(t,a),value:n.coneRow[t-1]==0?"":n.coneRow[t-1]},null,40,Bt),s("p",Ft,p(n.coneRow[t-1]),1)]))),128))]),s("tr",Wt,[Ot,(i(!0),l(h,null,m(r.getTotalScore,(t,a)=>(i(),l("td",{key:"F"+a,class:"num-td"},[s("input",{type:"number",class:"my-input print-off",value:t,disabled:""},null,8,Lt),s("p",Jt,p(t),1)]))),128))])])]),s("button",{class:"btn reset-btn print-off",onClick:e[0]||(e[0]=t=>r.reset())},"Reset")],64)}const jt=M(A,[["render",Pt],["__scopeId","data-v-72eb5b30"]]),qt={name:"TableView",components:{CasTable:jt,MyLogo:I},data(){return{count:1,printing:!1}},mounted(){let o=this.$route.params.count;Array.isArray(o)&&(o=o[0]),!o||isNaN(parseInt(o))||parseInt(o)<1||parseInt(o)>6?this.$router.push({name:"home"}):this.count=parseInt(o)},methods:{goToHome(){this.$router.push({name:"home"})},saveAsExcel(){const o=document.querySelector("table");if(!o)return;const c=`<style>table{border-collapse: collapse;}td,th{border: 1px solid #000;padding: 5px;}</style>${o.outerHTML}`,n=`data:application/vnd.ms-excel;base64,${btoa(c)}`,r=document.createElement("a");r.href=n,r.download="table.xls",r.click()},saveAsPDF(){this.printing=!0;const o=document.getElementsByClassName("print-off"),e=[];Array.prototype.forEach.call(o,function(c){e.push(c.style.display),c.style.display="none"});const u=document.getElementsByClassName("print-only");Array.prototype.forEach.call(u,function(c){c.style.display="block"}),setTimeout(()=>{const c=document.documentElement.outerHTML,n=window.open("","printwindow");if(!n){alert("Please allow popups for this website");return}n.document.write(c),n.print(),n.close(),setTimeout(()=>{this.printing=!1,Array.prototype.forEach.call(o,function(r,t){r.style.display=e[t]}),Array.prototype.forEach.call(u,function(r){r.style.display="none"})},500)},500)},getDate(){const o=new Date,e=o.getDate(),u=o.toLocaleString("default",{month:"long"}),c=o.getFullYear();return`${e}. ${u} ${c}`}}},Vt={key:0},zt={key:2},Qt={class:"container"},Kt={key:0,class:"url"},Xt={key:1,class:"btn-container"};function Yt(o,e,u,c,n,r){const t=x("MyLogo"),a=x("CasTable");return i(),l("div",null,[n.printing?b("",!0):(i(),l("h1",Vt,p(n.count)+" Player",1)),n.printing?(i(),S(t,{key:1,color:"black",big:!0})):b("",!0),n.printing?(i(),l("h1",zt,p(r.getDate()),1)):b("",!0),s("div",Qt,[k(a,{count:n.count},null,8,["count"]),n.printing?(i(),l("h2",Kt,"cascoria.philipp-bonin.com")):b("",!0),n.printing?b("",!0):(i(),l("div",Xt,[s("button",{class:"btn",onClick:e[0]||(e[0]=f=>r.saveAsPDF())},"Save as PDF"),s("button",{class:"btn",onClick:e[1]||(e[1]=f=>r.saveAsExcel())},"Save as Excel"),s("button",{class:"btn home-btn",onClick:e[2]||(e[2]=f=>r.goToHome())},"Home")]))])])}const Ut=M(qt,[["render",Yt],["__scopeId","data-v-9fa11c4f"]]);export{Ut as default};
