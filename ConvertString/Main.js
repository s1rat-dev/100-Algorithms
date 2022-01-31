
function convertString(mainString, targetString)
{

    for (let i = 0;i < targetString.length; i++)
    {
        if (mainString.indexOf(targetString[i]) === -1)
            return false
    }
    return true
}


console.log(convertString("s1rat1523","s15rat2"))
