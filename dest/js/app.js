/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/common/common.js":
/*!*********************************!*\
  !*** ./src/js/common/common.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Common = function () {
  var pressESC = function pressESC() {
    document.addEventListener('keyup', function (ev) {
      if (ev.keyCode === 27) {}
    });
  };

  var clickBody = function clickBody() {
    document.body.addEventListener('click', function (ev) {
      var className = "body";

      if (!ev.target.closest(className).length) {}
    });
  };

  var preventBehavior = function preventBehavior() {
    var link = document.querySelectorAll("a");
    link.forEach(function (val, idx) {
      val.addEventListener("click", function (ev) {
        if (val.getAttribute("href") === "#") {
          ev.preventDefault();
        }
      });
    });
  };

  var initLoad = function initLoad() {
    pressESC();
    clickBody();
    preventBehavior();
  };

  return {
    initLoad: initLoad
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Common);

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/common */ "./src/js/common/common.js");
 // EVENT LISTENER - LOAD
// ========================================

window.addEventListener('load', function (ev) {
  // COMMON
  _common_common__WEBPACK_IMPORTED_MODULE_0__["default"].initLoad(); // MACROS

  var initHamburger = function initHamburger() {
    var btn = document.querySelector("[hamburger-js]"),
        hideScrollContainer = document.querySelectorAll("html, body"),
        mobileContainer = document.querySelector("[mobile-block-js]");
    /**
     * @description
     */

    btn.addEventListener("click", function (ev) {
      var elem = ev.currentTarget;
      elem.classList.toggle("is-active");

      if (mobileContainer.classList.contains("is-open")) {
        mobileContainer.classList.remove("is-open");
        mobileContainer.classList.add("is-animated");
        setTimeout(function () {
          return mobileContainer.classList.remove("is-animated");
        }, 300);
      } else {
        mobileContainer.classList.add("is-open");
      }

      hideScrollContainer.forEach(function (val, idx) {
        val.classList.toggle("is-hideScroll");
        val.classList.toggle("is-menuOpen");
      });
    });
  };

  var initMenu = function initMenu() {
    $('.menu__btn').hover(function (ev) {
      var el = $(ev.currentTarget),
          elID = el.attr('data-id');

      if ($(window).width() >= 768) {
        $('.menu__btn').removeClass('is-hover');
        el.addClass('is-hover');
        $('.menu__content').hide();
        $('.menu__content[data-content-id="' + elID + '"]').fadeIn(500);
      }
    }, function (ev) {});
    $('.menu__link-wrapper').hover(function (ev) {}, function (ev) {
      if ($(window).width() >= 768) {
        $('.menu__btn').removeClass('is-hover');
        $('.menu__content').hide();
      }
    });
  };

  var reviewsCarousel = function reviewsCarousel() {
    new Swiper('.reviews__carousel .swiper', {
      autoplay: {
        delay: 10000
      },
      loop: true,
      speed: 1250,
      navigation: {
        nextEl: '.reviews__btn--next',
        prevEl: '.reviews__btn--prev'
      }
    });
  };

  var serviceCarousel = function serviceCarousel() {
    new Swiper('.service__carousel .swiper', {
      autoplay: {
        delay: 10000
      },
      freeMode: true,
      grabCursor: true,
      speed: 1250,
      slidesPerView: 'auto',
      spaceBetween: 50,
      slidesOffsetBefore: 100,
      breakpoints: {
        320: {
          spaceBetween: 25,
          slidesOffsetBefore: 50
        },
        768: {
          spaceBetween: 50,
          slidesOffsetBefore: 100
        }
      }
    });
  };

  var portfolioCarousel = function portfolioCarousel() {
    new Swiper('.portfolio__carousel .swiper', {
      autoplay: {
        delay: 10000
      },
      speed: 1250,
      slidesPerView: 3,
      spaceBetween: 50,
      navigation: {
        nextEl: '.portfolio__navigation--next',
        prevEl: '.portfolio__navigation--prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 25
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50
        },
        1280: {
          slidesPerView: 3
        }
      }
    });
  };

  initHamburger();
  initMenu();
  reviewsCarousel();
  serviceCarousel();
  portfolioCarousel();
}, false); // EVENT LISTENER - SCROLL
// ========================================

window.addEventListener('scroll', function (ev) {}, false);
}();
/******/ })()
;