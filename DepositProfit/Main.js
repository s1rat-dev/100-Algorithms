
function  depositProfit(deposit,rate,expectedValue,yearCount = 0)
{
    if(expectedValue <= deposit)
        return yearCount

    let updatedDeposit = deposit + deposit * rate / 100
    return depositProfit(updatedDeposit,rate,expectedValue,yearCount+1)
}


console.log(depositProfit(100,20,170))
