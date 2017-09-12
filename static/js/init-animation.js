$(function () {

	// $(document).ready(function() {
		/*--- global animations init ---*/
		/*---------------------------------------------------------------------*/
		Animation.initGlobalAnimations({
			container: 'body',
			selfTriggeredElems: {
				el1: {
					selector: '.header',
					triggerHook: 1,
					class: 'is-animated'
				},
				el2: {
					selector: '.header .logo',
					triggerHook: 1,
					class: 'is-animated'
				},
				el3: {
					selector: '.header .half',
					triggerHook: 1,
					class: 'is-animated'
				},
				el4: {
					selector: '.header .menu',
					triggerHook: 1,
					class: 'is-animated'
				},
				el5: {
					selector: '.navigator',
					triggerHook: 1,
					class: 'is-animated'
				},
				el6: {
					selector: '.startscreen',
					triggerHook: 1,
					class: 'is-animated'
				},
				el7: {
					selector: '.public',
					triggerHook: 1,
					class: 'is-animated'
				},
				el8: {
					selector: '.profile',
					triggerHook: 1,
					class: 'is-animated'
				}
			}
		});

		Animation.initGlobalAnimations({
			container: '.section-dark',
			selfTriggeredElems: {
				el1: {
					selector: '.half_l',
					triggerHook: 1,
					class: 'is-animated'
				},
				el2: {
					selector: '.half',
					triggerHook: 1,
					class: 'is-animated'
				},
				el3: {
					selector: '.slide',
					triggerHook: 1,
					class: 'is-animated'
				},
				el4: {
					selector: '.title-section',
					triggerHook: 1,
					class: 'is-animated'
				},
				el5: {
					selector: '.doc',
					triggerHook: 1,
					class: 'is-animated'
				}
			}
		});
		Animation.initGlobalAnimations({
			container: '.section-light',
			selfTriggeredElems: {
				el1: {
					selector: '.half_l',
					triggerHook: 1,
					class: 'is-animated'
				},
				el2: {
					selector: '.half',
					triggerHook: 1,
					class: 'is-animated'
				},
				el3: {
					selector: '.doc__title',
					triggerHook: 1,
					class: 'is-animated'
				},
				el4: {
					selector: '.details',
					triggerHook: 1,
					class: 'is-animated'
				},
				el5: {
					selector: '.pie',
					triggerHook: 1,
					class: 'is-animated'
				},
				el6: {
					selector: '.title-section',
					triggerHook: 1,
					class: 'is-animated'
				}
			}
		});
		Animation.initGlobalAnimations({
			container: '.horizontal',
			selfTriggeredElems: {
				el1: {
					selector: '.horizontal__line',
					triggerHook: 0.9,
					class: 'is-animated'
				}
			}
		});

		Animation.initGlobalAnimations({
			container: '.money',
			selfTriggeredElems: {
				el1: {
					selector: '.half',
					triggerHook: 0.9,
					class: 'is-animated'
				},
				el2: {
					selector: '.half_l',
					triggerHook: 0.9,
					class: 'is-animated'
				}
			}
		});
		Animation.initGlobalAnimations({
			container: '.roadmap',
			selfTriggeredElems: {
				el1: {
					selector: '.road__box',
					triggerHook: 0.9,
					class: 'is-animated'
				}
			}
		});
		Animation.initGlobalAnimations({
			container: '.team',
			selfTriggeredElems: {
				el1: {
					selector: '.people',
					triggerHook: 0.9,
					class: 'is-animated'
				}
			}
		});


		Animation.initGlobalAnimations({
			container: '.partners',
			selfTriggeredElems: {
				el1: {
					selector: '.partners-header',
					triggerHook: 0.9,
					class: 'is-animated'
				},
				el2: {
					selector: '.partners-content',
					triggerHook: 0.9,
					class: 'is-animated'
				}
			}
		});

	});


// });

