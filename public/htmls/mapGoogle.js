// Initialize and add the map3.
/*  
let map;
let marker;
let geocoder;
async function initMap() {

  let url = window.location.href
  let coord = url.split("?")[1].split(",")
  const position = { lat: parseFloat(coord[0]), lng: parseFloat(coord[1]) }
  console.log(position)
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "DEMO_MAP_ID",
  });
  marker = new google.maps.Marker({
    map: map,
    position: position,
    title: "Ubicacion casa del cliente",
  });

  geocoder = new google.maps.Geocoder();

  map.addListener("click", (e) => {
    console.log({ location: e.latLng });
  });

*/

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">


let map;
let marker;
let geocoder;

async function initMap() {
  let url = window.location.href
  let coord = url.split("?")[1].split(",")
  const position = { lat: parseFloat(coord[0]), lng: parseFloat(coord[1]) }
  console.log(position)

  const map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 13,
    mapTypeControl: true,
    mapId: "DEMO_MAP_ID"
  });
  marker = new google.maps.Marker({
    map: map,
    position: position,
    title: "Ubicacion casa del cliente",
  });

  geocoder = new google.maps.Geocoder();

  geocoder.

  map.addListener("click", (e) => {
    console.log($((e)[0].latLng.lat))
    //console.log(e)
    coord = {lat: e.fi.x, lng:e.fi.y*-1}
   map.setCenter(coord)
    marker.setPosition(coord);
    marker.setVisible(true);
  });

  const card = document.getElementById("pac-card");
  const input = document.getElementById("pac-input");
  const options = {
    fields: ["formatted_address", "geometry", "name"],
    strictBounds: false,
  };

  map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(card);
  

  const autocomplete = new google.maps.places.Autocomplete(input, options);

  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo("bounds", map);
  let ll = "@24.0278399,-104.6569317,12.96z"
  let hl = "es"
  let gl = "mx"
  let engine = "google_maps_autocomplete"
/*
  https://serpapi.com/search.json?engine=google_maps_autocomplete&q=Hacienda+Santoral+109&ll=@22.7455096,-102.0083012,15.1z&type=search&api_key=8a0557b9a16966ff2298be110a98a7d0922392515188f37f2e73e4d085a56957


  https://serpapi.com/search.json?engine=google_maps&q=Las+Adelitas+206,+Emiliano&type=address&api_key=8a0557b9a16966ff2298be110a98a7d0922392515188f37f2e73e4d085a56957

*/
  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("infowindow-content");

  infowindow.setContent(infowindowContent);

   autocomplete.addListener("place_changed", () => {
    infowindow.close();
    marker.setVisible(false);

    const place = autocomplete.getPlace();

    if (!place.geometry || !place.geometry.location) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(15);
    }

    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
    infowindowContent.children["place-name"].textContent = place.name;
    infowindowContent.children["place-address"].textContent =
      place.formatted_address;
    infowindow.open(map, marker);
  });

  // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.
  
}

window.initMap = initMap;