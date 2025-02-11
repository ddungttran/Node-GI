const request = require('postman-request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiY3VyaW5kbjkyMSIsImEiOiJjbTRxMjRuYm8wMXVwMmlvcDUwNTlqaHM1In0.Cx6P8rfebid-SRNNZs5VRg`;

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (!body.features || body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1], // Correcting order of latitude & longitude
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            });
        }
    });
};

module.exports = geocode;
