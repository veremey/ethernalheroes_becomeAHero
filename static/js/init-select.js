$(document).ready(function() {

	$('.selector').on('click', '.check', function () {

		if( $(this).parents('.selector').has(':checked').length ) {
			$(this).parents('.selector').addClass('has-check');
		} else {
			$(this).parents('.selector').removeClass('has-check');
		}

	});


	$('.js-resetRetrieval').on('click', function () {
		resetRetrieval();
		clearChusedApteki();
	});

	// -----------------------------------
	// check select
	$(document).on('click', function(el){
		var childr = $('.select').find('*');

		if($(el.target).is(childr) == false ){
			$('.select').removeClass('is-active');
			$('.select__list').slideUp('fasst');
			if($('.select').parent().has('.mod_time')){
				var $parent = $('.select').parent('.mod_time');
				$parent.removeClass('is-active');
				$parent.parent('.description__break').removeClass('is-break');
			}
		}
	});

	function select() {
		$(".js-select").each(function(){
			var select_list = $(this).children(".js-select-list");
			var content = select_list.find("li").first().html();
			//$(this).find(".js-select-text").html(content);//.text(text);//content
			$(this).click(function(event){
					var $self = $(this);
				if ($(this).hasClass("is-active")) {

						setTimeout(function () {
							$self.removeClass('is-active');
						}, 400);

						select_list.slideUp("fast");
				}
				else {
						$(".js-select").removeClass("is-active");
						$(".js-select-list").hide();
						select_list.slideDown("fast");
						$(this).addClass("is-active");
				}
				event.stopPropagation();
			});
			select_list.find("li").click(function(event) {
				var id = $(this).attr("data-id");
				var content = $(this).html();

				$(this).addClass('is-active').siblings().removeClass('is-active');
				$(this).parent().parent().find(".js-select-text").html(content);
				$(this).parent().parent().find(".js-select-input").val(id);
				$(this).parent().hide();
				$(this).parents(".js-select").removeClass("is-active");
				event.stopPropagation();
			});
		});
	}
	select();

	$('.js-select').click(function(event){
		event.stopPropagation();
		if($(this).parent().has('.mod_time')){
			var $parent = $(this).parent('.mod_time');
			$('.description__break').removeClass('is-break');
			$parent.addClass('is-active');
			$parent.parent('.description__break').addClass('is-break');
		}
	});

	$('.js-closeOnChek').on('click', '.check', function(event) {
		$(this).parents('.selector').removeClass('is_open');
		$(this).parents('.selector__title').removeClass('is_active');
		$(this).parents('.selector__box').removeClass('is_opened');
	});

	$('.js-select-list li').on('click', function() {
		$(this).parents('.retrieval__opening').addClass('has-check');
	});

	$('.selector').on('click', '.js-cancel_select', function(event) {
		$(this).removeClass('is_open');
		$(this).next('.selector__title').removeClass('is_active');
		$(this).siblings('.selector__box').removeClass('is_opened');
		var checkboxes = $(this).parents('.selector').removeClass('has-check').find('.check input');

		for (var i = checkboxes.length - 1; i >= 0; i--) {
			checkboxes.eq(i).prop('checked', false);
		}
	});

});

