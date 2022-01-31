
const findTotalDayOfGrowing = (upSpeed,downSpeed,desiredHeight) => {

    let days = 0
    let totalHeight = 0

    while(totalHeight < desiredHeight)
    {
        days++
        totalHeight += upSpeed

        if(totalHeight < desiredHeight)
            totalHeight -= downSpeed
    }

    return `morning of the ${days}. day.`

}


console.log(findTotalDayOfGrowing(100,10,100))
