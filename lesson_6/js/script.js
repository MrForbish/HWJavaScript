let open = document.getElementById('open-btn');

//Получил все поля в левом меню через классы
let nameValue = document.getElementsByClassName('name-value'),
    budgetValue = document.getElementsByClassName('budget-value'),
    goodsValue = document.getElementsByClassName('goods-value'),
    itemsValue = document.getElementsByClassName('items-value'),
    employersValue = document.getElementsByClassName('employers-value'),
    discountValue = document.getElementsByClassName('discount-value'),
    isopenValue = document.getElementsByClassName('isopen-value');

    



//Получил поля категории товаров через класс
let goodsItem = document.getElementsByClassName('goods-item');

//Получил все 3 кнопки через Tag
let btnGoods     = document.getElementsByTagName('button')[1],
    btnBudget = document.getElementsByTagName('button')[2],
    btnEmployers = document.getElementsByTagName('button')[3];

//Получил поля ввода товаров, времени и расчета бюджета через querySelector
let goods = document.querySelector('.choose-item');
let time = document.querySelector('.time-value');
let countBudget = document.querySelector('.count-budget-value');

//Получил поля имен сотрудников через querySelectorAll
let employers = document.querySelectorAll('.hire-employers-item');



let money,
    price;

    goodsItem[0].disabled = true;
    goodsItem[1].disabled = true;
    goodsItem[2].disabled = true;
    goodsItem[3].disabled = true;
    employers[0].disabled = true;
    employers[1].disabled = true;
    employers[2].disabled = true;
    time.disabled = true;
    goods.disabled = true;
    btnGoods.disabled = true;
    btnEmployers.disabled = true;
    btnBudget.disabled = true;

//Событие по нажатию кнопки "Открыть".
//Спрашиваем бюджет
//Спрашиваем название магазина
open.addEventListener('click', () => {

    if (mainList.open == true) {

    mainList.open = false;
    btnGoods.disabled = true;
    btnEmployers.disabled = true;
    btnBudget.disabled = true;
    nameValue[0].textContent = '';
    budgetValue[0].textContent = '';
    goodsValue[0].textContent = '';
    itemsValue[0].textContent = '';
    employersValue[0].textContent = '';
    goodsItem[0].disabled = true;
    goodsItem[1].disabled = true;
    goodsItem[2].disabled = true;
    goodsItem[3].disabled = true;
    employers[0].disabled = true;
    employers[1].disabled = true;
    employers[2].disabled = true;
    time.disabled = true;
    goods.disabled = true;
    goodsItem[0].value = '';
    goodsItem[1].value = '';
    goodsItem[2].value = '';
    goodsItem[3].value = '';
    employers[0].value = '';
    employers[1].value = '';
    employers[2].value = '';
    countBudget.value = '';
    countBudget.disabled = true;
    time.value = '';
    goods.value = '';
    discountValue[0].style.background = 'url(img/krest.png) center no-repeat';
    isopenValue[0].style.background = 'url(img/krest.png) center no-repeat';
    open.style.background = '#ff8c00';
    open.textContent = 'Открыть магазин';
    alert('Вы закрыли магазин');     

   } else if (mainList.open == false) {

    goodsItem[0].disabled = false;
    goodsItem[1].disabled = false;
    goodsItem[2].disabled = false;
    goodsItem[3].disabled = false;
    employers[0].disabled = false;
    employers[1].disabled = false;
    employers[2].disabled = false;
    countBudget.disabled = false;
    time.disabled = false;
    goods.disabled = false;
    btnGoods.disabled = false;
    btnEmployers.disabled = false;
    btnBudget.disabled = false;   

//Запрашиваем бюджет
    for(let i = 0; i < 1; i++) {

        money = prompt("Ваш бюджет на месяц?", '');

        if ((!isNaN(money)) && (money !== "") && (money !== null)) {
           
        } else if((money == "") || (money == null)){
            i--;
            alert('Поле пустое'); 
        } else {
            i--;
            alert('Введите сумму бюджета');
        }
        budgetValue[0].textContent = money; 
        mainList.budget = money;           
    };

//Запрашиваем название магазина    
    for (let i = 0; i < 1; i++) {
        var name = prompt('Введите название магазина');
           
        if (name == '' || name == null) {
            alert('Введите название магазина!');
            i--
        } else if (name.length > 30){
            alert('Название слишком длинное');
            i--;
        }      
           
    } 
    nameValue[0].textContent = name.toUpperCase();

    mainList.open = true;
    if(mainList.open == true) {
        //open.textContent = 'Закрыть магазин';
        open.style.background = 'url(img/close.png) center no-repeat';
        open.style.backgroundColor = '#ff5722';
        

    }
  
//Чекаем дисконт
checkDiscount = confirm('Использовать дисконтную систему?');
        if (checkDiscount == true) {
        mainList.discount = true;
        if(money < 10000) {
            alert('Бюджет слишком мал для активации дисконта');
            mainList.discount = false;
            discountValue[0].style.background = 'url(img/krest.png) center no-repeat'; 
            } else {
                mainList.discount = true;
                discountValue[0].style.background = 'url(img/ok.png) center no-repeat';
            }
        };
    }              
});

