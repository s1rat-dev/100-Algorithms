
function containsDuplicates(array)
{
    return new Set(array).size !== array.length
}
// SET ile unique halini objeye dönüştürebiliyoruz.
// tekrar array haline döndürmek için, [...(spread)new Set(arrayAdı)] kullanabiliriz.


console.log(containsDuplicates([1,2,3,4,2]))
console.log(containsDuplicates([1,2,3,4]))
