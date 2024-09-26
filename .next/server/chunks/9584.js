exports.id = 9584;
exports.ids = [9584];
exports.modules = {

/***/ 9584:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6339);
/* harmony import */ var _actions_usersTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4715);
/* harmony import */ var _components_ui_common_CatsAlert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5120);
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9701);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2071);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3526);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1791);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_datetime_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3946);
/* harmony import */ var react_datetime_picker_dist_DateTimePicker_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5504);
/* harmony import */ var react_datetime_picker_dist_DateTimePicker_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_datetime_picker_dist_DateTimePicker_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8434);
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_clock_dist_Clock_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6539);
/* harmony import */ var react_clock_dist_Clock_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_clock_dist_Clock_css__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_category__WEBPACK_IMPORTED_MODULE_1__, _actions_usersTable__WEBPACK_IMPORTED_MODULE_2__, react_datetime_picker__WEBPACK_IMPORTED_MODULE_11__]);
([_actions_category__WEBPACK_IMPORTED_MODULE_1__, _actions_usersTable__WEBPACK_IMPORTED_MODULE_2__, react_datetime_picker__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* __next_internal_client_entry_do_not_use__ default auto */ 















const WorkshopForm = ({ _values, _setValues, handleChange, cats, setCats, from, loading, handleSubmit, workshopId })=>{
    const Editor = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(()=>next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(null, {
            loadableGenerated: {
                modules: [
                    "../components/panel/common/workshop/WorkshopForm.jsx -> " + "react-quill"
                ]
            },
            ssr: false
        }), []);
    const { categoriesList } = (0,_actions_category__WEBPACK_IMPORTED_MODULE_1__/* .useCategory */ .b)();
    const { instLoading, teachers } = (0,_actions_usersTable__WEBPACK_IMPORTED_MODULE_2__/* .useTeachers */ .J)();
    const removeImage = ()=>_setValues((prev)=>({
                ...prev,
                image: ""
            }));
    const handleDateChange = (date)=>{
        _setValues((prev)=>({
                ...prev,
                dateAndTime: date
            }));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: " Breadcrumb Title"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        className: "form-control",
                        id: "exampleFormControlInput1",
                        name: "breadTitle",
                        placeholder: "Breadcrumb Title",
                        value: _values.breadTitle,
                        onChange: handleChange
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: " Workshop Title"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        className: "form-control",
                        id: "exampleFormControlInput1",
                        name: "title",
                        placeholder: "Workshop Title",
                        value: _values.title,
                        onChange: handleChange
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: " Workshop Image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        // onChange={handleImage}
                        onChange: handleChange,
                        type: "file",
                        accept: "images/*",
                        className: "form-control",
                        id: "exampleFormControlInput1"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                className: "form-text",
                children: "Please upload image within 1mb, formet jpg,jpeg,webp"
            }),
            from === "workshop-create" && _values.image && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        width: "auto",
                        height: 300,
                        src: URL.createObjectURL(_values.image),
                        onClick: removeImage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                        children: "Just click on image to remove."
                    })
                ]
            }),
            from === "workshop-edit" && _values.preImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    _values.preImage?.url.includes("uploads") ? _values.preImage?.url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        width: "auto",
                        height: 300,
                        src: (0,_config_APIs__WEBPACK_IMPORTED_MODULE_15__/* .toImageUrl */ .v)(_values.preImage?.url),
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
            from === "workshop-edit" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                        children: JSON.stringify((0,_config_APIs__WEBPACK_IMPORTED_MODULE_15__/* .toImageUrl */ .v)(_values.preImage?.url))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Overview"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Editor, {
                        placeholder: "Overview",
                        value: _values.content,
                        onChange: (e)=>_setValues((prev)=>({
                                    ...prev,
                                    content: e
                                }))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Outlines"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Editor, {
                        placeholder: "Outlines",
                        value: _values.outlines,
                        onChange: (e)=>_setValues((prev)=>({
                                    ...prev,
                                    outlines: e
                                }))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Conclusion"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        className: "form-control",
                        type: "text",
                        id: "exampleFormControlInput1",
                        name: "conclusion",
                        value: _values.conclusion,
                        onChange: handleChange
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Date and Time"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_datetime_picker__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        type: "date",
                        className: "form-control",
                        name: "dateAndTime",
                        value: _values?.dateAndTime,
                        onChange: handleDateChange
                    })
                ]
            }),
            instLoading && "loading...",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Select Instructor"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        value: _values.instructor,
                        onChange: handleChange,
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
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Popular Tags"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Tags",
                        name: "tags",
                        value: _values.tags,
                        onChange: handleChange
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                        className: "form-text",
                        children: "Please use comma separated values (eg. #TREND,#DESIGNING,#JAVASCRIPT,#EARNING,#EDUCATION)"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Zoom Link"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "form-control",
                        type: "text",
                        id: "exampleFormControlInput1",
                        name: "zoomLink",
                        value: _values.zoomLink,
                        onChange: handleChange
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group py-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    for: "exampleFormControlInput1",
                                    children: "Meeting Id"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: "form-control",
                                    type: "text",
                                    id: "exampleFormControlInput1",
                                    name: "meetingId",
                                    value: _values.meetingId,
                                    onChange: handleChange
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
                                    children: "Passcode Id"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: "form-control",
                                    type: "text",
                                    id: "exampleFormControlInput1",
                                    name: "pascodeId",
                                    value: _values.pascodeId,
                                    onChange: handleChange
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Meeting Timing And Date"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "form-control",
                        type: "text",
                        id: "exampleFormControlInput1",
                        placeholder: "May 22nd, 2023 | 7:00 PM",
                        name: "meetingTiming",
                        value: _values.meetingTiming,
                        onChange: handleChange
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    cats?.length === 0 || cats.length === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_CatsAlert__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleFormControlInput1",
                        children: "Categories"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_select__WEBPACK_IMPORTED_MODULE_6___default()), {
                        mode: "multiple",
                        allowClear: true,
                        style: {
                            width: "100%"
                        },
                        placeholder: "Please select",
                        onChange: (v)=>setCats(v),
                        children: categoriesList.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_select__WEBPACK_IMPORTED_MODULE_6___default().Option), {
                                children: item.name
                            }, item.name))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {
                loading: loading,
                onClick: ()=>{
                    from === "workshop-edit" ? handleSubmit(`edit-workshop/${workshopId}`, {
                        ..._values,
                        categories: cats
                    }) : from === "workshop-create" && handleSubmit("create-workshop", {
                        ..._values,
                        categories: cats
                    });
                },
                children: "Submit"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkshopForm);

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

/***/ 8434:
/***/ (() => {



/***/ }),

/***/ 6539:
/***/ (() => {



/***/ }),

/***/ 5504:
/***/ (() => {



/***/ }),

/***/ 1791:
/***/ (() => {



/***/ })

};
;