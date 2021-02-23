$('.promo__slick').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	infinite: false,
	speed: 1000,
});
$('.promo .arrow.arrow_prev').on("click", function (event) {
	$(this).parents('.promo').find('.promo__slick').slick('slickPrev');
});
$('.promo .arrow.arrow_next').on("click", function (event) {
	$(this).parents('.promo').find('.promo__slick').slick('slickNext');
});

$('.promo__left-slick').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	infinite: false,
	speed: 1000,
});

if ($(window).width() <= '1010') {
	var swiperHome = $('.promo__mobile-slick');
	swiperHome.each(function () {
		var mySwiper = new Swiper(this, {
			slidesPerView: 2,
			spaceBetween: 10,
			slidesPerGroup: 1,
			loop: true,
			speed: 1000,
			iOSEdgeSwipeDetection: true,
			initialSlide: 0,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				},
			},
			breakpoints: {
				100: {
					slidesPerView: 1.2,
					slidesPerGroup: 1,
				},
				600: {
					slidesPerView: 2,
					slidesPerGroup: 1,
				},
				760: {
					slidesPerView: 2,
					slidesPerGroup: 1,
				}
			}
		});
	});
}