//Заполнение полей категории товаров по кнопке "Утвердить"
btnGoods.addEventListener('click', () => {
    count = 0;
  for (let i = 0; i < goodsItem.length; i++) {

    let itemType = goodsItem[i].value;

    if ((typeof itemType === 'string') && (isNaN(itemType)) && itemType.length < 50) {
           
        console.log('Все верно!');
        mainList.shopGoods[i] = itemType;
        goodsValue[0].textContent = mainList.shopGoods;
            
    } else {
        count += 1;
    } 
  }
  alert('Некоторые поля пусты, либо содержат цифры');           
});

//Ввод товаров через запятую
goods.addEventListener('change', () => {
let itemType = goods.value;
                   
      mainList.shopItems.length = 0;                     
    if((typeof itemType === 'string') && (isNaN(itemType)) && itemType.length < 50){

        a = itemType.split(',');
           
           for (let k = 0; k < a.length; k++) {
                if(a[k] !== '' && isNaN(a[k])) {
                   mainList.shopItems.push(a[k]);
                } else {
                    alert('Нельзя вводить числа!');
                }
            }

            mainList.shopItems.sort();
            itemsValue[0].textContent = mainList.shopItems;


    } else if((itemType == "") || (itemType == null)) {
       
        alert('Поле не должно быть пустым');
    } else {
       
        alert('Имя товара должно состоять из букв!');
    }
            
});

//Слушаем поле ввода времени
time.addEventListener('change', () => {
let timeOpen = time.value;

    if (timeOpen < 0) {
        alert('Такого не может быть! WTF?');
        mainList.open = false;
    } else if(timeOpen > 8 && timeOpen < 20){
        alert('Время работать!');
        mainList.open = true;
    } else if(timeOpen < 24) {
        alert('Слишком поздно!');
        mainList.open = false;
    } else {
        alert('В сутках 24 часа!');
        mainList.open = false;
    }
        if (mainList.open == true) {
            isopenValue[0].style.background = 'url(img/ok.png) center no-repeat';
        } else {
            isopenValue[0].style.background = 'url(img/krest.png) center no-repeat';
        }
});



btnBudget.addEventListener('click', () => {  
    countBudget.textContent = countBudget.value = Math.round(money / 30);
});

btnEmployers.addEventListener('click', () => {
    employersValue[0].textContent = '';
    for (i = 0; i < employers.length; i++) {
        let employ = employers[i].value;
          if((typeof employ === 'string') && (isNaN(employ)) && employ !== '' &&  employ.length < 50) {
            
            mainList.employers[i] = employ[0].toUpperCase() + employ.slice(1);
            employersValue[0].textContent += mainList.employers[i] + ', '; 
        } else if(employ == '') {
            employers[i].value = '';
            alert('Поле номер ' + (i + 1) + ' пустое!');

          } else {
            employers[i].value = '';
            alert('Поле номер ' + (i + 1) + ' содержит цифры!');   
          }
    }
});

const mainList = {
        budget: money,
        shopName: name.toUpperCase(),
        shopGoods: [],
        employers: {},
        open: false,
        discount: false,
        shopItems: [],
};            


//ну и выводим объект с данными в консоль для проверки выполнения
console.log(mainList);
