const fs = require('fs')

const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/

const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname + '/index.html'),'utf8',function (err,dataStr) {
    if(err){
        return console.log('读取文件失败：' + err.message)
    }
    console.log('读取文件成功：' + dataStr)

    resoleCSS(dataStr)
    resoleScript(dataStr)
}) 

function resoleCSS(htmlStr){
    const arrCSS = regStyle.exec(htmlStr)
    
    const cssss = arrCSS[0].replace('<style>','').replace('</style>','')
    write(cssss,'/clock.css')
}

function resoleScript(htmlStr){
    var arrScript = regScript.exec(htmlStr)
   
    var ssss = arrScript[0].replace('<script>','').replace('</script>','')
    write(ssss,'/clock.js')
}

function write(data,fileName){
    fs.writeFile(path.join(__dirname + fileName),data,function(err){
        console.log(err)
    })
}
