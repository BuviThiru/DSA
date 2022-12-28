//https://codeforces.com/contest/1324/problem/D
function findUpperboundIndex(arr,val){
    // console.log(arr,val)
    let start = 0;
    let end = arr.length -1
    while(start<=end){
        let mid = parseInt((start+end)/2)
        // console.log(mid)
        if((arr[mid]==val && arr[mid+1]>val)||(arr[mid]<val && arr[mid+1]>val)) return mid+1
        else if(arr[mid]<val){start =mid+1} 
        else { end =mid-1}
    }
    return arr.length

}
// console.log(findUpperboundIndex([0,1,2,3,4,5],4))



function possiblePairs(arr1,arr2){
    let n =arr1.length;
    let ans = []
    for(let i=0;i<n;i++){
       ans[i] = arr1[i]-arr2[i]
    }
     ans.sort((a,b)=>a-b)
     let totalPairs =0
    for(let i=0;i<n;i++){
        let val;
        if(ans[i]<0) {val = ans[i]*-1}
        else val =ans[i]
        let x = findUpperboundIndex(ans,val)        
        totalPairs = totalPairs +(n-x)
        // console.log(val,x,totalPairs)
    }
   return totalPairs
}
arr1 = [4,8,2,6,2]
arr2 =[4,5,4,1,3]
console.log(possiblePairs(arr1,arr2))