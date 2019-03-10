/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/web/views/books/books-add.entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/web/components/add/add.css":
/*!****************************************!*\
  !*** ./src/web/components/add/add.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/web/components/add/add.css?");

/***/ }),

/***/ "./src/web/components/add/add.js":
/*!***************************************!*\
  !*** ./src/web/components/add/add.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.css */ \"./src/web/components/add/add.css\");\n/* harmony import */ var _add_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_add_css__WEBPACK_IMPORTED_MODULE_0__);\n\nconst add = {\n    init() {\n        console.log(\"add组建对应的入口文件\");\n        xtag.create('x-add', class extends XTagElement {\n            '::template(true)' (){\n                return `<form id=\"contact-form\" action=\"/save\">\n                <div class=\"form-group field-contactform-name required\">\n                    <label class=\"control-label\" for=\"contactform-name\">书名</label>\n                    <input type=\"text\" id=\"contactform-name\" class=\"form-control\" name=\"Book[name]\" autofocus=\"\" aria-required=\"true\" aria-invalid=\"true\">\n                    <p class=\"help-block help-block-error\" disabled>书名 cannot be blank.</p>\n                </div>\n                <div class=\"form-group field-contactform-desc required \">\n                    <label class=\"control-label\" for=\"contactform-desc\">简介</label>\n                    <input type=\"text\" id=\"contactform-desc\" class=\"form-control\" name=\"Book[desc]\" aria-required=\"true\" aria-invalid=\"true\">\n                </div>\n                <div class=\"form-group field-contactform-price required \">\n                    <label class=\"control-label\" for=\"contactform-price\">价格</label>\n                    <input type=\"text\" id=\"contactform-price\" class=\"form-control\" name=\"Book[price]\" aria-required=\"true\" aria-invalid=\"true\">\n                    <p class=\"help-block help-block-error\" disabled>价格 cannot be blank.</p>\n                </div>\n                <div class=\"form-group field-contactform-author required \">\n                    <label class=\"control-label\" for=\"contactform-author\">作者</label>\n                    <input type=\"text\" id=\"contactform-author\" class=\"form-control\" name=\"Book[author]\" aria-required=\"true\" aria-invalid=\"true\">\n                </div>\n                <div class=\"form-group field-contactform-from required \">\n                    <label class=\"control-label\" for=\"contactform-from\">出版社</label>\n                    <input type=\"text\" id=\"contactform-from\" class=\"form-control\" name=\"Book[from]\" aria-required=\"true\" aria-invalid=\"true\">\n                </div>\n                <div class=\"form-group field-contactform-author required \">\n                    <label class=\"control-label\" for=\"contactform-author\">出版时间</label>\n                    <input type=\"date\" id=\"contactform-author\" class=\"form-control\" name=\"Book[author]\" aria-required=\"true\" aria-invalid=\"true\">\n                </div>\n                <div class=\"form-group\">\n                    <a  class=\"btn btn-primary\"  id=\"btn_submit\">Submit</a>\n                    <button  class=\"btn btn-primary\" >Submit2</button>\n                </div>\n            </form>`\n              }\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (add);\n\n//# sourceURL=webpack:///./src/web/components/add/add.js?");

/***/ }),

/***/ "./src/web/components/navigation/navigation.css":
/*!******************************************************!*\
  !*** ./src/web/components/navigation/navigation.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/web/components/navigation/navigation.css?");

/***/ }),

/***/ "./src/web/components/navigation/navigation.js":
/*!*****************************************************!*\
  !*** ./src/web/components/navigation/navigation.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigation_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.css */ \"./src/web/components/navigation/navigation.css\");\n/* harmony import */ var _navigation_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navigation_css__WEBPACK_IMPORTED_MODULE_0__);\n\nconst navigation ={\n    init() {\n        console.log(\"navigation组建对应的入口文件\")\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navigation);\n\n//# sourceURL=webpack:///./src/web/components/navigation/navigation.js?");

/***/ }),

/***/ "./src/web/views/books/books-add.entry.js":
/*!************************************************!*\
  !*** ./src/web/views/books/books-add.entry.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_add_add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/add/add.js */ \"./src/web/components/add/add.js\");\n/* harmony import */ var _components_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navigation/navigation.js */ \"./src/web/components/navigation/navigation.js\");\n\n\n\n_components_add_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n_components_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n\n//# sourceURL=webpack:///./src/web/views/books/books-add.entry.js?");

/***/ })

/******/ });