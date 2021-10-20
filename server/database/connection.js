const mongoose = require('mongoose')
const config = require("../config/config")

const connectDB = async () => {
    const con =  mongoose.connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log(`MongoDB connected`)).catch(err => console.log(err))
}

module.exports = connectDB