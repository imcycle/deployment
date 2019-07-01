var express = require('express');
var router = express.Router();
const { spawn, } = require('child_process');

/* POST publish listing. */
router.get('/', function(req, res, next) {
    let syncFile = spawn('sh', ['./public/shell/blog_react_ts.sh']);

    syncFile.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    syncFile.stderr.on('data', (data) => {
        console.log(`stderr:${data}`)
    })

    syncFile.on('close', (code) => {
        console.log(`子进程退出码：${code}`)
    })

    res.send({
        code: 0,
        data: null,
        message: 'ok',
    })
})

module.exports = router;
