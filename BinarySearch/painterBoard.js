function canPartitionWork(boardArray,numOfPainters, n,value){
    let painter =1;
    let board = 0;
    for(let i=0;i<n;i++){
        if(boardArray[i]>value) return false;
        if(boardArray[i]+board>value){
            board = boardArray[i]
            painter++
        }else{
            board += boardArray[i]
        }
    }
  if(painter>numOfPainters) return false
  else return true
}
let boardArray = [10,10,10,10]
let n = boardArray.length
// console.log(canPartitionWork(boardArray,2,n,50))

function painterBoards(boardArray,numOfPainters,n){
    let ans =0
    let minTime = Math.min(...boardArray)
    let maxTime = 0
    for(let i=0;i<n;i++){
        maxTime += boardArray[i]
    }
    while(minTime<=maxTime){
        let mid = parseInt((maxTime+maxTime)/2)
        let canPaint = canPartitionWork(boardArray,numOfPainters,n,mid)
        if(canPaint){
            ans = mid;
            maxTime = mid-1
        }
        else minTime =mid+1
    }
    return ans
}
console.log(painterBoards(boardArray,2,n))