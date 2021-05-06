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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/_burger.js":
/*!***************************!*\
  !*** ./app/js/_burger.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const menuToggle = document.querySelector('.menu-toggle'),\r\n  menu = document.querySelector('.menu');\r\n\r\n/*Смена кнопки бургер-меню, Открытие/закрытие панели навигации */\r\nmenuToggle.addEventListener('click', () => {\r\n  menuToggle.classList.toggle('menu-toggle--open');\r\n  menu.classList.toggle('menu--open');\r\n})\n\n//# sourceURL=webpack:///./app/js/_burger.js?");

/***/ }),

/***/ "./app/js/_infobox.js":
/*!****************************!*\
  !*** ./app/js/_infobox.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* Infobox Show */\r\n\r\nconst infoBnt = document.querySelector('.infobox__btn');\r\n\r\n\r\ninfoBnt.addEventListener('click', event => {\r\n  const parentInfo = event.currentTarget.closest('.infobox');\r\n\r\n  parentInfo.classList.toggle('infobox--open');\r\n  console.log(parentInfo);\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./app/js/_infobox.js?");

/***/ }),

/***/ "./app/js/_modal.js":
/*!**************************!*\
  !*** ./app/js/_modal.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* Login Modal */\r\n\r\nconst loginBtn = document.querySelector('[data-modal]');\r\nconst body = document.body;\r\nconst modalClose = document.querySelector('.modal__close');\r\nconst modal = document.querySelector('.modal');\r\n\r\nloginBtn.addEventListener('click', event => {\r\n  let $this = event.currentTarget;\r\n  let modalId = $this.getAttribute('data-modal');\r\n  let modal = document.getElementById(modalId);\r\n  let modalContent = modal.querySelector('.modal__content');\r\n\r\n  modalContent.addEventListener('click', event => {\r\n    event.stopPropagation();\r\n  })\r\n\r\n  modal.classList.remove('is-hidden');\r\n  body.classList.add('no-scroll');\r\n\r\n  setTimeout(() => {\r\n    modalContent.style.transform = 'none';\r\n    modalContent.style.opacity = '1';\r\n  }, 1);\r\n\r\n})\r\n\r\nmodalClose.addEventListener('click', event => {\r\n  let currentModal = event.currentTarget.closest('.modal');\r\n\r\n  closeModal(currentModal);\r\n})\r\n\r\n\r\nmodal.addEventListener('click', event => {\r\n  let currentModal = event.target;\r\n\r\n  closeModal(currentModal);\r\n})\r\n\r\nfunction closeModal(modal) {\r\n  let modalContent = modal.querySelector('.modal__content');\r\n  modalContent.removeAttribute('style');\r\n\r\n  setTimeout(() => {\r\n    modal.classList.add('is-hidden');\r\n    body.classList.remove('no-scroll');\r\n  }, 200)\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./app/js/_modal.js?");

/***/ }),

/***/ "./app/js/_slider.js":
/*!***************************!*\
  !*** ./app/js/_slider.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* Slider */\r\n\r\nnew Swiper('.slider__container', {\r\n  pagination: {\r\n    el: '.swiper-pagination',\r\n    clickable: true,\r\n  },\r\n\r\n  autoplay: {\r\n    delay: 4000,\r\n    stopOnLastSlide: false,\r\n    disabledOnInteraction: false\r\n  },\r\n\r\n  speed: 800,\r\n\r\n  initialSlide: 1,\r\n\r\n  loop: true,\r\n});\n\n//# sourceURL=webpack:///./app/js/_slider.js?");

/***/ }),

/***/ 0:
/*!*********************************************************************************************!*\
  !*** multi ./app/js/_burger.js ./app/js/_infobox.js ./app/js/_modal.js ./app/js/_slider.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\Develop\\My_projects\\Test\\ADCI\\project\\app\\js\\_burger.js */\"./app/js/_burger.js\");\n__webpack_require__(/*! D:\\Develop\\My_projects\\Test\\ADCI\\project\\app\\js\\_infobox.js */\"./app/js/_infobox.js\");\n__webpack_require__(/*! D:\\Develop\\My_projects\\Test\\ADCI\\project\\app\\js\\_modal.js */\"./app/js/_modal.js\");\nmodule.exports = __webpack_require__(/*! D:\\Develop\\My_projects\\Test\\ADCI\\project\\app\\js\\_slider.js */\"./app/js/_slider.js\");\n\n\n//# sourceURL=webpack:///multi_./app/js/_burger.js_./app/js/_infobox.js_./app/js/_modal.js_./app/js/_slider.js?");

/***/ })

/******/ });