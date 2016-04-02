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

        var url = 'https://maps.googleapis.com/maps/api/staticmap' + ('?size=' + width + 'x' + height + '&zoom=' + zoom + '&center=' + lat + ',' + lng);
        if (apiKey) {
            url += '&key=' + apiKey;
        }
        return url;
    },
    bing: function bing(_ref2) {
        var width = _ref2.width;
        var height = _ref2.height;
        var zoom = _ref2.zoom;
        var lat = _ref2.lat;
        var lng = _ref2.lng;
        var apiKey = _ref2.apiKey;

        return 'http://dev.virtualearth.net/REST/V1/Imagery/Map/Road/' + (lat + ',' + lng + '/' + zoom + '?mapSize=' + width + ',' + height + '&key=' + apiKey);
    },
    openMapQuest: function openMapQuest(_ref3) {
        var width = _ref3.width;
        var height = _ref3.height;
        var zoom = _ref3.zoom;
        var lat = _ref3.lat;
        var lng = _ref3.lng;
        var apiKey = _ref3.apiKey;

        return 'http://www.mapquestapi.com/staticmap/v4/getmap' + ('?size=' + width + ',' + height + '&zoom=' + zoom + '&center=' + lat + ',' + lng) + ('&key=' + apiKey);
    },
    mapbox: function mapbox(_ref4) {
        var width = _ref4.width;
        var height = _ref4.height;
        var zoom = _ref4.zoom;
        var lat = _ref4.lat;
        var lng = _ref4.lng;
        var apiKey = _ref4.apiKey;

        return 'https://api.mapbox.com/styles/v1/mapbox/streets-v8/static/' + (lng + ',' + lat + ',' + zoom + '/' + width + 'x' + height + '@2x') + ('?access_token=' + apiKey);
    },
    yandex: function yandex(_ref5) {
        var width = _ref5.width;
        var height = _ref5.height;
        var zoom = _ref5.zoom;
        var lat = _ref5.lat;
        var lng = _ref5.lng;

        return 'http://static-maps.yandex.ru/1.x/?lang=en-US&l=map' + ('&ll=' + lng + ',' + lat + '&z=' + zoom + '&size=' + width + ',' + height);
    }
};
module.exports = exports['default'];
//# sourceMappingURL=staticMapProviders.js.map