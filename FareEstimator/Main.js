const fareEstimator = (rideTime,rideDistance,costPerMinute,costPerMile) =>
{
    const fareCost = []

    for (let i = 0; i < costPerMile.length; i++)
    {
        let totalCost = (rideTime * costPerMinute[i] + costPerMile[i] * rideDistance).toFixed(1)
        fareCost.push(totalCost)
    }


    return fareCost

}

console.log(fareEstimator(30,7,[0.2,0.35,0.4,0.45],[1.1,1.8,2.3,3.5]))
