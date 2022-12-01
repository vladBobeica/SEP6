"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Row.tsx":
/*!****************************!*\
  !*** ./components/Row.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _Thumbnail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Thumbnail */ \"./components/Thumbnail.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Row(param) {\n    let { title , movies  } = param;\n    _s();\n    const rowRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [isMoved, setIsMoved] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleClick = (direction)=>{\n        setIsMoved(true);\n        if (rowRef.current) {\n            const { scrollLeft , clientWidth  } = rowRef.current;\n            const scrollTo = direction === \"left\" ? scrollLeft - clientWidth : scrollLeft + clientWidth;\n            rowRef.current.scrollTo({\n                left: scrollTo,\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-40 space-y-0.5 md:space-y-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white\",\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\sep6-movie\\\\components\\\\Row.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"group relative md:-ml-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ChevronLeftIcon, {\n                        className: \"absolute top-0 bottom-0 left-2 z-40 m-auto\\n             h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 \\n             \".concat(!isMoved && \"hidden\"),\n                        onClick: ()=>handleClick(\"left\")\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\sep6-movie\\\\components\\\\Row.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: rowRef,\n                        className: \"flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2\",\n                        children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Thumbnail__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                movie: movie\n                            }, movie.id, false, {\n                                fileName: \"D:\\\\Projects\\\\sep6-movie\\\\components\\\\Row.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\sep6-movie\\\\components\\\\Row.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ChevronRightIcon, {\n                        className: \"absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100\",\n                        onClick: ()=>handleClick(\"left\")\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\sep6-movie\\\\components\\\\Row.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\sep6-movie\\\\components\\\\Row.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\sep6-movie\\\\components\\\\Row.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Row, \"aLewmdgUqLDWjkPJ2FT0W2IM1qg=\");\n_c = Row;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Row);\nvar _c;\n$RefreshReg$(_c, \"Row\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jvdy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUMwRTtBQUN2QztBQUNHO0FBTXRDLFNBQVNLLElBQUksS0FBc0IsRUFBRTtRQUF4QixFQUFDQyxNQUFLLEVBQUVDLE9BQU0sRUFBUSxHQUF0Qjs7SUFDVCxNQUFNQyxTQUFTTCw2Q0FBTUEsQ0FBaUIsSUFBSTtJQUMxQyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUU1QyxNQUFNTyxjQUFjLENBQUNDLFlBQXNCO1FBQ3ZDRixXQUFXLElBQUk7UUFFZixJQUFJRixPQUFPSyxPQUFPLEVBQUU7WUFDaEIsTUFBTSxFQUFDQyxXQUFVLEVBQUVDLFlBQVcsRUFBQyxHQUFHUCxPQUFPSyxPQUFPO1lBRWhELE1BQU1HLFdBQVdKLGNBQWMsU0FDNUJFLGFBQWFDLGNBQ2JELGFBQWFDLFdBQVc7WUFFMUJQLE9BQU9LLE9BQU8sQ0FBQ0csUUFBUSxDQUFDO2dCQUFDQyxNQUFNRDtnQkFBVUUsVUFBVTtZQUFRO1FBQ2hFLENBQUM7SUFDTDtJQUVGLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBRVRkOzs7Ozs7MEJBRUwsOERBQUNhO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ3BCLHFFQUFlQTt3QkFDZm9CLFdBQVcsK0pBRVksT0FBckIsQ0FBQ1gsV0FBVzt3QkFDZmEsU0FBUyxJQUFNWCxZQUFZOzs7Ozs7a0NBRTNCLDhEQUFDUTt3QkFBSUksS0FBS2Y7d0JBQVFZLFdBQVU7a0NBRXZCYixPQUFPaUIsR0FBRyxDQUFDLENBQUNDLHNCQUNULDhEQUFDdkIsa0RBQVNBO2dDQUFnQnVCLE9BQU9BOytCQUFqQkEsTUFBTUMsRUFBRTs7Ozs7Ozs7OztrQ0FJaEMsOERBQUN6QixzRUFBZ0JBO3dCQUNoQm1CLFdBQVU7d0JBRVhFLFNBQVMsSUFBTVgsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZDO0dBN0NTTjtLQUFBQTtBQStDVCwrREFBZUEsR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Jvdy50c3g/YThjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb3ZpZSB9IGZyb20gXCIuLi90eXBpbmdzXCJcclxuaW1wb3J0IHtDaGV2cm9uTGVmdEljb24sIENoZXZyb25SaWdodEljb259IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcclxuaW1wb3J0IFRodW1ibmFpbCBmcm9tIFwiLi9UaHVtYm5haWxcIlxyXG5pbXBvcnQge3VzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgdGl0bGU6IHN0cmluZ1xyXG4gICAgbW92aWVzOiBNb3ZpZVtdXHJcbn1cclxuZnVuY3Rpb24gUm93KHt0aXRsZSwgbW92aWVzfTogUHJvcHMpIHtcclxuICAgIGNvbnN0IHJvd1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcclxuICAgIGNvbnN0IFtpc01vdmVkLCBzZXRJc01vdmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGRpcmVjdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb3ZlZCh0cnVlKVxyXG5cclxuICAgICAgICBpZiAocm93UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3Qge3Njcm9sbExlZnQsIGNsaWVudFdpZHRofSA9IHJvd1JlZi5jdXJyZW50XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxUbyA9IGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCJcclxuICAgICAgICAgICAgID8gc2Nyb2xsTGVmdCAtIGNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgICA6IHNjcm9sbExlZnQgKyBjbGllbnRXaWR0aFxyXG5cclxuICAgICAgICAgICAgIHJvd1JlZi5jdXJyZW50LnNjcm9sbFRvKHtsZWZ0OiBzY3JvbGxUbywgYmVoYXZpb3I6IFwic21vb3RoXCJ9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00MCBzcGFjZS15LTAuNSBtZDpzcGFjZS15LTJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidy01NiBjdXJzb3ItcG9pbnRlciB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bI2U1ZTVlNV1cclxuICAgICAgICB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIG1kOi1tbC0yXCI+XHJcbiAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb25cclxuICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIHRvcC0wIGJvdHRvbS0wIGxlZnQtMiB6LTQwIG0tYXV0b1xyXG4gICAgICAgICAgICAgaC05IHctOSBjdXJzb3ItcG9pbnRlciBvcGFjaXR5LTAgdHJhbnNpdGlvbiBob3ZlcjpzY2FsZS0xMjUgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgXHJcbiAgICAgICAgICAgICAkeyFpc01vdmVkICYmICdoaWRkZW4nfWB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwibGVmdFwiKX0vPlxyXG5cclxuICAgICAgICAgICAgPGRpdiByZWY9e3Jvd1JlZn0gY2xhc3NOYW1lPVwiZmxleCBzY3JvbGxiYXItaGlkZSBpdGVtcy1jZW50ZXIgc3BhY2UteC0wLjUgb3ZlcmZsb3cteC1zY3JvbGxcclxuICAgICAgICAgICAgbWQ6c3BhY2UteC0yLjUgbWQ6cC0yXCI+XHJcbiAgICAgICAgICAgICAgICB7bW92aWVzLm1hcCgobW92aWUpID0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxUaHVtYm5haWwga2V5PXttb3ZpZS5pZH0gbW92aWU9e21vdmllfS8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8Q2hldnJvblJpZ2h0SWNvblxyXG4gICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgYm90dG9tLTAgbGVmdC0yIHotNDAgbS1hdXRvXHJcbiAgICAgICAgICAgIGgtOSB3LTkgY3Vyc29yLXBvaW50ZXIgb3BhY2l0eS0wIHRyYW5zaXRpb24gaG92ZXI6c2NhbGUtMTI1IGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJsZWZ0XCIpfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvdyJdLCJuYW1lcyI6WyJDaGV2cm9uTGVmdEljb24iLCJDaGV2cm9uUmlnaHRJY29uIiwiVGh1bWJuYWlsIiwidXNlUmVmIiwidXNlU3RhdGUiLCJSb3ciLCJ0aXRsZSIsIm1vdmllcyIsInJvd1JlZiIsImlzTW92ZWQiLCJzZXRJc01vdmVkIiwiaGFuZGxlQ2xpY2siLCJkaXJlY3Rpb24iLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsImNsaWVudFdpZHRoIiwic2Nyb2xsVG8iLCJsZWZ0IiwiYmVoYXZpb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm9uQ2xpY2siLCJyZWYiLCJtYXAiLCJtb3ZpZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Row.tsx\n"));

/***/ })

});