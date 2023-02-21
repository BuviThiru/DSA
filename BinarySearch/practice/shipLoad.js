
function isPossible(weights,days,x){
    console.log(">>>>>>>>>>>>>>>",x)
    let count= 1
    let sum =0
  for(let i=0;i<weights.length;i++){
    sum = sum +weights[i]
  
    if(sum>x) {sum=weights[i];count++;}
  }
  console.log(count)
  if(count>days ) return false;
  else {console.log("XXXXXXXXxx",x);return true}
}

var shipWithinDays = function(weights, days) {
    let start = Math.max(...weights)
    let end = 0
  for(const key of weights){
    // console.log(key)
    end += key
  }
 console.log("END",end)
    let ans = end

    while(start<=end){
        let mid = parseInt(start+((end-start)/2))
        console.log(mid)
        if(isPossible(weights,days,mid)){
            console.log("MID",mid)
            ans = Math.min(ans,mid)
            end = mid-1
        }else start = mid+1
       
    }
    return ans    
};
console.log( shipWithinDays([3,3,3,3,3,3],2))