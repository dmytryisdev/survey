import{f as d}from"./Users-0KA9tobp.js";import{_ as m}from"./Loader.vue_vue_type_script_setup_true_lang-2bUFtFuA.js";import{v as _,J as c,o as x,e as o,C as e,j as k,k as v,I as i,F as b,l as f,f as n}from"./index-CRPjOGYn.js";import"./index-C0BouqXd.js";import"./index-8l750R_s.js";const y={class:"flex-2"},g={class:"flex-2"},B=["onClick"],V=_({__name:"BlacklistPage",setup(C){const r=c(!0),s=c([]),u=async()=>{try{s.value=await d(!0)}catch(a){console.error(a)}finally{r.value=!1}},p=a=>{s.value=s.value.filter(t=>t.id!==a)};return x(()=>u()),(a,t)=>(n(),o(i,null,[t[0]||(t[0]=e("div",{class:"flex items-center p-3"},[e("span",{class:"flex-2 font-bold"},"ФИО"),e("span",{class:"flex-2 font-bold"},"Email"),e("span",{class:"flex-1"})],-1)),r.value?(n(),k(m,{key:0})):v("",!0),e("ul",null,[(n(!0),o(i,null,b(s.value,l=>(n(),o("li",{key:l.id,class:"flex items-center p-3 border-b-2 border-b-gray-100"},[e("span",y,f(l.fullName),1),e("span",g,f(l.email),1),e("button",{class:"cursor-pointer flex-1 text-left",onClick:h=>p(l.id)},"Отменить бан",8,B)]))),128))])],64))}});export{V as default};
