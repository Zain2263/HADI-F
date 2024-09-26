"use strict";
exports.id = 8142;
exports.ids = [8142];
exports.modules = {

/***/ 4168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9701);
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6371);
/* harmony import */ var _ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8268);
/* harmony import */ var _ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons_lib_icons_DownloadOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9762);
/* harmony import */ var _ant_design_icons_lib_icons_DownloadOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_DownloadOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2540);
/* harmony import */ var _ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_common_active__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6012);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8000);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_ui_common_Btn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6911);













const InstAssets = ({ assetLoading, assets, deleteAsset, addAsset, handleChange, uploadOpen, setUploadOpen, uploadingFile, setUploadingFile, title, setTitle })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-4 px-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex justify-content-between align-items-center mt-3 mb-4",
                        style: {
                            color: _config_styles__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.primaryColor,
                            ..._components_ui_common_active__WEBPACK_IMPORTED_MODULE_7__/* .navsStyle */ .U
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex justify-content-center align-items-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdWebAsset, {}),
                                " Assets"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex justify-content-between align-items-center mt-3 mb-4",
                        style: {
                            color: _config_styles__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.primaryColor
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_8___default()), {
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                            onClick: ()=>setUploadOpen(true),
                            size: "small",
                            children: "Upload"
                        })
                    }),
                    assetLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-center",
                        children: "...."
                    }),
                    assets.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-center",
                        children: "No Data"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "customScrollbar",
                        children: assets.map((x, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex justify-content-between align-items-center mb-3 px-1",
                                style: {
                                    color: _config_styles__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.primaryColor
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: x.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-center align-items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_DownloadOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                onClick: ()=>window.open((0,_config_APIs__WEBPACK_IMPORTED_MODULE_12__/* .toImageUrl */ .v)(x.file))
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_10__.IoTrashOutline, {
                                                color: "red",
                                                role: "button",
                                                onClick: ()=>deleteAsset(x._id)
                                            })
                                        ]
                                    })
                                ]
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_drawer__WEBPACK_IMPORTED_MODULE_9___default()), {
                // style={{ background: "linear-gradient(329deg,#31af98,#0f3f5d)" }}
                placement: "right",
                closable: false,
                width: 350,
                onClose: ()=>setUploadOpen(false),
                open: uploadOpen,
                extra: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {
                    onClick: ()=>setUploadOpen(false)
                }),
                title: "Upload Assets",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "form-label fw-semibold",
                                children: "File Title"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                placeholder: "Lecture Title",
                                name: "title",
                                value: title,
                                onChange: (e)=>setTitle(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "form-label fw-semibold",
                                children: "Select Asset/File"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                accept: ".pdf,.js,.docx,.jsx,.json,.jpg,.jpeg,.png,.pptx,.xlsx,.txt",
                                type: "file",
                                className: "form-control file-control",
                                name: "file",
                                onChange: (e)=>handleChange(e),
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "form-text",
                                children: "Upload file size less than or equal 1MB!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "form-text",
                                children: "Formats: .pdf,.js,.docx,.jsx,.json,.jpg,.jpeg,.png,.pptx,.xlsx,.txt"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_Btn__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        loading: assetLoading,
                        className: "my-3",
                        onClick: addAsset,
                        children: "Add Asset"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstAssets);


/***/ }),

/***/ 5296:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _actions_instructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1594);
/* harmony import */ var _components_ui_common_Btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6911);
/* harmony import */ var _components_ui_common_IconText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4952);
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9701);
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6371);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3361);
/* harmony import */ var _ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8268);
/* harmony import */ var _ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2317);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8000);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4779);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_instructor__WEBPACK_IMPORTED_MODULE_1__, _context_authContext__WEBPACK_IMPORTED_MODULE_5__]);
([_actions_instructor__WEBPACK_IMPORTED_MODULE_1__, _context_authContext__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const InstBatchFolders = ()=>{
    const { id } = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)().query;
    const batchId = id;
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .a)();
    const authToken = auth && auth?.token;
    const { fetchingAllFolders, AddFolder, deleteFolder, list, name, setName, loading, current, setCurrent, openFolder, setOpenFolder, removeAssignments } = (0,_actions_instructor__WEBPACK_IMPORTED_MODULE_1__/* ._useBatchFoldersInst */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        if (authToken && batchId) {
            fetchingAllFolders(batchId);
        }
    }, [
        authToken,
        batchId
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_card__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        style: {
                            color: _config_styles__WEBPACK_IMPORTED_MODULE_4__/* .styles */ .W.primaryColor
                        },
                        children: "Add Folders"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: ()=>AddFolder(batchId),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                name: "name",
                                value: name,
                                onChange: (e)=>setName(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_Btn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        type: "submit",
                        loading: loading,
                        onClick: ()=>AddFolder(batchId),
                        children: "Add New"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_card__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default()), {
                    loading: loading,
                    style: {
                        maxWidth: "500px"
                    },
                    itemLayout: "vertical",
                    dataSource: list,
                    renderItem: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default().Item), {
                            actions: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_IconText__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    Icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_12__.BiTrash, {
                                        color: "red",
                                        role: "button",
                                        onClick: ()=>deleteFolder(item._id, batchId)
                                    })
                                }, 1),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_IconText__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    Icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_12__.BiFolder, {
                                        role: "button",
                                        color: _config_styles__WEBPACK_IMPORTED_MODULE_4__/* .styles */ .W.primaryColor,
                                        onClick: ()=>{
                                            setCurrent(item);
                                            setOpenFolder(true);
                                        }
                                    })
                                }, 2)
                            ],
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default().Item).Meta, {
                                title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        color: _config_styles__WEBPACK_IMPORTED_MODULE_4__/* .styles */ .W.primaryColor
                                    },
                                    children: [
                                        item.name,
                                        " (",
                                        item.data?.length,
                                        ")"
                                    ]
                                })
                            })
                        })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_drawer__WEBPACK_IMPORTED_MODULE_8___default()), {
                // style={{ background: "linear-gradient(329deg,#31af98,#0f3f5d)" }}
                placement: "right",
                closable: false,
                width: 350,
                onClose: ()=>setOpenFolder(false),
                open: openFolder,
                extra: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {
                    onClick: ()=>setOpenFolder(false)
                }),
                title: current?.name,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default()), {
                    dataSource: current.data,
                    itemLayout: "horizontal",
                    renderItem: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default().Item), {
                            actions: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_12__.BiTrash, {
                                    role: "button",
                                    onClick: ()=>removeAssignments(current._id, item._id)
                                }, 1)
                            ],
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default().Item).Meta, {
                                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: ()=>window.open((0,_config_APIs__WEBPACK_IMPORTED_MODULE_13__/* .toImageUrl */ .v)(item.file)),
                                    children: item.file_name
                                })
                            })
                        })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstBatchFolders);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9041:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6371);
