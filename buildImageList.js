'use strict'; //eslint-disable-line

const fs = require('fs');

// Read src directory for list of logo names
const headshotNames = fs.readdirSync('src').filter((file) => {

	// File is an SVG
	return file.endsWith(".png");

}).map((file) => {
	// Removes .svg extension
	return file.slice(0, -4);
});

function listImages() {
	const headshots = headshotNames.map((file) => {
		return { name: file };
	});

	// Write the list of logos found in /svg to the data.json file.
	fs.writeFileSync('imageList.json', JSON.stringify({ images: headshots }, null, '\t'), { encoding: 'utf-8' });
}

listImages();
