"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"7c7bd060c9b1\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NzZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjdjN2JkMDYwYzliMVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Header/components/Burger.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Header/components/Burger.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LinkItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkItem */ \"(app-pages-browser)/./src/components/Header/components/LinkItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Burger = (param)=>{\n    let { linksArray } = param;\n    _s();\n    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const menuShowClass = showMenu ? \"w-52 flex flex-col items-end -top-10 right-0\" : \"hidden\";\n    const burerEventTransition = showMenu ? \"-translate-x-52 rotate-90\" : \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>setShowMenu(!showMenu),\n                className: \"transition-all \".concat(burerEventTransition, \" 2xl:hidden xl:hidden lg:hidden md:hidden flex flex-col gap-1\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"h-1 w-9 block bg-slate-600 rounded-md cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"h-1 w-9 block bg-slate-600 rounded-md cursor-pointer \".concat(showMenu)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"h-1 w-9 block bg-slate-600 rounded-md cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"absolute 2xl:hidden xl:hidden lg:hidden md:hidden \".concat(menuShowClass),\n                children: linksArray.map((linkItem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LinkItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: linkItem.title,\n                        href: linkItem.href\n                    }, linkItem.href, false, {\n                        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Burger, \"2FjIcsdimgVhm2IsUWodA2ftTZU=\");\n_c = Burger;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Burger);\nvar _c;\n$RefreshReg$(_c, \"Burger\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9jb21wb25lbnRzL0J1cmdlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVpQztBQUNDO0FBTWxDLE1BQU1FLFNBQWdDO1FBQUMsRUFBRUMsVUFBVSxFQUFlOztJQUNoRSxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFDekMsTUFBTU0sZ0JBQWdCRixXQUFXLGlEQUFpRDtJQUNsRixNQUFNRyx1QkFBdUJILFdBQVcsOEJBQThCO0lBQ3RFLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQ0NFLFNBQVMsSUFBTUwsWUFBWSxDQUFDRDtnQkFDNUJLLFdBQVcsa0JBQXVDLE9BQXJCRixzQkFBcUI7O2tDQUVsRCw4REFBQ0k7d0JBQUtGLFdBQVU7Ozs7OztrQ0FDaEIsOERBQUNFO3dCQUFLRixXQUFXLHdEQUFrRSxPQUFWTDs7Ozs7O2tDQUN6RSw4REFBQ087d0JBQUtGLFdBQVU7Ozs7Ozs7Ozs7OzswQkFFbEIsOERBQUNHO2dCQUNDSCxXQUFXLHFEQUFtRSxPQUFkSDswQkFFL0RILFdBQVdVLEdBQUcsQ0FBQyxDQUFDQyx5QkFDZiw4REFBQ2IsaURBQVFBO3dCQUVQYyxPQUFPRCxTQUFTQyxLQUFLO3dCQUNyQkMsTUFBTUYsU0FBU0UsSUFBSTt1QkFGZEYsU0FBU0UsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQVE5QjtHQTNCTWQ7S0FBQUE7QUE2Qk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2NvbXBvbmVudHMvQnVyZ2VyLnRzeD8yOTU5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmtJdGVtIGZyb20gXCIuL0xpbmtJdGVtXCI7XHJcblxyXG50eXBlIEJ1cmdlclByb3BzID0ge1xyXG4gIGxpbmtzQXJyYXk6IHsgdGl0bGU6IHN0cmluZzsgaHJlZjogc3RyaW5nIH1bXTtcclxufTtcclxuXHJcbmNvbnN0IEJ1cmdlcjogUmVhY3QuRkM8QnVyZ2VyUHJvcHM+ID0gKHsgbGlua3NBcnJheSB9OiBCdXJnZXJQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzaG93TWVudSwgc2V0U2hvd01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG1lbnVTaG93Q2xhc3MgPSBzaG93TWVudSA/IFwidy01MiBmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCAtdG9wLTEwIHJpZ2h0LTBcIiA6IFwiaGlkZGVuXCI7XHJcbiAgY29uc3QgYnVyZXJFdmVudFRyYW5zaXRpb24gPSBzaG93TWVudSA/IFwiLXRyYW5zbGF0ZS14LTUyIHJvdGF0ZS05MFwiIDogXCJcIjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01lbnUoIXNob3dNZW51KX1cclxuICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLWFsbCAke2J1cmVyRXZlbnRUcmFuc2l0aW9ufSAyeGw6aGlkZGVuIHhsOmhpZGRlbiBsZzpoaWRkZW4gbWQ6aGlkZGVuIGZsZXggZmxleC1jb2wgZ2FwLTFgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC0xIHctOSBibG9jayBiZy1zbGF0ZS02MDAgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlclwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BoLTEgdy05IGJsb2NrIGJnLXNsYXRlLTYwMCByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyICR7c2hvd01lbnUgfWB9Pjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLTEgdy05IGJsb2NrIGJnLXNsYXRlLTYwMCByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyXCI+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgMnhsOmhpZGRlbiB4bDpoaWRkZW4gbGc6aGlkZGVuIG1kOmhpZGRlbiAke21lbnVTaG93Q2xhc3N9YH1cclxuICAgICAgPlxyXG4gICAgICAgIHtsaW5rc0FycmF5Lm1hcCgobGlua0l0ZW0pID0+IChcclxuICAgICAgICAgIDxMaW5rSXRlbVxyXG4gICAgICAgICAgICBrZXk9e2xpbmtJdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgIHRpdGxlPXtsaW5rSXRlbS50aXRsZX1cclxuICAgICAgICAgICAgaHJlZj17bGlua0l0ZW0uaHJlZn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVyZ2VyO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rSXRlbSIsIkJ1cmdlciIsImxpbmtzQXJyYXkiLCJzaG93TWVudSIsInNldFNob3dNZW51IiwibWVudVNob3dDbGFzcyIsImJ1cmVyRXZlbnRUcmFuc2l0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNwYW4iLCJ1bCIsIm1hcCIsImxpbmtJdGVtIiwidGl0bGUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/components/Burger.tsx\n"));

/***/ })

});