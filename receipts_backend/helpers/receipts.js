var db = require('../models');

exports.getReceipts = function(req, res){
    db.Receipt.find()
    .then(function(receipts){
        res.json(receipts);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createReceipt = function(req, res){
  db.Receipt.create(req.body)
  .then(function(newReceipt){
      res.status(201).json(newReceipt);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getReceipt = function(req, res){
   db.Receipt.findById(req.params.receiptId)
   .then(function(foundReceipt){
       res.json(foundReceipt);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.updateReceipt =  function(req, res){
   db.Receipt.findOneAndUpdate({_id: req.params.receiptId}, req.body, {new: true})
   .then(function(receipt){
       res.json(receipt);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deleteReceipt = function(req, res){
   db.Receipt.remove({_id: req.params.receiptId}) 
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   .catch(function(err){
       res.send(err);
   })
}

module.exports = exports;