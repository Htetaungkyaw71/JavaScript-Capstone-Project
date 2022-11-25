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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/comment.js */ \"./src/modules/comment.js\");\n/* harmony import */ var _img_festus_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/festus.jpg */ \"./src/img/festus.jpg\");\n/* harmony import */ var _img_htet_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/htet.jpg */ \"./src/img/htet.jpg\");\n/* harmony import */ var _img_seafood_log_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/seafood-log.jpg */ \"./src/img/seafood-log.jpg\");\n/* harmony import */ var _modules_like_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/like.js */ \"./src/modules/like.js\");\n/* harmony import */ var _modules_itemCount_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/itemCount.js */ \"./src/modules/itemCount.js\");\n\n\n\n\n\n\n\nconst mainapi = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';\n\nconst dialog = document.getElementById('dialog');\nconst divContainer = document.querySelector('.row-one');\n\nconst renderContent = (item) => {\n  const divElement = document.createElement('div');\n  divElement.className = 'col-one';\n  divElement.innerHTML = `<div class=\"item-wrapper\">\n  <div class=\"food-img\">\n      <img src=\"${item.strMealThumb}\" alt=\"\" class=\"food-img1\"> \n  </div>\n  <div class=\"fname-likes\">\n      <h2>${item.strMeal}</h2>\n     <span class=\"likes\">\n     <p class= \"num-likes\" id = \"likes${item.idMeal}\"> </p>\n      <button class=\"like-btn\" id= \"${item.idMeal}\">\n      <i class=\"fa-regular fa-heart\"></i>\n      </button>  \n\n      </span>\n  </div>\n  <div class=\"comment\">\n      <button type=\"button\" class=\"btn\" id=\"${item.idMeal}\">View</button>\n  </div>\n  </div>`;\n  divContainer.append(divElement);\n};\n\ndocument.addEventListener('DOMContentLoaded', async () => {\n  dialog.classList.add('hidden');\n  fetch(mainapi)\n    .then((response) => response.json())\n    .then((response) => {\n      const data = response.meals;\n      const list = data.slice(1, 7);\n      const movieUpdate = document.getElementById('menu-count');\n      movieUpdate.innerHTML = `Menu(${(0,_modules_itemCount_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(list)})`;\n\n      list.forEach((item) => {\n        renderContent(item);\n        (0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_4__.renderLike)(item.idMeal);\n      });\n      (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_4__.like)();\n    });\n\n  const img = document.createElement('img');\n  const a = document.createElement('a');\n  a.href = 'https://github.com/Htetaungkyaw71';\n  img.className = 'author';\n  img.src = _img_htet_jpg__WEBPACK_IMPORTED_MODULE_2__;\n  a.append(img);\n\n  const img1 = document.createElement('img');\n  const a1 = document.createElement('a');\n  a1.href = 'https://github.com/Enning94';\n  img1.className = 'author';\n  img1.src = _img_festus_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  a1.append(img1);\n\n  document.querySelector('.author-img').append(a);\n  document.querySelector('.author-img').append(a1);\n\n  document.querySelector('.icon').href = _img_seafood_log_jpg__WEBPACK_IMPORTED_MODULE_3__;\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/CommentCount.js":
/*!*************************************!*\
  !*** ./src/modules/CommentCount.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counter\": () => (/* binding */ counter),\n/* harmony export */   \"increaseCount\": () => (/* binding */ increaseCount)\n/* harmony export */ });\nconst counter = (data) => {\n  if (data) {\n    return data.length;\n  }\n\n  return 0;\n};\n\nconst increaseCount = (index) => {\n  index += 1;\n  return index;\n};\n\n//# sourceURL=webpack://webpack-demo/./src/modules/CommentCount.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchComment\": () => (/* binding */ fetchComment),\n/* harmony export */   \"fetchDataDeatil\": () => (/* binding */ fetchDataDeatil),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\n/* eslint-disable no-console */\nconst detailapi = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';\nconst invo = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst key = 'fPYwNXOHCbzOe8GPrdwI';\n\nconst fetchDataDeatil = async (id) => {\n  const response = await fetch(`${detailapi}${id}`);\n  const data = await response.json();\n  return data.meals[0];\n};\n\nconst fetchComment = async (id) => {\n  const response = await fetch(`${invo}${key}/comments?item_id=${id}`);\n  if (response.status !== 200) {\n    console.clear();\n    return null;\n  }\n  const data = await response.json();\n  return data;\n};\n\nconst postComment = async (data) => {\n  const response = await fetch(`${invo}${key}/comments`, {\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n  if (response.status !== 201) {\n    return null;\n  }\n  return true;\n};\n\nconst postLike = (id) => {\n  fetch(`${invo}${key}/likes`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n    }),\n  });\n};\n\nconst getLikes = async () => {\n  const response = await fetch(`${invo}${key}/likes`);\n  const data = await response.json();\n  return data;\n};\n\n//# sourceURL=webpack://webpack-demo/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _CommentCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentCount.js */ \"./src/modules/CommentCount.js\");\n/* eslint-disable camelcase */\n\n\n\nconst dialog = document.getElementById('dialog');\n\n// For Date\nlet today = new Date();\nlet dd = today.getDate();\nlet mm = today.getMonth() + 1;\nconst yyyy = today.getFullYear();\nif (dd < 10) {\n  dd = `0${dd}`;\n}\nif (mm < 10) {\n  mm = `0${mm}`;\n}\ntoday = `${yyyy}-${mm}-${dd}`;\n// For Date\n\nconst renderDetail = (data) => {\n  const div = document.createElement('div');\n  div.innerHTML = `\n        <div id=\"detail\">\n        <div class=\"closeIcon\">\n            <i class=\"fa-solid fa-xmark\" id=\"close\"></i> \n        </div>\n  \n        <div class=\"row\">\n        <div class=\"col\">\n            <img src=\"${data.strMealThumb}\" class=\"detailImg\">\n                <h3 class=\"detailHeading\">${data.strMeal}</h3>\n                <p class=\"detailText\">\n                    ${data.strInstructions}\n                </p>\n        </div>\n        <div class=\"col\">\n            <form action=\"\" id=\"commentForm\">\n                <h2>Add a comment</h2>\n                <input type=\"text\" placeholder=\"your name\" name=\"name\" required>\n                <br>\n                <textarea cols=\"23\" rows=\"5\" placeholder=\"your insights\" name=\"insight\" required></textarea>\n                <br>\n                <input type=\"submit\" value=\"submit\">\n            </form>\n            <hr>\n            <div>\n                  <h2 class=\"comments\">Comments\n                (<span id=\"commentCounter\"></span>)\n                </h2>\n                <ul class=\"commentList\">\n                \n                </ul>\n            <div>\n        \n  \n        </div>\n    </div>\n         \n        </div>\n        `;\n  return div;\n};\n\nconst renderComment = ({ creation_date, username, comment }) => {\n  const ul = document.querySelector('.commentList');\n  if (ul.textContent === 'No Comments') {\n    ul.innerHTML = '';\n  }\n  const li = document.createElement('li');\n  li.innerHTML = `\n    <p>\n    ${creation_date} ${username}:${comment}\n    </p>\n    `;\n  ul.appendChild(li);\n};\n\nconst closefunc = () => {\n  document.querySelectorAll('#close').forEach((btn) => {\n    btn.onclick = () => {\n      document.body.style.position = 'absolute';\n      document.querySelector('main').classList.remove('blur');\n      dialog.classList.add('hidden');\n      document.body.style.overflow = 'scroll';\n    };\n  });\n};\n\nconst addComment = (id) => {\n  const form = document.getElementById('commentForm');\n  form.onsubmit = (e) => {\n    e.preventDefault();\n    const name = e.target.name.value;\n    const insight = e.target.insight.value;\n    const data = {\n      item_id: id,\n      username: name,\n      comment: insight,\n    };\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(data);\n    renderComment({ ...data, creation_date: today });\n    form.reset();\n    const index = +document.getElementById('commentCounter').innerHTML;\n    document.getElementById('commentCounter').innerHTML = (0,_CommentCount_js__WEBPACK_IMPORTED_MODULE_1__.increaseCount)(index);\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  document.querySelectorAll('.btn').forEach((btn) => {\n    btn.onclick = () => {\n      document.body.style.position = 'fixed';\n      document.querySelector('main').classList.add('blur');\n      document.querySelector('main').style.background = 'rgb(193,199,208,0.5)';\n      dialog.classList.remove('hidden');\n      dialog.innerHTML = '';\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchDataDeatil)(btn.id).then((data) => {\n        document.body.style.overflow = 'hidden';\n        dialog.append(renderDetail(data));\n        closefunc();\n        addComment(btn.id);\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchComment)(btn.id).then((data) => {\n          if (data) {\n            data.forEach((item) => renderComment(item));\n            document.getElementById('commentCounter').innerHTML = (0,_CommentCount_js__WEBPACK_IMPORTED_MODULE_1__.counter)(data);\n          } else {\n            document.querySelector('.commentList').innerHTML = '<li>No Comments</li>';\n            document.getElementById('commentCounter').innerHTML = (0,_CommentCount_js__WEBPACK_IMPORTED_MODULE_1__.counter)(data);\n          }\n        });\n      });\n    };\n  });\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/itemCount.js":
/*!**********************************!*\
  !*** ./src/modules/itemCount.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dispCounter = (list) => {\n  if (list) {\n    return list.length;\n  }\n  return 0;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispCounter);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/itemCount.js?");

/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"like\": () => (/* binding */ like),\n/* harmony export */   \"renderLike\": () => (/* binding */ renderLike)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\n\n// Post like function\nconst like = async () => {\n  const likeBtn = document.querySelectorAll('.like-btn');\n  likeBtn.forEach((icon) => {\n    icon.addEventListener('click', async () => {\n      const { id } = icon;\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postLike)(id);\n      let count = +icon.previousElementSibling.innerHTML;\n      count += 1;\n      icon.previousElementSibling.innerHTML = count;\n    });\n  });\n};\n\n// render like function\nconst renderLike = async (id) => {\n  const likes = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\n  likes.forEach((like) => {\n    if (like.item_id === id) {\n      document.getElementById(`likes${id}`).innerHTML = like.likes;\n    }\n  });\n  document.querySelectorAll('.num-likes').forEach((element) => {\n    if (element.innerHTML === ' ') {\n      element.innerHTML = 0;\n    }\n  });\n};\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/like.js?");

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