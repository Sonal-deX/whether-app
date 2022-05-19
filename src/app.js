const express = require("express")
const Geo = require("./utils/geo")
const Whether = require("./utils/whether")
const path = require("path")

const app = express()

const templatePath = path.join(__dirname, "../templates")

app.set('view engine', 'hbs');
app.set('views', templatePath)

const publicDirPath = path.join(__dirname, "../public")
app.use(express.static(publicDirPath))

app.get('/', (req, res) => {
    res.render('index')
})

app.get("/whether", (req, res) => {
    if (!req.query.city) {
        res.send({ erorr: "city not given" })
    } else {
        Geo(req.query.city)
            .then((geodata) => {
                return Whether(geodata)

            })
            .then((whetherdata) => {
                if (whetherdata) {
                    res.send(whetherdata);
                } else {
                    res.send("Erorr To Find Whether");
                }
            })
            .catch((err) => {
                res.send(err);
            })
    }
})



app.listen(3000, () => console.log("Serevr Port is 3000"))