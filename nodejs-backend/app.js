var express = require('express');
var cors = require('cors');
var authRoutes = require('./routes/auth')
var carRoutes = require('./routes/cars')
var locationRoutes = require('./routes/locations')
var app = express();
var port = process.env.PORT || 5000;
// cors
app.use(cors())

app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

// routes
app.use('/users', authRoutes)
app.use('/cars', carRoutes)
app.use('/locations', locationRoutes)

require('dotenv').config();

const connection = require('./config/connection')

app.listen(port, function () {
    console.log('server running on ', port);
});
