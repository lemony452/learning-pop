"use strict";(self.webpackChunkfe_learning_pop=self.webpackChunkfe_learning_pop||[]).push([[533],{855:(e,l,s)=>{s.d(l,{A:()=>r});var a=s(43),t=(s(57),s(579));const r=(0,a.forwardRef)((function(e,l){let{popsong:s,onSubmit:r,title:n,children:c}=e;const[o,i]=(0,a.useState)((null===s||void 0===s?void 0:s.image.url)||"https://via.placeholder.com/300.jpg");return(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("form",{ref:l,onSubmit:r,encType:"multipart/form-data",className:"row",children:[(0,t.jsx)("h3",{className:"text-center mb-5",children:n}),(0,t.jsxs)("div",{className:"col-12 col-md-10 offset-md-1 col-lg offset-lg-0",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),(0,t.jsx)("input",{defaultValue:null===s||void 0===s?void 0:s.title,className:"form-control",name:"title",id:"title",type:"text",required:!0})]}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{htmlFor:"singer",className:"form-label",children:"Singer"}),(0,t.jsx)("input",{defaultValue:null===s||void 0===s?void 0:s.singer,className:"form-control",name:"singer",id:"singer",type:"text",required:!0})]}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("div",{className:"form-label",children:"Album Image"}),(0,t.jsx)("label",{className:"form-label",htmlFor:"album",children:(0,t.jsx)("img",{className:"rounded form-img",src:o,alt:"album preview"})}),(0,t.jsx)("div",{className:"input-group",children:(0,t.jsx)("input",{onChange:function(e){!async function(e){const l=new FileReader;e&&(l.readAsDataURL(e),l.onloadend=()=>{l.result&&i(l.result)})}(e.target.files[0])},accept:"image/*",type:"file",className:"form-control",name:"image",id:"album",style:{display:"none"},required:!s})})]})]}),(0,t.jsx)("div",{className:"col-12 col-md-10 offset-md-1 col-lg offset-lg-0",children:(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{htmlFor:"lyrics",className:"form-label",children:"Lyrics"}),(0,t.jsx)("textarea",{defaultValue:null===s||void 0===s?void 0:s.lyrics,className:"form-control",name:"lyrics",id:"lyrics",cols:30,rows:20,required:!0})]})}),(0,t.jsxs)("div",{className:"col-12 col-md-10 offset-md-1 col-lg offset-lg-0",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{htmlFor:"translate",className:"form-label",children:"Translate"}),(0,t.jsx)("textarea",{defaultValue:null===s||void 0===s?void 0:s.translate,className:"form-control",name:"translate",id:"translate",cols:30,rows:20,required:!0})]}),(0,t.jsxs)("div",{className:"text-end",children:[(0,t.jsx)("button",{className:"btn btn-primary",children:"Submit"}),c]})]})]})})}))},774:(e,l,s)=>{s.d(l,{A:()=>n});var a=s(43),t=s(950),r=s(579);function n(e){let{children:l,open:s}=e;const n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var e;s&&(null===(e=n.current)||void 0===e||e.showModal())}),[s]),s?(0,t.createPortal)((0,r.jsx)("dialog",{ref:n,className:"rounded bg-white bg-opacity-90 p-5",children:l}),document.getElementById("modal")):(0,r.jsx)(r.Fragment,{})}},4:(e,l,s)=>{s.d(l,{A:()=>t});s(43);var a=s(579);function t(e){let{children:l}=e;return(0,a.jsx)("div",{className:"container-fluid vw-100 row",style:{marginTop:"7rem"},children:(0,a.jsx)("div",{className:"col-10 offset-1",children:l})})}},256:(e,l,s)=>{s.d(l,{s:()=>t});var a=s(43);const t=(e,l)=>{console.log("============Fetch Render========");const[s,t]=(0,a.useState)(null),[r,n]=(0,a.useState)(!1),[c,o]=(0,a.useState)(null),i=(0,a.useCallback)((async s=>{n(!0);try{const a=await(async(e,l)=>{try{console.log(e,l);const s=await fetch("http://localhost:8080/api"+e,l);return await s.json()}catch(s){return console.log(s),s}})(e,{...l,body:s});t(a)}catch(a){o(a)}n(!1)}),[e,l]);return(0,a.useEffect)((()=>{"GET"===l.method&&i()}),[i,l.method]),{data:s,isLoading:r,err:c,fetchData:i}}},533:(e,l,s)=>{s.r(l),s.d(l,{default:()=>u});var a=s(43),t=s(256),r=s(475),n=s(774),c=s(855),o=s(4),i=s(579);const d="/popsongs",m={method:"POST"};function u(){console.log("============New Render========");const e=(0,a.useRef)(null),{data:l,isLoading:s,err:u,fetchData:f}=(0,t.s)(d,m);return s?(0,i.jsx)("div",{children:"Saving..."}):l&&!u?(0,i.jsx)(n.A,{open:!0,children:(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("h5",{children:"\uc0c8\ub85c\uc6b4 \ud31d\uc1a1\uc744 \ub4f1\ub85d\ud588\uc5b4\uc694!"}),(0,i.jsx)("br",{}),(0,i.jsx)(r.N_,{className:"btn btn-primary",to:"/popsongs",children:"\ud50c\ub808\uc774\ub9ac\uc2a4\ud2b8\uc5d0\uc11c \ud655\uc778\ud558\uae30"})]})}):(0,i.jsx)(o.A,{children:(0,i.jsx)(c.A,{title:"New POP",onSubmit:async function(l){l.preventDefault();const s=new FormData(e.current);f(s)},ref:e,children:(0,i.jsx)(r.N_,{to:"/popsongs",children:"Back"})})})}},57:()=>{}}]);
//# sourceMappingURL=533.9cf90334.chunk.js.map