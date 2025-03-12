import{v as N,K as B,x as E,L as I,J as V,c as H,w as D,j as L,y as k,u as c,C as t,e as x,k as P,D as r,p as S,E as U,I as C,O as T,l as q,F as z,N as G,f as m,_ as J}from"./index-3Kor65oi.js";import{s as K}from"./index-6i70kIGe.js";import{s as F,a as y}from"./index-Bt-ihKbX.js";import{A as p,Q as M}from"./index-DgvFf6hx.js";import"./index-YeJWrO_C.js";import"./index-CZxLIdw9.js";const O={class:"field flex flex-col gap-1"},R={class:"p-inputgroup flex gap-2"},W={class:"flex flex-col gap-1"},X={class:"p-inputgroup"},Y={class:"p-inputgroup flex gap-2"},Z={key:0,class:"error-message mb-3"},ee={class:"flex justify-content-between"},te=N({__name:"Question",props:B({modelValue:{type:Boolean},question:{default:()=>new M}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:B(["save-question"],["update:modelValue"]),setup(i,{emit:f}){const u=E(i,"modelValue"),v=f,b={answers:[new p({text:"Да"}),new p({text:"Нет"}),new p({text:"Не знаю"})]},e=I({id:null,text:"",answers:[...b.answers]}),n=V(""),l=H(()=>!!e.id),a=async()=>{i.question?(e.id=i.question.id,e.text=i.question.text,e.answers=i.question.answers&&i.question.answers.length>0?[...i.question.answers]:[...b.answers]):o()},o=()=>{e.id=null,e.text="",e.answers=[...b.answers],n.value=""},h=()=>{e.answers.push(new p)},_=g=>{e.answers.splice(g,1)},Q=()=>{if(!e.text.trim()){n.value="Текст вопроса не может быть пустым.";return}if(e.answers.some(d=>!d.text.trim())){n.value="Все варианты ответов должны быть заполнены.";return}n.value="";const s={text:e.text,answers:e.answers};l.value&&e.id&&(s.id=e.id);const w=new M(s);v("save-question",w),A()},A=()=>{u.value=!1},j=()=>{o()};return D(()=>u.value,g=>{g&&a()}),D(()=>i.question,()=>{u.value&&a()},{deep:!0}),(g,s)=>(m(),L(c(K),{visible:u.value,"onUpdate:visible":s[1]||(s[1]=w=>u.value=w),modal:!0,header:l.value?"Редактирование вопроса":"Создание вопроса",style:{width:"500px"},closable:!1,onAfterHide:j},{footer:k(()=>[t("div",ee,[r(c(y),{type:"button",label:l.value?"Сохранить изменения":"Сохранить вопрос",icon:"pi pi-check",onClick:Q,class:"p-button-primary"},null,8,["label"]),r(c(y),{type:"button",label:"Отмена",icon:"pi pi-times",onClick:A,class:"p-button-text"})])]),default:k(()=>[t("form",{onSubmit:G(Q,["prevent"]),class:"p-fluid"},[t("div",O,[s[2]||(s[2]=t("label",{for:"question-text",class:"font-bold"},"Введите текст вопроса",-1)),t("div",R,[r(c(F),{id:"question-text",modelValue:e.text,"onUpdate:modelValue":s[0]||(s[0]=w=>e.text=w),class:S(["w-full",{"p-invalid":!e.text.trim()&&n.value}]),feedback:!0,placeholder:"Введите текст вопроса"},null,8,["modelValue","class"])])]),t("div",W,[s[3]||(s[3]=t("label",{for:"question-text mb-1",class:"font-bold"},"Варианты ответа",-1)),r(T,{name:"list",tag:"div",class:"answer-list"},{default:k(()=>[(m(!0),x(C,null,U(e.answers,(w,d)=>(m(),x("div",{key:`answer-${d}`,class:"field mb-2 answer-item"},[t("div",X,[t("div",Y,[r(c(F),{modelValue:e.answers[d].text,"onUpdate:modelValue":$=>e.answers[d].text=$,class:S(["w-full",{"p-invalid":!e.answers[d].text.trim()&&n.value}]),feedback:!0,placeholder:"Вариант ответа"},null,8,["modelValue","onUpdate:modelValue","class"]),r(c(y),{icon:"pi pi-trash",variant:"text",class:"p-button-danger",onClick:$=>_(d)},null,8,["onClick"])])])]))),128))]),_:1})]),n.value?(m(),x("div",Z,q(n.value),1)):P("",!0),r(c(y),{variant:"text",onClick:h},{default:k(()=>s[4]||(s[4]=[z("Добавить вариант ответа")])),_:1})],32)]),_:1},8,["visible","header"]))}}),se=J(te,[["__scopeId","data-v-ae92bd4b"]]),le=["onClick"],de=N({__name:"PollQuestionsPage",setup(i){const f=V(!1),u=V(null),v=V([new M({id:"1",text:"Как часто вы пользуетесь нашим продуктом?",answers:[new p({id:"1",text:"Ежедневно"}),new p({id:"2",text:"Несколько раз в неделю"}),new p({id:"3",text:"Редко"})]})]),b=()=>{u.value=null,f.value=!0},e=l=>{u.value=l,f.value=!0},n=l=>{if(l.id){const a=v.value.findIndex(o=>o.id===l.id);a!==-1&&(v.value[a]=l)}else l.id=Date.now().toString(),v.value.push(l)};return(l,a)=>(m(),x(C,null,[t("div",{class:"flex justify-between items-center p-3"},[a[1]||(a[1]=t("span",{class:"font-bold"},"Вопрос",-1)),t("button",{class:"text-left font-bold cursor-pointer",onClick:b},"Добавить вопрос")]),t("ul",null,[(m(!0),x(C,null,U(v.value,(o,h)=>(m(),x("li",{key:o.id,class:"flex justify-between items-center p-3 border-b-2 border-b-gray-100"},[t("span",null,q(h+1)+". "+q(o.text),1),t("button",{class:"cursor-pointer",onClick:_=>e(o)},"Редактировать",8,le)]))),128))]),r(se,{modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=o=>f.value=o),question:u.value,onSaveQuestion:n},null,8,["modelValue","question"])],64))}});export{de as default};
