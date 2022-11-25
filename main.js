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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/comment.js */ \"./src/modules/comment.js\");\n/* harmony import */ var _img_festus_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/festus.jpg */ \"./src/img/festus.jpg\");\n/* harmony import */ var _img_htet_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/htet.jpg */ \"./src/img/htet.jpg\");\n/* harmony import */ var _img_seafood_log_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/seafood-log.jpg */ \"./src/img/seafood-log.jpg\");\n/* harmony import */ var _modules_like_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/like.js */ \"./src/modules/like.js\");\n/* harmony import */ var _modules_itemCount_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/itemCount.js */ \"./src/modules/itemCount.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst mainapi = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';\r\n\r\nconst dialog = document.getElementById('dialog');\r\nconst divContainer = document.querySelector('.row-one');\r\n\r\nconst renderContent = (item) => {\r\n  const divElement = document.createElement('div');\r\n  divElement.className = 'col-one';\r\n  divElement.innerHTML = `<div class=\"item-wrapper\">\r\n  <div class=\"food-img\">\r\n      <img src=\"${item.strMealThumb}\" alt=\"\" class=\"food-img1\"> \r\n  </div>\r\n  <div class=\"fname-likes\">\r\n      <h2>${item.strMeal}</h2>\r\n     <span class=\"likes\">\r\n     <p class= \"num-likes\" id = \"likes${item.idMeal}\"> </p>\r\n      <button class=\"like-btn\" id= \"${item.idMeal}\">\r\n      <i class=\"fa-regular fa-heart\"></i>\r\n      </button>  \r\n\r\n      </span>\r\n  </div>\r\n  <div class=\"comment\">\r\n      <button type=\"button\" class=\"btn\" id=\"${item.idMeal}\">View</button>\r\n  </div>\r\n  </div>`;\r\n  divContainer.append(divElement);\r\n};\r\n\r\ndocument.addEventListener('DOMContentLoaded', async () => {\r\n  dialog.classList.add('hidden');\r\n  fetch(mainapi)\r\n    .then((response) => response.json())\r\n    .then((response) => {\r\n      const data = response.meals;\r\n      const list = data.slice(1, 7);\r\n      const movieUpdate = document.getElementById('menu-count');\r\n      movieUpdate.innerHTML = `Menu(${(0,_modules_itemCount_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(list)})`;\r\n\r\n      list.forEach((item) => {\r\n        renderContent(item);\r\n        (0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_4__.renderLike)(item.idMeal);\r\n      });\r\n      (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_4__.like)();\r\n    });\r\n\r\n  const img = document.createElement('img');\r\n  const a = document.createElement('a');\r\n  a.href = 'https://github.com/Htetaungkyaw71';\r\n  img.className = 'author';\r\n  img.src = _img_htet_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n  a.append(img);\r\n\r\n  const img1 = document.createElement('img');\r\n  const a1 = document.createElement('a');\r\n  a1.href = 'https://github.com/Enning94';\r\n  img1.className = 'author';\r\n  img1.src = _img_festus_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n  a1.append(img1);\r\n\r\n  document.querySelector('.author-img').append(a);\r\n  document.querySelector('.author-img').append(a1);\r\n\r\n  document.querySelector('.icon').href = _img_seafood_log_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n});\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/CommentCount.js":
/*!*************************************!*\
  !*** ./src/modules/CommentCount.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counter\": () => (/* binding */ counter),\n/* harmony export */   \"increaseCount\": () => (/* binding */ increaseCount)\n/* harmony export */ });\nconst counter = (data) => {\r\n  if (data) {\r\n    return data.length;\r\n  }\r\n\r\n  return 0;\r\n};\r\n\r\nconst increaseCount = (index) => {\r\n  index += 1;\r\n  return index;\r\n};\n\n//# sourceURL=webpack://webpack-demo/./src/modules/CommentCount.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchComment\": () => (/* binding */ fetchComment),\n/* harmony export */   \"fetchDataDeatil\": () => (/* binding */ fetchDataDeatil),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\n/* eslint-disable no-console */\r\nconst detailapi = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';\r\nconst invo = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\nconst key = 'fPYwNXOHCbzOe8GPrdwI';\r\n\r\nconst fetchDataDeatil = async (id) => {\r\n  const response = await fetch(`${detailapi}${id}`);\r\n  const data = await response.json();\r\n  return data.meals[0];\r\n};\r\n\r\nconst fetchComment = async (id) => {\r\n  const response = await fetch(`${invo}${key}/comments?item_id=${id}`);\r\n  if (response.status !== 200) {\r\n    console.clear();\r\n    return null;\r\n  }\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst postComment = async (data) => {\r\n  const response = await fetch(`${invo}${key}/comments`, {\r\n    method: 'POST',\r\n    body: JSON.stringify(data),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n  if (response.status !== 201) {\r\n    return null;\r\n  }\r\n  return true;\r\n};\r\n\r\nconst postLike = (id) => {\r\n  fetch(`${invo}${key}/likes`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n    }),\r\n  });\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const response = await fetch(`${invo}${key}/likes`);\r\n  const data = await response.json();\r\n  return data;\r\n};\n\n//# sourceURL=webpack://webpack-demo/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _CommentCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentCount.js */ \"./src/modules/CommentCount.js\");\n/* eslint-disable camelcase */\r\n\r\n\r\n\r\nconst dialog = document.getElementById('dialog');\r\n\r\n// For Date\r\nlet today = new Date();\r\nlet dd = today.getDate();\r\nlet mm = today.getMonth() + 1;\r\nconst yyyy = today.getFullYear();\r\nif (dd < 10) {\r\n  dd = `0${dd}`;\r\n}\r\nif (mm < 10) {\r\n  mm = `0${mm}`;\r\n}\r\ntoday = `${yyyy}-${mm}-${dd}`;\r\n// For Date\r\n\r\nconst renderDetail = (data) => {\r\n  const div = document.createElement('div');\r\n  div.innerHTML = `\r\n        <div id=\"detail\">\r\n        <div class=\"closeIcon\">\r\n            <i class=\"fa-solid fa-xmark\" id=\"close\"></i> \r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n        <div class=\"col\">\r\n            <img src=\"${data.strMealThumb}\" class=\"detailImg\">\r\n                <h3 class=\"detailHeading\">${data.strMeal}</h3>\r\n                <p class=\"detailText\">\r\n                    ${data.strInstructions}\r\n                </p>\r\n        </div>\r\n        <div class=\"col\">\r\n            <form action=\"\" id=\"commentForm\">\r\n                <h2>Add a comment</h2>\r\n                <input type=\"text\" placeholder=\"your name\" name=\"name\" required>\r\n                <br>\r\n                <textarea cols=\"23\" rows=\"5\" placeholder=\"your insights\" name=\"insight\" required></textarea>\r\n                <br>\r\n                <input type=\"submit\" value=\"submit\">\r\n            </form>\r\n            <hr>\r\n            <div>\r\n                  <h2 class=\"comments\">Comments\r\n                (<span id=\"commentCounter\"></span>)\r\n                </h2>\r\n                <ul class=\"commentList\">\r\n                \r\n                </ul>\r\n            <div>\r\n        \r\n  \r\n        </div>\r\n    </div>\r\n         \r\n        </div>\r\n        `;\r\n  return div;\r\n};\r\n\r\nconst renderComment = ({ creation_date, username, comment }) => {\r\n  const ul = document.querySelector('.commentList');\r\n  if (ul.textContent === 'No Comments') {\r\n    ul.innerHTML = '';\r\n  }\r\n  const li = document.createElement('li');\r\n  li.innerHTML = `\r\n    <p>\r\n    ${creation_date} ${username}:${comment}\r\n    </p>\r\n    `;\r\n  ul.appendChild(li);\r\n};\r\n\r\nconst closefunc = () => {\r\n  document.querySelectorAll('#close').forEach((btn) => {\r\n    btn.onclick = () => {\r\n      document.body.style.position = 'absolute';\r\n      document.querySelector('main').classList.remove('blur');\r\n      dialog.classList.add('hidden');\r\n      document.body.style.overflow = 'scroll';\r\n    };\r\n  });\r\n};\r\n\r\nconst addComment = (id) => {\r\n  const form = document.getElementById('commentForm');\r\n  form.onsubmit = (e) => {\r\n    e.preventDefault();\r\n    const name = e.target.name.value;\r\n    const insight = e.target.insight.value;\r\n    const data = {\r\n      item_id: id,\r\n      username: name,\r\n      comment: insight,\r\n    };\r\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(data);\r\n    renderComment({ ...data, creation_date: today });\r\n    form.reset();\r\n    const index = +document.getElementById('commentCounter').innerHTML;\r\n    document.getElementById('commentCounter').innerHTML = (0,_CommentCount_js__WEBPACK_IMPORTED_MODULE_1__.increaseCount)(index);\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  document.querySelectorAll('.btn').forEach((btn) => {\r\n    btn.onclick = () => {\r\n      document.body.style.position = 'fixed';\r\n      document.querySelector('main').classList.add('blur');\r\n      document.querySelector('main').style.background = 'rgb(193,199,208,0.5)';\r\n      dialog.classList.remove('hidden');\r\n      dialog.innerHTML = '';\r\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchDataDeatil)(btn.id).then((data) => {\r\n        document.body.style.overflow = 'hidden';\r\n        dialog.append(renderDetail(data));\r\n        closefunc();\r\n        addComment(btn.id);\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchComment)(btn.id).then((data) => {\r\n          if (data) {\r\n            data.forEach((item) => renderComment(item));\r\n            document.getElementById('commentCounter').innerHTML = (0,_CommentCount_js__WEBPACK_IMPORTED_MODULE_1__.counter)(data);\r\n          } else {\r\n            document.querySelector('.commentList').innerHTML = '<li>No Comments</li>';\r\n            document.getElementById('commentCounter').innerHTML = (0,_CommentCount_js__WEBPACK_IMPORTED_MODULE_1__.counter)(data);\r\n          }\r\n        });\r\n      });\r\n    };\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/itemCount.js":
