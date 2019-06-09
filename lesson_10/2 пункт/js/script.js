//Создал класс Options
class Options {

	//Перечислил свойства	
	constructor(height, width, bg, fontSize, textAlign, paddingTop) {
		this.height = height; 
		this.width = width; 
		this.paddingTop = paddingTop
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	};

	//Создал метод, добавляющий div на страницу и приминающий к нему стили
	// из переданных параметров в созданном ниже новом объекте класса
	createDiv() {
		div = document.createElement('div');
		div.textContent = `Пишу любой текст, какой то там, на всякий случай`;
		document.body.appendChild(div);
		div.style.cssText = `height: ${this.height}px;\ 
		width: ${this.width}px; \
		padding-top: ${this.paddingTop}px; \ 
		background-color: ${this.bg}; \ 
		font-size: ${this.fontSize}px; \
		text-align: ${this.textAlign};`;
	};

};
//Создаю новый экземпляр класса Options
let div = new Options(150, 250, 'lightgreen', 18, 'center', 80);
//Вызываю метод создания div из экземпляра класса Options
div.createDiv();