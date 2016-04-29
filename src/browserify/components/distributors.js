/*
 * DISTRIBUTORS COMPONENT
*/

import { selectorMatches } from '../helpers/selector-matches';

const init = () => {

  const $countrySelect = document.getElementById('countries');
  const $distributorCountry = document.querySelectorAll('.c-distributorCountry');

  if(!$countrySelect) return;

  $countrySelect.addEventListener('click', function(e) {

    if (!e.target || !selectorMatches(e.target, 'a')) return;

    e.preventDefault();

    for (let i = 0; i < $distributorCountry.length; i++) {
      $distributorCountry[i].classList.remove('is-visible');
    }

    const target = document.getElementById(e.target.getAttribute('data-target'));

    target.classList.add('is-visible');

  });

}

export { init as distributors }
