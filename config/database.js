require('dotenv').config();
module.exports = {
  // configure the code below with your username, password and mlab database information
 // database: 'mongodb://<username>:<password>@ds12226.mlab.com:12226/meanauthapp',   //prod
  database: process.env.DATABASE_URL,    //dev
  secret: 'yoursecret'
}
