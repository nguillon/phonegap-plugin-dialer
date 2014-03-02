var phoneDial = {
    call: function(phoneNumber, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "PhoneDial", "call", [phoneNumber]);
    }
}
module.exports = phoneDial;