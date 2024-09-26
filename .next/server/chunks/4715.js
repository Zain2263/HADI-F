"use strict";
exports.id = 4715;
exports.ids = [4715];
exports.modules = {

/***/ 4715:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BL: () => (/* binding */ usersTable),
/* harmony export */   J: () => (/* binding */ useTeachers)
/* harmony export */ });
/* unused harmony export _AllStudents */
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9701);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3361);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);
([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* __next_internal_client_entry_do_not_use__ usersTable,useTeachers,_AllStudents auto */ 



const usersTable = ()=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const fetchingAllUsers = async ()=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_3__/* .API */ .b}/admin/all-user`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            setList(data.users);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        } finally{
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (auth && auth.token) fetchingAllUsers();
    }, [
        auth && auth.token
    ]);
    const deleteUser = async (id)=>{
        try {
            setLoading(true);
            let ok = window?.confirm("Are you sure?");
            if (ok) {
                const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${_config_APIs__WEBPACK_IMPORTED_MODULE_3__/* .API */ .b}/admin/delete/${id}`, {
                    headers: {
                        Authorization: `Bearer ${auth?.token}`
                    }
                });
                fetchingAllUsers();
            }
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false);
        }
    };
    return {
        list,
        loading,
        deleteUser
    };
};
const useTeachers = ()=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const [instLoading, setInstLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [teachers, setTeachers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const fetchingTeachers = async ()=>{
            try {
                setInstLoading(true);
                const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_3__/* .API */ .b}/get-all-instructors`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
                setTeachers(data);
                setInstLoading(false);
            } catch (error) {
                setInstLoading(false);
                console.log(error);
                toast.error("Try Again");
            }
        };
        if (auth && auth.token) fetchingTeachers();
    }, [
        auth && auth.token
    ]);
    return {
        instLoading,
        teachers
    };
};
const _AllStudents = ()=>{};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;