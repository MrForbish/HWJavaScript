import "babel-polyfill";

window.addEventListener('DOMContentLoaded', function() {

//Реализация таймера
	let deadline = '2018-06-16';

	function getTimeRemaining(endtime) {

		let t = Date.parse(endtime) - Date.parse(new Date());
				seconds = Math.floor( (t/1000) % 60 ),
				minutes = Math.floor( (t/1000/60) % 60),
				hours = Math.floor( (t/(1000*60*60)) );

				return {
					'total': t,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds
				};	
	};

	function setClock(id, endtime) {
		
		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

				function updateClock() {

					//Функция добавления ведущих нулей (решил с тернарным оператором попробовать)
				  function pad(n) {
				  	return n < 10 ? '0'+ n : n
				  }

					let t = getTimeRemaining(endtime);
					hours.innerHTML = pad(t.hours);
					minutes.innerHTML = pad(t.minutes);
					seconds.innerHTML = pad(t.seconds);

					if (t.total <= 0) {
						clearInterval(timeInterval);
						let timerAction = document.getElementsByClassName('timer-action')[0];
						timerAction.textContent = 'Акция уже закончилась :(';
						hours.innerHTML = '00';
						minutes.innerHTML = '00';
						seconds.innerHTML = '00';
					}				
				};
				//Думаю ошибка была в том, что setInterval был объявлен после вызова ф-ции
				//я поменял местами и скрипты перестали сбоить
				let timeInterval = setInterval(updateClock, 1000);
				updateClock();
				
	};

	setClock('timer', deadline);


//Реализация табов
	let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');

		}
}

	hideTabContent(1);

	function showTabContent(b) {
		if ( tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		};
	})

// Добавил модольное окно к табам
	let more = document.querySelector('.more'),
	    descriptBtn = document.querySelector('.description-btn'),//Взял селектор div-кнопки
	    infoDiv = document.querySelector('.info'),//взял селектор родителя всех табов

			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	//На селектор родителя повесил слушатель, ну и далее в условии 
	//если клацаем по родителю табов И по div-кнопке то получаем модальное окно
	infoDiv.addEventListener('click', (event) => {
		if (event.target && event.target.className == 'description-btn') {
			descriptBtn.classList.add('more-splash');
			overlay.style.display = 'block';
		  document.body.style.overflow = 'hidden';

		}
	});
	

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

let message = new Object();
		message.loading = 'Загрузка...';
		message.success = 'Спасибо! Заявка обрабатывается!';
		message.faillure = 'Что-то пошло не так...';

let form = document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),
		//Получаю элементы контактной формы
		formCont = document.getElementById('form'),
		inputCont = formCont.getElementsByTagName('input'),
		btnCont = formCont.getElementsByTagName('button')[0],

		statusMessage = document.createElement('div');

		statusMessage.classList.add('status');

		//Слушатель контактной формы
		formCont.addEventListener('submit', function(event) {
			event.preventDefault();
			formCont.appendChild(statusMessage);
			let formData = new FormData(form);

			function postData(data) {

				return new Promise(function(resolve, reject) {
					let request = new XMLHttpRequest();

						request.open('POST', 'server.php')

						request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

						request.onreadystatechange = function() {
							if (request.readyState < 4) {
								resolve()
							} else if (request.readyState === 4) {
								if (request.status == 200 && request.status < 300) {
									resolve()
									//добавление контента				
								}
								else {
									reject()
								}
							}
						}
						request.send(data);
				})
			}

			function clearInput() {
				for (let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
			}

			postData(formData) 
				.then(() => statusMessage.innerHTML = message.loading)
				.then(() => {
					document.body.style.background = 'url(/img/ajax-loader2.gif)'
				})
				.catch(() => statusMessage.innerHTML = message.faillure)
				.then(clearInput)

		});

		//Слушатель Узнать подробнее
		form.addEventListener('submit', function(event) {
			event.preventDefault();
			form.appendChild(statusMessage);
			let formData = new FormData(form);

			function postData(data) {

				return new Promise(function(resolve, reject) {
					let request = new XMLHttpRequest();

						request.open('POST', 'server.php')

						request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

						request.onreadystatechange = function() {
							if (request.readyState < 4) {
								resolve()
							} else if (request.readyState === 4) {
								if (request.status == 200 && request.status < 300) {
									resolve()
													
								}
								else {
									reject()
								}
							}
						}
						request.send(data);
				})
			}

			function clearInput() {
				for (let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
			}

			postData(formData) 
				.then(() => statusMessage.innerHTML = message.loading)
				.then(() => {

					statusMessage.innerHTML = message.success;
				})
				.catch(() => statusMessage.innerHTML = message.faillure)
				.then(clearInput)
		});

		//Slider

		let slideIndex = 1,
				slides = document.getElementsByClassName('slider-item'),
				prev = document.querySelector('.prev'),
				next = document.querySelector('.next'),
				dotsWrap = document.querySelector('.slider-dots'),
				dots = document.getElementsByClassName('dot');

				showSlides(slideIndex);

				function showSlides(n) {

					if (n > slides.length) {
						slideIndex = 1;
					};
					if (n < 1) {
						slideIndex = slides.length;
					};

					for (let i = 0; i < slides.length; i++) {
						slides[i].style.display = 'none';
					};

					for (let i = 0; i < dots.length; i++) {
						dots[i].classList.remove('dot-active');
					}

					slides[slideIndex - 1].style.display = 'block';
					dots[slideIndex - 1].classList.add('dot-active');

				}

				function plusSlides(n) {
					showSlides(slideIndex += n)
				}

				function currentSlide(n) {
					showSlides(slideIndex = n)
				}

				prev.addEventListener('click', function() {
					plusSlides(-1);
				});
				next.addEventListener('click', function() {
					plusSlides(1);
				});

				dotsWrap.addEventListener('click', function(event) {
					for (let i = 0; i < dots.length + 1; i++) {
						if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
							currentSlide(i);
						}
					}
				});




			let persons = document.getElementsByClassName('counter-block-input')[0],
				 	restDays = document.getElementsByClassName('counter-block-input')[1],
				 	place = document.getElementById('select'),
				 	totalValue = document.getElementById('total'),
				 	personsSum = 0,
				 	daysSum = 0,
				 	total = 0;

				 	totalValue.innerHTML = 0;
				 	
				 	persons.onkeypress = function(event){
						 
						 if (event.charCode && (event.charCode < 48 || event.charCode > 57))
						  return false;
					};

					restDays.onkeypress = function(event){
						 
						 if (event.charCode && (event.charCode < 48 || event.charCode > 57))
						  return false;
					};

				 	persons.addEventListener('change', function() {
				 		personsSum = +this.value;
				 		total = (daysSum + personsSum) * 4000;
				 		if (restDays.value == '' || persons.value == '') { //Немного изменил условие проверки
				 			totalValue.innerHTML = 0;
				 		} else {
				 			totalValue.innerHTML = total;
				 		}
				 	});

				 	restDays.addEventListener('change', function() {
				 		daysSum = +this.value;
				 		total = (daysSum + personsSum) * 4000;
				 		if (persons.value == '' || restDays.value == '') { //Немного изменил условие проверки
				 			totalValue.innerHTML = 0;
				 		} else {
				 			totalValue.innerHTML = total;
				 		}
				 	});

				 	place.addEventListener('change', function() {
				 		if (restDays.value == '' || persons.value == '') {
				 			totalValue.innerHTML = 0;
				 		} else {
				 			let a = total;
				 			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
				 		}
				 	});
});

