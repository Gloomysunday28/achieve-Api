const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()

app.use('/pr', express.static(path.resolve(__dirname, 'progress.html')))
app.get('/progress', (req, res) => {
  const filePath = path.resolve(__dirname, 'progress.txt')
  let stat = fs.statSync(filePath)
    res.set({
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename=1.txt',
        'Content-Length': stat.size
    })
    let rd = fs.createReadStream(filePath, {
        highWaterMark: 5000000
    }).pipe(res);
    rd.on('data',() => {
      console.log('martin', 3213)/* 2020年05月18日 15时13分00秒 */
    })
    rd.on('end', () => {
        console.log('文件发送完毕');
        try {
            fs.unlink(filePath,(err)=>{!err && console.log('文件已被成功下载，已删除文件')});
            result.remove();
        } catch (e) {
            console.log(e);
            res.send(404);
        }
    })
})

app.listen(3000)