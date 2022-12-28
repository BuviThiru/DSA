 function findUniqueElement(arr,end){
let start = 0
while(start<=end){
    let mid = start + parseInt((end-start)/2)
    if(arr[mid-1]!= arr[mid] && arr[mid+1]!= arr[mid]) return arr[mid]
    else{
        if( (mid%2==1 && arr[mid] ==arr[mid-1])||(mid%2==0 && arr[mid] == arr[mid+1])){
           start =mid+1            
        }
        else end =mid-1
    }
} 
}
let arr = [1,1,2,2,3,4,4,5,5,6,6,7,7]
let end = arr.length

console.log(findUniqueElement(arr,end))



