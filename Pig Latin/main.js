
const pigLatin = (name) => {
    const letters = name.split('')
    const vowelRegex = /[aeiou]/

    if(vowelRegex.test(letters[0]))
    {
        return `${name}way`
    }

    while(!vowelRegex.test(letters[0]))
    {
        // delete first index and return an array
        const firstConstant = letters.splice(0,1)[0]
        letters.push(firstConstant)

    }

    const result = `${letters.join('')}ay`
    return result


}


console.log(pigLatin('eight'))
console.log(pigLatin('glove'))
