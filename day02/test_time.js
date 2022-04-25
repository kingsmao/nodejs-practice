const myDate = require('./dateFormat.js')
const monent = require('moment')

const dt = new Date()

console.log(dt)

const newDt = myDate.dateFormat(dt)

console.log(newDt)

console.log('------------------')

const m = monent().format('YYYY-MM-DD HH:mm:ss')
console.log(m)