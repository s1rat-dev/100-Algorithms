const firstDuplicateFinder = (numsArray) =>
{
    let firstDuplicatedItems = {}
    for (let item of numsArray)
    {
        if(firstDuplicatedItems.hasOwnProperty(item))
            return item

        firstDuplicatedItems[item] = item
    }

    return -1
}


console.log(firstDuplicateFinder([1,3,5,2,7,5,2,3]))
console.log(firstDuplicateFinder([1,3,2,7,5]))
console.log(firstDuplicateFinder([1,2]))
