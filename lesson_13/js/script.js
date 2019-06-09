$(document).ready(function() {


	//Обработчик кнопки "Выбрать тур"
	$('.main_btna').on('click', function() {
			$('.overlay').fadeToggle('slow');
			$('.modal').animate({
				opacity: 'toggle',
				width: 'toggle'
				//margin: '0, 0, 0, 0.6in'
			}, 1000)
			$('.modal_contact').animate({
				opacity: '0',

			},100);

			$('.modal_contact').animate({
				opacity: '1',

			},3000);

			$("html,body").css("overflow","hidden");
	});

	//Обработчик кнопки "Получить консультацию"
	$('.main_btn').on('click', function() {
			$('.overlay').fadeToggle('slow');
			$('.modal').animate({
				opacity: 'toggle',
				width: 'toggle'
				//margin: '0, 0, 0, 0.6in'
			}, 1000)
			$('.modal_contact').animate({
				opacity: '0',

			},100);

			$('.modal_contact').animate({
				opacity: '1',

			},3000);
			$("html,body").css("overflow","hidden");
	});

	//Обработчик кнопки "Расписание туров"
	$('a[href="#sheldure"]').on('click', function() {
			$('.overlay').fadeToggle('slow');
			$('.modal').animate({
				opacity: 'toggle',
				width: 'toggle'
				//margin: '0, 0, 0, 0.6in'
			}, 1000)
			$('.modal_contact').animate({
				opacity: '0',

			},100);

			$('.modal_contact').animate({
				opacity: '1',

			},3000);
			$("html,body").css("overflow","hidden");
	});
	//Обработчик нажатия на крестик
	$('.close').on('click', function() {
			$('.overlay').fadeOut('slow');
			$('.modal').slideUp(500);
			$('.modal_contact').animate({
				opacity: '0'
			},500);
			$("html,body").css("overflow","");
	});

 	function call() {
 	  let msg  = $('.form').serialize();
        $.ajax({
          type: 'POST',
          url: 'server.php',
          data: msg,
          success: function(data) {
            $('.thanks').html(data);
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }

});