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

  $(function () {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:5001/api/v1/status/',
      complete: function (stat) {
        if (stat.status === 200) {
          $('DIV#api_status').addClass('available');
        } else {
          $('DIV#api_status').removeClass('available');
        }
      }
    });
  });
});
