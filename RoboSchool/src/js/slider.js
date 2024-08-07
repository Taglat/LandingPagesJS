import Swiper from 'swiper';
import { Navigation, Pagination }  from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const trenersSwiper = new Swiper('.trenersSwiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-progress-bar',
    type: "progressbar",
  },
});