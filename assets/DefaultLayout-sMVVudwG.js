import{o as N,n as q,g as O,h as A,i as P,w as Q,a as U,b as J,s as k,c as $,t as b,d as K,u as y,B as X,e as w,f as g,r as Y,j as _,k as Z,m as E,l as W,p as V,q as ee,v as T,x as te,y as M,T as ne,z as ae,A as re,C as m,D as x,E as j,F as se,G as D,H as R,I,J as ie}from"./index-CRPjOGYn.js";import{s as le}from"./index-8l750R_s.js";import{s as F}from"./index-D9BTvWvF.js";function oe(e){return U()?(J(e),!0):!1}const C=new WeakMap,ue=(...e)=>{var n;const t=e[0],s=(n=O())==null?void 0:n.proxy;if(s==null&&!A())throw new Error("injectLocal must be called in setup");return s&&C.has(s)&&t in C.get(s)?C.get(s)[t]:P(...e)},ce=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const de=Object.prototype.toString,pe=e=>de.call(e)==="[object Object]";function me(e,n){var t;if(typeof e=="number")return e+n;const s=((t=e.match(/^-?\d+\.?\d*/))==null?void 0:t[0])||"",u=e.slice(s.length),c=Number.parseFloat(s)+n;return Number.isNaN(c)?e:c+u}function z(e){return e.endsWith("rem")?Number.parseFloat(e)*16:Number.parseFloat(e)}function ve(e){return O()}function L(e){return Array.isArray(e)?e:[e]}function fe(e,n=!0,t){ve()?N(e,t):n?e():q(e)}function he(e,n,t){return Q(e,n,{...t,immediate:!0})}const B=ce?window:void 0;function ge(e){var n;const t=b(e);return(n=t==null?void 0:t.$el)!=null?n:t}function be(...e){const n=[],t=()=>{n.forEach(i=>i()),n.length=0},s=(i,l,o,p)=>(i.addEventListener(l,o,p),()=>i.removeEventListener(l,o,p)),u=$(()=>{const i=L(b(e[0])).filter(l=>l!=null);return i.every(l=>typeof l!="string")?i:void 0}),c=he(()=>{var i,l;return[(l=(i=u.value)==null?void 0:i.map(o=>ge(o)))!=null?l:[B].filter(o=>o!=null),L(b(u.value?e[1]:e[0])),L(y(u.value?e[2]:e[1])),b(u.value?e[3]:e[2])]},([i,l,o,p])=>{if(t(),!(i!=null&&i.length)||!(l!=null&&l.length)||!(o!=null&&o.length))return;const v=pe(p)?{...p}:p;n.push(...i.flatMap(f=>l.flatMap(a=>o.map(r=>s(f,a,r,v)))))},{flush:"post"}),d=()=>{c(),t()};return oe(t),d}function ye(){const e=k(!1),n=O();return n&&N(()=>{e.value=!0},n),e}function $e(e){const n=ye();return $(()=>(n.value,!!e()))}const we=Symbol("vueuse-ssr-width");function G(){const e=A()?ue(we,null):null;return typeof e=="number"?e:void 0}function S(e,n={}){const{window:t=B,ssrWidth:s=G()}=n,u=$e(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function"),c=k(typeof s=="number"),d=k(),i=k(!1),l=o=>{i.value=o.matches};return K(()=>{if(c.value){c.value=!u.value;const o=b(e).split(",");i.value=o.some(p=>{const v=p.includes("not all"),f=p.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),a=p.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let r=!!(f||a);return f&&r&&(r=s>=z(f[1])),a&&r&&(r=s<=z(a[1])),v?!r:r});return}u.value&&(d.value=t.matchMedia(b(e)),i.value=d.value.matches)}),be(d,"change",l,{passive:!0}),$(()=>i.value)}const xe={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function Se(e,n={}){function t(a,r){let h=b(e[b(a)]);return r!=null&&(h=me(h,r)),typeof h=="number"&&(h=`${h}px`),h}const{window:s=B,strategy:u="min-width",ssrWidth:c=G()}=n,d=typeof c=="number",i=d?k(!1):{value:!0};d&&fe(()=>i.value=!!s);function l(a,r){return!i.value&&d?a==="min"?c>=z(r):c<=z(r):s?s.matchMedia(`(${a}-width: ${r})`).matches:!1}const o=a=>S(()=>`(min-width: ${t(a)})`,n),p=a=>S(()=>`(max-width: ${t(a)})`,n),v=Object.keys(e).reduce((a,r)=>(Object.defineProperty(a,r,{get:()=>u==="min-width"?o(r):p(r),enumerable:!0,configurable:!0}),a),{});function f(){const a=Object.keys(e).map(r=>[r,v[r],z(t(r))]).sort((r,h)=>r[2]-h[2]);return $(()=>a.filter(([,r])=>r.value).map(([r])=>r))}return Object.assign(v,{greaterOrEqual:o,smallerOrEqual:p,greater(a){return S(()=>`(min-width: ${t(a,.1)})`,n)},smaller(a){return S(()=>`(max-width: ${t(a,-.1)})`,n)},between(a,r){return S(()=>`(min-width: ${t(a)}) and (max-width: ${t(r,-.1)})`,n)},isGreater(a){return l("min",t(a,.1))},isGreaterOrEqual(a){return l("min",t(a))},isSmaller(a){return l("max",t(a,-.1))},isSmallerOrEqual(a){return l("max",t(a))},isInBetween(a,r){return l("min",t(a))&&l("max",t(r,-.1))},current:f,active(){const a=f();return $(()=>a.value.length===0?"":a.value.at(u==="min-width"?-1:0))}})}var ke=({dt:e})=>`
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
`,ze={root:function(n){var t=n.props;return["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Ee=X.extend({name:"avatar",style:ke,classes:ze}),Me={name:"BaseAvatar",extends:le,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ee,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},H={name:"Avatar",extends:Me,inheritAttrs:!1,emits:["error"],methods:{onError:function(n){this.$emit("error",n)}}},Ce=["aria-labelledby","aria-label"],Le=["src","alt"];function Ve(e,n,t,s,u,c){return g(),w("div",E({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root")),[Y(e.$slots,"default",{},function(){return[e.label?(g(),w("span",E({key:0,class:e.cx("label")},e.ptm("label")),W(e.label),17)):e.$slots.icon?(g(),_(ee(e.$slots.icon),{key:1,class:V(e.cx("icon"))},null,8,["class"])):e.icon?(g(),w("span",E({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):e.image?(g(),w("img",E({key:3,src:e.image,alt:e.ariaLabel,onError:n[0]||(n[0]=function(){return c.onError&&c.onError.apply(c,arguments)})},e.ptm("image")),null,16,Le)):Z("",!0)]})],16,Ce)}H.render=Ve;const je={class:"sm:hidden"},Oe={class:"sidebar-user flex gap-3 mb-11"},We={class:"sidebar-list flex flex-col gap-6"},Be=T({__name:"Sidebar",props:{modelValue:{type:Boolean,default:!0},modelModifiers:{}},emits:["update:modelValue"],setup(e){const n=te(e,"modelValue"),t=D(),u=Se(xe).smallerOrEqual("sm"),c=$(()=>({isMobile:u.value})),d=()=>{n.value=!n.value},i=[{label:"Опросы",link:"poll"},{label:"Пользователи",link:"users"},{label:"Чёрный список",link:"blacklist"}];return(l,o)=>{const p=R("RouterLink");return g(),_(ne,{name:"slide-left"},{default:M(()=>[ae(m("aside",{class:V([c.value,"sidebar h-full p-6 bg-white z-1",y(u)?"absolute inset-0":"w-96 static border-r-2 border-r-gray-100"])},[m("div",je,[x(y(F),{variant:"text",class:"mb-8 sm:hidden",onClick:d},{default:M(()=>o[0]||(o[0]=[j(" Назад ")])),_:1})]),m("section",Oe,[x(y(H),{size:"xlarge"}),o[1]||(o[1]=m("div",{class:"overflow-hidden"},[m("p",{class:"truncate font-bold"},"Иван Иванов"),m("p",{class:"truncate font-normal"},"ivanov@mail.ru")],-1))]),m("section",We,[(g(),w(I,null,se(i,v=>x(p,{to:{name:v.link},class:V([{"bg-sky-100":v.link===y(t).name},"p-4 rounded-lg transition duration-100 ease-in-out hover:bg-sky-200"]),onClick:d},{default:M(()=>[j(W(v.label),1)]),_:2},1032,["to","class"])),64))])],2),[[re,!y(u)||!n.value]])]),_:1})}}}),Ne={class:"sm:hidden"},Ae={class:"flex h-full"},_e={class:"w-full m-6"},Te={class:"mb-10 text-3xl font-bold"},Fe=T({__name:"DefaultLayout",setup(e){const n=D(),t=$(()=>n.meta.title),s=ie(!0),u=()=>{s.value=!s.value};return(c,d)=>{const i=R("RouterView");return g(),w(I,null,[m("div",Ne,[x(y(F),{variant:"text",class:"mt-6 ml-6",onClick:u},{default:M(()=>d[1]||(d[1]=[j(" Меню ")])),_:1})]),m("div",Ae,[x(Be,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=l=>s.value=l)},null,8,["modelValue"]),m("main",_e,[m("h2",Te,W(t.value),1),x(i)])])],64)}}});export{Fe as default};
