(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1581],{75875:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/panel/cms/workshop/list",function(){return n(81919)}])},32512:function(e,t,n){"use strict";n.d(t,{$:function(){return l},K:function(){return i}});var o=n(89701),r=n(73361),s=n(5121),a=n(67294),c=n(86501);let i=()=>{let[e,t]=(0,a.useState)(!1),n=async(e,n)=>{if(!n.breadTitle||!n.title||!n.content||!n.outlines||!n.conclusion||!n.dateAndTime||!n.instructor||!n.zoomLink||!n.meetingId||!n.pascodeId||!n.meetingTiming||!n.tags||0===n.categories.length){c.ZP.error("All Fields are required**",{position:"bottom-center"});return}let r=new FormData;r.append("breadTitle",n.breadTitle),r.append("title",n.title),r.append("content",n.content),r.append("outlines",n.outlines),r.append("conclusion",n.conclusion),r.append("dateAndTime",n.dateAndTime),r.append("instructor",n.instructor),r.append("zoomLink",n.zoomLink),r.append("meetingId",n.meetingId),r.append("pascodeId",n.pascodeId),r.append("meetingTiming",n.meetingTiming),r.append("tags",n.tags),n.categories.forEach(e=>{r.append("categories",e)}),(null==n?void 0:n.preImage)&&console.log("from  pre image"),(null==n?void 0:n.image)&&r.append("image",n.image);try{t(!0);let{data:n}=await s.Z.post("".concat(o.b,"/").concat(e),r,{headers:{"Content-Type":"multipart/form-data"}});n.error?c.ZP.error(n.error,{position:"bottom-center"}):c.ZP.success("Action is done successfully",{position:"bottom-center"}),t(!1)}catch(e){t(!1),console.log(e)}};return{createSubmit:n,loading:e}},l=()=>{let[e,t]=(0,a.useState)(!1),[n,i]=(0,a.useState)([]),[l]=(0,r.a)(),d=async()=>{try{t(!0);let{data:e}=await s.Z.get("".concat(o.b,"/admin-workshops"),{headers:{Authorization:"Bearer ".concat(null==l?void 0:l.token)}});i(e.allworkshops),t(!1)}catch(e){t(!1),console.log(e)}};(0,a.useEffect)(()=>{l&&l.token&&d()},[l&&l.token]);let u=async e=>{try{var t;if(null===(t=window)||void 0===t?void 0:t.confirm("Are you sure?")){let{data:t}=await s.Z.delete("".concat(o.b,"/delete/workshop/").concat(e),{headers:{Authorization:"Bearer ".concat(null==l?void 0:l.token)}});d()}}catch(e){console.log(e)}},h=async e=>{try{t(!0);let{data:n}=await s.Z.put("".concat(o.b,"/workshop/show-or-not/").concat(e),{showOrNot:!1},{headers:{Authorization:"Bearer ".concat(null==l?void 0:l.token)}});n.ok&&(t(!1),c.ZP.success("Workshop has been disable"),d())}catch(e){console.log(e),t(!1),c.ZP.error("Try again")}},p=async e=>{try{t(!0);let{data:n}=await s.Z.put("".concat(o.b,"/workshop/show-or-not/").concat(e),{showOrNot:!0},{headers:{Authorization:"Bearer ".concat(null==l?void 0:l.token)}});n.ok&&(t(!1),c.ZP.success("Workshop has been disable"),d())}catch(e){console.log(e),t(!1),c.ZP.error("Try again")}};return{list:n,loading:e,deleteWorkshop:u,disableWorkshop:h,enableWorkshop:p}}},51447:function(e,t,n){"use strict";var o=n(85893);n(67294);var r=n(24806);t.Z=e=>{let{children:t}=e;return(0,o.jsx)(r.Z,{api:"/current-cms-user",children:t})}},46148:function(e,t,n){"use strict";var o=n(85893),r=n(16371);n(67294),t.Z=e=>{let{title:t,para:n,Icon:s}=e;return(0,o.jsxs)("div",{className:"text-start mb-5",children:[(0,o.jsxs)("h4",{className:"d-flex justify-content-start align-items-start gap-2",style:{color:r.W.primaryColor},children:[s," ",t]}),(0,o.jsx)("small",{children:n})]})}},81919:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var o=n(85893),r=n(51447),s=n(32512);n(89701),n(73361);var a=n(65400),c=n.n(a),i=n(41664),l=n.n(i);n(67294);var d=n(47516),u=()=>{let{loading:e,list:t,deleteWorkshop:n,enableWorkshop:r,disableWorkshop:a}=(0,s.$)();return(0,o.jsx)(o.Fragment,{children:t&&(0,o.jsx)("div",{className:"table-responsive",children:(0,o.jsxs)("table",{className:"table table-striped  text-dark",style:{backgroundColor:"white",borderRadius:"10px"},children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"col",children:e?"loading...":"#"}),(0,o.jsx)("th",{scope:"col",children:"Category"}),(0,o.jsx)("th",{scope:"col",children:"Title"}),(0,o.jsx)("th",{scope:"col",children:"Instructor"}),(0,o.jsx)("th",{scope:"col"}),(0,o.jsx)("th",{scope:"col"})]})}),(0,o.jsx)("tbody",{children:0!==t.length||e?null==t?void 0:t.map((e,t)=>{var s,i;return(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{className:"text-dark",scope:"row ",children:++t}),(0,o.jsx)("td",{className:"text-dark",children:null==e?void 0:null===(s=e.categories[0])||void 0===s?void 0:s.name}),(0,o.jsx)("td",{className:"text-dark",children:null==e?void 0:e.title}),(0,o.jsx)("td",{className:"text-dark",children:null==e?void 0:null===(i=e.instructor)||void 0===i?void 0:i.name}),(0,o.jsx)("td",{className:"text-dark",children:(null==e?void 0:e.show)?(0,o.jsx)(c(),{onClick:()=>a(null==e?void 0:e._id),children:"Enabled"}):(0,o.jsx)(c(),{danger:!0,onClick:()=>r(null==e?void 0:e._id),children:"Disabled"})}),(0,o.jsx)("td",{className:"text-dark",children:(0,o.jsx)(l(),{href:"/cms/workshop/detail/".concat(e._id),children:(0,o.jsx)(d.Hlf,{})})}),(0,o.jsx)("td",{className:"text-dark",children:(0,o.jsx)(d.SW4,{onClick:()=>n(null==e?void 0:e._id)})})]},e._id)}):(0,o.jsx)("tr",{children:(0,o.jsx)("td",{colSpan:"6",className:"text-center",children:"No Workshops"})})})]})})})},h=n(46148),p=n(70302),m=()=>(0,o.jsx)(r.Z,{children:(0,o.jsxs)(p.default,{children:[(0,o.jsx)(h.Z,{Icon:(0,o.jsx)(d.dC0,{}),title:"Workshops"}),(0,o.jsx)(u,{})]})})}},function(e){e.O(0,[5445,1228,3874,2160,2121,1664,8695,9169,2735,9523,1825,4055,4737,4960,302,8890,2891,674,9238,4806,9774,2888,179],function(){return e(e.s=75875)}),_N_E=e.O()}]);