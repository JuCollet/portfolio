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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

module.exports = __webpack_require__.p + "./img/periscope_demo_short_ld.mp4";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/periscope_iphone_mockup.png";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/periscope_macbook_mockup.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/periscope_macbook_screen.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qa_centpatates_app.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qa_paycheck_app.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qa_puzzle_app.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qode_iphone_mockup_1.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qode_iphone_mockup_2.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qode_pixel_mockup.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _normalize = __webpack_require__(1);

var _normalize2 = _interopRequireDefault(_normalize);

var _styles = __webpack_require__(0);

var _styles2 = _interopRequireDefault(_styles);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ui = {};
var totalJourneyLength = Math.round((Date.parse("October 1, 2016") - Date.now()) / 86400000);
var quickappsListElement = document.getElementsByClassName('quick-apps-list')[0];
var quickAppLeftArrow = document.getElementById('quick-apps-left');
var quickAppRightArrow = document.getElementById('quick-apps-right');
var quickAppScrollOffset = 100;

var start = function start() {
    var triggers = ui.animation.listTriggers();
    ui.menu.init();
    ui.navigation.arrowInit();
    window.addEventListener('scroll', function (e) {
        ui.animation.request(triggers);
    });
    window.addEventListener('resize', function () {
        ui.navigation.disableArrow(quickappsListElement, quickAppLeftArrow, quickAppRightArrow);
    });
};

ui.animation = function () {

    return {
        request: request, // Detect if any element wich request animation is visible;
        listTriggers: listTriggers // Return an array with every element that contain the data-trigger="true" attribute;
    };

    // 2. if it's on screen, check for siblings with animation data
    function request(elementsArray) {
        [].forEach.call(elementsArray, function (el) {
            if (ui.utils.isVisible(el, 100)) {
                _addOrRemoveAnimationClass(el, true);
            } else {
                _addOrRemoveAnimationClass(el, false);
            }
        });
    }

    function listTriggers() {
        var triggersArray = [];
        var allTags = document.getElementsByTagName('*');
        [].forEach.call(allTags, function (element) {
            if (element.getAttribute("data-trigger")) {
                triggersArray.push(element);
            }
        });
        return triggersArray;
    }

    // 3. if data animation is present & element on screen, add data-animation class to element
    // 4. if data animation is present & element on off, remove data-animation class from element if it has one    
    function _addOrRemoveAnimationClass(element, elementMustBeAdded) {
        [].forEach.call(element.parentElement.parentElement.getElementsByTagName('*'), function (el) {
            if (el.getAttribute("data-animation")) {
                el.getAttribute("data-animation").split(' ').forEach(function (animationName) {
                    if (animationName === 'video') {
                        return _launchVideo(el, elementMustBeAdded);
                    }
                    if (animationName === 'needle') {
                        return _updateGaugeNeedlePosition(el, elementMustBeAdded);
                    }
                    if (elementMustBeAdded ? !el.classList.contains(animationName) : el.classList.contains(animationName)) {
                        elementMustBeAdded ? el.classList.add(animationName) : el.classList.remove(animationName);
                    }
                    if (animationName === 'slide') {
                        _moveUpDown(el, elementMustBeAdded);
                    }
                });
            }
        });
    }

    function _moveUpDown(element, isHappening) {
        if (isHappening && !element.getAttribute("data-move") || element.getAttribute("data-move") === 'undefined') {
            element.setAttribute("data-move", window.scrollY);
        }
        if (isHappening) {
            element.style.transform = "translate(0px," + (element.getAttribute("data-move") - window.scrollY) / 10 + "px)";
        } else {
            element.setAttribute("data-move", undefined);
        }
    }

    function _launchVideo(element, isHappening) {
        if (isHappening) {
            setTimeout(function (_) {
                element.play();
            }, 1500);
        }
    }

    function _updateGaugeNeedlePosition(el, isHappening) {
        if (isHappening) {
            var freshness = Math.round((Date.parse(el.getAttribute("data-date")) - Date.now()) / 86400000 / totalJourneyLength * 180);
            if (freshness - 90 < 0) {
                freshness = Math.abs(freshness - 90) > 90 ? 90 : Math.abs(freshness - 90);
            } else {
                freshness = -Math.abs(freshness - 90) < -90 ? -90 : -Math.abs(freshness - 90);
            }
            el.parentNode.getElementsByClassName('gauge-oldness')[0].innerText = Math.abs(Math.round((Date.parse(el.getAttribute("data-date")) - Date.now()) / 86400000)) + " jours";
            el.getElementById('gauge-needle').setAttribute('transform', "rotate(" + freshness + " 50 50)");
        }
    }
}();

