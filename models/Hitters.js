const mongoose = require("mongoose")
const Schema = mongoose.Schema

const hittersSchema = new Schema({

    Name: String,
    Team: String,
    G: String,
    PA: String,
    AB: String,
    H: String,
    "1B": String,
    "2B": String,
    "3B": String,
    HR: String,
    R: String,
    RBI: String,
    BB: String,
    IBB: String,
    SO: String,
    HBP: String,
    SF: String,
    SH:String,
    SB: String,
    CS: String,
    AVG: String,
    "BB%": String,
    "K%": String,
    "BB/K": String

})

module.exports = mongoose.model('hitters', hittersSchema)