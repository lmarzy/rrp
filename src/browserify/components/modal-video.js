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
      const videoIframe = document.getElementById('js-videoIframe');
      const fullUrl = `https://www.youtube.com/embed/${url}`;

      videoIframe.setAttribute('src', fullUrl);
      modal.classList.add('isActive');
      docBody.classList.add('modal-active');

      const closeModal = () => {
        modal.classList.remove('isActive');
        videoIframe.removeAttribute('src');
        docBody.classList.remove('modal-active');

        modalClose.removeEventListener('click', closeModal);
      }

      modalClose.addEventListener('click', closeModal);
    })
  });
};