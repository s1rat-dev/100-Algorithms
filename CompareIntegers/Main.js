
function compareIntegers(mainInteger,targetInteger)
{
    if(mainInteger === targetInteger)
        return "equal"
    return mainInteger > targetInteger ? "greater" : "less"

    // return parseInt(mainInteger) > parseInt(targetInteger) ? "greater" : (parseInt(mainInteger) < parseInt(targetInteger)) ? "less" : "equal"
}



console.log(compareIntegers(5,6))
