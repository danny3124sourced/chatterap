import{u as k,j as e,r as b,d as E,T as a,w as F,h as Y,M as _}from"./index-98068710.js";import{c as $}from"./calculateReadingTime-adebe942.js";import{g as R}from"./getUserArticles-7cc0fc51.js";import{c as P}from"./url-c3cb67a6.js";const H=()=>{const{theme:i}=k();return e.jsxs("div",{className:`rounded-md m-8 p-8  tabletXS:m-3 h-full transition duration-500 ease-in-out 
         ${i==="lightMode"?"bg-white-50 text-black-950":i==="darkMode"&&"bg-gray-800 text-white-100"}
        `,children:[e.jsxs("div",{className:" flex items-center mb-3",children:[e.jsx("div",{className:"w-[100px] animate-pulse h-8 bg-gray-300 mb-4"}),e.jsx("div",{className:"w-[200px] mobileL:w-[150px] animate-pulse h-8 bg-gray-300 mb-4"}),e.jsx("div",{className:"w-[350px] mobileXL:w-[150px] mobileL:w-[150px] animate-pulse h-8 bg-gray-300 mb-4"}),e.jsx("div",{className:"w-[350px] mobileXL:w-[150px] mobileL:w-[150px] animate-pulse h-8 bg-gray-300 mb-4"})]}),e.jsxs("div",{children:[e.jsx("div",{className:" max-w-[600px] tabletS:w-[400px] mobileXL:w-[300px] mobileL:w-[250px] bg-gray-300 animate-pulse h-8 mb-2"}),e.jsx("div",{className:" max-w-[600px] tabletS:w-[400px] mobileXL:w-[300px] mobileL:w-[250px] bg-gray-300 animate-pulse h-8 mb-2"}),e.jsx("div",{className:"flex flex-wrap items-center my-3",children:[...Array(5)].map((d,c)=>e.jsx("div",{className:"me-1 w-[70px] mb-3 bg-gray-300 h-8 animate-pulse"},c))})]}),e.jsx("div",{className:" max-w-[600px] tabletS:w-[400px] mobileXL:w-[300px] mobileL:w-[250px] h-[250px] bg-gray-300 animate-pulse mb-2"})]})},U=()=>{const[i,d]=b.useState([]),[c,t]=b.useState(!1),[s,u]=b.useState({}),{userInfo:x}=E(),N=()=>{const n=new Date,l=n.getMonth()+1,m=i.filter(r=>new Date(r.data.createdAt).getMonth()+1===l),j=m.length,p=m.reduce((r,o)=>r+o.data.views,0),g=m.reduce((r,o)=>r+o.data.likeCount,0),w=m.reduce((r,o)=>r+o.data.comments.length,0),f=n.toLocaleString("default",{month:"long"}),v=n.getFullYear();u({month:f,year:v,totalPosts:j,totalViews:p,totalLikes:g,totalComments:w,filteredPosts:m})};b.useEffect(()=>{(async()=>{try{if(x!=null&&x.uid){t(!0);const l=await R(x.uid);d(l),t(!1)}}catch(l){console.log(l)}})()},[x]),b.useEffect(()=>{N()},[i]);let h=null;return i.length>0&&(h=i.reduce((n,l)=>l.data.views>n.data.views||l.data.views===n.data.views&&l.data.likeCount>n.data.likeCount?l:n)),{loading:c,posts:i,postSummary:s,highestViewedLikedAndCommentedPost:h}},S=()=>{var h,n,l,m,j,p,g,w,f,v,y,r,o,L,A,T,C,D,M,X;const{theme:i}=k(),{loading:d,highestViewedLikedAndCommentedPost:c,postSummary:t}=U(),{filteredPosts:s}=t;if(!s&&!d||!s&&d||d&&c===null)return e.jsx(H,{});console.log(s),console.log(c);const u=new Date((n=(h=s[0])==null?void 0:h.data)==null?void 0:n.createdAt),N=new Date().getTime()-u.getTime();return e.jsxs("div",{className:`rounded-md m-8 p-8 tabletXS:m-3  mobileXL:px-2 h-full transition duration-500 ease-in-out 
         ${i==="lightMode"?"bg-white-50 text-black-950":i==="darkMode"&&"bg-gray-800 text-white-100"}
        `,children:[s.length>0&&e.jsxs("div",{children:[e.jsxs("div",{className:" border-b-2 pb-3 border-pink-600",children:[e.jsx(a,{variant:1,className:"text-2xl font-bold mb-3",children:"Post Analytics"}),e.jsxs(a,{variant:2,className:"text-base font-normal",children:[e.jsxs("span",{children:[" ",F((m=(l=s[0])==null?void 0:l.data)==null?void 0:m.createdAt),", "]}),e.jsxs("span",{children:[" ",Y(N)," "]})]})]}),e.jsxs("div",{className:" flex items-center",children:[e.jsx(a,{variant:1,className:"text-xl font-bold mb-6 mt-6",children:"Top Post"}),e.jsxs(a,{variant:2,className:"ms-12 text-lg font-normal",children:["earned ",(p=(j=s[0])==null?void 0:j.data)==null?void 0:p.views," views"]})]}),e.jsx("div",{children:e.jsx("article",{className:"tabletXS:my-3 mobileXL:px-2 cursor-pointer",children:e.jsxs("div",{children:[e.jsx(a,{variant:1,className:" text-3xl mobileXL:text-xl font-bold mb-2",children:(w=(g=s[0])==null?void 0:g.data)==null?void 0:w.title}),e.jsx(a,{variant:2,className:" text-2xl mobileXL:text-lg font-normal mb-2",children:((v=(f=s[0])==null?void 0:f.data)==null?void 0:v.subtitle.substring(0,75))+" ... "}),e.jsxs(a,{variant:2,className:"font-semibold mb-1",children:[$((r=(y=s[0])==null?void 0:y.data)==null?void 0:r.body)," mins read"]}),e.jsx("div",{className:"flex flex-wrap items-center my-3",children:(L=(o=s[0])==null?void 0:o.data)==null?void 0:L.tagList.map((V,I)=>e.jsxs("div",{className:"me-2",children:[e.jsx("span",{children:"#"}),e.jsx("span",{className:" text-sm font-semibold text-pink-600",children:V})]},I))}),((T=(A=s[0])==null?void 0:A.data)==null?void 0:T.coverImage)&&e.jsx("div",{className:" relative object-cover max-w-[600px] h-[300px] my-3",children:e.jsx("img",{src:(D=(C=s[0])==null?void 0:C.data)==null?void 0:D.coverImage,alt:(X=(M=s[0])==null?void 0:M.data)==null?void 0:X.title,className:" object-cover h-full w-full"})})]})})})]}),e.jsxs("div",{children:[e.jsx("div",{className:" border-b-2 pb-3 border-pink-600",children:e.jsx(a,{variant:1,className:"text-2xl mobileXL:text-xl font-bold  mt-6",children:"Posts Summary"})}),e.jsxs("div",{children:[e.jsx("div",{className:"mt-4",children:e.jsxs(a,{variant:3,className:"font-normal mb-3",children:[e.jsxs("span",{children:[" ",t==null?void 0:t.month," "]}),e.jsxs("span",{children:[" ",t==null?void 0:t.year," "]}),e.jsx("span",{children:" Summary "})]})}),e.jsxs("div",{className:" flex items-center justify-between  flex-wrap max-w-[400px]",children:[e.jsxs(a,{variant:2,className:"text-base  font-semibold mb-3",children:[e.jsxs("span",{children:[" ",t==null?void 0:t.totalPosts," "]}),e.jsx("span",{children:(t==null?void 0:t.totalPosts)>1?"Total Posts":"Total Post"})]}),e.jsxs(a,{variant:2,className:"text-base  font-semibold  mb-3",children:[e.jsxs("span",{children:[" ",t==null?void 0:t.totalViews," "]}),e.jsxs("span",{children:[(t==null?void 0:t.totalViews)>1?"Impressions":"Impression"," "]})]})]}),e.jsxs("div",{className:" flex items-center justify-between flex-wrap max-w-[400px]",children:[e.jsxs(a,{variant:2,className:"text-base  font-semibold mb-3",children:[e.jsxs("span",{children:[" ",t==null?void 0:t.totalLikes," "]}),e.jsxs("span",{children:[" ",(t==null?void 0:t.totalLikes)>1?"Total Likes":"Total Like"," "]})]}),e.jsxs(a,{variant:2,className:"text-base  font-semibold  mb-3",children:[e.jsxs("span",{children:[" ",t==null?void 0:t.totalComments," "]}),e.jsx("span",{children:(t==null?void 0:t.totalComments)>1?"Total Comments":"Total Comment"})]})]})]})]}),e.jsx("div",{children:s.length===0&&e.jsx("div",{className:"mt-4",children:e.jsx(a,{variant:3,className:"font-normal mb-3",children:e.jsx("span",{children:" No post yet this month"})})})})]})};function J(){const{highestViewedLikedAndCommentedPost:i,loading:d}=U(),{theme:c}=k();return e.jsxs(e.Fragment,{children:[e.jsx(_,{title:"Chatter | Analytics",ogTitle:"Share your creativity with the world",description:"Analytics of your posts",image:P,url:"/analytics",twitterTitle:"Share your creativity with the world",twitterDescription:"Analytics of your posts",twitterImage:P,twitterCard:"summary_large_image",ogType:"website",href:"/analytics"}),e.jsx("section",{className:"bg-white-100",children:e.jsx("div",{className:"ms-[250px] tabletS:ms-0 pt-24",children:e.jsx("div",{children:!d&&i===null?e.jsx("div",{className:"flex justify-center items-center h-[75vh]",children:e.jsx("div",{className:`rounded-md w-[500px] tabletS:w-[300px] mobileL:[280px] h-[200px] transition duration-500 ease-in-out
                                flex justify-center items-center  shadow-md shadow-black-700
                                      ${c==="lightMode"?"bg-white-50 text-black-950":c==="darkMode"&&"bg-gray-800 text-white-100"}
        `,children:e.jsx(a,{variant:1,className:"text-2xl font-bold",children:"No Posts Yet"})})}):e.jsx(S,{})})})})]})}export{J as default};
