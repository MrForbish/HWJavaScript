function modal() {

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
}

module.exports = modal;
