var Global_main = new GlobalMainClass();

function GlobalMainClass() {
	var globalScope = this;
	/*--- header changes ---*/
	/*---------------------------------------------------------------------*/
	this.initHeaderChanges = function(opt) {
		var $window = $(window);
		var $header = $(opt.header);
		var $header__static = $header.filter('.static');
		var $header__fixed = $header.filter('.fixed');

		var window__height = $window.height();


		$window.on('scroll', function(event) {
			// changing header
			if($window.scrollTop() >= 170/*window__height*/) {
				$header__static.hide();
				$header__fixed.addClass('opened');
			}
			else {
				$header__static.show();
				if(!$header__fixed.hasClass('always')) {
					$header__fixed.removeClass('opened');
				}
			}
		}).trigger('scroll');
	}

	/*--- countdown ---*/
	/*---------------------------------------------------------------------*/
	this.initCountdown = function(opt) {
		var $countdown = $(opt.countdown);
		var countdown__pref = opt.countdown.slice(1);

		$countdown.each(function() {
			var $countdown__this = $(this);

			var finaldate__year = $countdown__this.data('finaldate-year');
			var finaldate__month = $countdown__this.data('finaldate-month');
			var finaldate__day = $countdown__this.data('finaldate-day');
			var finaldate = finaldate__year + '/' + finaldate__month + '/' + finaldate__day;


			$countdown__this.countdown(finaldate, function(event) {
				$(this).html(event.strftime(''
			    + '<div class="' + countdown__pref + '_' + 'item">'
			    + '<span class="' + countdown__pref + '_' + 'num">%D</span>'
			    + '<span class="' + countdown__pref + '_' + 'text">d</span>'
			    + '</div>'
			    + '<div class="' + countdown__pref + '_' + 'item">'
			    + '<span class="' + countdown__pref + '_' + 'num">%H</span>'
			    + '<span class="' + countdown__pref + '_' + 'text">h</span>'
			    + '</div>'
			    + '<div class="' + countdown__pref + '_' + 'item">'
			    + '<span class="' + countdown__pref + '_' + 'num">%M</span>'
			    + '<span class="' + countdown__pref + '_' + 'text">m</span>'
			    + '</div>'
			    + '<div class="' + countdown__pref + '_' + 'item">'
			    + '<span class="' + countdown__pref + '_' + 'num">%S</span>'
			    + '<span class="' + countdown__pref + '_' + 'text">s</span>'
			    + '</div>'));
			});
		});
	}

	/*----- scroll to top -----*/
	/*---------------------------------------------------------------------*/
	this.scrollToTop = function (opt) {
		var $link = $(opt.link);
		var $window = $(window);

		$link.on('click', function() {
			$('html, body').animate({scrollTop: 0}, 800);
		});
	}

	/* ----- slider simple ----*/
	/* -----------------------------------------------------------------------------------*/
	this.sliderSimple = function (opt) {
		// $(document).ready(function () {
			var $slider = $(opt.slider);
			var $item = $(opt.item);

			if($item.length > 1) {
				$slider.slick({
					infinite: false,
					speed: 300,
					slidesToShow: 1,
					variableWidth: true,
					responsive: [
						{
							breakpoint: 880,
							settings: {
								variableWidth: false
							}
						}
					]
				});
			}
		// });
	}
	/* ----- slider fade ----*/
	/* -----------------------------------------------------------------------------------*/
	this.sliderfade = function (opt) {
		// $(document).ready(function () {
			var $slider = $(opt.slider);
			var $item = $(opt.item);

			if($item.length > 1) {
				$slider.slick({
					infinite: false,
					// speed: 300,
					slidesToShow: 1,
					fade: true,
					responsive: [
						{
							breakpoint: 880,
							settings: {
								variableWidth: true,
								fade: false
							}
						}
					]
				});
			}
		// });
	}

	/* ----- halfSlider -----------*/
	/*----------------------------------------------------------------------*/
	this.halfSlider = function (opt) {

		var $slider = $(opt.slider);
		var $item = $(opt.item);

		$slider.each(function () {
			var $slider = $(this);
			var $item = $(this).find(opt.item);

			if($item.length > 2) {
				$(this).slick({
				infinite: false,
				slidesToShow: 2
				});
			}
		})

	}
	/* ----- fourSlider -----------*/
	/*----------------------------------------------------------------------*/
	this.fourSlider = function (opt) {

		var $slider = $(opt.slider);
		var $item = $(opt.item);

		$slider.each(function () {
			var $slider = $(this);
			var $item = $(this).find(opt.item);

				$(this).slick({
				infinite: false,
				// slidesToShow: 4,
				variableWidth: true
				});

		})

	}

		/* --- parallax scrollMagic init ---*/
	/*--------------------------------------------------------------------*/
	this.initParallax = function(opt) {
		var $window = $(window);
		var controller = new ScrollMagic.Controller();

		$(window).on("scroll", function() {
		    controller.update(true);
		});

		if($(window).width() > 880){
			$(".parallax").each(function(index, elem) {
				var $this = $(this);
				var $parent = $this.parent(); //must use as triggerElement
				var tween = TweenMax.from(elem, 1, {
					y: '-30%',
					ease: Linear.easeNone
				});

				new ScrollMagic.Scene({
						triggerElement: $parent.get(0),
						triggerHook: .8,
						duration: "150%"
					})
					.setTween(tween)
					// .addIndicators()
					.addTo(controller);
			});
		}
	} //initParallax

}