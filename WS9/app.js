const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

//connect to db
const db = require('./models/db');
mongoose.connect(db.url);

/*
MIDDLE-WARE SETUPS
*/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

/**************************/

//set routes
const router = require('./routes/routes');

//set port
const PORT = 3000;

app.set('view engine', 'ejs');

// routes ==================================================
app.use('/', router);

app.listen(PORT, function () {
  console.log('App running');
})

// expose app
exports = module.exports = app;
