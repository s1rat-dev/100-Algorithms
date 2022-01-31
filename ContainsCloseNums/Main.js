
function containsCloseNums(array,k,n=0)
{

    for(let i = n+1; i < array.length; i++)
    {
        if(array[n] === array[i] && Math.abs(n-i) <= k)
            return true
    }
    if (n < array.length)
        return containsCloseNums(array,k,n+1)

    return false
}


console.log(containsCloseNums( [0, 1, 2, 3, 5, 2],3))
console.log(containsCloseNums( [0, 1, 2, 3, 5, 2],2))
