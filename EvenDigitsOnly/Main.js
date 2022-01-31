

function evenDigitsOnly(num)
{
    let allNums = num.toString().split('')

    // let counter = 0
    // allNums.forEach((n) => {
    //     if( n % 2 !== 0)
    //         counter++
    // })
    //
    // return counter === 0

    return allNums.every((num) => parseInt(num) % 2 === 0)
}

console.log(evenDigitsOnly(224680))
