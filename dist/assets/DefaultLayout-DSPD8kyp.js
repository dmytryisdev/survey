import{o as B,n as F,g as V,h as N,i as G,w as H,a as q,b as P,s as S,c as y,t as b,d as Q,u as z,B as U,e as w,f as g,r as J,j as A,k as K,m as k,l as j,p as L,q as X,v as T,x as Y,y as W,T as Z,z as ee,A as te,C as v,D as E,E as ne,F as ae,G as D,H as R,I as re,J as se}from"./index-BWphoWid.js";import{s as le}from"./index-HvTqUGET.js";function ie(e){return q()?(P(e),!0):!1}const M=new WeakMap,oe=(...e)=>{var n;const t=e[0],s=(n=V())==null?void 0:n.proxy;if(s==null&&!N())throw new Error("injectLocal must be called in setup");return s&&M.has(s)&&t in M.get(s)?M.get(s)[t]:G(...e)},ue=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ce=Object.prototype.toString,de=e=>ce.call(e)==="[object Object]";function pe(e,n){var t;if(typeof e=="number")return e+n;const s=((t=e.match(/^-?\d+\.?\d*/))==null?void 0:t[0])||"",u=e.slice(s.length),c=Number.parseFloat(s)+n;return Number.isNaN(c)?e:c+u}function x(e){return e.endsWith("rem")?Number.parseFloat(e)*16:Number.parseFloat(e)}function me(e){return V()}function C(e){return Array.isArray(e)?e:[e]}function ve(e,n=!0,t){me()?B(e,t):n?e():F(e)}function fe(e,n,t){return H(e,n,{...t,immediate:!0})}const O=ue?window:void 0;function he(e){var n;const t=b(e);return(n=t==null?void 0:t.$el)!=null?n:t}function ge(...e){const n=[],t=()=>{n.forEach(l=>l()),n.length=0},s=(l,i,o,p)=>(l.addEventListener(i,o,p),()=>l.removeEventListener(i,o,p)),u=y(()=>{const l=C(b(e[0])).filter(i=>i!=null);return l.every(i=>typeof i!="string")?l:void 0}),c=fe(()=>{var l,i;return[(i=(l=u.value)==null?void 0:l.map(o=>he(o)))!=null?i:[O].filter(o=>o!=null),C(b(u.value?e[1]:e[0])),C(z(u.value?e[2]:e[1])),b(u.value?e[3]:e[2])]},([l,i,o,p])=>{if(t(),!(l!=null&&l.length)||!(i!=null&&i.length)||!(o!=null&&o.length))return;const m=de(p)?{...p}:p;n.push(...l.flatMap(f=>i.flatMap(a=>o.map(r=>s(f,a,r,m)))))},{flush:"post"}),d=()=>{c(),t()};return ie(t),d}function be(){const e=S(!1),n=V();return n&&B(()=>{e.value=!0},n),e}function ye(e){const n=be();return y(()=>(n.value,!!e()))}const we=Symbol("vueuse-ssr-width");function _(){const e=N()?oe(we,null):null;return typeof e=="number"?e:void 0}function $(e,n={}){const{window:t=O,ssrWidth:s=_()}=n,u=ye(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function"),c=S(typeof s=="number"),d=S(),l=S(!1),i=o=>{l.value=o.matches};return Q(()=>{if(c.value){c.value=!u.value;const o=b(e).split(",");l.value=o.some(p=>{const m=p.includes("not all"),f=p.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),a=p.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let r=!!(f||a);return f&&r&&(r=s>=x(f[1])),a&&r&&(r=s<=x(a[1])),m?!r:r});return}u.value&&(d.value=t.matchMedia(b(e)),l.value=d.value.matches)}),ge(d,"change",i,{passive:!0}),y(()=>l.value)}const $e={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function Se(e,n={}){function t(a,r){let h=b(e[b(a)]);return r!=null&&(h=pe(h,r)),typeof h=="number"&&(h=`${h}px`),h}const{window:s=O,strategy:u="min-width",ssrWidth:c=_()}=n,d=typeof c=="number",l=d?S(!1):{value:!0};d&&ve(()=>l.value=!!s);function i(a,r){return!l.value&&d?a==="min"?c>=x(r):c<=x(r):s?s.matchMedia(`(${a}-width: ${r})`).matches:!1}const o=a=>$(()=>`(min-width: ${t(a)})`,n),p=a=>$(()=>`(max-width: ${t(a)})`,n),m=Object.keys(e).reduce((a,r)=>(Object.defineProperty(a,r,{get:()=>u==="min-width"?o(r):p(r),enumerable:!0,configurable:!0}),a),{});function f(){const a=Object.keys(e).map(r=>[r,m[r],x(t(r))]).sort((r,h)=>r[2]-h[2]);return y(()=>a.filter(([,r])=>r.value).map(([r])=>r))}return Object.assign(m,{greaterOrEqual:o,smallerOrEqual:p,greater(a){return $(()=>`(min-width: ${t(a,.1)})`,n)},smaller(a){return $(()=>`(max-width: ${t(a,-.1)})`,n)},between(a,r){return $(()=>`(min-width: ${t(a)}) and (max-width: ${t(r,-.1)})`,n)},isGreater(a){return i("min",t(a,.1))},isGreaterOrEqual(a){return i("min",t(a))},isSmaller(a){return i("max",t(a,-.1))},isSmallerOrEqual(a){return i("max",t(a))},isInBetween(a,r){return i("min",t(a))&&i("max",t(r,-.1))},current:f,active(){const a=f();return y(()=>a.value.length===0?"":a.value.at(u==="min-width"?-1:0))}})}var xe=({dt:e})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${e("avatar.width")};
    height: ${e("avatar.height")};
    font-size: ${e("avatar.font.size")};
    background: ${e("avatar.background")};
    color: ${e("avatar.color")};
    border-radius: ${e("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${e("avatar.icon.size")};
    width: ${e("avatar.icon.size")};
    height: ${e("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${e("avatar.lg.width")};
    height: ${e("avatar.lg.width")};
    font-size: ${e("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${e("avatar.lg.icon.size")};
    width: ${e("avatar.lg.icon.size")};
    height: ${e("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${e("avatar.xl.width")};
    height: ${e("avatar.xl.width")};
    font-size: ${e("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${e("avatar.xl.icon.size")};
    width: ${e("avatar.xl.icon.size")};
    height: ${e("avatar.xl.icon.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${e("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${e("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${e("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${e("avatar.xl.group.offset")};
}
`,ke={root:function(n){var t=n.props;return["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},ze=U.extend({name:"avatar",style:xe,classes:ke}),Ee={name:"BaseAvatar",extends:le,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ze,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},I={name:"Avatar",extends:Ee,inheritAttrs:!1,emits:["error"],methods:{onError:function(n){this.$emit("error",n)}}},Me=["aria-labelledby","aria-label"],Ce=["src","alt"];function Le(e,n,t,s,u,c){return g(),w("div",k({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root")),[J(e.$slots,"default",{},function(){return[e.label?(g(),w("span",k({key:0,class:e.cx("label")},e.ptm("label")),j(e.label),17)):e.$slots.icon?(g(),A(X(e.$slots.icon),{key:1,class:L(e.cx("icon"))},null,8,["class"])):e.icon?(g(),w("span",k({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):e.image?(g(),w("img",k({key:3,src:e.image,alt:e.ariaLabel,onError:n[0]||(n[0]=function(){return c.onError&&c.onError.apply(c,arguments)})},e.ptm("image")),null,16,Ce)):K("",!0)]})],16,Me)}I.render=Le;const Ve={class:"sidebar-user flex gap-3 mb-11"},je={class:"sidebar-list flex flex-col gap-6"},Oe=T({__name:"Sidebar",props:{modelValue:{type:Boolean,default:!0},modelModifiers:{}},emits:["update:modelValue"],setup(e){const n=Y(e,"modelValue"),t=D(),u=Se($e).smallerOrEqual("sm"),c=y(()=>({isMobile:u.value})),d=()=>{n.value=!n.value},l=[{label:"Опросы",link:"poll"},{label:"Пользователи",link:"users"},{label:"Чёрный список",link:"blacklist"}];return(i,o)=>{const p=R("RouterLink");return g(),A(Z,{name:"slide-left"},{default:W(()=>[ee(v("aside",{class:L([c.value,"sidebar h-full p-6 absolute inset-0 z-1 bg-white sm:w-96 sm:static sm:border-r-2 sm:border-r-gray-100"])},[v("div",{class:"mb-8 sm:hidden",onClick:d}," Назад "),v("section",Ve,[E(z(I),{size:"xlarge"}),o[0]||(o[0]=v("div",{class:"overflow-hidden"},[v("p",{class:"truncate font-bold"},"Иван Иванов"),v("p",{class:"truncate font-normal"},"ivanov@mail.ru")],-1))]),v("section",je,[(g(),w(re,null,ne(l,m=>E(p,{to:{name:m.link},class:L([{"bg-sky-100":m.link===z(t).name},"p-4 rounded-lg transition duration-100 ease-in-out hover:bg-sky-200"]),onClick:d},{default:W(()=>[ae(j(m.label),1)]),_:2},1032,["to","class"])),64))])],2),[[te,!z(u)||!n.value]])]),_:1})}}}),We={class:"flex h-full"},Be={class:"w-full m-6"},Ne={class:"mb-10 text-3xl font-bold"},De=T({__name:"DefaultLayout",setup(e){const n=D(),t=y(()=>n.meta.title),s=se(!0),u=()=>{s.value=!s.value};return(c,d)=>{const l=R("RouterView");return g(),w("div",We,[v("button",{class:"absolute t-2 l-2 z-0 sm:hidden",onClick:u}," Toggle "),E(Oe,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=i=>s.value=i)},null,8,["modelValue"]),v("main",Be,[v("h2",Ne,j(t.value),1),E(l)])])}}});export{De as default};
