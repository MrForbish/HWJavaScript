function sum(a, b) {
	return a + b > 10;
}
sum(2,2)


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

let assert = require('chai').assert

describe("Пункт 1", function() {
	it("Возвращает ли ф-ция sum true?", function() {
		assert.equal(sum(), "true")
	})
});

describe("Пункт 2", function() {
	it("Равна ли num 5?", function() {
		assert.equal(num, 5)
	})
});

describe("Пункт 3", function() {
	it("Соответствут ли результат?", function() {
		 assert.typeOf(each(arr, myFunc), 'array')
	})
});


describe("Пункт 4", function() {
	it("Соответствут ли результат?", function() {
		 assert.deepEqual(each(arr, myFunc), [ 8, 7, 6, 5, 4 ])
	})
});

describe("Пункт 4", function() {
	it("Соответствут ли результат?", function() {
		 assert.lengthOf(each(arr, myFunc), 5)
	})
});


