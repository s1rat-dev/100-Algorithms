
function confirmEnding(string,targetString)
{
    let newStringLength = string.length - targetString.length

    return string.substr(newStringLength) === targetString
    // return string.endsWith(targetString)
//     ES2015 ile gelen method ile tek seferde kontrol de sağlanabilir.
}

console.log(confirmEnding("Sırat","at"))
console.log(confirmEnding("semih","iç"))
