const request = require("request")

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?types=poi&access_token=pk.eyJ1Ijoidmlub2RrOTUiLCJhIjoiY2t2MHhveHI5MGowNTJvcGFjdnU5bG1wNCJ9.GtZy9blr7eDW8VBa0bEm5Q`
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unbale to connect to location services", undefined)
        } else if (response.body.features.length === 0) {
            callback("Unable to find.Please provide correct address", undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name,

            })
        }



    })
}

module.exports = geocode