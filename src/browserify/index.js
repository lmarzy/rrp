'use strict';

var burgerId = document.getElementById('js-burger');
var subNavId = document.getElementsByClassName('c-siteNav__link');

burgerId.addEventListener('click', function(e) {
  e.preventDefault();
  this.parentNode.classList.toggle('nav-is-active');
});

function toggleItem() {
  var itemClass = this.parentNode.classList.contains('c-siteNav__item--sub-active');
  console.log(itemClass);
  for (i = 0; i < subNavId.length; i++) {
    subNavId[i].parentNode.classList.remove('c-siteNav__item--sub-active');
  }
  if (!itemClass) {
    this.parentNode.classList.add('c-siteNav__item--sub-active');
  }
}

for (var i=0; i < subNavId.length; i++) {
  subNavId[i].addEventListener('click', toggleItem, false);
}
