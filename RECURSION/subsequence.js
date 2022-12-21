
// function subsequence(input,output){
//     if(input==""){
//         console.log(`"${output}"`);
//         return
//     }

//     let firstChar = input[0]
//     let remainingString = input.substring(1)

//     subsequence(remainingString , output)
//     subsequence(remainingString, output+firstChar)

// }
// subsequence("abc","")

let ans = []
function subset(input,output){
if(input.length==0){
    ans.push(output.slice())
    // console.log(output)
    return
}
 let firstnum = input[0] //selects first character
  input.shift() //remaining input after removal of first num

 subset(input ,output ) //recursion call for exlcude
 output.push(firstnum)  //include the num and call the recursion
 subset(input,output)
 output.pop() //output array passed by reference s//backtracking
 input.unshift(firstnum)//input array passed by reference //backtracking
}
let input = [1,2,3]
subset(input,[])
console.log(ans)