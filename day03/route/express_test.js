const express = require('express')
const app = express()
app.listen(8089,()=>{
    console.log('experss server running at 8089')
})


app.get('/user',(req,res)=>{
    res.send({name:'bender',age:'1123'})
})

app.post('/user',(req,res)=>{
    res.send('请求成功')
})

app.get('/params',(req,res)=>{
    var age = req.query.age
    var name = req.query.name
    console.log(age)
    console.log(name)
    res.send(req.query)
})

//id是内部形参，外部传过来的参数可以是任意名字
//http://127.0.0.1:8089/user/1/bender
app.get('/user/:id/:name',(req,res)=>{
    res.send(req.params)
})
