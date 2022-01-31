
const extractEachKit = (numArray,k) => {

    return numArray.filter((num) => num % k !== 0)

}


console.log(extractEachKit([1,3,5,6,7,8,9,11,13,15],3))
