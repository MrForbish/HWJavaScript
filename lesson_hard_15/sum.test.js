const sum = require('./test/test');
const num = require('./test/test');
const arr = require('./test/test');
const arra = require('./test/test');
const myFunc = require('./test/test');
const each = require('./test/test');


test('Возвращает ли ф-ция sum true?', () => {
  expect(sum()).toEqual(false);
});


test('Равна ли num 5?', () => {
   expect(num).toBe(5);
});

test('Функция each возвращает [8,7,6,5,4]', () => {
  expect(obj.each(obj.arr, obj.myFunc)).toEqual([8,7,6,5,4]);
});

test('Соответствует ли длина?', () => {
  expect(obj.each(obj.arr, obj.myFunc)).toHaveLength(3);
});



/*
expect('abc').toHaveLength(3);
test('adds 1 + 2 to equal 3', () => {
  expect(sum()).toEqual(true);
});
const each = require('./test/test');
test('Функция each возвращает [8,7,6,5,4]', () => {
  expect(obj.each(obj.arr, obj.myFunc)).toEqual([8,7,6,5,4]);
});
*/
/*
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
});*/