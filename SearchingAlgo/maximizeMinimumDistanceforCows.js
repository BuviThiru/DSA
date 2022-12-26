function isPossibleToPlaceCow(stallArray, n, numOfCows, distance) {
    let lastCowIndex = 0
    numOfCows-- //as first cow was placed at the index 0
    for (let i = 1; i < n; i++) {
        if (stallArray[i] >= stallArray[lastCowIndex] + distance) {
            lastCowIndex = i;
            numOfCows--
            if (numOfCows == 0) return true
        }
    }
    return false


}
// console.log(isPossibleToPlaceCow([1, 2, 4, 8, 9], 4, 3, 3))

function maximizeMinimumDistanceforCows(stallArray,n,numOfCows){
    stallArray.sort((a,b)=>a-b)
    let minDistance =1
    let maxDistance = stallArray[n]-stallArray[0]

    let ans =0;
    while(minDistance<=maxDistance){ 
        let mid = parseInt((minDistance+maxDistance)/2)
        let cowPlaced = isPossibleToPlaceCow(stallArray,n,numOfCows,mid)
        if(cowPlaced){
            ans = mid
            minDistance = mid+1
        }else maxDistance = mid-1
    }
    return ans
}
let stallArray=[1, 2, 4, 8, 9];
let n = stallArray.length-1
console.log(maximizeMinimumDistanceforCows(stallArray,n,4))