
function companyBotStrategy(valueArray)
{
    let total = 0;
    let counter = 0;
    valueArray.forEach((item) => {
        if(item[1] === 1 )
        {
            total += item[0]
            counter++
        }
    })

    return total / counter
}


console.log(companyBotStrategy([ [3, 1], [6, 1], [4, 1], [5, 1]]))
