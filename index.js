const express = require('express')
const app = express()
const mongoose = require("mongoose")
const connectDB = require("./config/dataBaseCon")
const hitters = require("./models/Hitters")
const cors = require("cors")
const pitchers = require("./models/Pitchers")
const limit = require("express-rate-limit")

const limiter = limit({
    windowMs: 24 * 60 * 60 * 1000,
    max: 3,
    message: 'you reached the limit per day see you next time :)'
})

require("dotenv").config()

const port = process.env.PORT

connectDB()

app.use(express.json())
app.use(cors({
    origin: "*",
}))

app.get("/",limiter, (req, res) => {

    console.log("hello")
    res.send("API WORKING")

})

// app.post("/hitters", async (req, res) => {
//     const { name } = req.body

//     console.log(req.body)

//     try {

//         const data = await hitters.findOne({ Name: name },{Name:1,Team:1,AVG:1,OBP:1,SLG:1,"BB%":1,"K%":1})

//         res.json(data)
//     } catch (err) {
//         console.log(err.message)
//     }
// })

// app.get("/hitters", async (req, res) => {

//     const result = await hitters.find({},{Name:1})

//     console.log("here")

//     res.json(result)

// })

// app.get("/pitchers", async (req, res) => {

//     const result = await pitchers.find({}, {Name: 1})

//     console.log("here")

//     res.json(result)

// })

// app.post("/pitchers", async (req, res) => {

//     const { name } = req.body

//     console.log(name)

//     try {

//         const result = await pitchers.find({Name: name}, {Name:1,Team:1,ERA:1,WHIP:1,"K/9":1})

//         res.json(result)

//     } catch (err) {
//         console.log(err.message)
//     }

// })

// mongoose.connection.once('open', () => {
//     console.log("connected to mongodb")
    app.listen(port, () => console.log(`listening on port ${port}`))
// })
