const fs = require('fs')

fs.readFile('./test_fs.txt','utf8',function (err,dataStr) {
    // console.log(err)
    // console.log('--------')
    // console.log(dataStr)

    if(err){
        return console.log('读取文件失败：' + err.message)
    }

    console.log('读取文件成功：' + dataStr)
}) 

fs.readFile