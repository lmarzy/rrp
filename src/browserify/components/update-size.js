/*
 * Update size - used for snipcart to update the sizes via the select dropdown
*/

'use strict';

export const updateProductSizes = () => {

  const productSizes = document.getElementById('js-productSizes');

  if(!productSizes) return;

  $('#js-productSizes').change(function() {
    var me = $(this);
  
    var size = me.val();
    var id = me.find('option:selected').data('id');
    var button = $('#js-forSaleBtn');
    
    button.data('item-custom1-value', size);
    button.attr('data-item-id', id);
  });

}


