'use strict';

var burgerId = document.getElementById('js-burger');

burgerId.addEventListener('click', function() {
  this.parentNode.classList.toggle('nav-is-active');
});
