"use strict";
exports.id = 6437;
exports.ids = [6437];
exports.modules = {

/***/ 5980:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2317);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9689);
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6882);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9648);
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9701);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_8__, react_hot_toast__WEBPACK_IMPORTED_MODULE_9__]);
([axios__WEBPACK_IMPORTED_MODULE_8__, react_hot_toast__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const SingleCount = ({ counter, title, color })=>{
    const [viewCountUp, setViewCountUp] = useState(false);
    const onVisibilityChange = (isVisible)=>{
        if (isVisible) {
            setViewCountUp(true);
        }
    };
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "counter__item text-center mb-30",
                children: [
                    /*#__PURE__*/ _jsx("h2", {
                        className: `counter ${color && color}`,
                        children: /*#__PURE__*/ _jsx(VisibilitySensor, {
                            onChange: onVisibilityChange,
                            offset: {
                                top: 10
                            },
                            delayedCall: true,
                            children: /*#__PURE__*/ _jsxs(_Fragment, {
                                children: [
                                    /*#__PURE__*/ _jsx(CountUp, {
                                        end: viewCountUp ? counter : 0,
                                        duration: 8
                                    }),
                                    " ",
                                    /*#__PURE__*/ _jsx("span", {
                                        children: "+"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        children: title
                    })
                ]
            })
        })
    });
};
const CounterBox = ({ counter, title, color, image, Icon, from })=>{
    const [viewCountUp, setViewCountUp] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const onVisibilityChange = (isVisible)=>{
        if (isVisible) {
            setViewCountUp(true);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 col-lg-3 col-md-6  mb-1 ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default()), {
            hoverable: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex align-items-center gap-3",
                style: {
                    color: "#135c6c"
                },
                children: [
                    Icon && Icon,
                    image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: `images/hero/${image}.svg`,
                        alt: "live class",
                        height: 60
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex flex-column ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                style: {
                                    color: "#135c6c",
                                    fontSize: "30px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    onChange: onVisibilityChange,
                                    offset: {
                                        top: 10
                                    },
                                    delayedCall: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                end: viewCountUp ? counter : 0,
                                                duration: 8
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: from === "admins" ? "" : "+"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: title
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const Stats2 = ({ from = "homepage" })=>{
    const points = antd_lib_grid__WEBPACK_IMPORTED_MODULE_2___default().useBreakpoint();
    const [Total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const enrollmentCount = async ()=>{
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_8__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_10__/* .API */ .b}/enrollment-count`);
            setTotal(data?.total - 619);
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_9__["default"].error("Please try again...");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        enrollmentCount();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `counter__area ${points.md ? `${from === "admins" ? "" : "pt-150"} ` : "pt-10"}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row mb-30",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CounterBox, {
                        from: from,
                        counter: Total,
                        title: "Enrolled students",
                        image: "enrolled_students"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CounterBox, {
                        from: from,
                        counter: from === "admins" ? 17300 : 17500,
                        title: "Students Accommodated",
                        image: "queries_answered"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CounterBox, {
                        from: from,
                        counter: from === "admins" ? 4015 : 4080,
                        title: "Certified students",
                        Icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineSafetyCertificate, {
                            size: 50
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CounterBox, {
                        from: from,
                        counter: from === "admins" ? 609 : 612,
                        title: "Internships Provided",
                        Icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosGitNetwork, {
                            size: 50
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CounterBox, {
                        from: "homepage",
                        counter: 962,
                        title: "Success Stories",
                        image: "live_classes"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stats2);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;