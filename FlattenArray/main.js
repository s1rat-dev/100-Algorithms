const detectArrayToFlat = (targetArray) => {

    let convertedArray = []

    targetArray.forEach((item) => {

        if(Array.isArray(item))
        {
            for (let i = 0; i<item.length; i++)
            {
                convertedArray.push(item[i])
            }
        }
        else
            convertedArray.push(item)
    })

    return convertToFlattenArray(convertedArray)
}


const convertToFlattenArray = (targetArray) => {

    let counterOfIncludingArrays = 0

    for(let item of targetArray)
    {
        if(Array.isArray(item))
            counterOfIncludingArrays++
    }

    if(counterOfIncludingArrays !== 0)
        return detectArrayToFlat(targetArray)

    return targetArray
}



console.log(convertToFlattenArray([[1],[1,2,[[[3]]]],[[[123]],2]]))
