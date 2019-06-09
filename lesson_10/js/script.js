window.addEventListener('DOMContentLoaded', () => {

//Реализация таймера
	let deadline = '2018-06-18';

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
				  	return n < 10 ? `0${n}` : n
				  }

					let t = getTimeRemaining(endtime);
					hours.innerHTML = pad(t.hours);
					minutes.innerHTML = pad(t.minutes);
					seconds.innerHTML = pad(t.seconds);

					if (t.total <= 0) {
						clearInterval(timeInterval);
						let timerAction = document.getElementsByClassName('timer-action')[0];
						timerAction.textContent = `Акция уже закончилась :(`;
						hours.innerHTML = `00`;
						minutes.innerHTML = `00`;
						seconds.innerHTML = `00`;
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

	info.addEventListener('click', (event) => {
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

// Добавил модальное окно к табам
	let more = document.querySelector('.more'),
	    descriptBtn1 = document.getElementsByClassName('description-btn')[0],
	    descriptBtn2 = document.getElementsByClassName('description-btn')[1],
	    descriptBtn3 = document.getElementsByClassName('description-btn')[2],
	    descriptBtn4 = document.getElementsByClassName('description-btn')[3],
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	descriptBtn1.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	descriptBtn2.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	descriptBtn3.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	descriptBtn4.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});


	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

});

