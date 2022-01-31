
const factorializeANumber = (num) => {

    return num === 0 ? 1 : num * factorializeANumber(num-1)
}

console.log(factorializeANumber(10))
