
const findLongestDigitsPrefix = (inputString) => {

    const digits = ['0','1','2','3','4','5','6','7','8','9']
    const chars = inputString.split('')
    let prefix = []

    for (let char of chars)
    {
        if(!digits.includes(char))
            break

        prefix.push(char)
    }

    return parseInt(prefix.join(''))
}


console.log(findLongestDigitsPrefix('192arab1'))
