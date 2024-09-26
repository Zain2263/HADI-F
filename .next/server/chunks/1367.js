"use strict";
exports.id = 1367;
exports.ids = [1367];
exports.modules = {

/***/ 9225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _actions_layouts_useGetUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7340);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StuHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2526);
/* harmony import */ var _components_ui_common_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2497);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3361);
/* harmony import */ var _instructor_InstHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(297);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_layouts_useGetUser__WEBPACK_IMPORTED_MODULE_1__, _StuHeader__WEBPACK_IMPORTED_MODULE_3__, _context_authContext__WEBPACK_IMPORTED_MODULE_5__, _instructor_InstHeader__WEBPACK_IMPORTED_MODULE_6__]);
([_actions_layouts_useGetUser__WEBPACK_IMPORTED_MODULE_1__, _StuHeader__WEBPACK_IMPORTED_MODULE_3__, _context_authContext__WEBPACK_IMPORTED_MODULE_5__, _instructor_InstHeader__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// its for student and instructor







const LearningLayout = ({ children })=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .a)();
    const { loading } = (0,_actions_layouts_useGetUser__WEBPACK_IMPORTED_MODULE_1__/* ._useStuInst */ .Co)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            auth?.user?.role === "student" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StuHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}) : auth?.user?.role === "instructor" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_instructor_InstHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LearningLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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