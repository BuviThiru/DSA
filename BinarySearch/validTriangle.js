function upperboundIndex(arr,val){
    let start =0
    let end = arr.length-1
    let ans = -1
    while(start<=end){
        let mid = parseInt(start+((end-start)/2))   
        if(arr[mid]>val){ //if num is greater than the value, we are searching the best greater in left
            ans= mid
            end = mid-1
           
        }else start = mid+1

    }
    if(ans==-1) return arr.length //as n-n = 0 for calculating the total upper bounds
    else return ans
}
// let arr = [1,2,3,4,6,8,9]
// let val = 3
// console.log(upperboundIndex(arr,val))

function validTriangle(arr){
arr.sort((a,b)=>a-b)
console.log(arr)
let ans =0;
let n= arr.length
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        let sumAB = arr[i]+arr[j] //find the sum
        ans += n - upperboundIndex(arr,sumAB) //and all the upperbounds will
    }
}
return ans
}

let arr = [5 ,2, 9 ,6];
console.log(validTriangle(arr))
let arr1 =[2,31,4,51,3,7]
arr1.sort()
console.log(arr1)