/* Slider */

new Swiper('.slider__container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disabledOnInteraction: false
  },

  speed: 800,

  initialSlide: 1,

  loop: true,
});