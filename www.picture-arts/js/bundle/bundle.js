(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	let modal = require('../parts/modal.js');
	let moreStyles = require('../parts/moreStyles.js');
	let slider = require('../parts/slider.js');
	let ajax = require('../parts/ajax.js');
	let numMask = require('../parts/numMask.js');

	modal();
	moreStyles();
	slider();
	ajax();
	numMask();

});
},{"../parts/ajax.js":2,"../parts/modal.js":3,"../parts/moreStyles.js":4,"../parts/numMask.js":5,"../parts/slider.js":6}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
function modal() {
let btns = document.getElementsByTagName('button'), //получаю все кнопки страницы по тегу
		popupDesign = document.querySelector('.popup-design'),//модалка с заказом дизайна
		popupConsult = document.querySelector('.popup-consultation'),//модалка с консультацией
		popupGift = document.querySelector('.popup-gift'),//модалка с подарочком ^_^
		giftBtnImg = document.getElementsByTagName('img')[0],//картинка подарочка ^_^
		popupDialog = document.getElementsByClassName('popup-dialog');

		for (let i = 0; i < popupDialog.length; i++) {
			popupDialog[i].addEventListener('click', function(e) {
				if(e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && 
					e.target.tagName !== 'BUTTON' || e.target.className == 'popup-close'){
					popupDesign.style.display = 'none';
				popupConsult.style.display = 'none';
				popupGift.style.display = 'none';
				document.body.style.overflow = '';
			}
		});
		}		

//Перебираю все кнопки и вешаю на них обработчик события с функцией
for(let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', openModal);
}
//Проверяю наличие определнного класса у кнопки
//и если есть совпадение, открываю нужное окно или прячу открытое
//так же добавил метку, отслеживающую выполнение функции
//для выплонения одного из условий модального окна в конце страницы
let mark = false;
function openModal(event){
	if(this.classList.contains('button-design')){
		popupDesign.style.display = 'block';
		giftBtnImg.style.display = 'none';
		document.body.style.overflow = 'hidden';
		mark = true;
	}else if(this.classList.contains('button-consultation')){
		popupConsult.style.display = 'block';
		giftBtnImg.style.display = 'none';
		document.body.style.overflow = 'hidden';
		mark = true;
	}
};
//Обработчик события по клику на подарок
let markGift = false;
giftBtnImg.addEventListener('click', function() {
	markGift = true;
	popupGift.style.display = 'block';
	giftBtnImg.style.display = 'none';
	document.body.style.overflow = 'hidden';
	clearTimeout(timeModal);
});

//Модалка через 60 секунд

let timeModal = setTimeout(showModal, 60000);
function showModal() {
	if (markGift == false && popupDesign.style.display == 'block' || popupConsult.style.display == 'block' || popupGift.style.display == 'block') {
		clearTimeout(timeModal);
	} else {
		popupConsult.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
};	

//Модалка после прокрутки в конец страницы
window.addEventListener('scroll', showGift);
function showGift() {
	if (mark == false && window.pageYOffset == (document.body.scrollHeight - document.documentElement.clientHeight)) {
		popupGift.style.display = 'block';
		giftBtnImg.style.display = 'none';
		document.body.style.overflow = 'hidden';
		window.removeEventListener('scroll', showGift);
		clearTimeout(timeModal);

	} else {
		popupGift.style.display = 'none';
			document.body.style.overflow = '';
	}
}
}
module.exports = modal;
},{}],4:[function(require,module,exports){
function moreStyles() {
	let moreStyles = document.getElementsByClassName('button-styles')[0],
	styles = document.getElementsByClassName('@media (max-width: 1199px) and (min-width: 992px) hidden-md')[0];


	moreStyles.addEventListener('click', () => {
		styles.style.display = 'block';
	});
}

module.exports = moreStyles;
},{}],5:[function(require,module,exports){
function numMask() {
function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(event) {
    var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
        if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
};
    
    var input = document.querySelector("#tel");
    var input1 = document.querySelector("#tel1");
    var input2 = document.querySelector("#tel2");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);

    input1.addEventListener("input", mask, false);
    input1.addEventListener("focus", mask, false);
    input1.addEventListener("blur", mask, false);

    input2.addEventListener("input", mask, false);
    input2.addEventListener("focus", mask, false);
    input2.addEventListener("blur", mask, false);

}
module.exports = numMask;
},{}],6:[function(require,module,exports){
function slider() {

let slides = document.querySelectorAll('.main-slider .main-slider-item');
let currentSlide = 0;
let slideTimeout = setTimeout(nextSlide, 500);
let slideInterval = setInterval(nextSlide,8000);
 
function nextSlide() {
    slides[currentSlide].className = 'main-slider-item';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'main-slider slideDown';
	};
}	


module.exports = slider;
},{}]},{},[1]);
