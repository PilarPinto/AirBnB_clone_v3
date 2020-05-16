$(document).ready(function () {
  amenity_id = [];
  amenity_name = [];
  $('input[type="checkbox"]').click(function () {
    if ($(this).is(":checked")) {
      amenity_id.push($(this).attr('data-id'));
      amenity_name.push($(this).attr('data-name'));
    } else {
      amenity_id.splice(amenity_id.indexOf($(this).attr('data-id'), 1));
      amenity_name.splice(amenity_id.indexOf($(this).attr('data-name'), 1));
    }
    $('.amenities h4').text(amenity_name.join(', '));
  });
});
