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