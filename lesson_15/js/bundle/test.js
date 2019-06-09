describe("Timer", function() {
	it("Возвращает ли ф-ция объект?", function() {
		assert.typeOf(getTimeRemaining(), 'object')
	});

	describe("Общая сумма", function() {
		it("Изначально равен нулю", function() {
			assert.equal(total, 0)
		})
	})
});

