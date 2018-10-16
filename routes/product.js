const express = require('express');
const router = express.Router();
const config = require('../config/database');
const product = require('../models/product');

router.post('/get-all-product', (req, res, next) => {
 
 product.getAllProduct({}, (err, product) => {
    if(err) throw err;
    if(!product) {
      return res.json({success: false, msg: 'User not found'});
    }

 return res.json({success: true, data:product});


});
});


module.exports = router;
