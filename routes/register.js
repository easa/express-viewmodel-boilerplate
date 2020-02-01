var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var juv = require('juv')
var registerViewmodel = require('../viewmodels/registerViewmodel')


router.get('/', function (req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/', [bodyParser(), juv(registerViewmodel)], function (req, res, next) {
  if (req.error) return next(req.error)
  res.redirect('/login');
});

module.exports = router;
