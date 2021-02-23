$('.comparison__link').on("click",function (event) {
	event.preventDefault();
	$(this).toggleClass("active");
	var items = $(this).parent().find(".comparison__items");
	items.toggleClass('active');
	if (items.hasClass('compact')) {
		items.css('height', $('.comparison__items')[0].scrollHeight + 'px').removeClass('compact');
	} else if ((!items.hasClass('compact')) && (items.attr('style') == '')) {
		items.css('height', items[0].scrollHeight + 'px');
		setTimeout(function () {
			items.css('height', '').addClass('compact');
		}, 10);
	} else {
		items.css('height', '');
		items.addClass('compact');
	}
});

$(".comparison__closed").on("click", function (event) {
	$(this).parent().parent().parent().parent().fadeOut(500);
});