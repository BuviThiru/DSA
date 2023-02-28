function minimumTimeForNCopies(A,B,N){
function isPossible(mid,numOfCopies,A,B){
     let CopiesByA = parseInt(mid/A)
     let CopiesByB = parseInt(mid/B)
     let total = CopiesByA+CopiesByB
     if(total>=numOfCopies) return true
     else return false
     

}
let min = 0
let max = Math.max(A,B)*N
let ans = 0
while(min<max){
    mid = parseInt((min+max)/2)
    if(isPossible(mid,N-1,A,B)){
        ans = mid
        max = mid-1
    }else min = mid+1
}    
return ans+ Math.min(A,B);
}

let A = 1,B=2,N=5;
console.log(minimumTimeForNCopies(A,B,N))