import { tabs }     from './components/tabs';
import { gallery }  from './components/gallery';
import { productThumbs }  from './components/product-thumbs';
import { distributors }  from './components/distributors';
import { showImage }  from './components/show-image';
import { updateProductSizes } from './components/update-size';
import { modalVideo } from './components/modal-video';

'use strict';

var burgerId = document.getElementById('js-burger');
var subNavId = document.getElementsByClassName('c-siteNav__link');

//Toggle the site navigation for smaller screens
burgerId.addEventListener('click', function(e) {
  e.preventDefault();
  this.parentNode.classList.toggle('nav-is-active');
});

//Toggle the sub menus on smaller screens
function toggleItem() {
  var itemClass = this.parentNode.classList.contains('sub-active');
  for (var i = 0; i < subNavId.length; i++) {
    subNavId[i].parentNode.classList.remove('sub-active');
  }
  if (!itemClass) {
    this.parentNode.classList.add('sub-active');
  }
}
for (var i=0; i < subNavId.length; i++) {
  subNavId[i].addEventListener('click', toggleItem, false);
}

//tabs
var productTabs = tabs({
  el: '.c-tabs',
  link: '.c-tabs__link',
  content: '.c-tabs__content'
});

gallery();
productThumbs('.c-galleryThumbs');
productThumbs('.c-productCols');
distributors();
showImage();
updateProductSizes();
modalVideo();