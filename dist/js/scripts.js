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
		focusOnSelect: true,
		responsive: [
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
		    }
		    
		]
	});

	//Nota Texto
	$('.mag-texto-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
	});

	//Concurso
	$('.mag-concurso-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});

	//Sociales
	$('.sociales-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});


	//Nosotros
	$('.nosotros-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});

	//Publicidad
	$('.mag-advertising-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
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


	//Cargar más Sociales
	$('.mag-sociales-nota').slice(0, 3).show();
    
    $('#cargarMasSociales').on('click', function (e) {
        e.preventDefault();
        $('.mag-sociales-nota:hidden').slice(0, 3).slideDown();
        if ($('.mag-sociales-nota:hidden').length == 0) {
            $('#load').fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });


    //Cargar más Sociales
	$('.mag-fotoparrafo').slice(0, 3).show();
    
    $('#cargarMasFotoparrafo').on('click', function (e) {
        e.preventDefault();
        $('.mag-fotoparrafo:hidden').slice(0, 3).slideDown();
        if ($('.mag-fotoparrafo:hidden').length == 0) {
            $('#load').fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });

    //Dropdowns de Navbar 
    $('#tematicasDropdown').on('mouseenter mouseleave click tap', function() {
		$(this).toggleClass("open");
	});
	$('#seccionesDropdown').on('mouseenter mouseleave click tap', function() {
		$(this).toggleClass("open");
	});


})();