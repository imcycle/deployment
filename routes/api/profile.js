var express = require('express');
var router = express.Router();
var tokenUtils = require('../../utils/tokenUtils');
var responseUtils = require('../../utils/responseUtils');

/* POST profile listing. */
router.get('/', function (req, res, next) {
  tokenUtils.getProfile(req, res, (err, data) => {
    if (err) return;
    delete data.password;
    delete data.token;
    res.send(responseUtils.success(data));
  })
})

module.exports = router;
