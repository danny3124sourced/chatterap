import{o as l,P as u,m as d,p as h,q as m,y as g,s as p,t as x,u as y,r as b,b as w,j as e,M as f,T as v,B as j,v as A}from"./index-98068710.js";import{c as n}from"./url-c3cb67a6.js";async function M(){const t=l().currentUser,o=u(d);if(t)try{const a=new h;await m(t,a),await g(p(o,"users",t==null?void 0:t.uid)),await x(t),console.log("Account deleted successfully.")}catch(a){console.error("Error deleting account:",a)}else console.error("No user found.")}function P(){const{theme:s}=y(),[t,o]=b.useState(!1),a=w(),r=()=>{o(!1)},i=async()=>{try{await M(),o(!1),setTimeout(()=>{a("/onboard")},2e3)}catch(c){console.log(c)}};return e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Chatter ",ogTitle:"Manage your Account",description:"Manage your account on our inclusive platform. Post diverse content, connect with like-minded individuals",image:n,url:"/settings/account",twitterTitle:"Manage your Posts",twitterDescription:"Manage your account on our inclusive platform. Post diverse content, connect with like-minded individuals",twitterImage:n,twitterCard:"summary_large_image",ogType:"website",href:"/settings/account"}),e.jsx("div",{className:` transition p-4 me-8  tabletL:ms-8 tabletXS:mx-4 duration-500 mb-4 rounded-md border border-gray-300 ease-in-out ${s==="lightMode"?"bg-white-50 text-black-950":s==="darkMode"&&"bg-gray-800 text-white-100"} `,children:e.jsxs("div",{className:"",children:[e.jsx(v,{variant:1,className:"font-bold text-red-600 text-2xl mobileXL:text-lg p-4",children:"Delete Account"}),e.jsx("p",{className:" max-w-[800px] mb-4",children:"Your personal data will be deleted permanently when you delete your account on Chatter. This action is irreversible."}),e.jsxs(j,{disabled:!0,onClick:()=>o(!0),className:"toggle-button w-[200px] p-2 rounded-[40px] cursor-not-allowed opacity-60 text-white-50 bg-red-600 ",children:[" ","Delete Account"]})]})}),e.jsx(A,{isOpen:t,onClose:r,onYes:()=>i(),onNo:()=>o(!1),children:e.jsx("p",{children:"Do you want to delete your account?"})})]})}export{P as default};