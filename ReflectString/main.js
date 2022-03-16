
const reflectString = (inputString) => {

    let resultString = "";
    for (let i = 0; i < inputString.length; i++) {
        if (inputString.charCodeAt(i) === 97)
            resultString += String.fromCharCode(122)
        else {
            let charCode = inputString.charCodeAt(i);
            let resultChar = String.fromCharCode(charCode - 1);
            resultString += resultChar;
        }
    }

    return resultString;
}

console.log(reflectString("isiadsifasif"))
