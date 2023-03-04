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

/***/ "./src/js/script_hw5.js":
/*!******************************!*\
  !*** ./src/js/script_hw5.js ***!
  \******************************/
/***/ (() => {

eval("////#1\nconst arr = [];\n\nfunction getRandomArray(length, min, max) {\n    for (let i = 0; i < length; i++) {\n        arr.push(min + Math.floor(Math.random() * (max - min)));\n    }\n    return arr;\n}\nconsole.log(\"Function 1: Random Array \" + getRandomArray(15, 1, 100));\n\n////#2\nfunction getAverage(...numbers) {\n    let sum = 0;\n    let numLength = numbers.length;\n\n    for (let i of numbers) {\n        if (Number.isInteger(i)) {\n            sum += i;\n        } else {\n            numLength -= 1;\n        }\n    }\n\n    return sum / numLength;\n}\nconsole.log(\"Function 2: Average \" + getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));\n\n///#3\nfunction getMedian(...numbers) {\n    let numLength = numbers.length;\n    const intNumb = numbers.filter(function(number) {\n        return Number.isInteger(number);\n    });\n\n    function compareNumbers(a, b) {\n        return a - b;\n    }\n\n    console.log(intNumb.sort(compareNumbers));\n\n    const min = intNumb[Math.floor((intNumb.length / 2) - 1)];\n    const max = intNumb[Math.floor(intNumb.length / 2)];\n    // console.log(numLength, min, max);\n    if (numLength % 2 !== 0) {\n        return intNumb[Math.floor(intNumb.length / 2)]\n    } else if (numLength % 2 === 0) {\n        return (min + max) / 2;\n    }\n\n}\nconsole.log(\"Function 3: Median \" + getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));\n// console.log(getMedian(1, 2, 3, 4, 5));\n// console.log(getMedian(1, 2, 3, 4));\n\n\n////#4\nfunction filterEvenNumbers(...numbers) {\n    return numbers.filter(number => number % 2 !== 0);\n}\nconsole.log(\"Function 4: Even Numbers \" + filterEvenNumbers(1, 2, 3, 4, 5, 6));\n\n\n////#5\nfunction countPositiveNumbers(...numbers) {\n    let counter = 0;\n    for (let i of numbers) {\n        if (i > 0) {\n            counter++;\n        }\n    }\n    return counter;\n}\nconsole.log(\"Function 5: Positive Numbers \" + countPositiveNumbers(1, -2, 3, -4, -5, 6));\n\n////#6\nfunction getDividedByFive(...numbers) {\n    return numbers.filter(number => number % 5 === 0);\n}\nconsole.log(\"Function 6: Divided By Five \" + getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));\n\n////#7 поки не працює\nfunction replaceBadWords(string) {\n    const strArr = string.split(\" \");\n\n    for (let i = 0; i < strArr.length; i++) {\n        // if (i === \"fuck\" || i === \"shit\") {\n        strArr[i] = strArr[i].replace(/\\fuck/, \"****\");\n        strArr[i] = strArr[i].replace(/\\shit/, \"****\");\n        // }\n    }\n\n    return strArr.join(\" \");\n}\n// console.log(replaceBadWords(\"Are you fucking kidding shit ? \"));\n\n//# sourceURL=webpack://Marta/./src/js/script_hw5.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_script_hw5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/script_hw5 */ \"./src/js/script_hw5.js\");\n/* harmony import */ var _js_script_hw5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_script_hw5__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://Marta/./src/main.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;