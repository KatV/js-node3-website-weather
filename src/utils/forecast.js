const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/3493fc54b0d9af7ed7b29b409e4c2af6/' + latitude + ',' + longitude + '?&units=auto'

    request({url, json: true}, (error, {body} ) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            const currentw = body.currently
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + currentw.temperature + ' degrees out. There is a ' + currentw.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast