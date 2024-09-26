"use strict";
exports.id = 6094;
exports.ids = [6094];
exports.modules = {

/***/ 6094:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K6: () => (/* binding */ useAdminCourses),
/* harmony export */   VG: () => (/* binding */ _useCourseShort),
/* harmony export */   ZE: () => (/* binding */ useCourseList)
/* harmony export */ });
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9701);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3361);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// valid for all cms, lmd admins users
const useAdminCourses = ()=>{
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const createSubmit = async (_api, values)=>{
        console.log("state", // values.title,
        // values.overview,
        // values.lectures,
        // values.whyUs,
        // values.prerequisites,
        // values.benefits,
        // values.marketValue,
        // values.courseFor,
        // values.duration,
        // values.classes,
        // values.timming,
        // values.startingFrom,
        // values.regFee,
        // values.courseFee,
        // values.image,
        // values.instructor,
        // { categories: values.categories },
        values.faqs, "here");
        if (!values.title || !values.overview || !values.lectures || !values.whyUs || !values.prerequisites || !values.benefits || !values.marketValue || !values.courseFor || !values.duration || !values.timming || !values.startingFrom || !values.image || !values.instructor || values.categories.length === 0 || values.faqs.length === 0 || !values.seoTitle || !values.metaDescription) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("All Fields are required**", {
                position: "bottom-center"
            });
            return;
        }
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("overview", values.overview);
        formData.append("whyUs", values.whyUs);
        formData.append("prerequisites", values.prerequisites); // Assuming `image` is the File object from an input type="file"
        formData.append("benefits", values.benefits);
        formData.append("marketValue", values.marketValue);
        formData.append("courseFor", values.courseFor);
        formData.append("duration", values.duration);
        formData.append("classes", values.classes);
        formData.append("timming", values.timming);
        formData.append("startingFrom", values.startingFrom);
        formData.append("regFee", values.regFee);
        formData.append("courseFee", values.courseFee);
        formData.append("image", values.image);
        formData.append("instructor", values.instructor);
        formData.append("monday", values.days.monday);
        formData.append("tuesday", values.days.tuesday);
        formData.append("wednesday", values.days.wednesday);
        formData.append("thursday", values.days.thursday);
        formData.append("friday", values.days.friday);
        formData.append("saturday", values.days.saturday);
        formData.append("seoTitle", values.seoTitle);
        formData.append("metaDescription", values.metaDescription);
        values.lectures.forEach((obj, index)=>{
            formData.append(`lectures[${index}][title]`, obj.title);
            formData.append(`lectures[${index}][details]`, obj.details);
        });
        values.faqs.forEach((obj, index)=>{
            formData.append(`faqs[${index}][answer]`, obj.answer);
            formData.append(`faqs[${index}][question]`, obj.question);
        });
        values.categories.forEach((category)=>{
            formData.append("categories", category);
        });
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/${_api}`, formData);
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
const useCourseList = ()=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const fetchingAllCourses = async ()=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/admin-courses`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            setList(data.courses);
            console.log(data.courses, "here");
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    const deleteCourse = async (id)=>{
        try {
            let ok = window?.confirm("Are you sure?");
            if (ok) {
                const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/delete/course/${id}`, {
                    headers: {
                        Authorization: `Bearer ${auth?.token}`
                    }
                });
                fetchingAllCourses();
            }
        } catch (error) {
            console.log(error);
        }
    };
    const disableCourse = async (id)=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/show-or-not/${id}`, {
                showOrNot: false
            }, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            console.log(data);
            if (data.ok) {
                setLoading(false);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Course has been disable");
                fetchingAllCourses();
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Try again");
        }
    };
    const enableCourse2 = async (id)=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/show-or-not-2/${id}`, {
                showOrNot: true
            }, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            console.log(data);
            if (data.ok) {
                setLoading(false);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Course has been disable");
                fetchingAllCourses();
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Try again");
        }
    };
    const disableCourse2 = async (id)=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/show-or-not-2/${id}`, {
                showOrNot: false
            }, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            console.log(data);
            if (data.ok) {
                setLoading(false);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Course has been disable");
                fetchingAllCourses();
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Try again");
        }
    };
    const enableCourse = async (id)=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/show-or-not/${id}`, {
                showOrNot: true
            }, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            console.log(data);
            if (data.ok) {
                setLoading(false);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Course has been disable");
                fetchingAllCourses();
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Try again");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (auth && auth.token) fetchingAllCourses();
    }, [
        auth && auth.token
    ]);
    return {
        list,
        loading,
        deleteCourse,
        disableCourse,
        enableCourse2,
        disableCourse2,
        enableCourse
    };
};
const _useCourseShort = ()=>{
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [shorts, setShorts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getAllCourses();
    }, []);
    const getAllCourses = async ()=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/courses-form`);
            setShorts(data.courses);
        } catch (err) {
            console.log(err);
        } finally{
            setLoading(false);
        }
    };
    return {
        loading,
        shorts
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;