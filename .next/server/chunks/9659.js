"use strict";
exports.id = 9659;
exports.ids = [9659];
exports.modules = {

/***/ 9619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ faqs_data)
/* harmony export */ });
const faqs_data = [
    {
        label: "What is Hadi E-Learning and what does it offer?",
        key: 1,
        children: "Hadi E-learning is a non-profit initiative that aims to empower the youth of Pakistan by enhancing their digital skills. We have specially structured programs designed by industry experts that will not just improve your IT skill sets but will also give you the right direction to implement them. Through Hadi E-learning we want to provide equal learning opportunities accessible to everyone so they take their first step towards financial independence brimming with confidence."
    },
    {
        label: "How can Hadi E-Learning empower Pakistani youth with technical knowledge?",
        key: 2,
        children: "Hadi E-learning has various specially structured courses to offer. All these courses provide comprehensive knowledge of a particular digital field. These courses are designed to enhance the skill set of the students. Not just that, our courses also provide complete guidance on how to implement the skills they have learned. Hence, empowering the students so they can be financially independent."
    },
    {
        label: "Who is Hadi, and what does he symbolize in the context of Hadi E-Learning?",
        key: 3,
        children: "Hadi is our mascot. In Arabic, Hadi means guide, in this very context we have named our mascot. Hadi, your digital guide will lead you to choose a suitable course, to sharpen your skills through our courses, and then to implement those skills in the right direction."
    },
    {
        label: "What is the mission of Hadi E-Learning?",
        key: 4,
        children: "All our courses are designed by industry experts ensuring premium knowledge of a particular field. Also, all our instructors are qualified professionals already making a mark in their relevant fields. They not only provide the students with knowledge of the field but also guide them on how to kickstart their careers."
    },
    {
        label: "How does Hadi E-Learning create opportunities for talented youth?",
        key: 5,
        children: "Hadi E-learning is a welfare initiative providing quality IT training at a Free Quality IT training. This platform provides learning opportunities to all students. Previously these opportunities were only available for a certain percentage of students due to affordability. With Hadi E-learning this bridge has been gapped as all our programs are accessible to students at no cost in comparison with the others in the market."
    },
    {
        label: "Are the courses at Hadi E-Learning self-paced or instructor-led?",
        key: 6,
        children: "All our courses are instructor-led ensuring iterative lessons. In all our classes students can interact with their instructor and ask questions just like in conventional classrooms. Instructors also monitor the progress of the students through assignments and assessments. "
    },
    {
        label: "How does Hadi E-Learning ensure the quality of its courses?",
        key: 7,
        children: "All our courses are designed by industry experts ensuring premium knowledge of a particular field. Also, all our instructors are qualified professionals already making a mark in their relevant fields. They not only provide the students with knowledge of the field but also guide them on how to kickstart their careers."
    },
    {
        label: "How can Hadi E-Learning empower Pakistani youth with technical knowledge?",
        key: 8,
        children: "Hadi E-learning has various specially structured courses to offer. All these courses provide comprehensive knowledge of a particular digital field. These courses are designed to enhance the skill set of the students. Not just that, our courses also provide complete guidance on how to implement the skills they have learned. Hence, empowering the students so they can be financially independent."
    },
    {
        label: "What is the duration of validity for this free offer?",
        key: 9,
        children: "It's a limited time offer."
    },
    {
        label: "What is the duration of validity for this free offer?",
        key: 10,
        children: "It's a limited time offer."
    },
    {
        label: "What is the prerequisite for enrolling in the course, and do I need to pass a test to gain admission?",
        key: 11,
        children: "Yes, enrollment in course requires passing, once you pass the test, will you be added to the relevant group."
    },
    {
        label: "Is it possible for a student to retake the test if they fail it on their first attempt?",
        key: 12,
        children: "Yes, students have the option to retake the test if they do not pass it on their initial attempt."
    },
    {
        label: "Is class placement determined by a waiting list or on a first-come-first-serve basis after passing the test?",
        key: 13,
        children: "Class arrangements are made on a first-come-first-serve basis for students who have passed the test."
    }
];


/***/ }),

