const express = require('express')
const app = express()

//abc是访问前缀，可以不用
app.use('/abc',express.static('./files'))

app.listen(80,()=>{
    console.log('server running at 9090')
})