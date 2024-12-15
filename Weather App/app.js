const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=d4f136f6f6fe8fc8f1c36d2c2494e6da&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. There is a " + response.body.current.precip + "% chance of rain.")
})
