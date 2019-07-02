var express = require('express');
var router = express.Router();
var fs = require('fs');
var responseUtils = require('../../utils/responseUtils');

/* POST login listing. */
router.post('/', function (req, res, next) {
  const { username, password } = req.body;
  fs.readFile('./public/data/account.json', (err, data) => {
    if (err) return;
    let json = JSON.parse(data.toString());
    let item = json.find(d => d.username === username && d.password === password);
    if (item) {
      res.send(responseUtils.success(item.token));
    } else {
      res.send(responseUtils.fail('PARAMETER_ERROR', '账号密码错误'));
    }
  })
})

module.exports = router;
