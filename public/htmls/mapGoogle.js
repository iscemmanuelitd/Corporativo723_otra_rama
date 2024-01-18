// Initialize and add the map
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
/*    Autocomplete.
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