ui.menu = function () {

    return {
        navigation: navigation,
        init: init
    };

    function navigation(e) {
        var selectedLinks = e.currentTarget;
        var selectedLinksText = selectedLinks.innerText;
        var content = selectedLinks.parentNode.parentElement.parentElement.getElementsByClassName("project-body-content-list")[0];
        var contentList = content.getElementsByTagName('li');

        // 1. Remove "active" class of all siblings links
        [].forEach.call(selectedLinks.parentNode.children, function (el) {
            if (el !== selectedLinks) {
                el.classList.remove('active');
            }
        });

        // 2. Add "active" class to selected links
        selectedLinks.classList.add('active');

        // 3. Add opacity "0" to every li element
        [].forEach.call(contentList, function (el) {
            el.style.opacity = 0;
            el.classList.remove('active');
        });

        // 4. Add "active" class to selected li element
        // 5. Add opacity "1" to selected li element
        try {
            content.getElementsByClassName(selectedLinksText)[0].classList.add('active');
            content.getElementsByClassName(selectedLinksText)[0].style.opacity = 1;
        } catch (e) {
            throw new Error('Missing content named "' + selectedLinksText + '"');
        }
    }

    function init() {
        var getMenuLinksList = document.getElementsByClassName('project-body-nav-list');
        [].forEach.call(getMenuLinksList, function (el) {
            [].forEach.call(el.children, function (el) {
                el.addEventListener('click', function (e) {
                    ui.menu.navigation(e);
                });
            });
        });
    }
}();

ui.navigation = function () {

    return {
        arrowInit: arrowInit,
        disableArrow: disableArrow
    };

    function arrowInit() {
        var arrows = document.getElementsByClassName('qa-arrow');

        // 1. Select all arrows & add eventListener
        [].forEach.call(arrows, function (el) {
            el.addEventListener('click', function (el) {

                // 2. Onclick scroll into quick-apps-right to left or right
                if (el.currentTarget.getAttribute('id') === "quick-apps-left") {
                    quickappsListElement.scrollLeft -= quickAppScrollOffset;
                } else {
                    quickappsListElement.scrollLeft += quickAppScrollOffset;
                }

                disableArrow(quickappsListElement, quickAppLeftArrow, quickAppRightArrow, quickAppScrollOffset);
            });
        });

        // 3. If scroll position = 0, then add arrow left opacity .5 and cursor = initial;
        disableArrow(quickappsListElement, quickAppLeftArrow, quickAppRightArrow, quickAppScrollOffset);
    }

    function disableArrow(el, arrowLeft, arrowRight) {

        function isElementWiderThanWindow() {
            return el.getElementsByTagName('li')[el.getElementsByTagName('li').length - 1].getBoundingClientRect().right < window.innerWidth;
        }

        if (el.scrollLeft === 0) {
            arrowLeft.style.cursor = "auto";
            arrowLeft.style.opacity = ".1";
        } else {
            arrowLeft.style.cursor = "pointer";
            arrowLeft.style.opacity = "1";
        }

        if (el.offsetWidth > el.scrollLeft + quickAppScrollOffset && !isElementWiderThanWindow()) {
            arrowRight.style.cursor = "pointer";
            arrowRight.style.opacity = "1";
        } else {
            arrowRight.style.cursor = "auto";
            arrowRight.style.opacity = ".1";
        }
    }
}();

ui.utils = function () {

    return {
        isVisible: isVisible // Detect if an element is x % visible in viewport (element, int: 0-100);
    };

    // 1. detect if a trigger is (or half, entirely) on screen.
    function isVisible(element, visibility) {

        var visibilityOffset = void 0;
        var elementTopPosition = element.getBoundingClientRect().top;

        if (visibility && visibility <= 100 || visibility > 0) {
            visibilityOffset = element.offsetHeight / 100 * visibility;
        } else {
            visibilityOffset = 0;
        }

        if (elementTopPosition <= window.innerHeight - visibilityOffset && elementTopPosition > 0 + (visibilityOffset - element.offsetHeight)) {
            return true;
        } else {
            return false;
        }
    }
}();

start();

/***/ })
/******/ ]);