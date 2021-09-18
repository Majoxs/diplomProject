"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplomproject"]("main",{

/***/ "./src/modules/carousel.js":
/*!*********************************!*\
  !*** ./src/modules/carousel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar carousel = function carousel() {\n  var slidesToShow = 3,\n      slidesToScroll = 1,\n      track = document.querySelector('.services-carousel'),\n      container = document.querySelector('.services-elements'),\n      items = document.querySelectorAll('.item-slide'),\n      btnPrev = document.querySelector('.arrow-left'),\n      btnNext = document.querySelector('.arrow-right'),\n      itemsCount = items.length,\n      itemWidth = container.clientWidth / slidesToShow + 1,\n      movePosition = slidesToScroll * itemWidth;\n  var position = 0;\n\n  var setPosition = function setPosition() {\n    track.style.transform = \"translateX(\".concat(position, \"px)\");\n  };\n\n  var checkBtns = function checkBtns() {\n    btnPrev.disabled = position === 0;\n    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;\n  };\n\n  checkBtns();\n  items.forEach(function (item) {\n    item.style.minWidth = \"\".concat(itemWidth, \"px\");\n  });\n  btnNext.addEventListener('click', function () {\n    var itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;\n    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\n    setPosition();\n    checkBtns();\n  });\n  btnPrev.addEventListener('click', function () {\n    var itemsLeft = Math.abs(position) / itemWidth;\n    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\n    setPosition();\n    checkBtns();\n  });\n  container.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('absolute')) {\n      document.querySelector('.modal-overlay').style.display = 'block';\n      document.querySelector('.modal-callback').style.display = 'block';\n    }\n  });\n  var closeModalBtn = document.querySelector('.modal-close > img'),\n      modalOverlay = document.querySelector('.modal-overlay'),\n      modalCallback = document.querySelector('.modal-callback');\n\n  var displayNone = function displayNone() {\n    modalOverlay.style.display = 'none';\n    modalCallback.style.display = 'none';\n  };\n\n  closeModalBtn.addEventListener('click', displayNone);\n  modalOverlay.addEventListener('click', displayNone);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack://diplomproject/./src/modules/carousel.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("52bfdf4b05106a6e06ed")
/******/ })();
/******/ 
/******/ }
);