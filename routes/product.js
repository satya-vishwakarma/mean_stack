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
  let products_2 = new product ({
    title: req.body.title,
    desccription: req.body.desccription,
    image: req.body.image,
    price: req.body.price
  });

  product.saveProduct(products_2,(err, product) => {
    if (err) throw err;    
    return res.json({ success: true, data: product });
   
  });
  
});

router.post('/delete-product', (req, res, next) => {
console.log(req.body.primary_key);
  product.deletePoduct(req.body.primary_key, (err, product) => {
    if (err) throw err;
    if (!product) {
      return res.json({ success: false, msg: 'product has been deleted successfully....' });
    }
    return res.json({ success: true, data: product });
  });
});





module.exports = router;
