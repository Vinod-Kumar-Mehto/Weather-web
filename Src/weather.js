const request = require("request")

const weather = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=846eb4fe876d9fbc16a203587adcf634&query=${lat, long}&units=m`
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unbale to connect to location services", undefined)
        } else if (response.body.error) {
            callback("unable to find", undefined)
        } else {

            callback(undefined, response.body.current.weather_descriptions[0])


        }



    })
}

module.exports = weather