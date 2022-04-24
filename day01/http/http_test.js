const http = require('http')

const server = http.createServer()

server.on('request',function(req,res){
    console.log('visit.......')
})

server.listen(8089,function(){
    console.log("server running at 8089")
})