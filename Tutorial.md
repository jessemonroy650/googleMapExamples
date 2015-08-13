# Seven (7) Simple Google Map Examples in one mobile app., A quick tutorial #
Date: 2015-08-12

This tutorial does three major things 

1. Gets Google Maps based on latlong (Latitude and Longitude)
2. Does a reverse geocoding lookup (latlong to street Address)
3. Does a geolocation lookup (or GPS, if available), which returns latlong, then draws a map and does a reverse geocoding lookup.

>Before reading the tutorial, read [Notes on map production.md](Notes on map production.md). This contains debugging notes, but reading it first will help with understanding some parts of this tutorial.

The goal of this tutorial is to give you the framework for a map addendum.

Many Apps have the secondary need for a map &ndash; based on your current location. With the current mobile technology, GPS is readily available on my most smart phones. There are two big issues with implmenting "a map of the current location with GPS".

1. GPS is not as reliable as is the popular thinking.
2. The leading vender google, has unclear documentation on their API.

This post deals with setting up and implementing a GPS-based Google map on your mobile device.

First you will need to get a [Google API key](https://developers.google.com/maps/documentation/javascript/tutorial#api_key) for map creation. If you have a developers account, create an API key for use with Javascript. This is a client side key. If you are have problems with this and are working with phonegap, post to the [Google Group for Phonegap](https://groups.google.com/forum/#!forum/phonegap).


Next download (clone) all the examples on github.com with:
```
    git clone https://github.com/jessemonroy650/googleMapExamples.git
```

You can also download the the archived (zip) bundle with your webbrowser
```
https://github.com/jessemonroy650/googleMapExamples/archive/master.zip
```

Once the files are downloaded, ```cd googleMapExamples```, the the main folder. 

## Insert the API Key Make it Happen ##

These instructions are for Linux, *BSD, *nix, and OSX.

* Edit the script `insertGoogleKey`. 
* Replace the string `YOUR_TOKEN_HERE` with your Google API key for maps.
* Then, 
```
chmod +x insertGoogleKey
./insertGoogleKey
```
* This will insert your "Google API" key in the appropriate places.
* Open up `index.html` in your webbrowser.

## The Seven (7) Maps ##

The numbers below correspond to the numbers in the app.

1. Map loaded in synchronous mode of San Francisco, California.
2. Map loaded in asynchronous mode of San Francisco, California.<p /> For details on synchronous vs. asynchronous, SEE: [Notes on map production.md](Notes on map production.md)
3. Same as 2), and a reverse geocoding look for "655 Redd Road, El Paso, TX 79912, USA". The answer will show up in the **console**.
4. Map loaded in asynchronous mode of "Hacker Dojo, 599 Fairchild Drive, Mountain View, CA 94043". Then there is a reverse geocoding look for "655 Redd Road, El Paso, TX 79912"; the answer will show up in the lower panel.
5. Initially the map loads in asynchronous mode of "Hacker Dojo, 599 Fairchild Drive, Mountain View, CA 94043". Then a GPS lookup of your current location is done. After that a new map loads and a reverse geocoding lookup is made; the answer will show up in the lower panel.
6. For your current location, the map loads and and there is a reverse geocoding look; the answer will show up in the lower panel. NOTE: If the network is not avaiable, or the app does not get permission to do a GPS lookup, then no map loading or reverse geocoding happen.
7. Initially the map loads in asynchronous mode for "FabLab, 806 Montana Ave, El Paso, Texas 79902". Then a GPS lookup of your current location is done, the map loads, and there is a reverse geocoding lookup. The answer to the lookup will show up in the lower panel. 

## Making it Clear ##

What's not clear from google maps is how to hook into the library, especially if you are not used to JPO (Javascript Prototypal Objects). There are three steps.

1. Load the Google Geo Libraries.
2. Create a class object (map, marker, slider, etc.), sometime initializing it.
3. Make a call to an object method.

See a psuedo-example in [GeoCoder_Classes.md](GeoCoder_Classes.md)

### 1. Load the Libraries ###

The first call loads the javascript library in one of two ways: 

* synchronously, it loads the library with inline HTML<br />
`
<script rc='http://maps.googleapis.com/maps/api/js?v3.5&key={{YOUR_GOOGLEMAP_TOKEN_HERE}}&senso
r=false'></script>
`
* asynchronously, it loads the library by creating an HTML load, with a URL that finishes with the name of the callback routine. 
```
    script.src = 'http://maps.googleapis.com/maps/api/js?' +
                    'v3.5&' + 
                    'key={{YOUR_GOOGLEMAP_TOKEN_HERE}}&' +
                    'sensor=false&' +
                    'callback=**initializeMap**';
```

### 2. Create a class object ###

Next to create any Google map object we call the constructor and attach to our global namespace.

In our case, we created a global variable named `gMap` in our `index.html`, then in the last function call we make (just before the map is drawn on the screen), we assign to `gMap` from `google.maps.Map()`. 

To be clear, `gMap` is for drawing the map. For other objects there are similar function calls, like `google.maps.Markers()`. The other map objects we can call include sliders,buttons, and labels.

### 3. Make a call to an object method. ###

Some classes have just one method. Some classes have things you can attach to (or override the default).

See a psuedo-example in [GeoCoder_Classes.md](GeoCoder_Classes.md)





