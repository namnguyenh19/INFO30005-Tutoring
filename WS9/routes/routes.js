const Budget = require('../models/Budget');

const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllers');

router.get('/', function (req, res) {
  res.render('index');
});

router.post('/budget', controller.createBudget);

router.get('/budget', controller.fetchAll);

router.get('/expenses', controller.fetchExpenses);

router.put('/budget/:id', controller.updateBudget);

module.exports = router;
