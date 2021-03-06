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

### 2. Create a class object ####

Next to create any Google map object we call the constructor and attach to our global namespace.

In our case, we created a global variable named `gMap` in our `index.html`, then in the last function call we make (just before the map is drawn on the screen), we assign to `gMap` from `google.maps.Map()`. 

To be clear, `gMap` is for drawing the map. For other objects there are similar function calls, like `google.maps.Markers()`. The other map objects we can call include sliders,buttons, and labels.

### 3. Make a call to an object method. ###

Some classes have just one method. Some classes have things you can attach to (or override the default).

See a psuedo-example in [GeoCoder_Classes.md](GeoCoder_Classes.md)
