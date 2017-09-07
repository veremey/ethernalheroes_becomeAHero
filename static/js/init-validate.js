$(document).ready(function() {
	validate();

	(function() {
		if (!String.prototype.trim) {
			(function() {
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
			})();
		}

		// [].slice.call( document.querySelectorAll( '.retrieval__input, .feedback__field textarea, .order__input, .data__input, .description__input' ) ).forEach( function( inputEl ) {
		[].slice.call( document.querySelectorAll( '.data__input, .wallet__input' ) ).forEach( function( inputEl ) {
			if( inputEl.value.trim() !== '' ) {
				classie.add( inputEl.parentNode, 'input--filled' );
			}
			inputEl.addEventListener( 'focus', onInputFocus );
			inputEl.addEventListener( 'focus', addFocusClass );
			inputEl.addEventListener( 'blur', onInputBlur );
			inputEl.addEventListener( 'blur', removeFocusClass );
		} );

		function onInputFocus( ev ) {
			classie.add( ev.target.parentNode, 'input--filled' );
		}
		function addFocusClass( ev ) {
			classie.add( ev.target.parentNode, 'input--focus' );
		}

		function onInputBlur( ev ) {
			if( ev.target.value.trim() === '' ) {
				classie.remove( ev.target.parentNode, 'input--filled' );
			}
		}

		function removeFocusClass( ev ) {
			if( ev.target.value.trim() !== '' || ev.target.value.trim() === '' ) {
				classie.remove( ev.target.parentNode, 'input--focus' );
			}
		}

	})();

	$('.js-wallet').formatter({
		'pattern': '{{9999}} {{9999}} {{9999}} {{9999}} {{9999}} {{9999}} {{9999}} {{9999}} {{9999}} {{9999}} {{99}}',
		'persistent': false,
		'placeholder': '___ __ __ __'
	});


});//doc ready

function validate() {
	$('.js-validate').each(function(){
		if ($(this).length > 0) {
			$(this).validate({
				errorClass: 'has-error',
				rules: {
					firstname: {
						minlength: 2,
						required: true
					},
					name: {
						minlength: 2,
						required: true
					},
					fathername: {
						minlength: 2,
						required: true
					},
					city: {
						minlength: 2
					},
					time: {
						minlength: 7
					},
					password: {
						minlength: 5,
						message: 'Uncorrect pass'
					},
					pass: {
						minlength: 5
					},
					confirm_password: {
						minlength: 5,
						equalTo: '#password'
					},
					email: {
						email: true,
						required: true
					},
					tel: {
						minlength: 17,
						required: true
					},
					wallet: {
						minlength: 52,
						required: true
					},
					publickWallet: {
						minlength: 2,
						required: true
					},
					Eth: {
						minlength: 1,
						required: true
					},
					// sallerTel: {
					// 	minlength: 17
					// },
					address: {
						minlength: 2
					},
					message: {
						minlength: 4
					},
					date: {
						minlength: 4
					},
					productCode: {
						minlength: 2
					},
					sallerName: {
						minlength: 2
					},
					sallerPost: {
						minlength: 2
					},
					square: {
						minlength: 1
					},
					garantUserComment:{
						minlength: 4
					},
					discount: {
						required: true
					},
					client: {
						required: true
					},
					agree: {
						required: true
					}
				},
				messages: {
					firstname: '* Вас так зовут?',
					lastname: '* У вас такая фамилия?',
					fathername: '* У вас такое отчество?',
					time: {
						required: '* Enter password',
						minlength: '* Минимум 56 символов'
					},
					wallet: {
						required: 'Your ETH wallet number should contain 42 symbols',
						minlength: 'Your ETH wallet number should contain 42 symbols'
					},
					publickWallet: {
						required: 'Your ETH publick wallet number ',
						minlength: 'Your ETH publick wallet number '
					},
					Eth: {
						required: 'Your ETH  ',
						minlength: 'Your ETH'
					},
					password: {
						required: '* Enter password',
						minlength: '* Минимум 5 символов'
					},
					confirm_password: {
						 required: 'Enter new password',
						 minlength: '* Минимум 5 символов',
						 equalTo: '* Пароли не совпадают'
					},
					email: 'correct please',
					address: '* Это Ваш адрес?',
					any: '* Заполните поле',
					company: '* Заполните поле',
					tel: {
						required: 'заполнено некорректно',
						minlength: 'заполнено некорректно'
					},
					name: {
						required: 'заполнено некорректно',
						minlength: 'Минимум 2 символa'
					},
					message: {
						required: '* Заполните поле',
						minlength: 'Заполните поле',
					},
					text_area: {
						required: '* Заполните поле',
						minlength: 'Заполните поле'
					}
				}
			});
		}
	});
}



