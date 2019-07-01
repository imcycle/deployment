var express = require('express');
var router = express.Router();
const { spawn, } = require('child_process');

/* GET sh.  */
router.get('/', function (req, res, next) {
  let syncFile = spawn('sh', ['./public/shell/test.sh']);

  syncFile.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  syncFile.stderr.on('data', (data) => {
    console.log(`stderr:${data}`)
  })

  syncFile.on('close', (code) => {
    console.log(`子进程退出码：${code}`)
  })

  res.send('success');
});

module.exports = router;
