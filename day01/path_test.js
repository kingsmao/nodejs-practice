const path = require('path')

const p1 = path.join('/a','/b','/c','../','/d')

console.log(p1)

const p2 = path.join(p1,"test.txt")

console.log(p2)

const p3 = path.basename(p2)

console.log(p3)

const p4 = path.extname(path.join(__dirname,'from.txt'))

console.log(p4)