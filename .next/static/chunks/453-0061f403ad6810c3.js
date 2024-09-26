"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[453],{6339:function(e,a,s){s.d(a,{b:function(){return n}});var r=s(89701),o=s(5121),l=s(67294),t=s(86501);let n=()=>{let[e,a]=(0,l.useState)([]),[s,n]=(0,l.useState)(!1),c=async()=>{n(!0);try{let{data:e}=await o.Z.get("".concat(r.b,"/categories"));a(e)}catch(e){console.log(e),t.ZP.error("Failed, try again.")}finally{n(!1)}},i=async e=>{try{let{data:a}=await o.Z.delete("".concat(r.b,"/category/").concat(e));c(),t.ZP.success("Category deleted")}catch(e){console.log(e),t.ZP.error("Category delete falied")}},d=async(e,a,s)=>{if(e.preventDefault(),!a){t.ZP.error("Please give it a name");return}try{n(!0);let{data:e}=await o.Z.post("".concat(r.b,"/category"),{name:a});c(),s(""),n(!1),t.ZP.success("Category created successfully")}catch(e){t.ZP.error("Duplicate error. Try different name."),console.log(e),n(!1)}};return(0,l.useEffect)(()=>{c()},[]),{categoriesList:e,loading:s,getCategories:c,DeleteCategory:i,addCategory:d}}},6094:function(e,a,s){s.d(a,{K6:function(){return c},VG:function(){return d},ZE:function(){return i}});var r=s(89701),o=s(73361),l=s(5121),t=s(67294),n=s(86501);let c=()=>{let[e,a]=(0,t.useState)(!1),s=async(e,s)=>{if(console.log("state",s.faqs,"here"),!s.title||!s.overview||!s.lectures||!s.whyUs||!s.prerequisites||!s.benefits||!s.marketValue||!s.courseFor||!s.duration||!s.timming||!s.startingFrom||!s.image||!s.instructor||0===s.categories.length||0===s.faqs.length||!s.seoTitle||!s.metaDescription){n.ZP.error("All Fields are required**",{position:"bottom-center"});return}let o=new FormData;o.append("title",s.title),o.append("overview",s.overview),o.append("whyUs",s.whyUs),o.append("prerequisites",s.prerequisites),o.append("benefits",s.benefits),o.append("marketValue",s.marketValue),o.append("courseFor",s.courseFor),o.append("duration",s.duration),o.append("classes",s.classes),o.append("timming",s.timming),o.append("startingFrom",s.startingFrom),o.append("regFee",s.regFee),o.append("courseFee",s.courseFee),o.append("image",s.image),o.append("instructor",s.instructor),o.append("monday",s.days.monday),o.append("tuesday",s.days.tuesday),o.append("wednesday",s.days.wednesday),o.append("thursday",s.days.thursday),o.append("friday",s.days.friday),o.append("saturday",s.days.saturday),o.append("seoTitle",s.seoTitle),o.append("metaDescription",s.metaDescription),s.lectures.forEach((e,a)=>{o.append("lectures[".concat(a,"][title]"),e.title),o.append("lectures[".concat(a,"][details]"),e.details)}),s.faqs.forEach((e,a)=>{o.append("faqs[".concat(a,"][answer]"),e.answer),o.append("faqs[".concat(a,"][question]"),e.question)}),s.categories.forEach(e=>{o.append("categories",e)});try{a(!0);let{data:s}=await l.Z.post("".concat(r.b,"/").concat(e),o);s.error?n.ZP.error(s.error,{position:"bottom-center"}):n.ZP.success("Action is done successfully",{position:"bottom-center"}),a(!1)}catch(e){a(!1),console.log(e)}};return{createSubmit:s,loading:e}},i=()=>{let[e]=(0,o.a)(),[a,s]=(0,t.useState)([]),[c,i]=(0,t.useState)(!1),d=async()=>{try{i(!0);let{data:a}=await l.Z.get("".concat(r.b,"/admin-courses"),{headers:{Authorization:"Bearer ".concat(null==e?void 0:e.token)}});s(a.courses),console.log(a.courses,"here"),i(!1)}catch(e){i(!1),console.log(e)}},u=async a=>{try{var s;if(null===(s=window)||void 0===s?void 0:s.confirm("Are you sure?")){let{data:s}=await l.Z.delete("".concat(r.b,"/delete/course/").concat(a),{headers:{Authorization:"Bearer ".concat(null==e?void 0:e.token)}});d()}}catch(e){console.log(e)}},m=async a=>{try{i(!0);let{data:s}=await l.Z.put("".concat(r.b,"/show-or-not/").concat(a),{showOrNot:!1},{headers:{Authorization:"Bearer ".concat(null==e?void 0:e.token)}});console.log(s),s.ok&&(i(!1),n.ZP.success("Course has been disable"),d())}catch(e){console.log(e),i(!1),n.ZP.error("Try again")}},h=async a=>{try{i(!0);let{data:s}=await l.Z.put("".concat(r.b,"/show-or-not-2/").concat(a),{showOrNot:!0},{headers:{Authorization:"Bearer ".concat(null==e?void 0:e.token)}});console.log(s),s.ok&&(i(!1),n.ZP.success("Course has been disable"),d())}catch(e){console.log(e),i(!1),n.ZP.error("Try again")}},p=async a=>{try{i(!0);let{data:s}=await l.Z.put("".concat(r.b,"/show-or-not-2/").concat(a),{showOrNot:!1},{headers:{Authorization:"Bearer ".concat(null==e?void 0:e.token)}});console.log(s),s.ok&&(i(!1),n.ZP.success("Course has been disable"),d())}catch(e){console.log(e),i(!1),n.ZP.error("Try again")}},x=async a=>{try{i(!0);let{data:s}=await l.Z.put("".concat(r.b,"/show-or-not/").concat(a),{showOrNot:!0},{headers:{Authorization:"Bearer ".concat(null==e?void 0:e.token)}});console.log(s),s.ok&&(i(!1),n.ZP.success("Course has been disable"),d())}catch(e){console.log(e),i(!1),n.ZP.error("Try again")}};return(0,t.useEffect)(()=>{e&&e.token&&d()},[e&&e.token]),{list:a,loading:c,deleteCourse:u,disableCourse:m,enableCourse2:h,disableCourse2:p,enableCourse:x}},d=()=>{let[e,a]=(0,t.useState)(!1),[s,o]=(0,t.useState)([]);(0,t.useEffect)(()=>{n()},[]);let n=async()=>{try{a(!0);let{data:e}=await l.Z.get("".concat(r.b,"/courses-form"));o(e.courses)}catch(e){console.log(e)}finally{a(!1)}};return{loading:e,shorts:s}}},54715:function(e,a,s){s.d(a,{BL:function(){return n},J:function(){return c}});var r=s(89701),o=s(73361),l=s(5121),t=s(67294);let n=()=>{let[e]=(0,o.a)(),[a,s]=(0,t.useState)([]),[n,c]=(0,t.useState)(!1),i=async()=>{try{c(!0);let{data:a}=await l.Z.get("".concat(r.b,"/admin/all-user"),{headers:{Authorization:"Bearer ".concat(null==e?void 0:e.token)}});s(a.users),c(!1)}catch(e){c(!1),console.log(e)}finally{c(!1)}};(0,t.useEffect)(()=>{e&&e.token&&i()},[e&&e.token]);let d=async a=>{try{var s;if(c(!0),null===(s=window)||void 0===s?void 0:s.confirm("Are you sure?")){let{data:s}=await l.Z.delete("".concat(r.b,"/admin/delete/").concat(a),{headers:{Authorization:"Bearer ".concat(null==e?void 0:e.token)}});i()}}catch(e){console.log(e)}finally{c(!1)}};return{list:a,loading:n,deleteUser:d}},c=()=>{let[e]=(0,o.a)(),[a,s]=(0,t.useState)(!1),[n,c]=(0,t.useState)([]);return(0,t.useEffect)(()=>{let a=async()=>{try{s(!0);let{data:a}=await l.Z.get("".concat(r.b,"/get-all-instructors"),{headers:{Authorization:"Bearer ".concat(e.token)}});c(a),s(!1)}catch(e){s(!1),console.log(e),toast.error("Try Again")}};e&&e.token&&a()},[e&&e.token]),{instLoading:a,teachers:n}}},24245:function(e,a,s){var r=s(85893),o=s(67294),l=s(5152),t=s.n(l);s(58514);var n=s(6339),c=s(54715),i=s(65400),d=s.n(i),u=s(74253),m=s(64749),h=s(47516),p=s(89701),x=s(15120);a.Z=e=>{var a,l,i,f,y,g,j,v;let{changeHandler:b,_values:N,_setValues:C,faqs:k,handleAddFaqs:w,handleRemoveFAQs:F,handleFaqsChange:Z,lectures:I,handleAddLecture:D,handleRemoveLecture:P,handleLectureChange:S,submitHandler:A,submitLoading:T,cats:q,setCats:E,from:B,courseId:O}=e,U=(0,o.useMemo)(()=>t()(()=>Promise.all([s.e(2937),s.e(8446),s.e(1167)]).then(s.t.bind(s,71167,23)),{loadableGenerated:{webpack:()=>[71167]},ssr:!1}),[]),{categoriesList:z}=(0,n.b)(),{instLoading:R,teachers:J}=(0,c.J)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{children:"SEO"}),(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:"SEO Title"}),(0,r.jsx)("input",{type:"text",className:"form-control",name:"seoTitle",placeholder:"SEO Title",value:null==N?void 0:N.seoTitle,onChange:b})]}),(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:"Meta Description"}),(0,r.jsx)("input",{type:"text",className:"form-control",name:"metaDescription",placeholder:"Meta Description",value:null==N?void 0:N.metaDescription,onChange:b})]}),(0,r.jsx)(u.Z,{children:"Course Data"}),(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:"Course Title"}),(0,r.jsx)("input",{type:"text",className:"form-control",name:"title",placeholder:"Course Title - ... Mastery Course ",value:null==N?void 0:N.title,onChange:b})]}),(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:"Course Image"}),(0,r.jsx)("input",{onChange:b,type:"file",accept:"images/*",className:"form-control"})]}),"course-create"===B&&(null==N?void 0:N.image)&&(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("img",{width:"auto",height:300,src:null===(a=URL)||void 0===a?void 0:a.createObjectURL(null==N?void 0:N.image),onClick:()=>C(e=>({...e,image:""}))}),(0,r.jsx)("br",{}),(0,r.jsx)("small",{children:"Just click on image to remove."})]}),"course-edit"===B&&N.preImage&&(0,r.jsxs)("div",{className:"form-group py-2",children:[(null===(l=N.preImage)||void 0===l?void 0:l.url.includes("courseImages"))?(null===(i=N.preImage)||void 0===i?void 0:i.url)&&(0,r.jsx)("img",{width:"auto",height:300,src:(0,p.v)(null===(f=N.preImage)||void 0===f?void 0:f.url),onClick:()=>C(e=>({...e,preImage:""}))}):(0,r.jsx)("img",{width:"auto",height:300,src:null===(y=N.preImage)||void 0===y?void 0:y.url,onClick:()=>C(e=>({...e,preImage:""}))}),(0,r.jsx)("br",{}),(0,r.jsx)("small",{children:"Just click on image to remove."})]}),"course-edit"===B&&(0,r.jsxs)(r.Fragment,{children:[(null==N?void 0:N.image)&&(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("img",{width:"auto",height:300,src:null===(g=window)||void 0===g?void 0:g.URL.createObjectURL(null==N?void 0:N.image),onClick:()=>C(e=>({...e,image:""}))}),(0,r.jsx)("br",{}),(0,r.jsx)("small",{children:"Just click on image to remove."})]}),(null===(j=N.preImage)||void 0===j?void 0:j.url)&&(0,r.jsx)(r.Fragment,{children:JSON.stringify((0,p.v)(null===(v=N.preImage)||void 0===v?void 0:v.url))})]}),(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:"Overview"}),(0,r.jsx)(U,{placeholder:"Overview of the coruse",name:"overview",value:N.overview,onChange:e=>C(a=>({...a,overview:e}))})]}),(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:"Why us"}),(0,r.jsx)(U,{placeholder:"",value:N.whyUs,name:"whyUs",onChange:e=>C(a=>({...a,whyUs:e}))})]}),(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:"Eligibility"}),(0,r.jsx)(U,{type:"text",name:"prerequisites",placeholder:"Prerequisites of the course",value:N.prerequisites,onChange:e=>C(a=>({...a,prerequisites:e}))})]}),(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:"Benefits"}),(0,r.jsx)(U,{type:"text",name:"benefits",placeholder:"Benefits of the course",value:N.benefits,onChange:e=>C(a=>({...a,benefits:e}))})]}),(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:"Scope"}),(0,r.jsx)(U,{type:"text",name:"marketValue",value:N.marketValue,onChange:e=>C(a=>({...a,marketValue:e}))})]}),(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:"Who this course is for:"}),(0,r.jsx)("textarea",{type:"text",className:"form-control",name:"courseFor",placeholder:"Who this course is for:",value:N.courseFor,onChange:b})]}),(0,r.jsxs)("div",{className:"row py-3",children:[(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:" Durations"}),(0,r.jsx)("input",{type:"text",className:"form-control",name:"duration",placeholder:"Duration - 3 months",value:N.duration,onChange:b})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:" Classes"}),(0,r.jsx)("input",{type:"number",className:"form-control",name:"classes",placeholder:"Classes - 36 ",value:N.classes,onChange:b})]})})]}),(0,r.jsxs)("div",{className:"row py-3",children:[(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:" Timing"}),(0,r.jsx)("input",{type:"text",className:"form-control",name:"timming",placeholder:"Batch timing - 4 PM to 5:30 PM",value:N.timming,onChange:b})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:" Starting From"}),(0,r.jsx)("input",{type:"text",className:"form-control",name:"startingFrom",placeholder:"Starting From - June 1st, 2023 ",value:N.startingFrom,onChange:b})]})})]}),(0,r.jsxs)("div",{className:"row pt-10",children:[(0,r.jsxs)("label",{style:{fontWeight:"bold",marginBottom:"5px"},children:["Conducting days ",(0,r.jsx)("span",{className:"text-danger",children:"*"})," "]}),(0,r.jsxs)("div",{className:"col-lg-6 col-md-6",children:[(0,r.jsxs)("div",{className:"form-check",children:[(0,r.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault",value:"monday",checked:N.days.monday,onChange:()=>C(e=>({...e,days:{...e.days,monday:!N.days.monday}}))}),(0,r.jsx)("label",{className:"form-check-label",for:"flexCheckDefault",children:"Monday"})]}),(0,r.jsxs)("div",{className:"form-check",children:[(0,r.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault",value:"tuesday",checked:N.days.tuesday,onChange:()=>C(e=>({...e,days:{...e.days,tuesday:!N.days.tuesday}}))}),(0,r.jsx)("label",{className:"form-check-label",for:"flexCheckDefault",children:"Tuesday"})]}),(0,r.jsxs)("div",{className:"form-check",children:[(0,r.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault",value:"wednesday",checked:N.days.wednesday,onChange:()=>C(e=>({...e,days:{...e.days,wednesday:!N.days.wednesday}}))}),(0,r.jsx)("label",{className:"form-check-label",for:"flexCheckDefault",children:"Wednesday"})]})]}),(0,r.jsxs)("div",{className:"col-lg-6 col-md-6",children:[(0,r.jsxs)("div",{className:"form-check",children:[(0,r.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault",value:"thursday",checked:N.days.thursday,onChange:()=>C(e=>({...e,days:{...e.days,thursday:!N.days.thursday}}))}),(0,r.jsx)("label",{className:"form-check-label",for:"flexCheckDefault",children:"Thursday"})]}),(0,r.jsxs)("div",{className:"form-check",children:[(0,r.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault",value:"friday",checked:N.days.friday,onChange:()=>C(e=>({...e,days:{...e.days,friday:!N.days.friday}}))}),(0,r.jsx)("label",{className:"form-check-label",for:"flexCheckDefault",children:"Friday"})]}),(0,r.jsxs)("div",{className:"form-check",children:[(0,r.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault",value:"saturday",checked:N.days.saturday,onChange:()=>C(e=>({...e,days:{...e.days,saturday:!N.days.saturday}}))}),(0,r.jsx)("label",{className:"form-check-label",for:"flexCheckDefault",children:"Saturday"})]})]})]}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"row py-3",children:[(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:" Course Fee"}),(0,r.jsx)("input",{type:"number",className:"form-control",name:"courseFee",placeholder:"Course Fee - 0",value:N.courseFee,onChange:b})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:" Registeration Fee"}),(0,r.jsx)("input",{type:"number",className:"form-control",name:"regFee",placeholder:"Registeration Fee - 5000 ",value:N.regFee,onChange:b})]})})]}),R&&"loading...",(0,r.jsx)("div",{className:"form-group py-2",children:(0,r.jsxs)("select",{value:N.instructor,onChange:b,className:"form-control",name:"instructor",children:[(0,r.jsx)("option",{children:"* Select Instructor"}),null==J?void 0:J.map((e,a)=>(0,r.jsx)("option",{value:e._id,children:e.name},a))]})}),(0,r.jsxs)("div",{className:"form-group py-2",children:[(null==q?void 0:q.length)===0||1===q.length&&(0,r.jsx)(x.Z,{}),(0,r.jsx)("label",{for:"exampleFormControlInput1",children:"Categories"}),(0,r.jsx)(m.default,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:"Please select",onChange:e=>E(e),children:z.map(e=>(0,r.jsx)(m.default.Option,{children:e.name},e.name))})]}),(0,r.jsxs)("div",{className:"row py-5",children:[(0,r.jsx)("b",{children:" Outlines"}),I.map((e,a)=>(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("div",{className:"col-12",children:(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:" Heading"}),(0,r.jsx)("input",{type:"text",className:"form-control",name:"title",placeholder:"Lecture Title",value:e.title,onChange:e=>S(a,e)})]})}),(0,r.jsxs)("div",{className:"col-12",children:[(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlSelect1",children:"Description"}),(0,r.jsx)("textarea",{type:"text",className:"form-control",name:"details",placeholder:"Lecture Details",value:e.details,onChange:e=>S(a,e)})]}),(0,r.jsx)("span",{className:"p-1 mx-3 rounded d-flex justify-content-start text-danger ",onClick:()=>P(a),children:"Remove"})]}),(0,r.jsx)("hr",{})]},a)),(0,r.jsx)("div",{className:"d-flex justify-content-end",children:(0,r.jsxs)("button",{onClick:D,className:"p-1 rounded d-flex justify-content-center align-items-center",children:["Add ",(0,r.jsx)(h.poH,{})]})})]}),(0,r.jsxs)("div",{className:"row py-5",children:[(0,r.jsx)("b",{children:"FAQs"}),k.map((e,a)=>(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("div",{className:"col-12",children:(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlInput1",children:" Question"}),(0,r.jsx)("input",{type:"text",className:"form-control",name:"question",placeholder:"Question",value:e.question,onChange:e=>Z(a,e)})]})}),(0,r.jsx)("div",{className:"col-12",children:(0,r.jsxs)("div",{className:"form-group py-2",children:[(0,r.jsx)("label",{for:"exampleFormControlSelect1",children:"Answer"}),(0,r.jsx)("input",{type:"text",className:"form-control",name:"answer",placeholder:"Answer",value:e.answer,onChange:e=>Z(a,e)})]})}),(0,r.jsx)("span",{className:"p-1 mx-3 rounded d-flex justify-content-start text-danger ",onClick:()=>F(a),children:"Remove"}),(0,r.jsx)("hr",{})]},a)),(0,r.jsx)("div",{className:"d-flex justify-content-end",children:(0,r.jsxs)("button",{onClick:w,className:"p-1 rounded d-flex justify-content-center align-items-center",children:["Add ",(0,r.jsx)(h.poH,{})]})})]}),(0,r.jsx)(d(),{loading:T,onClick:()=>{"course-edit"===B?A("edit-course/".concat(O),{...N,lectures:I,faqs:k,image:N.preImage?N.preImage:N.image,categories:q}):"course-create"===B&&A("create-course",{...N,lectures:I,faqs:k,image:N.image,categories:q})},children:"Submit"})]})}},15120:function(e,a,s){var r=s(85893);s(67294),a.Z=()=>(0,r.jsx)("div",{className:"alert alert-warning",role:"alert",children:"Please select mulitple categories. Sorry for inconvenience."})},46148:function(e,a,s){var r=s(85893),o=s(16371);s(67294),a.Z=e=>{let{title:a,para:s,Icon:l}=e;return(0,r.jsxs)("div",{className:"text-start mb-5",children:[(0,r.jsxs)("h4",{className:"d-flex justify-content-start align-items-start gap-2",style:{color:o.W.primaryColor},children:[l," ",a]}),(0,r.jsx)("small",{children:s})]})}}}]);