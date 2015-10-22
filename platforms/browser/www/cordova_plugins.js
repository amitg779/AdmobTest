cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-admob/www/admob.js",
        "id": "cordova-admob.AdMobAds",
        "clobbers": [
            "window.admob",
            "window.tappx"
        ]
    },
    {
        "file": "plugins/cordova-connectivity-monitor/www/connectivity.js",
        "id": "cordova-connectivity-monitor.connectivity",
        "clobbers": [
            "window.connectivity"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-google-play-services": "25.0.0",
    "cordova-plugin-googleplayservices": "19.0.3",
    "cordova-admob": "4.1.6",
    "cordova-connectivity-monitor": "1.2.2"
}
// BOTTOM OF METADATA
});