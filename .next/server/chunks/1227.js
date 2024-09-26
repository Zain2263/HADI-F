"use strict";
exports.id = 1227;
exports.ids = [1227];
exports.modules = {

/***/ 6339:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ useCategory)
/* harmony export */ });
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9701);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, react_hot_toast__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, react_hot_toast__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const useCategory = ()=>{
    const [categoriesList, setCategoriesList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const getCategories = async ()=>{
        setLoading(true);
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_3__/* .API */ .b}/categories`);
            // console.log(data);
            setCategoriesList(data);
        } catch (err) {
            console.log(err);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error("Failed, try again.");
        } finally{
            setLoading(false);
        }
    };
    const DeleteCategory = async (id)=>{
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](`${_config_APIs__WEBPACK_IMPORTED_MODULE_3__/* .API */ .b}/category/${id}`);
            getCategories();
            // setCategoriesList(categoriesList.filter((cat) => cat.slug !== id));
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].success("Category deleted");
        } catch (err) {
            console.log(err);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error("Category delete falied");
        }
    };
    const addCategory = async (e, category, setCategory)=>{
        e.preventDefault();
        if (!category) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error("Please give it a name");
            return;
        }
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${_config_APIs__WEBPACK_IMPORTED_MODULE_3__/* .API */ .b}/category`, {
                name: category
            });
            getCategories();
            setCategory("");
            setLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].success("Category created successfully");
        } catch (err) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error("Duplicate error. Try different name.");
            console.log(err);
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getCategories();
    }, []);
    return {
        categoriesList,
        loading,
        getCategories,
        DeleteCategory,
        addCategory
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