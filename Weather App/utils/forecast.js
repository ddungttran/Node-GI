const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d4f136f6f6fe8fc8f1c36d2c2494e6da&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
          callback("Unable to connect to weather service!", undefined);
        } else if (body.error) {
          callback("Unable to find location", undefined);
        } else {
          callback(
            undefined,
            body.daily.data[0].summary +
              " It is currently " +
              body.currently.temperature +
              " degress out. There is a " +
              body.currently.precipProbability +
              "% chance of rain."
          );
        }
      });
    };
    
    module.exports = forecast;