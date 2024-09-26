"use strict";
exports.id = 5605;
exports.ids = [5605];
exports.modules = {

/***/ 4499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ profiles_ProfileForm)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./config/degrees.js
const degrees = [
    {
        title: "Bachelor of Arts (B.A.)",
        value: "Bachelor of Arts (B.A.)"
    },
    {
        title: "Bachelor of Science (B.S.)",
        value: "Bachelor of Science (B.S.)"
    },
    {
        title: "Bachelor of Fine Arts (BFA)",
        value: "Bachelor of Fine Arts (BFA)"
    },
    {
        title: "Bachelor of Business Administration (BBA)",
        value: "Bachelor of Business Administration (BBA)"
    },
    {
        title: "Bachelor of Engineering (B.Eng.)",
        value: "Bachelor of Engineering (B.Eng.)"
    },
    {
        title: "Bachelor of Education (B.Ed.)",
        value: "Bachelor of Education (B.Ed.)"
    },
    {
        title: "Bachelor of Technology (B.Tech)",
        value: "Bachelor of Technology (B.Tech)"
    },
    {
        title: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
        value: "Bachelor of Medicine, Bachelor of Surgery (MBBS)"
    },
    {
        title: "Master of Arts (M.A.)",
        value: "Master of Arts (M.A.)"
    },
    {
        title: "Master of Science (M.S.)",
        value: "Master of Science (M.S.)"
    },
    {
        title: "Master of Business Administration (MBA)",
        value: "Master of Business Administration (MBA)"
    },
    {
        title: "Master of Fine Arts (MFA)",
        value: "Master of Fine Arts (MFA)"
    },
    {
        title: "Master of Education (M.Ed.)",
        value: "Master of Education (M.Ed.)"
    },
    {
        title: "Master of Engineering (M.Eng.)",
        value: "Master of Engineering (M.Eng.)"
    },
    {
        title: "Master of Public Health (MPH)",
        value: "Master of Public Health (MPH)"
    },
    {
        title: "Master of Social Work (MSW)",
        value: "Master of Social Work (MSW)"
    },
    {
        title: "Master of Laws (LL.M.)",
        value: "Master of Laws (LL.M.)"
    },
    {
        title: "Doctor of Philosophy (Ph.D.)",
        value: "Doctor of Philosophy (Ph.D.)"
    },
    {
        title: "Doctor of Medicine (M.D.)",
        value: "Doctor of Medicine (M.D.)"
    },
    {
        title: "Doctor of Education (Ed.D.)",
        value: "Doctor of Education (Ed.D.)"
    },
    {
        title: "Doctor of Psychology (Psy.D.)",
        value: "Doctor of Psychology (Psy.D.)"
    },
    {
        title: "Doctor of Business Administration (DBA)",
        value: "Doctor of Business Administration (DBA)"
    },
    {
        title: "Doctor of Nursing Practice (DNP)",
        value: "Doctor of Nursing Practice (DNP)"
    },
    {
        title: "Doctor of Jurisprudence (J.D.)",
        value: "Doctor of Jurisprudence (J.D.)"
    },
    {
        title: "Juris Doctor (J.D.) - Law",
        value: "Juris Doctor (J.D.) - Law"
    },
    {
        title: "Doctor of Pharmacy (Pharm.D.)",
        value: "Doctor of Pharmacy (Pharm.D.)"
    },
    {
        title: "Doctor of Veterinary Medicine (DVM)",
        value: "Doctor of Veterinary Medicine (DVM)"
    },
    {
        title: "Associate of Arts (A.A.)",
        value: "Associate of Arts (A.A.)"
    },
    {
        title: "Associate of Science (A.S.)",
        value: "Associate of Science (A.S.)"
    },
    {
        title: "Associate of Applied Science (AAS)",
        value: "Associate of Applied Science (AAS)"
    },
    {
        title: "Associate of Engineering (AE)",
        value: "Associate of Engineering (AE)"
    },
    {
        title: "Associate of Business Administration (ABA)",
        value: "Associate of Business Administration (ABA)"
    },
    {
        title: "Postgraduate Diploma",
        value: "Postgraduate Diploma"
    },
    {
        title: "Graduate Certificate",
        value: "Graduate Certificate"
    },
    {
        title: "Professional Certificate",
        value: "Professional Certificate"
    },
    {
        title: "Vocational Diploma",
        value: "Vocational Diploma"
    },
    {
        title: "High School Diploma (Secondary Education)",
        value: "High School Diploma (Secondary Education)"
    }
];

