"use strict";
exports.id = 7340;
exports.ids = [7340];
exports.modules = {

/***/ 7340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Co: () => (/* binding */ _useStuInst),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   kU: () => (/* binding */ _useCurrentStu)
/* harmony export */ });
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9701);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3361);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);
([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const _useCurrentStu = ()=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const authToken = auth && auth?.token;
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const getCurrentStudent = async ()=>{
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/current-student`);
            if (data.ok) {
                setLoading(false);
            }
        } catch (err) {
            setLoading(false);
            console.log(err);
            router.push("/");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (authToken) {
            getCurrentStudent();
        }
    }, [
        authToken
    ]);
    return {
        loading
    };
};
const _useStuInst = ()=>{
    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const authToken = auth && auth?.token;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        if (authToken) {
            getStuInst();
        }
    }, [
        authToken
    ]);
    const getStuInst = async ()=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/current-student-or-instructor`);
            if (data.ok) {
                setLoading(false);
            } else if (data.error) {
                setLoading(false);
                router.push("/");
            }
        } catch (err) {
            setLoading(false);
            console.log(err);
            router.push("/");
        }
    };
    return {
        loading
    };
};
const useGetUser = (_api)=>{
    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(true);
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        if (auth?.token) {
            getCurrentUser();
        }
    }, [
        auth?.token
    ]);
    const getCurrentUser = async ()=>{
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/${_api}`);
            if (data.ok) {
                setLoading(false);
            } else if (data.error) {
                setLoading(false);
                router.push("/");
            }
        } catch (err) {
            setLoading(false);
            console.log(err);
            router.push("/");
        }
    };
    return {
        loading
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetUser);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ API),
/* harmony export */   v: () => (/* binding */ toImageUrl)
/* harmony export */ });
// const baseUrl = "http://localhost:5000";
const baseUrl = "https://api.hadielearning.com";
const API = `${baseUrl}/api`;
const toImageUrl = (filePath)=>{
    return `${baseUrl}/${filePath.replace(/\\/g, "/")}`;
};


/***/ })

};
;