/*!**********************************!*\
  !*** ./src/modules/itemCount.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dispCounter = (list) => {\r\n  if (list) {\r\n    return list.length;\r\n  }\r\n  return 0;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispCounter);\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/itemCount.js?");

/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"like\": () => (/* binding */ like),\n/* harmony export */   \"renderLike\": () => (/* binding */ renderLike)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\r\n\r\n// Post like function\r\nconst like = async () => {\r\n  const likeBtn = document.querySelectorAll('.like-btn');\r\n  likeBtn.forEach((icon) => {\r\n    icon.addEventListener('click', async () => {\r\n      const { id } = icon;\r\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postLike)(id);\r\n      let count = +icon.previousElementSibling.innerHTML;\r\n      count += 1;\r\n      icon.previousElementSibling.innerHTML = count;\r\n    });\r\n  });\r\n};\r\n\r\n// render like function\r\nconst renderLike = async (id) => {\r\n  const likes = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\r\n  likes.forEach((like) => {\r\n    if (like.item_id === id) {\r\n      document.getElementById(`likes${id}`).innerHTML = like.likes;\r\n    }\r\n  });\r\n  document.querySelectorAll('.num-likes').forEach((element) => {\r\n    if (element.innerHTML === ' ') {\r\n      element.innerHTML = 0;\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/like.js?");

/***/ }),

/***/ "./src/img/festus.jpg":
/*!****************************!*\
  !*** ./src/img/festus.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7f561e6706fb02de2ecd.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/img/festus.jpg?");

/***/ }),

/***/ "./src/img/htet.jpg":
/*!**************************!*\
  !*** ./src/img/htet.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f9d4426ed120f512d8a.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/img/htet.jpg?");

/***/ }),

/***/ "./src/img/seafood-log.jpg":
/*!*********************************!*\
  !*** ./src/img/seafood-log.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ac45a488ea0cb6a6f520.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/img/seafood-log.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"), __webpack_exec__("./src/style.css"));
/******/ }
]);