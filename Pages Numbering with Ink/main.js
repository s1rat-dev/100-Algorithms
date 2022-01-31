
const pagesNumberingWithInk = (currentPage, numberOfDigits) => {
    const currentPageDigits = currentPage.toString().length

    while (numberOfDigits >= currentPageDigits)
    {
        numberOfDigits -= currentPageDigits
        if (numberOfDigits >= currentPageDigits)
            currentPage++
    }

    return currentPage

}


console.log(pagesNumberingWithInk(25,8))
