/*
nextPrime:
  for (let i = 2; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    console.log(i + ' Делители этого числа 1 и ' + i);
  }

*/


for (let i = 2;  i <= 100; i++) {

  let count = 0; //объявляю счетчик
  for (let j = 2; j < i; j++) {
  	//если без остатка, то плюсуем счетчик, если делится с остатком,
  	//то континью, пропускаем запись в счетчик, таким образом,
  	//проверяется деление только на само себя и на 1
  	//поэтому если число простое, то счетчик будет равен 2 и запишется
  	//если счетчик накопит больше двух делений без остатка, значит число не простое,
  	//и просто не запишется.
    if (i % j) {
    	continue;
    }
    count += 1;
  
  }
  if (!count) document.write(i + ' - делители этого числа 1 и ' + i + '<br>');
}
