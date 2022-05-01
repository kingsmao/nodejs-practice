const express = require('express')
const app = express()

const mw = function (req, res, next) {

    console.log('我是局部中间件')
    var time = new Date()
    req.myTime = time
    next()

}

app.use((req, res, next) => {
    console.log('我是中间件2333')
    var time = new Date()
    req.myTime = time
    next()
})

// 第二个参数，局部中间件
app.get('/home', mw, (req, res) => {
    res.send('Home page ' + req.myTime)
})

app.get('/user', (req, res) => {
    res.send('User page')
})

app.listen(80, () => {
    console.log('server running at 9090')
})