/* harmony import */ var _ant_design_icons_lib_icons_CheckCircleFilled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1777);
/* harmony import */ var _ant_design_icons_lib_icons_CheckCircleFilled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_CheckCircleFilled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons_lib_icons_DownloadOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9762);
/* harmony import */ var _ant_design_icons_lib_icons_DownloadOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_DownloadOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_common_active__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6012);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3361);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_student__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2043);
/* harmony import */ var _actions_instructor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1594);
/* harmony import */ var _InstAssets__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4168);
/* harmony import */ var _InstLesson__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9263);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authContext__WEBPACK_IMPORTED_MODULE_8__, axios__WEBPACK_IMPORTED_MODULE_9__, _actions_student__WEBPACK_IMPORTED_MODULE_11__, _actions_instructor__WEBPACK_IMPORTED_MODULE_12__, _InstLesson__WEBPACK_IMPORTED_MODULE_14__]);
([_context_authContext__WEBPACK_IMPORTED_MODULE_8__, axios__WEBPACK_IMPORTED_MODULE_9__, _actions_student__WEBPACK_IMPORTED_MODULE_11__, _actions_instructor__WEBPACK_IMPORTED_MODULE_12__, _InstLesson__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const InstBatchRightCol = ()=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_8__/* .useAuth */ .a)();
    const { id } = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)().query;
    const { assetLoading, assets, deleteAsset, deleteAssets, addAsset, handleChange, uploadOpen, setUploadOpen, uploadingFile, setUploadingFile, title, setTitle } = (0,_actions_instructor__WEBPACK_IMPORTED_MODULE_12__/* ._useBatchAssetInst */ .BP)(id);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InstAssets__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                assetLoading: assetLoading,
                assets: assets,
                deleteAsset: deleteAsset,
                deleteAssets: deleteAssets,
                addAsset: addAsset,
                handleChange: handleChange,
                uploadOpen: uploadOpen,
                setUploadOpen: setUploadOpen,
                uploadingFile: uploadingFile,
                setUploadingFile: setUploadingFile,
                title: title,
                setTitle: setTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_7___default()), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InstLesson__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstBatchRightCol);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9263:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _actions_instructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1594);
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6371);
/* harmony import */ var _ant_design_icons_lib_icons_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3464);
/* harmony import */ var _ant_design_icons_lib_icons_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8268);
/* harmony import */ var _ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2540);
/* harmony import */ var _ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8000);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_ui_common_active__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6012);
/* harmony import */ var _components_ui_common_Btn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6911);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_instructor__WEBPACK_IMPORTED_MODULE_1__]);
_actions_instructor__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const InstLesson = ()=>{
    const { id } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)().query;
    const batchId = id;
    const { list, loading, deleteItem, addItem, makeItCompleteItem, title, description, setTitle, setDescription, uploadOpen, setUploadOpen } = (0,_actions_instructor__WEBPACK_IMPORTED_MODULE_1__/* ._useBatchLessonInst */ .Vh)(batchId);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-4 px-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex justify-content-between align-items-center mt-3 mb-4",
                        style: {
                            color: _config_styles__WEBPACK_IMPORTED_MODULE_2__/* .styles */ .W.primaryColor,
                            ..._components_ui_common_active__WEBPACK_IMPORTED_MODULE_12__/* .navsStyle */ .U
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex justify-content-center align-items-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_11__.MdPlayLesson, {}),
                                " Lessons"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex justify-content-between align-items-center mt-3 mb-4",
                        style: {
                            color: _config_styles__WEBPACK_IMPORTED_MODULE_2__/* .styles */ .W.primaryColor
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default()), {
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                            onClick: ()=>setUploadOpen(true),
                            size: "small",
                            children: "Upload"
                        })
                    }),
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-center",
                        children: "...."
                    }),
                    list.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-center",
                        children: "No Data"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "customScrollbar",
                        children: list.map((x, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex flex-column justify-content-start align-items-start mb-3 px-1",
                                style: {
                                    color: _config_styles__WEBPACK_IMPORTED_MODULE_2__/* .styles */ .W.primaryColor
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: x.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                children: x.description
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "d-flex justify-content-center align-items-center gap-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_10__.IoTrashOutline, {
                                            color: "red",
                                            role: "button",
                                            onClick: ()=>deleteItem(x._id)
                                        })
                                    })
                                ]
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_drawer__WEBPACK_IMPORTED_MODULE_7___default()), {
                placement: "right",
                closable: false,
                width: 350,
                onClose: ()=>setUploadOpen(false),
                open: uploadOpen,
                extra: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {
                    onClick: ()=>setUploadOpen(false)
                }),
                title: "Upload Assets",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "form-label fw-semibold",
                                children: "File Title"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                placeholder: "Lecture Title",
                                name: "title",
                                value: title,
                                onChange: (e)=>setTitle(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "form-label fw-semibold",
                                children: "Description"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                type: "text",
                                className: "form-control file-control",
                                name: "description",
                                value: description,
                                onChange: (e)=>setDescription(e.target.value),
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "form-text",
                                children: "Description within 100 words"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_Btn__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        loading: loading,
                        className: "my-3",
                        onClick: addItem,
                        children: "Add Asset"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstLesson);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9713:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _actions_student__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2043);
