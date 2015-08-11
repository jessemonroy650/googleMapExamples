# googleMapExamples
Seven (7) simple Google map examples in one mobile app.

This tutorial does three major things 

1. Gets Google Maps based on latlong (Latitude and Longitude)
2. Does a reverse geocoding lookup (latlong to street Address)
3. Does a geolocation lookup (or GPS if available), which returns latlong; then draws a map and does a reverse geocoding lookup.

## Make it Happen ##
1. Edit the file `insertGoogleKey`. 
2. Replace the string `YOUR_TOKEN_HERE` with your Google API key for maps.
3.Then,
```
chmod +x insertGoogleKey
./insertGoogleKey
```
4. This will insert you Google API key in the appropriate places.
5. Open up `index.html` in your webbrowser.


## Un-organized notes ##
* [GeoCoder_Classes](GeoCoder_Classes)
* [MakingClear](MakingClear)
* [Notes on map production](Notes on map production)
* [blogEntry](blogEntry)
* [config.xml](config.xml)

## Street Address to Latitude, Longitude with GPS ##

http://geocoder.us/

## The Seven (7) Maps ##

1. Map loaded in synchronous mode of San Francisco, California.
2. Map loaded in asynchronous mode of San Francisco, California.
3. Same as 2), and a reverse geocoding look for "655 Redd Road, El Paso, TX 79912, USA". The answer will show up in the **console**.
4. Map loaded in asynchronous mode of Hacker Dojo, 599 Fairchild Drive, Mountain View, CA 94043. Then there is a reverse geocoding look for "655 Redd Road, El Paso, TX 79912"; the answer will show up in the lower panel.
5. Initially the map loads in asynchronous mode of Hacker Dojo, 599 Fairchild Drive, Mountain View, CA 94043. Then a GPS lookup of your current location, a new map loads and a reverse geocoding lookup is made; the answer will show up in the lower panel.
6. For your current location, the map loads and and there is a reverse geocoding look; the answer will show up in the lower panel. NOTE: No map loading or reverse geocoding happen, then the network is not avaiable, or the app does not get permission to do a GPS lookup.
7. Initially the map loads in asynchronous mode of FabLab, 806 Montana Ave, El Paso, Texas 79902. The map loads and and there is a reverse geocoding look for your current location; the answer will show up in the lower panel. 


## Common ERROR Codes ##

*This page was unable to display a Google Maps element. The provided Google API key is invalid or this site is not authorized to use it. Error Code: InvalidKeyOrUnauthorizedURLMapError*

THE FIX: Replace `YOUR_TOKEN_HERE` with your Google API Key, and run `insertGoogleKey`.

code: 2
*message: application does not have sufficient geolocation permission.*

THE FIX: Add the geolocation plugin to config.xml

code: 2
*message: The last location provider was diabled*

THE FIX: Turn on GPS.

code: 3
*message: Timeout expired*

THE FIX: Turn on GPS.
