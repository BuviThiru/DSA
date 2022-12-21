function isArraySorted(arr,n){
if(n<=0) return true
if(arr[n]<arr[n-1]) return false

return isArraySorted(arr,n-1)
}
let arr = [1,2,3,4,5,6,7,8]
let n =arr.length-1
console.log(isArraySorted(arr,n))