"use strict";
exports.id = 4624;
exports.ids = [4624];
exports.modules = {

/***/ 4624:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9701);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3361);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2317);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _course_CourseForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4245);
/* harmony import */ var _components_ui_common_PanelHeading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6148);
/* harmony import */ var _ant_design_icons_lib_icons_EditFilled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7941);
/* harmony import */ var _ant_design_icons_lib_icons_EditFilled__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_EditFilled__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_course__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6094);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authContext__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_3__, _course_CourseForm__WEBPACK_IMPORTED_MODULE_5__, _actions_course__WEBPACK_IMPORTED_MODULE_8__, react_hot_toast__WEBPACK_IMPORTED_MODULE_9__]);
([_context_authContext__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_3__, _course_CourseForm__WEBPACK_IMPORTED_MODULE_5__, _actions_course__WEBPACK_IMPORTED_MODULE_8__, react_hot_toast__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* __next_internal_client_entry_do_not_use__ default auto */ 










const initDays = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false
};
const initValues = {
    title: "",
    overview: "",
    whyUs: "",
    prerequisites: "",
    benefits: "",
    marketValue: "",
    courseFor: "",
    duration: "",
    classes: 0,
    timming: "",
    startingFrom: "",
    regFee: 0,
    courseFee: 0,
    days: initDays,
    image: "",
    instructor: "",
    preImage: ""
};
const EditCourseComponent = ({ id })=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_1__/* .useAuth */ .a)();
    const authToken = auth && auth.token;
    const [_values, _setValues] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(initValues);
    const [singleLoading, setSingleLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [lectures, setLectures] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const [cats, setCats] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const [faqs, setFaqs] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { createSubmit, loading } = (0,_actions_course__WEBPACK_IMPORTED_MODULE_8__/* .useAdminCourses */ .K6)();
    const fetchSingleCourse = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async ()=>{
        try {
            setSingleLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_10__/* .API */ .b}/admin/edit/course/${id}`);
            _setValues(data);
            _setValues((prev)=>({
                    ...prev,
                    preImage: data?.image
                }));
            _setValues((prev)=>({
                    ...prev,
                    image: ""
                }));
            // console.log({ data });
            _setValues((prev)=>({
                    ...prev,
                    days: {
                        ...prev.days,
                        monday: data?.monday,
                        tuesday: data?.tuesday,
                        wednesday: data?.wednesday,
                        thursday: data?.thursday,
                        friday: data?.friday,
                        saturday: data?.saturday
                    }
                }));
            let arr = [];
            data?.categories.map((c)=>arr.push(c.name));
            setCats(arr);
            setLectures(data?.lectures);
            setFaqs(data?.faqs);
            setSingleLoading(false);
        } catch (error) {
            setSingleLoading(false);
            console.log(error);
        }
    }, [
        id && authToken
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (id && authToken) {
            fetchSingleCourse();
        }
    }, [
        fetchSingleCourse
    ]);
    // functions that can be in one place
    const changeHandler = (e)=>{
        if (e.target.files) {
            // Update the state with the new file
            const selectedFile = e.target.files[0];
            if (selectedFile.size > 1024 * 1024) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_9__["default"].error("Image size must be less than 1MB");
                return;
            }
            _setValues((prevValues)=>({
                    ...prevValues,
                    image: e.target.files[0]
                }));
        } else {
            // For other inputs, update the state normally
            const { name, value } = e.target;
            _setValues((prevValues)=>({
                    ...prevValues,
                    [name]: value
                }));
        }
    };
    const handleAddLecture = (e)=>{
        e.preventDefault();
        setLectures([
            ...lectures,
            {
                title: "",
                details: ""
            }
        ]);
    };
    const handleAddFaqs = (e)=>{
        e.preventDefault();
        setFaqs([
            ...faqs,
            {
                question: "",
                answer: ""
            }
        ]);
    };
    const handleLectureChange = (index, e)=>{
        const { name, value } = e.target;
        const updatedLectures = [
            ...lectures
        ];
        updatedLectures[index][name] = value;
        setLectures(updatedLectures);
    };
    const handleFaqsChange = (index, e)=>{
        const { name, value } = e.target;
        const updatedFaqs = [
            ...faqs
        ];
        updatedFaqs[index][name] = value;
        setFaqs(updatedFaqs);
    };
    const handleRemoveLecture = (index)=>{
        const updatedLectures = [
            ...lectures
        ];
        updatedLectures.splice(index, 1);
        setLectures(updatedLectures);
    };
    const handleRemoveFAQs = (index)=>{
        const updatedFAQs = [
            ...faqs
        ];
        updatedFAQs.splice(index, 1);
        setFaqs(updatedFAQs);
    };
    console.log(faqs, "here are the faqs");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_PanelHeading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                Icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_EditFilled__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                title: "Course Edit",
                para: "Note** please upload just webp images, that will benifical for hadi elearning website."
            }),
            singleLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-center my-4",
                children: "please wait..."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_course_CourseForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                courseId: id,
                from: "course-edit",
                changeHandler: changeHandler,
                _values: _values,
                _setValues: _setValues,
                faqs: faqs,
                handleAddFaqs: handleAddFaqs,
                handleRemoveFAQs: handleRemoveFAQs,
                handleFaqsChange: handleFaqsChange,
                lectures: lectures,
                handleAddLecture: handleAddLecture,
                handleRemoveLecture: handleRemoveLecture,
                handleLectureChange: handleLectureChange,
                submitHandler: createSubmit,
                submitLoading: loading,
                cats: cats,
                setCats: setCats
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditCourseComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;