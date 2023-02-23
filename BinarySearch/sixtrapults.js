function upperbound(arr,val){
    let start =0
    let end = arr.length-1
    let ans=-1;
    while(start<=end){
        let mid = parseInt(start + (end-start)/2)
        // console.log(mid)
        if(arr[mid] == val){
            ans = mid;
            start =mid+1
        }else if(arr[mid]>val){
            end = mid-1
        }
        else start = mid+1
    }
    if(ans==-1) return arr.length
    return ans+1
}
let arr1 = [
    8, 10, 10, 12,
   12, 15, 15, 18
 ]
// console.log(upperbound(arr1,12))


function lowerBound(arr,val){
    let start =0;
    let end = arr.length-1;
    let ans =-1;
    while(start<=end){
        let mid = parseInt(start+(end-start)/2)
        if(arr[mid]==val){
            // console.log("EQUAL TO VAL",arr[mid],val)
            ans = mid
            end = mid-1
        }else if(arr[mid]>val){
            end = mid-1
        }else start=mid+1
    }
    if(ans==-1) return arr.length
    return ans
}
// console.log(lowerBound ( arr1,8))

function sixtrapules(arr){
let n =arr.length;
let lhs =[];
let rhs = [];
let ans = 0
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        for(let k=0;k<n;k++){
            let lhsElement = arr[i]*arr[j]+arr[k]
            let rhsElement = (arr[j]+arr[k])*arr[i]
            lhs.push(lhsElement);
            rhs.push(rhsElement)
        }
    }
}
console.log(lhs,rhs)
rhs.sort((a,b)=>a-b) //to apply binary search

for(let i=0;i<lhs.length;i++){
    // console.log(lhs[i],upperbound(rhs,lhs[i]) ,lowerBound(rhs,lhs[i]),"OCC",upperbound(rhs,lhs[i]) - lowerBound(rhs,lhs[i]))
    ans += (upperbound(rhs,lhs[i]) - lowerBound(rhs,lhs[i])) //gives the occurance
    // console.log(ans)
}
return ans;
    
}
let arr =[-1,1]
console.log(sixtrapules(arr))