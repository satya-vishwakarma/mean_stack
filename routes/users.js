const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const common = require ('../common/common');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User ({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.status(201).json({success: true, msg: 'New User register successfully...'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.status(401).json({"status":401 ,"messages":"Authenticattion Required"});      
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        })
      } else {
        return res.status(401).json({"status":401 ,"messages":" The username or password is incorrect"});  
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});


/**
 * user list 
 */
router.get('/users',passport.authenticate('jwt', {session:false}), (req, res)=>{
  User.users(function (err,users){
    if(err) throw err;    
    return res.status(200).json(common.response(200,null ,users.length, users));
   });
});

module.exports = router;
