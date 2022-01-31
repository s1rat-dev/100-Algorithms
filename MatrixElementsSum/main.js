
const matrixElementSum = (matrix) => {
    let totalNum = 0

    for(let i = 0; i < matrix.length; i++)
    {
        for(let k = 0; k < matrix[i].length; k++)
        {
            if(matrix[i][k] === 0)
                matrix[i][k] = 'x'
            else
                totalNum += matrix[i][k]
        }
    }
    console.log(matrix)
    return totalNum
}



console.log(matrixElementSum([[1,0,0,2],[1,5,0,3],[3,0,0,4]]))
