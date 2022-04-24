const fs = require('fs')

fs.writeFile('./test_fs.txt','tesssst',function(err){
    console.log(err)
})