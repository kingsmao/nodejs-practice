const http = require('http')

const server = http.createServer()

server.on('request', (req,res)=>{
    const url = req.url
    const method = req.method
    //const str = `-------url啊啊啊${url},------methodf点点滴滴${method}`
    //console.log(str)

    let content = '<h1>404 not found ! </h1>'
    if(url === '/' || url === '/index.html'){
        content = '<h1>首页</h1>'
    }
    if(url === '/about.html'){
        content = '<h1>about</h1>'
    }
    //解决中文乱码
    res.setHeader('Content-Type','text/html; charset=utf-8')
    //向客户端响应内容
    res.end(content)
})

server.listen(8089, ()=>{
    console.log('server running at 8089')
})
