function clock() {
let d = new Date(),
		hours = d.getHours(),
		minutes = d.getMinutes(),
		seconds = d.getSeconds(),	
		span = document.getElementsByTagName('span')[0];


if (hours < 10) {
	hours = "0" + hours;
}
if (minutes < 10) {
	minutes = "0" + minutes;
}
if (seconds < 10) {
	seconds = "0" + seconds;
}

let date_time = "Текущее время - " + hours + ":" + minutes + ":" + seconds;

 span.innerHTML = date_time;
 setTimeout("clock()", 1000);
}
clock();