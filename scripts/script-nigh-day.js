function changetheme() {
	const buttonChangeTheme = $('#darktheme')
	document.documentElement.style.display = 'none';

	if (buttonChangeTheme.hasClass('change')) {
		document.head.insertAdjacentHTML(
		'beforeend',
		'<link rel="stylesheet" href="styles/style-night.css" onload="document.documentElement.style.display=\'\'">'
		);
		buttonChangeTheme.removeClass('change');
	} else {
		document.head.insertAdjacentHTML(
		'beforeend',
		'<link rel="stylesheet" href="styles/style.css" onload="document.documentElement.style.display=\'\'">'
		);
		buttonChangeTheme.addClass('change');
	};
};