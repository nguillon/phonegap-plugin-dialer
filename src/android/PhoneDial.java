package net.gullyweb.cordova;
 
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

import android.net.Uri;
import android.app.Activity;
import android.content.Intent;

public class PhoneDial extends CordovaPlugin {
    public static final String ACTION_CALL_DIRECT = "callDirect";
    
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        try {
            if (ACTION_CALL_DIRECT.equals(action)) { 
				Uri number = Uri.parse("tel:" + args.getString(0));
				Intent callIntent = new Intent(Intent.ACTION_CALL, number);
				this.cordova.getActivity().startActivity(callIntent);
               return true;
            }
            callbackContext.error("Invalid action");
            return false;
        } catch(Exception e) {
            System.err.println("Exception: " + e.getMessage());
            callbackContext.error(e.getMessage());
            return false;
        } 
    }
}