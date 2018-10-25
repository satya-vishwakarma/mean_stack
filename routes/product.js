const express = require('express');
const router = express.Router();
const config = require('../config/database');
const product = require('../models/product');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
 
  var request = req;
  console.log(req.body.desccription);
  //console.log('<>post ' + JSON.stringify(res.body.sdfsd));
  return res.send(JSON.stringify(res.body));
  //return  res.json({'data':'sdfsdfas'});
  /*
  product.saveProduct((err, product) => {
    if (err) throw err;
    if (!product) {
      return res.json({ success: false, msg: 'User not found' });
    }
    return res.json({ success: true, data: product });
   
  });
   */
});




module.exports = router;
