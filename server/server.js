const express = require('express')
const cors = require('cors')
const connectDB = require('./database/connection')
const bodyParser = require('body-parser')

const app = express()

connectDB()

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/', require('./routes/router'))

app.listen(4000,console.log("Server started on port 4000"))