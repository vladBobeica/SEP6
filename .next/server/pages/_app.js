/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase.ts":
/*!*********************!*\
  !*** ./firebase.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCFwz6jyMxxSEEXP_AB_svM6ACO62sz7ug\",\n    authDomain: \"sepflix-9c5ca.firebaseapp.com\",\n    projectId: \"sepflix-9c5ca\",\n    storageBucket: \"sepflix-9c5ca.appspot.com\",\n    messagingSenderId: \"415899090601\",\n    appId: \"1:415899090601:web:708113a7ce35775e78f3b8\",\n    measurementId: \"G-M9YLTS8YR9\"\n};\n// Initialize Firebase\nconst app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDTTtBQUNaO0FBQ1Y7QUFDdkMsNERBQTREO0FBQzVELGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLE1BQU1LLGlCQUFpQjtJQUNyQkMsUUFBUTtJQUNSQyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87SUFDUEMsZUFBZTtBQUNqQjtBQUVBLHNCQUFzQjtBQUN0QixNQUFNQyxNQUFNLENBQUNYLHFEQUFPQSxHQUFHWSxNQUFNLEdBQUdkLDJEQUFhQSxDQUFDSyxrQkFBa0JKLG9EQUFNQSxFQUFFO0FBQ3hFLE1BQU1jLEtBQUtaLGdFQUFZQTtBQUN2QixNQUFNYSxPQUFPWixzREFBT0E7QUFFcEIsaUVBQWVTLEdBQUdBLEVBQUE7QUFDQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ZpcmViYXNlLnRzPzkyZjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwLCBnZXRBcHAsIGdldEFwcHMgfSBmcm9tICdmaXJlYmFzZS9hcHAnXHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXHJcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxyXG4vLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjYXZhaWxhYmxlLWxpYnJhcmllc1xyXG5cclxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG4vLyBGb3IgRmlyZWJhc2UgSlMgU0RLIHY3LjIwLjAgYW5kIGxhdGVyLCBtZWFzdXJlbWVudElkIGlzIG9wdGlvbmFsXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lDRnd6Nmp5TXh4U0VFWFBfQUJfc3ZNNkFDTzYyc3o3dWdcIixcclxuICBhdXRoRG9tYWluOiBcInNlcGZsaXgtOWM1Y2EuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInNlcGZsaXgtOWM1Y2FcIixcclxuICBzdG9yYWdlQnVja2V0OiBcInNlcGZsaXgtOWM1Y2EuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0MTU4OTkwOTA2MDFcIixcclxuICBhcHBJZDogXCIxOjQxNTg5OTA5MDYwMTp3ZWI6NzA4MTEzYTdjZTM1Nzc1ZTc4ZjNiOFwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1NOVlMVFM4WVI5XCJcclxufTtcclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuY29uc3QgYXBwID0gIWdldEFwcHMoKS5sZW5ndGggPyBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSA6IGdldEFwcCgpXHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKClcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwXHJcbmV4cG9ydCB7IGF1dGgsIGRiIH0iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFwcCIsImdldEFwcHMiLCJnZXRGaXJlc3RvcmUiLCJnZXRBdXRoIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwibGVuZ3RoIiwiZGIiLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase.ts\n");

/***/ }),

