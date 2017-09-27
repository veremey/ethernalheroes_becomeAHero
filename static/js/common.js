
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
		if($(this).parent().hasClass('no-transforms') == true ){
			$('body').addClass('no-move');
		}
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

			$(this).slick({
				infinite: false,
				variableWidth: false,
				slidesToShow: 2,
				responsive: [
					{
						breakpoint: 880,
						settings: {
							// variableWidth: true,
							slidesToShow: 1,
							arrows: true
						}
					}
				]
			});
		})

	// if($(document).width() > 1400){
	$('.doc').each(function () {
		var $highter = 0;
		var t = 0;
		var $itm = $(this).find('.profile__wrap');

		for (var i = $itm.length - 1; i >= 0; i--) {
			var $small = $itm.eq(i).outerHeight()
			if($small > $highter) {
				$highter = $small;
			}
		}
		$itm.css({'height' : $highter});
	});
	// }

	runSlick();

	// ----------------------------------------------
	// ----------------------------------------------

	$('body').on('click', function () {
		$('video').each(function () {
	        this.play();
	    });
	});
	// -----------================================---------------
	// -----------================================---------------

	var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);

	var $vid = function () {

		if (isIOS) {
			var canvasVideo = new CanvasVideoPlayer({
				videoSelector: '#video-start',
				canvasSelector: '.canvas',
				timelineSelector: false,
				autoplay: false,
				makeLoop: true,
				pauseOnClick: false,
				audio: false,

				// ad for IOS loop video
				resetOnLastFrame: true,
				loop: false,
			});

			canvasVideo.play();

		} else {
			// Use HTML5 video
			$('.canvas').eq(0).css({'display' : 'none'});
		}
	};

	$vid();

	// -----------================================---------------
	// -----------================================---------------
	// -----------================================---------------

	$('.slide').on("init", function (event, slick) {

		$('video').each(function () {
			this.play();
		});
		for (var i = $('.video').length - 1; i >= 0; i--) {
			$('.video')[i].play();
		}

	});


	if($('.slide__item').length > 1) {
		$('.slide').slick({
			infinite: false,
			speed: 300,
			slidesToShow: 1,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 880,
					settings: {
						variableWidth: false,
						arrows: false
					}
				}
			]
		});
	}


});

var runSlick = function () {
	$('.doc_correct').slick({
		infinite: false,
		variableWidth: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					infinite: false,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 920,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 650,
				settings: "unslick"
			}
		]
	});

}

$(window).scroll(function(){

	if ($(window).scrollTop() >= 100) {
		$('header').addClass('header-fix');	}
	else {
		$('header').removeClass('header-fix');
	}
});

$(window).on('resize', function() {
  $('.public, .profile, .doc_correct, .slide').slick('resize');
  for (var i = $('.video').length - 1; i >= 0; i--) {
  	$('.video')[i].play();
  }
});
$(window).on('orientationchange', function() {
  $('.public, .profile, .doc_correct, .slide').slick('resize');
  for (var i = $('.video').length - 1; i >= 0; i--) {
  	$('.video')[i].play();
  }
});


