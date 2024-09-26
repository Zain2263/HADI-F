"use strict";
exports.id = 394;
exports.ids = [394];
exports.modules = {

/***/ 394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2317);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_rate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9973);
/* harmony import */ var antd_lib_rate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_rate__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9701);
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5873);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);











const checkStringTitle = (title)=>{
    if (title?.length > 25) {
        return title.substring(0, 25) + "...";
    } else {
        return title;
    }
};
const CourseCard = ({ x })=>{
    const { screen } = (0,_screens__WEBPACK_IMPORTED_MODULE_8__/* .useScreens */ .O)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const DurationsTOHrs = (classes)=>{
        const hoursPerClass = 1.5;
        const totalCourseHours = classes * hoursPerClass;
        return totalCourseHours;
    };
    const giveSomeRates = (course)=>{
        return course?.includes("React") ? 5 : course?.includes("MERN") ? 4.5 : course?.includes("SEO") ? 4.8 : course?.includes("Shopify") ? 4.6 : course?.includes("Content") ? 4.7 : course?.includes("Designing") ? 5 : 4.5;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default()), {
            onClick: ()=>router.push(`/program/${x?.slug}`),
            hoverable: true,
            className: "mx-2",
            cover: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: x?.image?.url?.includes("courseImages") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: (0,_config_APIs__WEBPACK_IMPORTED_MODULE_10__/* .toImageUrl */ .v)(x?.image?.url),
                    alt: "",
                    height: screen.md ? 240 : !screen.md && 160
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: x?.image?.url,
                    alt: "",
                    height: screen.md ? 240 : !screen.md && 160
                })
            }),
            actions: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        marginLeft: "20px"
                    },
                    children: [
                        x?.instructor && !x?.instructor?.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaUser, {
                            size: 25,
                            color: "gray"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: x?.instructor?.image.url,
                            alt: "",
                            height: 30
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                color: "#0f3f5d",
                                fontWeight: "500",
                                marginLeft: "10px"
                            },
                            children: x?.instructor?.name
                        })
                    ]
                }, "instructor"),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    style: {
                        fontWeight: "bold",
                        color: "#0f3f5d"
                    },
                    children: [
                        x?.regFee == 0 && "Free",
                        " ",
                        x?.regFee != 0 && "PKR" + " " + x.regFee?.toLocaleString()
                    ]
                }, "price")
            ],
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex align-items-center gap-2 mb-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_rate__WEBPACK_IMPORTED_MODULE_4___default()), {
                            value: giveSomeRates(x?.title),
                            style: {
                                color: "#0f3f5d",
                                fontSize: "10px"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                            style: {
                                fontWeight: "bold"
                            },
                            children: giveSomeRates(x?.title)
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    style: {
                        fontSize: "22px"
                    },
                    role: "button",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                        href: `/program/${x?.slug}`,
                        children: checkStringTitle(x?.title)
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `mt-3  d-flex align-items-center justify-content-between `,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex align-items-center gap-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsCalendar, {
                                    size: 15
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                    style: {
                                        fontSize: "15px"
                                    },
                                    children: x?.duration
                                })
                            ]
                        }),
                        screen.md && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex align-items-center gap-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiOutlineDocumentText, {
                                    size: 18
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                    style: {
                                        fontSize: "15px"
                                    },
                                    children: [
                                        x?.classes,
                                        " classes"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex align-items-center gap-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoMdTime, {
                                    size: 18
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                    style: {
                                        fontSize: "15px"
                                    },
                                    children: [
                                        DurationsTOHrs(x?.classes),
                                        " hrs"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseCard);


/***/ }),

/***/ 5873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ useScreens)
/* harmony export */ });
const { Grid } = __webpack_require__(5725);
const useScreens = ()=>{
    const { useBreakpoint } = Grid;
    const screen = useBreakpoint();
    return {
        screen
    };
}; // export const mainUps = () => {
 //  return <div style={{ marginTop: screen.md ? "200px" : !screen.md && "150px" }}> {}
 // }


/***/ })

};
;