// Largest subarray with 0 sum
// https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1

// Method: Sliding window - varying length

// function maxLen(arr,n){
//     var obj={0:-1} //if sum of first two element is zero, then we need a zero key already
//     let sum =0;
//     let ans = 0;
//     for(let i=0;i<n;i++){
//         sum=sum+arr[i];
//         if(obj[sum] !=undefined){//value of zero index will be missed..so given as undefined
//             ans=Math.max(ans,i-obj[sum]) //to get the length from previous sum
//         }
//         else{
//             obj[sum]=i          
//         }
//     }
//     return ans
// }

// console.log(maxLen([15,-2,2,-8,1,7,10,23],8))



function lenOfLongSubarr(arr,n, k){
    let obj={0:-1}
    let ans = 0
    let sum =0
    for(let i=0;i<n;i++){
  
         sum = sum+ arr[i]
         let x = sum-k;
   
         if(obj[x]!== undefined){
            console.log(obj)
            console.log(i,"if")
            // obj[sum]=i
            ans= Math.max(ans, i-obj[x])
            console.log("ans",ans)
         }
         else{
             obj[sum]=i
         }
    }
  return ans
}
let arr =[-13, 0 ,6, 15 ,16, 2 ,15, -12, 17 ,-16 ,0 ,-3, 19, -3 ,2, -9 ,-6];
console.log(lenOfLongSubarr(arr,17,15))//ans 5


