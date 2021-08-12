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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function nav() {\n  const nav = document.createElement('nav');\n  const ul = document.createElement('ul');\n\n  const link = (title) => {\n   const list = document.createElement('li');\n   let link = document.createElement('p');\n   link.textContent = title; \n   link.classList.add('tab-btn');\n   list.append(link);\n   return list\n  };\n\n  ul.append(link('Home'));\n  ul.append(link('Menu'));\n  ul.append(link('Contact'));\n  nav.append(ul);\n\n\n  return nav\n}\n\nconst tabController = ( () => {\n  const content = document.querySelector('.content');\n  const tabSwitch = (e) => {\n    content.innerHTML = e.target.textContent;\n  };\n\n  return {tabSwitch}\n})();\n\ndocument.body.appendChild(nav());\n\ndocument.querySelectorAll('.tab-btn').forEach(tab => {\n  tab.addEventListener('click', tabController.tabSwitch);\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;