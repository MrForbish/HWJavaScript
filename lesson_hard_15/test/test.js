function sum(a, b) {
	return a + b > 10;
}
sum(2,2);

let arra = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arra[1][1];


var each = function(startArr, f){return f(startArr)};
var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));
module.exports = sum;
module.exports = num;
module.exports = each;




