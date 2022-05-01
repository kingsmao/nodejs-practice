const express = require('express')
const app = express()
const router1 = require('./router1')
app.use('/api',router1)

app.listen(80, ()=>{
    console.log('server running 9090')
})

