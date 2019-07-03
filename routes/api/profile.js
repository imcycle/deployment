var express = require('express');
var router = express.Router();
var tokenUtils = require('../../utils/tokenUtils');
var responseUtils = require('../../utils/responseUtils');

/* POST profile listing. */
router.get('/', function (req, res, next) {
  tokenUtils.getProfile(req, res)
    .then(profile => {
      delete profile.password;
      delete profile.token;
      res.send(responseUtils.success(profile));
    })
})

module.exports = router;
