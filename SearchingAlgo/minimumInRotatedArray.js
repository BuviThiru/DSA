//here index of the smallest number also denotes the number of rotations


function findMinimumInRotatedArray(arr,start,end){
 console.log(n)
while(start<=end){ 
    let mid = parseInt(start +((end-start)/2))
    let next = (mid+1)%n
    let prev = (mid-1 +n)%n
    if(arr[prev]>arr[mid]&& arr[next]>arr[mid]){
        return mid}
    if(arr[mid]<=arr[end]){//if mid less than end, search the left part
        end = mid-1
    }
    else start = mid+1
}   
}
let arr = [5,6,7,8,9,1,2,3,4]
n=arr.length-1
console.log(findMinimumInRotatedArray(arr,0,n))



