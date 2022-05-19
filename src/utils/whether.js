const axios = require("axios")
const chalk = require("chalk")

const getWhether = (geoObject) => {
    
    const lat = geoObject.lat
    const lon = geoObject.lon
    const country = geoObject.country
    const state = geoObject.state
    return new Promise((resolve, reject) => {
        const apiWhether = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily&units=metric&appid=e7191899fc9267273e9c0ec3ec98d5e7`
        axios.get(apiWhether)
            .then((response) => {
                // handle success
                const timezone = response.data.timezone
                const temp = response.data.current.temp
                const tempFeels = response.data.current.feels_like
                const whether = response.data.current.weather[0].description
                const all = {Country:country , State:state , Timezone:timezone , Whether:whether , RealTemperature:temp ,Feels_Like:tempFeels}
                resolve(all)

            })
    })

}

module.exports = getWhether