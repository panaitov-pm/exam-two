;(function($) {

	$(function() {

		//Slider
		$('.slider').slick({
			dots: true,
  			slidesToShow: 1,
  			slide: '.slide',
  			speed: 1200,
			infinite: true,
			/*autoplay: true,
			autoplaySpeed: 2500,*/
			prevArrow: $('.slider-arrow__prev'),
			nextArrow: $('.slider-arrow__next'),
		}); // end slider

		// Add zero to slider number
		var buttons = $('.slider .slick-dots').find('button');

		buttons.each(function(index, el) {
			var $this = $(this)
			var text = $this.text();

			if ( parseInt(text) <= 9 ) {
				$this.text('0' + text);
			} 
		}); // end each

		// Change slider number after sliding
		$('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
			var text = $('.slider .slick-active button').text();
			
			$('.slider__controls .slider__number').text(text);
		}); //end afterChange 

		// Project slider
		$('.project-slider').slick({
			arrows: true,
			asNavFor: '.project-carousel',
  			slide: '.project-slide',
			prevArrow: $('.project-slider__arrow-prev'),
			nextArrow: $('.project-slider__arrow-next'),
  			slidesToShow: 1,
  			speed: 1200,
			infinite: false,
  			initialSlide: 4,
			// autoplay: true,
			// autoplaySpeed: 2500,
		}); // end project-slider

		$('.project-carousel').slick({
			asNavFor: '.project-slider',
  			slide: '.project-carousel__item',
			focusOnSelect: true,
			arrows: false,
			infinite: false,
  			slidesToShow: 4,
  			slidesToScroll: 1,
  			initialSlide: 4,
  			speed: 1200
			// autoplay: true,
			// autoplaySpeed: 2500,
		}); // end project-carousel

		// Add class to active project slider arrow
		$('.project-slider__controls').on('click', '.project-slider__arrow', function(event) {
			event.preventDefault();

			$(this).siblings().removeClass('js-arrow-active');
			
			$(this).addClass('js-arrow-active');
		});

		//Set data attributs for contact-form items
		var serviceMenuItem = $('.contact-form-menu__link');
		var serviceContentItem = $('.contact-form-content');
		
		setDataTab(serviceMenuItem, serviceContentItem);

		// Add class to active contact-form-menu__link 
		$(document).on('click', '.contact-form-menu__link', function(event) {
			event.preventDefault();

			var $this = $(this);
			var dataElem = $this.attr('data-form');

			$('.contact-form').find('.js-contact-active')
								.removeClass('js-contact-active');

			$this.addClass('js-contact-active');

			$this.closest('.contact-form')
					.find('.contact-form-content[data-form=' + dataElem + ']')
					.addClass('js-contact-active');
		}); // end click

		//Scroll page
		$(document).on('click', '.navigation__link, a[href="#scroll-top"]', function(event) {
			event.preventDefault();
			
			var elemId = $(this).attr('href'),
				top = $(elemId).offset().top;

			$('body').animate({
				scrollTop: top
			}, 1200);	
		});// end click
		
	}); // end ready

	function setDataTab(menuItem, contentItem) {

		var counter = 1;
		
		menuItem.each(function(index, el) {

			$(this).attr('data-form', counter);

			counter++;
		}); // end each

		counter = 1; // reset counter value

		contentItem.each(function(index, el) {

			$(this).attr('data-form', counter);

			counter++;			
		}); // end each
	}

})(jQuery);