const fs = require('fs')

fs.readFile('./from.txt','utf8',function(err,dataStr){
    if(err){
        return console.log('文件读取失败！' + err.message)
    }

    const arrOld = dataStr.split(' ')

    //console.log(arrOld)

    const arrNew = []
    arrOld.forEach(item =>{
        arrNew.push(item.replace('=','：'))
    })
    const str = arrNew.join('\r\n')

    console.log(str)

    fs.writeFile('./to.txt',str,function (err) {
        console.log(err)
    })
})

