function initMap() {
  $(document).ready(function () {
    let map;
    var latitude = new Array();
    var longitude = new Array();
    var maps = new Array();

    // Styles for the google maps, from snazzy maps. Theme assassin's Creed, by Sarah Frisk
    var styledMapType = new google.maps.StyledMapType([
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36,
          },
          {
            color: "#000000",
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
      {
        featureType: "administrative.province",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#e3b141",
          },
        ],
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#e0a64b",
          },
        ],
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#0e0d0a",
          },
        ],
      },
      {
        featureType: "administrative.neighborhood",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#d1b995",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#12120f",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            lightness: "-77",
          },
          {
            gamma: "4.48",
          },
          {
            saturation: "24",
          },
          {
            weight: "0.65",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#f6b044",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#4f4e49",
          },
          {
            weight: "0.36",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#c4ac87",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#262307",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#a4875a",
          },
          {
            lightness: 16,
          },
          {
            weight: "0.16",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#deb483",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#0f252e",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#080808",
          },
          {
            gamma: "3.14",
          },
          {
            weight: "1.07",
          },
        ],
      },
    ]);

    //Get the latitude and the longtitude for from each input and push it into the arrays
    $("input:hidden[class='lon']").each(function () {
      var valueStr = $(this).val();
      var valueFloat = parseFloat(valueStr);
      longitude.push(valueFloat);
    });
    $("input:hidden[class='lat']").each(function () {
      var valueStr = $(this).val();
      var valueFloat = parseFloat(valueStr);
      latitude.push(valueFloat);
    });

    //get all the maps and sort them in an array based on their ID
    $(".map").each(function () {
      mapID = $(this).attr("id");
      maps.push(mapID);
    });

    for (i = 0; i < maps.length; i++) {
      position = { lat: latitude[i], lng: longitude[i] };
      map = new google.maps.Map(document.getElementById(maps[i]), {
        center: position,
        zoom: 12,
      });
      var marker = new google.maps.Marker({ position: position, map: map });
      map.mapTypes.set(maps[i], styledMapType);
      map.setMapTypeId(maps[i]);
    }
  });
}
