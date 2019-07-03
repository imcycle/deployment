var express = require('express');
var router = express.Router();
var projectStatusServices = require('../services/projectStatusServices');

/* GET home page. */
router.get('/', function (req, res, next) {
  projectStatusServices.query(null)
    .then(projectList => {
      res.render('index', {
        userAgent: req.header('user-agent'),
        time: req._startTime,
        projectList,
      });
    })
    .catch(err => {

    })
});

module.exports = router;
