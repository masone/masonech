//= require "supersized.js"

jQuery(function($){
	$.supersized({
		slides:  [ { image : 'images/chris.jpg' } ],
		autoplay: false,
		keyboard_nav: false,
		slideshow: false,
		fit_portrait: true,
		fit_landscape: false
	});
	$supersized = $('#supersized');
	$main = $('.main .part');

	$('#logo').mouseover(function(){
		$supersized.fadeIn(200);
		$main.fadeOut(150);
	});

	$('#logo').mouseout(function(){
		$supersized.fadeOut(200);
		$main.fadeIn(150);
	});	
	
});