let map;



function initMap() {
    var myStyles = [
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "off"
      }
    ]
  },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "visibility": "off"
      }
    ]
  },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
      }
    ]
  },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "visibility": "off"
      }
    ]
  }
]
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: -31.950,
            lng: 115.854
        },
        zoom: 13,
        styles: myStyles
    });
    const marker = new google.maps.Marker({
        // The below line is equivalent to writing:
        // position: new google.maps.LatLng(-34.397, 150.644)
        position: {
            lat: -31.9519187,
            lng: 115.8553528
        },
        icon: "img/beer_ico.png",

        map: map,
    });
    // You can use a LatLng literal in place of a google.maps.LatLng object when
    // creating the Marker object. Once the Marker object is instantiated, its
    // position will be available as a google.maps.LatLng object. In this case,
    // we retrieve the marker's position using the
    // google.maps.LatLng.getPosition() method.
    const infowindow = new google.maps.InfoWindow({
        content: '<b>Another Beer place</b><tbody><tr><td style="text-align: right">Uniqueness</td><td style="text-align: center">66%</td></tr><tr><td style="text-align: right">Taps</td><td style="text-align: center; column-width: 80px">3</td></tr> <tr><td style="text-align: right">Pint Price</td><td style="text-align: center">💲</td></tr><tr><td style="text-align: right">Atmosphere</td><td  style="text-align: center">🥱</td></tr></tbody></table>',
    });

    google.maps.event.addListener(marker, "click", () => {
        infowindow.open(map, marker);
    });
    const markera = new google.maps.Marker({
        // The below line is equivalent to writing:
        // position: new google.maps.LatLng(-34.397, 150.644)
        position: {
            lat: -31.9480893,
            lng: 115.8575866
        },
        icon: "img/beer_ico.png",
        map: map,
    });
    // You can use a LatLng literal in place of a google.maps.LatLng object when
    // creating the Marker object. Once the Marker object is instantiated, its
    // position will be available as a google.maps.LatLng object. In this case,
    // we retrieve the marker's position using the
    // google.maps.LatLng.getPosition() method.
    const infowindowa = new google.maps.InfoWindow({
        content: '<b>Some Beer place</b><tbody><tr><td style="text-align: right">Uniqueness</td><td style="text-align: center">20%</td></tr><tr><td style="text-align: right">Taps</td><td style="text-align: center; column-width: 80px">5</td></tr> <tr><td style="text-align: right">Pint Price</td><td style="text-align: center">💲💲</td></tr><tr><td style="text-align: right">Atmosphere</td><td  style="text-align: center">😀</td></tr></tbody></table>',
    });

    google.maps.event.addListener(markera, "click", () => {
        infowindowa.open(map, markera);
    });
}
