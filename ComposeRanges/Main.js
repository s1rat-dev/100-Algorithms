
function composeRanges(numArray)
{
    let counter = 0
    let newArray = []

    while(counter < numArray.length)
    {
        let copyCounter = counter
        while(numArray[counter] + 1 === numArray[counter + 1])
            counter++

        let valueArray = copyCounter === counter ? `${numArray[copyCounter]}` : `${numArray[copyCounter]}->${numArray[counter]}`
        newArray.push(valueArray)
        counter++
    }
    return newArray
}
 
nums = [-1,0,1,2,5,6,9]
console.log(composeRanges(nums))
