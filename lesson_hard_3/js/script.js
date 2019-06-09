
let str = 'урок-3-был слишком легким';

//Пересоздал строку, применив метод toUpperCase к первому символу строки
//и произвел конкатенацию со вторым и последующими эл-ми строки с помощью метода slice	
let newStr = str[0].toUpperCase() + str.slice(1);
	alert(newStr);

//Меняю все дефисы, которые находит метод в строке на пробелы
	alert(newStr.replace(/-/g, ' '));	
let legko = str.replace('урок-3-был слишком ', '');
	newStrThree = legko.replace('им', 'о'); //Меняю "им" на "о"
	alert(newStrThree);


//Пункт 4
/*
let arr = [20, 33, 1, "Человек", 2, 3]; 
let	summCub = 0;

for(let i = 0; i < arr.length; i++) {
	if(typeof arr[i] === 'string') { //добавил проверку на строку
		arr.splice(arr[i], 1);  //удаляю елемент с типом строка 
			let	arrOne = Math.pow(arr[i], 3);//далее спокойно считаю без удаленного эл-та
			summCub += arrOne;
	} else { //иначе, если строковых элементов нет, то просто считаем дальше
		let	arrOne = Math.pow(arr[i], 3);
		summCub += arrOne;	
	}
}

let sqrtNum = Math.sqrt(summCub);
alert('Округлил до: ' + Math.round((sqrtNum)));
*/

//Пункт 5 усложненного Д/З
/*
function checkString(check) {
	for(i = 0; i < 1; i++) {
	check = prompt('Введите строку!');

	if(!isNaN(check)) {
		i--;
		alert('Передана не строка!');
		} else if(check.length > 50){
			let delSpace = check.trim();
			let fifthSymb = delSpace.substr(0,50);	
				alert(fifthSymb + '...');
			} else { //Если введённая строка меньше 50 символом, то все равно удаляем пробелы и выводим результат
					let delSpaceTwo = check.trim();
					alert(delSpaceTwo);
			} 
	}
} 

checkString();

*/