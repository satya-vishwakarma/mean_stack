const express = require('express');
const router = express.Router();
const config = require('../config/database');
const product = require('../models/product');


router.get('/get-all-product', (req, res, next) => {
console.log('sdfsdfnnnnnnnnnnnnnnnnnn');

product.getAllProduct({}, (err, user){
  if(err){
  console.log('Failed:' +err);
    res.json({success: false, msg: 'Failed to get product data'});
  }else{
    console.log('success');
  }

});



});

module.exports = router;
