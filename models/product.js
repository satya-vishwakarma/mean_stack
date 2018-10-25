const mongoose = require('mongoose');
const config = require('../config/database');

// Product Schema
const ProductSchema = mongoose.Schema ({
  title: {
    type: String,
    required : true
  },
  desccription: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

const products = module.exports = mongoose.model('products', ProductSchema);
module.exports.getAllProduct = function(find, callback) {
  products.find(find, callback);
}

module.exports.saveProduct = function(callback){
  console.log(callback);
  console.log('this models');
  return  333;
 // products.save(callback);
}
  
