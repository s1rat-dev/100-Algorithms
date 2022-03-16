
const capitalizeCase = (noun) => {
    const firstChar = noun[0].toUpperCase();
    const restOfWord = noun.slice(1,noun.length).toLowerCase();

    return firstChar.concat(restOfWord);
}


console.log(capitalizeCase("dEnEmE"));
console.log(capitalizeCase("DEnEmE"));
console.log(capitalizeCase("deneme"));
