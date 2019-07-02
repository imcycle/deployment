var express = require('express');
var router = express.Router();
const { spawn, } = require('child_process');
var tokenUtils = require('../../utils/tokenUtils');
var responseUtils = require('../../utils/responseUtils');
var projectStatusServices = require('../../services/projectStatusServices');

/* POST publish listing. */
router.post('/', function (req, res, next) {
  tokenUtils.getProfile(req, res, (err, data) => {
    if (err) return;
    console.log(req.body.id)
    projectStatusServices.query({ id: req.body.id }, (err, data) => {
      console.log(data)
    })

    // let syncFile = spawn('sh', ['./public/shell/blog_react_ts.sh']);

    // syncFile.stdout.on('data', (data) => {
    //   console.log(`stdout: ${data}`);
    // });

    // syncFile.stderr.on('data', (data) => {
    //   console.log(`stderr:${data}`)
    // })

    // syncFile.on('close', (code) => {
    //   console.log(`子进程退出码：${code}`)
    // })

    res.send(responseUtils.success());
  })

})

module.exports = router;
