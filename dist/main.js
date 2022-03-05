/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-elements */ \"./src/load-elements.js\");\n\n\n//const container = document.createElement(\"div\");\n//container.textContent = \"hello world\";\n\nconst content = document.querySelector(\"#content\");\n(0,_load_elements__WEBPACK_IMPORTED_MODULE_0__.loadElements)(content);\nconsole.log(content);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load-elements.js":
/*!******************************!*\
  !*** ./src/load-elements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadElements\": () => (/* binding */ loadElements)\n/* harmony export */ });\nfunction loadElements(content) {\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Meatball Factory\";\n    content.appendChild(title);\n\n    const navbar = document.createElement(\"nav\");\n    \n    const home = document.createElement(\"button\");\n    home.textContent = \"Home\";\n    \n    const menu = document.createElement(\"button\");\n    menu.textContent = \"Menu\";\n    \n    const contact = document.createElement(\"button\");\n    contact.textContent = \"Contact\";\n    \n    navbar.appendChild(home);\n    navbar.appendChild(menu);\n    navbar.appendChild(contact);\n    \n    content.appendChild(navbar);\n\n    const heading = document.createElement(\"h2\");\n    heading.textContent = \"Home of Toronto's Tastiest Meatballs\";\n    content.appendChild(heading);\n\n    const intro = document.createElement(\"p\");\n    intro.textContent = \"Located in the heart of Toronto's Little Italy, Meatball Factory \\\n                        has been happily serving Torontonians meatballs whose recipe dates back \\\n                        to 1937. Come try out our meatballs today!\";\n    content.appendChild(intro);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/load-elements.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;