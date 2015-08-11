#= README =
Date: 2015-08-10 (1439259486)

If you are getting the `Timeout expired` too soon. 
In `gpsNotepad.js`, change the follow:

>    self.geoLocationOption = {
>        maximumAge: 2000,       // 2 seconds
>        timeout: 1000,          // 1 seconds
>        enableHighAccuracy: true
>    };

**Hint:** Add a zero to each.
