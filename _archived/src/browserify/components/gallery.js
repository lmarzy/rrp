/*
 * GALLERY COMPONENT
 */

"use strict";

export const gallery = () => {
  let gallery = document.getElementsByClassName("c-gallery")[0];

  if (!gallery) return;

  let images = gallery.getElementsByClassName("c-gallery__img");
  let nextBtn = gallery.getElementsByClassName("c-gallery__btn--next")[0];
  let prevBtn = gallery.getElementsByClassName("c-gallery__btn--prev")[0];
  let counter = 0;

  function showImage(index) {
    // Set classname on the image-elements (hide them)
    for (var i = 0; i < images.length; i += 1) {
      images[i].classList.remove("is-visible");
    }

    // Add the showImage classname to the img-element you want
    // images[index].classList.remove('is-hidden');
    images[index].classList.add("is-visible");
  }

  function nextImg() {
    // counter variable gets the current img selected
    // if we have the last img, we switch back to the first one again

    if (counter < images.length - 1) {
      counter += 1;
    } else {
      counter = 0;
    }

    showImage(counter);
  }

  function prevImg() {
    // counter variable gets the current img selected
    // if we have the first img, we switch back to the last one again

    if (counter > 0) {
      counter -= 1;
    } else {
      counter = images.length - 1;
    }

    showImage(counter);
  }

  nextBtn.addEventListener("click", nextImg);
  prevBtn.addEventListener("click", prevImg);

  showImage(0);
};
