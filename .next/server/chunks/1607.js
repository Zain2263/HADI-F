"use strict";
exports.id = 1607;
exports.ids = [1607];
exports.modules = {

/***/ 5581:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ _useCommon)
/* harmony export */ });
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3361);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const _useCommon = ()=>{
    const [auth, setAuth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const logout = ()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("auth");
        setAuth({
            user: null,
            token: ""
        });
        router.push("/");
    };
    return {
        logout
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(274);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5044);
/* harmony import */ var _ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5452);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_rx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ui_common_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7360);
/* harmony import */ var _components_ui_common_active__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6012);










const AdminSidebar = ({ from = "without-sidebar" })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default()), {
        mode: "inline",
        defaultSelectedKeys: [
            "1"
        ],
        defaultOpenKeys: [
            "sub1"
        ],
        style: {
            height: from === "sidebar" ? "90%" : "100%",
            borderRight: from === "sidebar" ? 0 : "0.01rem solid #80808026",
            // background: "linear-gradient(329deg,#31af98,#0f3f5d)",
            background: "white",
            color: "#0f3f5d"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${from === "sidebar" ? "text-start" : "text-center"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_Logo__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                className: "mt-3",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {}),
                style: (0,_components_ui_common_active__WEBPACK_IMPORTED_MODULE_9__/* .active */ .b)("/", router) ? _components_ui_common_active__WEBPACK_IMPORTED_MODULE_9__/* .navsStyle */ .U : {},
                children: "Home"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                onClick: ()=>router.push("/cms"),
                className: "mt-3",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaWordpress, {}),
                children: "CMS"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                onClick: ()=>router.push("/lms"),
                className: "mt-1",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdCastForEducation, {}),
                children: "LMS"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminSidebar);


/***/ }),

/***/ 8036:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(274);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons_lib_icons_BackwardFilled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3615);
/* harmony import */ var _ant_design_icons_lib_icons_BackwardFilled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_BackwardFilled__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5044);
/* harmony import */ var _ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_common_active__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6012);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3361);
/* harmony import */ var _components_ui_common_Logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7360);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authContext__WEBPACK_IMPORTED_MODULE_8__]);
_context_authContext__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const CmsSidebar = ({ from = "without-sidebar" })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_8__/* .useAuth */ .a)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default()), {
        mode: "inline",
        defaultSelectedKeys: [
            "1"
        ],
        defaultOpenKeys: [
            "sub1"
        ],
        style: {
            height: from === "sidebar" ? "90%" : "100%",
            borderRight: from === "sidebar" ? 0 : "0.01rem solid #80808026",
            background: "white",
            color: "#0f3f5d"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${from === "sidebar" ? "text-start" : "text-center"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_Logo__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                className: "mt-3",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                onClick: ()=>router.push("/"),
                style: (0,_components_ui_common_active__WEBPACK_IMPORTED_MODULE_7__/* .active */ .b)("/", router) ? _components_ui_common_active__WEBPACK_IMPORTED_MODULE_7__/* .navsStyle */ .U : {},
                children: "Home"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                className: "mt-1",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdOutlineDashboardCustomize, {}),
                children: "Dashboard"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                className: "mt-3",
                onClick: ()=>router.push("/cms/accounts/users"),
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaChalkboardTeacher, {}),
                children: "Instructors"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                onClick: ()=>router.push("/cms/accounts/create"),
                className: "mt-1",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdOutlineCreateNewFolder, {}),
                children: "Create Acounts"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                onClick: ()=>router.push("/cms/categories"),
                className: "mt-3",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdCategory, {}),
                children: "Categories"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                onClick: ()=>router.push("/cms/course/list"),
                className: "mt-3",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdLibraryBooks, {}),
                children: "Courses"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                onClick: ()=>router.push("/cms/course/add"),
                className: "mt-1",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaPlus, {}),
                children: "Add Courses"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                onClick: ()=>router.push("/cms/workshop/list"),
                className: "mt-3",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdOutlineLibraryBooks, {}),
                children: "Workshops"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                onClick: ()=>router.push("/cms/workshop/add"),
                className: "mt-1",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaPlus, {}),
                children: "Add Workshops"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                onClick: ()=>router.push("/cms/blog/add"),
                className: "mt-3",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdAdd, {}),
                children: "Add Blog"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                onClick: ()=>router.push("/cms/blog/list"),
                className: "mt-1",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdOutlineDensitySmall, {}),
                children: "All Blogs"
            }),
            auth?.user && (auth?.user?.role === "admin" || auth?.user?.role === "reader") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                onClick: ()=>router.push("/admin"),
                className: "mt-3",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_BackwardFilled__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                children: "Back"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CmsSidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1966:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(274);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6012);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3361);
