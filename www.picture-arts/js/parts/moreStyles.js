function moreStyles() {
	let moreStyles = document.getElementsByClassName('button-styles')[0],
	styles = document.getElementsByClassName('@media (max-width: 1199px) and (min-width: 992px) hidden-md')[0];


	moreStyles.addEventListener('click', () => {
		styles.style.display = 'block';
	});
}

module.exports = moreStyles;