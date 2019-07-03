var fs = require('fs');
var responseUtils = require('./responseUtils');

const getProfile = (req, res) => {
  return new Promise((resolve, reject) => {
    fs.readFile('./public/data/account.json', (err, data) => {
      if (err) {
        res.send(responseUtils.fail('NOT_LOGGED_IN'));
        reject(err);
        return;
      }
      let token = req.header('token');
      let json = JSON.parse(data.toString());
      let item = json.find(d => d.token === token);
      if (item) {
        resolve(item);
      } else {
        res.send(responseUtils.fail('NOT_LOGGED_IN'));
        reject('401');
      }
    })
  })
}

module.exports = {
  getProfile,
}