/* harmony import */ var _ant_design_icons_lib_icons_BackwardFilled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3615);
/* harmony import */ var _ant_design_icons_lib_icons_BackwardFilled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_BackwardFilled__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5044);
/* harmony import */ var _ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ui_common_Logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7360);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authContext__WEBPACK_IMPORTED_MODULE_4__]);
_context_authContext__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const LmsSidebar = ({ from = "without-sidebar" })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .a)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default()), {
        mode: "inline",
        defaultSelectedKeys: [
            "1"
        ],
        defaultOpenKeys: [
            "sub1"
        ],
        style: {
            height: from === "sidebar" ? "90%" : "100%",
            borderRight: from === "sidebar" ? 0 : "0.01rem solid #80808026",
            // background: "linear-gradient(329deg,#31af98,#0f3f5d)",
            background: "white",
            color: "#0f3f5d"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${from === "sidebar" ? "text-start" : "text-center"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_Logo__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                className: "mt-3",
                onClick: ()=>router.push("/"),
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                style: {},
                children: "Home"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                onClick: ()=>router.push("/lms"),
                className: "mt-1",
                style: (0,_components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .active */ .b)("/lms", router) ? _components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .navsStyle */ .U : {},
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdOutlineDashboardCustomize, {}),
                children: "Dashboard"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                className: "mt-2",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdOutlineDashboardCustomize, {}),
                onClick: ()=>router.push("/lms/enrollments/applications"),
                style: (0,_components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .active */ .b)("applications", router) ? _components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .navsStyle */ .U : {},
                children: "Applications"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                className: "mt-1",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdOutlineDashboardCustomize, {}),
                onClick: ()=>router.push("/lms/enrollments/charts"),
                style: (0,_components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .active */ .b)("/lms/enrollments/charts", router) ? _components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .navsStyle */ .U : {},
                children: "Enrollments Charts"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                className: "mt-3",
                style: (0,_components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .active */ .b)("course/list", router) ? _components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .navsStyle */ .U : {},
                onClick: ()=>router.push("/lms/course/list"),
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaChalkboardTeacher, {}),
                children: "Courses"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                style: (0,_components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .active */ .b)("add", router) ? _components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .navsStyle */ .U : {},
                onClick: ()=>router.push("/lms/course/add"),
                className: "mt-1",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdOutlineCreateNewFolder, {}),
                children: "Add Course"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                style: (0,_components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .active */ .b)("active-batches", router) ? _components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .navsStyle */ .U : {},
                onClick: ()=>router.push("/lms/batch/list/active"),
                className: "mt-3",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdLibraryBooks, {}),
                children: "Active Batches"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                style: (0,_components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .active */ .b)("completed-batches", router) ? _components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .navsStyle */ .U : {},
                onClick: ()=>router.push("/lms/batch/list/completed"),
                className: "mt-1",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaPlus, {}),
                children: "Completed Batches"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                style: (0,_components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .active */ .b)("create-batches", router) ? _components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .navsStyle */ .U : {},
                onClick: ()=>router.push("/lms/batch/add"),
                className: "mt-1",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdOutlineLibraryBooks, {}),
                children: "Create Batches"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                style: (0,_components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .active */ .b)("/students/list", router) ? _components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .navsStyle */ .U : {},
                onClick: ()=>router.push("/lms/students/list"),
                className: "mt-3",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaPlus, {}),
                children: "Students"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                style: (0,_components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .active */ .b)("enrolled-students", router) ? _components_ui_common_active__WEBPACK_IMPORTED_MODULE_3__/* .navsStyle */ .U : {},
                onClick: ()=>router.push("/lms/students/enrolled-students"),
                className: "mt-1",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdImageSearch, {}),
                children: "Enrolled Students"
            }),
            auth?.user && (auth?.user?.role === "admin" || auth?.user?.role === "reader") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                onClick: ()=>router.push("/admin"),
                className: "mt-3",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_BackwardFilled__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                children: "Back"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LmsSidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1607:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _actions_layouts_useGetUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7340);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5417);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9689);
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8000);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1788);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5998);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons_lib_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2458);
/* harmony import */ var _ant_design_icons_lib_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ant_design_icons_lib_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7923);
/* harmony import */ var _ant_design_icons_lib_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ant_design_icons_lib_icons_LogoutOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6076);
/* harmony import */ var _ant_design_icons_lib_icons_LogoutOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_LogoutOutlined__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3361);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _LmsSidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1966);
/* harmony import */ var _CmsSidebar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8036);
/* harmony import */ var _AdminSidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8661);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _actions_layouts_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5581);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_layouts_useGetUser__WEBPACK_IMPORTED_MODULE_1__, _context_authContext__WEBPACK_IMPORTED_MODULE_12__, _LmsSidebar__WEBPACK_IMPORTED_MODULE_14__, _CmsSidebar__WEBPACK_IMPORTED_MODULE_15__, _actions_layouts_common__WEBPACK_IMPORTED_MODULE_18__]);
([_actions_layouts_useGetUser__WEBPACK_IMPORTED_MODULE_1__, _context_authContext__WEBPACK_IMPORTED_MODULE_12__, _LmsSidebar__WEBPACK_IMPORTED_MODULE_14__, _CmsSidebar__WEBPACK_IMPORTED_MODULE_15__, _actions_layouts_common__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const { Sider, Header, Content } = (antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default());
const { useBreakpoint } = (antd_lib_grid__WEBPACK_IMPORTED_MODULE_4___default());
const PanelLayout = ({ children, api })=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_12__/* .useAuth */ .a)();
    const [drawerVisibility, setDrawerVisibility] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const { logout } = (0,_actions_layouts_common__WEBPACK_IMPORTED_MODULE_18__/* ._useCommon */ .n)();
    const { loading } = (0,_actions_layouts_useGetUser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(api);
    const breakpoints = useBreakpoint();
    const items = [
        {
            key: "1",
            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Profile"
            }),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__.FaUser, {})
        },
        {
            key: "2",
            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://www.aliyun.com",
                children: "Logout"
            }),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_LogoutOutlined__WEBPACK_IMPORTED_MODULE_11___default()), {}),
            onClick: logout
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default()), {
        style: {
            minHeight: "100vh"
        },
        children: [
            breakpoints.md && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Sider, {
                style: {
                    overflow: "auto",
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    bottom: 0
                },
                children: api.includes("lms") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LmsSidebar__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}) : api.includes("cms") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CmsSidebar__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}) : api.includes("admin") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdminSidebar__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Header, {
                        className: "bg-light",
                        style: {
                            width: "100%",
                            backgroundColor: "white !important",
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "20px",
                            alignItems: "center",
                            padding: "20px",
                            borderBottom: "0.01rem solid #80808026"
                        },
                        children: [
                            !breakpoints.md && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_9___default()), {
                                style: {
                                    fontSize: 20
                                },
                                onClick: ()=>setDrawerVisibility(true)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                style: {
                                    color: "#0f3f5d",
                                    marginLeft: `${breakpoints.md ? "200px" : "0px"}`
                                },
                                children: " Welcome Hadi, "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_6___default()), {
                                menu: {
                                    items
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_avatar__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    style: {
                                        backgroundColor: "#0f3f5d",
                                        color: "white",
                                        justifySelf: "end"
                                    },
                                    children: auth?.user?.name[0]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_drawer__WEBPACK_IMPORTED_MODULE_5___default()), {
                                // style={{ position: "absolute" }}
                                placement: "left",
                                closable: false,
                                onClose: ()=>setDrawerVisibility(false),
                                open: drawerVisibility,
                                extra: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    style: {
                                        color: "black"
                                    },
                                    onClick: ()=>setDrawerVisibility(false)
                                }),
                                children: [
                                    api.includes("lms") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LmsSidebar__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        from: "sidebar"
                                    }) : api.includes("cms") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CmsSidebar__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        from: "sidebar"
                                    }) : api.includes("admin") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdminSidebar__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        from: "sidebar"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        style: {
                                            width: "100%"
                                        },
                                        onClick: ()=>setDrawerVisibility(false),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_17__.MdClose, {})
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
                        style: {
                            minHeight: "80vh",
                            marginLeft: `${breakpoints.md ? "200px" : "0px"}`,
                            // margin: "20px",
                            // marginTop: "20px",
                            padding: "20px",
                            background: "white"
                        },
                        children: loading ? "loading..." : children
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ navsStyle),
/* harmony export */   b: () => (/* binding */ active)
/* harmony export */ });
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6371);
// import { useRouter } from "next/router";

const active = (x, router)=>{
    if (router.pathname.includes(x)) return true;
    return false;
};
const navsStyle = {
    backgroundColor: "white",
    color: _config_styles__WEBPACK_IMPORTED_MODULE_0__/* .styles */ .W.primaryColor,
    fontWeight: "bold",
    borderRight: `0.2rem solid ${_config_styles__WEBPACK_IMPORTED_MODULE_0__/* .styles */ .W.primaryColor}`,
    borderRadius: "0px"
};


/***/ }),

/***/ 6371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ styles)
/* harmony export */ });
const styles = {
    primaryColor: "#0f3f5d",
    secondaryColor: "#0fa98a",
    inputBox: {
        border: `1px solid #0f3f5d`,
        color: "#0f3f5d",
        borderRadius: "8px"
    },
    toastBootom: {
        position: "bottom-center"
    }
};


/***/ })

};
;