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

  $(function () {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:5001/api/v1/places_search/',
      data: '{}',
      contentType: 'application/json',
      dataType: 'json',
      success: function (pl) {
	let gue, ro, bat = '';
	for(const i in pl) {
	  const a = pl[i].max_guest;
	  const r = pl[i].number_rooms;
	  const b = pl[i].number_bathrooms;
	  if(a > 1) {
	    gue = 'Guests';
	  } else{
	    gue = 'Guest';
	  }
	  if(r == 1) {
	    ro = 'Bedroom';
	  } else{
	    ro = 'Bedrooms';
	  }
	  if(b == 1) {
	    bat = 'Bathroom';
	  } else{
	    bat = 'Bathrooms';
	  }
	  let art = `<article>
	    <div class="title_box">
	    <h2> ${pl[i].name} </h2>
	    <div class="price_by_night">$${pl[i].price_by_night}</div>
	    </div>
	    <div class="information">
	    <div class="max_guest">${pl[i].max_guest} ${gue}</div>
            <div class="number_rooms"> ${pl[i].number_rooms} ${ro}</div>
            <div class="number_bathrooms">${pl[i].number_bathrooms} ${bat}</div>
	    </div>
	    <div class="description">
	        ${pl[i].description}
          </div>
	    </article>`
	  $('section.places').append(art);
	}
      }
    });
  });




});
