const findClosestPair = (targetNums,sum) =>
{

    let distanceNums

    for (let i = 0; i < targetNums.length; i++)
    {
        for (let k = i+1; k < targetNums.length; k++)
        {
            if(targetNums[i] + targetNums[k] === sum)
                distanceNums = Math.abs(i-k) ? Math.abs(i-k) : distanceNums
        }
    }

    return (typeof distanceNums === "undefined") ? -1 : distanceNums


}


console.log(findClosestPair([1,3,5,1,1,2,5],7))
