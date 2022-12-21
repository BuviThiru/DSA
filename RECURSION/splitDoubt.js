// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/559/

var plusOne = function(digits) {
           console.log("Input",digits)
    let num = (digits.join(""))
           console.log("Joined string" ,num)
     let num1 = (parseInt(num)+1)+"" 
          console.log("Joined string after adding 1" ,num1)
      let output = num1.split("")
     for(let i=0;i<output.length;i++){
         output[i]=parseInt(output[i])
     }
    return output  
};
let arr1 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3] //[ 6, 1, 4, 5, 3, 9, 0,1, 9, 5, 1, 8, 6, 7, 0, 5, 0, 0, 0]
let arr2 = [1,2,3,4,5] //[1,2,3,4,5,6]
let arr3 = [0,9,9,9] //[1,0,0,0]
console.log(plusOne(arr1))