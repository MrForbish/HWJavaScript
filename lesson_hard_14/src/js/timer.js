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

