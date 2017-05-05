console.log('Hello world!');

var menuHeight = null;

$(document).ready(function() {
	console.log('ready');
	menuHeight = $ ('menu').height();
	console.log(menuHeight);
});

$(window).resize(function() {
	console.log('resize');
});

$(window).scroll(function() {
	console.log('scroll');
});

