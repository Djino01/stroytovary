$('[data-product]').on('click', function (e) {
	e.preventDefault();
	$('.page-product__tab').removeClass('active');
	$('.page-product__block').removeClass('active');
	$(this).addClass('active');
	var product = $(this).data('product');
	$('[data-product-block="' + product + '"]').toggleClass('active');
});