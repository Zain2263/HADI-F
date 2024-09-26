"use strict";
exports.id = 3397;
exports.ids = [3397];
exports.modules = {

/***/ 3237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ useBlog),
/* harmony export */   s: () => (/* binding */ useCreateBlog)
/* harmony export */ });
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9701);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3361);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useCreateBlog = (from = "create")=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const create = async (_api, values)=>{
        const _formData = new FormData();
        _formData.append("title", values.title);
        _formData.append("content", values.content);
        _formData.append("outlines", values.slug);
        _formData.append("image", values.image); // Assuming `image` is the File object from an input type="file"
        _formData.append("description", values.description);
        _formData.append("seoTitle", values.seoTitle);
        _formData.append("metaDescription", values.metaDescription);
        _formData.append("tags", values.tags);
        values.categories.forEach((category)=>{
            _formData.append("categories", category);
        });
        try {
            setLoading(true);
            if (from === "create") {
                const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/${_api}`, _formData, {
                    headers: {
                        Authorization: auth && auth.token && `Bearer ${auth?.token}`
                    }
                });
                if (data?.error) {
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
            }
            if (from === "edit") {
                const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/${_api}`, _formData, {
                    headers: {
                        Authorization: auth && auth.token && `Bearer ${auth?.token}`
                    }
                });
                if (data?.error) {
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
            }
        } catch (err) {
            console.log(err);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Post create failed. Try again.");
            setLoading(false);
        }
    };
    return {
        create,
        loading
    };
};
const useBlog = ()=>{
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const fetchingAllBlogs = async ()=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/blogs-for-admin`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            setList(data);
            setLoading(false);
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Failed, try again.");
            setLoading(false);
            console.log(error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (auth && auth.token) fetchingAllBlogs();
    }, [
        auth && auth.token
    ]);
    const deleteBlog = async (id)=>{
        try {
            const confirmed = window?.confirm("Are you sure you want to delete this blog?");
            if (confirmed) {
                const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/blog/${id}`, {
                    headers: {
                        Authorization: `Bearer ${auth?.token}`
                    }
                });
                fetchingAllBlogs();
            }
        } catch (error) {
            console.log(error);
        }
    };
    return {
        list,
        loading,
        deleteBlog
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