$(document).ready(function () {
  const amenityId = [];
  const amenityName = [];
  $('input[type="checkbox"]').click(function () {
    if ($(this).is(':checked')) {
      amenityId.push($(this).attr('data-id'));
      amenityName.push($(this).attr('data-name'));
    } else {
      const indexId = amenityId.indexOf($(this).attr('data-id'));
      const indexName = amenityName.indexOf($(this).attr('data-name'));
      amenityId.splice(indexId, 1);
      amenityName.splice(indexName, 1);
    }
    $('.amenities h4').text(amenityName.join(', '));
  });
});
