//
//
//
// "use strict";

var pgGeoLocation = function (succ, err) {

    // create enclosure
    var self = {};

    self.watchID = null;
    // Callback to go to caller
    self.callback = {
        onSuccess: '',
        onError: ''
    };
    // Settings
    self.geoLocationOption = {
        maximumAge: 2000,       // 2 seconds
        timeout: 1000,          // 1 seconds
        enableHighAccuracy: true
    };
    //
    //    Hook to our Location/GPS functions
    //
    self.getLocation = function (timeout) {
        if (timeout) {
            self.geoLocationOption.maximumAge = maximumAge * 2;
            self.geoLocationOption.timeout = timeout;
        }
        navigator.geolocation.getCurrentPosition(
            self.callback.onSuccess,
            self.callback.onError,
            self.geoLocationOption);
    };

    self.watchLocation = function (timeout) {
        //alert('watch');
        if (timeout) {
            self.geoLocationOption.maximumAge = maximumAge * 2;
            self.geoLocationOption.timeout = timeout;
        }
        self.watchID = navigator.geolocation.watchPosition(
            self.callback.onSuccess, 
            self.callback.onError, 
            self.geoLocationOption);
    };

    self.clearWatch = function () {
        navigator.geolocation.clearWatch(self.watchID);
    };

    if ((typeof succ === 'function') && (typeof err === 'function')) {
        //console.log("got both functions");
        self.callback.onSuccess = succ;
        self.callback.onError = err;
    } else {
        alert("Location.init: one or both callbacks failed. Both should be functions.");
    }

    return self;
};
