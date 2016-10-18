jQuery(document).ready(function( $ ) {

	//Set the default of verbose to be true for all uses of responsible height
	$.fn.responsibleHeight.defaults.verbose = true;

	//Initialise the plugin
	$('.testimonial').responsibleHeight({
		delay: 		200,
		child: 		'p',
		widths: 	[
			[1300, 10],
			[1000, 8],
			[700, 4],
			[40, 2],
			[0, 1]
		]
	});

	//Destroy the plugin, remove heights and stop working on resize
	$('.destroy').click(function(){
		$('.item').responsibleHeight('destroy')
	});

	//Reinitialise the plugin
	$('.reinit').click(function(){
		$('.item').responsibleHeight('reinit')
	});

});
	