//https://pastebin.com/wkNfy7VF

/*ntonio got an array A consisting of N integers as his christmas present.
 
Antonio likes an array if and only if the sum of all elements of that array is odd. Like Antonio likes arrays [4,1,4], [2,2,1] etc. but not arrays [4,4], [2,6,2] etc.
 
Now to make array A of his likeness he can perform the belows operations on it :
 
Operation 1:
Remove exactly one element from the array.
Operation 2:
Divide every element of the array by 2.
Given array A, print the minimum number of above operations required to make array A of Antonio’s likeness(i.e. To make the sum of all elements of array A odd).


Sample Input 1
 
3
 
6 4 10
 
Sample Output 1
 
2
 
Explanation of Sample 1
 
One can perform the operations as :
 
First perform operation 1 and remove the first element of the array. Array A becomes = [4 10].
Then perform the second operation and divide each element of the array by 2. A becomes = [2 5].
Now Antonio likes array [2 5] because the sum of all elements of this array is 7, which is odd.

*/

function isSumOdd(arr){
    // console.log("isSumOdd")
    let sum =0
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i]
    }
    if(sum%2 !=0) return true
    else return false
}

function halfTheArray(arr){
    return arr.map((item)=>item/2)
    
}

function hasOddNum(arr){
    for(const key in arr){
        // console.log(key)
        if(arr[key]%2 != 0){
            arr.splice(key,1)
            return true
        }
    }
  return false
}

function numberOfOperations(arr){
    // console.log(arr)
    let operations = 0;
    if(isSumOdd(arr)) return operations
    // console.log(isSumOdd(arr))
    while(isSumOdd(arr)==false){
        console.log( "arr inside while",arr)
        if (hasOddNum(arr)){
            console.log("HAs odd num",arr)
            operations++
            if(isSumOdd(arr)) return operations

        }else{
            // console.log("else")
            arr = halfTheArray(arr)
            operations++
            console.log("Inside else",arr)
            if(isSumOdd(arr)) return operations
        }
    }
  
 return -1    
}

let arr =[60,40,60,200]
console.log(numberOfOperations(arr))
// console.log(isOdd(arr))
// console.log(halfTheArray(arr))
// console.log(hasOddNum(arr))
// console.log(arr)