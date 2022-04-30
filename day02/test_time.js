const myDate = require('./dateFormat.js')
const monent = require('moment')
const myDate2 = require('../bender-tools/index.js')//index.js不写也行，自动找package.json中指定的main

const dt = new Date()

console.log(dt)

const newDt = myDate.dateFormat(dt)

console.log(newDt)

console.log('------------------')

const m = monent().format('YYYY-MM-DD HH:mm:ss')
console.log(m)


const newDt2 = myDate.dateFormat(dt)
console.log('------- bender-tools -----------')
console.log(newDt2)