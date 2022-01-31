const convertToStringWithFixedWidth = (num,width) => {

    let stringedNum = num.toString()
    let numLength = stringedNum.length


    const addingNumber = (numsNeeded,originalString) => {
        let tempString = ''
        for(let i = 0; i < numsNeeded; i++)
        {
            tempString = tempString.concat('0')
        }
        return tempString.concat(originalString)
    }

    const lengthDifference = width - numLength
    return lengthDifference > 0 ?
        addingNumber(lengthDifference,stringedNum) :
        stringedNum.substring(numLength-width,numLength)
}


console.log(convertToStringWithFixedWidth(1234,25))
