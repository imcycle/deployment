var express = require('express');
var router = express.Router();
var projectStatusServices = require('../services/projectStatusServices');

/* GET home page. */
router.get('/', function (req, res, next) {
  projectStatusServices.query(null, (err, projectList) => {
    res.render('index', {
      userAgent: req.header('user-agent'),
      time: req._startTime,
      projectList,
    });
  })
});

module.exports = router;
