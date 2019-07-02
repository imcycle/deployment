var fs = require('fs');
var responseUtils = require('./responseUtils');

const getProfile = (req, res, callback) => {
  fs.readFile('./public/data/account.json', (err, data) => {
    if (err) {
      res.send(responseUtils.fail('NOT_LOGGED_IN'));
      callback(err, null);
      return;
    }
    let token = req.header('token');
    let json = JSON.parse(data.toString());
    let item = json.find(d => d.token === token);
    if (item) {
      callback(null, item);
    } else {
      res.send(responseUtils.fail('NOT_LOGGED_IN'));
      callback('401', null);
    }
  })
}

module.exports = {
  getProfile,
}