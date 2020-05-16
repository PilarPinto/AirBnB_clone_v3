$(document).ready(function () {
  amenity_id = [];
  $('input[data-id="amenity.id"]').click(function () {
    if($(this).prop("checked") == true) {
      amenity_id.push($(this).val());
    } else if($(this).prop("checked") == false) {
      amenity_id.splice(amenity_id.indexOf($(this).val(), 1))
    }
  })
  $('.amenities h4').text('hola');
})
