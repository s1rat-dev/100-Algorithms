const houseOfCats = (legs) =>
{

    return Math.floor(legs / 4) !== 0 ? [Math.floor(legs/4),Math.floor(legs/2)] : [Math.floor(legs/2)]
}


console.log(houseOfCats(14))
