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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"daf8c8a1a67f\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NzZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImRhZjhjOGExYTY3ZlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Header/components/Burger.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Header/components/Burger.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LinkItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkItem */ \"(app-pages-browser)/./src/components/Header/components/LinkItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Burger = (param)=>{\n    let { linksArray } = param;\n    _s();\n    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const menuShowClass = showMenu ? \"w-52 flex flex-col items-end -top-10 right-0\" : \"hidden\";\n    const burerEventTransition = showMenu ? \"2xl:-translate-x-52 xl:-translate-x-52 lg:-translate-x-52 md:-translate-x-52 sm:-translate-x-52 -translate-x-36 rotate-90 absolute -right-12 top-8\" : \"\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth > 767) {\n                setShowMenu(false);\n            }\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    zIndex: 2\n                },\n                onClick: ()=>setShowMenu(!showMenu),\n                className: \"transition-all \".concat(burerEventTransition, \" 2xl:hidden xl:hidden lg:hidden md:hidden flex flex-col gap-1\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"h-1 w-9 block bg-slate-600 rounded-md cursor-pointer \".concat(showMenu && \"rotate-45 translate-y-1\")\n                    }, void 0, false, {\n                        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"h-1 w-9 block bg-slate-600 rounded-md cursor-pointer \".concat(showMenu && \"hidden\")\n                    }, void 0, false, {\n                        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"h-1 w-9 block bg-slate-600 rounded-md cursor-pointer \".concat(showMenu && \"-rotate-45 -translate-y-1\")\n                    }, void 0, false, {\n                        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"absolute 2xl:hidden xl:hidden lg:hidden md:hidden \".concat(menuShowClass),\n                children: linksArray.map((linkItem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LinkItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: linkItem.title,\n                        href: linkItem.href\n                    }, linkItem.href, false, {\n                        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Burger, \"rdIPXO24M3BYrXO7K5OdGAGkMgo=\");\n_c = Burger;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Burger);\nvar _c;\n$RefreshReg$(_c, \"Burger\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9jb21wb25lbnRzL0J1cmdlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU0QztBQUNWO0FBTWxDLE1BQU1HLFNBQWdDO1FBQUMsRUFBRUMsVUFBVSxFQUFlOztJQUNoRSxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFDekMsTUFBTU0sZ0JBQWdCRixXQUNsQixpREFDQTtJQUNKLE1BQU1HLHVCQUF1QkgsV0FBVyx1SkFBdUo7SUFFL0xMLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsZUFBZTtZQUNuQixJQUFJQyxPQUFPQyxVQUFVLEdBQUcsS0FBSztnQkFDM0JMLFlBQVk7WUFDZDtRQUNGO1FBRUFJLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBRWxDLE9BQU87WUFDTEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUNERSxPQUFPO29CQUFFQyxRQUFPO2dCQUFFO2dCQUNoQkMsU0FBUyxJQUFNWixZQUFZLENBQUNEO2dCQUM1QlUsV0FBVyxrQkFBdUMsT0FBckJQLHNCQUFxQjs7a0NBRWxELDhEQUFDVzt3QkFDQ0osV0FBVyx3REFFVixPQURDVixZQUFZOzs7Ozs7a0NBR2hCLDhEQUFDYzt3QkFDQ0osV0FBVyx3REFFVixPQURDVixZQUFZOzs7Ozs7a0NBR2hCLDhEQUFDYzt3QkFDQ0osV0FBVyx3REFFVixPQURDVixZQUFZOzs7Ozs7Ozs7Ozs7MEJBSWxCLDhEQUFDZTtnQkFDQ0wsV0FBVyxxREFBbUUsT0FBZFI7MEJBRS9ESCxXQUFXaUIsR0FBRyxDQUFDLENBQUNDLHlCQUNmLDhEQUFDcEIsaURBQVFBO3dCQUVQcUIsT0FBT0QsU0FBU0MsS0FBSzt3QkFDckJDLE1BQU1GLFNBQVNFLElBQUk7dUJBRmRGLFNBQVNFLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFROUI7R0F4RE1yQjtLQUFBQTtBQTBETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvY29tcG9uZW50cy9CdXJnZXIudHN4PzI5NTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rSXRlbSBmcm9tIFwiLi9MaW5rSXRlbVwiO1xyXG5cclxudHlwZSBCdXJnZXJQcm9wcyA9IHtcclxuICBsaW5rc0FycmF5OiB7IHRpdGxlOiBzdHJpbmc7IGhyZWY6IHN0cmluZyB9W107XHJcbn07XHJcblxyXG5jb25zdCBCdXJnZXI6IFJlYWN0LkZDPEJ1cmdlclByb3BzPiA9ICh7IGxpbmtzQXJyYXkgfTogQnVyZ2VyUHJvcHMpID0+IHtcclxuICBjb25zdCBbc2hvd01lbnUsIHNldFNob3dNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBtZW51U2hvd0NsYXNzID0gc2hvd01lbnVcclxuICAgID8gXCJ3LTUyIGZsZXggZmxleC1jb2wgaXRlbXMtZW5kIC10b3AtMTAgcmlnaHQtMFwiXHJcbiAgICA6IFwiaGlkZGVuXCI7XHJcbiAgY29uc3QgYnVyZXJFdmVudFRyYW5zaXRpb24gPSBzaG93TWVudSA/IFwiMnhsOi10cmFuc2xhdGUteC01MiB4bDotdHJhbnNsYXRlLXgtNTIgbGc6LXRyYW5zbGF0ZS14LTUyIG1kOi10cmFuc2xhdGUteC01MiBzbTotdHJhbnNsYXRlLXgtNTIgLXRyYW5zbGF0ZS14LTM2IHJvdGF0ZS05MCBhYnNvbHV0ZSAtcmlnaHQtMTIgdG9wLThcIiA6IFwiXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2Nykge1xyXG4gICAgICAgIHNldFNob3dNZW51KGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICA8ZGl2IFxyXG4gICAgICBzdHlsZT17eyB6SW5kZXg6MiB9fVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNZW51KCFzaG93TWVudSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi1hbGwgJHtidXJlckV2ZW50VHJhbnNpdGlvbn0gMnhsOmhpZGRlbiB4bDpoaWRkZW4gbGc6aGlkZGVuIG1kOmhpZGRlbiBmbGV4IGZsZXgtY29sIGdhcC0xYH1cclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BoLTEgdy05IGJsb2NrIGJnLXNsYXRlLTYwMCByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgIHNob3dNZW51ICYmIFwicm90YXRlLTQ1IHRyYW5zbGF0ZS15LTFcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgaC0xIHctOSBibG9jayBiZy1zbGF0ZS02MDAgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICBzaG93TWVudSAmJiBcImhpZGRlblwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BoLTEgdy05IGJsb2NrIGJnLXNsYXRlLTYwMCByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgIHNob3dNZW51ICYmIFwiLXJvdGF0ZS00NSAtdHJhbnNsYXRlLXktMVwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgMnhsOmhpZGRlbiB4bDpoaWRkZW4gbGc6aGlkZGVuIG1kOmhpZGRlbiAke21lbnVTaG93Q2xhc3N9YH1cclxuICAgICAgPlxyXG4gICAgICAgIHtsaW5rc0FycmF5Lm1hcCgobGlua0l0ZW0pID0+IChcclxuICAgICAgICAgIDxMaW5rSXRlbVxyXG4gICAgICAgICAgICBrZXk9e2xpbmtJdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgIHRpdGxlPXtsaW5rSXRlbS50aXRsZX1cclxuICAgICAgICAgICAgaHJlZj17bGlua0l0ZW0uaHJlZn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVyZ2VyO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rSXRlbSIsIkJ1cmdlciIsImxpbmtzQXJyYXkiLCJzaG93TWVudSIsInNldFNob3dNZW51IiwibWVudVNob3dDbGFzcyIsImJ1cmVyRXZlbnRUcmFuc2l0aW9uIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ6SW5kZXgiLCJvbkNsaWNrIiwic3BhbiIsInVsIiwibWFwIiwibGlua0l0ZW0iLCJ0aXRsZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/components/Burger.tsx\n"));

/***/ })

});