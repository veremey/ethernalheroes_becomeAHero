$(document).ready(function () {
	$('.scroll-next').on('click', function () {
		// var $link = $(opt.link);
		var $window = $('.startscreen').height();
		$('html, body').animate({scrollTop: $window}, 800);
	});

	/*----- toggle text -------*/
	$('.js-toggle-text').on('click', function () {
		var nextText = $(this).data('toggleText');
		var startText = $(this).data('startText');

		if($(this).hasClass('is-checked')){
			$(this).removeClass('is-checked').text(startText);
		} else if($(this).hasClass('is-disable') || $(this).parent().hasClass('is-disable')) {
			return false;
		} else {
			$(this).addClass('is-checked').text(nextText);
		}
	});

	/* --- toggler something ---*/
	$('.js-toggler').on('click', function(e) {
		e.preventDefault();
		var togglerItem = $(this).data('toggler');
		var triggerItem = $(this).data('trigger');

		if($(this).data('trigger')){

			if($(this).hasClass('is-active')){

				$('.' + triggerItem).show().removeClass('is-active');
				$('.' + togglerItem).hide().removeClass('is-active');
				$(this).removeClass('is-active');

			} else {
				$('.js-toggler').removeClass('is-active');
				$('.' + triggerItem).hide().addClass('is-active');
				$('.' + togglerItem).show().addClass('is-active');
				$(this).addClass('is-active');
				}

		} else {
			$(this).toggleClass('is-active');
			$('.' + togglerItem).toggle().toggleClass('is-active');
		}
	});

	/*-------- fix body ------*/
	$('.menu .js-toggler').on('click', function(){
		$('body').toggleClass('no-move');
		$('.header .menu').toggleClass('no-transforms');
	});

	/* --- close something ---*/
	$('.js-close').on('click', function() {
		var closeItem = $(this).data('close');

		$('.' + closeItem).removeClass('is_active').hide();
		$('.js-toggler').removeClass('is_active');

		$('body').removeClass('no-move');
		$('.popup, .popup__window, .popup__overlay').removeClass('is_active').hide();

		return false;
	});

	/* ---- open popup ---*/
	$('.js-ppp').on('click', function() {

		$('.js-toggler').removeClass('is_active');
		$('.popup__window').removeClass('is_active').hide();

		var open = $(this).data('ppp');
		$('.popup__overlay, .popup').addClass('is_active').show();
		$('.' + open).addClass('is_active').show();

		return false;
	});

	/* --- wallet bird ----*/
	$('.js-wallet').on('keyup', function () {
		var $text = $(this).val();

		if($text.length > 51){
			$(this).siblings('.icon-bird-green').addClass('is-visible');
		} else {
			$(this).siblings('.icon-bird-green').removeClass('is-visible');
		}
	});

	/*---- tab ---*/
	$('.tab__item').on('click', function () {
		var $tabClass = $(this).data('tab');

		$(this).addClass('is-active').siblings().removeClass('is-active');
		$('.' + $tabClass).addClass('is-open').show().siblings().removeClass('is-open').hide();
		return false;
	});

	$('.public').each(function () {
			var $slider = $(this);
			var $item = $(this).find('.public__item');

			// if($item.length > 2) {
				$(this).slick({
					infinite: false,
					variableWidth: true
				});
			// }
		})

	if($(document).width() > 1060) {
		Global_main.fourSlider({
			slider: '.doc_correct',
			item: '.read'
		});
	}

});


$(window).scroll(function(){
	if ($(window).scrollTop() >= 100) {
		$('header').addClass('header-fix');
	}
	else {
		$('header').removeClass('header-fix');
	}
});

