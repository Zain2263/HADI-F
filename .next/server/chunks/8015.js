"use strict";
exports.id = 8015;
exports.ids = [8015];
exports.modules = {

/***/ 8015:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4779);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8510);
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_lu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7865);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_cg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9648);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6201);
/* harmony import */ var _LearningLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9225);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3361);
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9701);
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6371);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_11__, react_hot_toast__WEBPACK_IMPORTED_MODULE_12__, _LearningLayout__WEBPACK_IMPORTED_MODULE_13__, _context_authContext__WEBPACK_IMPORTED_MODULE_14__]);
([axios__WEBPACK_IMPORTED_MODULE_11__, react_hot_toast__WEBPACK_IMPORTED_MODULE_12__, _LearningLayout__WEBPACK_IMPORTED_MODULE_13__, _context_authContext__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const navsData = [
    {
        title: "General",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiEdit, {
            size: 22,
            color: _config_styles__WEBPACK_IMPORTED_MODULE_15__/* .styles */ .W.primaryColor
        }),
        path: "/_/general"
    },
    {
        title: "Enrollment Info",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_10__.CgFileDocument, {
            size: 22,
            color: _config_styles__WEBPACK_IMPORTED_MODULE_15__/* .styles */ .W.primaryColor
        }),
        path: "/_/enrollmentInfo"
    },
    {
        title: "Skills",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_lu__WEBPACK_IMPORTED_MODULE_4__.LuBrainCircuit, {
            size: 22,
            color: _config_styles__WEBPACK_IMPORTED_MODULE_15__/* .styles */ .W.primaryColor
        }),
        path: "/_/skills"
    },
    {
        title: "Education",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaUserGraduate, {
            size: 22,
            color: _config_styles__WEBPACK_IMPORTED_MODULE_15__/* .styles */ .W.primaryColor
        }),
        path: "/_/education"
    },
    {
        title: "Experience",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiOutlineLightBulb, {
            size: 22,
            color: _config_styles__WEBPACK_IMPORTED_MODULE_15__/* .styles */ .W.primaryColor
        }),
        path: "/_/experience"
    },
    {
        title: "Certificates",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiOutlineLightBulb, {
            size: 22,
            color: _config_styles__WEBPACK_IMPORTED_MODULE_15__/* .styles */ .W.primaryColor
        }),
        path: "/_/certificate"
    },
    {
        title: "Portfolio",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdWork, {
            size: 22,
            color: _config_styles__WEBPACK_IMPORTED_MODULE_15__/* .styles */ .W.primaryColor
        }),
        path: "/_/portfolio"
    },
    {
        title: "Settings",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdOutlineSettings, {
            size: 22,
            color: _config_styles__WEBPACK_IMPORTED_MODULE_15__/* .styles */ .W.primaryColor
        }),
        path: "/_/settings"
    }
];
const EditProfileLayout = ({ children })=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_14__/* .useAuth */ .a)();
    const pathname = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)().pathname;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const gettingCurrentProfile = async ()=>{
        setLoading(true);
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_11__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_16__/* .API */ .b}/my-profile`);
            setDisabled(data.ok);
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_12__["default"].error("Failed, try again");
            console.log(error);
        } finally{
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (auth && auth?.token) gettingCurrentProfile();
    }, [
        auth,
        auth?.token
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LearningLayout__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container rounded bg-white mb-5",
            style: {
                paddingTop: "50px"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "d-flex gap-3 d-block d-md-none pb-3 mb-1 overflow-auto",
                    children: navsData?.map((x)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            className: "text-dark",
                            style: {
                                padding: "10px",
                                borderRadius: "10px",
                                backgroundColor: `${x.path === pathname && "rgba(0,0,0,0.2)"}`
                            },
                            onClick: ()=>router.push(x.path),
                            children: x.title
                        }, x.title))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-md-3 d-none d-md-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default()), {
                                itemLayout: "horizontal",
                                dataSource: navsData,
                                renderItem: (item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default().Item), {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default().Item).Meta, {
                                            title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: item.path === "/_/general" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: item.path,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        style: {
                                                            padding: "10px",
                                                            borderRadius: "10px",
                                                            backgroundColor: `${item.path === pathname && "rgba(0,0,0,0.2)"}`
                                                        },
                                                        role: "button",
                                                        className: "d-flex justify-content-start align-items-center gap-3",
                                                        children: [
                                                            item.icon,
                                                            " ",
                                                            item.title
                                                        ]
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: !disabled ? "/_/general" : item.path,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        style: {
                                                            padding: "10px",
                                                            borderRadius: "10px",
                                                            backgroundColor: `${item.path === pathname && "rgba(0,0,0,0.2)"}`
                                                        },
                                                        role: "button",
                                                        className: `d-flex justify-content-start align-items-center gap-3 ${!disabled && "disable-pointer"}`,
                                                        children: [
                                                            item.icon,
                                                            " ",
                                                            item.title
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-md-8",
                            children: children
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditProfileLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;