/*
 *  Reverse Geocoding
 *  Date: 2015-08-08
 *
 *  https://developers.google.com/maps/documentation/javascript/reference#Geocoder
*/
// This function loads ''initializeMap()'' 
function loadGeoLibraries(theCallback) {
    console.log("Appending map script to DOM");

    var script  = document.createElement('script');
    script.type = 'text/javascript';
    script.src  = 'http://maps.googleapis.com/maps/api/js?' +
                    'v3.5&' + 
                    'key={{YOUR_GOOGLEMAP_TOKEN_HERE}}&' +
                    'sensor=false&' +
                    'callback=' + theCallback;
    document.body.appendChild(script);
}
//
function reverseGeocode() {

    var self = {};


    self.drawMap = function (canvasID, mapOpts) {
        console.log('init map');
        var mapOptions = {
            zoom: mapOpts.gZoomSize,
            center: new google.maps.LatLng(mapOpts.gLat, mapOpts.gLon),
            mapTypeId: google.maps.MapTypeId.ROADMAP // could be ROADMAP,SATELLITE,HYBRID,TERRAIN
        }

        // ''map'' is global
        mapOpts.gMap = new google.maps.Map(document.getElementById(canvasID), mapOptions);
    }

    self.reverseGeocode = function (latLng, callback) {
        var geoCoderObject = new google.maps.Geocoder();

        var geocoderRequest = {
            location: latLng
        };

        console.log("calling geocoder");
        geoCoderObject.geocode(geocoderRequest,
            function(geocoderResult, geocoderStatus) {
                console.log("geocoderStatus: " + geocoderStatus);
                 switch (geocoderStatus) {
                    case google.maps.GeocoderStatus.OK:
                        console.log('revgeocoding OK');
                        console.log(geocoderResult[0].formatted_address);
                        callback(geocoderResult[0].formatted_address)
                    break;
                    default:
                        alert('default');
                };
            });

    }

    return self;
};
