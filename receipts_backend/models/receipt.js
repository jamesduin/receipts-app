var mongoose = require('mongoose');

var receiptSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    value: {
        type: Number,
        required: 'Need to have a value',
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Receipt = mongoose.model('Receipt', receiptSchema);

module.exports = Receipt;