function IsPerfect(arr,n){
    let start =0;
    let end = n-1
    while(start<end){
        console.log(arr[start],arr[end])
        if(arr[start] == arr[end]) { end--;start++}
        else return 'NOT PERFECT'
    }
    return "PERFECT"
}
let arr =[1,2,3,2,1]
let n=arr.length
console.log(IsPerfect(arr,n))