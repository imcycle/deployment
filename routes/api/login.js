var express = require('express');
var router = express.Router();
var fs = require('fs');

/* POST login listing. */
router.post('/', function(req, res, next) {
    const { username, password } = req.body;
    fs.readFile('./public/data/account.json', (err, data) => {
        if (err) return;
        let json = JSON.parse(data.toString());
        let item = json.find(d => d.username === username && d.password === password);
        if (item) {
            res.send({
                code: 0,
                data: item.token,
                message: 'ok',
            });
        } else {
            res.send({
                code: 401,
                data: null,
                message: '账号或密码错误！',
            });
        }
    })
})

module.exports = router;
