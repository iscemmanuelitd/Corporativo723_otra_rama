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


const card = document.getElementById("pac-card");
const input = document.getElementById("pac-input");
const biasInputElement = document.getElementById("use-location-bias");
const strictBoundsInputElement = true
const options = {
  fields: ["formatted_address", "geometry", "name"],
  strictBounds: true,
};

map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);

const autocomplete = new google.maps.places.Autocomplete(
  input,
  options
);

// Bind the map's bounds (viewport) property to the autocomplete object,
// so that the autocomplete requests use the current map bounds for the
// bounds option in the request.
autocomplete.bindTo("bounds", map);

const infowindow = new google.maps.InfoWindow();
const infowindowContent = document.getElementById("infowindow-content");

infowindow.setContent(infowindowContent);

}

window.initMap = initMap

//   AIzaSyByZpNSgqlZaDWxmzKa0ybOeUNzbM1bP5g

// Sets a listener on a radio button to change the filter type on Places
  Autocomplete.
function setupClickListener(id, types) {
  const radioButton = document.getElementById(id);

  radioButton.addEventListener("click", () => {
    autocomplete.setTypes(types);
    input.value = "";
  });
}

setupClickListener("changetype-all", []);
setupClickListener("changetype-address", ["address"]);
setupClickListener("changetype-establishment", ["establishment"]);
setupClickListener("changetype-geocode", ["geocode"]);
setupClickListener("changetype-cities", ["(cities)"]);
setupClickListener("changetype-regions", ["(regions)"]);
biasInputElement.addEventListener("change", () => {
  autocomplete.bindTo("bounds", map);
  input.value = "";
});
strictBoundsInputElement.addEventListener("change", () => {
  autocomplete.setOptions({
    strictBounds: true,
  });

  input.value = "";
});
*/


// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initMap() {
  let url = window.location.href
  let coord = url.split("?")[1].split(",")
  const position = { lat: parseFloat(coord[0]), lng: parseFloat(coord[1]) }
  console.log(position)

  const map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 13,
    mapTypeControl: false,
  });
  const card = document.getElementById("pac-card");
  const input = document.getElementById("pac-input");
  const biasInputElement = document.getElementById("use-location-bias");
  const strictBoundsInputElement = document.getElementById("use-strict-bounds");
  const options = {
    fields: ["formatted_address", "geometry", "name"],
    strictBounds: false,
  };

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);

  const autocomplete = new google.maps.places.Autocomplete(input, options);

  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo("bounds", map);

  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("infowindow-content");

  infowindow.setContent(infowindowContent);

  const marker = new google.maps.Marker({
    map,
    anchorPoint: new google.maps.Point(0, -29),
  });

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
      map.setZoom(17);
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
  function setupClickListener(id, types) {
    const radioButton = document.getElementById(id);

    radioButton.addEventListener("click", () => {
      autocomplete.setTypes(types);
      input.value = "";
    });
  }

  setupClickListener("changetype-all", []);
  setupClickListener("changetype-address", ["address"]);
  setupClickListener("changetype-establishment", ["establishment"]);
  setupClickListener("changetype-geocode", ["geocode"]);
  setupClickListener("changetype-cities", ["(cities)"]);
  setupClickListener("changetype-regions", ["(regions)"]);
  biasInputElement.addEventListener("change", () => {
    if (biasInputElement.checked) {
      autocomplete.bindTo("bounds", map);
    } else {
      // User wants to turn off location bias, so three things need to happen:
      // 1. Unbind from map
      // 2. Reset the bounds to whole world
      // 3. Uncheck the strict bounds checkbox UI (which also disables strict bounds)
      autocomplete.unbind("bounds");
      autocomplete.setBounds({ east: 180, west: -180, north: 90, south: -90 });
      strictBoundsInputElement.checked = biasInputElement.checked;
    }

    input.value = "";
  });
  strictBoundsInputElement.addEventListener("change", () => {
    autocomplete.setOptions({
      strictBounds: strictBoundsInputElement.checked,
    });
    if (strictBoundsInputElement.checked) {
      biasInputElement.checked = strictBoundsInputElement.checked;
      autocomplete.bindTo("bounds", map);
    }

    input.value = "";
  });
}

window.initMap = initMap;