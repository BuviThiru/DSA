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

function binarySearchUpperBound(arr, x) {
    let n = arr.length;
    let start = 0
    let end = n - 1
      let ans = -1
    while (start <= end) {
        let mid = parseInt((start + end) / 2)
        if (arr[mid] == x) { ans = mid; start = mid +1 }
        else if (arr[mid] < x) {
            start = mid + 1
        } 
        else end = mid - 1
    }
    return ans
}

function firstAndLastPosition(arr,x){
   let firstPosition = binarySearchLowerBound(arr,x)
   let lastPosition = binarySearchUpperBound(arr,x)
   console.log(`First occurance  value ${x} is at the index ${firstPosition}` )
   console.log(`Last occurance of value ${x} is at the index ${lastPosition}` )
}

firstAndLastPosition([1,2,3,5,6,10,10,10,10,10,10,12,15,16],10)
