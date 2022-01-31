
const isSequenceValues = (systemNames,stepNumbers) => {
    let checkerObject = {}

    if(systemNames.length !== stepNumbers.length)
    {
        console.log("arrays don't have same length")
        return false
    }

    for (let i = 0; i < systemNames.length; i++)
    {
        if(!checkerObject.hasOwnProperty(systemNames[i]))
            checkerObject[systemNames[i]] = stepNumbers[i]
        else
        {
            if(checkerObject[systemNames[i]] > stepNumbers[i])
                return false
            checkerObject[systemNames[i]] = stepNumbers[i]
        }
    }

    return true
}


console.log(isSequenceValues(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]))
