/*
 * Accordion component
*/

import { selectorMatches } from '../helpers/selector-matches';

const init = () => {

  const productThumbs = document.querySelector('.c-galleryThumbs');
  const productColThumbs = document.querySelector('.c-productCols');

  if(!productThumbs) return;

  const gallery     = document.getElementsByClassName('c-gallery')[0];
  const images      = gallery.getElementsByTagName('img');

  console.log(gallery);
  console.log(images);

  const showImage = (e) => {
    if (!e.target || !selectorMatches(e.target, 'img')) return;

    e.preventDefault();

    for (var i = 0; i < images.length; i += 1) {
      images[i].classList.remove('is-visible');
    }

    const target = document.getElementById(e.target.getAttribute('data-target'));
    target.classList.add('is-visible');
  }

  productThumbs.addEventListener('click', showImage);
  productColThumbs.addEventListener('click', showImage);

}

export { init as productThumbs }
