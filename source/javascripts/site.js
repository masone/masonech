//= require "supersized.js"

jQuery(function($){
	$.supersized({
		slides:  [ { image : 'images/chris.jpg' } ],
		autoplay: false,
		keyboard_nav: false,
		slideshow: false,
		vertical_center: false
	});
	$supersized_img = $('#supersized img');
	$supersized_img.hide();
	$main = $('.main .part');
	$main_height = 

	$('#logo').mouseover(function(){
		$supersized_img.fadeIn(200);
		$main.fadeOut(150);
	});
	
	$('#logo').mouseout(function(){
		$supersized_img.fadeOut(200);
		$main.fadeIn(150);
	});	
	
});