/* harmony import */ var _components_ui_common_Btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6911);
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6371);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3361);
/* harmony import */ var _ant_design_icons_lib_icons_MessageOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8570);
/* harmony import */ var _ant_design_icons_lib_icons_MessageOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_MessageOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5998);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2317);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6190);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4779);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ReplyModel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4171);
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9701);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_student__WEBPACK_IMPORTED_MODULE_1__, _context_authContext__WEBPACK_IMPORTED_MODULE_4__, _ReplyModel__WEBPACK_IMPORTED_MODULE_14__]);
([_actions_student__WEBPACK_IMPORTED_MODULE_1__, _context_authContext__WEBPACK_IMPORTED_MODULE_4__, _ReplyModel__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const IconText = ({ icon, text, onClick })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: onClick,
        className: "d-flex align-items-center gap-1",
        children: [
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_12___default().createElement(icon),
            text
        ]
    });
const BatchComments = ({ from = "student" })=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .a)();
    const authToken = auth && auth?.token;
    const { id } = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)().query;
    const { loading: gettingLoading, fetchingOnlyBatchComments, setComment, comment, batchComments, replyModal, setReplyModal, currentComment, setCurrentComment, handleSubmit, deleteComment } = (0,_actions_student__WEBPACK_IMPORTED_MODULE_1__/* ._useBatchComments */ .Zn)();
    (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{
        if (authToken) {
            fetchingOnlyBatchComments(id);
        }
    }, [
        authToken
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_card__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex flex-column",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            value: comment,
                            onChange: (e)=>setComment(e.target.value),
                            className: "rounded-2 border border-secondary px-3 py-1 mb-2",
                            style: {
                                color: _config_styles__WEBPACK_IMPORTED_MODULE_3__/* .styles */ .W.primaryColor
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_Btn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        onClick: ()=>handleSubmit(id),
                        children: "Submit"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default()), {
                    itemLayout: "vertical",
                    size: "large",
                    loading: gettingLoading,
                    dataSource: batchComments,
                    renderItem: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default().Item), {
                            style: {
                                backgroundColor: "white",
                                borderRadius: "10px",
                                marginBottom: "15px"
                            },
                            actions: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconText, {
                                    onClick: ()=>{
                                        setReplyModal(true);
                                        setCurrentComment(item);
                                    },
                                    icon: (_ant_design_icons_lib_icons_MessageOutlined__WEBPACK_IMPORTED_MODULE_5___default()),
                                    text: "Reply"
                                }, "list-vertical-message"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: (auth?.user?._id === item?.commentBy?._id || from === "instructor") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_13__.BiTrash, {
                                        role: "button",
                                        onClick: ()=>deleteComment(id, item?._id)
                                    }, "delete-comment")
                                })
                            ],
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default().Item).Meta, {
                                avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: item?.commentBy?.image?.url?.includes("profileImage") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        src: (0,_config_APIs__WEBPACK_IMPORTED_MODULE_15__/* .toImageUrl */ .v)(item?.commentBy?.image?.url)
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        src: item?.commentBy?.image?.url
                                    })
                                }),
                                // avatar={<Avatar src={item.commentBy?.image?.url} />}
                                title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: item?.commentBy?.name
                                        }),
                                        " -",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                            style: {
                                                fontWeight: "normal"
                                            },
                                            children: moment__WEBPACK_IMPORTED_MODULE_10___default()(item?.createdAt).fromNow()
                                        })
                                    ]
                                }),
                                description: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-dark",
                                    children: item?.text
                                })
                            })
                        }, item._id)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReplyModel__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                current: currentComment,
                setCurrent: setCurrentComment,
                open: replyModal,
                setOpen: setReplyModal
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BatchComments);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ BatchCenteral_Descriptions)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./config/styles.js
var styles = __webpack_require__(6371);
// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__(2317);
var card_default = /*#__PURE__*/__webpack_require__.n(card_);
// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(8518);
var col_default = /*#__PURE__*/__webpack_require__.n(col_);
// EXTERNAL MODULE: external "antd/lib/drawer"
var drawer_ = __webpack_require__(8000);
var drawer_default = /*#__PURE__*/__webpack_require__.n(drawer_);
// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(7050);
var row_default = /*#__PURE__*/__webpack_require__.n(row_);
// EXTERNAL MODULE: external "antd/lib/statistic"
var statistic_ = __webpack_require__(52);
var statistic_default = /*#__PURE__*/__webpack_require__.n(statistic_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: external "recharts"
var external_recharts_ = __webpack_require__(3655);
;// CONCATENATED MODULE: ./components/panel/student/singleBatch/BatchCenteral/DescPeiChart.jsx


const DescPeiChart = ({ _data, COLORS })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(external_recharts_.ResponsiveContainer, {
        width: "100%",
        height: 300,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_recharts_.PieChart, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_.Pie, {
                    data: _data,
                    dataKey: "count",
                    nameKey: "courseTitle",
                    cx: "50%",
                    cy: "50%",
                    innerRadius: 60,
                    outerRadius: 80,
                    fill: "#0f3f5d",
                    children: _data.map((entry, index)=>/*#__PURE__*/ jsx_runtime.jsx(external_recharts_.Cell, {
                            fill: COLORS[index % COLORS.length]
                        }, `cell-${index}`))
                }),
                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_.Tooltip, {}),
                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_.Legend, {})
            ]
        })
    });
};
/* harmony default export */ const BatchCenteral_DescPeiChart = (DescPeiChart);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: ./components/ui/common/Btn.jsx
var Btn = __webpack_require__(6911);
// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/CloseOutlined"
var CloseOutlined_ = __webpack_require__(8268);
var CloseOutlined_default = /*#__PURE__*/__webpack_require__.n(CloseOutlined_);
;// CONCATENATED MODULE: ./components/panel/student/singleBatch/BatchCenteral/Descriptions.jsx
















