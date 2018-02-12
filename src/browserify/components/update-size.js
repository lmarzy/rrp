/*
 * Update size - used for snipcart to update the sizes via the select dropdown
*/

$('#js-productSizes').change(function() {
  var size = $(this).val();
  var button = $('#js-forSaleBtn');

  button.data('item-custom1-value', size);
});
