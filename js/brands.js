new Swiper('.brands-swiper', {
  Autoheight: false,
  slidesPerView: 1,

  grid: {
    rows: 2,
  },
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    680: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
    1024: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
  },
});

// 680 1024
