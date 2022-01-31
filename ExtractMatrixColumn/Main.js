
const extractMatrixColumn = (matrix,k) => {

    let newColumn = []
    // for(let i = 0; i < matrix.length; i++)
    //     newColumn.push(matrix[i][k])

    matrix.forEach((col) => newColumn.push(col[k]))
    return newColumn
}

console.log(extractMatrixColumn([[1,4,7,8],[4,2,1,5],[9,7,11,5]],3))
