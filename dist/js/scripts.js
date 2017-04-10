/** Project scripts */

(function () {
    'use strict';
    
	$('.mag-gallery-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.mag-gallery-slider-nav'
	});
	
	$('.mag-gallery-slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.mag-gallery-slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true
	});

	$('.mag-texto-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
	});

	//Publicidad
	$('.mag-advertising-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		centerMode: true,
		focusOnSelect: true
	});


})();