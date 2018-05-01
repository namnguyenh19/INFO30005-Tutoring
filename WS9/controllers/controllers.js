var mongoose = require('mongoose');
var Budget = mongoose.model('Budget');

module.exports.createBudget = function(req, res) {
    var budget = new Budget({
        "_id": "1",
        "expenses": [
          {
              "amount": 1000,
              "date": "2017-07-31T14:00:00.000Z",
              "type": "expense",
              "description": "bubbletea"
          }
        ],
        "income": [
          {
              "amount": 55,
              "date": "2017-07-30T14:00:00.000Z",
              "type": "income",
              "description": "book sales"
          }
        ],
        "recurringCost": []
    });
    budget.save(function(err,newBudget){
      if(err){
          console.log(err.errmsg);
          res.status(400).send(err.errmsg);
      }else{
        res.send(newBudget);
      }
    });
};

module.exports.fetchAll = function(req, res) {
    var index = "1";
    console.log("fetching budget");
    Budget.findById(index,function(err,budget){
      if(!err && budget){
        res.send(budget);
      }else{
        console.log("fk");
        console.log(err);
        res.sendStatus(404);
      }
    });
}

module.exports.fetchExpenses = function (req, res) {
    Budget.find(function(err,budget){
      if(!err){
        res.send(budget.expenses);
      }else{
        res.sendStatus(404);
      }
    });
}

module.exports.updateBudget = function(req,res){
  Budget.update({_id: req.params.id}, {
      "expenses" : req.body.expenses,
      "income" : req.body.income,
      "recurringCost" : req.body.recurringCost
  }, function(err, affected, resp) {
    if(err){
      console.log(err.errmsg);
      res.status(400).send(err.errmsg);
    }else{
      res.send(resp);
    }
  });
};
