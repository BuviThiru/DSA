function findPeakElement(arr){
    let n = arr.length-1;
    let start = 0;
    let end = n
    while(start<=end){
        let mid = parseInt(start +(end-start)/2);
        if((mid==0 || arr[mid-1]<arr[mid])&&(mid==n || arr[mid]>arr[mid+1])){ //if mid == 0 or n or when the element has previous less and next max element
            return arr[mid]
        }
        else if(arr[mid-1]>arr[mid]){ end = mid-1}
        else start = mid+1
    }
}
let arr = [22,25,20,19,18,17,16,12]
console.log(findPeakElement(arr))