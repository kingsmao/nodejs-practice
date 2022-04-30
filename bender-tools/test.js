const tools = require('../bender-tools/index.js')//index.js不写也行，自动找package.json中指定的main

const htmlStr = '<h1 tittle="abc"> 这是h1标签<span>123&nbsp;</span></h1>'

const str = tools.htmlEscape(htmlStr)

console.log(str)