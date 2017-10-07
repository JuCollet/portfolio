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
/******/ ({

/***/ 2:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (45:9)\n\n\u001b[0m \u001b[90m 43 | \u001b[39m    \u001b[36mfunction\u001b[39m _addAnimationClass(element){\n \u001b[90m 44 | \u001b[39m        console\u001b[33m.\u001b[39mlog(element\u001b[33m.\u001b[39mparentElement)\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 45 | \u001b[39m        []\u001b[33m.\u001b[39mforEach\u001b[33m.\u001b[39mcall(element\u001b[33m.\u001b[39mparentElement\u001b[33m.\u001b[39mnextSibling\u001b[33m.\u001b[39mgetElementsByTagName(\u001b[32m'*'\u001b[39m)\u001b[33m,\u001b[39m el\u001b[33m=>\u001b[39m{\n \u001b[90m    | \u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 46 | \u001b[39m            console\u001b[33m.\u001b[39mlog(el)\n \u001b[90m 47 | \u001b[39m            \u001b[36mif\u001b[39m(el\u001b[33m.\u001b[39mdataset \u001b[33m&&\u001b[39m el\u001b[33m.\u001b[39mdataset\u001b[33m.\u001b[39manimation \u001b[33m&&\u001b[39m \u001b[33m!\u001b[39mel\u001b[33m.\u001b[39mclassList\u001b[33m.\u001b[39mcontains(el\u001b[33m.\u001b[39mdataset\u001b[33m.\u001b[39manimation)){\n \u001b[90m 48 | \u001b[39m                el\u001b[33m.\u001b[39mclassList\u001b[33m.\u001b[39madd(el\u001b[33m.\u001b[39mdataset\u001b[33m.\u001b[39manimation)\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ })

/******/ });