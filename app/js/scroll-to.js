;(function($) {
	// Scroll to element
	const scrollBtn = $('[data-scroll]');
	const classBtn 	= $('[id]');
	
	// page scroling function 
	function onScroll(e) {

		e.preventDefault();
		
		let target 	= $(this).attr('data-scroll');
		let dist	= $(target).offset().top;

		$('html, body').animate({scrollTop: dist}, 1000, 'swing');

		// navbar item activating 
		for (let index = 0; index < classBtn.length; index++) {

			$('.nav-link').removeClass('active') 

			if (classBtn[index] = target){
				$(this).addClass('active')			
			}
			
		};

	}

	scrollBtn.on('click', onScroll);

})(jQuery);