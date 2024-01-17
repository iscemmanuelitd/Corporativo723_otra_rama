// Initialize and add the map
let map;
let marker;
async function initMap() {

  let url = window.location.href
  let coord = url.split("?")[1].split(",")
  const position = { lat: parseFloat(coord[0]) , lng:parseFloat(coord[1])}
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
}

window.initMap = initMap