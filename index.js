require("dotenv").config();
const express = require('express');

const sequelize = require('./config/connection');

const {Physician, Patient, Record } = require('./models')

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const allRoutes = require("./controllers");

app.use(allRoutes);


sequelize.sync({force:true}).then(function() {
    app.listen(PORT, function() {
        console.log('App listening on PORT ' + PORT);
    });
});