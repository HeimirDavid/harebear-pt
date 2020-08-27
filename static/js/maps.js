function initMap() {
  $(document).ready(function () {
    let map;
    var latitude = new Array();
    var longitude = new Array();
    var maps = new Array();

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
    }
  });
}
