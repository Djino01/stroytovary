if ($(window).width() <= '1290') {
	var swiperHome = $('.leaders-sells__row');
	swiperHome.each(function () {
		var mySwiper = new Swiper(this, {
			slidesPerView: 3,
			spaceBetween: 0,
			slidesPerGroup: 1,
			loop: true,
			speed: 1000,
			iOSEdgeSwipeDetection: true,
			initialSlide: 0,
			breakpoints: {
				100: {
					slidesPerView: 1.2,
					slidesPerGroup: 1,
					spaceBetween: 10,
				},
				600: {
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 0,
				},
				760: {
					slidesPerView: 2.4,
					slidesPerGroup: 1,
					spaceBetween: 0,
				},
				1010: {
					slidesPerView: 3,
					slidesPerGroup: 1,
					spaceBetween: 0,
				}
			}
		});
	});
}