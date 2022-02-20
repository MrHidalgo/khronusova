import Common from "./common/common";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  const reviewsCarousel = () => {
    new Swiper('.reviews__carousel .swiper', {
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

  reviewsCarousel();
  serviceCarousel();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
