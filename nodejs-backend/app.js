"use strict";
var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
require('dotenv').config();
var app = express();
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('server running on ', port);
});