/***/ 9659:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_common_TopHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3446);
/* harmony import */ var _data_faqs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9619);
/* harmony import */ var _ant_design_icons_lib_icons_CaretRightOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7045);
/* harmony import */ var _ant_design_icons_lib_icons_CaretRightOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_CaretRightOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8633);
/* harmony import */ var antd_lib_collapse__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_collapse__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_common_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2497);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_common_TopHeader__WEBPACK_IMPORTED_MODULE_3__]);
_components_ui_common_TopHeader__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* __next_internal_client_entry_do_not_use__ default auto */ 







const FAQs = ({ list = 13, component = true })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "FAQs - Hadi E-learning"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: "https://hadielearning.com/faqs"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "INDEX, follow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "author",
                        content: "Hadi"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: `{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What is Hadi E-Learning and what does it offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hadi E-learning is a non-profit initiative that aims to empower the youth of Pakistan by enhancing their digital skills. We have specially structured programs designed by industry experts that will not just improve your IT skill sets but will also give you the right direction to implement them. Through Hadi E-learning we want to provide equal learning opportunities accessible to everyone so they take their first step towards financial independence brimming with confidence."
              }
            },{
              "@type": "Question",
              "name": "How can Hadi E-Learning empower Pakistani youth with technical knowledge?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hadi E-learning has various specially structured courses to offer. All these courses provide comprehensive knowledge of a particular digital field. These courses are designed to enhance the skill set of the students. Not just that, our courses also provide complete guidance on how to implement the skills they have learned. Hence, empowering the students so they can be financially independent."
              }
            },{
              "@type": "Question",
              "name": "Who is Hadi, and what does he symbolize in the context of Hadi E-Learning?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hadi is our mascot. In Arabic, Hadi means guide, in this very context we have named our mascot. Hadi, your digital guide will lead you to choose a suitable course, to sharpen your skills through our courses, and then to implement those skills in the right direction."
              }
            },{
              "@type": "Question",
              "name": "What are the benefits of joining Hadi E-Learning?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Here are some benefits of Hadi E-leaning:
Quality IT training at a subsidized cost.
A variety of courses to choose from.
Qualified instructors with field experience.
One-on-one coordination with the instructor.
Interactive live classes.
Flexibility"
              }
            },{
              "@type": "Question",
              "name": "What is the mission of Hadi E-Learning?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hadi’s mission is to empower the youth with the power of knowledge and skills. We want to provide youngsters with equal learning opportunities that they didn't have access to before. Our goal is to sharpen their digital skills so that they can be financially independent."
              }
            },{
              "@type": "Question",
              "name": "How does Hadi E-Learning ensure the quality of its courses?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All our courses are designed by industry experts ensuring premium knowledge of a particular field. Also, all our instructors are qualified professionals already making a mark in their relevant fields. They not only provide the students with knowledge of the field but also guide them on how to kickstart their careers."
              }
            },{
              "@type": "Question",
              "name": "How does Hadi E-Learning create opportunities for talented youth?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hadi E-learning is a welfare initiative providing quality IT training at a subsidized cost. This platform provides learning opportunities to all students. Previously these opportunities were only available for a certain percentage of students due to affordability. With Hadi E-learning this bridge has been gapped as all our programs are accessible to students at a very minimal cost in comparison with the others in the market."
              }
            },{
              "@type": "Question",
              "name": "Are the courses at Hadi E-Learning self-paced or instructor-led?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All our courses are instructor-led ensuring iterative lessons. In all our classes students can interact with their instructor and ask questions just like in conventional classrooms. Instructors also monitor the progress of the students through assignments and assessments."
              }
            }]
          }`
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_TopHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: `faq__area pb-5 pt-${component ? 120 : 20}`,
                    style: {
                        marginTop: "10px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-xl-8 col-lg-8 ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Frequently Asked Questions"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "faq__accordion p-relative",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_collapse__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        items: component ? _data_faqs__WEBPACK_IMPORTED_MODULE_4__/* .faqs_data */ .$ : _data_faqs__WEBPACK_IMPORTED_MODULE_4__/* .faqs_data */ .$.slice(0, 5),
                                        defaultActiveKey: [
                                            "1"
                                        ],
                                        bordered: false,
                                        size: "large",
                                        expandIcon: ({ isActive })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_CaretRightOutlined__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                rotate: isActive ? 90 : 0
                                            })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            component && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FAQs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;