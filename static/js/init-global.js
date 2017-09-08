$(function () {

	Global_main.initCountdown({
		countdown: '.timer__box'
	});

	// Global_main.sliderSimple({
	// 	slider: '.slide',
	// 	item: '.slide__item'
	// });

	Global_main.sliderfade({
		slider: '.details',
		item: '.details__item'
	});

	// Global_main.halfSlider({
	// 	slider: '.public',
	// 	item: '.public__item'
	// });

	Global_main.scrollToTop({
		link: '.get-top'
	});

	Global_main.fourSlider({
		slider: '.profile',
		item: '.profile__item'
	});

	/*--- parallax ---*/
	/*---------------------------------------------------------------------*/
	var $parallax;
	if($(document).width() < 900){
			$parallax =  false;
		} else {
			$parallax = true;
		}

	Global_main.initParallax({
		parallax: $parallax
	});


});