const Descriptions = ({ assets, folders, lessons, comments, notice, from, heading, text, variant, addNotice, setHeading, setText, setVariant, open, setOpen, batchId })=>{
    const data = [
        {
            count: assets,
            courseId: "64919002d387054cafdc1b51",
            courseTitle: "Assets"
        },
        {
            count: folders,
            courseId: "64912dd3efcd18b51e4f7803",
            courseTitle: "Folders"
        },
        {
            count: comments,
            courseId: "64912dd3efcd18b51e4f7803",
            courseTitle: "Comments"
        },
        {
            count: lessons,
            courseId: "64912dd3efcd18b51e4f7803",
            courseTitle: "lessons"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((row_default()), {
                gutter: [
                    16,
                    16
                ],
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((col_default()), {
                        xs: 24,
                        sm: 24,
                        md: 6,
                        lg: 6,
                        children: /*#__PURE__*/ jsx_runtime.jsx((card_default()), {
                            hoverable: true,
                            role: "button",
                            bordered: false,
                            children: /*#__PURE__*/ jsx_runtime.jsx((statistic_default()), {
                                // title="Lessons"
                                value: `Lessons ${lessons}`,
                                valueStyle: {
                                    color: "#0f3f5d"
                                },
                                prefix: /*#__PURE__*/ jsx_runtime.jsx(md_.MdOutlinePlayLesson, {})
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((col_default()), {
                        xs: 24,
                        sm: 24,
                        md: 6,
                        lg: 6,
                        children: /*#__PURE__*/ jsx_runtime.jsx((card_default()), {
                            hoverable: true,
                            role: "button",
                            bordered: false,
                            children: /*#__PURE__*/ jsx_runtime.jsx((statistic_default()), {
                                value: `folders ${folders}`,
                                valueStyle: {
                                    color: "#0f3f5d"
                                },
                                prefix: /*#__PURE__*/ jsx_runtime.jsx(bs_.BsFolderSymlink, {})
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((col_default()), {
                        xs: 24,
                        sm: 24,
                        md: 6,
                        lg: 6,
                        children: /*#__PURE__*/ jsx_runtime.jsx((card_default()), {
                            hoverable: true,
                            role: "button",
                            bordered: false,
                            children: /*#__PURE__*/ jsx_runtime.jsx((statistic_default()), {
                                value: `Assets ${assets}`,
                                valueStyle: {
                                    color: "#0f3f5d"
                                },
                                prefix: /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineDownload, {})
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((col_default()), {
                        xs: 24,
                        sm: 24,
                        md: 6,
                        lg: 6,
                        children: /*#__PURE__*/ jsx_runtime.jsx((card_default()), {
                            hoverable: true,
                            role: "button",
                            bordered: false,
                            children: /*#__PURE__*/ jsx_runtime.jsx((statistic_default()), {
                                value: `Comments ${comments}`,
                                valueStyle: {
                                    color: "#0f3f5d"
                                },
                                prefix: /*#__PURE__*/ jsx_runtime.jsx(fa_.FaComments, {})
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((row_default()), {
                gutter: [
                    16,
                    16
                ],
                className: "my-4",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((col_default()), {
                        xs: 24,
                        sm: 24,
                        md: 8,
                        lg: 8,
                        children: /*#__PURE__*/ jsx_runtime.jsx((card_default()), {
                            bordered: false,
                            title: "Total Content",
                            children: /*#__PURE__*/ jsx_runtime.jsx(BatchCenteral_DescPeiChart, {
                                _data: data,
                                COLORS: [
                                    "#0f3f5d",
                                    "#00C49F",
                                    "#FFBB28",
                                    "#FF8042"
                                ]
                            })
                        })
                    }),
                    notice ? /*#__PURE__*/ jsx_runtime.jsx((col_default()), {
                        xs: 24,
                        sm: 24,
                        md: 16,
                        lg: 16,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((card_default()), {
                            bordered: false,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: `alert alert-${notice?.variant}`,
                                    role: "alert",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "alert-heading",
                                            children: notice.heading
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: notice.text
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "mb-0",
                                            children: external_moment_default()(notice.createdAt).fromNow()
                                        })
                                    ]
                                }),
                                from === "instructor" && /*#__PURE__*/ jsx_runtime.jsx(Btn/* default */.Z, {
                                    onClick: ()=>setOpen(true),
                                    children: " Update "
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ jsx_runtime.jsx((col_default()), {
                        children: /*#__PURE__*/ jsx_runtime.jsx((card_default()), {
                            bordered: false,
                            children: from === "instructor" && /*#__PURE__*/ jsx_runtime.jsx(Btn/* default */.Z, {
                                onClick: ()=>setOpen(true),
                                children: " Update "
                            })
                        })
                    })
                ]
            }),
            from === "instructor" && /*#__PURE__*/ (0,jsx_runtime.jsxs)((drawer_default()), {
                // style={{ background: "linear-gradient(329deg,#31af98,#0f3f5d)" }}
                placement: "right",
                closable: false,
                width: 350,
                onClose: ()=>setOpen(false),
                open: open,
                extra: /*#__PURE__*/ jsx_runtime.jsx((CloseOutlined_default()), {
                    onClick: ()=>setOpen(false)
                }),
                title: "Update Alert",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                className: "form-label fw-semibold",
                                children: "Heading"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                type: "text",
                                className: "form-control",
                                placeholder: "Lecture 2 will be conducted on XX-XX-XXXX",
                                name: "heading",
                                value: heading,
                                onChange: (e)=>setHeading(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                className: "form-label fw-semibold",
                                children: "Text"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                type: "text",
                                className: "form-control",
                                placeholder: "type...",
                                name: "text",
                                value: text,
                                onChange: (e)=>setText(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                className: "form-label fw-semibold",
                                children: "Variant"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                required: true,
                                className: "form-select",
                                value: variant,
                                onChange: (e)=>{
                                    setVariant(e.target.value);
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                        value: "",
                                        children: "Choose"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                        value: "info",
                                        children: "Info - Light Blue (mostly used)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                        value: "danger",
                                        children: "Red"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                        value: "success",
                                        children: "Green"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                        value: "warning",
                                        children: "Yellow"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime.jsx(Btn/* default */.Z, {
                        onClick: ()=>addNotice(batchId),
                        children: "Update"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const BatchCenteral_Descriptions = (Descriptions);


/***/ }),

/***/ 1321:
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
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7374);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9348);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _InFolders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2025);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authContext__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_5__, _InFolders__WEBPACK_IMPORTED_MODULE_9__]);
([_context_authContext__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_5__, _InFolders__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const StudentBatchFolders = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { id } = router.query;
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_1__/* .useAuth */ .a)();
    const authToken = auth && auth?.token;
    const [BatchFolders, setBatchFolders] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({});
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const fetchingOnlyBatchFolders = async (x)=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_10__/* .API */ .b}/lms/my-all-folders/${x}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            setBatchFolders(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error("Failed, try again");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (authToken && id) {
            fetchingOnlyBatchFolders(id);
        }
    }, [
        authToken,
        id
    ]);
    const CallAgain = ()=>{
        fetchingOnlyBatchFolders(id);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default()), {
                title: "Folders",
                className: "my-4",
                children: [
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: "loading.."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_3___default()), {
                        wrap: true,
                        children: BatchFolders.map((x)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_4___default()), {
                                title: x?.name,
                                className: "d-flex align-items-center flex-column justify-content-center mx-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaFolder, {
                                        color: "#0f3f5d",
                                        size: 40,
                                        role: "button",
                                        onClick: ()=>{
                                            setCurrent(x);
                                            setOpen(true);
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                        children: [
                                            x.name.substring(0, 6),
                                            ".."
                                        ]
                                    })
                                ]
                            }, x._id))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InFolders__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                CallAgain: CallAgain,
                open: open,
                setOpen: setOpen,
                current: current,
                setCurrent: setCurrent,
                auth: auth,
                BatchFolders: BatchFolders
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StudentBatchFolders);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2025:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9701);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4779);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6418);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6201);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__]);
([axios__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const InFolders = ({ open, setOpen, current, auth, setCurrent, CallAgain })=>{
    const [file_name, setFile_name] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    // const [public_id, setPublic_id] = useState("");
    const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const handleChange = (e)=>{
        const { files } = e.target;
        const allowedExtensions = [
            "pdf",
            "js",
            "docx",
            "jsx",
            "json",
            "jpg",
            "jpeg",
            "png",
            "pptx",
            "xlsx",
            "txt"
        ];
        let file = e.target.files[0];
        if (file) {
            let fileExtension = file.name.split(".").pop().toLowerCase();
            if (!allowedExtensions.includes(fileExtension)) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error("Unsupported file type!");
                e.target.value = null;
            } else {
                let fileSize;
                fileSize = files[0].size / 1024 / 1024;
                if (fileSize > 1) {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error("The file size greater than 1 MB. Make sure less than 1 MB.", {
                        style: {
                            border: "1px solid #ff0033",
                            padding: "16px",
                            color: "#ff0033"
                        },
                        iconTheme: {
                            primary: "#ff0033",
                            secondary: "#FFFAEE"
                        }
                    });
                    e.target.value = null;
                    return;
                }
                setFile(files[0]);
            }
        }
    };
    const addAssignments = async (file, file_name, x)=>{
        if (!file && !file_name) {
            return react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error("Requried**");
        }
        setUploading(true);
        const _formData = new FormData();
        _formData.append("file_name", file_name);
        _formData.append("file", file);
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].put(`${_config_APIs__WEBPACK_IMPORTED_MODULE_8__/* .API */ .b}/lms/stu-add-assignments/${x}`, _formData, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            if (data.ok) {
                setUploading(false);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.success("added", {
                    position: "bottom-center"
                });
                CallAgain();
                setCurrent({
                    ...current,
                    data: [
                        ...current.data,
                        data.singleData
                    ]
                });
                setFile_name("");
                setFile("");
                setPublic_id("");
            } else if (data.error) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error(data.error, {
                    position: "bottom-center"
                });
            }
        } catch (error) {
            setUploading(false);
        // toast.error(error);
        }
    };
    const removeAssignments = async (x, y)=>{
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].put(`${_config_APIs__WEBPACK_IMPORTED_MODULE_8__/* .API */ .b}/lms/remove-assignment/${x}/${y}`, {}, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            if (data.ok) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.success("Removed");
                CallAgain();
                setCurrent({
                    ...current,
                    data: current.data.filter((x)=>x._id !== y)
                });
            }
        } catch (error) {
            setUploading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error(error);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default()), {
        title: current?.name,
        top: 20,
        width: 800,
        open: open,
        onOk: ()=>{
            addAssignments(file, file_name, current._id);
        // setOpen(false);
        },
        onCancel: ()=>setOpen(false),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "row align-items-center",
                onSubmit: ()=>addAssignments(file, file_name, current._id),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-6 form-group",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "File Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                value: file_name,
                                required: true,
                                onChange: (e)=>setFile_name(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-6 form-group",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "form-label fw-semibold",
                                children: "Select File"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "file",
                                className: "form-control file-control",
                                name: "file",
                                onChange: handleChange,
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "form-text",
                                children: "Upload file size less than or equal 5MB!"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: " Uploaded Files "
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default()), {
                loading: uploading,
                dataSource: current.data,
                itemLayout: "horizontal",
                renderItem: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default().Item), {
                        actions: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: auth?.user?._id === item.stu_id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiTrash, {
                                    role: "button",
                                    onClick: ()=>removeAssignments(current._id, item._id)
                                })
                            })
                        ],
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default().Item).Meta, {
                            title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: ()=>window.open((0,_config_APIs__WEBPACK_IMPORTED_MODULE_8__/* .toImageUrl */ .v)(item.file)),
                                children: item.file_name
                            }),
                            description: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    current?._id,
                                    " - ",
                                    item?._id
                                ]
                            })
                        })
                    })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InFolders);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _actions_student__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2043);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3361);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5998);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2317);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4779);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6418);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6371);
