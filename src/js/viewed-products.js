var swiperHome = $('.viewed-products__slick');
swiperHome.each(function () {
	var mySwiper = new Swiper(this, {
		slidesPerView: 5,
		spaceBetween: 0,
		slidesPerGroup: 1,
		loop: true,
		speed: 1000,
		iOSEdgeSwipeDetection: true,
		initialSlide: 0,
		navigation: {
			nextEl: '.viewed-products .arrow.arrow_next',
			prevEl: '.viewed-products .arrow.arrow_prev',
		},
		breakpoints: {
			100: {
				slidesPerView: 1.2,
				slidesPerGroup: 1,
				spaceBetween: 10,
			},
			600: {
				slidesPerView: 2,
				slidesPerGroup: 1,
				spaceBetween: 10,
			},
			760: {
				slidesPerView: 2.4,
				spaceBetween: 0,
				slidesPerGroup: 1,
			},
			1010: {
				slidesPerView: 3,
				slidesPerGroup: 1,
			},
			1290: {
				slidesPerView: 4,
				slidesPerGroup: 1,
			},
			1580: {
				slidesPerView: 5,
				slidesPerGroup: 1,
		spaceBetween: 0,
			}
		}
	});
});