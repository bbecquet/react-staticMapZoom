'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    google: function google(_ref) {
        var width = _ref.width;
        var height = _ref.height;
        var zoom = _ref.zoom;
        var lat = _ref.lat;
        var lng = _ref.lng;
        var apiKey = _ref.apiKey;

        return 'https://maps.googleapis.com/maps/api/staticmap' + ('?size=' + width + 'x' + height + '&zoom=' + zoom + '&center=' + lat + ',' + lng);
    },
    openMapQuest: function openMapQuest(_ref2) {
        var width = _ref2.width;
        var height = _ref2.height;
        var zoom = _ref2.zoom;
        var lat = _ref2.lat;
        var lng = _ref2.lng;
        var apiKey = _ref2.apiKey;

        return 'http://www.mapquestapi.com/staticmap/v4/getmap' + ('?size=' + width + ',' + height + '&zoom=' + zoom + '&center=' + lat + ',' + lng) + ('&key=' + apiKey);
    },
    mapbox: function mapbox(_ref3) {
        var width = _ref3.width;
        var height = _ref3.height;
        var zoom = _ref3.zoom;
        var lat = _ref3.lat;
        var lng = _ref3.lng;
        var apiKey = _ref3.apiKey;

        return 'https://api.mapbox.com/styles/v1/mapbox/streets-v8/static/' + (lng + ',' + lat + ',' + zoom + '/' + width + 'x' + height + '@2x') + ('?access_token=' + apiKey);
    }
};
module.exports = exports['default'];
//# sourceMappingURL=staticMapProviders.js.map