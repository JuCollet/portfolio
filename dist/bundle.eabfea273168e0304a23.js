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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _normalize = __webpack_require__(1);

var _normalize2 = _interopRequireDefault(_normalize);

var _styles = __webpack_require__(0);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ui = {};

var start = function start() {
    var triggers = ui.animation.listTriggers();
    window.addEventListener('scroll', function (e) {
        ui.animation.request(triggers);
    });
};

ui.animation = function () {

    return {
        request: request, // Detect if any element wich request animation is visible;
        listTriggers: listTriggers // Return an array with every element that contain the data-trigger="true" attribute;
    };

    function request(elementsArray) {
        [].forEach.call(elementsArray, function (el) {
            if (ui.utils.isVisible(el, 100)) {
                console.log('Visible !');
            }
        });
    }

    function listTriggers() {
        var triggersArray = [];
        var allTags = document.getElementsByTagName('*');
        [].forEach.call(allTags, function (element) {
            if (element.dataset && element.dataset.trigger) {
                triggersArray.push(element);
            }
        });
        return triggersArray;
    }
}();

ui.utils = function () {

    return {
        isVisible: isVisible // Detect if an element is x % visible in viewport (element, int: 0-100);
    };

    function isVisible(element, visibility) {

        var visibilityOffset = void 0;

        if (visibility && visibility <= 100 || visibility > 0) {
            visibilityOffset = element.offsetHeight / 100 * visibility;
        } else {
            visibilityOffset = 0;
        }

        debugger;

        if (element.getBoundingClientRect().top <= 0 - visibilityOffset || element.getBoundingClientRect().top > window.innerHeight + visibilityOffset) {
            return true;
        } else {
            return false;
        }
    }
}();

start();

// 1. detect if a trigger is (or half, entirely) on screen.
// 2. if it's on screen, check for siblings with animation data
// 3. if data animation is present & element on screen, add data-animation class to element
// 4. if data animation is present & element on off, remove data-animation class from element if it has one

/***/ })
/******/ ]);