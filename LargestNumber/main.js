

const createLargestNumber = (n) => {
    let stringedNum = ''
    for(let i = 0; i < n; i++)
    {
        stringedNum = stringedNum.concat('9')
    }

    return parseInt(stringedNum)
}


console.log(createLargestNumber(3))
