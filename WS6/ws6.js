/**
 * Created by NamNguyen1 on 17/4/18.
 */

$.ajax({
    url: "https://data.melbourne.vic.gov.au/resource/qnjw-wgaj.json",
    type: "GET", data: {
        "$limit" : 10,
        "$$app_token" : '3ttNxWouTFB2WE57xAuNRPXvf'
    } }).done(function(data) {
        alert("Retrieved " + data.length + " records from the dataset!");
        initMap(data);
    });

function initMap(data) {
    var melbourne = {lat: -37.814, lng: 144.96332};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: melbourne });
    //loop through dataset
    data.forEach(function (pod) {

        //grab each data field
        var coords = pod["coordinates"]["coordinates"];
        var latLng = new google.maps.LatLng(coords[1],coords[0]);
        var name = pod["featurename"];
        var numDocs = pod["nbemptydoc"];


        //format infoWindow
        var contentString = '<span>' +
                                '<h4>' + name + '</h4>' +
                                '<p>This station has ' + numDocs + ' empty docs and is located at ' + latLng + '</p>';

        var infowindow = new google.maps.InfoWindow({
            content:contentString
        });
        //create marker
        var marker = new google.maps.Marker({ position: latLng,
            title: name
        });

        // add eventListener then add to map
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

        marker.setMap(map);
    });

}