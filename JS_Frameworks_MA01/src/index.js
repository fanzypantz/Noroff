import Carousel from './js/carousel';

import './css/base.scss';
import './css/carousel.scss';

$(document).ready(function() {
  // Create new carousel and init it with the ID
  const carousel1 = new Carousel();
  carousel1.init('carousel-1');
});
