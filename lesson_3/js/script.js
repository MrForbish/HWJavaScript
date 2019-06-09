let money,
    name,
    time,
    price

// Cтааааартууууеееем!!! И спрашиваем назавние магазина :D
function askShopName() {
    name = prompt('Введите название магазина'); 
}  

askShopName(); 

//Запрашиваем бюджет и считаем дневную норму))
function calculateBudget() {
    
   for(let i = 0; i < 1; i++) {
        money = prompt("Ваш бюджет на месяц?");

        if ((!isNaN(money)) && (money !== "") && (money !== null)) {
            alert('Ваш бюджет на 1 день составляет: ' + Math.round(money / 30)); 
            } else if((money == "") || (money == null)){
                i--;
                alert('Поле пустое'); 
                } else {
                    i--;
                    alert('Введите сумму бюджета');
                    }
            
       
    }
}

calculateBudget();


    
let mainList = {
        budget: money,
        shopName: name,
        shopGoods: [],
        employers: {},
        open: true,
        discount: false
    }

//Считаем дисконтную цену от введеного прайса, если дисконт включен
function calculateDiscount() {
    for(let i = 0; i < 1; i++) {

        price = prompt('Введите сумму прайса');

        if (!(isNaN(price)) && (price !== '') && (price !==null) && mainList.discount == true) {

                price = price - (price/100*20);
                alert('Цена по дисконту = ' + Math.round(price)); 

            } else if((price == "") || (price == null)){
                    i--;
                    alert('Поле не должно быть пустым'); 

                    } else if (!(isNaN(price)) && (price !== '') && (price !==null) && mainList.discount == false) {
                          alert('Дисконтная система в данный момент отключена. Приносим свои извинения! ' 
                                + 'Цена прайса = ' + price);
                            } else {
                                i--;
                                alert('Введите цену прайса');
                                }
            
       
    }
}


calculateDiscount();   


//Нанимаем сотрудников, спрашиваем имена и выводим в консоль в формате Номер - Имя
function toAcceptEmployeers() {
    for(let i = 0; i < 4; i++) {
        let nameEmployeers = prompt('Введите имя сотрудника');

            if((typeof nameEmployeers === 'string') && (isNaN(nameEmployeers)) &&  nameEmployeers.length < 50) {
                mainList.employers[i] = (i + 1).toString() + '-' + nameEmployeers;
                } else if(((nameEmployeers == '')) || (nameEmployeers == null)){
                    i--;
                    alert('Необходимо заполнить поле!');
                    } else {
                        i--;
                        alert('Имя должно состоять из букв!');
                        }
             console.log('Сотрудник ' + mainList.employers[i]);

    }
}  

toAcceptEmployeers();


//Выбираем тип товара
function chooseGoods() {
        for (let i = 0; i < 3; i++) {
    
            let itemType = prompt('Какой тип товаров будем продавать?');

    
            if ((typeof itemType === 'string') && (isNaN(itemType)) && itemType.length < 50) {
                
                console.log('Все верно!');
                mainList.shopGoods[i] = itemType;
                
                } else if(((itemType == '')) || (itemType == null)) {
                    i--;
                    alert('Заполните поле!');
                    } else {
                        i--;
                        alert('Имя товара должно состоять из букв!');
                        }
    }
        alert('Ваши товары: ' + mainList.shopGoods);
}

chooseGoods();


//Выдаем в алерт работает ли сейчас магазин, не знаю зачем, но
//захотелось реализовать функцию сравнения текущего времени с графиком работы
//реализовал криво, выводится только который сейчас полный час,
//но это все что я смог сообразить в 2:26 ночи))
function timeWork() {
    let date = new Date();
    let today = date.getHours();
  if (today < 0) {
        alert('На часах ' + today + ' с копейками! ' + 'Такого не может быть! WTF?');
    } else if(today > 8 && today < 20){
        alert('На часах ' + today + ' с копейками! ' + 'Время работать!');
        } else if(today < 24) {
            alert('На часах ' + today + ' с копейками! ' + 'Слишком поздно!');
            } else {
                alert('На часах ' + today + ' с копейками! ' + 'В сутках 24 часа!');
                }

}
timeWork();

//ну и выводим объект с данными в консоль для проверки выполнения
console.log(mainList);
