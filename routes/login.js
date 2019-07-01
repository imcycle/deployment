var express = require('express');
var router = express.Router();
var fs = require('fs');
const { spawn, } = require('child_process');

/* GET login page. */
router.get('/', function (req, res, next) {
  res.render('login', {
    title: 'Express',
    // a: a,
    // b: b
  });
});

// function a() {
//   let syncFile = spawn('sh', ['./public/shell/test.sh']);
//   syncFile.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
//   });

//   syncFile.stderr.on('data', (data) => {
//     console.log(`stderr:${data}`)
//   })

//   syncFile.on('close', (code) => {
//     console.log(`子进程退出码：${code}`)
//   })

// }

// function b() {
//   fs.readFile('./public/data/account.json', (err, data) => {
//     if (err) return;
//     console.log(data.toString());
//   })
// }

module.exports = router;
