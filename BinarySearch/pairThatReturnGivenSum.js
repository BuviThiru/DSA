function pairToGetTargetSum(arr,sum){
let start =0;
let end = arr.length-1
while(start<=end){
    let mid = parseInt((start+end)/2)
    if(arr[mid]+arr[mid+1]==sum) return [arr[mid],arr[mid+1]]
    else if(arr[mid]+arr[mid+1]>sum) end =mid-1
    else start = mid+1
}
return -1
}
console.log(pairToGetTargetSum([1,2,3,4,5,6,7],11))