exports.id = 4245;
exports.ids = [4245];
exports.modules = {

/***/ 4245:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1791);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6339);
/* harmony import */ var _actions_usersTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4715);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3526);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9701);
/* harmony import */ var _components_ui_common_CatsAlert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5120);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_category__WEBPACK_IMPORTED_MODULE_4__, _actions_usersTable__WEBPACK_IMPORTED_MODULE_5__]);
([_actions_category__WEBPACK_IMPORTED_MODULE_4__, _actions_usersTable__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const CourseForm = ({ changeHandler, _values, _setValues, faqs, handleAddFaqs, handleRemoveFAQs, handleFaqsChange, lectures, handleAddLecture, handleRemoveLecture, handleLectureChange, submitHandler, submitLoading, cats, setCats, from, courseId })=>{
    const Editor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
            loadableGenerated: {
                modules: [
                    "../components/panel/common/course/CourseForm.jsx -> " + "react-quill"
                ]
            },
            ssr: false
        }), []);
    const { categoriesList } = (0,_actions_category__WEBPACK_IMPORTED_MODULE_4__/* .useCategory */ .b)();
    const { instLoading, teachers } = (0,_actions_usersTable__WEBPACK_IMPORTED_MODULE_5__/* .useTeachers */ .J)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: "SEO"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "SEO Title"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        className: "form-control",
                        name: "seoTitle",
                        placeholder: "SEO Title",
                        value: _values?.seoTitle,
                        onChange: changeHandler
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Meta Description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        className: "form-control",
                        name: "metaDescription",
                        placeholder: "Meta Description",
                        value: _values?.metaDescription,
                        onChange: changeHandler
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: "Course Data"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Course Title"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        className: "form-control",
                        name: "title",
                        placeholder: "Course Title - ... Mastery Course ",
                        value: _values?.title,
                        onChange: changeHandler
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Course Image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: changeHandler,
                        type: "file",
                        accept: "images/*",
                        // hidden
                        className: "form-control"
                    })
                ]
            }),
            from === "course-create" && _values?.image && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        width: "auto",
                        height: 300,
                        src: URL?.createObjectURL(_values?.image),
                        onClick: ()=>_setValues((prevValues)=>({
                                    ...prevValues,
                                    image: ""
                                }))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                        children: "Just click on image to remove."
                    })
                ]
            }),
            from === "course-edit" && _values.preImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    _values.preImage?.url.includes("courseImages") ? _values.preImage?.url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        width: "auto",
                        height: 300,
                        src: (0,_config_APIs__WEBPACK_IMPORTED_MODULE_11__/* .toImageUrl */ .v)(_values.preImage?.url),
                        onClick: ()=>_setValues((prev)=>({
                                    ...prev,
                                    preImage: ""
                                }))
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        width: "auto",
                        height: 300,
                        src: _values.preImage?.url,
                        onClick: ()=>_setValues((prev)=>({
                                    ...prev,
                                    preImage: ""
                                }))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                        children: "Just click on image to remove."
                    })
                ]
            }),
            from === "course-edit" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    _values?.image && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-group py-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                width: "auto",
                                height: 300,
                                src: window?.URL.createObjectURL(_values?.image),
                                onClick: ()=>_setValues((prevValues)=>({
                                            ...prevValues,
                                            image: ""
                                        }))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                children: "Just click on image to remove."
                            })
                        ]
                    }),
                    _values.preImage?.url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: JSON.stringify((0,_config_APIs__WEBPACK_IMPORTED_MODULE_11__/* .toImageUrl */ .v)(_values.preImage?.url))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Overview"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Editor, {
                        placeholder: "Overview of the coruse",
                        name: "overview",
                        value: _values.overview,
                        onChange: (e)=>_setValues((pre)=>({
                                    ...pre,
                                    overview: e
                                }))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Why us"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Editor, {
                        placeholder: "",
                        value: _values.whyUs,
                        name: "whyUs",
                        onChange: (e)=>_setValues((pre)=>({
                                    ...pre,
                                    whyUs: e
                                }))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Eligibility"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Editor, {
                        type: "text",
                        name: "prerequisites",
                        placeholder: "Prerequisites of the course",
                        value: _values.prerequisites,
                        onChange: (e)=>_setValues((pre)=>({
                                    ...pre,
                                    prerequisites: e
                                }))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Benefits"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Editor, {
                        type: "text",
                        name: "benefits",
                        placeholder: "Benefits of the course",
                        value: _values.benefits,
                        onChange: (e)=>_setValues((pre)=>({
                                    ...pre,
                                    benefits: e
                                }))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Scope"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Editor, {
                        type: "text",
                        // className="form-control"
                        name: "marketValue",
                        value: _values.marketValue,
                        onChange: (e)=>_setValues((pre)=>({
                                    ...pre,
                                    marketValue: e
                                }))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Who this course is for:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        type: "text",
                        className: "form-control",
                        name: "courseFor",
                        placeholder: "Who this course is for:",
                        value: _values.courseFor,
                        onChange: changeHandler
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row py-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group py-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    for: "exampleFormControlInput1",
                                    children: " Durations"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "duration",
                                    placeholder: "Duration - 3 months",
                                    value: _values.duration,
                                    onChange: changeHandler
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group py-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    for: "exampleFormControlInput1",
                                    children: " Classes"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    className: "form-control",
                                    name: "classes",
                                    placeholder: "Classes - 36 ",
                                    value: _values.classes,
                                    onChange: changeHandler
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row py-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group py-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    for: "exampleFormControlInput1",
                                    children: " Timing"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "timming",
                                    placeholder: "Batch timing - 4 PM to 5:30 PM",
                                    value: _values.timming,
                                    onChange: changeHandler
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group py-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    for: "exampleFormControlInput1",
                                    children: " Starting From"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "startingFrom",
                                    placeholder: "Starting From - June 1st, 2023 ",
                                    value: _values.startingFrom,
                                    onChange: changeHandler
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row pt-10",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        style: {
                            fontWeight: "bold",
                            marginBottom: "5px"
                        },
                        children: [
                            "Conducting days ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-danger",
                                children: "*"
                            }),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-lg-6 col-md-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-check",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "form-check-input",
                                        type: "checkbox",
                                        id: "flexCheckDefault",
                                        value: "monday",
                                        checked: _values.days.monday,
                                        onChange: ()=>_setValues((prev)=>({
                                                    ...prev,
                                                    days: {
                                                        ...prev.days,
                                                        ["monday"]: !_values.days.monday
                                                    }
                                                }))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "form-check-label",
                                        for: "flexCheckDefault",
                                        children: "Monday"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-check",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "form-check-input",
                                        type: "checkbox",
                                        id: "flexCheckDefault",
                                        value: "tuesday",
                                        checked: _values.days.tuesday,
                                        onChange: ()=>_setValues((prev)=>({
                                                    ...prev,
                                                    days: {
                                                        ...prev.days,
                                                        ["tuesday"]: !_values.days.tuesday
                                                    }
                                                }))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "form-check-label",
                                        for: "flexCheckDefault",
                                        children: "Tuesday"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-check",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "form-check-input",
                                        type: "checkbox",
                                        id: "flexCheckDefault",
                                        value: "wednesday",
                                        checked: _values.days.wednesday,
                                        onChange: ()=>_setValues((prev)=>({
                                                    ...prev,
                                                    days: {
                                                        ...prev.days,
                                                        ["wednesday"]: !_values.days.wednesday
                                                    }
                                                }))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "form-check-label",
                                        for: "flexCheckDefault",
                                        children: "Wednesday"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-lg-6 col-md-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-check",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "form-check-input",
                                        type: "checkbox",
                                        id: "flexCheckDefault",
                                        value: "thursday",
                                        checked: _values.days.thursday,
                                        onChange: ()=>_setValues((prev)=>({
                                                    ...prev,
                                                    days: {
                                                        ...prev.days,
                                                        ["thursday"]: !_values.days.thursday
                                                    }
                                                }))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "form-check-label",
                                        for: "flexCheckDefault",
                                        children: "Thursday"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-check",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "form-check-input",
                                        type: "checkbox",
                                        id: "flexCheckDefault",
                                        value: "friday",
                                        checked: _values.days.friday,
                                        onChange: ()=>_setValues((prev)=>({
                                                    ...prev,
                                                    days: {
                                                        ...prev.days,
                                                        ["friday"]: !_values.days.friday
                                                    }
                                                }))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "form-check-label",
                                        for: "flexCheckDefault",
                                        children: "Friday"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-check",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "form-check-input",
                                        type: "checkbox",
                                        id: "flexCheckDefault",
                                        value: "saturday",
                                        checked: _values.days.saturday,
                                        onChange: ()=>_setValues((prev)=>({
                                                    ...prev,
                                                    days: {
                                                        ...prev.days,
                                                        ["saturday"]: !_values.days.saturday
                                                    }
                                                }))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "form-check-label",
                                        for: "flexCheckDefault",
                                        children: "Saturday"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row py-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group py-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    for: "exampleFormControlInput1",
                                    children: " Course Fee"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    className: "form-control",
                                    name: "courseFee",
                                    placeholder: "Course Fee - 0",
                                    value: _values.courseFee,
                                    onChange: changeHandler
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group py-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    for: "exampleFormControlInput1",
                                    children: " Registeration Fee"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    className: "form-control",
                                    name: "regFee",
                                    placeholder: "Registeration Fee - 5000 ",
                                    value: _values.regFee,
                                    onChange: changeHandler
                                })
                            ]
                        })
                    })
                ]
            }),
            instLoading && "loading...",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-group py-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                    value: _values.instructor,
                    onChange: changeHandler,
                    className: "form-control",
                    name: "instructor",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            children: "* Select Instructor"
                        }),
                        teachers?.map((x, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: x._id,
                                children: x.name
                            }, index))
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    cats?.length === 0 || cats.length === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_CatsAlert__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Categories"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_select__WEBPACK_IMPORTED_MODULE_8___default()), {
                        mode: "multiple",
                        allowClear: true,
                        style: {
                            width: "100%"
                        },
                        placeholder: "Please select",
                        onChange: (v)=>setCats(v),
                        children: categoriesList.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_select__WEBPACK_IMPORTED_MODULE_8___default().Option), {
                                children: item.name
                            }, item.name))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row py-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                        children: " Outlines"
                    }),
                    lectures.map((lecture, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group py-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                for: "exampleFormControlInput1",
                                                children: " Heading"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "title",
                                                placeholder: "Lecture Title",
                                                value: lecture.title,
                                                onChange: (e)=>handleLectureChange(index, e)
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "form-group py-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    for: "exampleFormControlSelect1",
                                                    children: "Description"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "details",
                                                    placeholder: "Lecture Details",
                                                    value: lecture.details,
                                                    onChange: (e)=>handleLectureChange(index, e)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "p-1 mx-3 rounded d-flex justify-content-start text-danger ",
                                            onClick: ()=>handleRemoveLecture(index),
                                            children: "Remove"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                            ]
                        }, index)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex justify-content-end",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: handleAddLecture,
                            className: "p-1 rounded d-flex justify-content-center align-items-center",
                            children: [
                                "Add ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__.BiPlus, {})
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row py-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                        children: "FAQs"
                    }),
                    faqs.map((lecture, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group py-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                for: "exampleFormControlInput1",
                                                children: " Question"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "question",
                                                placeholder: "Question",
                                                value: lecture.question,
                                                onChange: (e)=>handleFaqsChange(index, e)
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group py-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                for: "exampleFormControlSelect1",
                                                children: "Answer"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "answer",
                                                placeholder: "Answer",
                                                value: lecture.answer,
                                                onChange: (e)=>handleFaqsChange(index, e)
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "p-1 mx-3 rounded d-flex justify-content-start text-danger ",
                                    onClick: ()=>handleRemoveFAQs(index),
                                    children: "Remove"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                            ]
                        }, index)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex justify-content-end",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: handleAddFaqs,
                            className: "p-1 rounded d-flex justify-content-center align-items-center",
                            children: [
                                "Add ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__.BiPlus, {})
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default()), {
                loading: submitLoading,
                onClick: ()=>{
                    from === "course-edit" ? submitHandler(`edit-course/${courseId}`, {
                        ..._values,
                        lectures,
                        faqs,
                        image: _values.preImage ? _values.preImage : _values.image,
                        categories: cats
                    }) : from === "course-create" && submitHandler("create-course", {
                        ..._values,
                        lectures,
                        faqs,
                        image: _values.image,
                        categories: cats
                    });
                },
                children: "Submit"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CatsAlert = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "alert alert-warning",
        role: "alert",
        children: "Please select mulitple categories. Sorry for inconvenience."
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatsAlert);


/***/ }),

/***/ 1791:
/***/ (() => {



/***/ })

};
;