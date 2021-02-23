// Main menu open
if ($(".header__mobile-burger").length > 0) {
	$(".header__mobile-burger").click(function(){
		$(".header").toggleClass("header_mobile");
		$(this).toggleClass("active");
		$("body").toggleClass("lock");
		$(".header__content").toggleClass("active");
	});
}

$(".menu__dots").on("click", function (event) {
	event.preventDefault();
	$(this).toggleClass("active");
	$(".menu__hidden").toggleClass("active");
});

$(function ($) {
	$(document).mouseup(function (e) {
	var div = $(".menu__hidden.active");
	if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.removeClass("active");
			$(".menu__dots").removeClass("active");
		}
	});
});

if ($(window).width() >= '1010') {
	$(".top__city-box").on("click", function (event) {
		event.preventDefault();
		$(".top__city-modal").toggleClass("active");
	});
	$(".top__city-modal-closed").on("click", function (event) {
		event.preventDefault();
		$(".top__city-modal").removeClass("active");
	});
}
if ($(window).width() <= '1010') {
	$(".top__city-box").on("click", function (event) {
		event.preventDefault();
		$(this).toggleClass("active");
		$(".top__city-modal").slideToggle(500);
	});
}
if ($(window).width() <= '1010') {
	$(".header__burger_mobile").on("click", function (event) {
		$(".top__catalog").slideToggle(500);
	});
	$(".top__catalog-caption").on("click", function (event) {
		$(this).toggleClass("active");
		$(".top__catalog-items").slideUp(500);
		$(this).next().slideToggle(500);
	});
	$(function ($) {
		$(document).on("mouseup", function (e) {
		var div = $(".header__burger, .top__catalog");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
				$(".top__catalog").slideUp(500);
				$(".header__burger").removeClass("active");
			}
		});
	});
}

$(function ($) {
	$(document).on("mouseup", function (e) {
	var div = $(".top__city-modal.active");
	if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.removeClass("active");
		}
	});
});