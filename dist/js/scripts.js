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

	$('.mag-concurso-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});

	//Publicidad
	$('.mag-advertising-slider').slick({
		
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
		    {
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
		    },
		    {
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		]
	});


})();