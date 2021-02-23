var swiperHome = $('.popular__slick');
swiperHome.each(function () {
	var mySwiper = new Swiper(this, {
		slidesPerView: 4,
		spaceBetween: 20,
		slidesPerGroup: 1,
		loop: true,
		speed: 1000,
		iOSEdgeSwipeDetection: true,
		initialSlide: 0,
		navigation: {
			nextEl: '.popular .arrow.arrow_next',
			prevEl: '.popular .arrow.arrow_prev',
		},
		breakpoints: {
			100: {
				slidesPerView: 1.2,
				slidesPerGroup: 1,
				spaceBetween: 10,
				initialSlide: 0,
			},
			600: {
				slidesPerView: 2,
				slidesPerGroup: 1,
				spaceBetween: 10,
				initialSlide: 0,
			},
			760: {
				slidesPerView: 2.4,
				slidesPerGroup: 1,
				initialSlide: 0,
				spaceBetween: 20,
			},
			1010: {
				slidesPerView: 3,
				slidesPerGroup: 1,
				initialSlide: 0,
				spaceBetween: 20,
			},
			1290: {
				slidesPerView: 4,
				slidesPerGroup: 1,
				initialSlide: 0,
				spaceBetween: 20,
			}
		}
	});
});