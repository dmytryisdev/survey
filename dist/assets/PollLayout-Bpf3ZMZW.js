import{v as r,e as l,I as i,E as _,p as m,u as d,G as f,D as s,y as k,F as b,l as x,H as u,f as n}from"./index-BWphoWid.js";const y={class:"flex w-full rounded-sm overflow-hidden"},h=r({__name:"Tabs",props:{data:{}},setup(c){const t=f();return(a,p)=>{const o=u("RouterLink");return n(),l("ul",y,[(n(!0),l(i,null,_(a.data,e=>(n(),l("li",{key:e.link,class:m([{"bg-sky-100":e.link===d(t).name},"flex-1 text-center transition duration-100 ease-in-out hover:bg-sky-200"])},[s(o,{to:{name:e.link},class:"flex justify-center w-full h-full py-3"},{default:k(()=>[b(x(e.label),1)]),_:2},1032,["to"])],2))),128))])}}}),g=r({__name:"PollLayout",setup(c){const t=[{label:"Параметры",link:"poll-parameters"},{label:"Вопросы",link:"poll-questions"},{label:"Логика",link:"poll-logic"},{label:"Условия",link:"poll-conditions"},{label:"Респонденты",link:"poll-respondents"}];return(a,p)=>{const o=u("RouterView");return n(),l(i,null,[s(h,{data:t,class:"mb-6"}),s(o)],64)}}});export{g as default};
