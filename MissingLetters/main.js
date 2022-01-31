
const findMissingLetter = (alphabetExample) => {

    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','p','r','s','t','u','v','w','x','y','z']
    const allLetters = alphabetExample.split('')
    const firstLetter = allLetters[0]

    if(firstLetter !== alphabet[0])
        return undefined

    for (let i = 0; i < allLetters.length; i++)
    {
        if(allLetters[i] !== alphabet[i])
            return alphabet[i]
    }

    return undefined
}



console.log(findMissingLetter('abcdefghijklmnp'))
