//
function initializeMap() {
    var mapOptions = {
        zoom: gZoomSize,
        center: new google.maps.LatLng(gLat,gLon),
        mapTypeId: google.maps.MapTypeId.ROADMAP // could be ROADMAP,SATELLITE,HYBRID,TERRAIN
    }
    // ''map'' is global
    gMap = new google.maps.Map(document.getElementById(gElementID), mapOptions);
}

// This function loads ''initializeMap()'' 
function loadMapScripts() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://maps.googleapis.com/maps/api/js?' +
                    'v3.5&' + 
                    'key={{YOUR_GOOGLEMAP_TOKEN_HERE}}&' +
                    'sensor=false&' +
                    'callback=initializeMap';
    document.body.appendChild(script);
}
