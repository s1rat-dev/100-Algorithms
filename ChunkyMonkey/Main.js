


function chunkyMonkey(array,num)
{
    let newArray = [];
    let count = 0;

    while(count < array.length)
    {
        newArray.push(array.slice(count,count += num))
    }

    return newArray
}

console.log(chunkyMonkey([1,2,3,4,5,6,7,8],2))
