
export default {
    google: ({width, height, zoom, lat, lng, apiKey}) => {
        let url = 'https://maps.googleapis.com/maps/api/staticmap'
             + `?size=${width}x${height}&zoom=${zoom}&center=${lat},${lng}`;
        if (apiKey) {
            url += `&key=${apiKey}`;
        }
        return url;
    },
    bing: ({width, height, zoom, lat, lng, apiKey}) => {
        return 'http://dev.virtualearth.net/REST/V1/Imagery/Map/Road/'
             + `${lat},${lng}/${zoom}?mapSize=${width},${height}&key=${apiKey}`;
    },
    openMapQuest: ({width, height, zoom, lat, lng, apiKey}) => {
        return 'http://www.mapquestapi.com/staticmap/v4/getmap'
             + `?size=${width},${height}&zoom=${zoom}&center=${lat},${lng}`
             + `&key=${apiKey}`;
    },
    mapbox: ({width, height, zoom, lat, lng, apiKey}) => {
        return 'https://api.mapbox.com/styles/v1/mapbox/streets-v8/static/'
             + `${lng},${lat},${zoom}/${width}x${height}@2x`
             + `?access_token=${apiKey}`;
    },
    yandex: ({width, height, zoom, lat, lng}) => {
        return 'http://static-maps.yandex.ru/1.x/?lang=en-US&l=map'
             + `&ll=${lng},${lat}&z=${zoom}&size=${width},${height}`;
    }
};
