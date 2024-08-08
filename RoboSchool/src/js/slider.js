import Swiper from 'swiper';
import { Navigation, Pagination }  from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const trenersSwiper = new Swiper('.trenersSwiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-progress-bar',
    type: "progressbar",
  },
  breakpoints: {
    300: {
        slidesPerView: 1,
        spaceBetween: 30,

    },
    500: {
        slidesPerView: 2,
        spaceBetween: 30,

    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
},
});