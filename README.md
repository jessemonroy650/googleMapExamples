# googleMapExamples
Seven (7) simple Google map examples in one mobile app.

This tutorial does three major things 

1. Gets Google Maps based on latlong (Latitude and Longitude)
2. Does a reverse geocoding lookup (latlong to street Address)
3. Does a geolocation lookup (or GPS, if available), which returns latlong, then draws a map and does a reverse geocoding lookup.

## Make it Happen ##
These instructions are for Linux, *BSD, *nix, and OSX.

* Edit the file `insertGoogleKey`. 
* Replace the string `YOUR_TOKEN_HERE` with your Google API key for maps.
* Then, 
```
chmod +x insertGoogleKey
./insertGoogleKey
```

* This will insert your "Google API" key in the appropriate places.
* Open up `index.html` in your webbrowser.


### Un-organized notes ###

* [GeoCoder_Classes](GeoCoder_Classes.md) - Stuff copied directly from google, and reorganized to make some sense of.
* [MakingClear](MakingClear.md) - An important part of the unfinished tutorial
* [Notes on map production](Notes on map production.md) - unfinished part of tutorial
* [blogEntry](blogEntry) - unfinished blog Entry


## Street Address to Latitude, Longitude with GPS ##

There are a few of these services on the Internet, they are not extremely accurate.

http://www.latlong.net/

http://geocoder.us/

## The Seven (7) Maps ##

The numbers below correspond to the numbers in the app.

1. Map loaded in synchronous mode of San Francisco, California.
2. Map loaded in asynchronous mode of San Francisco, California.
3. Same as 2), and a reverse geocoding look for "655 Redd Road, El Paso, TX 79912, USA". The answer will show up in the **console**.
4. Map loaded in asynchronous mode of "Hacker Dojo, 599 Fairchild Drive, Mountain View, CA 94043". Then there is a reverse geocoding look for "655 Redd Road, El Paso, TX 79912"; the answer will show up in the lower panel.
5. Initially the map loads in asynchronous mode of "Hacker Dojo, 599 Fairchild Drive, Mountain View, CA 94043". Then a GPS lookup of your current location is done. After that a new map loads and a reverse geocoding lookup is made; the answer will show up in the lower panel.
6. For your current location, the map loads and and there is a reverse geocoding look; the answer will show up in the lower panel. NOTE: If the network is not avaiable, or the app does not get permission to do a GPS lookup, then no map loading or reverse geocoding happen.
7. Initially the map loads in asynchronous mode for "FabLab, 806 Montana Ave, El Paso, Texas 79902". Then a GPS lookup of your current location is done, the map loads, and there is a reverse geocoding lookup. The answer to the lookup will show up in the lower panel. 

## Common ERROR Codes ##

* **ERROR:** *This page was unable to display a Google Maps element. The provided Google API key is invalid or this site is not authorized to use it. Error Code: InvalidKeyOrUnauthorizedURLMapError*
* **THE FIX:** Replace `YOUR_TOKEN_HERE` with your Google API Key, and run `insertGoogleKey`.

* **ERROR:** code: 2 *message: application does not have sufficient geolocation permission.*
* **THE FIX:** Add the geolocation plugin to config.xml

* **ERROR:** code: 2 *message: The last location provider was diabled*
* **THE FIX:** Turn on GPS.

* **ERROR:** code: 3 *message: Timeout expired*
* **THE FIX:** Turn on GPS.

For more type of possible GPS error, scroll to the bottom of this page:<br />
[What is GPS?](http://www8.garmin.com/aboutGPS/)

