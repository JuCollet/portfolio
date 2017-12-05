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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    body: document.querySelector('body'),
    dateDay: document.querySelectorAll('.dateDay-string'),
    dateSpans: document.querySelectorAll('.date-string'),
    freshness: document.getElementsByClassName('freshness'),
    journeyLength: document.querySelectorAll('.journeyLength-string'),
    landingTechno: document.getElementById('landing-techno'),
    landingArt: document.getElementById('art-portrait'),
    modal: document.getElementById('modal'),
    modalContent: document.getElementById('modal-content'),
    modalCloseButton: document.getElementById('nav-modal-close-btn'),
    quickappsListElement: document.getElementsByClassName('quick-apps-list')[0],
    quickappsElements: document.querySelectorAll('.quick-apps-list li'),
    quickAppLeftArrow: document.getElementById('quick-apps-left'),
    quickAppRightArrow: document.getElementById('quick-apps-right'),
    quickAppScrollOffset: 100,
    touchMenuScrollOffset: 25
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    return {
        getElementIndexInElementList: getElementIndexInElementList,
        todayDateToString: todayDateToString,
        isVisible: isVisible // Detect if an element is x % visible in viewport (element, int: 0-100);
    };

    function getElementIndexInElementList(elementList, element) {
        var i = 0;
        var index = 0;
        [].forEach.call(elementList, function (el) {
            if (el === element) {
                index = i;
            }
            i++;
        });
        return {
            index: index,
            length: i
        };
    }

    function todayDateToString(full, day) {
        var dayNames = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
        var monthNames = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
        var date = new Date();
        if (full) {
            return dayNames[date.getDay()] + " " + date.getDate() + " " + monthNames[date.getMonth()];
        } else if (day) {
            return "" + dayNames[date.getDay()];
        }
    }

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _elements = __webpack_require__(0);

var _elements2 = _interopRequireDefault(_elements);

var _content = __webpack_require__(3);

