jQuery(document).ready(function($){
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
			spaceBetween: 30,
			breakpoints: {
				
				409: {
					slidesPerView: 1,
					spaceBetween: 0,
					width: 250
				},
				991: {
					slidesPerView: 2,				
					spaceBetween: 15,
					width: 307,
				}
			}	
	});
	
	$('.fancybox').fancybox();

});