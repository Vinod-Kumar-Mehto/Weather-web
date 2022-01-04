const path = require("path")
const express = require("express")
const hbs = require('hbs')
const geocode = require('./gepcode')
const forecast = require('./weather')

console.log(__filename)
const app = express()
const public = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')
app.set("view engine", "hbs")
app.set('views', viewsPath)
hbs.registerPartials(partialPath)
app.use(express.static(public))
app.get("", (req, res) => {

    res.render('index', {
        title: "Weather App",
        name: "vinod"
    })
})
app.get("/about", (req, res) => {

    res.render('about', {
        title: 'about me',
        name: 'vinod kumar mahato'

    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Need help',
        say: 'say again what u need',
        name: 'Vinod Kumar Mehto'
    })

})
app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'must provide address'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }
        forecast(latitude, longitude, (error, forecast) => {
            if (error) {
                return res.send({ error })
            }
            res.send({ forecast, location })

        })


    })
    // res.send({
    //     tem: '44 deg',
    //     name: 'cidjdk dkdkdk'
    // })

})

app.get('/help/*', (req, res) => {
    res.render('artical')


})
app.get('*', (req, res) => {
    res.render('error')

})
app.listen(4000, () => {
    
})