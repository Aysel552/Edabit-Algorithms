// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function points(twoPointers, threePointers) {
	return (twoPointers * 2) + (threePointers * 3)
}

console.log(points(21,16))