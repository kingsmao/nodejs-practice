const express = require('express')
const app = express()

app.use(express.json())

app.post('/home', (req, res) => {

    console.log(req.body)//默认识别不了json格式数据，需要app.use(express.json())
    res.send('Home page ')
})

app.listen(80, () => {
    console.log('server running at 9090')
})