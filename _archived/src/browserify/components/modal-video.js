/*
 * Update the youtube iframe src and show a modal with that video
*/

'use strict';

export const modalVideo = () => {

  const modal = document.getElementById('js-modal');

  if(!modal) return;

  const modalBtn = Array.from(document.querySelectorAll('.js-modalBtn'));

  modalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalClose = document.getElementById('js-modalClose');
      const docBody = document.getElementsByTagName('body')[0];

      const url = btn.getAttribute('data-url');
      const imagePath = btn.getAttribute('data-img')
      const videoIframe = document.getElementById('js-videoIframe');
      const imageTag = document.getElementById('js-image');
      const fullUrl = `https://www.youtube.com/embed/${url}`;

      modal.classList.add('isActive');
      docBody.classList.add('modal-active');

      console.log('URL', url);
      console.log('IMAGE', imagePath);

      if (url) {
        imageTag.style.display = "none"
        videoIframe.style.display = "block"
        videoIframe.setAttribute('src', fullUrl);
      }

      if (imagePath) {
        imageTag.style.display = "block"
        videoIframe.style.display = "none"
        imageTag.setAttribute('src', imagePath);
      }

      const closeModal = () => {
        modal.classList.remove('isActive');
        if (url) {
          videoIframe.removeAttribute('src');
        }
        docBody.classList.remove('modal-active');

        modalClose.removeEventListener('click', closeModal);
      }

      modalClose.addEventListener('click', closeModal);
    })
  });
};