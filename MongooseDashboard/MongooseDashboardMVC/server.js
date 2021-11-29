const { render } = require('ejs');
const { response } = require('express');
const express = require('express');

const path= require('path');
const {Routes}= require( './server/routes/routes');

const { RabbitModel } = require("./server/models/rabbitModel");
const app = express();
app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');
require('./server/config/database');
app.use(express.urlencoded({ extended: true }));
app.use('/rabbit/', Routes);
app.use(express.static(path.join(__dirname + '/Client/static')));














app.listen(8080, function () {
    console.log("The users server is running in port 8181.");
});