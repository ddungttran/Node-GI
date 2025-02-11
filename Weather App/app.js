const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const url = 'http://api.weatherstack.com/current?access_key=d4f136f6f6fe8fc8f1c36d2c2494e6da&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather services!')
    } else if (response.body.error) {
        console.log('Unable to find location.')
    }else{
        console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. There is a " + response.body.current.precip + "% chance of rain.")
    } 
})

// Geocoding
// Address --> Lat/Long --> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY3VyaW5kbjkyMSIsImEiOiJjbTRxMjRuYm8wMXVwMmlvcDUwNTlqaHM1In0.Cx6P8rfebid-SRNNZs5VRg';

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to locations services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    }else{
        const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
    } 
})



geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})