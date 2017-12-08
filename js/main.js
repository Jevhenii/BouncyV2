 
// init Isotope
var $grid = $('.grid').isotope({
  	itemSelector: '.grid-item',
 	itemSelector: '.grid-item',
  	percentPosition: true,
  	masonry: {
    columnWidth: 100,
    horizontalOrder: true,
    columnWidth: '.grid-sizer'
  }
});

// filter functions

$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


