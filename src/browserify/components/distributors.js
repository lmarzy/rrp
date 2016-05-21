/*
 * DISTRIBUTORS COMPONENT
*/

import { selectorMatches } from '../helpers/selector-matches';

export const distributors = () => {

  const $countrySelect = document.getElementById('countries');
  const $distributorCountry = document.querySelectorAll('.c-distributorCountry');

  if(!$countrySelect) return;

  $countrySelect.addEventListener('change', function(e) {

    e.preventDefault();

    for (let i = 0; i < $distributorCountry.length; i++) {
      $distributorCountry[i].classList.remove('is-visible');
    }

    const target = document.getElementById(e.target.value);

    target.classList.add('is-visible');

  });

}
