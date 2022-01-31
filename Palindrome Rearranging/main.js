
const isPanlindromeRearranging = (str) => {

    const charArray = str.split('')
    let charCount = {}
    let oddCounter = 0

    for (let char of charArray)
    {
        if (!charCount.hasOwnProperty(char))
            charCount[char] = 1
        else
            charCount[char]++
    }

    for (let key in charCount)
    {
        if (charCount[key] % 2 !== 0)
            oddCounter++
    }

    return !(oddCounter > 1)

}


console.log(isPanlindromeRearranging('aabb')) // true
console.log(isPanlindromeRearranging('aabbb')) // true
console.log(isPanlindromeRearranging('aaabbb')) // true
