console.log('main.js');

// Carte & géolocalisation / Leaflet map markers
//     https://leafletjs.com/examples/quick-start/#preparing-your-page
// ! La hauteur et la largeur sont fixées en CSS

// * Variables
const latitude          = 48.833660;
const longitude         = 2.357510;
const latitudeMarqueur  = 48.833660;
const longitudeMarqueur = 2.357510;
const tokenCleALaConSituLaMetPasCaMarchePas = 'pk.eyJ1IjoibWFzYW11bmUiLCJhIjoiY2tmd25qYm9rMWZpYzJyczg1cGhnYmN6diJ9.HzSEnM6ecdFbNrZzCWApIA';
const zoom              = 12;
// La latitude & la longitude

// On crée une nouvelle carte
let maCarte = L.map('mapid').setView([latitude, longitude], zoom);

// * On a besoin d'un "access token", en gros d'un code fournit par le site des cartes
// * Afin de pouvoir utiliser leur API sur notre site
// * Il faut donc s'inscrire sur le site https://account.mapbox.com/auth/signin/
// * et le code sera dispo sur la page du compte > Ctrl F "Default public token"
// *    pk.eyJ1IjoibWFzYW11bmUiLCJhIjoiY2tmd25qYm9rMWZpYzJyczg1cGhnYmN6diJ9.HzSEnM6ecdFbNrZzCWApIA
// Ce token, on l'utilise dans l'url ci-dessous

// On crée une nouvelle couche, qu'on ajoute à la carte

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: `  Map data &copy;
                    <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,
                    Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`,
    maxZoom:      18,
    id:          'mapbox/streets-v11',
    tileSize:     512,
    zoomOffset:  -1,
    accessToken:  tokenCleALaConSituLaMetPasCaMarchePas
}).addTo(maCarte);

// On rajoute un marqueur
let marker = L.marker([latitudeMarqueur, longitudeMarqueur]).addTo(maCarte);

// La popup du marker
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

// // On rajoute un cerle
// let circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(maCarte);

// // On rajoute un polygon
// let polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(maCarte);