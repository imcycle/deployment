var express = require('express');
var router = express.Router();
var responseUtils = require('../../utils/responseUtils');

router.get('/', function (req, res, next) {
  res.send(responseUtils.success());
})

module.exports = router;
