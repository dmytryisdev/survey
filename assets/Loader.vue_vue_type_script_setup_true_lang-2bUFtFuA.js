import{s as a}from"./index-8l750R_s.js";import{B as l,e as r,f as s,m as e,C as c,v as d,D as g,u as f}from"./index-CRPjOGYn.js";var h=({dt:n})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${n("progressspinner.colorOne")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${n("progressspinner.colorOne")};
    }
    40% {
        stroke: ${n("progressspinner.colorTwo")};
    }
    66% {
        stroke: ${n("progressspinner.colorThree")};
    }
    80%,
    90% {
        stroke: ${n("progressspinner.colorFour")};
    }
}
`,m={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},u=l.extend({name:"progressspinner",style:h,classes:m}),k={name:"BaseProgressSpinner",extends:a,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:u,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},t={name:"ProgressSpinner",extends:k,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},y=["fill","stroke-width"];function v(n,o,i,S,x,p){return s(),r("div",e({class:n.cx("root"),role:"progressbar"},n.ptmi("root")),[(s(),r("svg",e({class:n.cx("spin"),viewBox:"25 25 50 50",style:p.svgStyle},n.ptm("spin")),[c("circle",e({class:n.cx("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,"stroke-width":n.strokeWidth,strokeMiterlimit:"10"},n.ptm("circle")),null,16,y)],16))],16)}t.render=v;const $={class:"flex justify-between w-full items-center p-8"},B=d({__name:"Loader",setup(n){return(o,i)=>(s(),r("div",$,[g(f(t),{class:"custom-spinner",style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"transparent",animationDuration:".5s"})]))}});export{B as _};
