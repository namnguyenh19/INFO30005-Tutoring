var mongoose = require('mongoose');

var moneySchema = mongoose.Schema({
    amount : Number,
    date : Date,
    type : { type: String, enum: ['expense', 'income'] },
    description : { type: String, lowercase: true, trim: true }
});

var recurringSchema = mongoose.Schema({
    amount : Number,
    payDate : Date,
    description : { type: String, lowercase: true, trim: true }
})

var budgetSchema = mongoose.Schema({
    _id : {
      type: String,
      index: {
        unique: true,
        required: true
      }
    },
    expenses : [moneySchema],
    income : [moneySchema],
    recurringCost : [recurringSchema]
});


// define our budget model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Budget', budgetSchema);
