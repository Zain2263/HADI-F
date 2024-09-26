"use strict";
exports.id = 2928;
exports.ids = [2928];
exports.modules = {

/***/ 2512:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useWorkshop),
/* harmony export */   K: () => (/* binding */ useCreateWorkshop)
/* harmony export */ });
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9701);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3361);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useCreateWorkshop = ()=>{
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const createSubmit = async (_api, values)=>{
        if (!values.breadTitle || !values.title || !values.content || !values.outlines || // !values.image ||
        !values.conclusion || !values.dateAndTime || !values.instructor || !values.zoomLink || !values.meetingId || !values.pascodeId || !values.meetingTiming || !values.tags || values.categories.length === 0) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("All Fields are required**", {
                position: "bottom-center"
            });
            return;
        }
        const formData = new FormData();
        formData.append("breadTitle", values.breadTitle);
        formData.append("title", values.title);
        formData.append("content", values.content);
        formData.append("outlines", values.outlines);
        // formData.append("image", values.image);
        formData.append("conclusion", values.conclusion);
        formData.append("dateAndTime", values.dateAndTime);
        formData.append("instructor", values.instructor);
        formData.append("zoomLink", values.zoomLink);
        formData.append("meetingId", values.meetingId);
        formData.append("pascodeId", values.pascodeId);
        formData.append("meetingTiming", values.meetingTiming);
        formData.append("tags", values.tags);
        values.categories.forEach((category)=>{
            formData.append("categories", category);
        });
        if (values?.preImage) {
            console.log("from  pre image");
        }
        if (values?.image) {
            // console.log(values?.image);
            formData.append("image", values.image);
        }
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/${_api}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if (data.error) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(data.error, {
                    position: "bottom-center"
                });
                setLoading(false);
            } else {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Action is done successfully", {
                    position: "bottom-center"
                });
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    return {
        createSubmit,
        loading
    };
};
const useWorkshop = ()=>{
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const fetchingAllWorkshops = async ()=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/admin-workshops`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            setList(data.allworkshops);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (auth && auth.token) fetchingAllWorkshops();
    }, [
        auth && auth.token
    ]);
    const deleteWorkshop = async (id)=>{
        try {
            let ok = window?.confirm("Are you sure?");
            if (ok) {
                const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/delete/workshop/${id}`, {
                    headers: {
                        Authorization: `Bearer ${auth?.token}`
                    }
                });
                fetchingAllWorkshops();
            }
        } catch (error) {
            console.log(error);
        }
    };
    const disableWorkshop = async (id)=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/workshop/show-or-not/${id}`, {
                showOrNot: false
            }, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            if (data.ok) {
                setLoading(false);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Workshop has been disable");
                fetchingAllWorkshops();
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Try again");
        }
    };
    const enableWorkshop = async (id)=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/workshop/show-or-not/${id}`, {
                showOrNot: true
            }, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            if (data.ok) {
                setLoading(false);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Workshop has been disable");
                fetchingAllWorkshops();
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Try again");
        }
    };
    return {
        list,
        loading,
        deleteWorkshop,
        disableWorkshop,
        enableWorkshop
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1447:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1607);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout__WEBPACK_IMPORTED_MODULE_2__]);
_layout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CMSLayout = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        api: "/current-cms-user",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CMSLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;