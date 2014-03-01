
function PhoneDial() {
    this.resultCallback = null; // Function
}
PhoneDial.prototype.dial = function(phoneNmber){    
    cordova.exec(null, null, "PhoneDial", "call", [phoneNmber]);
}
cordova.addConstructor(function()  {    
                       if(!window.plugins)
                       {
                       window.plugins = {};
                       }

                       // shim to work in 1.5 and 1.6
                       if (!window.Cordova) {
                       window.Cordova = cordova;
                       };

                       window.plugins.phoneDial = new PhoneDial();
                       });
