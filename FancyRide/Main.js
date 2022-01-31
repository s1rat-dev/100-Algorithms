
const fancyRide = (miles) => {
    const uberService = {
        0.3 : "UberX",
        0.5 : "UberXL",
        0.7 : "UberPlus",
        1 : "UberBlack",
        1.3 : "UberSUV"
    }

    for(let i = Object.keys(uberService).length - 1; i >= 0 ; i--)
    {
        if (Object.keys(uberService)[i] * miles <= 20)
            return Object.values(uberService)[i]
    }

    return "not found available package"

}

console.log(fancyRide(80))
