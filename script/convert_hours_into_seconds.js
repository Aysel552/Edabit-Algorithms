// Convert hours into seconds

function howManySeconds(hours) {
    return Math.floor(hours * 60 * 60)
}

console.log(howManySeconds(24))