var K=Object.defineProperty;var G=(e,o,r)=>o in e?K(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r;var M=(e,o,r)=>G(e,typeof o!="symbol"?o+"":o,r);import{s as A}from"./index-D9BTvWvF.js";import{s as H}from"./index-DF6KBOTl.js";import{a as I,s as W}from"./index-CHFAN2pE.js";import"./index-8l750R_s.js";import{s as O}from"./index-DawgpYiX.js";import{s as X,a as j}from"./index-Cy5GCFlO.js";import{v as F,K as T,x as Y,J as y,c as N,L as Z,j as k,y as h,u as c,D as p,C as q,e as V,k as U,E as L,l as C,I as B,F as P,f,o as ee}from"./index-CRPjOGYn.js";import{Q as ne,A as S}from"./index-DgvFf6hx.js";import{_ as te}from"./Loader.vue_vue_type_script_setup_true_lang-2bUFtFuA.js";import"./index-CCXqaYFU.js";import"./index-nGnNsQCV.js";class J{constructor(o={}){M(this,"question_id");M(this,"next_question_id");M(this,"answer_id");this.question_id=o.question_id||"",this.next_question_id=o.next_question_id||"",o.answer_id&&(this.answer_id=o.answer_id)}}const se={class:"flex flex-col gap-2"},ie={key:0,class:"flex flex-col gap-2"},oe={class:"flex items-center gap-2"},le=["for"],ae={class:"flex flex-col gap-2"},ue={class:"flex gap-2"},re=F({__name:"Logic",props:T({questions:{},filteredQuestions:{}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:T(["create-relationship"],["update:modelValue"]),setup(e,{emit:o}){const r=Y(e,"modelValue"),d=o,m=y(),g=y(),_=y(),$=N(()=>e.questions.filter(i=>{var l;return i.id!==((l=_.value)==null?void 0:l.id)}).filter(i=>!e.filteredQuestions.includes(i)).map(i=>({id:i.id,name:i.text,value:i.id}))),b=N(()=>e.questions.map(i=>({id:i.id,name:i.text,value:i.id})).filter(i=>{var l;return i.id!==((l=m.value)==null?void 0:l.id)})),t=N(()=>e.questions.find(i=>i.id===m.value.id)),x=Z({question:null,answer:null,nextQuestion:null}),n=({values:i})=>{const l={};return i.question||(l.question=[{message:"Поле обязательно для заполнения."}]),i.answer||(l.answer=[{message:"Поле обязательно для заполнения."}]),i.nextQuestion||(l.nextQuestion=[{message:"Поле обязательно для заполнения."}]),{errors:l}},s=({valid:i,states:l})=>{if(i)try{v(),d("create-relationship",new J({question_id:l.question.value.id,answer_id:l.answer.value,next_question_id:l.nextQuestion.value.id})),u()}catch(w){console.error(w)}},a=i=>{g.value===i&&(g.value=null)},v=()=>{r.value=!1},u=()=>{m.value=null,g.value=null,_.value=null};return(i,l)=>(f(),k(c(H),{visible:r.value,"onUpdate:visible":l[3]||(l[3]=w=>r.value=w),modal:!0,style:{width:"500px"},closable:!1,header:"Добавление связи"},{default:h(()=>[p(c(W),{initialValues:x,resolver:n,validateOnValueUpdate:!1,onSubmit:s,class:"flex flex-col gap-4"},{default:h(w=>{var R,z,D;return[q("div",se,[l[4]||(l[4]=q("label",{for:"question"},"Выберите вопрос, который вы хотите добавить",-1)),p(c(O),{modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=Q=>m.value=Q),options:$.value,name:"question",optionLabel:"name",fluid:""},null,8,["modelValue","options"]),(R=w.question)!=null&&R.invalid?(f(),k(c(I),{key:0,severity:"error",size:"small",variant:"simple"},{default:h(()=>[L(C(w.question.error.message),1)]),_:2},1024)):U("",!0)]),m.value?(f(),V("div",ie,[l[5]||(l[5]=q("label",{for:"answer"},"Следующим для ответа показывать",-1)),p(c(X),{name:"answer",class:"flex flex-wrap gap-4"},{default:h(()=>[(f(!0),V(B,null,P(t.value.answers,Q=>(f(),V("div",oe,[p(c(j),{modelValue:g.value,"onUpdate:modelValue":l[1]||(l[1]=E=>g.value=E),inputId:"modal"+Q.id,name:t.value.id,value:Q.id,onClick:E=>a(Q.id)},null,8,["modelValue","inputId","name","value","onClick"]),q("label",{for:"modal"+Q.id},C(Q.text),9,le)]))),256))]),_:1}),(z=w.answer)!=null&&z.invalid?(f(),k(c(I),{key:0,severity:"error",size:"small",variant:"simple"},{default:h(()=>[L(C(w.answer.error.message),1)]),_:2},1024)):U("",!0)])):U("",!0),q("div",ae,[p(c(O),{modelValue:_.value,"onUpdate:modelValue":l[2]||(l[2]=Q=>_.value=Q),options:b.value,name:"nextQuestion",optionLabel:"name",fluid:""},null,8,["modelValue","options"]),(D=w.nextQuestion)!=null&&D.invalid?(f(),k(c(I),{key:0,severity:"error",size:"small",variant:"simple"},{default:h(()=>[L(C(w.nextQuestion.error.message),1)]),_:2},1024)):U("",!0)]),q("div",ue,[p(c(A),{type:"submit",severity:"secondary",label:"Сохранить",class:"flex-1"}),p(c(A),{type:"reset",variant:"outlined",severity:"secondary",label:"Отменить",class:"flex-1",onClick:v})])]}),_:1},8,["initialValues"])]),_:1},8,["visible"]))}}),de={class:"flex flex-col gap-4"},ce={class:"flex flex-wrap gap-4"},fe={class:"flex items-center gap-2"},me=["for"],xe=F({__name:"Connection",props:{question:{},questions:{},index:{}},emits:["change-answer","change-next-question"],setup(e,{emit:o}){var b;const r=o,d=y((b=e.question.answers.find(t=>t.nextQuestion))==null?void 0:b.id),m=y({id:e.question.answers.find(t=>t.nextQuestion).nextQuestion.id,name:e.question.answers.find(t=>t.nextQuestion).nextQuestion.text,value:e.question.answers.find(t=>t.nextQuestion).nextQuestion.id}),g=N(()=>e.questions.map(t=>({id:t.id,name:t.text,value:t.id})).filter(t=>t.id!==e.question.id)),_=(t,x)=>{r("change-answer",t,x)},$=(t,x)=>{const n=e.questions.find(s=>s.id===t);r("change-next-question",n,x)};return(t,x)=>(f(),V("li",de,[q("span",null,C(t.index+1)+". "+C(t.question.text),1),q("div",ce,[(f(!0),V(B,null,P(t.question.answers,n=>(f(),V("div",fe,[p(c(j),{modelValue:d.value,"onUpdate:modelValue":x[0]||(x[0]=s=>d.value=s),inputId:n.id,name:t.question.id,value:n.id,onChange:s=>_(n,t.question.id)},null,8,["modelValue","inputId","name","value","onChange"]),q("label",{for:n.id},C(n.text),9,me)]))),256))]),p(c(O),{modelValue:m.value,"onUpdate:modelValue":x[1]||(x[1]=n=>m.value=n),options:g.value,optionLabel:"name",class:"w-104",onChange:x[2]||(x[2]=n=>$(n.value.value,t.question.id))},null,8,["modelValue","options"])]))}}),ve=e=>new ne({id:e.toString(),text:`Вопрос ${e}: Как часто вы пользуетесь нашим продуктом?`,answers:[new S({id:`${e}1`,text:"Ежедневно",nextQuestion:null}),new S({id:`${e}2`,text:"Несколько раз в неделю",nextQuestion:null}),new S({id:`${e}3`,text:"Редко",nextQuestion:null})]}),pe=()=>{const e=[];for(let o=1;o<=5;o++)e.push(ve(o));return e.forEach((o,r)=>{const d=(r+1)%e.length,m=e[d];o.answers[0].nextQuestion=r%2===0?m:null}),new Promise(o=>{setTimeout(()=>o(e),500)})},we={key:1,class:"flex flex-col gap-8"},qe={class:"flex flex-col gap-8"},Me=F({__name:"PollLogicPage",setup(e){const o=y(!0),r=y(!1),d=y([]),m=N(()=>d.value.filter(n=>n.answers.find(s=>s.nextQuestion))),g=async()=>{try{d.value=await pe()}catch(n){console.error(n)}finally{o.value=!1}},_=(n,s)=>{const a=d.value.find(u=>u.id===s),v=a.answers.find(u=>u.nextQuestion).nextQuestion;a.answers=a.answers.map(u=>(u.nextQuestion=u.id===n.id?v:null,u))},$=(n,s)=>{const a=d.value.find(u=>u.id===s),v=a.answers.find(u=>u.nextQuestion);a.answers.map(u=>u.id===v.id?{...u,nextQuestion:n}:{...u,nextQuestion:null})},b=()=>{r.value=!0},t=n=>{const s=d.value.find(a=>a.id===n.question_id);s.answers=s.answers.map(a=>a.id===n.answer_id?{...a,nextQuestion:d.value.find(v=>v.id===n.next_question_id)}:{...a,nextQuestion:null})},x=()=>{try{const n=d.value.filter(s=>s.answers.find(a=>a.nextQuestion)).map(s=>{const a=s.answers.find(v=>v.nextQuestion);return new J({question_id:s.id,answer_id:a.id,next_question_id:a.nextQuestion.id})});console.log("Submitting",n)}catch(n){console.error(n)}};return ee(()=>g()),(n,s)=>(f(),V(B,null,[o.value?(f(),k(te,{key:0})):(f(),V("div",we,[p(c(A),{variant:"text",class:"w-104",onClick:b},{default:h(()=>s[2]||(s[2]=[L("Добавить вопрос в последовательность")])),_:1}),q("ul",qe,[(f(!0),V(B,null,P(m.value,(a,v)=>(f(),k(xe,{key:a.id,questions:d.value,question:a,index:v,onChangeAnswer:s[0]||(s[0]=(u,i)=>_(u,i)),onChangeNextQuestion:(u,i)=>$(u,i)},null,8,["questions","question","index","onChangeNextQuestion"]))),128))]),p(c(A),{class:"max-w-104",onClick:x},{default:h(()=>s[3]||(s[3]=[L("Cохранить изменения")])),_:1})])),p(re,{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=a=>r.value=a),questions:d.value,filteredQuestions:m.value,onCreateRelationship:t},null,8,["modelValue","questions","filteredQuestions"])],64))}});export{Me as default};
