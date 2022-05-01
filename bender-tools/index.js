const myDate = require('/src/dataFormat.js')
const esc = require('/src/htmlEscape.js')

module.exports = {
    ...myDate,
    ...esc
}

