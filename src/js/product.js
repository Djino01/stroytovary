$(".product__item--js").on("click", function (e) {
	e.preventDefault();
	$(this).toggleClass("active");
});