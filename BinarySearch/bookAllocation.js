function isAllocationPossible(bookarray,n,numOfStu,value){
  let student = 1; let pages =0
  for(let i=0;i<=n;i++){
    if(bookarray[i]>value) return false
    if(pages+bookarray[i]>value){
      student++
       pages = bookarray[i]
      
    }
    else{
      pages = pages+bookarray[i]
    }
  }
  if(student>numOfStu) return false
else return true
}


function minimumNumOfMaximumPages(bookarray,n,numOfStu){
 
  let minValue = Math.min(...bookarray)
  // console.log(minValue)
  let maxValue = 0
  for(let i=0;i<=n;i++){
    maxValue = maxValue+bookarray[i]
  }
  // console.log(maxValue)
  let ans =0
 while(minValue<=maxValue){
let mid= parseInt(( minValue+maxValue)/2)
 let isAllocated =  isAllocationPossible(bookarray,n,numOfStu,mid) 
//  console.log(mid,isAllocated)
 if(isAllocated){
    ans = mid
    maxValue = mid-1
 }
 else minValue = mid+1 

 }
 return ans
}
let bookarray =[12,12,13,14]
let n = bookarray.length-1
console.log(minimumNumOfMaximumPages(bookarray,n,2))