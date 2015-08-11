

What's not clear from google maps is how to hook into the library, especially if you are not used to JPO (Javascript Prototypal Objects).

The first call loads the javascript library in one of two ways: 

* synchronously, it loads the library with inline HTML
`<script src='http://maps.googleapis.com/maps/api/js?v3.5&key={{YOUR_GOOGLEMAP_TOKEN_HERE}}&senso
r=false'></script>`
* asynchronously, it loads the library by creating an HTML load, with a URL that finishes with the name of the callback routine. 
```
    script.src = 'http://maps.googleapis.com/maps/api/js?' +
                    'v3.5&' + 
                    'key={{YOUR_GOOGLEMAP_TOKEN_HERE}}&' +
                    'sensor=false&' +
                    'callback=**initializeMap**';
```

Next to create any Google map object we call the constructor and attach to our global namespace.

In our case, we created a global variable named `gMap` in our `index.html`, then in the last function call we make (just before the map is drawn on the screen), we assign to `gMap` from `google.maps.Map()`. 

To be clear, `gMap` is for drawing the map. For other objects there are similar function calls, like `google.maps.Markers()`. The other map objects we can call include sliders,buttons, and labels.

