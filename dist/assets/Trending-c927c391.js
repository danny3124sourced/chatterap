import{c as u,r as a,j as s,A as m}from"./index-98068710.js";import{P as x,a as g}from"./PostLoader-5613e46c.js";import"./calculateReadingTime-adebe942.js";const j=e=>{const{posts:t}=u(),[o,r]=a.useState(!0),[n,i]=a.useState([]);return a.useEffect(()=>{r(!0);const c=e.replace(/_/g," "),d=t.filter(l=>l.tagList.includes(c));i(d),r(!1)},[t,e]),{trendingPosts:n,isLoading:o}},p=({tag:e})=>{const{trendingPosts:t,isLoading:o}=j(e);return console.log(t),s.jsx("div",{children:o||(t==null?void 0:t.length)===0?s.jsx("div",{children:[...Array(5)].map((r,n)=>s.jsx(x,{},n))}):s.jsx("div",{children:t.map(r=>{const{id:n}=r;return s.jsx("div",{children:s.jsx(g,{post:r},n)},n)})})})};function v(){const{tag:e}=m();return s.jsx(s.Fragment,{children:s.jsx("section",{className:" bg-white-100",children:s.jsx("div",{className:" ms-[250px] tabletS:ms-0 pt-24  ",children:s.jsx(p,{tag:e})})})})}export{v as default};
