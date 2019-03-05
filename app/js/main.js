jQuery(document).ready(function($){
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		spaceBetween: 30,
		breakpoints: {
			991: {
				slidesPerView: 1,				
				spaceBetween: 15,
				width: 307
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 10,
				width: 220
			},
			
		}	
	});
	
	$('.fancybox').fancybox();

});