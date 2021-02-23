$(".subcategories__view-btn_string").on("click", function (event) {
	$(".subcategories__view-btn_cube").removeClass("active");
	$(this).addClass("active");
	$(".subcategories__coll").addClass("string");
});
$(".subcategories__view-btn_cube").on("click", function (event) {
	$(".subcategories__view-btn_string").removeClass("active");
	$(this).addClass("active");
	$(".subcategories__coll").removeClass("string");
});

var minWidthSubcategories = 1190;
$(window).on('resize', function () {
	var new_width = $(window).width();
	var container = $('.subcategories');
	if (new_width <= minWidthSubcategories) {
		$('.subcategories__coll').removeClass("string");
	}
}).trigger('resize');