/*
 * Accordion component
*/

import { selectorMatches } from '../helpers/selector-matches';

const init = () => {

  const productCols = document.querySelector('.c-productCols');

  if(!productCols) return;

  const gallery     = document.getElementsByClassName('c-gallery')[0];
  const images      = gallery.getElementsByTagName('img');

  productCols.addEventListener('click', function(e) {

    if (!e.target || !selectorMatches(e.target, 'img')) return;

    e.preventDefault();

    for (var i = 0; i < images.length; i += 1) {
      images[i].classList.remove('is-visible');
    }

    const target = document.getElementById(e.target.getAttribute('data-target'));
    target.classList.add('is-visible');

    // let itemClass = e.target.parentNode.nextElementSibling.classList.contains('is-active');
    //
    // const accordionContent = document.getElementsByClassName('js-accordionContent');
    // for (let i = 0; i < accordionContent.length; i++) {
    //   accordionContent[i].classList.remove('is-active');
    // }
    //
    // if (!itemClass) {
    //   e.target.parentNode.nextElementSibling.classList.add('is-active');
    // }

  });

}

export { init as prodColImage }
