"use strict";
exports.id = 1594;
exports.ids = [1594];
exports.modules = {

/***/ 1594:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BP: () => (/* binding */ _useBatchAssetInst),
/* harmony export */   CT: () => (/* binding */ _useBatchInfoInst),
/* harmony export */   T: () => (/* binding */ _useBatchFoldersInst),
/* harmony export */   Vh: () => (/* binding */ _useBatchLessonInst),
/* harmony export */   _u: () => (/* binding */ _useMyBatches)
/* harmony export */ });
/* unused harmony export _useInstAssets */
/* harmony import */ var _config_APIs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9701);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3361);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
([_context_authContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const _useMyBatches = ()=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const authToken = auth && auth?.token;
    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const myBatches = async ()=>{
        setLoading(true);
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/inst/my-batches`);
            if (data.error) {
                return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(data.error);
            }
            setList(data.batches);
        } catch (error) {
            console.log(error);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Failed, try again.");
        } finally{
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (authToken) {
            myBatches();
        }
    }, [
        authToken
    ]);
    return {
        loading,
        list
    };
};
const _useInstAssets = ()=>{
    const [auth] = useAuth();
    const authToken = auth && auth?.token;
    const [uploadingFile, setUploadingFile] = useState();
    const [title, setTitle] = useState("");
    const [openModel, setOpenModel] = useState(false);
    const [current, setCurrent] = useState({});
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchingBatchAssets = async (x)=>{
        try {
            setLoading(true);
            const { data } = await axios.get(`${API}/lms/all-assets/${x}`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            setList(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    const handleChange = (e)=>{
        const { files } = e.target;
        const file = e.target.files[0];
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
        if (file) {
            let fileExtension = file.name.split(".").pop().toLowerCase();
            if (!allowedExtensions.includes(fileExtension)) {
                toast.error("Unsupported file type!");
                e.target.value = null;
            } else if (allowedExtensions.includes(fileExtension)) {
                let fileSize;
                fileSize = files[0].size / 1024 / 1024;
                if (fileSize > 1) {
                    toast.error("The file size greater than 5 MB. Make sure less than 5 MB.", {
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
                setUploadingFile(files[0]);
            }
        }
    };
    return {
        list,
        loading,
        fetchingBatchAssets,
        handleChange
    };
};
const _useBatchInfoInst = ()=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const [batch, setBatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [folders, setFolders] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [lessons, setLessons] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // for notice
    const [notice, setNotice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [heading, setHeading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [variant, setVariant] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const gettingData = async (x)=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/batch-stats/${x}`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            setBatch(data.batch);
            setAssets(data.assets);
            setFolders(data.folders);
            setLessons(data.lessons);
            setComments(data.comments);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Failed, try again");
        }
    };
    const getNotice = async (batchId)=>{
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/get-notice/${batchId}`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            console.log(data, "inst notice");
            setNotice(data);
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Failed, try again");
        }
    };
    const addNotice = async (batchId)=>{
        if (!text || !variant || !heading) {
            return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("All fields are required");
        }
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/add-update-notice/${batchId}`, {
                variant,
                text,
                heading
            }, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            if (data.ok) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("added");
                setHeading("");
                setVariant("");
                setText("");
                getNotice(batchId);
            }
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Failed, try again");
        }
    };
    return {
        batch,
        assets,
        folders,
        lessons,
        comments,
        loading,
        gettingData,
        notice,
        heading,
        text,
        variant,
        getNotice,
        addNotice,
        setHeading,
        setText,
        setVariant,
        open,
        setOpen
    };
};
const _useBatchFoldersInst = ()=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [openFolder, setOpenFolder] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const fetchingAllFolders = async (x)=>{
        try {
            setLoading(true);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/all-folders/${x}`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            setList(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    const AddFolder = async (batchId)=>{
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/create-folder/${batchId}`, {
                name
            }, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            if (data.ok) {
                fetchingAllFolders(batchId);
            }
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(error);
            console.log(error);
        }
    };
    const deleteFolder = async (commentId, batchId)=>{
        // const ok = confirm("Are you sure?");
        // if (ok) {
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/delete-folder/${commentId}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            if (data.ok) {
                fetchingAllFolders(batchId);
            }
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(error);
            console.log(error);
        }
    // }
    };
    const removeAssignments = async (x, y)=>{
        const addAssignmentsURL = `${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/remove-assignment/${x}/${y}`;
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(addAssignmentsURL, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            if (data.ok) {
                fetchingBatchItems(id);
            }
        } catch (error) {
            // toast.error(error);
            console.log(error);
        }
    };
    return {
        fetchingAllFolders,
        AddFolder,
        deleteFolder,
        list,
        name,
        setName,
        loading,
        current,
        setCurrent,
        openFolder,
        setOpenFolder,
        removeAssignments
    };
};
const _useBatchAssetInst = (batchId)=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const authToken = auth && auth?.token;
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [uploadingFile, setUploadingFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const fetchingBatchAssets = async ()=>{
        setLoading(true);
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/all-assets/${batchId}`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            setList(data);
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (authToken && batchId) {
            fetchingBatchAssets();
        }
    }, [
        authToken,
        batchId
    ]);
    const deleteAssets = async (assetId)=>{
        const ok = confirm("Are you sure?");
        if (ok) {
            try {
                const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/delete-asset/${assetId}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
                if (data.ok) {
                    fetchingBatchAssets();
                }
            } catch (error) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(error);
                console.log(error);
            }
        }
    };
    const addAsset = async ()=>{
        try {
            setLoading(true);
            const _formData = new FormData();
            _formData.append("title", title);
            _formData.append("file", uploadingFile);
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/new-asset/${batchId}`, _formData, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            if (data.ok) {
                setTitle("");
                setUploadingFile("");
                fetchingBatchAssets();
                setLoading(false);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Done");
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    const handleChange = (e)=>{
        const { files } = e.target;
        const file = e.target.files[0];
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
        if (file) {
            let fileExtension = file.name.split(".").pop().toLowerCase();
            if (!allowedExtensions.includes(fileExtension)) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Unsupported file type!");
                e.target.value = null;
            } else if (allowedExtensions.includes(fileExtension)) {
                let fileSize;
                fileSize = files[0].size / 1024 / 1024;
                if (fileSize > 1) {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("The file size greater than 5 MB. Make sure less than 5 MB.", {
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
                setUploadingFile(files[0]);
            }
        }
    };
    return {
        assetLoading: loading,
        assets: list,
        deleteAsset: deleteAssets,
        addAsset,
        handleChange,
        uploadOpen: open,
        setUploadOpen: setOpen,
        uploadingFile,
        setUploadingFile,
        title,
        setTitle
    };
};
const _useBatchLessonInst = (batchId)=>{
    const [auth] = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const authToken = auth && auth?.token;
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [uploadOpen, setUploadOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const fetchingLessons = async ()=>{
        setLoading(true);
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/all-lessons/${batchId}`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            setList(data);
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (authToken && batchId) {
            fetchingLessons();
        }
    }, [
        authToken,
        batchId
    ]);
    const deleteItem = async (lessonId)=>{
        const ok = confirm("Are you sure?");
        if (ok) {
            try {
                const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/delete-lesson/${lessonId}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
                if (data.ok) {
                    fetchingLessons();
                }
            } catch (error) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(error);
                console.log(error);
            }
        }
    };
    const addItem = async ()=>{
        if (!title || !description) {
            return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Title and description are required.");
        }
        if (description.length > 100) {
            return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Description should be short (100 words).");
        }
        try {
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/new-lesson/${batchId}`, {
                title,
                description
            }, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            if (data.ok) {
                fetchingLessons(batchId);
                setUploadOpen(false);
                setTitle("");
                setDescription("");
            }
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(error);
            console.log(error);
        }
    };
    const makeItCompleteItem = async ()=>{
        try {
            const makeItURL = `${_config_APIs__WEBPACK_IMPORTED_MODULE_4__/* .API */ .b}/lms/make-lesson-complete/${batchId}`;
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(makeItURL, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            if (data.ok) {
                fetchingLessons(batchId);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Make it completed");
            }
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(error);
            console.log(error);
        }
    };
    return {
        list,
        loading,
        deleteItem,
        addItem,
        makeItCompleteItem,
        title,
        description,
        setTitle,
        setDescription,
        uploadOpen,
        setUploadOpen
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;