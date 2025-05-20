mapboxgl.accessToken = mapToken;

// Use default coordinates if undefined or invalid
const defaultCoordinates = [77.2090, 28.6139]; // [lng, lat] for Delhi
const coordinates = listing.geometry.coordinates;
const mapCenter = (Array.isArray(coordinates) && coordinates.length === 2 && 
                   typeof coordinates[0] === "number" && typeof coordinates[1] === "number")
    ? coordinates
    : defaultCoordinates;

const map = new mapboxgl.Map({
    container: 'map',
    center: mapCenter,
    zoom: 9
});

const marker = new mapboxgl.Marker({color : "red"})
    .setLngLat(mapCenter)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(`<h4>${listing.location}</h4><p>Exact location will be provided after booking</p>`)) 
    .addTo(map);









// mapboxgl.accessToken = mapToken;
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
//     zoom: 9 // starting zoom
// });

// const marker = new mapboxgl.Marker()
//     .setLngLat(coordinates)
//     .addTo(map); 

