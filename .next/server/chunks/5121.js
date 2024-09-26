"use strict";
exports.id = 5121;
exports.ids = [5121];
exports.modules = {

/***/ 4387:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Eo: () => (/* binding */ _useSingleBatchId),
/* harmony export */   Rt: () => (/* binding */ _useBatches),
/* harmony export */   WG: () => (/* binding */ _useCreateOrUpdateBatches),
/* harmony export */   aE: () => (/* binding */ _useUpdateClassLink)
/* harmony export */ });
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9701);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3361);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const _useBatches = (from)=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const AuthToken = auth && auth?.token;
    const [activeList, setActiveList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [completedList, setCompletedList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const getActiveBatch = async ()=>{
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/active-batches`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            console.log(data, "data");
            setActiveList(data);
            console.log(activeList, "acttive lists");
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };
    const getCompletedBatch = async ()=>{
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/completed-batches`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            setCompletedList(data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (AuthToken) {
            if (from === "active") {
                getActiveBatch();
            } else if (from === "completed") {
                getCompletedBatch();
            }
        }
    }, [
        AuthToken
    ]);
    const markCompleted = async (x)=>{
        try {
            const ok = confirm("Are you sure? Please check all the dates");
            if (ok) {
                setLoading(true);
                const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/make-batch/${x}/complete`, {
                    headers: {
                        Authorization: `Bearer ${auth?.token}`
                    }
                });
                setLoading(false);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success(data.message);
            }
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };
    return {
        loading,
        activeList,
        completedList,
        markCompleted
    };
};
const _useCreateOrUpdateBatches = ()=>{
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const handleSubmit = async (e, _api, payloadData)=>{
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/${_api}`, payloadData, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            if (data.ok) {
                setLoading(false);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Batch Created :)");
            } else if (data.error) {
                setLoading(false);
                return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(data.error);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    const updateSubmit = async (e, _api, payloadData)=>{
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/${_api}`, payloadData, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            if (data.ok) {
                setLoading(false);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Batch Created :)");
            } else if (data.error) {
                setLoading(false);
                return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(data.error);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    return {
        loading,
        handleSubmit,
        updateSubmit
    };
};
const _useSingleBatchId = ({ id })=>{
    // state
    const [batch, setBatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (auth && auth.token) getSingleBatch({
            id
        });
    }, [
        auth && auth.token,
        id
    ]);
    const getSingleBatch = async ()=>{
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/single-batch/${id}`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            setBatch(data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };
    return {
        batch,
        loading
    };
};
const _useUpdateClassLink = ()=>{
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const [classLink, setClassLink] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const fetchClassLink = async (x)=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/class-link/${x}`);
            console.log(data, "here isthe class link");
            setClassLink(data.classLink);
        } catch (error) {} finally{
            setLoading(false);
        }
    };
    const updateClassId = async (x, classLink)=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].patch(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/add-class-link/${x}`, {
                classLink
            }, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            if (data.error) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(data.error);
            } else {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Class Link Updated");
            }
        } catch (err) {
            console.log(err);
        } finally{
            setLoading(false);
        }
    };
    return {
        updateClassId,
        loading,
        fetchClassLink,
        classLink,
        setClassLink
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6371);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const PanelHeading = ({ title, para, Icon })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "text-start mb-5",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                className: "d-flex justify-content-start align-items-start gap-2",
                style: {
                    color: _config_styles__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.primaryColor
                },
                children: [
                    Icon,
                    " ",
                    title
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                children: para
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelHeading);


/***/ })

};
;