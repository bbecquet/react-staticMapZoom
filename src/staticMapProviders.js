
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
    mapBox: ({width, height, zoom, lat, lng, apiKey}) => {
        return 'https://api.mapbox.com/v4/mapbox.emerald/'
             + `${lng},${lat},${zoom}/${width}x${height}@2x.png`
             + `?access_token=${apiKey}`;
    }
};
