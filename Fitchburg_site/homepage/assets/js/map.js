function initMap() {
	var options = {
		scrollwheel: false,
		zoom: 15,
		center: {
			lat: 42.5850809,
			lng: -71.8147525
		}
	};

	var map = new google.maps.Map(document.getElementById('map'), options);

	var marker = new google.maps.Marker({
		position: {
			lat: 42.5850809,
			lng: -71.8147525
		},
		map: map,
		icon: '<i></i>'
	});

	var infoWindow = new google.maps.InfoWindow({
		content: '<div style="height: 50px;"><img style="max-width:100%; max-height:100%; padding-left: 25px;" src="http://i.imgur.com/S0hdg9O.png"></div>'
	});

	infoWindow.open(map, marker);
}
