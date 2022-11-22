/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import _ from 'lodash';\nconst divContainer = document.querySelector('.row-one');\n\nconst renderContent = () => {\n  const itemWrapper = document.createElement('div');\n  itemWrapper.className.add('.item-wrapper');\n  divContainer.appendChild(itemWrapper);\n  const foodImageWrapper = document.createElement('div');\n  foodImageWrapper.className.add('.food-img');\n  itemWrapper.appendChild(foodImageWrapper);\n  const foodImage = document.createElement('p');\n  foodImage.innerText = 'Food Image Goes Here';\n  foodImageWrapper.appendChild(foodImage);\n  const NameLikesWrapper = document.createElement('div');\n  NameLikesWrapper.classList.add('.fname-likes');\n  itemWrapper.appendChild(NameLikesWrapper);\n  const foodName = document.createElement('p');\n  foodName.innerHTML = 'Food Name';\n  NameLikesWrapper.appendChild(foodName);\n  const likeWrapper = document.createElement('span');\n  likeWrapper.classList.add('.likes');\n  NameLikesWrapper.appendChild(likeWrapper);\n  const likeBtn = document.createElement('button');\n  likeBtn.classList.add('.like-btn');\n  likeBtn.innerHTML = '<i class=\"fa-regular fa-heart\"></i>'\n  likeWrapper.appendChild(likeBtn);\n  const likes = document.createElement('p');\n  likes.innerHTML = '5 Likes';\n  likeWrapper.appendChild(likes);\n  const commentWrapper = document.createElement('div');\n  commentWrapper.classList.add('.comment');\n  itemWrapper.appendChild(commentWrapper);\n  const commentBtn = document.createElement('button');\n  commentBtn.innerText = 'Comments';\n  commentWrapper.appendChild(commentBtn);\n};\nrenderContent();\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/style.css"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;