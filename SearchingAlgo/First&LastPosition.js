// First and Last position of an element in a sorted array

function firstAndLastPosition(arr,start,end,target){

    let mid = parseInt((start+end)/2)
    if(arr[mid]==target){
        start = mid-1
        end= mid + 1
        first = mid-1
        second = mid +1
    }




}
let arr = [1,2,3,10,10,10,10,12,15]
console.log(firstAndLastPosition(arr,0,arr.length-1,10))