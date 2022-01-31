
// const originalDecodeOnNewNumeralSystem = (numberAsChar) => {
//     const numerals = []
//     let startCharCount = 65
//     let endCharCount = numberAsChar.charCodeAt(0)
//
//     while(startCharCount <= endCharCount)
//     {
//         const numeral = `${String.fromCharCode(startCharCount) + "+" + String.fromCharCode(endCharCount)}`
//         numerals.push(numeral)
//         startCharCount++
//         endCharCount--
//
//     }
//
//     return numerals
// }


// MY SOLUTION

const decodeOnNewNumeralSystem = (numAsChar) => {

    const numeralSystem = "ABCDEFGHIJ".split('')
    const numerals = []
    let charAsNumber = numeralSystem.indexOf(numAsChar)


    for (let i = 0; i <= charAsNumber / 2; i++)
    {
        const numeral = `${numeralSystem[i]} + ${numeralSystem[charAsNumber - i]}`
    }

    return numerals
}




console.log(decodeOnNewNumeralSystem('F'))
// console.log(originalDecodeOnNewNumeralSystem('F'))
console.log(decodeOnNewNumeralSystem('H'))
// console.log(originalDecodeOnNewNumeralSystem('H'))
