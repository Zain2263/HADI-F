"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7281],{27281:function(e,l,s){s.r(l);var i=s(85893),a=s(41664),c=s.n(a),d=s(11163);s(67294);var r=s(30381),n=s.n(r),t=s(99423),o=s(89701);l.default=e=>{let{allBlogs:l,RecentBlogs:s,Categories:a,page:r,setPage:h,total:m,loading:x,handleSearch:g,searchQuery:v,setSearchQuery:u,mostViewed:j,whichPage:_}=e,b=(0,d.useRouter)();return(0,i.jsx)("section",{className:" pt-120 pb-120",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col-xl-8 col-lg-8",children:[(0,i.jsxs)("div",{className:"blog__wrapper mr-50",children:[0===l.length&&(0,i.jsx)("h2",{children:" Empty: "}),null==l?void 0:l.map(e=>{var l,s,a,d;return(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)(c(),{className:"",href:"/blog/".concat(e.slug),children:(null===(s=e.image)||void 0===s?void 0:null===(l=s.url)||void 0===l?void 0:l.includes("blogImages"))?(0,i.jsx)("img",{className:"card__image",src:(0,o.v)(null===(a=e.image)||void 0===a?void 0:a.url),alt:"workshop_image"}):(0,i.jsx)("img",{className:"card__image",src:null===(d=e.image)||void 0===d?void 0:d.url,alt:"workshop_image"})}),(0,i.jsxs)("div",{className:"card__content",children:[(0,i.jsx)(c(),{className:"postcard__img_link",href:"/blog/".concat(e.slug),children:(0,i.jsx)("h2",{role:"button",className:"card__content-title",children:null==e?void 0:e.title})}),(0,i.jsx)(c(),{className:"postcard__img_link",href:"/blog/".concat(e.slug),children:(0,i.jsxs)("p",{role:"button",className:"card__content-description",children:[e.description.substring(0,120),"..."]})}),(0,i.jsxs)("div",{className:"card__content-meta",children:[(0,i.jsx)("p",{className:"card__content-meta-views",children:(0,i.jsxs)("b",{style:{color:"#0f3f5d"},children:[(0,i.jsxs)("span",{className:"mx-1",children:[" ",e.viewCount]}),(0,i.jsx)("span",{children:"views"})]})}),(0,i.jsx)("p",{className:"card__content-meta-date",children:(0,i.jsxs)("time",{datetime:"2020-05-25 12:00:00",children:[(0,i.jsx)("i",{style:{color:"#0f3f5d"},className:"fas fa-calendar-alt mr-2"})," ",n()(e.createdAt).fromNow()]})})]})]})]},e._id)})]}),"blogs"===_&&(0,i.jsx)(i.Fragment,{children:(null==l?void 0:l.length)<m&&(0,i.jsx)("div",{className:"text-start",children:(0,i.jsx)("button",{className:"z-btn",onClick:()=>{h(r+1),b.push({pathname:"/ui/blogs",query:{page:r+1}})},children:x?"loading...":" Load More"})})})]}),(0,i.jsx)(t.Z,{handleSearch:g,loading:x,searchQuery:v,setSearchQuery:u,RecentBlogs:s,Categories:a,mostViewed:j,page:"allBlogs"})]})})})}},99423:function(e,l,s){var i=s(85893),a=s(89701),c=s(41664),d=s.n(c),r=s(89583);l.Z=e=>{let{RecentBlogs:l,Categories:s,handleSearch:c,searchQuery:n,setSearchQuery:t,mostViewed:o,loading:h,page:m}=e;return(0,i.jsx)("div",{className:"col-xl-4 col-lg-4",children:(0,i.jsxs)("div",{className:"blog__sidebar",children:[(0,i.jsx)("div",{children:"allBlogs"===m&&(0,i.jsx)("div",{className:"sidebar__widget mb-50 ",children:(0,i.jsx)("div",{className:"sidebar__widget-content",children:(0,i.jsx)("div",{className:"search",children:(0,i.jsxs)("form",{onSubmit:c,children:[(0,i.jsx)("input",{type:"text",placeholder:"Search...",value:n,onChange:e=>t(e.target.value)}),(0,i.jsx)("button",{type:"button",children:h?(0,i.jsx)("p",{children:"...."}):(0,i.jsx)("i",{children:(0,i.jsx)(r.U41,{})})})]})})})})}),(0,i.jsx)("div",{className:"sidebar__widget mb-75 ",children:(0,i.jsx)("div",{className:"sidebar__widget-content",children:(0,i.jsxs)("div",{className:"sidebar__widget mb-75 ",children:[(0,i.jsx)("div",{className:"sidebar__widget-title mb-50",children:(0,i.jsx)("h4",{children:"Categories"})}),(0,i.jsx)("div",{className:"sidebar__widget-content",children:(0,i.jsx)("div",{className:"cat-link",children:(0,i.jsx)("ul",{children:null==s?void 0:s.map((e,l)=>(0,i.jsx)("li",{children:(0,i.jsx)(d(),{href:"/blog/category/".concat(null==e?void 0:e.slug),children:null==e?void 0:e.name})},l))})})})]})})}),(0,i.jsxs)("div",{className:"sidebar__widget mb-75 ",children:[(0,i.jsx)("div",{className:"sidebar__widget-title mb-50",children:(0,i.jsx)("h4",{children:"Most Viewed Blogs"})}),(0,i.jsx)("div",{className:"sidebar__widget-content",children:(0,i.jsx)("div",{className:"rc-post",children:(0,i.jsx)("ul",{children:null==o?void 0:o.map(e=>{var l,s,c,r;return(0,i.jsxs)("li",{className:"d-flex mb-20",children:[(0,i.jsx)("div",{className:"rc-thumb mr-15",children:(0,i.jsx)(d(),{href:"/blog/".concat(e.slug),children:(null===(s=e.image)||void 0===s?void 0:null===(l=s.url)||void 0===l?void 0:l.includes("blogImages"))?(0,i.jsx)("img",{src:(0,a.v)(null===(c=e.image)||void 0===c?void 0:c.url),alt:"rc-blog",height:"80px"}):(0,i.jsx)("img",{src:null==e?void 0:null===(r=e.image)||void 0===r?void 0:r.url,alt:"rc-blog",height:"80px"})})}),(0,i.jsxs)("div",{className:"rc-text",children:[(0,i.jsx)("h6",{children:(0,i.jsx)(d(),{href:"/blog/".concat(e.slug),children:null==e?void 0:e.title})}),(0,i.jsxs)("div",{className:"rc-meta",children:[(0,i.jsx)("span",{children:e.createdAt.substring(0,10)})," "]})]})]},e._id)})})})}),(0,i.jsx)("div",{className:"sidebar__widget-title mb-50",children:(0,i.jsx)("h4",{children:"Recent Blogs"})}),(0,i.jsx)("div",{className:"rc-post",children:(0,i.jsx)("ul",{children:null==l?void 0:l.map(e=>{var l,s,c,r;return(0,i.jsxs)("li",{className:"d-flex mb-20",children:[(0,i.jsx)("div",{className:"rc-thumb mr-15",children:(0,i.jsx)(d(),{href:"/blog/".concat(null==e?void 0:e.slug),children:(null===(s=e.image)||void 0===s?void 0:null===(l=s.url)||void 0===l?void 0:l.includes("blogImages"))?(0,i.jsx)("img",{src:(0,a.v)(null===(c=e.image)||void 0===c?void 0:c.url),alt:"rc-blog",height:"80px"}):(0,i.jsx)("img",{src:null==e?void 0:null===(r=e.image)||void 0===r?void 0:r.url,alt:"rc-blog",height:"80px"})})}),(0,i.jsxs)("div",{className:"rc-text",children:[(0,i.jsx)("h6",{children:(0,i.jsx)(d(),{href:"/blog/".concat(null==e?void 0:e.slug),children:null==e?void 0:e.title})}),(0,i.jsxs)("div",{className:"rc-meta",children:[(0,i.jsx)("span",{children:e.createdAt.substring(0,10)})," "]})]})]},e._id)})})})]})]})})}}}]);