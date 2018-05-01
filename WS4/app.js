const express = require('express');
const app = express();

const router = require('./routes/routes');
const PORT = 3000;

app.set('view engine', 'ejs');

app.use('/', router);

app.listen(PORT, function () {
  console.log('App running');
})
