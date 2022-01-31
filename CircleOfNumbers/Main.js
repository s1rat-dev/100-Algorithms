
function circleOfNumbers(n,firstNumber)
{
    let halfWay = n / 2
    return (firstNumber < n) ? firstNumber + halfWay : firstNumber - halfWay
}

console.log(circleOfNumbers(10,2))