/* harmony import */ var _components_ui_common_Btn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6911);
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9701);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_student__WEBPACK_IMPORTED_MODULE_1__, _context_authContext__WEBPACK_IMPORTED_MODULE_2__]);
([_actions_student__WEBPACK_IMPORTED_MODULE_1__, _context_authContext__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ReplyModel = ({ current, setCurrent, open, setOpen })=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();
    const authToken = auth && auth?.token;
    const { fetchingAllComments, handleSubmit, deleteComment, comment, setComment, allComments, fetchingLoading, loading } = (0,_actions_student__WEBPACK_IMPORTED_MODULE_1__/* ._useBatchCommentReply */ .hD)();
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (authToken && current._id) {
            fetchingAllComments(current._id);
        }
    }, [
        authToken,
        current._id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_modal__WEBPACK_IMPORTED_MODULE_6___default()), {
        title: current.name,
        centered: true,
        width: 700,
        open: open,
        onOk: ()=>{
            setOpen(false);
        },
        onCancel: ()=>setOpen(false),
        footer: null,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                marginTop: "20px"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        backgroundColor: "#ededed",
                        padding: "20px",
                        borderRadius: "5px",
                        marginBottom: "10px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: current.commentBy?.name
                        }),
                        " -",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                            style: {
                                fontWeight: "normal"
                            },
                            children: moment__WEBPACK_IMPORTED_MODULE_8___default()(current.createdAt).fromNow()
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                current.text,
                                " "
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_card__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "d-flex flex-column",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                value: comment,
                                onChange: (e)=>setComment(e.target.value),
                                className: "rounded-2 border border-secondary px-3 py-1 mb-2",
                                style: {
                                    color: _config_styles__WEBPACK_IMPORTED_MODULE_9__/* .styles */ .W.primaryColor
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_Btn__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            onClick: ()=>handleSubmit(current._id),
                            children: "Submit"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default()), {
                    itemLayout: "vertical",
                    size: "large",
                    loading: fetchingLoading,
                    dataSource: allComments,
                    renderItem: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default().Item), {
                            actions: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: auth?.user?._id === item.replyBy._id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        role: "button",
                                        className: "text-danger",
                                        onClick: ()=>deleteComment(current._id, item._id),
                                        children: "delete"
                                    })
                                })
                            ],
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default().Item).Meta, {
                                avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: item.replyBy?.image?.url?.includes("profileImage") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: (0,_config_APIs__WEBPACK_IMPORTED_MODULE_11__/* .toImageUrl */ .v)(item.replyBy?.image?.url)
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: item.replyBy?.image?.url
                                    })
                                }),
                                // avatar={<Avatar src={item.replyBy?.image?.url} />}
                                title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: item.replyBy?.name
                                        }),
                                        " -",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                            style: {
                                                fontWeight: "normal"
                                            },
                                            children: moment__WEBPACK_IMPORTED_MODULE_8___default()(item.createdAt).fromNow()
                                        })
                                    ]
                                }),
                                description: item.text
                            })
                        }, item._id)
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReplyModel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3803:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _actions_student__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2043);
/* harmony import */ var _components_ui_common_PanelHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6148);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3361);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Descriptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3484);
/* harmony import */ var _Folders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1321);
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9713);
/* harmony import */ var _actions_instructor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1594);
/* harmony import */ var _components_panel_instructor_singleBatch_InstBatchFolders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5296);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_student__WEBPACK_IMPORTED_MODULE_1__, _context_authContext__WEBPACK_IMPORTED_MODULE_3__, _Folders__WEBPACK_IMPORTED_MODULE_6__, _Comments__WEBPACK_IMPORTED_MODULE_7__, _actions_instructor__WEBPACK_IMPORTED_MODULE_8__, _components_panel_instructor_singleBatch_InstBatchFolders__WEBPACK_IMPORTED_MODULE_9__]);
([_actions_student__WEBPACK_IMPORTED_MODULE_1__, _context_authContext__WEBPACK_IMPORTED_MODULE_3__, _Folders__WEBPACK_IMPORTED_MODULE_6__, _Comments__WEBPACK_IMPORTED_MODULE_7__, _actions_instructor__WEBPACK_IMPORTED_MODULE_8__, _components_panel_instructor_singleBatch_InstBatchFolders__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const BatchCenteral = ({ batchId, showCenteral, from = "student" })=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const authToken = auth && auth?.token;
    const { assets, folders, lessons, comments, notice, infoLoading, gettingStatsBatch, batch } = (0,_actions_student__WEBPACK_IMPORTED_MODULE_1__/* ._useBatchInfo */ .El)();
    const { batch: instBatch, assets: instAssets, folders: instFolders, lessons: instLessons, comments: instComments, loading: instLoading, gettingData: instGettingData, notice: instNotice, heading, text, variant, getNotice, addNotice, setHeading, setText, setVariant, open, setOpen } = (0,_actions_instructor__WEBPACK_IMPORTED_MODULE_8__/* ._useBatchInfoInst */ .CT)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (authToken) {
            if (from === "student") gettingStatsBatch(`lms/stu-batch-stats/${batchId}`);
            else if (from === "instructor") {
                instGettingData(batchId);
                getNotice(batchId);
            }
        }
    }, [
        authToken,
        batchId
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (infoLoading || instLoading) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "loading..."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "my-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_PanelHeading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    title: from === "student" ? batch?.title : instBatch?.title,
                    batch: batch
                })
            }),
            showCenteral === "desc" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: from === "student" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Descriptions__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    from: from,
                    assets: assets,
                    folders: folders,
                    lessons: lessons,
                    comments: comments,
                    notice: notice
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Descriptions__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    heading: heading,
                    text: text,
                    variant: variant,
                    setHeading: setHeading,
                    setVariant: setVariant,
                    setText: setText,
                    addNotice: addNotice,
                    from: from,
                    assets: instAssets,
                    folders: instFolders,
                    lessons: instLessons,
                    comments: instComments,
                    batch: instBatch,
                    notice: instNotice,
                    open: open,
                    setOpen: setOpen,
                    batchId: batchId
                })
            }),
            showCenteral === "folders" && from === "student" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Folders__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            showCenteral === "folders" && from === "instructor" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_panel_instructor_singleBatch_InstBatchFolders__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            showCenteral === "comments" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Comments__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                from: "instructor"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BatchCenteral);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6371);
