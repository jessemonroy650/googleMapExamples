    function ui_GPSOff() {
        RevGEO.clearWatch();
    }
    //
    function ui_GPSonError (error) {
        alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
    };
    //
    function ui_GPSonSuccess(position) {
        gMapObject.gLat = position.coords.latitude;
        gMapObject.gLon = position.coords.longitude;
        RevGEO.loadMap(gMapObject);
        RevGEO.reverseGeocode(
            {lat: position.coords.latitude, lng: position.coords.longitude},
            drawstuff);
        // NOTE: 'map' needed for 'marker' is not resovled until Google returns from a request to draw the map
        setTimeout(RevGEO.putMarker({lat: gMapObject.gLat, lng: gMapObject.gLon}),5000);
    };
