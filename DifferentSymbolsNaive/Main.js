

function differentSymbolsNaive(targetString)
{
    const stringChars = targetString.split('')
    let uniqueChars = []

    stringChars.forEach((char) => {
        if(!uniqueChars.includes(char))
            uniqueChars.push(char)
    })

    return uniqueChars.length
}

function otherWayToFindUnique(targetString)
{
    const uniqueChars = new Set()
    const stringChars = targetString.split('')

    stringChars.forEach((ch) => {
        uniqueChars.add(ch)
    })

    return uniqueChars.size

}



console.log(differentSymbolsNaive("abcaabdeefc"))
console.log(otherWayToFindUnique("abcaabdeefc"))
