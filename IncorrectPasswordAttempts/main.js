
const checkIncorrectPasswordAttempts = (password,attempts) => {

    let failedAttempts = 0
    for (let attempt of attempts)
    {
        failedAttempts = attempt === password ? 0 : failedAttempts + 1
        if (failedAttempts === 10)
            return true
    }

    return false

}


console.log(checkIncorrectPasswordAttempts("1111",
    ["1111","1112","1113","1114","1115","1116","1117","1118","1119","1110","1111","1111"]))
