import{f as D}from"./Users-0KA9tobp.js";import{s as E}from"./index-6i70kIGe.js";import{s as _,a as V}from"./index-Bt-ihKbX.js";import{a as U,s as S}from"./index-eBhsK8eo.js";import"./index-CZxLIdw9.js";import{U as $}from"./index-C0BouqXd.js";import{v as h}from"./index-C3csVMgd.js";import{v as M,K as F,x as z,L,j as x,y as f,u as r,D as n,C as a,k,F as C,l as d,f as m,J as w,o as O,e as y,I as B,E as j}from"./index-3Kor65oi.js";import"./index-YeJWrO_C.js";const I={class:"flex flex-col gap-1"},J={class:"flex flex-col gap-1"},K={class:"flex gap-2"},P=M({__name:"User",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:F(["create-user"],["update:modelValue"]),setup(b,{emit:u}){const o=z(b,"modelValue"),c=u,p=L({fullName:"",email:""}),v=({values:l})=>{const e={};return l.fullName.trim()||(e.fullName=[{message:"Поле обязательно для заполнения."}]),l.email.trim()||(e.email=[{message:"Поле обязательно для заполнения."}]),l.email.trim()&&!h(l.email)&&(e.email=[{message:"Некорректный адрес электронной почты."}]),{errors:e}},i=({valid:l,states:e})=>{if(l)try{s(),c("create-user",new $({id:Date.now().toString(),fullName:e.fullName.value,email:e.email.value,isBanned:!1}))}catch(t){console.error(t)}},s=()=>{o.value=!1};return(l,e)=>(m(),x(r(E),{visible:o.value,"onUpdate:visible":e[0]||(e[0]=t=>o.value=t),modal:!0,style:{width:"500px"},closable:!1,header:"Добавить пользователя"},{default:f(()=>[n(r(S),{initialValues:p,resolver:v,validateOnValueUpdate:!1,validateOnBlur:!0,onSubmit:i,class:"flex flex-col gap-4"},{default:f(t=>{var g,N;return[a("div",I,[e[1]||(e[1]=a("label",{for:"fullName"},"Укажите ФИО пользователя",-1)),n(r(_),{name:"fullName",type:"text",id:"fullName",fluid:""}),(g=t.fullName)!=null&&g.invalid?(m(),x(r(U),{key:0,severity:"error",size:"small",variant:"simple"},{default:f(()=>[C(d(t.fullName.error.message),1)]),_:2},1024)):k("",!0)]),a("div",J,[e[2]||(e[2]=a("label",{for:"email"},"Укажите почту пользователя",-1)),n(r(_),{name:"email",type:"text",id:"email",fluid:""}),(N=t.email)!=null&&N.invalid?(m(),x(r(U),{key:0,severity:"error",size:"small",variant:"simple"},{default:f(()=>[C(d(t.email.error.message),1)]),_:2},1024)):k("",!0)]),a("div",K,[n(r(V),{type:"submit",severity:"secondary",label:"Сохранить",class:"flex-1"}),n(r(V),{type:"reset",variant:"outlined",severity:"secondary",label:"Отменить",class:"flex-1",onClick:s})])]}),_:1},8,["initialValues"])]),_:1},8,["visible"]))}}),T={class:"flex-2"},q={class:"flex-2"},ee=M({__name:"UsersPage",setup(b){const u=w([]),o=w(!1),c=async()=>{try{u.value=await D()}catch(i){console.error(i)}},p=()=>{o.value=!0},v=i=>{u.value.push(i)};return O(()=>c()),(i,s)=>(m(),y(B,null,[a("div",{class:"flex items-center p-3"},[s[1]||(s[1]=a("span",{class:"flex-2 font-bold"},"ФИО",-1)),s[2]||(s[2]=a("span",{class:"flex-2 font-bold"},"Email",-1)),a("button",{class:"cursor-pointer flex-1 text-left font-bold",onClick:p},"Добавить пользователя")]),a("ul",null,[(m(!0),y(B,null,j(u.value,l=>(m(),y("li",{key:l.id,class:"flex items-center p-3 border-b-2 border-b-gray-100"},[a("span",T,d(l.fullName),1),a("span",q,d(l.email),1),s[3]||(s[3]=a("button",{class:"cursor-pointer flex-1 text-left"},"Редактировать",-1))]))),128))]),n(P,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=l=>o.value=l),onCreateUser:v},null,8,["modelValue"])],64))}});export{ee as default};
