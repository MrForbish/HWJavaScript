function ajax() {

let message = new Object();
		message.loading = 'Загрузка...';
		message.success = 'Мы с вами свяжемся!';
		message.faillure = 'Что-то пошло не так...';

let formConsult = document.getElementsByClassName('form')[1],
		formDesign = document.getElementsByClassName('form')[2],
		formMain = document.getElementsByClassName('form-main')[0],
		input = formConsult.getElementsByTagName('input'),
		inputDesign = formDesign.getElementsByTagName('input'),
		inputMain = formMain.getElementsByTagName('input'),
		popupContent = formDesign.getElementsByClassName('popup-content')[0],
		statusMessage = document.createElement('div'),
		statusMessageLoading = document.createElement('div'),
		statusMessageError = document.createElement('div'),
		btnBot = document.getElementById('btn-bot');

		statusMessage.classList.add('success');
		statusMessageLoading.classList.add('loading');
		statusMessageError.classList.add('failure');

		//Слушатель формы консультации
		formConsult.addEventListener('submit', function(event) {
			event.preventDefault();
			formConsult.appendChild(statusMessage);
			formDesign.appendChild(statusMessageLoading);
			formDesign.appendChild(statusMessageError);
			let formData = new FormData(formConsult);

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
				.then(() => {
					statusMessage.style.display = 'none';
					statusMessageError.style.display = 'none';
					statusMessageLoading.style.display = 'block';
					statusMessageLoading.innerHTML = message.loading}
					)
				.then(() => {
					statusMessage.style.display = 'block';
					statusMessageError.style.display = 'none';
					statusMessageLoading.style.display = 'none';
					statusMessage.innerHTML = message.success;
				})
				.catch(() => {
					statusMessage.style.display = 'none';
					statusMessageLoading.style.display = 'none';
					statusMessageError.style.display = 'block';
					statusMessageError.innerHTML = message.faillure})
				.then(clearInput)

		});
		//Слушатель формы дизайна
		formDesign.addEventListener('submit', function(event) {
			event.preventDefault();
			formDesign.appendChild(statusMessage);
			formDesign.appendChild(statusMessageLoading);
			formDesign.appendChild(statusMessageError);
			let formData = new FormData(formDesign);

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
				for (let i = 0; i < inputDesign.length; i++) {
					inputDesign[i].value = '';
				}
			}

			postData(formData) 
				.then(() => {
					statusMessage.style.display = 'none';
					statusMessageError.style.display = 'none';
					statusMessageLoading.style.display = 'block';
					statusMessageLoading.innerHTML = message.loading
				})
				.then(() => {
					statusMessage.style.display = 'block';
					statusMessageError.style.display = 'none';
					statusMessageLoading.style.display = 'none';
					statusMessage.innerHTML = message.success;
				})
				.catch(() => {
					statusMessage.style.display = 'none';
					statusMessageLoading.style.display = 'none';
					statusMessageError.style.display = 'block';
					statusMessageError.innerHTML = message.faillure})
				.then(clearInput)

		});
		//Слушатель главной формы
		formMain.addEventListener('submit', function(event) {
			event.preventDefault();
			formMain.appendChild(statusMessage);
			let formData = new FormData(formMain);

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
				for (let i = 0; i < inputMain.length; i++) {
					inputMain[i].value = '';
				}
			}

			postData(formData) 
				.then(() => statusMessage.innerHTML = message.loading)
				.then(() => {
					statusMessage.style.backgroundColor = '#eed4d2';
					btnBot.style.display = 'none' 
					statusMessage.innerHTML = message.success;
				})
				.catch(() => statusMessage.innerHTML = message.faillure)
				.then(clearInput)

		});
}

module.exports = ajax;