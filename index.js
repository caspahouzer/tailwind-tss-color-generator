(function constructor() {
	'use strict';

	const helpers = require('./lib/helpers');
	const defaultConfigTheme = require('tailwindcss/stubs/defaultConfig.stub').theme;

	let convertedStyles = '// Tailwind for Titanium\n// Converted by César Estrada\n';

	// Colors
	convertedStyles += helpers.colors(defaultConfigTheme.colors);

	// Font Sizes
	convertedStyles += helpers.fontSize(defaultConfigTheme.fontSize);

	// Border Radius
	convertedStyles += helpers.borderRadius(defaultConfigTheme.borderRadius);

	// Border Width
	convertedStyles += helpers.borderWidth(defaultConfigTheme.borderWidth);

	// Opacity
	convertedStyles += helpers.opacity(defaultConfigTheme.opacity);

	saveFile(convertedStyles);
}());

function saveFile(data) {
	const fs = require('fs');

	fs.writeFileSync('app.tss', data, err => {
		throw err;
	});

	console.log('"app.tss" file created!');
}
