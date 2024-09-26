"use strict";
exports.id = 7695;
exports.ids = [7695];
exports.modules = {

/***/ 3927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Testimoniols)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./data/testimonials.js
const testimonialsData = [
    {
        name: "Rida Jawaid (SEO)",
        review: "You are doing a great job. Your courses are premium, and we are so eager to learn from your staff. I am more confident now and thankful to you for this favor. May Allah give you everything you wish for. Ameen",
        img: "/images/testimonials/rida.webp"
    },
    {
        name: "Muneeb Tariq ( Digital Media Marketing)",
        review: "This platform is very helpful and knowledgeable. Free courses are a huge plus for this platform at this time. We are really grateful to Hadi e-learning and your team's cooperation",
        img: "/images/testimonials/muneeb.webp"
    },
    {
        name: "Syed Uzair Abbas ( Wordpress Course) ",
        review: "Just finished Hadi E-Learning's WordPress course; it's incredibly well-structured. Instructor Sir Hunzala Baloch is knowledgeable and responsive. Already signed up for their Shopify course. Highly recommend Hadi E-Learning for education seekers!",
        img: "/images/testimonials/uzair.webp"
    },
    {
        name: "Zubia Khan (Graphic Designing Course)",
        review: "Hadi E-LEARNING's graphic designing course was comprehensive and well-structured. I gained valuable skills and confidence, thanks to the supportive instructors. Ready to take on real-world projects!",
        img: "/images/testimonials/zubia.webp"
    },
    {
        name: "Khudija Yasir (VA Amazon course)",
        review: "My name is Khudija Yasir, and I successfully completed the VA Amazon course from Hadi Learning under the guidance of Maam Maham Shah. I have also done an internship with them. I am pleased to announce that I am running my Amazon account successfully.",
        img: "/images/testimonials/khudija.webp"
    },
    {
        name: "Alizah Jamal",
        review: "The 2-month graphic designing course has been amazing so far! I've gained a ton of new knowledge and the instructor is super helpful and supportive. It's been a fantastic experience!"
    },
    {
        name: "Owais Khanzada",
        review: "Experience is amazing, being at Karachi and connecting with Hadi e learning was super smooth, and the mentor Ms Zahra Mohsin she's got immense knowledge regarding SEO , her friendly and cooperative nature makes it even more simple and easier to understand, highly recommended ☺️"
    },
    {
        name: "Ubaid Ali",
        review: "I've been learning React JS through Hadi E-learning, and I can't express how grateful I am for the experience. The way they present complex concepts with simplicity and clarity is truly commendable. The examples they provide are not only relevant but also incredibly helpful in solidifying my understanding. Thanks to their efforts, I've gained a new level of confidence in my React skills."
    },
    {
        name: "Ayesha Hafeez",
        review: "I really want to appreciate Hadi eLearning platform because they provide high quality education in their classes. Currently, i am enroll in Seo course and the instructor explain everything very well. It's a best platform to learn and grow."
    },
    {
        name: "M. Zain Hassan Sabri",
        review: "Hadi E-Learning is a great platform for students who wants to learn new things while sitting at home and the tutors are much better than any other institute. They make sure you learn everything and teaches you in the best way possible."
    },
    {
        name: "Jannat Awan",
        review: "I recently had the opportunity to enroll in the Hadi E-learning Free WordPress Course, and I must say it exceeded my expectations. The course content was comprehensive and well-structured, making it easy for beginners like me to grasp the fundamentals of WordPress."
    }
];

// EXTERNAL MODULE: external "antd/lib/avatar"
var avatar_ = __webpack_require__(5998);
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar_);
// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__(2317);
var card_default = /*#__PURE__*/__webpack_require__.n(card_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-fast-marquee"
var external_react_fast_marquee_ = __webpack_require__(5700);
var external_react_fast_marquee_default = /*#__PURE__*/__webpack_require__.n(external_react_fast_marquee_);
;// CONCATENATED MODULE: ./components/ui/common/Testimoniols.jsx






const Testimonials = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "testimonial__area pb-140 pt-50",
            style: {
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "section__title section__title-3 mb-30",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "",
                                children: "Testimonials"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "",
                                children: "What students are saying"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mb-15",
                        children: /*#__PURE__*/ jsx_runtime.jsx((external_react_fast_marquee_default()), {
                            gradient: false,
                            speed: 60,
                            pauseOnHover: true,
                            pauseOnClick: true,
                            delay: 0,
                            play: true,
                            direction: "right",
                            children: testimonialsData?.slice(0, 5)?.map((x)=>/*#__PURE__*/ jsx_runtime.jsx((card_default()), {
                                    hoverable: true,
                                    className: "mx-4 my-2 ",
                                    style: {
                                        width: "350px"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "d-flex flex-column align-items-start gap-3 ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: x.review
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "d-flex  align-items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((avatar_default()), {
                                                        src: x.img ?? x.img,
                                                        alt: "studentimg",
                                                        size: "large"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                        children: x.name
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, x.id))
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((external_react_fast_marquee_default()), {
                        gradient: false,
                        speed: 40,
                        pauseOnHover: true,
                        pauseOnClick: true,
                        delay: 0,
                        play: true,
                        direction: "left",
                        children: testimonialsData.slice(5)?.map((x)=>/*#__PURE__*/ jsx_runtime.jsx((card_default()), {
                                hoverable: true,
                                className: "mx-4 my-2 ",
                                style: {
                                    width: "350px"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "d-flex flex-column align-items-start gap-3 ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: x.review
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-flex  align-items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((avatar_default()), {
                                                    src: x.img ?? x.img,
                                                    alt: "studentimg",
                                                    size: "large"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                    children: x.name
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, x.id))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Testimoniols = (Testimonials);


/***/ }),

/***/ 9701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ API),
/* harmony export */   v: () => (/* binding */ toImageUrl)
/* harmony export */ });
// const baseUrl = "http://localhost:5000";
const baseUrl = "https://api.hadielearning.com";
const API = `${baseUrl}/api`;
const toImageUrl = (filePath)=>{
    return `${baseUrl}/${filePath.replace(/\\/g, "/")}`;
};


/***/ })

};
;