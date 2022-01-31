const calculateHouseNumberSum = (housesNumbers) => {

    let total = 0;
    for(let i = 0; i < housesNumbers.length; i++)
    {
        if(housesNumbers[i] === 0)
            return total

        total += housesNumbers[i]
    }

    return total
}



console.log(calculateHouseNumberSum([1,3,6,2,5,0,7,0,1]))