/* harmony import */ var _ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8268);
/* harmony import */ var _ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons_lib_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2458);
/* harmony import */ var _ant_design_icons_lib_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8000);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9689);
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _LeftColMenus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4872);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _BatchRightCol__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5065);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3361);
/* harmony import */ var _instructor_singleBatch_InstBatchRightCol__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9041);
/* harmony import */ var _components_ui_common_Btn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6911);
/* harmony import */ var _actions_batches__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4387);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LeftColMenus__WEBPACK_IMPORTED_MODULE_8__, _BatchRightCol__WEBPACK_IMPORTED_MODULE_11__, _context_authContext__WEBPACK_IMPORTED_MODULE_12__, _instructor_singleBatch_InstBatchRightCol__WEBPACK_IMPORTED_MODULE_13__, _actions_batches__WEBPACK_IMPORTED_MODULE_15__]);
([_LeftColMenus__WEBPACK_IMPORTED_MODULE_8__, _BatchRightCol__WEBPACK_IMPORTED_MODULE_11__, _context_authContext__WEBPACK_IMPORTED_MODULE_12__, _instructor_singleBatch_InstBatchRightCol__WEBPACK_IMPORTED_MODULE_13__, _actions_batches__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const { useBreakpoint } = (antd_lib_grid__WEBPACK_IMPORTED_MODULE_5___default());
const BatchHeader = ({ setShowCenteral, showCenteral, batchId })=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_12__/* .useAuth */ .a)();
    const { updateClassId, loading, classLink, setClassLink, fetchClassLink } = (0,_actions_batches__WEBPACK_IMPORTED_MODULE_15__/* ._useUpdateClassLink */ .aE)();
    const role = auth?.user?.role;
    const points = antd_lib_grid__WEBPACK_IMPORTED_MODULE_5___default().useBreakpoint();
    const breakpoints = useBreakpoint();
    const [drawerVisibility, setDrawerVisibility] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [drawerVisibility2, setDrawerVisibility2] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [updateClassLink, setupdateClassLink] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (auth?.token) {
            fetchClassLink(batchId);
        }
    }, [
        auth?.token,
        batchId
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pb-2 border-bottom d-flex flex-row justify-content-between align-items-center ",
                children: [
                    !breakpoints.md && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {
                        style: {
                            color: _config_styles__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.primaryColor
                        },
                        onClick: ()=>setDrawerVisibility(true)
                    }),
                    breakpoints.md && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        style: {
                            color: _config_styles__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.primaryColor,
                            fontWeight: "600"
                        },
                        children: [
                            "Welcome ",
                            auth?.user?.name
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex flex-row justify-content-center align-items-center gap-2",
                        style: {
                            color: _config_styles__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.primaryColor,
                            fontWeight: "600"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "d-flex flex-row justify-content-center align-items-center gap-1 border-end px-1",
                                children: role === "student" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: classLink,
                                    target: "_",
                                    className: "d-flex justify-content-center align-items-center gap-1 _link",
                                    role: "button",
                                    children: "Join Class"
                                }) : role === "instructor" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>setupdateClassLink(true),
                                    className: "",
                                    role: "button",
                                    children: "Update Link"
                                })
                            }),
                            !points.md && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "d-flex flex-row justify-content-center align-items-center ",
                                onClick: ()=>setDrawerVisibility2(true),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdWebAsset, {}),
                                    "Assets"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_drawer__WEBPACK_IMPORTED_MODULE_4___default()), {
                // style={{ background: "linear-gradient(329deg,#31af98,#0f3f5d)" }}
                placement: "left",
                closable: false,
                width: 250,
                onClose: ()=>setDrawerVisibility(false),
                open: drawerVisibility,
                extra: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {
                    onClick: ()=>setDrawerVisibility(false)
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LeftColMenus__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    setShowCenteral: setShowCenteral,
                    showCenteral: showCenteral
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_drawer__WEBPACK_IMPORTED_MODULE_4___default()), {
                // style={{ background: "linear-gradient(329deg,#31af98,#0f3f5d)" }}
                placement: "right",
                closable: false,
                width: 250,
                onClose: ()=>setDrawerVisibility2(false),
                open: drawerVisibility2,
                extra: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {
                    onClick: ()=>setDrawerVisibility2(false)
                }),
                children: [
                    role === "student" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BatchRightCol__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                    role === "instructor" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_instructor_singleBatch_InstBatchRightCol__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_drawer__WEBPACK_IMPORTED_MODULE_4___default()), {
                style: {
                    borderTopLeftRadius: "40px",
                    borderTopRightRadius: "40px"
                },
                placement: "bottom",
                closable: false,
                width: 250,
                onClose: ()=>setupdateClassLink(false),
                open: updateClassLink,
                extra: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {
                    onClick: ()=>setupdateClassLink(false)
                }),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex flex-column justify-content-start align-items-center ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default()), {
                            value: classLink,
                            onChange: (e)=>setClassLink(e.target.value),
                            style: {
                                maxWidth: "600px"
                            },
                            placeholder: "Update class link e:g https://something.com/someid123",
                            className: "mb-2"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_Btn__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            loading: loading,
                            onClick: ()=>updateClassId(batchId, classLink),
                            children: "Update"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BatchHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5065:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6371);
