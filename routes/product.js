const express = require('express');
const router = express.Router();
const config = require('../config/database');
const product = require('../models/product');
const app = express();

router.post('/get-all-product', (req, res, next) => {

  product.getAllProduct({}, (err, product) => {
    if (err) throw err;
    if (!product) {
      return res.json({ success: false, msg: 'User not found' });
    }
    return res.json({ success: true, data: product });
  });
});


router.post('/save-product', (req, res) => {
  var product_data = {
    title: req.body.title,
    desccription: req.body.desccription,
    image: req.body.image,
    price: 'dd'
  }
  let products_2 = new products ({
    title: req.body.title,
    desccription: req.body.desccription,
    image: req.body.image,
    price: 'dd'
  });

  product.saveProduct(products_2,(err, product) => {
    if (err) throw err;
    if (!product) {
      return res.json({ success: false, msg: 'User not found' });
    }
    return res.json({ success: true, data: product });
   
  });
  
});




module.exports = router;
