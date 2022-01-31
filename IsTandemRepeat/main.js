const isTandemRepeat = (targetString) => {
    const wordLength = targetString.length
    if(wordLength % 2 === 0)
    {
        const firstHalf = targetString.slice(0,wordLength / 2)
        const secondHalf = targetString.slice(wordLength / 2, wordLength)

        return firstHalf === secondHalf
    }

    return false
}



console.log(isTandemRepeat("tandemtandem"))
console.log(isTandemRepeat("t1andemtan1dem"))
console.log(isTandemRepeat("tandemt1andem"))
1
