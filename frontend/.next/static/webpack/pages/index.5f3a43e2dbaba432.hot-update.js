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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [algorithm, setAlgorithm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('round-robin');\n    const [numServers, setNumServers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(5);\n    const [serversInitialized, setServersInitialized] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // Track if servers are initialized\n    const handleInitialize = ()=>{\n        // Logic to initialize the system with the selected algorithm and number of servers\n        console.log(\"Initializing with \".concat(algorithm, \" and \").concat(numServers, \" servers\"));\n        setServersInitialized(true); // Set serversInitialized to true after initialization\n    };\n    const handleSendRequest = ()=>{\n        // Logic to send a request after initializing\n        console.log(\"Sending request using \".concat(algorithm));\n    };\n    const incrementServers = ()=>{\n        if (numServers < 20) {\n            setNumServers(numServers + 1);\n        }\n    };\n    const decrementServers = ()=>{\n        if (numServers > 1) {\n            setNumServers(numServers - 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-purple-50 flex flex-col items-center justify-center p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Load Balancer Visualization\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center text-purple-700\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl font-extrabold mb-8\",\n                        children: \"Load Balancer Visualization\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center mb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"algorithm\",\n                                className: \"mr-3 text-xl\",\n                                children: \"Select Algorithm:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                id: \"algorithm\",\n                                className: \"border border-gray-300 rounded-md p-3 text-gray-800 text-lg\",\n                                value: algorithm,\n                                onChange: (e)=>setAlgorithm(e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"round-robin\",\n                                        children: \"Round Robin (1 Thread)\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"rr-multiple-threads\",\n                                        children: \"Round Robin (Multiple Threads)\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"weighted-rr\",\n                                        children: \"Weighted Round Robin\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"least-connect\",\n                                        children: \"Least Connect\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center mb-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"servers\",\n                                className: \"mr-3 text-xl\",\n                                children: \"Number of Servers:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-4\",\n                                children: [\n                                    !serversInitialized && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: decrementServers,\n                                                className: \"px-6 py-3 bg-purple-400 text-white rounded-md hover:bg-purple-700 transition duration-300\",\n                                                children: \"-\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"number\",\n                                                id: \"servers\",\n                                                className: \"w-20 text-center border border-gray-300 text-black rounded-md p-3 text-lg\",\n                                                value: numServers,\n                                                readOnly: serversInitialized\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: incrementServers,\n                                                className: \"px-6 py-3 bg-purple-400 text-white rounded-md hover:bg-purple-700 transition duration-300\",\n                                                children: \"+\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true),\n                                    !serversInitialized && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleInitialize,\n                                        className: \"ml-6 px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300\",\n                                        children: \"Initialize\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    serversInitialized && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mb-8 w-full\",\n                        children: Array.from({\n                            length: numServers\n                        }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center justify-center p-8 bg-purple-300 text-white rounded-lg shadow-2xl transform hover:scale-110 transition-all duration-300\",\n                                style: {\n                                    height: '200px',\n                                    width: '200px'\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-4xl mb-4\",\n                                        children: \"\\uD83D\\uDDA5️\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-xl font-semibold\",\n                                        children: [\n                                            \"Server \",\n                                            index + 1\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg mb-3\",\n                                children: \"Generate Request:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSendRequest,\n                                className: \"px-8 py-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300\",\n                                children: \"Send Request\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\priya\\\\Downloads\\\\os-load-balancer\\\\LoadBalancer\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"HooyfjPT6QDS1vojcH3yb/4LoZg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WTtnQ0FDQ0MsU0FBU2pCO2dDQUNUSSxXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXhId0JkO0tBQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHByaXlhXFxEb3dubG9hZHNcXG9zLWxvYWQtYmFsYW5jZXJcXExvYWRCYWxhbmNlclxcZnJvbnRlbmRcXHBhZ2VzXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFthbGdvcml0aG0sIHNldEFsZ29yaXRobV0gPSB1c2VTdGF0ZSgncm91bmQtcm9iaW4nKTtcbiAgY29uc3QgW251bVNlcnZlcnMsIHNldE51bVNlcnZlcnNdID0gdXNlU3RhdGUoNSk7XG4gIGNvbnN0IFtzZXJ2ZXJzSW5pdGlhbGl6ZWQsIHNldFNlcnZlcnNJbml0aWFsaXplZF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFRyYWNrIGlmIHNlcnZlcnMgYXJlIGluaXRpYWxpemVkXG5cbiAgY29uc3QgaGFuZGxlSW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAvLyBMb2dpYyB0byBpbml0aWFsaXplIHRoZSBzeXN0ZW0gd2l0aCB0aGUgc2VsZWN0ZWQgYWxnb3JpdGhtIGFuZCBudW1iZXIgb2Ygc2VydmVyc1xuICAgIGNvbnNvbGUubG9nKGBJbml0aWFsaXppbmcgd2l0aCAke2FsZ29yaXRobX0gYW5kICR7bnVtU2VydmVyc30gc2VydmVyc2ApO1xuICAgIHNldFNlcnZlcnNJbml0aWFsaXplZCh0cnVlKTsgLy8gU2V0IHNlcnZlcnNJbml0aWFsaXplZCB0byB0cnVlIGFmdGVyIGluaXRpYWxpemF0aW9uXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VuZFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgLy8gTG9naWMgdG8gc2VuZCBhIHJlcXVlc3QgYWZ0ZXIgaW5pdGlhbGl6aW5nXG4gICAgY29uc29sZS5sb2coYFNlbmRpbmcgcmVxdWVzdCB1c2luZyAke2FsZ29yaXRobX1gKTtcbiAgfTtcblxuICBjb25zdCBpbmNyZW1lbnRTZXJ2ZXJzID0gKCkgPT4ge1xuICAgIGlmIChudW1TZXJ2ZXJzIDwgMjApIHtcbiAgICAgIHNldE51bVNlcnZlcnMobnVtU2VydmVycyArIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWNyZW1lbnRTZXJ2ZXJzID0gKCkgPT4ge1xuICAgIGlmIChudW1TZXJ2ZXJzID4gMSkge1xuICAgICAgc2V0TnVtU2VydmVycyhudW1TZXJ2ZXJzIC0gMSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctcHVycGxlLTUwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNlwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Mb2FkIEJhbGFuY2VyIFZpc3VhbGl6YXRpb248L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtcHVycGxlLTcwMFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1leHRyYWJvbGQgbWItOFwiPkxvYWQgQmFsYW5jZXIgVmlzdWFsaXphdGlvbjwvaDE+XG5cbiAgICAgICAgey8qIEFsZ29yaXRobSBTZWxlY3Rpb24gU2VjdGlvbiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi02XCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbGdvcml0aG1cIiBjbGFzc05hbWU9XCJtci0zIHRleHQteGxcIj5TZWxlY3QgQWxnb3JpdGhtOjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgaWQ9XCJhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHAtMyB0ZXh0LWdyYXktODAwIHRleHQtbGdcIlxuICAgICAgICAgICAgdmFsdWU9e2FsZ29yaXRobX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWxnb3JpdGhtKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicm91bmQtcm9iaW5cIj5Sb3VuZCBSb2JpbiAoMSBUaHJlYWQpPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicnItbXVsdGlwbGUtdGhyZWFkc1wiPlJvdW5kIFJvYmluIChNdWx0aXBsZSBUaHJlYWRzKTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIndlaWdodGVkLXJyXCI+V2VpZ2h0ZWQgUm91bmQgUm9iaW48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsZWFzdC1jb25uZWN0XCI+TGVhc3QgQ29ubmVjdDwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTnVtYmVyIG9mIFNlcnZlcnMgU2VjdGlvbiB3aXRoIEluY3JlbWVudC9EZWNyZW1lbnQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItOFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VydmVyc1wiIGNsYXNzTmFtZT1cIm1yLTMgdGV4dC14bFwiPk51bWJlciBvZiBTZXJ2ZXJzOjwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgIHshc2VydmVyc0luaXRpYWxpemVkICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWNyZW1lbnRTZXJ2ZXJzfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIGJnLXB1cnBsZS00MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIGhvdmVyOmJnLXB1cnBsZS03MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJzZXJ2ZXJzXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjAgdGV4dC1jZW50ZXIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWJsYWNrIHJvdW5kZWQtbWQgcC0zIHRleHQtbGdcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e251bVNlcnZlcnN9XG4gICAgICAgICAgICAgICAgICByZWFkT25seT17c2VydmVyc0luaXRpYWxpemVkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aW5jcmVtZW50U2VydmVyc31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyBiZy1wdXJwbGUtNDAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBob3ZlcjpiZy1wdXJwbGUtNzAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshc2VydmVyc0luaXRpYWxpemVkICYmIChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUluaXRpYWxpemV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtNiBweC02IHB5LTMgYmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgaG92ZXI6YmctcHVycGxlLTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBJbml0aWFsaXplXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFNlcnZlciBCb3hlcyBTZWN0aW9uICovfVxuICAgICAgICB7c2VydmVyc0luaXRpYWxpemVkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgbWQ6Z3JpZC1jb2xzLTQgbGc6Z3JpZC1jb2xzLTUgeGw6Z3JpZC1jb2xzLTYgZ2FwLTggbWItOCB3LWZ1bGxcIj5cbiAgICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiBudW1TZXJ2ZXJzIH0pLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC04IGJnLXB1cnBsZS0zMDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy0yeGwgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzIwMHB4Jywgd2lkdGg6ICcyMDBweCcgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgbWItNFwiPvCflqXvuI88L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5TZXJ2ZXIge2luZGV4ICsgMX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFNlbmQgUmVxdWVzdCBTZWN0aW9uICovfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWItM1wiPkdlbmVyYXRlIFJlcXVlc3Q6PC9wPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbmRSZXF1ZXN0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtOCBweS00IGJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIGhvdmVyOmJnLXB1cnBsZS03MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNlbmQgUmVxdWVzdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJhbGdvcml0aG0iLCJzZXRBbGdvcml0aG0iLCJudW1TZXJ2ZXJzIiwic2V0TnVtU2VydmVycyIsInNlcnZlcnNJbml0aWFsaXplZCIsInNldFNlcnZlcnNJbml0aWFsaXplZCIsImhhbmRsZUluaXRpYWxpemUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2VuZFJlcXVlc3QiLCJpbmNyZW1lbnRTZXJ2ZXJzIiwiZGVjcmVtZW50U2VydmVycyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiaDEiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib3B0aW9uIiwiYnV0dG9uIiwib25DbGljayIsImlucHV0IiwidHlwZSIsInJlYWRPbmx5IiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwibWFwIiwiXyIsImluZGV4Iiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsInNwYW4iLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});