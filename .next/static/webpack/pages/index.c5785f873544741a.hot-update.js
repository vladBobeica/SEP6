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

/***/ "./components/Thumbnail.tsx":
/*!**********************************!*\
  !*** ./components/Thumbnail.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Thumbnail(param) {\n    let { movie  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://image.tmdb.org/t/p/w500\".concat(movie.backdrop_path || movie.poster_path),\n            className: \"rounded-sm object-cover md:rounded\",\n            layout: \"fill\",\n            alt: \"\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\sep6-movie\\\\components\\\\Thumbnail.tsx\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\sep6-movie\\\\components\\\\Thumbnail.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = Thumbnail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thumbnail);\nvar _c;\n$RefreshReg$(_c, \"Thumbnail\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RodW1ibmFpbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUM4QjtBQU05QixTQUFTQyxVQUFVLEtBQWMsRUFBRTtRQUFoQixFQUFDQyxNQUFLLEVBQVEsR0FBZDtJQUNqQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFFWCw0RUFBQ0osbURBQUtBO1lBQ05LLEtBQUssa0NBRUosT0FEQ0gsTUFBTUksYUFBYSxJQUFJSixNQUFNSyxXQUFXO1lBRTFDSCxXQUFVO1lBQ1ZJLFFBQU87WUFDUEMsS0FBSTs7Ozs7Ozs7Ozs7QUFJWjtLQWRTUjtBQWdCVCwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RodW1ibmFpbC50c3g/MTdhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb3ZpZSB9IGZyb20gXCIuLi90eXBpbmdzXCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBtb3ZpZTogTW92aWVcclxufVxyXG5cclxuZnVuY3Rpb24gVGh1bWJuYWlsKHttb3ZpZX06IFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0yOCBtaW4tdy1bMTgwcHhdIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwXHJcbiAgICBlYXNlLW91dCBtZDpoLTM2IG1kOm1pbi13LVsyNjBweF0gbWQ6aG92ZXI6c2NhbGUtMTA1XCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMCR7XHJcbiAgICAgICAgICBtb3ZpZS5iYWNrZHJvcF9wYXRoIHx8IG1vdmllLnBvc3Rlcl9wYXRoXHJcbiAgICAgICAgfWB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1zbSBvYmplY3QtY292ZXIgbWQ6cm91bmRlZFwiXHJcbiAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGh1bWJuYWlsIl0sIm5hbWVzIjpbIkltYWdlIiwiVGh1bWJuYWlsIiwibW92aWUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJiYWNrZHJvcF9wYXRoIiwicG9zdGVyX3BhdGgiLCJsYXlvdXQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Thumbnail.tsx\n"));

/***/ })

});