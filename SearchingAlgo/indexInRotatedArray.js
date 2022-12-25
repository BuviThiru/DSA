function indexInRotatedArray(arr,n,target){//error
   let start =0;
   let end =n;
    while(start<=end){
        let mid = start +((end-start)/2)
        if(arr[mid]==target) return mid
        else if(arr[mid]<=end){
            end =mid-1
        }
        else start = mid+1
    }


}
let arr = [5,6,7,8,9,0,1,2,3,4]
n=arr.length-1
console.log(indexInRotatedArray(arr,n,9))