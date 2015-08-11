/*
 *  Reverse Geocoding
 *  Date: 2015-08-08
 *
 *  https://developers.google.com/maps/documentation/javascript/reference#Geocoder
 *  http://www.latlong.net/ <-- Geo Code
 *
 *  reverseGeocode() - creates objects
 *  reverseGeocode.loadGeoLibraries(callback) - load Google's Map Libraries
 *  reverseGeocode.loadMap(mObj) - loads the map (graphics)
 *  reverseGeocode.reverseGeocode(latLng, user_callback) - get location based on GPS(lat,long)
 *  reverseGeocode.decodeResults(data, type_wanted) - extracts text from JSON
 *  reverseGeocode.putMarker(latLng) - puts down a marker based on the map we have
 *  reverseGeocode.setInfoWindow(contentString) - creates an infoWindow when the marker is clicked
*/

function reverseGeocode() {

    var self = {};

    self.gMap = {};
    self.gMarker = {};
    self.geoCode = {};
    self.InfoWindow = {};

    // This function loads ''initializeMap()'' 
    self.loadGeoLibraries = function (callback) {
        console.log("Appending map library to DOM");

        var script  = document.createElement('script');
        script.type = 'text/javascript';
        script.src  = 'http://maps.googleapis.com/maps/api/js?' +
                           'v3.5&' + 
                           'key={{YOUR_GOOGLEMAP_TOKEN_HERE}}&' +
                           'sensor=false&' +
                           'callback=' + callback;
        document.body.appendChild(script);
    };

    //
    self.loadMap = function (mObj) {
        var mapOptions = {
            zoom: mObj.gZoomSize,
            center: new google.maps.LatLng(mObj.gLat, mObj.gLon),
            mapTypeId: google.maps.MapTypeId.SATELLITE // could be ROADMAP,SATELLITE,HYBRID,TERRAIN
        };

        // ''gMap'' is in this enclosure
        self.gMap = new google.maps.Map(document.getElementById(mObj.gElementID), mapOptions);
    };

    /* Before this is called the library should be loaded. */
    self.reverseGeocode = function (latLng, user_callback) {
        var selfhere = {};

        /* create geo decoder Object */
        self.geoCode = new google.maps.Geocoder();

        /* Pass request to reverse Geocode */
        selfhere.geocoderRequest = {
            location: latLng
        };

        //console.log("calling geocoder");
        self.geoCode.geocode(selfhere.geocoderRequest,
            function(geocoderResult, geocoderStatus) {
                console.log("geocoderStatus: " + geocoderStatus);
                switch (geocoderStatus) {
                    case google.maps.GeocoderStatus.OK:
                        console.log(JSON.stringify(geocoderResult[0].formatted_address, null, 2));
                        user_callback(geocoderResult[0]);
                    break;
                    default:
                        alert('Error: ' + geocoderStatus);
                };
            });        
    };

    self.decodeResults = function (data, type_wanted) {
        //console.log('decodeResults: ' + data.length);
        for (i = 0; i < data.length; i++) {
            if (type_wanted === data[i].types[0]) {
               console.log(JSON.stringify(data[i].long_name));
               return data[i].long_name;
            }
        }
        return '';
    };

    self.putMarker = function(latLng) {
        //console.log("latLng: " + JSON.stringify(latLng));
        var theMarker = {};
        if (latLng) {
	        theMarker = {
    	        position: latLng,
        	    map: self.gMap,
            	animation: google.maps.Animation.DROP,
	            title: 'You are here.'
    	    };
            self.gMarker = new google.maps.Marker(theMarker);
        } else {
	        self.gMarker.setMap(null);
        }
    };

    self.setInfoWindow = function(contentString) {
        self.InfoWindow = new google.maps.InfoWindow({
            content: contentString
        });
        google.maps.event.addListener(self.gMarker, 'click', function() {
            self.InfoWindow.open(self.gMap, self.gMarker);
        });
    };

    return self;
};







