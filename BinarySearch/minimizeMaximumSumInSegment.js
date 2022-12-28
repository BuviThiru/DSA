function  checkMinSum(arr,n,val,segment){
    let seg = 1; let sum =0
    for(let i=0;i<=n;i++){
        if(arr[i]+sum>val){
            seg++
            sum = arr[i]           
        }
        else  {sum=sum + arr[i]        
        }
    }
    
 if(seg>segment) return false
 else return true
}




function minimizeMaximumSumInSegment(arr,n,segment){
let minimumSum = Math.max(...arr)
let maximumSum = 0
for(let i=0;i<=n;i++){
    maximumSum = maximumSum +arr[i]
}
let ans = 0
while(minimumSum<=maximumSum){
    let mid = parseInt((minimumSum+maximumSum)/2)
    let isMinSum = checkMinSum(arr,n,mid,segment)
    if(isMinSum){
        ans = mid
        maximumSum =mid-1
    }
    else {
        minimumSum = mid+1
    }
    // console.log(mid,isMinSum)
}
return ans
}
let arr = [1, 3, 2, 4, 10, 8, 10, 2, 5, 3]
let n =arr.length-1
console.log(minimizeMaximumSumInSegment(arr,n,4))