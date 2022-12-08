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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_modalAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/modalAtom */ \"./atoms/modalAtom.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Thumbnail(param) {\n    let { movie  } = param;\n    _s();\n    const [showModal, setShowModal] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_3__.modalState);\n    const [currentMovie, setCurrentMovie] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_3__.movieState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105\",\n        onClick: ()=>{\n            setCurrentMovie(movie);\n            setShowModal(true);\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://image.tmdb.org/t/p/w500\".concat(movie.backdrop_path || movie.poster_path),\n            className: \"rounded-sm object-cover md:rounded\",\n            layout: \"fill\",\n            alt: \"\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\sep6-movie\\\\components\\\\Thumbnail.tsx\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\sep6-movie\\\\components\\\\Thumbnail.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Thumbnail, \"wwgLX849xvpAcUazH5Ouiq9m9y4=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = Thumbnail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thumbnail);\nvar _c;\n$RefreshReg$(_c, \"Thumbnail\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RodW1ibmFpbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUM4QjtBQUNTO0FBQ29CO0FBTzNELFNBQVNJLFVBQVUsS0FBYyxFQUFFO1FBQWhCLEVBQUNDLE1BQUssRUFBUSxHQUFkOztJQUNqQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sc0RBQWNBLENBQUNDLHdEQUFVQTtJQUMzRCxNQUFNLENBQUNNLGNBQWNDLGdCQUFnQixHQUFHUixzREFBY0EsQ0FBQ0Usd0RBQVVBO0lBQ2pFLHFCQUNFLDhEQUFDTztRQUNEQyxXQUFVO1FBRVZDLFNBQVMsSUFBTTtZQUNiSCxnQkFBZ0JKO1lBQ2hCRSxhQUFhLElBQUk7UUFDbkI7a0JBQ0ksNEVBQUNQLG1EQUFLQTtZQUNOYSxLQUFLLGtDQUVKLE9BRENSLE1BQU1TLGFBQWEsSUFBSVQsTUFBTVUsV0FBVztZQUUxQ0osV0FBVTtZQUNWSyxRQUFPO1lBQ1BDLEtBQUk7Ozs7Ozs7Ozs7O0FBSVo7R0FyQlNiOztRQUMyQkgsa0RBQWNBO1FBQ1JBLGtEQUFjQTs7O0tBRi9DRztBQXVCVCwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RodW1ibmFpbC50c3g/MTdhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb3ZpZSB9IGZyb20gXCIuLi90eXBpbmdzXCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCJcclxuaW1wb3J0IHsgbW9kYWxTdGF0ZSwgbW92aWVTdGF0ZSB9IGZyb20gXCIuLi9hdG9tcy9tb2RhbEF0b21cIlxyXG5pbXBvcnQgeyBEb2N1bWVudERhdGEgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCJcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBtb3ZpZTogTW92aWUgfCBEb2N1bWVudERhdGFcclxufVxyXG5cclxuZnVuY3Rpb24gVGh1bWJuYWlsKHttb3ZpZX06IFByb3BzKSB7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVJlY29pbFN0YXRlKG1vZGFsU3RhdGUpXHJcbiAgY29uc3QgW2N1cnJlbnRNb3ZpZSwgc2V0Q3VycmVudE1vdmllXSA9IHVzZVJlY29pbFN0YXRlKG1vdmllU3RhdGUpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgXHJcbiAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTI4IG1pbi13LVsxODBweF0gY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDBcclxuICAgIGVhc2Utb3V0IG1kOmgtMzYgbWQ6bWluLXctWzI2MHB4XSBtZDpob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICBzZXRDdXJyZW50TW92aWUobW92aWUpXHJcbiAgICAgIHNldFNob3dNb2RhbCh0cnVlKVxyXG4gICAgfX0+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMCR7XHJcbiAgICAgICAgICBtb3ZpZS5iYWNrZHJvcF9wYXRoIHx8IG1vdmllLnBvc3Rlcl9wYXRoXHJcbiAgICAgICAgfWB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1zbSBvYmplY3QtY292ZXIgbWQ6cm91bmRlZFwiXHJcbiAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGh1bWJuYWlsIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlUmVjb2lsU3RhdGUiLCJtb2RhbFN0YXRlIiwibW92aWVTdGF0ZSIsIlRodW1ibmFpbCIsIm1vdmllIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiY3VycmVudE1vdmllIiwic2V0Q3VycmVudE1vdmllIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNyYyIsImJhY2tkcm9wX3BhdGgiLCJwb3N0ZXJfcGF0aCIsImxheW91dCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Thumbnail.tsx\n"));

/***/ })

});