## GeoCoder_Classes ##
Date: 2015-08-08

`google.maps.Geocoder`
A service for converting between an address and a LatLng. This service can also do "reverse geocoding".

https://developers.google.com/maps/documentation/javascript/reference#Geocoder

This document is an ad-hoc reorganization of the documentation of this javascript class. Google's documentation requires multiple reads to understand. It is poorly layed out. I think even in book layout this would be a pain. Many of the components are mislabeled or labeled in an obtuse format. In addition, the API design is obtuse and contorted - as if the information was clustered together by committee.

There is one class to create objects and one method. Everything else supports this. One side effect of this is getting a huge data structure back. I recommend taking time to learn the filter: `google.maps.GeocoderComponentRestrictions`.

In Javascript, it would typically look like this.

```
var geoCoderObject = new google.maps.Geocoder();

var google.maps.GeocoderRequest = {
	address:"",
	bounds:"",                 // (optional)
	componentRestrictions:(google.maps.GeocoderComponentRestrictions)   // (optional)
	location:"",
	placeId:"",
	region:""                 // (optional)
	};

geoCoderObject.geocode(google.maps.GeocoderRequest,
	function(google.maps.GeocoderResult, google.maps.GeocoderStatus) {
        //
        // This a structure of what is returned. It is not an assignment.
        //
		google.maps.GeocoderStatus = [ERROR,INVALID_REQUEST,OK,OVER_QUERY_LIMIT,REQUEST_DENIED,UNKNOWN_ERROR,ZERO_RESULTS];
		google.maps.GeocoderResult = {
			address_components: (google.maps.GeocoderAddressComponent)
			formatted_address:""
			geometry: (google.maps.GeocoderGeometry = {
				bounds:"",
				location:"",
				location_type:(google.maps.GeocoderLocationType),
				viewport:""})
			partial_match: ""
			place_id: ""
			postcode_localities: ""
			types: (https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes)
			}
	});
```

## The Four Steps ##

1. Create a google.maps Geocoder object
2. Create a JSON as the request object
3. Call the instance method
4. decode the objects returned to the callback

### Constructor ###

`Geocoder()` Creates a new instance of a Geocoder that sends geocode requests to Google servers.

### method ##

geocode(request:GeocoderRequest, callback:function(Array<GeocoderResult>, GeocoderStatus))

* `google.maps.GeocoderRequest` (object) --> Geocoder()
* The specification for a geocoding request to be sent to the Geocoder
NOTE: requires at least one of the following: *'address','location', or 'placeId'*.
```
{
address:"",
bounds:"",                 // (optional)
componentRestrictions:(google.maps.GeocoderComponentRestrictions)   // (optional)
location:"",
placeId:"",
region:""                 // (optional)
}
```

* `google.maps.GeocoderComponentRestrictions` (object) -->  Restrict what is returned
```
{administrativeArea:"",country:"",locality:"",	postalCode:"",route:""}
```

* `google.maps.GeocoderStatus` (class) -> (linear array)
* The status returned by the Geocoder on the completion of a call to geocode()
```
[ERROR,INVALID_REQUEST,OK,OVER_QUERY_LIMIT,REQUEST_DENIED,UNKNOWN_ERROR,ZERO_RESULTS]
```

* `google.maps.GeocoderResult` (object)
* A single geocoder result retrieved from the geocode server. A geocode request may return multiple result objects. Note that though this result is "JSON-like," it is not strictly JSON, as it indirectly includes a LatLng object.
```
{
address_components:(google.maps.GeocoderAddressComponent)
formatted_address:""
geometry:(google.maps.GeocoderGeometry)
partial_match:""
place_id:""
postcode_localities:""
types:[https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes]
}
```

* `google.maps.GeocoderAddressComponent` (object)
* A single address component within a GeocoderResult. A full address may consist of multiple address components.
```
{
long_name:"",
short_name:"",
types:[https://developers.google.com/maps/documentation/geocoding/intro#Types]
}
```

* `google.maps.GeocoderGeometry`  (object)
* Geometry information about this GeocoderResult
```
{bounds:"",location:"",location_type:(google.maps.GeocoderLocationType),viewport:""}
```

* `google.maps.GeocoderLocationType` (class) -> (linear array)
* Describes the type of location returned from a geocode.
```
[APPROXIMATE,GEOMETRIC_CENTER,RANGE_INTERPOLATED,ROOFTOP]
```
