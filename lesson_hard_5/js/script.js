//Вывод текущей даты и заодно добавление 0 перед днями и месяцами
//и часами и минутами и секуднами
let d = new Date();

function formatDate(date) {
	  function pad(date) {return date < 10 ? '0'+ date : date}
        return date.getFullYear()+'.'
        + pad(date.getMonth()+1)+'.'
        + pad(date.getDate())+ ' '
        + pad(date.getHours())+':'
        + pad(date.getMinutes())+':'
        + pad(date.getSeconds())

}
 
alert( formatDate(d) ); 

//Вывод текущего дня недели
let date = new Date(); //Создал объект даты(спасибо, Кэп :D)
//Создал объект в который передан один из множества возможных параметров - день недели,
//и указал ему свойство long, чтобы выводилась полное наименование дня недели
let obj = {
  weekday: 'long',
};

//Вызвал в алерте date к которому применил метод в котором указал язык форматирования и объект
//к которому оно применяется
alert( date.toLocaleString("ru", obj) );


//И функция(стрелочная правда) вычисления разницы между датами
//Получил необходимые элементы
let firstDate = document.getElementsByTagName('input')[0],
		secondDate = document.getElementsByTagName('input')[1],
    differenceDate = document.getElementsByTagName('input')[2],
    btn = document.getElementsByTagName('button')[0];

//По клику на кнопку берем дату из второго инпута и отнимает от нее первый импут
btn.addEventListener('click', () => {  
let date1 = new Date(firstDate.value);
let date2 = new Date(secondDate.value);

//Получение разницы в миллисекундах, плюс начитался про методы Math
//и решил возвращать асболютное значение по модулю
//(пользователи ведь такие растяпы бывают, вдруг перепутает поля ввода дат)
let timeDiff = Math.abs(date2.getTime() - date1.getTime());

//Привожу миллисекунды в дни(человеческий вид)
  differenceDate.value = Math.ceil(timeDiff / (1000 * 3600 * 24));
});
