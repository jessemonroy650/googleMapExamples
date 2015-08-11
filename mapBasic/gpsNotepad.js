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
        maximumAge: 200000,       // 20 seconds
        timeout: 100000,          // 10 seconds
        enableHighAccuracy: true
    };
    //
    //    Hook to our Location/GPS functions
    //
    self.getLocation = function () {
        navigator.geolocation.getCurrentPosition(
            self.callback.onSuccess,
            self.callback.onError,
            self.geoLocationOption);
    };

    self.watchLocation = function () {
        //alert('watch');
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
