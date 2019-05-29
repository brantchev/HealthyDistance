//Set up some of our variables.
var map; //Will contain map object.
var marker = false; ////Has the user plotted their location marker? 
var zooom = 16;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: zooom,
    center: {lat: 42.6977, lng: 23.3217}
    });
    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow;

    google.maps.event.addListener(map, 'click', function(event) {                
        //Get the location that the user clicked.
        var clickedLocation = event.latLng;
        //If the marker hasn't been added.
        if(marker === false){
            //Create the marker.
            marker = new google.maps.Marker({
                position: clickedLocation,
                map: map,
                draggable: true //make it draggable
            });
            //Listen for drag events!
            google.maps.event.addListener(marker, 'dragend', function(event){
                markerLocation();
            });
        } else{
            //Marker has already been added, so just change its location.
            marker.setPosition(clickedLocation);
        }
        //get the address
        geocodeLatLng(geocoder, map, infowindow);
        //Get the marker's location.
        markerLocation();
    });
}
function geocodeLatLng(geocoder, map, infowindow) {
    //Get location.
    var currentLocation = marker.getPosition();
    var latlng = {lat: currentLocation.lat(), lng: currentLocation.lng()};
    geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
        if (results[0]) {
        infowindow.setContent(results[0].formatted_address);
        infowindow.open(map, marker);
        document.getElementById('addr').value = results[0].formatted_address; //address

        //get the details of the place (name, athmosphere, rating, etc.)
        var request = {
            placeId: results[0].place_id,
            fields: ['name']
            // fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
        };
        service = new google.maps.places.PlacesService(map);
        service.getDetails(request, (place, status) => {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
               document.getElementById('name').value = place.name; //name of selected place
            }
        });

        } else {
        window.alert('No results found');
        }
    } else {
        window.alert('Geocoder failed due to: ' + status);
    }
    });
}
//This function will get the marker's current location and then add the lat/long
//values to our textfields so that we can save the location.
function markerLocation(){
    //Get location.
    var currentLocation = marker.getPosition();
    //Add lat and lng values to a field that we can save.
    document.getElementById('latCoords').value = currentLocation.lat(); //latitude
    document.getElementById('lonCoords').value = currentLocation.lng(); //longitude
}

function markerSetLocation (Lat, Lng){
    myLat = parseFloat(Lat);
    myLng = parseFloat(Lng);
    var position = new google.maps.LatLng(myLat, myLng);

    console.log(myLat, myLng);
    if (marker === false){
        //Create the marker.
        marker = new google.maps.Marker({
            position: position,
            map: map,
            draggable: true //make it draggable
        });
        // //Listen for drag events!
        // google.maps.event.addListener(marker, 'dragend', function(event){
        //     markerLocation();
        // });
    } else{
        //Marker has already been added, so just change its location.
        marker.setPosition(position);
    }
    map.panTo(position); 
    map.setCenter(position); 
}