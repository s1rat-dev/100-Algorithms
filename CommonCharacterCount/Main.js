function main(string1, string2)
{
    let counter = 0


    for(let i = 0; i < string1.length ; i++)
    {
        if(string2.indexOf(string1.charAt(i)) !== -1) {
            string2 = string2.replace(string1.charAt(i),"")
            counter++
        }
    }


    return counter
}

console.log(main("aabcc","adcaa"))
