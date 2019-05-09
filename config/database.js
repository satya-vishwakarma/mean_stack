require('dotenv').config();
module.exports = {
  // configure the code below with your username, password and mlab database information
   database: 'mongodb://satya11:Samsung1212@ds113648.mlab.com:13648/firetrack',   //prod
 // database: process.env.DATABASE_URL,    //dev
  port : process.env.PORT,
  secret: 'yoursecret'
}
