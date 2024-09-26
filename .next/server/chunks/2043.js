"use strict";
exports.id = 2043;
exports.ids = [2043];
exports.modules = {

/***/ 2043:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   El: () => (/* binding */ _useBatchInfo),
/* harmony export */   Nx: () => (/* binding */ _useBatchAssetLessons),
/* harmony export */   RB: () => (/* binding */ _getAllBatches),
/* harmony export */   Zn: () => (/* binding */ _useBatchComments),
/* harmony export */   hD: () => (/* binding */ _useBatchCommentReply)
/* harmony export */ });
/* unused harmony export _useFolders */
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9701);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3361);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const _getAllBatches = ()=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const authToken = auth && auth?.token;
    const [myBatches, setMyBatches] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const getAllMyBatches = async ()=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/stu-all-batches`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            setLoading(false);
            setMyBatches(data.enrolledBatches);
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Failed, try again");
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (authToken) {
            getAllMyBatches();
        }
    }, [
        authToken
    ]);
    return {
        loading,
        myBatches
    };
};
const _useBatchInfo = ()=>{
    const [infoLoading, setInfoLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [folders, setFolders] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [lessons, setLessons] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [notice, setNotice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [batch, setBatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const gettingStatsBatch = async (_api)=>{
        setInfoLoading(true);
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/${_api}`);
            setAssets(data.assets);
            setFolders(data.folders);
            setLessons(data.lessons);
            setComments(data.comments);
            setBatch(data.batch);
            setNotice(data.notice);
        } catch (error) {
            console.log(error);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Try Again");
        } finally{
            setInfoLoading(false);
        }
    };
    return {
        infoLoading,
        gettingStatsBatch,
        assets,
        folders,
        lessons,
        comments,
        notice,
        batch
    };
};
const _useBatchComments = ()=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const [batchComments, setBatchComments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [replyModal, setReplyModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [currentComment, setCurrentComment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const fetchingOnlyBatchComments = async (x)=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/all-comments/${x}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            setBatchComments(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Failed, try again");
        }
    };
    const handleSubmit = async (x)=>{
        // e.preventDefault();
        if (!comment) {
            return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("please write a message");
        }
        setLoading(true);
        const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/add-comment/${x}`, {
            text: comment
        }, {
            headers: {
                Authorization: `Bearer ${auth?.token}`
            }
        });
        if (data.ok) {
            fetchingOnlyBatchComments(x);
            setComment("");
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("added");
            setLoading(false);
        }
        try {} catch (error) {
            setLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Failed, please try again");
        }
    };
    const deleteComment = async (batchId, commentId)=>{
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/delete-comment/${commentId}`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            if (data.ok) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("deleted");
                fetchingOnlyBatchComments(batchId);
            }
        } catch (error) {
            console.log(error);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Failed, try again");
        }
    };
    return {
        fetchingOnlyBatchComments,
        batchComments,
        loading,
        replyModal,
        setReplyModal,
        currentComment,
        setCurrentComment,
        comment,
        setComment,
        handleSubmit,
        deleteComment
    };
};
const _useBatchCommentReply = ()=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const [allComments, setAllComments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [fetchingLoading, setFetchingLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const fetchingAllComments = async (commentId)=>{
        try {
            setFetchingLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/all-replies/${commentId}`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            setAllComments(data);
            setFetchingLoading(false);
        } catch (error) {
            setFetchingLoading(false);
            console.log(error);
        }
    };
    const handleSubmit = async (commentId)=>{
        if (!comment) {
            return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("please write a message");
        }
        setLoading(true);
        const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/add-reply/${commentId}`, {
            text: comment
        }, {
            headers: {
                Authorization: `Bearer ${auth?.token}`
            }
        });
        if (data.ok) {
            setLoading(false);
            setComment("");
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("added");
            fetchingAllComments(commentId);
        }
        try {} catch (error) {
            setLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Failed, please try again");
        }
    };
    const deleteComment = async (commentId, replyId)=>{
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/delete-reply/${replyId}`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            if (data.ok) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("deleted");
                fetchingAllComments(commentId);
            }
        } catch (error) {
            console.log(error);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Failed, try again");
        }
    };
    return {
        fetchingAllComments,
        handleSubmit,
        deleteComment,
        comment,
        setComment,
        allComments,
        fetchingLoading,
        loading
    };
};
const _useBatchAssetLessons = ()=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const [allAssets, setAllAssets] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [assetloading, setAssetLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [batchLessons, setBatchLessons] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [lessonsLoading, setLessonsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const fetchingSingleData = async (x)=>{
        try {
            setAssetLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/stu-assets/${x}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            setAssetLoading(false);
            setAllAssets(data);
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Failed, try again");
        }
    };
    const fetchingOnlyBatchLessons = async (x)=>{
        try {
            setLessonsLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/my-all-lessons/${x}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            setBatchLessons(data);
            setLessonsLoading(false);
        } catch (error) {
            setLessonsLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Failed, try again");
        }
    };
    return {
        fetchingOnlyBatchLessons,
        fetchingSingleData,
        allAssets,
        assetloading,
        batchLessons,
        lessonsLoading
    };
};
const _useFolders = ()=>{};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;