let answerUser = document.getElementById('prompt');
let navBar = document.getElementsByClassName('menu');
let navBarLi = document.getElementsByClassName('menu-item');
let col = document.querySelectorAll('.column');
let adv = document.querySelector('.adv');
let li = document.createElement('li');
let text = 'Пятый пункт';
let headerApple = document.getElementById('title');

//Восстановил порядок в меню    
navBar[0].insertBefore(navBarLi[2], navBarLi[1]);

//Сменил bg
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

//добавил 5 пункт в меню
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
navBar[0].appendChild(li);

//Отредактировал заголовок
headerApple.textContent = 'Мы продаем только подлинную технику Apple';
//От себя сделал чуток поменьше шрифт, не понравилось, как выровнялся текст
headerApple.style.fontSize = 'xx-large';

//Дропнул рекламу
col[1].removeChild(adv);

//Проверка prompt и запись мнения в соответствующий блок на странице
for (let i = 0; i < 1; i++) {
	let ask = prompt('Как вы относитель к технике Apple?');
	   answerUser.textContent = ask;
        if (ask == '' || ask == null) {
            alert('Нам важно узнать ваше мнение!');
            i--;
        } else if (ask.length > 65){
            alert('У вас слишком длинное мнение!');
            i--;
            }
}












