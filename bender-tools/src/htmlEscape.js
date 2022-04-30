
function htmlEscape(htmlStr){
    return htmlStr.replace(/<|>|"|&/g, (match) => {
        switch (match){
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp'        
        }
    })
}

function htmlUnEscape(str){
   return ''
}
