var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/receipt-api');

mongoose.Promise = Promise;

module.exports.Receipt = require("./receipt");