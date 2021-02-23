// Custom Select
$('.select').on("click", function(event) {
	if(!$(this).hasClass('disabled')){
		$('.select').not(this).removeClass('active').find('.select-options').slideUp(300);
		$(this).toggleClass('active');
		$(this).find('.select-options').slideToggle(300);
	}
});
$('.select-options__value').click(function() {
	$(this).parents('.select').find('.select-title__value').html($(this).html());
	if($.trim($(this).data('value'))!=''){
		$(this).parents('.select').find('input').val($(this).data('value'));
	}else{
		$(this).parents('.select').find('input').val($(this).html());
	}
});
$(document).on("click", function(e) {
	if (!$(e.target).is(".select *")) {
		$('.select').removeClass('active');
		$('.select-options').slideUp(300);
	};
});