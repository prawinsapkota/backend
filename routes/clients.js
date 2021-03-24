var express = require('express');
var Client = require('../models/Client');
var passport = require('passport');

var router = express.Router();

router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
    
    console.log(req.user);
  res.json(req.user);
});



router.post('/register', (req, res, next) => {
    Client.register(new Client(req.body),
      req.body.password, (err, client) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({ err: err });
        }
        else {
          passport.authenticate('local')(req, res, () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, status: 'Registration Successful!' });
          });
        }
      });
  });

  router.post('/login', passport.authenticate('local'), (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ success: true, status: 'You are successfully logged in!', usertype:req.user.admin, userid:req.user._id, username:req.user.username });
  });







router.get('/logout', (req, res, next) => {
  if (req.client ) {
    req.session.destroy();
    res.clearCookie('session-id');
      res.statusCode = 200;
      res.send("You are logged Out");
      res.end();
   // res.redirect('/');
  } else {
    let err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});
  
  module.exports = router;