if ($(".sidebar__top").length > 0){
	$('.sidebar__top').click(function(){
		$(this).parent().toggleClass('active');
		if( $(this).parent().hasClass('active')) {
			$(this).next().slideDown();
		} else {
			$('.sidebar__block').slideUp();
			$(".sidebar__box").removeClass("active");
		}
	});
	$(function ($) {
		$(document).mouseup(function (e) {
		var div = $(".sidebar__box.active");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.removeClass("active");
			}
		});
	});
	$(function ($) {
		$(document).mouseup(function (e) {
			var div = $(".sidebar__block");
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.slideUp();
			}
		});
	});
}

if ($(".sidebar__item-top").length > 0){
	$('.sidebar__item-top').click(function(){
		$(this).parent().toggleClass('active');
		if( $(this).parent().hasClass('active')) {
			$(this).next().slideDown();
		} else {
			$('.sidebar__item-block').slideUp();
			$(".sidebar__item").removeClass("active");
		}
	});
	$(function ($) {
		$(document).mouseup(function (e) {
		var div = $(".sidebar__item.active");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.removeClass("active");
			}
		});
	});
	$(function ($) {
		$(document).mouseup(function (e) {
			var div = $(".sidebar__item-block");
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.slideUp();
			}
		});
	});
}