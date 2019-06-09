function ajax() {

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
}

module.exports = ajax;