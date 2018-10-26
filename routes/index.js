const express = require('express');
const router = express.Router();
const WordStream = require("../WordStream");

router.get('/', function(req, res, next) {
  (new WordStream({word: "yes"})).pipe(res);
});

router.get('/yes', function(req, res, next) {
  (new WordStream({word: "yes"})).pipe(res);
});

router.get('/no', function(req, res, next) {
  (new WordStream({word: "no"})).pipe(res);
});

module.exports = router;
