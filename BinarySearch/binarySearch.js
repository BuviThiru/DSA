// function binarysearch(arr,target){
//     let start = 0;
//     let end = arr.length-1
//     while(start<end){
//         let mid = parseInt((start+end)/2);
//         if(arr[mid]==target){
//             return mid
//         }
//         else if(arr[mid]<target){
//             start = mid+1
//         }
//         else end = mid-1
//     }
// return -1
// }
// let arr = [10,20,30,40,50,60]
// console.log(binarysearch(arr,150))

//recursion

function binarysearchRecursion(arr,start,end,target){
    let mid = parseInt((start+end)/2)
    if(arr[mid]==target) {return mid}
    if(arr[mid]>target){
        return binarysearchRecursion(arr,start,mid-1,target)
    }
    else return binarysearchRecursion(arr,mid+1,end,target)
}
let arr = [10,20,30,40,50,60]
console.log(binarysearchRecursion(arr,0,arr.length,50))