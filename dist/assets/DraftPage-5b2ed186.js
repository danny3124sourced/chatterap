import{D as u,a as w,b as m,r as f,j as e,M as g,J as v,K as y}from"./index-98068710.js";import{M as p}from"./Preview-7446034d.js";import"./handleCustomImageUpload-144b4e62.js";import{c as a}from"./url-c3cb67a6.js";function A(){const{article:r,clearArticle:o,setArticle:s}=u(),{user:t}=w(),n=m(),c=async()=>{t&&s(i=>({...i,author:{authorId:t==null?void 0:t.uid}}))};f.useEffect(()=>{c()},[t]);const l=async()=>{n("/settings/post")},h=async()=>{try{await v(t==null?void 0:t.uid,r),await l(),o()}catch(i){console.log(i)}},d=async()=>{console.log("handle draft");try{await y(t==null?void 0:t.uid,r)}catch(i){console.log(i)}};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Chatter | Write",ogTitle:"Share your creativity with the world",description:"Share your creativity with the world on our inclusive platform. Post diverse content, connect with like-minded individuals",image:a,url:"/write",twitterTitle:"Share your creativity with the world",twitterDescription:"Share your creativity with the world on our inclusive platform. Post diverse content, connect with like-minded individuals",twitterImage:a,twitterCard:"summary_large_image",ogType:"website",href:"/write"}),e.jsx("section",{className:"pt-32  bg-white-100 relative",children:e.jsx("div",{children:e.jsx(p,{content:r,onPublish:h,onSaveDraft:d})})})]})}export{A as default};
