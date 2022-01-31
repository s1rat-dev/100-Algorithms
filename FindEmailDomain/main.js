
const findEmailDomain = (mailAdress) => {

    let indexOfDomain = mailAdress.indexOf("@")
    return mailAdress.slice(indexOfDomain + 1)

}

console.log(findEmailDomain('siratsemih@gmail.com'))
console.log(findEmailDomain('siratsemih@hotmail.com'))
console.log(findEmailDomain('siratsemih@deneme.com'))
