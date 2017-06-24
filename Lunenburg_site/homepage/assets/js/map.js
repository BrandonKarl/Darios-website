function initMap() {
	var options = {
		scrollwheel: false,
		zoom: 15,
		center: {
			lat: 42.592633,
			lng: -71.7581613
		}
	};

	var map = new google.maps.Map(document.getElementById('map'), options);

	var marker = new google.maps.Marker({
		position: {
			lat: 42.592633,
			lng: -71.7581613
		},
		map: map
	});
}