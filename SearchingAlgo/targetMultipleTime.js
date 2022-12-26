function doesTargetOccurMultipleTimes(arr,target){
    let start =0;
    let end =arr.length-1;
    while(start<=end){
       let mid = parseInt((start+end)/2);
       if(arr[mid]==target){
        if(arr[mid-1] ==arr[mid] || arr[mid]==arr[mid+1]) return true
        else return false
       }
       else if(arr[mid]>target){
        end=mid-1
       }
       else start = mid+1
    }
}
arr =[1,2,3,4,5,5,5,6,7,8,8,9]
console.log(doesTargetOccurMultipleTimes(arr,8))