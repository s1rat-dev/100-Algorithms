
const findHtmlEndTag = (startTag) => {

    const splitTag = startTag.split(' ')
    let tagName = splitTag[0]
    tagName = tagName[tagName.length - 1] === '>' ? tagName.slice(1,-1) : tagName.slice(1)

    return '</' + tagName + '>'

}


console.log(findHtmlEndTag('<button type="button">'))
