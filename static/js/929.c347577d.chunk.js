"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[929],{929:(e,t,l)=>{l.r(t),l.d(t,{default:()=>I});var r,n=l(434),a=l(791),s=l(351);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},o.apply(this,arguments)}function i(e,t){let{title:l,titleId:n,...s}=e;return a.createElement("svg",o({viewBox:"0 0 32 32",ref:t,"aria-labelledby":n},s),l?a.createElement("title",{id:n},l):null,r||(r=a.createElement("path",{d:"M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"})))}const c=a.forwardRef(i);l.p;var d,p=l(159);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},u.apply(this,arguments)}function h(e,t){let{title:l,titleId:r,...n}=e;return a.createElement("svg",u({viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},n),l?a.createElement("title",{id:r},l):null,d||(d=a.createElement("path",{d:"M10.5 6.333 8.167 4m-6.709 9.042 1.975-.22c.24-.026.361-.04.474-.076.1-.033.195-.078.283-.136.099-.066.185-.151.356-.323l7.704-7.704A1.65 1.65 0 0 0 9.917 2.25L2.213 9.954c-.172.171-.257.257-.323.356a1.166 1.166 0 0 0-.136.283c-.036.113-.05.233-.076.475l-.22 1.974Z",stroke:"#fff",strokeOpacity:.6,strokeWidth:1.2,strokeLinecap:"round",strokeLinejoin:"round"})))}const m=a.forwardRef(h);l.p;var f;function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},x.apply(this,arguments)}function g(e,t){let{title:l,titleId:r,...n}=e;return a.createElement("svg",x({width:20,height:20,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},n),l?a.createElement("title",{id:r},l):null,f||(f=a.createElement("path",{d:"M15.5832 1.94413L14.0557 0.416626L7.99984 6.47246L1.944 0.416626L0.416504 1.94413L6.47234 7.99996L0.416504 14.0558L1.944 15.5833L7.99984 9.52746L14.0557 15.5833L15.5832 14.0558L9.52733 7.99996L15.5832 1.94413Z"})))}const b=a.forwardRef(g);l.p;var v;function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},w.apply(this,arguments)}function y(e,t){let{title:l,titleId:r,...n}=e;return a.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},n),l?a.createElement("title",{id:r},l):null,v||(v=a.createElement("path",{d:"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"})))}const j=a.forwardRef(y);l.p;var N=l(184);const k=e=>{let{todo:t}=e;const[l,r]=(0,a.useState)(!1),[s,o]=(0,a.useState)({completed:t.completed,title:t.title}),i=(0,n.I0)();return(0,N.jsxs)("li",{className:"px-5 py-3 bg-white text-slate-950 flex flex-col gap-2 w-[274px] md:w-[600px]",children:[(0,N.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,N.jsx)("p",{className:"secondary-text",children:"Title: \xa0"}),(0,N.jsx)("input",{value:s.title,readOnly:!l,onChange:e=>o((t=>({...t,title:e.target.value}))),className:"focus-within:outline-none text-sm md:text-base"})]}),(0,N.jsxs)("div",{className:"flex gap-2",children:[(0,N.jsx)("p",{className:"secondary-text",children:"Status: \xa0"}),(0,N.jsx)("span",{onClick:()=>{l&&o((e=>({...e,completed:!e.completed})))},className:"".concat(s.completed?"bg-green-600":"bg-red-600"," inline-block w-[25px] h-[25px] rounded-full")})]}),(0,N.jsxs)("div",{className:"flex gap-3 justify-end",children:[(0,N.jsx)("button",{onClick:()=>{if(!l)return r(!0);i((0,p.CU)({...t,...s})),r(!1)},className:"group",type:"button",children:l?(0,N.jsx)(j,{width:30,height:30,className:"fill-gray-600 group-hover:fill-gray-900 group-focus:fill-gray-900"}):(0,N.jsx)(m,{width:30,height:30,className:"fill-gray-600 group-hover:fill-gray-900 group-focus:fill-gray-900"})}),(0,N.jsx)("button",{onClick:()=>i((0,p.aS)(t.id)),className:"group",type:"button",children:(0,N.jsx)(b,{width:30,height:30,className:"fill-red-600 group-hover:fill-red-950 group-focus:fill-red-950"})})]})]})},O=()=>{const[e,t]=(0,a.useState)(0),l=(0,n.I0)();return(0,N.jsx)("button",{onClick:()=>{l((0,p._O)({start:e+1,limit:5})),t((e=>e+1))},className:"btn-primary mx-auto",type:"button",children:"Load More"})},L=e=>{let{todos:t}=e;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("ul",{className:"flex flex-col gap-4 items-center",children:t.map((e=>(0,N.jsx)(k,{todo:e},e.id)))}),(0,N.jsx)(O,{})]})},E=e=>{let{closeModal:t}=e;const l=(0,n.I0)();return(0,N.jsxs)("form",{onSubmit:e=>{e.preventDefault();const r={title:e.target.elements.title.value,completed:e.target.elements.completed.checked};l((0,p.JV)(r)),t()},className:"bg-white px-5 pt-10 pb-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-7 md:px-7 md:pb-8 md:pt-14",children:[(0,N.jsx)("input",{type:"text",name:"title",required:!0,id:"title",className:"bg-slate-900 text-white focus-within:outline-font-header text-xs p-2 md:p-3 md:text-lg",placeholder:"Title"}),(0,N.jsxs)("label",{htmlFor:"completed",className:"flex gap-3 justify-start items-center text-xs md:text-lg cursor-pointer",children:["Completed:\xa0",(0,N.jsx)("input",{type:"checkbox",name:"completed",id:"completed",className:"text-slate-900 accent-current w-5 h-5"})]}),(0,N.jsx)("button",{className:"btn-primary md:text-lg",type:"submit",children:"Create"}),(0,N.jsx)("button",{onClick:t,className:"absolute top-2 right-2 xl:top-3 xl:right-3",type:"button",children:(0,N.jsx)(b,{width:20,height:20,className:"fill-black"})})]})};var C=l(164);const M=e=>{let{children:t,closeModal:l}=e;(0,a.useEffect)((()=>{document.body.style.overflow="hidden";const e=e=>{"Escape"===e.code&&l()};return window.addEventListener("keydown",e),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",e)}}),[l]);return(0,C.createPortal)((0,N.jsx)("div",{onClick:e=>{e.currentTarget===e.target&&l()},className:"w-screen h-screen bg-slate-600 bg-opacity-70 fixed top-0 left-0",children:t}),document.body)},I=()=>{const e=(0,n.v9)(s.g2),[t,l]=(0,a.useState)(!1),r=()=>l(!1);return(0,N.jsxs)("section",{className:"py-3 md:py-4 flex flex-col items-center justify-center gap-2 md:gap-4",children:[t&&(0,N.jsx)(M,{closeModal:r,children:(0,N.jsx)(E,{closeModal:r})}),(0,N.jsx)("button",{className:"fixed bottom-6 xl:bottom-10 right-6 xl:right-10 bg-slate-950 p-2 rounded-full flex items-center justify-center",onClick:()=>l(!0),type:"button",children:(0,N.jsx)(c,{className:"fill-white",width:24,height:24})}),(0,N.jsx)(L,{todos:e})]})}}}]);
//# sourceMappingURL=929.c347577d.chunk.js.map