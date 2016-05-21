/*
 * Accordion component
*/

import { selectorMatches } from '../helpers/selector-matches';

export const productThumbs = (selector) => {

  const thumbs = document.querySelector(selector);

  if(!thumbs) return;

  const gallery     = document.getElementsByClassName('c-gallery')[0];
  const images      = gallery.getElementsByTagName('img');

  const showImage = (e) => {
    if (!e.target || !selectorMatches(e.target, 'img')) return;

    e.preventDefault();

    for (var i = 0; i < images.length; i += 1) {
      images[i].classList.remove('is-visible');
    }

    const target = document.getElementById(e.target.getAttribute('data-target'));
    target.classList.add('is-visible');
  }

  thumbs.addEventListener('click', showImage);

}
