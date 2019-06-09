/*
let start = +prompt('Введите начальное число', '');
let end = +prompt('Введите конечное число', '');



function getFriendlyNumbersv2(start, end) {
    let arr = [];//Объявил пустой массив
    let sum2 = 0;//Переменная для наращивания суммы
    //Проверка на число; Чтобы start не был больше end, проверка на целое число, и проверка на отрицательные числа
    if(isNaN(start) || isNaN(end) || (start > end) || !(start % 1 == 0) || !(end % 1 == 0) || start <= 0 || end <= 0) {
            console.log('false');
            } else if(start >=1 && end <= 100) {
              arr = [0];
            console.log('Массив пустой')
                 } else if(start >= 1 && end <= 300) {
                      arr.push(start, end);
                     while(start < end){
                        sum2 += start;
                        start++;
                        }
                    } else if(start >=284 && end <= 500) {
                        arr = [0];
                        console.log('Массив пустой');
                        }

    console.log(arr);
    alert(sum2); 
}  


getFriendlyNumbersv2(start, end);

*/
alert(getFriendlyNumbers(220, 284));

function getFriendlyNumbers(start, end) {
	let arr = [];
	if(start > end){
		return false;
		} else {
			return getDivisorsSum(start) == end && getDivisorsSum(end) == start;
            return arr;
        }
    
}

function getDivisorsSum(num) {
	return getSum(getDivisors(num));
}

//Находим делители числа
function getDivisors(num) {
	let arr = [];
	for (let i = 1; i < num; i++) {

		if(num % i == 0) {
			arr.push(i);
		}
	}
		return arr;
}


//Находим сумму делителей
function getSum(arr) {
	let sum = 0;
	for(i = 0; i < arr.length; i++) {
		sum +=arr[i];
	}
	return sum;
}

/*
module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}*/