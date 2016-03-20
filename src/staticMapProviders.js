
export default {
    google: ({width, height, zoom, lat, lng, apiKey}) => {
        return 'https://maps.googleapis.com/maps/api/staticmap'
             + `?size=${width}x${height}&zoom=${zoom}&center=${lat},${lng}`;
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
    }
};
