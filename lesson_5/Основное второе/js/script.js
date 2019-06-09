//Получил кнопку по ID
let takeBtn = document.getElementById('open-btn');
console.log(takeBtn);

//Получил все поля в левом меню через классы
let nameValue = document.getElementsByClassName('name-value'),
	budgetValue = document.getElementsByClassName('budget-value'),
	goodsValue = document.getElementsByClassName('goods-value'),
	itemsValue = document.getElementsByClassName('items-value'),
	employersValue = document.getElementsByClassName('employers-value'),
	discountValue = document.getElementsByClassName('discount-value'),
	isopenValue = document.getElementsByClassName('isopen-value');

console.log(nameValue);
console.log(budgetValue);
console.log(goodsValue);
console.log(itemsValue);
console.log(employersValue);
console.log(discountValue);
console.log(isopenValue);

//Получил поля категории товаров через класс
let goodsItem = document.getElementsByClassName('goods-item');
console.log(goodsItem);

//Получил все 3 кнопки через Tag
let btn = document.getElementsByTagName('button');
console.log(btn);

//Получил поля ввода товаров, времени и расчета бюджета через querySelector
let goods = document.querySelector('.choose-item');
console.log(goods);
let time = document.querySelector('.time-value');
console.log(time);
let countBudget = document.querySelector('.count-budget-value');
console.log(countBudget);

//Получил поля имен сотрудников через querySelectorAll
let employers = document.querySelectorAll('.hire-employers-item');
console.log(employers);
