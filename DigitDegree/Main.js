
function digitDegree(num,counter= 1)
{

    let totalDigit = 0;

    while(Math.trunc(num) > 0)
    {
        let tempValue = Math.trunc(num % 10)
        totalDigit += tempValue
        num = num / 10
        console.log(totalDigit)
    }

    return totalDigit < 10 ? counter : digitDegree(totalDigit,counter+1)

}


console.log(digitDegree(999))
