let budget = +prompt("Ваш бюджет на месяц?", 60000),
    shopName = prompt('Введите название магазина', 'Fruit Shopping'),
    
    mainList = {
        budget,
        shopName,
        shopGoods: [],
        employers: {},
        open: true
    };
    
for (i = 0; i < 3; i++) {
       itemType = prompt('Какой тип товаров будем продавать?', 'Вкусняшки ^_^'),
        mainList.shopGoods.push(itemType);
    };

alert('Ваши товары: ' + mainList.shopGoods);
alert('Ваш бюджет на 1 день составляет: ' + budget / 30);