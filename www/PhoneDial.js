var phonedial = {
    callDirect: function(phoneNumber, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'PhoneDial', // mapped to our native Java class called "CalendarPlugin"
            'callDirect', // with this action name
            [phoneNumber]
        ); 
    }
}
module.exports = phonedial;