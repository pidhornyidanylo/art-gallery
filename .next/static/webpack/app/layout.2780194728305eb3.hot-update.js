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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ccdbe470421f\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NzZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImNjZGJlNDcwNDIxZlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Header/components/Burger.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Header/components/Burger.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LinkItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkItem */ \"(app-pages-browser)/./src/components/Header/components/LinkItem.tsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Burger = (param)=>{\n    let { linksArray } = param;\n    _s();\n    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const burgerSpanClasses = \"block h-1 w-9 cursor-pointer rounded-md bg-slate-600\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth > 767) {\n                setShowMenu(false);\n            }\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>setShowMenu(!showMenu),\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"flex flex-col gap-1 transition-all md:hidden lg:hidden xl:hidden 2xl:hidden\", {\n                    \"-translate-x-36 rotate-90\": showMenu\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(burgerSpanClasses, {\n                            \"translate-y-1 rotate-45\": showMenu\n                        })\n                    }, void 0, false, {\n                        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(burgerSpanClasses, {\n                            hidden: showMenu\n                        })\n                    }, void 0, false, {\n                        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(burgerSpanClasses, {\n                            \"-translate-y-1 -rotate-45\": showMenu\n                        })\n                    }, void 0, false, {\n                        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"absolute md:hidden lg:hidden xl:hidden 2xl:hidden\", {\n                    \"-top-8 right-0 flex w-40 flex-col items-end\": showMenu,\n                    hidden: !showMenu\n                }),\n                children: linksArray.map((linkItem)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LinkItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: linkItem.title,\n                        href: linkItem.href,\n                        onClick: ()=>setShowMenu(!showMenu)\n                    }, linkItem.href, false, {\n                        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\newProjects\\\\Next.js\\\\project-space\\\\src\\\\components\\\\Header\\\\components\\\\Burger.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Burger, \"rdIPXO24M3BYrXO7K5OdGAGkMgo=\");\n_c = Burger;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Burger);\nvar _c;\n$RefreshReg$(_c, \"Burger\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9jb21wb25lbnRzL0J1cmdlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDNEM7QUFDVjtBQUNWO0FBTXhCLE1BQU1JLFNBQWdDO1FBQUMsRUFBRUMsVUFBVSxFQUFlOztJQUNoRSxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTU8sb0JBQ0o7SUFFRlIsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxlQUFlO1lBQ25CLElBQUlDLE9BQU9DLFVBQVUsR0FBRyxLQUFLO2dCQUMzQkosWUFBWTtZQUNkO1FBQ0Y7UUFFQUcsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFFbEMsT0FBTztZQUNMQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQ0NFLFNBQVMsSUFBTVQsWUFBWSxDQUFDRDtnQkFDNUJTLFdBQVdaLGdEQUFJQSxDQUNiLCtFQUNBO29CQUNFLDZCQUE2Qkc7Z0JBQy9COztrQ0FHRiw4REFBQ1c7d0JBQ0NGLFdBQVdaLGdEQUFJQSxDQUFDSyxtQkFBbUI7NEJBQ2pDLDJCQUEyQkY7d0JBQzdCOzs7Ozs7a0NBRUYsOERBQUNXO3dCQUNDRixXQUFXWixnREFBSUEsQ0FBQ0ssbUJBQW1COzRCQUNqQ1UsUUFBUVo7d0JBQ1Y7Ozs7OztrQ0FFRiw4REFBQ1c7d0JBQ0NGLFdBQVdaLGdEQUFJQSxDQUFDSyxtQkFBbUI7NEJBQ2pDLDZCQUE2QkY7d0JBQy9COzs7Ozs7Ozs7Ozs7MEJBR0osOERBQUNhO2dCQUNDSixXQUFXWixnREFBSUEsQ0FBQyxxREFBcUQ7b0JBQ25FLCtDQUErQ0c7b0JBQy9DWSxRQUFRLENBQUNaO2dCQUNYOzBCQUVDRCxXQUFXZSxHQUFHLENBQUMsQ0FBQ0M7b0JBQ2YscUJBQ0UsOERBQUNuQixpREFBUUE7d0JBRVBvQixPQUFPRCxTQUFTQyxLQUFLO3dCQUNyQkMsTUFBTUYsU0FBU0UsSUFBSTt3QkFDbkJQLFNBQVMsSUFBTVQsWUFBWSxDQUFDRDt1QkFIdkJlLFNBQVNFLElBQUk7Ozs7O2dCQUt4Qjs7Ozs7Ozs7Ozs7O0FBSVI7R0FoRU1uQjtLQUFBQTtBQWtFTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvY29tcG9uZW50cy9CdXJnZXIudHN4PzI5NTkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rSXRlbSBmcm9tICcuL0xpbmtJdGVtJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuXG50eXBlIEJ1cmdlclByb3BzID0ge1xuICBsaW5rc0FycmF5OiB7IHRpdGxlOiBzdHJpbmc7IGhyZWY6IHN0cmluZyB9W107XG59O1xuXG5jb25zdCBCdXJnZXI6IFJlYWN0LkZDPEJ1cmdlclByb3BzPiA9ICh7IGxpbmtzQXJyYXkgfTogQnVyZ2VyUHJvcHMpID0+IHtcbiAgY29uc3QgW3Nob3dNZW51LCBzZXRTaG93TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGJ1cmdlclNwYW5DbGFzc2VzID1cbiAgICAnYmxvY2sgaC0xIHctOSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLW1kIGJnLXNsYXRlLTYwMCc7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjcpIHtcbiAgICAgICAgc2V0U2hvd01lbnUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNZW51KCFzaG93TWVudSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAnZmxleCBmbGV4LWNvbCBnYXAtMSB0cmFuc2l0aW9uLWFsbCBtZDpoaWRkZW4gbGc6aGlkZGVuIHhsOmhpZGRlbiAyeGw6aGlkZGVuJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnLXRyYW5zbGF0ZS14LTM2IHJvdGF0ZS05MCc6IHNob3dNZW51LFxuICAgICAgICAgIH1cbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goYnVyZ2VyU3BhbkNsYXNzZXMsIHtcbiAgICAgICAgICAgICd0cmFuc2xhdGUteS0xIHJvdGF0ZS00NSc6IHNob3dNZW51LFxuICAgICAgICAgIH0pfVxuICAgICAgICA+PC9zcGFuPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChidXJnZXJTcGFuQ2xhc3Nlcywge1xuICAgICAgICAgICAgaGlkZGVuOiBzaG93TWVudSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goYnVyZ2VyU3BhbkNsYXNzZXMsIHtcbiAgICAgICAgICAgICctdHJhbnNsYXRlLXktMSAtcm90YXRlLTQ1Jzogc2hvd01lbnUsXG4gICAgICAgICAgfSl9XG4gICAgICAgID48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bFxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2Fic29sdXRlIG1kOmhpZGRlbiBsZzpoaWRkZW4geGw6aGlkZGVuIDJ4bDpoaWRkZW4nLCB7XG4gICAgICAgICAgJy10b3AtOCByaWdodC0wIGZsZXggdy00MCBmbGV4LWNvbCBpdGVtcy1lbmQnOiBzaG93TWVudSxcbiAgICAgICAgICBoaWRkZW46ICFzaG93TWVudSxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHtsaW5rc0FycmF5Lm1hcCgobGlua0l0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmtJdGVtXG4gICAgICAgICAgICAgIGtleT17bGlua0l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgdGl0bGU9e2xpbmtJdGVtLnRpdGxlfVxuICAgICAgICAgICAgICBocmVmPXtsaW5rSXRlbS5ocmVmfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TWVudSghc2hvd01lbnUpfSAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1cmdlcjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmtJdGVtIiwiY2xzeCIsIkJ1cmdlciIsImxpbmtzQXJyYXkiLCJzaG93TWVudSIsInNldFNob3dNZW51IiwiYnVyZ2VyU3BhbkNsYXNzZXMiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3BhbiIsImhpZGRlbiIsInVsIiwibWFwIiwibGlua0l0ZW0iLCJ0aXRsZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/components/Burger.tsx\n"));

/***/ })

});