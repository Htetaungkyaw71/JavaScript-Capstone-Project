"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/comment.js */ \"./src/modules/comment.js\");\n/* harmony import */ var _modules_like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/like.js */ \"./src/modules/like.js\");\n/* harmony import */ var _modules_itemCount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/itemCount.js */ \"./src/modules/itemCount.js\");\n// import _ from 'lodash';\n\n\n\n\nconst mainapi = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';\n\nconst dialog = document.getElementById('dialog');\nconst divContainer = document.querySelector('.row-one');\n\nconst renderContent = (item) => {\n  const divElement = document.createElement('div');\n  divElement.className = 'col-one';\n  divElement.innerHTML = `<div class=\"item-wrapper\">\n  <div class=\"food-img\">\n      <img src=\"${item.strMealThumb}\" alt=\"\" class=\"food-img1\"> \n  </div>\n  <div class=\"fname-likes\">\n      <h2>${item.strMeal}</h2>\n     <span class=\"likes\">\n      <button class=\"like-btn\" id= \"${item.idMeal}\"><i class=\"fa-regular fa-heart\"></i></button>  \n       <p class= \"num-likes\" id = \"likes${item.idMeal}\" > </p>\n      </span>\n  </div>\n\n  <div class=\"comment\">\n      <button type=\"button\" class=\"btn\" id=\"${item.idMeal}\">Comments</button>\n  </div>\n  </div>`;\n  divContainer.append(divElement);\n};\n\n// View detail\ndocument.addEventListener('DOMContentLoaded', async () => {\n  dialog.classList.add('hidden');\n  fetch(mainapi)\n    .then((response) => response.json())\n    .then((response) => {\n      const data = response.meals;\n      const list = data.slice(0, 6);\n      (0,_modules_itemCount_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(list.length);\n\n      list.forEach((item) => {\n        renderContent(item);\n        (0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_1__.renderLike)(item.idMeal);\n      });\n      (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_1__.like)();\n    });\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchComment\": () => (/* binding */ fetchComment),\n/* harmony export */   \"fetchDataDeatil\": () => (/* binding */ fetchDataDeatil),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\n/* eslint-disable no-console */\nconst detailapi = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';\nconst invo = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst key = 'fPYwNXOHCbzOe8GPrdwI';\n\nconst fetchDataDeatil = async (id) => {\n  const response = await fetch(`${detailapi}${id}`);\n  const data = await response.json();\n  return data.meals[0];\n};\n\nconst fetchComment = async (id) => {\n  const response = await fetch(`${invo}${key}/comments?item_id=${id}`);\n  if (response.status !== 200) {\n    console.clear();\n    return null;\n  }\n  const data = await response.json();\n  return data;\n};\n\nconst postComment = async (data) => {\n  const response = await fetch(`${invo}${key}/comments`, {\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n\n  });\n  if (response.status !== 201) {\n    return null;\n  }\n  return true;\n};\n\nconst postLike = (id) => {\n  fetch(`${invo}${key}/likes`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n    }),\n  });\n};\n\nconst getLikes = async () => {\n  const response = await fetch(`${invo}${key}/likes`);\n  const data = await response.json();\n  return data;\n};\n\n//# sourceURL=webpack://webpack-demo/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* eslint-disable camelcase */\n\n\nconst dialog = document.getElementById('dialog');\n\n// For Date\nlet today = new Date();\nlet dd = today.getDate();\nlet mm = today.getMonth() + 1;\nconst yyyy = today.getFullYear();\nif (dd < 10) {\n  dd = `0${dd}`;\n}\n\nif (mm < 10) {\n  mm = `0${mm}`;\n}\ntoday = `${yyyy}-${mm}-${dd}`;\n// For Date\n\nconst renderDetail = (data) => {\n  const div = document.createElement('div');\n  div.innerHTML = `\n        <div id=\"detail\">\n        <div class=\"closeIcon\">\n            <i class=\"fa-solid fa-xmark\" id=\"close\"></i> \n        </div>\n  \n        <div class=\"row\">\n        <div class=\"col\">\n            <img src=\"${data.strMealThumb}\" class=\"detailImg\">\n                <h3 class=\"detailHeading\">${data.strMeal}</h3>\n                <p class=\"detailText\">\n                    ${data.strInstructions}\n                </p>\n        </div>\n        <div class=\"col\">\n            <form action=\"\" id=\"commentForm\">\n                <h2>Add a comment</h2>\n                <input type=\"text\" placeholder=\"your name\" name=\"name\" required>\n                <br>\n                <textarea cols=\"23\" rows=\"5\" placeholder=\"your insights\" name=\"insight\" required></textarea>\n                <br>\n                <input type=\"submit\" value=\"submit\">\n            </form>\n            <hr>\n            <div>\n                <h2 class=\"comments\">Comments</h2>\n                <ul class=\"commentList\">\n                \n                </ul>\n            <div>\n        \n  \n        </div>\n    </div>\n         \n        </div>\n        `;\n  return div;\n};\n\nconst renderComment = ({ creation_date, username, comment }) => {\n  const ul = document.querySelector('.commentList');\n  if (ul.textContent === 'No Comments') {\n    ul.innerHTML = '';\n  }\n  const li = document.createElement('li');\n  li.innerHTML = `\n    <p>\n    ${creation_date} ${username}:${comment}\n    </p>\n    `;\n  ul.appendChild(li);\n};\n\nconst closefunc = () => {\n  document.querySelectorAll('#close').forEach((btn) => {\n    btn.onclick = () => {\n      dialog.classList.add('hidden');\n      document.body.style.overflow = 'scroll';\n    };\n  });\n};\n\nconst addComment = (id) => {\n  const form = document.getElementById('commentForm');\n  form.onsubmit = (e) => {\n    e.preventDefault();\n    const name = e.target.name.value;\n    const insight = e.target.insight.value;\n    const data = {\n      item_id: id,\n      username: name,\n      comment: insight,\n    };\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(data);\n    renderComment({ ...data, creation_date: today });\n    e.target.name.value = '';\n    e.target.insight.value = '';\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  document.querySelectorAll('.btn').forEach((btn) => {\n    btn.onclick = () => {\n      dialog.classList.remove('hidden');\n      dialog.innerHTML = '';\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchDataDeatil)(btn.id).then((data) => {\n        document.body.style.overflow = 'hidden';\n        dialog.append(renderDetail(data));\n        closefunc();\n        addComment(btn.id);\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchComment)(btn.id).then((data) => {\n          if (data) {\n            data.forEach((item) => renderComment(item));\n          } else {\n            document.querySelector('.commentList').innerHTML = '<li>No Comments</li>';\n          }\n        });\n      });\n    };\n  });\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/itemCount.js":
/*!**********************************!*\
  !*** ./src/modules/itemCount.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dispCounter = (count) => {\n  const movieUpdate = document.getElementById('menu-count');\n  movieUpdate.innerHTML = `Menu(${count})`;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispCounter);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/itemCount.js?");

/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"like\": () => (/* binding */ like),\n/* harmony export */   \"renderLike\": () => (/* binding */ renderLike)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\n\n// Post like function\nconst like = async () => {\n  const likeBtn = document.querySelectorAll('.like-btn');\n  likeBtn.forEach((icon) => {\n    icon.addEventListener('click', async () => {\n      const { id } = icon;\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postLike)(id);\n    });\n  });\n};\n\n// render like function\nconst renderLike = async (id) => {\n  const likes = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\n  likes.forEach((like) => {\n    if (like.item_id === id) {\n      document.getElementById(`likes${id}`).innerHTML = like.likes;\n    }\n  });\n  document.querySelectorAll('.num-likes').forEach((element) => {\n    if (element.innerHTML === ' ') {\n      element.innerHTML = 0;\n    }\n  });\n};\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/like.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"), __webpack_exec__("./src/style.css"));
/******/ }
]);