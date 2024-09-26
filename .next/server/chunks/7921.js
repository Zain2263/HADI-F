"use strict";
exports.id = 7921;
exports.ids = [7921];
exports.modules = {

/***/ 7921:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useMyProfile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9701);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3361);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _context_authContext__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _context_authContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useMyProfile = ()=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const authToken = auth && auth?.token;
    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [triggerFetch, setTriggerFetch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const gettingMyProfile = async ()=>{
        setLoading(true);
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/my-profile`);
            if (data.ok) {
                setProfile(data._profile);
            }
        } catch (error) {
            console.log(error);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error("Failed, try again");
        } finally{
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (authToken) {
            gettingMyProfile();
        }
    }, [
        authToken,
        triggerFetch
    ]);
    return {
        profile,
        loading,
        refetch: ()=>setTriggerFetch(!triggerFetch)
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;