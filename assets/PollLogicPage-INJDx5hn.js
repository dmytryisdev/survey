var K=Object.defineProperty;var G=(n,o,a)=>o in n?K(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a;var M=(n,o,a)=>G(n,typeof o!="symbol"?o+"":o,a);import{a as A}from"./index-Bt-ihKbX.js";import{s as H}from"./index-6i70kIGe.js";import{a as I,s as W}from"./index-eBhsK8eo.js";import"./index-CZxLIdw9.js";import{s as O}from"./index-DmknXE4i.js";import{s as X,a as j}from"./index-G9DN3voq.js";import{v as F,K as T,x as Y,J as y,c as N,L as Z,j as k,y as V,u as d,D as x,C as v,e as h,k as U,F as L,l as _,I as B,E as P,f,o as ee}from"./index-3Kor65oi.js";import{Q as ne,A as S}from"./index-DgvFf6hx.js";import"./index-YeJWrO_C.js";class J{constructor(o={}){M(this,"question_id");M(this,"next_question_id");M(this,"answer_id");this.question_id=o.question_id||"",this.next_question_id=o.next_question_id||"",o.answer_id&&(this.answer_id=o.answer_id)}}const te={class:"flex flex-col gap-2"},se={key:0,class:"flex flex-col gap-2"},ie={class:"flex items-center gap-2"},oe=["for"],le={class:"flex flex-col gap-2"},ae={class:"flex gap-2"},ue=F({__name:"Logic",props:T({questions:{},filteredQuestions:{}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:T(["create-relationship"],["update:modelValue"]),setup(n,{emit:o}){const a=Y(n,"modelValue"),w=o,c=y(),q=y(),Q=y(),b=N(()=>n.questions.filter(u=>{var l;return u.id!==((l=Q.value)==null?void 0:l.id)}).filter(u=>!n.filteredQuestions.includes(u)).map(u=>({id:u.id,name:u.text,value:u.id}))),C=N(()=>n.questions.map(u=>({id:u.id,name:u.text,value:u.id})).filter(u=>{var l;return u.id!==((l=c.value)==null?void 0:l.id)})),t=N(()=>n.questions.find(u=>u.id===c.value.id)),s=Z({question:null,answer:null,nextQuestion:null}),e=({values:u})=>{const l={};return u.question||(l.question=[{message:"Поле обязательно для заполнения."}]),u.answer||(l.answer=[{message:"Поле обязательно для заполнения."}]),u.nextQuestion||(l.nextQuestion=[{message:"Поле обязательно для заполнения."}]),{errors:l}},i=({valid:u,states:l})=>{if(u)try{r(),w("create-relationship",new J({question_id:l.question.value.id,answer_id:l.answer.value,next_question_id:l.nextQuestion.value.id})),$()}catch(p){console.error(p)}},m=u=>{q.value===u&&(q.value=null)},r=()=>{a.value=!1},$=()=>{c.value=null,q.value=null,Q.value=null};return(u,l)=>(f(),k(d(H),{visible:a.value,"onUpdate:visible":l[3]||(l[3]=p=>a.value=p),modal:!0,style:{width:"500px"},closable:!1,header:"Добавление связи"},{default:V(()=>[x(d(W),{initialValues:s,resolver:e,validateOnValueUpdate:!1,onSubmit:i,class:"flex flex-col gap-4"},{default:V(p=>{var R,z,D;return[v("div",te,[l[4]||(l[4]=v("label",{for:"question"},"Выберите вопрос, который вы хотите добавить",-1)),x(d(O),{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=g=>c.value=g),options:b.value,name:"question",optionLabel:"name",fluid:""},null,8,["modelValue","options"]),(R=p.question)!=null&&R.invalid?(f(),k(d(I),{key:0,severity:"error",size:"small",variant:"simple"},{default:V(()=>[L(_(p.question.error.message),1)]),_:2},1024)):U("",!0)]),c.value?(f(),h("div",se,[l[5]||(l[5]=v("label",{for:"answer"},"Следующим для ответа показывать",-1)),x(d(X),{name:"answer",class:"flex flex-wrap gap-4"},{default:V(()=>[(f(!0),h(B,null,P(t.value.answers,g=>(f(),h("div",ie,[x(d(j),{modelValue:q.value,"onUpdate:modelValue":l[1]||(l[1]=E=>q.value=E),inputId:"modal"+g.id,name:t.value.id,value:g.id,onClick:E=>m(g.id)},null,8,["modelValue","inputId","name","value","onClick"]),v("label",{for:"modal"+g.id},_(g.text),9,oe)]))),256))]),_:1}),(z=p.answer)!=null&&z.invalid?(f(),k(d(I),{key:0,severity:"error",size:"small",variant:"simple"},{default:V(()=>[L(_(p.answer.error.message),1)]),_:2},1024)):U("",!0)])):U("",!0),v("div",le,[x(d(O),{modelValue:Q.value,"onUpdate:modelValue":l[2]||(l[2]=g=>Q.value=g),options:C.value,name:"nextQuestion",optionLabel:"name",fluid:""},null,8,["modelValue","options"]),(D=p.nextQuestion)!=null&&D.invalid?(f(),k(d(I),{key:0,severity:"error",size:"small",variant:"simple"},{default:V(()=>[L(_(p.nextQuestion.error.message),1)]),_:2},1024)):U("",!0)]),v("div",ae,[x(d(A),{type:"submit",severity:"secondary",label:"Сохранить",class:"flex-1"}),x(d(A),{type:"reset",variant:"outlined",severity:"secondary",label:"Отменить",class:"flex-1",onClick:r})])]}),_:1},8,["initialValues"])]),_:1},8,["visible"]))}}),re={class:"flex flex-col gap-4"},de={class:"flex flex-wrap gap-4"},ce={class:"flex items-center gap-2"},fe=["for"],xe=F({__name:"Connection",props:{question:{},questions:{},index:{}},emits:["change-answer","change-next-question"],setup(n,{emit:o}){var C;const a=o,w=y((C=n.question.answers.find(t=>t.nextQuestion))==null?void 0:C.id),c=y({id:n.question.answers.find(t=>t.nextQuestion).nextQuestion.id,name:n.question.answers.find(t=>t.nextQuestion).nextQuestion.text,value:n.question.answers.find(t=>t.nextQuestion).nextQuestion.id}),q=N(()=>n.questions.map(t=>({id:t.id,name:t.text,value:t.id})).filter(t=>t.id!==n.question.id)),Q=(t,s)=>{a("change-answer",t,s)},b=(t,s)=>{const e=n.questions.find(i=>i.id===t);a("change-next-question",e,s)};return(t,s)=>(f(),h("li",re,[v("span",null,_(t.index+1)+". "+_(t.question.text),1),v("div",de,[(f(!0),h(B,null,P(t.question.answers,e=>(f(),h("div",ce,[x(d(j),{modelValue:w.value,"onUpdate:modelValue":s[0]||(s[0]=i=>w.value=i),inputId:e.id,name:t.question.id,value:e.id,onChange:i=>Q(e,t.question.id)},null,8,["modelValue","inputId","name","value","onChange"]),v("label",{for:e.id},_(e.text),9,fe)]))),256))]),x(d(O),{modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=e=>c.value=e),options:q.value,optionLabel:"name",class:"w-104",onChange:s[2]||(s[2]=e=>b(e.value.value,t.question.id))},null,8,["modelValue","options"])]))}}),me=n=>new ne({id:n.toString(),text:`Вопрос ${n}: Как часто вы пользуетесь нашим продуктом?`,answers:[new S({id:`${n}1`,text:"Ежедневно",nextQuestion:null}),new S({id:`${n}2`,text:"Несколько раз в неделю",nextQuestion:null}),new S({id:`${n}3`,text:"Редко",nextQuestion:null})]}),ve=()=>{const n=[];for(let o=1;o<=5;o++)n.push(me(o));return n.forEach((o,a)=>{const w=(a+1)%n.length,c=n[w];o.answers[0].nextQuestion=a%2===0?c:null}),new Promise(o=>{setTimeout(()=>o(n),500)})},pe={class:"flex flex-col gap-8"},we={class:"flex flex-col gap-8"},ke=F({__name:"PollLogicPage",setup(n){const o=y(!1),a=y([]),w=N(()=>a.value.filter(s=>s.answers.find(e=>e.nextQuestion))),c=async()=>{try{a.value=await ve()}catch(s){console.error(s)}},q=(s,e)=>{const i=a.value.find(r=>r.id===e),m=i.answers.find(r=>r.nextQuestion).nextQuestion;i.answers=i.answers.map(r=>(r.nextQuestion=r.id===s.id?m:null,r))},Q=(s,e)=>{const i=a.value.find(r=>r.id===e),m=i.answers.find(r=>r.nextQuestion);i.answers.map(r=>r.id===m.id?{...r,nextQuestion:s}:{...r,nextQuestion:null})},b=()=>{o.value=!0},C=s=>{const e=a.value.find(i=>i.id===s.question_id);e.answers=e.answers.map(i=>i.id===s.answer_id?{...i,nextQuestion:a.value.find(m=>m.id===s.next_question_id)}:{...i,nextQuestion:null})},t=()=>{try{const s=a.value.filter(e=>e.answers.find(i=>i.nextQuestion)).map(e=>{const i=e.answers.find(m=>m.nextQuestion);return new J({question_id:e.id,answer_id:i.id,next_question_id:i.nextQuestion.id})});console.log("Submitting",s)}catch(s){console.error(s)}};return ee(()=>c()),(s,e)=>(f(),h(B,null,[v("div",pe,[x(d(A),{variant:"text",class:"w-104",onClick:b},{default:V(()=>e[2]||(e[2]=[L("Добавить вопрос в последовательность")])),_:1}),v("ul",we,[(f(!0),h(B,null,P(w.value,(i,m)=>(f(),k(xe,{key:i.id,questions:a.value,question:i,index:m,onChangeAnswer:e[0]||(e[0]=(r,$)=>q(r,$)),onChangeNextQuestion:(r,$)=>Q(r,$)},null,8,["questions","question","index","onChangeNextQuestion"]))),128))]),x(d(A),{class:"max-w-104",onClick:t},{default:V(()=>e[3]||(e[3]=[L("Cохранить изменения")])),_:1})]),x(ue,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=i=>o.value=i),questions:a.value,filteredQuestions:w.value,onCreateRelationship:C},null,8,["modelValue","questions","filteredQuestions"])],64))}});export{ke as default};