var content = _interopRequireWildcard(_content);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

    return {
        addActiveClass: addActiveClass, // Add active class to provided element
        request: request, // Detect if any element wich request animation is visible;
        landingTechno: landingTechno, // Animate the names of the technologies learned in landing page;
        listTriggers: listTriggers, // Return an array with every element that contain the data-trigger="true" attribute;
        removeEveryActiveClass: removeEveryActiveClass, // Remove active class of everyElement
        setDisplayToBlock: setDisplayToBlock, // Set display of element to block
        setEveryDisplayToNone: setEveryDisplayToNone, // Set displau to none of every item   
        setEveryOpacityToZero: setEveryOpacityToZero, // Set opacity of every item to zero
        setOpacityToOne: setOpacityToOne, // Set opacity of an element to one
        updateGaugeNeedlePosition: updateGaugeNeedlePosition // Update gauge needle position
    };

    function addActiveClass(element) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        setTimeout(function () {
            element.classList.add('active');
        }, delay);
    }

    // 2. if it's on screen, check for siblings with animation data
    function request(elementsArray) {
        [].forEach.call(elementsArray, function (el) {
            if (_utils2.default.isVisible(el, 100)) {
                _addOrRemoveAnimationClass(el, true);
            } else {
                _addOrRemoveAnimationClass(el, false);
            }
        });
    }

    function landingTechno() {
        var _this = this;

        var landingTechnoSpan = _elements2.default.landingTechno;
        var technosLength = _content.landingTechno.length;
        var intervals = 75;
        var currentPosition = 0;

        var removeChars = function removeChars() {
            _this.technoLength = landingTechnoSpan.innerText.length;
            _this.removeLetter = setInterval(function () {
                landingTechnoSpan.innerText = landingTechnoSpan.innerText.slice(0, -1);
                _this.technoLength--;
                if (_this.technoLength === 0) {
                    clearInterval(_this.removeLetter);
                    addChars();
                }
            }, intervals);
        };

        var addChars = function addChars() {
            if (currentPosition === technosLength) {
                currentPosition = 0;
            }
            _this.technoLength = _content.landingTechno[currentPosition].length;
            _this.cursor = 0;
            _this.addCharsInterval = setInterval(function () {
                landingTechnoSpan.innerText = landingTechnoSpan.innerText + _content.landingTechno[currentPosition][_this.cursor];
                _this.cursor++;
                if (_this.cursor === _this.technoLength) {
                    clearInterval(_this.addCharsInterval);
                    currentPosition++;
                    changeTechno();
                }
            }, intervals);
        };

        var changeTechno = function changeTechno() {
            setTimeout(function () {
                removeChars();
            }, 2500);
        };

        changeTechno();
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

    function removeEveryActiveClass(elementsList) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        setTimeout(function () {
            [].forEach.call(elementsList, function (el) {
                el.classList.remove('active');
            });
        }, delay);
    }

    function setDisplayToBlock(element) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        setTimeout(function () {
            element.style.display = "block";
        }, delay);
    }

    function setEveryDisplayToNone(elementsList) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        setTimeout(function () {
            [].forEach.call(elementsList, function (el) {
                el.style.display = "none";
            });
        }, delay);
    }

    function setEveryOpacityToZero(elementsList) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        setTimeout(function () {
            [].forEach.call(elementsList, function (el) {
                el.style.opacity = 0;
            });
        }, delay);
    }

    function setOpacityToOne(element) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        setTimeout(function () {
            element.style.opacity = 1;
        }, delay);
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
                        return updateGaugeNeedlePosition(el, elementMustBeAdded);
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

    function updateGaugeNeedlePosition(el, isHappening) {
        if (isHappening) {
            var freshness = Math.round((Date.parse(el.getAttribute("data-date")) - Date.now()) / 86400000 / content.totalJourneyLength * 180);
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var landingTechno = exports.landingTechno = ["AngularJS", "NodeJS", "ReactJS", "Webpack", "Redux", "ES6", "Gulp", "ExpressJS", "Mongoose", "PassportJS", "GraphQL", "Javascript"];
var totalJourneyLength = exports.totalJourneyLength = Math.round((Date.parse("October 1, 2016") - Date.now()) / 86400000);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _elements = __webpack_require__(0);

var _elements2 = _interopRequireDefault(_elements);

var _modalFreshgauge = __webpack_require__(23);

var _modalFreshgauge2 = _interopRequireDefault(_modalFreshgauge);

var _modalQaCentpatates = __webpack_require__(24);

var _modalQaCentpatates2 = _interopRequireDefault(_modalQaCentpatates);

var _modalQaPuzzleapp = __webpack_require__(26);

var _modalQaPuzzleapp2 = _interopRequireDefault(_modalQaPuzzleapp);

var _modalQaPaycheck = __webpack_require__(25);

var _modalQaPaycheck2 = _interopRequireDefault(_modalQaPaycheck);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _animations = __webpack_require__(2);

var _animations2 = _interopRequireDefault(_animations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

    return {
        closeModal: closeModal,
        linksInit: linksInit,
        modalInit: modalInit,
        buildModal: buildModal
    };

    function buildModal(nameOfModal) {
        if (nameOfModal === "modalGauge") {
            _elements2.default.modalContent.innerHTML = _modalFreshgauge2.default;
            document.querySelector('#modal-today-date').innerHTML = _utils2.default.todayDateToString(true);
        } else if (nameOfModal === "modalQaCP") {
            _elements2.default.modalContent.innerHTML = _modalQaCentpatates2.default;
            _animations2.default.updateGaugeNeedlePosition(document.querySelector('.modal-qa').querySelector('.gauge'), true);
        } else if (nameOfModal === "modalQaPA") {
            _elements2.default.modalContent.innerHTML = _modalQaPuzzleapp2.default;
            _animations2.default.updateGaugeNeedlePosition(document.querySelector('.modal-qa').querySelector('.gauge'), true);
        } else if (nameOfModal === "modalQaPC") {
            _elements2.default.modalContent.innerHTML = _modalQaPaycheck2.default;
            _animations2.default.updateGaugeNeedlePosition(document.querySelector('.modal-qa').querySelector('.gauge'), true);
        } else {
            return;
        }
        _showModal();
    }

    function closeModal() {
        _elements2.default.body.classList.remove("modal-open");
        _elements2.default.modal.style.top = "100vh";
        setTimeout(function () {
            while (_elements2.default.modalContent.firstChild) {
                _elements2.default.modalContent.removeChild(_elements2.default.modalContent.firstChild);
            }
            _elements2.default.modalContent.style.display = "none";
        }, 250);
    }

    function linksInit() {
        [].forEach.call(_elements2.default.freshness, function (el) {
            el.addEventListener('click', function () {
                buildModal('modalGauge');
            });
        });
        [].forEach.call(_elements2.default.quickappsElements, function (el) {
            el.addEventListener('click', function () {
                buildModal(el.getAttribute("data-modal"));
            });
        });
    }

    function modalInit() {
        _elements2.default.modalCloseButton.addEventListener('click', function () {
            closeModal();
        });
    }

    function _showModal() {
        _elements2.default.modalContent.style.display = "block";
        _elements2.default.modal.style.top = "0";
        _elements2.default.body.classList.add("modal-open");
    }
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _elements = __webpack_require__(0);

var _elements2 = _interopRequireDefault(_elements);

var _animations = __webpack_require__(2);

var _animations2 = _interopRequireDefault(_animations);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

    return {
        arrowInit: arrowInit,
        disableArrow: disableArrow,
        menuNavigation: menuNavigation,
        menuInit: menuInit,
        TouchScrollInit: TouchScrollInit
    };

    function arrowInit() {
        var arrows = document.getElementsByClassName('qa-arrow');

        // 1. Select all arrows & add eventListener
        [].forEach.call(arrows, function (el) {
            el.addEventListener('click', function (el) {

                // 2. Onclick scroll into quick-apps-right to left or right
                if (el.currentTarget.getAttribute('id') === "quick-apps-left") {
                    _elements2.default.quickappsListElement.scrollLeft -= _elements2.default.quickAppScrollOffset;
                } else {
                    _elements2.default.quickappsListElement.scrollLeft += _elements2.default.quickAppScrollOffset;
                }

                disableArrow(_elements2.default.quickappsListElement, _elements2.default.quickAppLeftArrow, _elements2.default.quickAppRightArrow, _elements2.default.quickAppScrollOffset);
            });
        });

        // 3. If scroll position = 0, then add arrow left opacity .5 and cursor = initial;
        disableArrow(_elements2.default.quickappsListElement, _elements2.default.quickAppLeftArrow, _elements2.default.quickAppRightArrow, _elements2.default.quickAppScrollOffset);
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

        if (el.offsetWidth > el.scrollLeft + _elements2.default.quickAppScrollOffset && !isElementWiderThanWindow()) {
            arrowRight.style.cursor = "pointer";
            arrowRight.style.opacity = "1";
        } else {
            arrowRight.style.cursor = "auto";
            arrowRight.style.opacity = ".1";
        }
    }

    function menuNavigation(e) {
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

    function menuInit() {
        var getMenuLinksList = document.getElementsByClassName('project-body-nav-list');
        [].forEach.call(getMenuLinksList, function (el) {
            [].forEach.call(el.children, function (el) {
                el.addEventListener('click', function (e) {
                    menuNavigation(e);
                });
            });
        });
    }

    function TouchScrollInit() {
        var contentList = document.querySelectorAll('.project-body-content-list > li');
        var scrollRecord = [];

        // 1. Ajouter un touch event à tous les contenus
        [].forEach.call(contentList, function (el) {
            el.addEventListener('touchmove', function (e) {
                //e.preventDefault(); // Side-effect : block vertical scrolling :(
                scrollRecord.push(e.targetTouches[0].clientX);
            });
            el.addEventListener('touchend', function (e) {
                var siblingsList = e.target.parentElement.parentElement.getElementsByTagName('li');
                var mobileNavBullets = e.target.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.project-body-nav-mobile > ul > li ');
                // 1. Voir à quelle position le li touché se trouve dans la liste
                var position = _utils2.default.getElementIndexInElementList(siblingsList, e.target.parentElement);

                // 2. Si swipe right et li suivant existe, => swap menu
                if (_TouchScroll(scrollRecord, position) === 1) {
                    // Swipe previous (right to left)
                    _animations2.default.setEveryOpacityToZero(siblingsList);
                    _animations2.default.setEveryDisplayToNone(siblingsList, 100);
                    _animations2.default.setDisplayToBlock(siblingsList[position.index - 1], 100);
                    _animations2.default.setOpacityToOne(siblingsList[position.index - 1], 100);
                    _animations2.default.removeEveryActiveClass(mobileNavBullets, 100);
                    _animations2.default.addActiveClass(mobileNavBullets[position.index - 1], 100);
                } else if (_TouchScroll(scrollRecord, position) === -1) {
                    // Swipe next (left to right)
                    _animations2.default.setEveryOpacityToZero(siblingsList);
                    _animations2.default.setEveryDisplayToNone(siblingsList, 100);
                    _animations2.default.setDisplayToBlock(siblingsList[position.index + 1], 100);
                    _animations2.default.setOpacityToOne(siblingsList[position.index + 1], 100);
                    _animations2.default.removeEveryActiveClass(mobileNavBullets, 100);
                    _animations2.default.addActiveClass(mobileNavBullets[position.index + 1], 100);
                }
                scrollRecord = [];
            });
        });
    }

    function _TouchScroll(scrollArray, position) {
        if (scrollArray[0] < scrollArray[scrollArray.length - 1] - _elements2.default.touchMenuScrollOffset) {
            if (position.index > 0) {
                return 1;
            } else {
                return 0;
            }
        } else if (scrollArray[0] > scrollArray[scrollArray.length - 1] + _elements2.default.touchMenuScrollOffset) {
            if (position.index <= position.length - 2) {
                return -1;
            } else {
                return 0;
            }
        }
    }
}();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/logo.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/nav-modal-close.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/periscope_demo_short_ld.mp4";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/periscope_iphone_mockup.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/periscope_macbook_mockup.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/periscope_macbook_screen.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/portrait.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/profileImg.jpeg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qa_centpatates_app.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qa_paycheck_app.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qa_puzzle_app.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qode_iphone_mockup_1.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qode_iphone_mockup_2.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qode_pixel_mockup.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _normalize = __webpack_require__(7);

var _normalize2 = _interopRequireDefault(_normalize);

var _styles = __webpack_require__(6);

var _styles2 = _interopRequireDefault(_styles);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(15);

__webpack_require__(16);

__webpack_require__(17);

__webpack_require__(18);

__webpack_require__(19);

__webpack_require__(20);

__webpack_require__(21);

__webpack_require__(14);

var _animations = __webpack_require__(2);

var _animations2 = _interopRequireDefault(_animations);

var _content = __webpack_require__(3);

var _modal = __webpack_require__(4);

var _modal2 = _interopRequireDefault(_modal);

var _navigation = __webpack_require__(5);

var _navigation2 = _interopRequireDefault(_navigation);

var _elements = __webpack_require__(0);

var _elements2 = _interopRequireDefault(_elements);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_modal2.default.modalInit();
_modal2.default.linksInit();
_navigation2.default.menuInit();
_navigation2.default.arrowInit();
_navigation2.default.TouchScrollInit();
_animations2.default.landingTechno();
_animations2.default.setOpacityToOne(_elements2.default.landingArt);

[].forEach.call(_elements2.default.dateSpans, function (el) {
    el.innerHTML = _utils2.default.todayDateToString(true);
});

[].forEach.call(_elements2.default.journeyLength, function (el) {
    el.innerHTML = Math.abs(_content.totalJourneyLength);
});

[].forEach.call(_elements2.default.dateDay, function (el) {
    el.innerHTML = _utils2.default.todayDateToString(false, true);
});

window.addEventListener('scroll', function (e) {
    _animations2.default.request(_animations2.default.listTriggers());
});
window.addEventListener('resize', function () {
    _navigation2.default.disableArrow(_elements2.default.quickappsListElement, _elements2.default.quickAppLeftArrow, _elements2.default.quickAppRightArrow);
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"modal-center\">\r\n    <img src=\"" + __webpack_require__(32) + "\" width=\"200\"></img>\r\n    <h1>Fresh Gauge</h1>\r\n    <p>Cette jauge vous permet de savoir à quel moment dans mon parcours un projet a été réalisé, entre aujourd’hui et le 1er octobre 2016, jour de ma première rencontre avec Javascript. <3</p>\r\n    <p>Les projets dans la zone rouge ou orange ne sont probablement plus représentatifs de mon niveau de compétence de ce <span id=\"modal-today-date\"></span>, mais pourront éventuellement vous donner des indications sur ma courbe de progression.</p>\r\n</div>";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"modal-qa\">\r\n    <div class=\"modal-qa-left\">\r\n        <img class=\"qa-img\" src=\"" + __webpack_require__(27) + "\"></img>\r\n        <h1>Cent Patates</h1>\r\n        <p>Javascript, DeviceMotion</p>\r\n        <hr class=\"mobile-only\">\r\n        <div class=\"qa-freshness desktop-only\">\r\n          <svg version=\"1.1\" class=\"gauge\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n          \t viewBox=\"0 0 100 60\" style=\"enable-background:new 0 0 100 70;\" xml:space=\"preserve\" data-date=\"June 2, 2017\" data-animation=\"needle\">\r\n            <path style=\"fill:#F5A623;\" d=\"M50,12.5c6.832,0,13.23,1.836,18.747,5.028l6.25-10.824C67.642,2.448,59.109,0,50,0\r\n            \tc-9.109,0-17.641,2.448-24.996,6.704l6.249,10.824C36.769,14.336,43.168,12.5,50,12.5z\"/>\r\n            <path style=\"fill:#FF3F00;\" d=\"M0,50h12.5c0-13.879,7.546-25.988,18.753-32.473L25.004,6.704C10.061,15.35,0,31.495,0,50z\"/>\r\n            <path style=\"fill:#4EE898;\" d=\"M87.5,50H100c0-18.505-10.061-34.65-25.003-43.296l-6.25,10.824C79.954,24.012,87.5,36.121,87.5,50z\"/>\r\n            <polygon id=\"gauge-needle\" style=\"fill:#3E3E3E;\" points=\"57.071,50 50,57.071 42.929,50 50,4.472\" transform=\"rotate(-90 50 50)\"/>\r\n          </svg>\r\n          <span class=\"gauge-oldness\">&nbsp;</span>\r\n        </div>\r\n        <p>\r\n            <a href=\"https://github.com/JuCollet/centpatates\" target=\"_blank\"><i class=\"fa fa-github\"></i></a>\r\n            <a href=\"https://centpatates.herokuapp.com\" target=\"_blank\" class=\"mobile-only\"><i class=\"fa fa-play-circle-o\"></i></a>\r\n        </p>\r\n        <p class=\"qa-small desktop-only\">Cette application ne peut malheureusement n'être testée que sur mobile.</p>\r\n    </div>\r\n    <div class=\"modal-qa-right\">\r\n        <h3>Une micro-application, réalisée pour tester les événements de mouvements sur mobile.</h3>\r\n        <p>Quand l’utilisateur secoue son téléphone portable, des chiffres sont aléatoirement générés pour remplir une grille Euromillions. Des animations sont aussi déclenchées pour afficher des illustrations de porte-bonheurs, qui se déplacent sur l’écran en fonction des mouvements de l’utilisateur (direction et vitesse).</p>\r\n        <img src=\"" + __webpack_require__(28) + "\"/>\r\n    </div>\r\n</div>";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"modal-qa\">\r\n    <div class=\"modal-qa-left\">\r\n        <img class=\"qa-img\" src=\"" + __webpack_require__(30) + "\"></img>\r\n        <h1>Paycheck</h1>\r\n        <p>AngularJS, UIKit, Express, Pug, PDFKit</p>\r\n        <hr class=\"mobile-only\">\r\n        <div class=\"qa-freshness desktop-only\">\r\n          <svg version=\"1.1\" class=\"gauge\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n          \t viewBox=\"0 0 100 60\" style=\"enable-background:new 0 0 100 70;\" xml:space=\"preserve\" data-date=\"June 15, 2017\" data-animation=\"needle\">\r\n            <path style=\"fill:#F5A623;\" d=\"M50,12.5c6.832,0,13.23,1.836,18.747,5.028l6.25-10.824C67.642,2.448,59.109,0,50,0\r\n            \tc-9.109,0-17.641,2.448-24.996,6.704l6.249,10.824C36.769,14.336,43.168,12.5,50,12.5z\"/>\r\n            <path style=\"fill:#FF3F00;\" d=\"M0,50h12.5c0-13.879,7.546-25.988,18.753-32.473L25.004,6.704C10.061,15.35,0,31.495,0,50z\"/>\r\n            <path style=\"fill:#4EE898;\" d=\"M87.5,50H100c0-18.505-10.061-34.65-25.003-43.296l-6.25,10.824C79.954,24.012,87.5,36.121,87.5,50z\"/>\r\n            <polygon id=\"gauge-needle\" style=\"fill:#3E3E3E;\" points=\"57.071,50 50,57.071 42.929,50 50,4.472\" transform=\"rotate(-90 50 50)\"/>\r\n          </svg>\r\n          <span class=\"gauge-oldness\">&nbsp;</span>\r\n        </div>\r\n        <p>\r\n            <a href=\"https://github.com/JuCollet/PayCheck\" target=\"_blank\"><i class=\"fa fa-github\"></i></a>\r\n        </p>        \r\n    </div>\r\n    <div class=\"modal-qa-right\">\r\n        <h3>Un POC réalisé pour mon employeur actuel, pour démontrer la faisabilité d’une automatisation des procédures de commandes internes.</h3>\r\n        <p>Après qu’un employé a rempli un formulaire de commande, des mails étaient automatiquement envoyés aux diverses personnes devant valider la dépense.</p>\r\n        <p>Une fois que tous les validateurs ont validé la dépense, l’utilisateur était prévenu et pouvait télécharger un fichier PDF complété avec les informations de la commande et la signature scannée du validateur.</p>\r\n        <p>Ce POC m’a permis de tester PDFKit, une application NodeJS permettant de générer des PDFs grâce à Javascript.</p>\r\n        <p>Parallèlement, j’ai aussi pu me familiariser avec Pug (anciennement Jade), une application de templating HTML, qui me permettait de générer dynamiquement les fichiers HTML des E-Mails, qui étaient ensuite envoyés via l’API de SendGrid.</p>\r\n    </div>\r\n</div>";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"modal-qa\">\r\n    <div class=\"modal-qa-left\">\r\n        <img class=\"qa-img\" src=\"" + __webpack_require__(31) + "\"></img>\r\n        <h1>Puzzleduino</h1>\r\n        <p>Arduino, Javascript, SVG</p>\r\n        <hr class=\"mobile-only\">\r\n        <div class=\"qa-freshness desktop-only\">\r\n          <svg version=\"1.1\" class=\"gauge\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n          \t viewBox=\"0 0 100 60\" style=\"enable-background:new 0 0 100 70;\" xml:space=\"preserve\" data-date=\"January 24, 2017\" data-animation=\"needle\">\r\n            <path style=\"fill:#F5A623;\" d=\"M50,12.5c6.832,0,13.23,1.836,18.747,5.028l6.25-10.824C67.642,2.448,59.109,0,50,0\r\n            \tc-9.109,0-17.641,2.448-24.996,6.704l6.249,10.824C36.769,14.336,43.168,12.5,50,12.5z\"/>\r\n            <path style=\"fill:#FF3F00;\" d=\"M0,50h12.5c0-13.879,7.546-25.988,18.753-32.473L25.004,6.704C10.061,15.35,0,31.495,0,50z\"/>\r\n            <path style=\"fill:#4EE898;\" d=\"M87.5,50H100c0-18.505-10.061-34.65-25.003-43.296l-6.25,10.824C79.954,24.012,87.5,36.121,87.5,50z\"/>\r\n            <polygon id=\"gauge-needle\" style=\"fill:#3E3E3E;\" points=\"57.071,50 50,57.071 42.929,50 50,4.472\" transform=\"rotate(-90 50 50)\"/>\r\n          </svg>\r\n          <span class=\"gauge-oldness\">&nbsp;</span>\r\n        </div>\r\n        <p>\r\n            <a href=\"https://github.com/JuCollet/puzzleApp\" target=\"_blank\"><i class=\"fa fa-github\"></i></a>\r\n            <a href=\"https://jucollet.github.io/puzzleApp\" target=\"_blank\" class=\"desktop-only\"><i class=\"fa fa-play-circle-o\"></i></a>\r\n        </p>\r\n        <p class=\"qa-small desktop-only\">Pour tester cette application, cliquez sur le bouton play ci-dessus et appuyez sur la touche « u » pour dévoiler une pièce.</p>\r\n    </div>\r\n    <div class=\"modal-qa-right\">\r\n        <h3>Ma toute première application, développée pour la soirée de présentation de la nouvelle stratégie de l’organisation pour laquelle je travaille aujourd'hui.</h3>\r\n        <p>Le fil rouge de la communication était la pièce de puzzle, qui symbolise l’importance de chaque personne pour le mouvement. C’est pourquoi une pièce de puzzle vierge a été jointe dans chaque invitation papier, que le visiteur pouvait déposer dans une urne à l’entrée de l’amphithéâtre le jour de l'événement. Dès que la pièce était insérée, une animation se déclenchait sur l’écran géant de la salle et une pièce virtuelle apparaissait pour révéler une nouvelle partie d’une image mystère.</p>\r\n        <p><b>Cette installation était composée de deux parties : une hardware et une software.</b></p>\r\n        <p><b>Pour la partie hardware,</b> j’ai utilisé une carte programmable Teensy++, sur laquelle était installé Teensyduino, un environnement permettant de faire fonctionner un programme Arduino. Ce dernier était assez simple, il simulait l’appui d’une touche de clavier dès que le capteur de proximité, soudé à la carte, provoquait une différence de tension dans le circuit.</p>\r\n        <p><b>Pour la partie Software,</b> il s’agissait d’un programme Javascript bien sûr, qui déclenchait une animation dès que la touche de clavier « m » était virtuellement pressée par la carte programmable, raccordée à l’ordinateur en USB. Au lancement du programme, toutes les pièces étaient générées aléatoirement en SVG via une fonction Javascript et recouvraient l’image mystère. En réalité, quand un visiteur ajoutait une pièce, il en retirait une qui cachait un morceau de l’image.</p>\r\n        <p>J’avais aussi intégré plusieurs fonctions pour dévoiler plus rapidement des pièces en cas de retards et laisser masquées les parties importantes de l’image jusqu’aux derniers moments.</p>\r\n        <p><b>Ce fut ma première utilisation concrète de Javascript, en janvier 2017.</b></p>\r\n        <a href=\"https://youtu.be/BP_CxxtWfjg\" target=\"_blank\"><div class=\"btn btn-big btn-red\"><i class=\"fa fa-youtube-play\" style=\"opacity:1;\"></i>&nbsp;Voir les derniers essais</div></a>\r\n        <img src=\"" + __webpack_require__(29) + "\"/>\r\n    </div>\r\n</div>";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qa_centpatates_app.png";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qa_cp_iphone.png";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qa_pa.jpg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qa_paycheck_app.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/qa_puzzle_app.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/static-gauge.svg";

/***/ })
/******/ ]);