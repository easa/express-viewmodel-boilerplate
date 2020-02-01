var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var juv = require('juv')
var loginViewmodel = require('../viewmodels/loginViewmodel')


router.get('/', function (req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/', [bodyParser(), juv(loginViewmodel)], function (req, res, next) {
  if (req.error) return next({ status: 403, message: req.error })
  res.redirect('/');
});

module.exports = router;
