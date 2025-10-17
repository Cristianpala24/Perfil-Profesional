function initMap() {
  const apiKey = 'AIzaSyAPjU-sQS8UFw4VDw74odUb3iGhkJORXWg'; // Mi API Key
  const address = 'Medellín, Antioquia, Colombia';

  $.getJSON(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`, function (data) {
    if (data.status === 'OK') {
      const location = data.results[0].geometry.location;

      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location,
        scrollwheel: false,
        styles: [
          { featureType: "administrative.land_parcel", elementType: "all", stylers: [{ visibility: "on" }] },
          { featureType: "landscape.man_made", elementType: "all", stylers: [{ visibility: "on" }] },
          { featureType: "poi", elementType: "labels", stylers: [{ visibility: "on" }] },
          { featureType: "road", elementType: "labels", stylers: [{ visibility: "simplified" }, { lightness: 20 }] },
          { featureType: "road.highway", elementType: "geometry", stylers: [{ hue: "#000000ff" }] },
          { featureType: "road.highway", elementType: "labels", stylers: [{ visibility: "simplified" }] },
          { featureType: "road.arterial", elementType: "geometry", stylers: [{ hue: "#000000ff" }] },
          { featureType: "road.arterial", elementType: "labels", stylers: [{ visibility: "off" }] },
          { featureType: "road.local", elementType: "geometry", stylers: [{ visibility: "simplified" }] },
          { featureType: "road.local", elementType: "labels", stylers: [{ visibility: "simplified" }] },
          { featureType: "transit", elementType: "all", stylers: [{ visibility: "on" }] },
          { featureType: "water", elementType: "all", stylers: [{ hue: "#a1cdfc" }, { saturation: 30 }, { lightness: 49 }] }
        ]
      });

      new google.maps.Marker({
        position: location,
        map: map,
        icon: 'images/loc.png',
        title: 'Medellín, Antioquia'
      });
    } else {
      console.error(`Error geocoding "${address}":`, data.status);
    }
  });
}

window.addEventListener('load', initMap);