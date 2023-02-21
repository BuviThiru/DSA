function isBoquetPossible(bloomDay,mid, m,k){
    // console.log("called",mid)
    let adj = 0;
    let boquets = 0;
    for(let i=0;i<bloomDay.length;i++){
        if(bloomDay[i]<=mid){
            adj++
            if(adj==k) { boquets++; adj =0}
        }
        else{
            adj =0
        }
    }
    // console.log(boquets)
    if(boquets>=m) return true
    else return false      
}

function mBouquets(bloomDay,m,k){
    if(bloomDay.length<m*k) return -1
    
    let start = Math.min(...bloomDay);
    let end = Math.max(...bloomDay);
    let ans = Infinity
    while(start<=end){
           let mid = parseInt(start + (end-start)/2)
           if(isBoquetPossible(bloomDay,mid, m,k)){
             ans = Math.min(ans,mid)
            end = mid-1
           }
           else start = mid+1        
    }
    if(ans==Infinity) return -1
    else return ans

}
let bloomDay = [1,10,3,6,2]
console.log(mBouquets(bloomDay,4,3))