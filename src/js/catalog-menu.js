$(".header__burger").on("click", function (event) {
	var scrollTop = $(document).scrollTop();
	$(this).toggleClass("active");
	$(".catalog-menu").toggleClass("active");
	$("body").toggleClass("dark-bg");
	if( $(this).hasClass('active')) {
		$('.header__burger').attr('data-top', scrollTop );
		$(document).scrollTop(0);
	} else {
		//$(document).scrollTop($('.header__burger').attr('data-top'));
	}
});

if ($(window).width() >= '1010') {
	$(function ($) {
		$(document).on("mouseup", function (e) {
		var div = $(".header__burger, .catalog-menu");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
				$(".catalog-menu").removeClass("active");
				$(".header__burger").removeClass("active");
				$("body").removeClass("dark-bg");
				//$(document).scrollTop($('.header__burger').attr('data-top'));
				//$('.header__burger').attr('data-top', scrollTop );
			}
		});
	});
}

$('[data-catalog]').on('mouseover', function (e) {
	e.preventDefault();
	$('.catalog-menu__left a').removeClass('active');
	$('.catalog-menu__subcategories').removeClass('active');
	$(this).addClass('active');
	var catalog = $(this).data('catalog');
	$('[data-catalog-block="' + catalog + '"]').toggleClass('active');
});