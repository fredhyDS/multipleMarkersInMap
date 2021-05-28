/*
Locations
*/
const tilesProvider ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
let myMap = L.map('myMap').setView([-31.618020,-60.6871668], 13);
L.tileLayer(tilesProvider,{
	maxZoom: 18,
}).addTo(myMap);

const locations = [
	  [{lat: -31.63998,  lng: -60.702286},'Location 1',1],
	  [{lat: -31.643171, lng: -60.715126},'Location 2',2],
	  [{lat: -31.595350, lng: -60.692130},'Location 3',3],
	  [{lat: -31.618440, lng: -60.684290},'Location 4',4],
	  [{lat: -31.621340, lng: -60.705620},'Location 5',5]
	];
for (let i = 0; i < locations.length; i++) {
	const element = locations[i];
	let lat = element[0]['lat'];
	let lng = element[0]['lng'];
	let suc = element[1];
	let iconX = element[2];	
	const urlimg = "assets/img/icon0"+iconX+".png";	
	
	let iconM = L.divIcon({
							className:'iconMarker icon'+iconX,
							html: '<span></span>',
							popupAnchor:[10,10]
						});
	L.marker([lat,lng],{icon: iconM, title: suc}).addTo(myMap).bindPopup('<h2>'+suc+'</h2>');	
}