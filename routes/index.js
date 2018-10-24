const express = require('express');
const router = express.Router();
const WordStream = require("../WordStream");

/* GET home page. */
router.get('/', function(req, res, next) {
  (new WordStream({word: "yes"})).pipe(res);
});

/* GET home page. */
router.get('/yes', function(req, res, next) {
  (new WordStream({word: "yes"})).pipe(res);
});

/* GET home page. */
router.get('/no', function(req, res, next) {
  (new WordStream({word: "no"})).pipe(res);
});

module.exports = router;
