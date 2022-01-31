
const findTotalNumsToConsecutive = (numsArray) =>
{
    const sortedArray = numsArray.sort((a,b) => a - b)
    const minNumber = sortedArray[0]
    const maxNumber = sortedArray[sortedArray.length - 1]

    return (maxNumber - minNumber) - (sortedArray.length - 1)
}


console.log(findTotalNumsToConsecutive([6, 1, 7, 8,5,10]))
