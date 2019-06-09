console.log(typeof([] + false + null + true)); 



//Первый пункт усложненного задания

    let d = new Date();     //создал объект Даты
    let today;                //объявил переменную в которую буду получать текущий день недели

    let week = ['Понедельник','Вторник','Среда','Четверг',
                                'Пятница','Суббота','Воскресенье']; //массив с днями недели
        weekSat = 'Суббота';
        weekSun = 'Воскресенье';

    today = week[d.getDay()-1]; //считаем сегодняшний день недели
    console.log(today);
   

        
     for (let i = 0; i < week.length; i++) {
         
      switch (week[i]) {
          case weekSat:
              if(today == weekSat) {   
              document.write('<b>' + '<i>' + 'Сегодня: ' + week[i] + '</i>' + '</b>' + '<br>');
              } else {
                document.write('<b>' + week[i] + '</b>' + '<br>'); 
              };
              break;    
          case weekSun:
              if(week[d.getDay()+6] == weekSun) {
              document.write('<b>' + '<i>' + 'Сегодня: ' + week[i] + '</i>' + '</b>' + '<br>');
              } else {
                 document.write('<b>' + week[i] + '</b>' + '<br>'); 
              };
              break;
          case today:
               document.write('<i>' + 'Сегодня: ' + week[i] + '</i>' + '<br>');
              break;
          default:
                document.write(week[i] + '<br>');
                break;
               
      }
     }
    

//Второй пункт усложненного задания

/*
let arr = ['321', '354', '111', '1488', '777', '0942', '789'];  //сделяль массив
    
    //пробегаюсь по строковым эл-там массива
    for (let i = 0; i < arr.length; i++) {  
        
        // в условии сравниваю первое значение элемента массива с цифрами 3 и 7 соответственно
        // при выполнении обоих условий пишу в консоль результат
        if ((arr[i].charAt(0) == '3') || (arr[i].charAt(0) == '7')) {
                console.log(arr[i]);
            }
        }
        