/* harmony import */ var _ant_design_icons_lib_icons_CheckCircleFilled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1777);
/* harmony import */ var _ant_design_icons_lib_icons_CheckCircleFilled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_CheckCircleFilled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons_lib_icons_DownloadOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9762);
/* harmony import */ var _ant_design_icons_lib_icons_DownloadOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_DownloadOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_common_active__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6012);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3361);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9648);
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9701);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_student__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2043);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authContext__WEBPACK_IMPORTED_MODULE_8__, axios__WEBPACK_IMPORTED_MODULE_9__, _actions_student__WEBPACK_IMPORTED_MODULE_11__]);
([_context_authContext__WEBPACK_IMPORTED_MODULE_8__, axios__WEBPACK_IMPORTED_MODULE_9__, _actions_student__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const BatchRightCol = ()=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_8__/* .useAuth */ .a)();
    const authToken = auth && auth?.token;
    const { id } = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)().query;
    const { fetchingOnlyBatchLessons, fetchingSingleData, allAssets, assetloading, batchLessons, lessonsLoading } = (0,_actions_student__WEBPACK_IMPORTED_MODULE_11__/* ._useBatchAssetLessons */ .Nx)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (authToken && id) {
            fetchingSingleData(id);
            fetchingOnlyBatchLessons(id);
        }
    }, [
        authToken,
        id
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-4 px-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex justify-content-between align-items-center mt-3 mb-4",
                        style: {
                            color: _config_styles__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.primaryColor,
                            ..._components_ui_common_active__WEBPACK_IMPORTED_MODULE_6__/* .navsStyle */ .U
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex justify-content-center align-items-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdWebAsset, {}),
                                " Assets"
                            ]
                        })
                    }),
                    assetloading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-center",
                        children: "...."
                    }),
                    allAssets.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-center",
                        children: "No Data"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "customScrollbar",
                        children: allAssets.map((x, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex justify-content-between align-items-center mb-3 px-1",
                                style: {
                                    color: _config_styles__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.primaryColor
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: x.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_DownloadOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        onClick: ()=>window.open((0,_config_APIs__WEBPACK_IMPORTED_MODULE_12__/* .toImageUrl */ .v)(x.file))
                                    })
                                ]
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_7___default()), {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-4 px-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex justify-content-between align-items-center mt-3 mb-4",
                        style: {
                            color: _config_styles__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.primaryColor,
                            ..._components_ui_common_active__WEBPACK_IMPORTED_MODULE_6__/* .navsStyle */ .U
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex justify-content-center align-items-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdPlayLesson, {}),
                                " Lessons"
                            ]
                        })
                    }),
                    lessonsLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-center",
                        children: "...."
                    }),
                    batchLessons.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-center",
                        children: "No Data"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "customScrollbar",
                        children: batchLessons?.map((x, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex flex-column justify-content-start align-items-start mb-3 px-1",
                                style: {
                                    color: _config_styles__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.primaryColor
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-center align-items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: x?.title
                                            }),
                                            x.completed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_CheckCircleFilled__WEBPACK_IMPORTED_MODULE_2___default()), {})
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: x?.description
                                    })
                                ]
                            }, index))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BatchRightCol);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4872:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_ui_common_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7360);
