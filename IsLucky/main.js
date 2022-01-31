// My solution
// const isLuckyTicketNumber = (num) => {
//     const stringedNum = num.toString()
//     const halfLength = stringedNum.length / 2
//     let firstHalfTotal = 0
//     let secondHalfTotal = 0
//
//     for(let i = 0; i < halfLength; i++)
//     {
//         firstHalfTotal += parseInt(stringedNum[i])
//         secondHalfTotal += parseInt(stringedNum[stringedNum.length-1 - i])
//     }
//
//
//     return firstHalfTotal === secondHalfTotal
// }
//

const isLucky = (num) => {

    const getTotal = (n) => {
        return n.split('').map((char) => parseInt(char) ).reduce((num1,num2) => num1 + num2)
    }

    const lucykNum = num.toString()
    const half = lucykNum.length / 2

    const firstHalf = getTotal(lucykNum.substring(0,half))
    const secondHalf = getTotal(lucykNum.substring(half, lucykNum.length))


    return firstHalf === secondHalf

}


console.log(isLucky(411501))
