
function crossingSum(matrix,num1,num2)
{
    const columnTotal = matrix[num1].reduce((a,b) => a + b)
    let rowTotal = 0;

    for(let i = 0; i < matrix.length; i++)
    {
        rowTotal += i !== num1 ? matrix[i][num2] : 0
    }

    return columnTotal + rowTotal
}


console.log(crossingSum([[1,1,1,1],[2,2,2,2],[3,3,3,3]],1,3))
