$('#search-icon').click(function() {
    $('#input-slide').toggle("slide");
  });

  $('#info').click(function() {
    $('#trailer').animate({'zoom': 0.9, 'opacity': 1}, 400).show();
  })

  $('#close').click(function() {
    $('#trailer').animate({'zoom': 0.5, 'opacity': 0}, 400);
  })
  