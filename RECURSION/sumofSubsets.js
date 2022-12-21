let ans = []
function subsetSums(arr,n,index,sum){
    
    if(index==n){
        ans.push(sum)
        ans.sort()
        return
    }
  subsetSums(arr,n,index+1,sum+arr[index])
  subsetSums(arr,n,index+1,sum)
 }
 subsetSums([2,3],2,0,0)
 console.log(ans)