const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllers');

router.get('/', function (req, res) {
  res.send('Hello World');
});

router.get('/users', controller.fetchAllUser);

router.get('/user/:id', controller.fetchOneUser);

module.exports = router;
