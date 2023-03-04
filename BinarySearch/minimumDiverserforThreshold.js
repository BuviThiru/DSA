var smallestDivisor = function(arr, threshold) {
    function isPossible(arr,threshold,diviser){
        ans = 0
        for(let i=0;i<arr.length;i++){
              ans += parseInt(arr[i]/diviser)
        }
        if(ans<=threshold) return true

    }
    let low = 1;
    let high = 0
    for(let i=0;i<arr.length;i++){
        high += arr[i]
    }
    let val = 0
    while(low<high){
        let mid = parseInt((low+high)/2)
        if(isPossible(arr,threshold,mid)){ 
            console.log(mid,low,high,ans)         
             val = mid;
             high = mid-1
        }else low = mid+1
    }
   return val 
};
let arr = [1,2,5,9]
let threshold = 6;
console.log(smallestDivisor(arr,threshold))