/* harmony import */ var _components_ui_common_active__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6012);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3361);
/* harmony import */ var _ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2746);
/* harmony import */ var _ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons_lib_icons_BackwardOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5393);
/* harmony import */ var _ant_design_icons_lib_icons_BackwardOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_BackwardOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons_lib_icons_CommentOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42);
/* harmony import */ var _ant_design_icons_lib_icons_CommentOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_CommentOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons_lib_icons_FolderOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5298);
/* harmony import */ var _ant_design_icons_lib_icons_FolderOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_FolderOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(274);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authContext__WEBPACK_IMPORTED_MODULE_3__]);
_context_authContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const LeftColMenus = ({ setShowCenteral, showCenteral })=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-start px-3 py-1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common_Logo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "px-3 py-1",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default().Item), {
                            className: "mt-3",
                            onClick: ()=>setShowCenteral("desc"),
                            style: showCenteral === "desc" ? _components_ui_common_active__WEBPACK_IMPORTED_MODULE_2__/* .navsStyle */ .U : {},
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                            children: "Dashboard"
                        }, "1"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default().Item), {
                            className: "mt-1",
                            onClick: ()=>setShowCenteral("folders"),
                            style: showCenteral === "folders" ? _components_ui_common_active__WEBPACK_IMPORTED_MODULE_2__/* .navsStyle */ .U : {},
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_FolderOutlined__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                            children: "Folders"
                        }, "2"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default().Item), {
                            className: "mt-1",
                            onClick: ()=>setShowCenteral("comments"),
                            style: showCenteral === "comments" ? _components_ui_common_active__WEBPACK_IMPORTED_MODULE_2__/* .navsStyle */ .U : {},
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_CommentOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                            children: "Comments"
                        }, "3"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_8___default().Item), {
                            className: "mt-4",
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_BackwardOutlined__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                href: auth?.user?.role === "instructor" ? "/instructor" : "/student/learning",
                                children: " Back"
                            })
                        }, "4")
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftColMenus);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Btn = ({ onClick, icon, children, className, loading })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: className,
        icon: icon,
        onClick: onClick,
        loading: loading,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Btn);


/***/ }),

/***/ 4952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7374);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const IconText = ({ Icon, text, onClick })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: onClick,
        className: "d-flex justify-content-center align-items-center gap-2",
        children: [
            Icon,
            text
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconText);


/***/ }),

/***/ 6012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ navsStyle),
/* harmony export */   b: () => (/* binding */ active)
/* harmony export */ });
/* harmony import */ var _config_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6371);
// import { useRouter } from "next/router";

const active = (x, router)=>{
    if (router.pathname.includes(x)) return true;
    return false;
};
const navsStyle = {
    backgroundColor: "white",
    color: _config_styles__WEBPACK_IMPORTED_MODULE_0__/* .styles */ .W.primaryColor,
    fontWeight: "bold",
    borderRight: `0.2rem solid ${_config_styles__WEBPACK_IMPORTED_MODULE_0__/* .styles */ .W.primaryColor}`,
    borderRadius: "0px"
};


/***/ }),

/***/ 6371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ styles)
/* harmony export */ });
const styles = {
    primaryColor: "#0f3f5d",
    secondaryColor: "#0fa98a",
    inputBox: {
        border: `1px solid #0f3f5d`,
        color: "#0f3f5d",
        borderRadius: "8px"
    },
    toastBootom: {
        position: "bottom-center"
    }
};


/***/ })

};
;