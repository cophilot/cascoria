import{L as d,_ as r,o as b,c as u,a as n,w as c,v as p,F as g,p as x,b as m,d as l}from"./index-W1HRc-YR.js";const h={name:"HomeView",data(){return{extensionEnabled:!1}},mounted(){const t=d.get("extensionEnabled");t&&(this.extensionEnabled=t==="true"),console.log("extensionEnabled",this.extensionEnabled)},methods:{goToTable(t){this.$router.push({name:this.extensionEnabled?"tableExtension":"table",params:{count:t}})},onExtensionChange(){d.set("extensionEnabled",this.extensionEnabled.toString())}}},a=t=>(x("data-v-24fd5251"),t=t(),m(),t),k=a(()=>n("h1",null,"Cascoria",-1)),E=a(()=>n("p",{class:"info"},[l(" A score keeping app for the board game "),n("a",{href:"https://boardgamegeek.com/boardgame/295947/cascadia",target:"_blank"},"Cascadia"),l(" 🦌🐻🦅🐟🦊 ")],-1)),T=a(()=>n("p",null,"Landmarks extension",-1)),f={class:"switch"},v=a(()=>n("span",{class:"slider round"},null,-1)),C=a(()=>n("p",null,[l("By "),n("a",{href:"https://github.com/cophilot",target:"_blank"},"Philipp B.")],-1));function _(t,e,y,F,i,s){return b(),u(g,null,[k,E,T,n("label",f,[c(n("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=o=>i.extensionEnabled=o),onChange:e[1]||(e[1]=o=>s.onExtensionChange())},null,544),[[p,i.extensionEnabled]]),v]),n("button",{class:"btn",onClick:e[2]||(e[2]=o=>s.goToTable(1))},"1 Player"),n("button",{class:"btn",onClick:e[3]||(e[3]=o=>s.goToTable(2))},"2 Player"),n("button",{class:"btn",onClick:e[4]||(e[4]=o=>s.goToTable(3))},"3 Player"),n("button",{class:"btn",onClick:e[5]||(e[5]=o=>s.goToTable(4))},"4 Player"),n("button",{class:"btn",onClick:e[6]||(e[6]=o=>s.goToTable(5))},"5 Player"),n("button",{class:"btn",onClick:e[7]||(e[7]=o=>s.goToTable(6))},"6 Player"),C],64)}const w=r(h,[["render",_],["__scopeId","data-v-24fd5251"]]);export{w as default};
