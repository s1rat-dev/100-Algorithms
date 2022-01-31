
const findLargestOfFour = (arraysInArray) =>{
    
    let largestValues = []
    for(let i = 0; i < arraysInArray.length; i++)
    {
        largestValues.push(Math.max(...arraysInArray[i]))
    }

    return largestValues
}



console.log(findLargestOfFour([ [4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
