const axios = require("axios")

const getCity = (city) => {
    return new Promise((resolve, reject) => {
        const apiCorditates = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=e7191899fc9267273e9c0ec3ec98d5e7`

        axios.get(apiCorditates)
            .then((response) => {
                // handle success
                if (response.data[0]) {
                    resolve(response.data[0])
                }else{
                    reject("City Not Found, Check city ")
                }
            })
            .catch(() => {
                // handle error
                reject("Connection Error")
            })
    })
}

module.exports = getCity;