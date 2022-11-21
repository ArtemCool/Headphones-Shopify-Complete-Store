const mainPageSwiper = new Swiper('.main-page-swiper', {
    // If we need pagination
    pagination: {
      el: '.main-page-pagination',
      type: 'bullets',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.main-page-swiper-button-next',
        prevEl: '.main-page-swiper-button-prev'
      }
});