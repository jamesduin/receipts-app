var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/receipts");

router.route('/')
 .get(helpers.getReceipts)
 .post(helpers.createReceipt)
 
router.route('/:receiptId')
  .get(helpers.getReceipt)
  .put(helpers.updateReceipt)
  .delete(helpers.deleteReceipt)
  
module.exports = router;