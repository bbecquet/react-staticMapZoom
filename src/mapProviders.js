
const providers = {
    google: opts => {
        return 'https://maps.googleapis.com/maps/api/staticmap'
             + `?size=${opts.w}x${opts.h}&zoom=${opts.z}&center=${opts.lat},${opts.lng}`;
    },
    openMapQuest: opts => {
        return 'http://www.mapquestapi.com/staticmap/v4/getmap'
             + `?size=${opts.w},${opts.h}`
             + `&center=${opts.lat},${opts.lng}`
             + `&key=${opts.key}`;
    },
    mapBox: opts => {
        return 'https://api.mapbox.com/v4/mapbox.emerald/'
             + `${opts.lng},${opts.lat},${opts.z}/${opts.w}x${opts.h}@2x.png`
             + `?access_token=${opts.key}`;
    }
};

export default providers;
