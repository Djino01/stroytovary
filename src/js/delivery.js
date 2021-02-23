if ($("#delivery__map").length > 0) {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('delivery__map', {
				center: [55.804865, 37.579951],
				controls: ['zoomControl'],
				zoom: 16
			}, {
				searchControlProvider: 'yandex#search'
			}),

			myPlacemark = new ymaps.Placemark([55.804865, 37.579951], {
				hintContent: 'Москва,ул. Вятская, 49 С 1',
				balloonContent: ''
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/cursor.svg',
				iconImageSize: [47, 55],
				iconImageOffset: [-10, -30]
			});
		myMap.behaviors.disable('scrollZoom');
		myMap.geoObjects
			.add(myPlacemark);
	});
}

var min_width = 1010;
$(window).on('resize', function () {
	var new_width = $(window).width();
	var container = $('.delivery');
	if (new_width <= min_width) {
		$('.sidebar').insertAfter($('.delivery-article'));
	}
	if (new_width > min_width) {
		$('.sidebar').insertBefore($('.delivery__content'));
	}
}).trigger('resize');