/***/ "./hooks/useAuth.tsx":
/*!***************************!*\
  !*** ./hooks/useAuth.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({\n    user: null,\n    signUp: async ()=>{},\n    signIn: async ()=>{},\n    logout: async ()=>{},\n    error: null,\n    loading: false\n});\nconst AuthProvider = ({ children  })=>{\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [initialLoading, setInitialLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, (user)=>{\n            if (user) {\n                // Logged in...\n                setUser(user);\n                setLoading(false);\n            } else {\n                // Not logged in...\n                setUser(null);\n                setLoading(true);\n                router.push(\"/login\");\n            }\n            setInitialLoading(false);\n        }), [\n        _firebase__WEBPACK_IMPORTED_MODULE_4__.auth\n    ]);\n    const signUp = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push(\"/\");\n            setLoading(false);\n        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));\n    };\n    const signIn = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push(\"/\");\n            setLoading(false);\n        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));\n    };\n    const logout = async ()=>{\n        setLoading(true);\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth).then(()=>{\n            setUser(null);\n        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));\n    };\n    const memoeValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({\n            user,\n            signUp,\n            signIn,\n            loading,\n            logout,\n            error\n        }), [\n        user,\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: memoeValue,\n        children: !initialLoading && children\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\sep6-movie\\\\hooks\\\\useAuth.tsx\",\n        lineNumber: 103,\n        columnNumber: 10\n    }, undefined);\n};\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovLy8uL2hvb2tzL3VzZUF1dGgudHN4P2ZiYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXN5bmMgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCdcclxuaW1wb3J0IHtcclxuICAgIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICAgIG9uQXV0aFN0YXRlQ2hhbmdlZCxcclxuICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gICAgc2lnbk91dCxcclxuICAgIFVzZXIsXHJcbiAgfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xyXG4gIFxyXG4gIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG4gIGltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuICBpbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcblxyXG4gIGludGVyZmFjZSBJQXV0aCB7XHJcbiAgICB1c2VyOiBVc2VyIHwgbnVsbFxyXG4gICAgc2lnblVwOiAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPlxyXG4gICAgc2lnbkluOiAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPlxyXG4gICAgbG9nb3V0OiAoKSA9PiBQcm9taXNlPHZvaWQ+XHJcbiAgICBlcnJvcjogc3RyaW5nIHwgbnVsbFxyXG4gICAgbG9hZGluZzogYm9vbGVhblxyXG4gIH1cclxuXHJcbiAgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PElBdXRoPiAoe1xyXG4gICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgICAgc2lnblVwOiBhc3luYyAoKSA9PiB7fSxcclxuICAgICAgICBzaWduSW46IGFzeW5jICgpID0+IHt9LFxyXG4gICAgICAgIGxvZ291dDogYXN5bmMgKCkgPT4ge30sXHJcbiAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICB9KVxyXG5cclxuICBpbnRlcmZhY2UgQXV0aFByb3ZpZGVyUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG4gIH1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHtjaGlsZHJlbn06IEF1dGhQcm92aWRlclByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXJ8IG51bGw+KG51bGwpXHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbaW5pdGlhbExvYWRpbmcsIHNldEluaXRpYWxMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIHVzZUVmZmVjdChcclxuICAgICAgICAoKSA9PlxyXG4gICAgICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgLy8gTG9nZ2VkIGluLi4uXHJcbiAgICAgICAgICAgICAgc2V0VXNlcih1c2VyKVxyXG4gICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gTm90IGxvZ2dlZCBpbi4uLlxyXG4gICAgICAgICAgICAgIHNldFVzZXIobnVsbClcclxuICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBzZXRJbml0aWFsTG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIFthdXRoXVxyXG4gICAgICApXHJcblxyXG4gICAgY29uc3Qgc2lnblVwID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOnN0cmluZykgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuXHJcbiAgICAgICAgYXdhaXQgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcclxuICAgICAgICAgICAgc2V0VXNlcih1c2VyQ3JlZGVudGlhbC51c2VyKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBhbGVydChlcnJvci5tZXNzYWdlKSlcclxuICAgICAgICAuZmluYWxseSgoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaWduSW4gPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6c3RyaW5nKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG5cclxuICAgICAgICBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFVzZXIodXNlckNyZWRlbnRpYWwudXNlcilcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gYWxlcnQoZXJyb3IubWVzc2FnZSkpXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuXHJcbiAgICAgICAgc2lnbk91dChhdXRoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0VXNlcihudWxsKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gYWxlcnQoZXJyb3IubWVzc2FnZSkpXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVtb2VWYWx1ZSA9IHVzZU1lbW8oKCkgPT4gKHtcclxuICAgICAgICB1c2VyLCBzaWduVXAsIHNpZ25JbiwgbG9hZGluZywgbG9nb3V0LCBlcnJvclxyXG4gICAgfSksIFt1c2VyLCBsb2FkaW5nXSlcclxuXHJcbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bWVtb2VWYWx1ZX0+XHJcbiAgICB7IWluaXRpYWxMb2FkaW5nICYmIGNoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxufVxyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuIH0iXSwibmFtZXMiOlsiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0IiwidXNlUm91dGVyIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJhdXRoIiwiQXV0aENvbnRleHQiLCJ1c2VyIiwic2lnblVwIiwic2lnbkluIiwibG9nb3V0IiwiZXJyb3IiLCJsb2FkaW5nIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRMb2FkaW5nIiwic2V0VXNlciIsInNldEVycm9yIiwiaW5pdGlhbExvYWRpbmciLCJzZXRJbml0aWFsTG9hZGluZyIsInJvdXRlciIsInB1c2giLCJlbWFpbCIsInBhc3N3b3JkIiwidGhlbiIsInVzZXJDcmVkZW50aWFsIiwiY2F0Y2giLCJhbGVydCIsIm1lc3NhZ2UiLCJmaW5hbGx5IiwibWVtb2VWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useAuth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__]);\n_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_3__.RecoilRoot, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\sep6-movie\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\sep6-movie\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\sep6-movie\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRWlCO0FBQ2Q7QUFFakMsU0FBU0UsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQ2pELHFCQUNFLDhEQUFDSCw4Q0FBVUE7a0JBQ1QsNEVBQUNELHdEQUFZQTtzQkFDYiw0RUFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9ob29rcy91c2VBdXRoJ1xyXG5pbXBvcnQge1JlY29pbFJvb3R9IGZyb20gXCJyZWNvaWxcIlxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVjb2lsUm9vdD5cclxuICAgICAgPEF1dGhQcm92aWRlcj4gXHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICA8L0F1dGhQcm92aWRlcj5cclxuICAgIDwvUmVjb2lsUm9vdD5cclxuICAgICkgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJSZWNvaWxSb290IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();