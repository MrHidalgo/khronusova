import Common from "./common/common";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
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

  reviewsCarousel();
  serviceCarousel();
  portfolioCarousel();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