// EXTERNAL MODULE: ./config/styles.js
var styles = __webpack_require__(6371);
// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(3800);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);
// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__(2317);
var card_default = /*#__PURE__*/__webpack_require__.n(card_);
// EXTERNAL MODULE: external "antd/lib/select"
var select_ = __webpack_require__(3526);
var select_default = /*#__PURE__*/__webpack_require__.n(select_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/profiles/ProfileForm.jsx







const ProfileForm = ({ formData, setFormData, changesFormData, addFunc, loading, which, formErrors, title })=>{
    (0,external_react_.useEffect)(()=>{
        if (formData.current) {
            setFormData({
                ...formData,
                to: ""
            });
        }
    }, [
        formData.current
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((card_default()), {
        title: title,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row",
                children: [
                    which === "edu" && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "form-group py-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                            children: " School "
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "School",
                                            name: "school",
                                            value: formData.school,
                                            onChange: changesFormData
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "form-group py-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                            children: " Degree "
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((select_default()), {
                                            mode: "multiple",
                                            allowClear: true,
                                            style: {
                                                width: "100%"
                                            },
                                            placeholder: "Please select",
                                            onChange: (v)=>setFormData({
                                                    ...formData,
                                                    degree: v
                                                }),
                                            children: degrees.map((item)=>/*#__PURE__*/ jsx_runtime.jsx((select_default()).Option, {
                                                    children: item.title
                                                }, item.value))
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    which !== "edu" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "form-group py-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    children: " Title "
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    placeholder: "eg: Full Stack Developer",
                                    name: "title",
                                    value: formData.title,
                                    onChange: changesFormData
                                })
                            ]
                        })
                    }),
                    which === "exp" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "form-group py-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    children: " Company "
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "email",
                                    className: "form-control",
                                    placeholder: "Company",
                                    name: "company",
                                    value: formData.company,
                                    onChange: changesFormData
                                })
                            ]
                        })
                    }),
                    which === "cert" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "form-group py-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    children: " Institute "
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "email",
                                    className: "form-control",
                                    placeholder: "eg: hadielearning",
                                    name: "platform",
                                    value: formData.platform,
                                    onChange: changesFormData
                                })
                            ]
                        })
                    }),
                    which === "port" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "form-group py-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    children: " Link "
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "email",
                                    className: "form-control",
                                    placeholder: "eg: hadiraza.com",
                                    name: "link",
                                    value: formData.link,
                                    onChange: changesFormData
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "form-group py-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    children: " From "
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "date",
                                    className: "form-control",
                                    placeholder: "School",
                                    name: "from",
                                    value: formData.from,
                                    onChange: changesFormData
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "form-group py-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    children: " To "
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "date",
                                    disabled: formData.current && true,
                                    className: "form-control",
                                    placeholder: "Degree",
                                    name: "to",
                                    value: formData.to,
                                    onChange: changesFormData
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "d-flex align-items-center gap-2 form-group py-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    children: " Present "
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "checkbox",
                                    name: "current",
                                    checked: formData.current,
                                    onChange: changesFormData
                                })
                            ]
                        })
                    }),
                    formErrors.from && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-danger",
                        children: formErrors.from
                    }),
                    formErrors.to && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-danger",
                        children: formErrors.to
                    })
                ]
            }),
            which === "exp" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-md-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "form-group py-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                            children: " Skills "
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            type: "text",
                            className: "form-control",
                            name: "skills",
                            value: formData.skills,
                            onChange: changesFormData
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("small", {
                            children: "eg: ReactJs, AngularJs, VueJs"
                        })
                    ]
                })
            }),
            which === "exp" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-md-12",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "form-group py-2",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                        className: "form-select",
                        name: "typeOfJob",
                        value: formData.typeOfJob,
                        onChange: changesFormData,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                value: "",
                                defaultValue: "",
                                children: "Choose type of job"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                value: "Remote - Part-Time",
                                children: " Remote - Part-Time "
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                value: "Remote - Full-Time",
                                children: " Remote - Full-Time "
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                value: "Onsite - Part-Time",
                                children: " Onsite - Part-Time "
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                value: "Onsite - Full-Time",
                                children: " Onsite - Full-Time "
                            })
                        ]
                    })
                })
            }),
            which === "exp" && formData.typeOfJob.includes("onsite") && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-md-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "form-group py-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                            children: " Location "
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            type: "text",
                            className: "form-control",
                            name: "location",
                            value: formData.location,
                            onChange: changesFormData
                        })
                    ]
                })
            }),
            (which === "edu" || which === "port") && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-md-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "form-group py-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                            children: " Description "
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                            type: "text",
                            className: "form-control",
                            placeholder: "Description",
                            name: "description",
                            checked: formData.description,
                            onChange: changesFormData
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "text-end",
                children: /*#__PURE__*/ jsx_runtime.jsx((button_default()), {
                    style: {
                        backgroundColor: styles/* styles */.W.primaryColor
                    },
                    className: "text-light",
                    loading: loading,
                    onClick: addFunc,
                    children: "Submit"
                })
            })
        ]
    });
};
/* harmony default export */ const profiles_ProfileForm = (ProfileForm);


/***/ }),

/***/ 9295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ validateDates)
/* harmony export */ });
const validateDates = (fromDateStr, toDateStr, isCurrent)=>{
    const currentDate = new Date();
    const fromDate = new Date(fromDateStr);
    const toDate = toDateStr ? new Date(toDateStr) : null;
    const errors = {};
    if (!fromDateStr) {
        errors.from = "";
    }
    if (!isCurrent && !toDateStr) {
        errors.to = ``;
    }
    if (fromDate > currentDate) {
        errors.from = "From date cannot be in the future";
    }
    if (toDate > currentDate) {
        errors.to = "To date cannot be in the future";
    }
    if (toDate && toDate > currentDate) {
        errors.to = "To date cannot be in the future";
    }
    if (toDate && fromDate > toDate) {
        errors.from = "From date cannot be after To date";
    }
    return errors;
};


/***/ })

};
;