/*
 * Toggle nav
*/

'use strict';

const burgerId = document.getElementById('js-burger');

burgerId.addEventListener('click', function() {
  this.parent().classList.add('nav-is-active');
});
