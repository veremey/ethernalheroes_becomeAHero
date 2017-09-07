var Animation = new AnimationClass();

function AnimationClass() {
	var globalScope = this;

	/*--- global animations init ---*/
	/*---------------------------------------------------------------------*/
	this.initGlobalAnimations = function(opt) {
		var controller = new ScrollMagic.Controller();

		var $container = $(opt.container);

		var selfTriggeredElems = opt.selfTriggeredElems;

		if($container.hasClass('is-animated')) {
			$.each(selfTriggeredElems, function(index, value) {
				$(value.selector).each(function() {
					new ScrollMagic.Scene({triggerElement: this, triggerHook: value.triggerHook, reverse: false})
						.setClassToggle(this, value.class)
						.addTo(controller);
				});
			});
		}
	}

}