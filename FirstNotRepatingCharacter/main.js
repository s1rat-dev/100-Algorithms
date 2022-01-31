const firstNotRepeatingCharFinder = (targetString) => {

    const chars = targetString.split('')
    let charsProperties = {}

    chars.map((char) => {
        if(!charsProperties.hasOwnProperty(char))
        {
            charsProperties[char] = 1;
        }
        else
            charsProperties[char]++

    })

    for(let key in charsProperties)
    {
        if(charsProperties[key] === 1)
            return key
    }

    return 'all chars have repetition.'

}


console.log(firstNotRepeatingCharFinder('abcsabcdsd'))
