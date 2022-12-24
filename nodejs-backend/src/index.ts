const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
const port = process.env.PORT || 5000

require('../config/connection')

app.listen(port ,() => {
    console.log('server running on ', port)
})