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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2d0e9baf5efc\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NzZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjJkMGU5YmFmNWVmY1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Header/components/Burger.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Header/components/Burger.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LinkItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkItem */ \"(app-pages-browser)/./src/components/Header/components/LinkItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Burger = (param)=>{\n    let { linksArray } = param;\n    _s();\n    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const menuShowClass = showMenu ? \"w-52 flex flex-col items-end -top-10 right-0\" : \"hidden\";\n    const burerEventTransition = showMenu ? \"-translate-x-52 rotate-90\" : \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>setShowMenu(!showMenu),\n                className: \"transition-all \".concat(burerEventTransition, \" 2xl:hidden xl:hidden lg:hidden md:hidden flex flex-col gap-1\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"h-1 w-9 block bg-slate-600 rounded-md cursor-pointer \".concat(showMenu && \"rotate-45 translate-x-5\")\n                    }, void 0, false, {\n                        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"h-1 w-9 block bg-slate-600 rounded-md cursor-pointer \".concat(showMenu && \"hidden\")\n                    }, void 0, false, {\n                        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"h-1 w-9 block bg-slate-600 rounded-md cursor-pointer \".concat(showMenu && \"-rotate-45\")\n                    }, void 0, false, {\n                        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"absolute 2xl:hidden xl:hidden lg:hidden md:hidden \".concat(menuShowClass),\n                children: linksArray.map((linkItem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LinkItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: linkItem.title,\n                        href: linkItem.href\n                    }, linkItem.href, false, {\n                        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Burger, \"2FjIcsdimgVhm2IsUWodA2ftTZU=\");\n_c = Burger;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Burger);\nvar _c;\n$RefreshReg$(_c, \"Burger\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9jb21wb25lbnRzL0J1cmdlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVpQztBQUNDO0FBTWxDLE1BQU1FLFNBQWdDO1FBQUMsRUFBRUMsVUFBVSxFQUFlOztJQUNoRSxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFDekMsTUFBTU0sZ0JBQWdCRixXQUFXLGlEQUFpRDtJQUNsRixNQUFNRyx1QkFBdUJILFdBQVcsOEJBQThCO0lBQ3RFLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQ0NFLFNBQVMsSUFBTUwsWUFBWSxDQUFDRDtnQkFDNUJLLFdBQVcsa0JBQXVDLE9BQXJCRixzQkFBcUI7O2tDQUVsRCw4REFBQ0k7d0JBQUtGLFdBQVcsd0RBQThGLE9BQXRDTCxZQUFZOzs7Ozs7a0NBQ3JGLDhEQUFDTzt3QkFBS0YsV0FBVyx3REFBNkUsT0FBckJMLFlBQVk7Ozs7OztrQ0FDckYsOERBQUNPO3dCQUFLRixXQUFXLHdEQUFpRixPQUF6QkwsWUFBWTs7Ozs7Ozs7Ozs7OzBCQUV2Riw4REFBQ1E7Z0JBQ0NILFdBQVcscURBQW1FLE9BQWRIOzBCQUUvREgsV0FBV1UsR0FBRyxDQUFDLENBQUNDLHlCQUNmLDhEQUFDYixpREFBUUE7d0JBRVBjLE9BQU9ELFNBQVNDLEtBQUs7d0JBQ3JCQyxNQUFNRixTQUFTRSxJQUFJO3VCQUZkRixTQUFTRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FBUTlCO0dBM0JNZDtLQUFBQTtBQTZCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvY29tcG9uZW50cy9CdXJnZXIudHN4PzI5NTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlua0l0ZW0gZnJvbSBcIi4vTGlua0l0ZW1cIjtcclxuXHJcbnR5cGUgQnVyZ2VyUHJvcHMgPSB7XHJcbiAgbGlua3NBcnJheTogeyB0aXRsZTogc3RyaW5nOyBocmVmOiBzdHJpbmcgfVtdO1xyXG59O1xyXG5cclxuY29uc3QgQnVyZ2VyOiBSZWFjdC5GQzxCdXJnZXJQcm9wcz4gPSAoeyBsaW5rc0FycmF5IH06IEJ1cmdlclByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dNZW51LCBzZXRTaG93TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgbWVudVNob3dDbGFzcyA9IHNob3dNZW51ID8gXCJ3LTUyIGZsZXggZmxleC1jb2wgaXRlbXMtZW5kIC10b3AtMTAgcmlnaHQtMFwiIDogXCJoaWRkZW5cIjtcclxuICBjb25zdCBidXJlckV2ZW50VHJhbnNpdGlvbiA9IHNob3dNZW51ID8gXCItdHJhbnNsYXRlLXgtNTIgcm90YXRlLTkwXCIgOiBcIlwiO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TWVudSghc2hvd01lbnUpfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24tYWxsICR7YnVyZXJFdmVudFRyYW5zaXRpb259IDJ4bDpoaWRkZW4geGw6aGlkZGVuIGxnOmhpZGRlbiBtZDpoaWRkZW4gZmxleCBmbGV4LWNvbCBnYXAtMWB9XHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BoLTEgdy05IGJsb2NrIGJnLXNsYXRlLTYwMCByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyICR7c2hvd01lbnUgJiYgXCJyb3RhdGUtNDUgdHJhbnNsYXRlLXgtNVwifWB9Pjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BoLTEgdy05IGJsb2NrIGJnLXNsYXRlLTYwMCByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyICR7c2hvd01lbnUgJiYgXCJoaWRkZW5cIn1gfT48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaC0xIHctOSBibG9jayBiZy1zbGF0ZS02MDAgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlciAke3Nob3dNZW51ICYmIFwiLXJvdGF0ZS00NVwifWB9Pjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bFxyXG4gICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIDJ4bDpoaWRkZW4geGw6aGlkZGVuIGxnOmhpZGRlbiBtZDpoaWRkZW4gJHttZW51U2hvd0NsYXNzfWB9XHJcbiAgICAgID5cclxuICAgICAgICB7bGlua3NBcnJheS5tYXAoKGxpbmtJdGVtKSA9PiAoXHJcbiAgICAgICAgICA8TGlua0l0ZW1cclxuICAgICAgICAgICAga2V5PXtsaW5rSXRlbS5ocmVmfVxyXG4gICAgICAgICAgICB0aXRsZT17bGlua0l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgIGhyZWY9e2xpbmtJdGVtLmhyZWZ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1cmdlcjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGlua0l0ZW0iLCJCdXJnZXIiLCJsaW5rc0FycmF5Iiwic2hvd01lbnUiLCJzZXRTaG93TWVudSIsIm1lbnVTaG93Q2xhc3MiLCJidXJlckV2ZW50VHJhbnNpdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcGFuIiwidWwiLCJtYXAiLCJsaW5rSXRlbSIsInRpdGxlIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/components/Burger.tsx\n"));

/***/ })

});