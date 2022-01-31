
const findLateTime = (minutes) => {



    const hoursTotal = Math.round(minutes / 60)
    const remainderMinutes = Math.round(minutes % 60)

    const result = getTotal(hoursTotal) + getTotal(remainderMinutes)

    return result
}

const getTotal = (num) => {
    return num.toString().split('').map((n) => parseInt(n)).reduce((num1,num2) => num1 + num2)
}

console.log(findLateTime(240))
