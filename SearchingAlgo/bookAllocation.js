function isAllocationPossible(bookarray,n,numOfStu,value){
  let student = 1; let pages =0
  for(let i=0;i<n;i++){
    if(bookarray[i]>value) return false
    if(pages+bookarray[i]<=value){
        pages = pages+bookarray[i]
    }
    else{
         student++
        //  pages = 0
         pages +=bookarray[i]
    }
  }
  console.log(">>>>>>>>>>>>",value,student,pages)
  if(student==numOfStu) return true
  else return false
}


function minimumNumOfMaximumPages(bookarray,n,numOfStu){
  bookarray.sort((a,b)=>a-b)
  let minValue = bookarray[0]//act as start
  let maxValue = 0
  for(let i=0;i<n;i++){
    maxValue = maxValue+bookarray[i]
  }
  let ans =0
 while(minValue<=maxValue){
let mid= parseInt(( minValue+maxValue)/2)
 let isAllocated =  isAllocationPossible(bookarray,n,numOfStu,mid) 
 console.log(mid,isAllocated)
 if(isAllocated){
    ans = mid
    maxValue = mid-1
 }
 else minValue = mid+1 

 }
 return ans
}
let bookarray =[10,20,30,40]
let n = bookarray.length-1
console.log(minimumNumOfMaximumPages(bookarray,n,2))