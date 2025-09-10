/*
 * SHOW-IMAGE COMPONENT
*/

'use strict';

export const showImage = () => {

  const url       = window.location.href;
  const queryPar  = url.substring( url.indexOf('=') + 1 );
  const gallery   = document.getElementsByClassName('c-gallery')[0];

  if(!gallery) return;

  const images    = gallery.getElementsByTagName('img');

  const target = document.getElementById(queryPar);

  if (document.location.search !== '') {

    images[0].classList.remove('is-visible');

    target.classList.add('is-visible');

  }

}
