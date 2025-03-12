import{s as $,a as h}from"./index-CHFAN2pE.js";import"./index-8l750R_s.js";import{a as y,s as z}from"./index-nGnNsQCV.js";import{B as k,m as v,e as w,f as p,v as B,L as _,j as m,y as d,u as r,C as a,D as s,k as I,E as V,l as R}from"./index-CRPjOGYn.js";import{s as x}from"./index-DawgpYiX.js";import{s as S,a as b}from"./index-Cy5GCFlO.js";import{s as F}from"./index-D9BTvWvF.js";import"./index-CCXqaYFU.js";var P=({dt:e})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("textarea.color")};
    background: ${e("textarea.background")};
    padding-block: ${e("textarea.padding.y")};
    padding-inline: ${e("textarea.padding.x")};
    border: 1px solid ${e("textarea.border.color")};
    transition: background ${e("textarea.transition.duration")}, color ${e("textarea.transition.duration")}, border-color ${e("textarea.transition.duration")}, outline-color ${e("textarea.transition.duration")}, box-shadow ${e("textarea.transition.duration")};
    appearance: none;
    border-radius: ${e("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("textarea.shadow")};
}

.p-textarea:enabled:hover {
    border-color: ${e("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${e("textarea.focus.border.color")};
    box-shadow: ${e("textarea.focus.ring.shadow")};
    outline: ${e("textarea.focus.ring.width")} ${e("textarea.focus.ring.style")} ${e("textarea.focus.ring.color")};
    outline-offset: ${e("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${e("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${e("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${e("textarea.filled.hover.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${e("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${e("textarea.disabled.background")};
    color: ${e("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${e("textarea.placeholder.color")};
}

.p-textarea.p-invalid::placeholder {
    color: ${e("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${e("textarea.sm.font.size")};
    padding-block: ${e("textarea.sm.padding.y")};
    padding-inline: ${e("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${e("textarea.lg.font.size")};
    padding-block: ${e("textarea.lg.padding.y")};
    padding-inline: ${e("textarea.lg.padding.x")};
}
`,T={root:function(n){var o=n.instance,l=n.props;return["p-textarea p-component",{"p-filled":o.$filled,"p-textarea-resizable ":l.autoResize,"p-textarea-sm p-inputfield-sm":l.size==="small","p-textarea-lg p-inputfield-lg":l.size==="large","p-invalid":o.$invalid,"p-variant-filled":o.$variant==="filled","p-textarea-fluid":o.$fluid}]}},C=k.extend({name:"textarea",style:P,classes:T}),N={name:"BaseTextarea",extends:y,props:{autoResize:Boolean},style:C,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},g={name:"Textarea",extends:N,inheritAttrs:!1,observer:null,mounted:function(){var n=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){n.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(n){this.autoResize&&this.resize(),this.writeValue(n.target.value,n)}},computed:{attrs:function(){return v(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},H=["value","name","disabled","aria-invalid"];function L(e,n,o,l,u,i){return p(),w("textarea",v({class:e.cx("root"),value:e.d_value,name:e.name,disabled:e.disabled,"aria-invalid":e.invalid||void 0,onInput:n[0]||(n[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.attrs),null,16,H)}g.render=L;const O={class:"flex flex-col gap-1"},U={class:"flex flex-col gap-1"},q={class:"flex flex-col gap-1"},A={class:"flex flex-col gap-1"},D={class:"flex items-center gap-2"},E={class:"flex items-center gap-2"},j={class:"flex flex-col gap-1"},Z=B({__name:"PollParametersPage",setup(e){const n=_({name:"",description:"",category:{name:"Опросы о работе",value:"performance"},type:"public",status:{name:"Черновик",value:"draft"}}),o={category:[{name:"Опросы о работе",value:"performance"},{name:"Опросы о качестве услуг",value:"quality"},{name:"Опросы об уровне обслуживания",value:"service"}],status:[{name:"Черновик",value:"draft"},{name:"Активный",value:"active"},{name:"Завершённый",value:"completed"}]},l=({values:i})=>{const t={};return i.name.trim()||(t.name=[{message:"Поле обязательно для заполнения."}]),{errors:t}},u=({valid:i,states:t})=>{i&&console.log("Submitting",t)};return(i,t)=>(p(),m(r($),{initialValues:n,resolver:l,validateOnValueUpdate:!1,validateOnBlur:!0,onSubmit:u,class:"flex flex-col gap-4 max-w-96"},{default:d(c=>{var f;return[a("div",O,[t[0]||(t[0]=a("label",{for:"name"},"Название опроса",-1)),s(r(z),{name:"name",type:"text",id:"name",fluid:""}),(f=c.name)!=null&&f.invalid?(p(),m(r(h),{key:0,severity:"error",size:"small",variant:"simple"},{default:d(()=>[V(R(c.name.error.message),1)]),_:2},1024)):I("",!0)]),a("div",U,[t[1]||(t[1]=a("label",{for:"description"},"Описание",-1)),s(r(g),{name:"description",id:"description",rows:"3",maxlength:150,fluid:""})]),a("div",q,[t[2]||(t[2]=a("label",{for:"category"},"Категория",-1)),s(r(x),{name:"category",id:"category",options:o.category,optionLabel:"name",fluid:""},null,8,["options"])]),a("div",A,[t[5]||(t[5]=a("label",{for:"type"},"Категория",-1)),s(r(S),{name:"type",class:"flex flex-wrap gap-4"},{default:d(()=>[a("div",D,[s(r(b),{inputId:"anonymous",name:"type",value:"anonymous"}),t[3]||(t[3]=a("label",{for:"anonymous"},"Анонимный",-1))]),a("div",E,[s(r(b),{inputId:"public",name:"type",value:"public"}),t[4]||(t[4]=a("label",{for:"public"},"Публичный",-1))])]),_:1})]),a("div",j,[t[6]||(t[6]=a("label",{for:"status"},"Статус",-1)),s(r(x),{name:"status",id:"status",options:o.status,optionLabel:"name",fluid:""},null,8,["options"])]),s(r(F),{type:"submit",severity:"secondary",label:"Сохранить изменения",fluid:""})]}),_:1},8,["initialValues"]))}});export{Z as default};
