$('#search-icon').click(function() {
    $('#input-slide').toggle("slide");
  });

  $('#info').click(function() {
    $('#trailer').animate({'zoom': 0.9, 'opacity': 1}, 400).show();
  })

  $('#close').click(function() {
    $('#trailer').animate({'zoom': 0.5, 'opacity': 0}, 400);
  })
  
  $('#next').click(function() {
    $('#next-item').animate({'opacity': 0}, 400);
    $('#prev-item').animate({'opacity': 1}, 400);
  })

  $('#prev').click(function() {
    $('#prev-item').animate({'opacity': 0}, 400);
    $('#next-item').animate({'opacity': 1}, 400);
  })
  