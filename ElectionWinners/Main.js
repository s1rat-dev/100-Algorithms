
function electionWinners(currentStateCandidates, remainVotes)
{
    let mostVote = Math.max(...currentStateCandidates)
    let counter = 0
    currentStateCandidates.forEach((candidate) => {
        if(candidate + remainVotes >= mostVote)
            counter++
    })
    return counter
}

console.log(electionWinners([1,2,4,6],4))
