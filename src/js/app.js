import Common from "./common/common";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  const initHamburger = function() {
    const btn = document.querySelector("[hamburger-js]"),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector("[mobile-block-js]");

    /**
     * @description
     */
    btn.addEventListener("click", (ev) => {
      const elem = ev.currentTarget;

      elem.classList.toggle("is-active");

      if(mobileContainer.classList.contains("is-open")) {
        mobileContainer.classList.remove("is-open");
        mobileContainer.classList.add("is-animated");

        setTimeout(() => mobileContainer.classList.remove("is-animated"), 300);
      } else {
        mobileContainer.classList.add("is-open");
      }

      hideScrollContainer.forEach((val, idx) => {
        val.classList.toggle("is-hideScroll");
        val.classList.toggle("is-menuOpen");
      });

    });

  };

  const initMenu = function() {
    $('.menu__btn').hover(
      (ev) => {
        const el = $(ev.currentTarget),
          elID = el.attr('data-id');

        if($(window).width() >= 768) {
          $('.menu__btn').removeClass('is-hover');
          el.addClass('is-hover');

          $('.menu__content').hide();
          $('.menu__content[data-content-id="' + elID + '"]').fadeIn(500);
        }
      },
      (ev) => {},
    );

    $('.menu__link-wrapper').hover(
      (ev) => {},
      (ev) => {
        if($(window).width() >= 768) {
          $('.menu__btn').removeClass('is-hover');
          $('.menu__content').hide();
        }
      }
    );
  };

  const reviewsCarousel = () => {
    new Swiper('.reviews__carousel .swiper', {
      autoplay: {
        delay: 10000,
      },
      loop: true,
      speed: 1250,
      navigation: {
        nextEl: '.reviews__btn--next',
        prevEl: '.reviews__btn--prev',
      }
    });
  };

  const serviceCarousel = () => {
    new Swiper('.service__carousel .swiper', {
      autoplay: {
        delay: 10000,
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
          slidesOffsetBefore: 50,
        },
        768: {
          spaceBetween: 50,
          slidesOffsetBefore: 100,
        }
      }
    });
  };

  const portfolioCarousel = () => {
    new Swiper('.portfolio__carousel .swiper', {
      autoplay: {
        delay: 10000,
      },
      speed: 1250,
      slidesPerView: 3,
      spaceBetween: 50,
      navigation: {
        nextEl: '.portfolio__navigation--next',
        prevEl: '.portfolio__navigation--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 3,
        }
      }
    });
  };

  initHamburger();
  initMenu();
  reviewsCarousel();
  serviceCarousel();
  portfolioCarousel();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
