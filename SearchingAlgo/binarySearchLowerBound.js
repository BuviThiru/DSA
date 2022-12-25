// function binarySearchLowerBound(arr,x){
//     let n = arr.length;
//     let start =0
//     let end = n-1

//     while(start<=end){
    //     let mid = parseInt((start+end)/2)
//         if(arr[mid] ==x && arr[mid-1] !=x) return mid
//         else if( arr[mid] ==x && arr[mid-1] ==x) {
//             end = mid-1
//         }
//         else if(arr[mid]<x){
//             start = mid+1
//         }else end = mid-1
//        }}
// console.log(binarySearchLowerBound([1,2,3,4,5,10,10,10,10,11,15,16],10))

//optimised version

function binarySearchLowerBound(arr, x) {
    let n = arr.length;
    let start = 0
    let end = n - 1
      let ans = -1
    while (start <= end) {
        let mid = parseInt((start + end) / 2)
        if (arr[mid] == x) { ans = mid; end = mid - 1 }
        else if (arr[mid] < x) {
            start = mid + 1
        } 
        else end = mid - 1
    }
    return ans
}
console.log(binarySearchLowerBound([1, 2, 3, 4, 5, 10, 10, 10, 10, 11, 15, 16], 10))


