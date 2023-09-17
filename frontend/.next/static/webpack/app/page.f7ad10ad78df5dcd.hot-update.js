"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/List/List.jsx":
/*!**********************************!*\
  !*** ./components/List/List.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction List(param) {\n    let { payload } = param;\n    _s();\n    const [students, setStudents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchingSiwa = async ()=>{\n        const resp = await fetch(\"http://localhost:3001/api/siswa/?lokasi=\".concat(payload.lokasi, \"&kelas=\").concat(payload.kelas), {\n            method: \"GET\"\n        });\n        const data = await resp.json();\n        setStudents(data.data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (payload.lokasi !== \"\" && payload.kelas !== \"\") {\n            console.log(payload);\n            fetchingSiwa();\n        }\n    }, [\n        payload\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"table table-zebra\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"No\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Deo\\\\next 13\\\\ipeka\\\\frontend\\\\components\\\\List\\\\List.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Deo\\\\next 13\\\\ipeka\\\\frontend\\\\components\\\\List\\\\List.jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Nilai\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Deo\\\\next 13\\\\ipeka\\\\frontend\\\\components\\\\List\\\\List.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Deo\\\\next 13\\\\ipeka\\\\frontend\\\\components\\\\List\\\\List.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Deo\\\\next 13\\\\ipeka\\\\frontend\\\\components\\\\List\\\\List.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: students.map((student, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: i + 1\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Deo\\\\next 13\\\\ipeka\\\\frontend\\\\components\\\\List\\\\List.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: student.namaMurid\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Deo\\\\next 13\\\\ipeka\\\\frontend\\\\components\\\\List\\\\List.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                placeholder: \"Type Score Here\",\n                                                className: \"input input-bordered w-full max-w-xs\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Deo\\\\next 13\\\\ipeka\\\\frontend\\\\components\\\\List\\\\List.jsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Deo\\\\next 13\\\\ipeka\\\\frontend\\\\components\\\\List\\\\List.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Deo\\\\next 13\\\\ipeka\\\\frontend\\\\components\\\\List\\\\List.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Deo\\\\next 13\\\\ipeka\\\\frontend\\\\components\\\\List\\\\List.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Deo\\\\next 13\\\\ipeka\\\\frontend\\\\components\\\\List\\\\List.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Deo\\\\next 13\\\\ipeka\\\\frontend\\\\components\\\\List\\\\List.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-primary\",\n                    children: \"Save\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Deo\\\\next 13\\\\ipeka\\\\frontend\\\\components\\\\List\\\\List.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Deo\\\\next 13\\\\ipeka\\\\frontend\\\\components\\\\List\\\\List.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Deo\\\\next 13\\\\ipeka\\\\frontend\\\\components\\\\List\\\\List.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(List, \"Xxsbsc/n21pueGlfwfykfeIEF1E=\");\n_c = List;\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGlzdC9MaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUQ7QUFFbkQsU0FBU0csS0FBSyxLQUFXO1FBQVgsRUFBRUMsT0FBTyxFQUFFLEdBQVg7O0lBQ1osTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTUssZUFBZTtRQUNuQixNQUFNQyxPQUFPLE1BQU1DLE1BQ2pCLDJDQUFtRUwsT0FBeEJBLFFBQVFNLE1BQU0sRUFBQyxXQUF1QixPQUFkTixRQUFRTyxLQUFLLEdBQ2hGO1lBQ0VDLFFBQVE7UUFDVjtRQUVGLE1BQU1DLE9BQU8sTUFBTUwsS0FBS00sSUFBSTtRQUM1QlIsWUFBWU8sS0FBS0EsSUFBSTtJQUN2QjtJQUVBWixnREFBU0EsQ0FBQztRQUNSLElBQUlHLFFBQVFNLE1BQU0sS0FBSyxNQUFNTixRQUFRTyxLQUFLLEtBQUssSUFBSTtZQUNqREksUUFBUUMsR0FBRyxDQUFDWjtZQUNaRztRQUNGO0lBQ0YsR0FBRztRQUFDSDtLQUFRO0lBRVoscUJBQ0UsOERBQUNhO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQU1ELFdBQVU7O3NDQUVmLDhEQUFDRTtzQ0FDQyw0RUFBQ0M7O2tEQUNDLDhEQUFDQztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR1IsOERBQUNDO3NDQUVFbEIsU0FBU21CLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxrQkFDdEIsOERBQUNMOztzREFDQyw4REFBQ0M7c0RBQUlJLElBQUk7Ozs7OztzREFDVCw4REFBQ0M7c0RBQUlGLFFBQVFHLFNBQVM7Ozs7OztzREFDdEIsOERBQUNEO3NEQUNDLDRFQUFDRTtnREFDQ0MsTUFBSztnREFDTEMsYUFBWTtnREFDWmIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVF4Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNjO29CQUFPZCxXQUFVOzhCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUM7R0F2RFNmO0tBQUFBO0FBeURULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlzdC9MaXN0LmpzeD84MzVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBMaXN0KHsgcGF5bG9hZCB9KSB7XHJcbiAgY29uc3QgW3N0dWRlbnRzLCBzZXRTdHVkZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgZmV0Y2hpbmdTaXdhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9zaXN3YS8/bG9rYXNpPSR7cGF5bG9hZC5sb2thc2l9JmtlbGFzPSR7cGF5bG9hZC5rZWxhc31gLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4gICAgc2V0U3R1ZGVudHMoZGF0YS5kYXRhKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBheWxvYWQubG9rYXNpICE9PSBcIlwiICYmIHBheWxvYWQua2VsYXMgIT09IFwiXCIpIHtcclxuICAgICAgY29uc29sZS5sb2cocGF5bG9hZCk7XHJcbiAgICAgIGZldGNoaW5nU2l3YSgpO1xyXG4gICAgfVxyXG4gIH0sIFtwYXlsb2FkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtemVicmFcIj5cclxuICAgICAgICAgIHsvKiBoZWFkICovfVxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPk5vPC90aD5cclxuICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPk5pbGFpPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHsvKiByb3cgMSAqL31cclxuICAgICAgICAgICAge3N0dWRlbnRzLm1hcCgoc3R1ZGVudCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD57aSArIDF9PC90aD5cclxuICAgICAgICAgICAgICAgIDx0ZD57c3R1ZGVudC5uYW1hTXVyaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBTY29yZSBIZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHNcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBtdC01XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TYXZlPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaXN0IiwicGF5bG9hZCIsInN0dWRlbnRzIiwic2V0U3R1ZGVudHMiLCJmZXRjaGluZ1Npd2EiLCJyZXNwIiwiZmV0Y2giLCJsb2thc2kiLCJrZWxhcyIsIm1ldGhvZCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJzdHVkZW50IiwiaSIsInRkIiwibmFtYU11cmlkIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/List/List.jsx\n"));

/***/ })

});