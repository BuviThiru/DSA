

function indexInRotatedArray(arr,n,target){
    let start =0;
    let end =n;
     while(start<=end){
         let mid = start +parseInt((end-start)/2)
         if(arr[mid]==target) return mid
         if(arr[start]<=arr[mid]){
            if(target>=arr[start] && target<arr[mid]){
                end = mid-1
            }else start = mid+1
         }else{
            console.log(mid)
            if(target>arr[mid]&& target<=arr[end]){
                start = mid+1
            }else end =mid-1
         }
     }
 return -1
 
 }
 let arr = [5,6,7,8,9,0,1,2,3,4]
 n=arr.length-1
 console.log(indexInRotatedArray(arr,n,4))