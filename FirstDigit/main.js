const firstDigitFinder = (targetString) => {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const chars = targetString.split('')

    return chars.filter((char) => digits.includes(parseInt(char)))[0]
}


console.log(firstDigitFinder('ab2c0'))
console.log(firstDigitFinder('_0as'))
console.log(firstDigitFinder('4for_'))
