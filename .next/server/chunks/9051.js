exports.id = 9051;
exports.ids = [9051];
exports.modules = {

/***/ 9051:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6339);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3526);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1791);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_common_CatsAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5120);
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9701);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_category__WEBPACK_IMPORTED_MODULE_1__]);
_actions_category__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const BlogForm = ({ _values, _setValues, handleSubmit, submitLoading, changeHandler, setCats, cats, from, blogId })=>{
    const Editor = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(null, {
            loadableGenerated: {
                modules: [
                    "../components/panel/common/blog/BlogForm.jsx -> " + "react-quill"
                ]
            },
            ssr: false
        }), []);
    const { categoriesList } = (0,_actions_category__WEBPACK_IMPORTED_MODULE_1__/* .useCategory */ .b)();
    const removeImage = ()=>_setValues((prev)=>({
                ...prev,
                image: ""
            }));
    // from="blog-create"
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "exampleFormControlInput1",
                        children: " Slug Title"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        className: "form-control",
                        id: "exampleFormControlInput1",
                        name: "slug",
                        placeholder: "Blog Title",
                        value: _values.slug,
                        onChange: changeHandler
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "exampleFormControlInput1",
                        children: " Seo Title"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        className: "form-control",
                        id: "exampleFormControlInput1",
                        name: "seoTitle",
                        placeholder: "SEO Title",
                        value: _values.seoTitle,
                        onChange: changeHandler
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "exampleFormControlInput1",
                        children: "Meta Description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        className: "form-control",
                        id: "exampleFormControlInput1",
                        name: "metaDescription",
                        placeholder: "Meta Description",
                        value: _values.metaDescription,
                        onChange: changeHandler
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "exampleFormControlInput1",
                        children: "Title"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        className: "form-control",
                        id: "exampleFormControlInput1",
                        name: "title",
                        placeholder: "Title",
                        value: _values.title,
                        onChange: changeHandler
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "exampleFormControlInput1",
                        children: "Description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        type: "text",
                        className: "form-control",
                        id: "exampleFormControlInput1",
                        name: "description",
                        placeholder: "Blog Description",
                        value: _values.description,
                        onChange: changeHandler
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "exampleFormControlInput1",
                        children: "Featured Image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: changeHandler,
                        type: "file",
                        accept: "images/*",
                        // hidden
                        className: "form-control",
                        id: "exampleFormControlInput1"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                className: "form-text",
                children: "Please upload image within 1mb, formet jpg,jpeg,webp"
            }),
            from === "blog-create" && _values.image && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
            from === "blog-edit" && _values.preImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    _values.preImage?.url.includes("blogImages") ? _values.preImage?.url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        width: "auto",
                        height: 300,
                        src: (0,_config_APIs__WEBPACK_IMPORTED_MODULE_8__/* .toImageUrl */ .v)(_values.preImage?.url),
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
            from === "blog-edit" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                    _values.preImage?.url
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-group py-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Editor, {
                    type: "text",
                    id: "exampleFormControlInput1",
                    name: "content",
                    placeholder: "Content",
                    value: _values.content,
                    onChange: (e)=>_setValues((pre)=>({
                                ...pre,
                                content: e
                            }))
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    cats?.length === 0 || cats.length === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_CatsAlert__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "exampleFormControlInput1",
                        children: "Categories"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default()), {
                        mode: "multiple",
                        allowClear: true,
                        style: {
                            width: "100%"
                        },
                        placeholder: "Please select",
                        onChange: (v)=>setCats(v),
                        children: categoriesList.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default().Option), {
                                children: item.name
                            }, item.name))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "exampleFormControlInput1",
                        children: "Poplar Tags"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Tags",
                        name: "tags",
                        value: _values.tags,
                        onChange: changeHandler
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                        className: "form-text",
                        children: "Please use comma separated values (eg. #TREND,#DESIGNING,#JAVSSCRIPT,#EARNING,#EDUCATION)"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
                loading: submitLoading,
                onClick: handleSubmit,
                children: "Submit"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogForm);

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