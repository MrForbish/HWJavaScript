let money,
    name,
    time,
    price

/*function start() {
    name = prompt('Введите название магазина', ''); 

    while(name !== null || name.length < 50) {
        name = prompt('Введите название магазина', '');
        console.log('Все верно!');
    }
}
*/
//start();



function askShopName() {
    for (let i = 0; i < 1; i++) {
        name = prompt('Введите название магазина', ''); 
        if (name == '' || name == null) {
            alert('Введите название магазина!');
            i--;
        } else if (name.length > 30){
            alert('Название слишком длинное');
            i--;
        }
    }
}  

askShopName(); 

    
let mainList = {
        budget: money,
        shopName: name,
        shopGoods: [],
        employers: {},
        open: false,
        discount: true,
        shopItems: [],
        
        //Выбираем тип товара
        chooseGoods: function chooseGoods() {
            checkError();
        },
        
        //Оповещаем, работает ли магазин
        timeWork: function timeWork() {
            
                let date = new Date();
                let today = date.getHours();
            
              if (today < 0) {
                    alert('На часах ' + today + ' с копейками! ' + 'Такого не может быть! WTF?');
                } else if(today > 8 && today < 20){
                    alert('На часах ' + today + ' с копейками! ' + 'Время работать!');
                    mainList.open = true;
                    } else if(today < 24) {
                        alert('На часах ' + today + ' с копейками! ' + 'Слишком поздно!');
                        } else {
                            alert('На часах ' + today + ' с копейками! ' + 'В сутках 24 часа!');
                            }

            },
            
            //Запрашиваем бюджет и считаем дневную норму
            calculateBudget: function calculateBudget() {
    
               for(let i = 0; i < 1; i++) {
                    money = prompt("Ваш бюджет на месяц?", '');

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
            },
    
            //Нанимаем сотрудников, спрашиваем имена и выводим в консоль в формате Номер - Имя
            toAcceptEmployeers: function toAcceptEmployeers() {
                
                for(let i = 0; i < 4; i++) {
                
                    let nameEmployeers = prompt('Введите имя сотрудника', '');

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
            },
    
            //Считаем дисконтную цену от введеного прайса, если дисконт включен
            calculateDiscount: function calculateDiscount() {
            for(let i = 0; i < 1; i++) {

                price = prompt('Введите сумму прайса', '');

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
            },
    
            //Выбираем товары
            chooseShopItems: function chooseShopItems() {
                 
                    for(let j = -1; j < mainList.chooseShopItems.length; j++) {  
                        
                    let items = prompt('Перечислите через запятую товары', '');
                           
                    if((typeof items === 'string') && (isNaN(items)) && items.length < 50){
                 
                           a = items.split(',');

                                   for (let k = 0; k < a.length; k++) {
                                    if(a[k] !== '') {
                                       mainList.shopItems.push(a[k]);
                                        } 
                                    }

                            } else if((items == "") || (items == null)) {
                                j--;
                                alert('Поле не должно быть пустым');

                                } else {
                                    j--;
                                    alert('Имя товара должно состоять из букв!');
                                    }
                         }       

                                    let ifYouForgot = prompt('Введите еще товар, если забыли', '')

                                        if (ifYouForgot == '' || ifYouForgot == null){

                                            } else {
                                                mainList.shopItems.push(ifYouForgot);
                                            }

                                    mainList.shopItems.sort();
                                    console.log(mainList);
                                    //Юзаю forEach для перебора в алерте введенных товаров, нумерую каждый товар
                                    mainList.shopItems.forEach( function(items, i, chooseShopItems) {
                                        alert('У нас вы купили: ' + (i + 1).toString() + ' - ' + items);
                                    });
                                        //Вывожу в консоль товары с помощью for...in
                                        for (let key in mainList.shopItems) {
                                            console.log('Наш магазин включает в себя: ' + mainList.shopItems[key]);
                                        }
                        
                
            }
    
}


function checkError(itemType) {
    for (let i = 0; i < 3; i++) {

                let itemType = prompt('Какой тип товаров будем продавать?', '');


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
//Вызываю все функции объекта   
//mainList.chooseGoods();
//mainList.calculateBudget();
//mainList.calculateDiscount();
//mainList.toAcceptEmployeers();
mainList.chooseShopItems();



//ну и выводим объект с данными в консоль для проверки выполнения
console.log(mainList);
