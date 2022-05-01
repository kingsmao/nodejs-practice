const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log('我是中间件2333')
    var time = new Date()
    req.myTime = time
    next()
})



app.get('/home', (req, res) => {

    throw new Error('手工打造error')
    res.send('Home page ' + req.myTime)
})

app.use((err, req, res, next) => {
    console.log('我是错误中间件')
    console.log('内部发生错误' + err.message)
    res.send('Error:' + err.message)
})


app.listen(80, () => {
    console.log('server running at 9090')
})