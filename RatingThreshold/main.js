const detectThresholdRating = (threshold, ratings) => {

    const thresholdRatings = ratings.filter(rating => {
        const total = rating.reduce((previousValue, currentValue) => previousValue + currentValue);

        return total / rating.length < threshold;
    })

    return thresholdRatings;
}



console.log(detectThresholdRating(3.5, [[3,4],[3,3,3,4],[4]]));
