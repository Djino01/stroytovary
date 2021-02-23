$('[data-ordering]').on('click', function (e) {
	e.preventDefault();
	$('.ordering__tab').removeClass('active');
	$('.ordering__body-block').removeClass('active');
	$(this).addClass('active');
	var ordering = $(this).data('ordering');
	$('[data-ordering-block="' + ordering + '"]').toggleClass('active');
});

$('.ordering-dates__box').on('click', function (event) {
	event.preventDefault();
	$(".ordering-dates__box").removeClass("active");
	$(this).toggleClass("active");
});