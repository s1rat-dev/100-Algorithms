
const findMaxMultiple = (divider,bound) => {
    return bound - (bound % divider)
}


console.log(findMaxMultiple(3,10))
