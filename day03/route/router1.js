const express = require('express')

const router = express.Router()


router.get('/user',(req,res)=>{
    res.send('router.get user')
})

router.get('/age',(req,res)=>{
    res.send('router.get age')
})
module.exports = router
