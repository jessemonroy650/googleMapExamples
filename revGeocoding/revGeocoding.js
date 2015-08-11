/*
 *  Reverse Geocoding
 *  Date: 2015-08-08
 *
 *  https://developers.google.com/maps/documentation/javascript/reference#Geocoder
*/
// This function loads ''initializeMap()'' 
function loadMapScripts() {
    console.log("Appending map script to DOM");

    var script  = document.createElement('script');
    script.type = 'text/javascript';
    script.src  = 'http://maps.googleapis.com/maps/api/js?' +
                    'v3.5&' + 
                    'key={{YOUR_GOOGLEMAP_TOKEN_HERE}}&' +
                    'sensor=false&' +
                    'callback=initializeMap';
    document.body.appendChild(script);
}
//
function initializeMap() {
    var mapOptions = {
        zoom: gZoomSize,
        center: new google.maps.LatLng(gLat,gLon),
        mapTypeId: google.maps.MapTypeId.ROADMAP // could be ROADMAP,SATELLITE,HYBRID,TERRAIN
    }
    // ''map'' is global
    gMap = new google.maps.Map(document.getElementById(gElementID), mapOptions);


    var geoCoderObject = new google.maps.Geocoder();

    var geocoderRequest = {
        location: {lat: 31.8599, lng: -106.5609}
        };

    console.log("calling geocoder");
    geoCoderObject.geocode(geocoderRequest,
        function(geocoderResult, geocoderStatus) {
            console.log("geocoderStatus: " + geocoderStatus);
            switch (geocoderStatus) {
                case google.maps.GeocoderStatus.ERROR:
                    alert('revgeocoding error');
                break;
                case google.maps.GeocoderStatus.UNKNOWN_ERROR:
                    alert('revgeocoding UNKNOWN_ERROR');
                break;
                case google.maps.GeocoderStatus.INVALID_REQUEST:
                    alert('revgeocoding INVALID_REQUEST');
                break;
                case google.maps.GeocoderStatus.REQUEST_DENIED:
                    alert('revgeocoding REQUEST_DENIED');
                break;
                case google.maps.GeocoderStatus.OVER_QUERY_LIMIT:
                    alert('revgeocoding OVER_QUERY_LIMIT');
                break;
                case google.maps.GeocoderStatus.ZERO_RESULTS:
                    alert('revgeocoding ZERO_RESULTS');
                break;
                case google.maps.GeocoderStatus.OK:
                    console.log('revgeocoding OK');
                    console.log(JSON.stringify(geocoderResult[0].formatted_address, null, 2));
                    console.log(JSON.stringify(geocoderResult[0].address_components[0].long_name, null, 2));
                    console.log(JSON.stringify(geocoderResult[0].address_components[1].long_name, null, 2));
                    console.log(JSON.stringify(geocoderResult[0].address_components[2].long_name, null, 2));
                    console.log(JSON.stringify(geocoderResult[0].address_components[3].long_name, null, 2));
                    console.log(JSON.stringify(geocoderResult[0].address_components[4].long_name, null, 2));
                    console.log(JSON.stringify(geocoderResult[0].address_components[5].long_name, null, 2));
                    console.log(JSON.stringify(geocoderResult[0].address_components[5].types, null, 2));
                    console.log(JSON.stringify(geocoderResult[0].address_components[6].long_name, null, 2));
                    console.log(JSON.stringify(geocoderResult[0].address_components[6].types, null, 2));
                    console.log(JSON.stringify(geocoderResult[0].address_components[7].long_name, null, 2));
                break;
                default:
                    alert('default');
                //default code block
            };

        });

}


/****
 *  Decode results
 *
*/

/*
function getGeoCode(type) {
        geocoderResult = {
            address_components: (google.maps.GeocoderAddressComponent)
            formatted_address:""
            partial_match: ""
            place_id: ""
            postcode_localities: ""
            types: (https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes)
            }
    var types = [street_address, route, intersection, political, country,
    administrative_area_level_1,
    administrative_area_level_2,
    administrative_area_level_3,
    administrative_area_level_4,
    administrative_area_level_5,
    neighborhood, premise, subpremise, postal_code,
    natural_feature, airport, park];
}

*/




