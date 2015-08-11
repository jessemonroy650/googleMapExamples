/*
 *  Reverse Geocoding
 *  Date: 2015-08-08
 *
 *  https://developers.google.com/maps/documentation/javascript/reference#Geocoder
 *  http://www.latlong.net/ <-- Geo Code
*/

// This function loads ''initializeMap()'' 
function loadGeoLibraries(callback) {
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


function reverseGeocode() {

    var self = {};

    //
    self.loadMap = function (mObj) {
        var mapOptions = {
            zoom: mObj.gZoomSize,
            center: new google.maps.LatLng(mObj.gLat, mObj.gLon),
            mapTypeId: google.maps.MapTypeId.ROADMAP // could be ROADMAP,SATELLITE,HYBRID,TERRAIN
        };

        // ''map'' is in this enclosure
        mObj.gMap = new google.maps.Map(document.getElementById(mObj.gElementID), mapOptions);
    };

    /* Before this is called the library should be loaded. */
    self.reverseGeocode = function (latLng, user_callback) {
        var selfhere = {};

        /* create geo decoder Object */
        selfhere.geoCoderObject = new google.maps.Geocoder();

        /* Pass request to reverse Geocode */
        selfhere.geocoderRequest = {
            location: latLng
        };

        console.log("calling geocoder");
        selfhere.geoCoderObject.geocode(selfhere.geocoderRequest,
            function(geocoderResult, geocoderStatus) {
                console.log("geocoderStatus: " + geocoderStatus);
                switch (geocoderStatus) {
                    case google.maps.GeocoderStatus.OK:
                        console.log('revgeocoding OK');
                        user_callback(geocoderResult[0]);
                        //console.log(JSON.stringify(geocoderResult[0].formatted_address, null, 2));
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

    return self;
};







