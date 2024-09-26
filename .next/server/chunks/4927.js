"use strict";
exports.id = 4927;
exports.ids = [4927];
exports.modules = {

/***/ 4927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2317);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _course_CourseForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4245);
/* harmony import */ var _components_ui_common_PanelHeading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6148);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_course__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6094);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_course_CourseForm__WEBPACK_IMPORTED_MODULE_3__, _actions_course__WEBPACK_IMPORTED_MODULE_6__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__]);
([_course_CourseForm__WEBPACK_IMPORTED_MODULE_3__, _actions_course__WEBPACK_IMPORTED_MODULE_6__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








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
    seoTitle: "",
    metaDescription: ""
};
const AddCourseComponent = ()=>{
    const [_values, _setValues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initValues);
    const [lectures, setLectures] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [cats, setCats] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [faqs, setFaqs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { createSubmit, loading } = (0,_actions_course__WEBPACK_IMPORTED_MODULE_6__/* .useAdminCourses */ .K6)();
    const changeHandler = (e)=>{
        if (e.target.files) {
            const selectedFile = e.target.files[0];
            if (selectedFile.size > 1024 * 1024) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].error("Image size must be less than 1MB");
                return;
            }
            // Update the state with the new file
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_PanelHeading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                Icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiPlus, {}),
                title: "Add Course",
                para: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_course_CourseForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                from: "course-create",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddCourseComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;