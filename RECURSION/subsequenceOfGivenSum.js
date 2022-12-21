// let targetSum = 4
// let ans = []
// function subset(input,output,value){
// if(input.length==0 ){
//  if(value==targetSum){ 
//     ans.push(output.slice()) } 
//     return
// }
//  let firstnum = input[0] //selects first character
//   input.shift() //remaining input after removal of first num

//  subset(input ,output ,value) //recursion call for exlcude
//  output.push(firstnum)  //include the num and call the recursion
//  subset(input,output,value+firstnum)
//  output.pop() //output array passed by reference s//backtracking
//  input.unshift(firstnum)//input array passed by reference //backtracking
// }
// let input = [1,2,3,4,5]
// subset(input,[],0)
// console.log(ans)


let targetSum = 10
let ans = {}
function subset(input,output,value){
 if(input.length==0 ){
 if(value==targetSum){ 
    ans[output] = output.slice()}
    return
}
 let firstnum = input[0] //selects first character
  input.shift() //remaining input after removal of first num

 subset(input ,output ,value) //recursion call for exlcude
 output.push(firstnum)  //include the num and call the recursion
 subset(input,output,value+firstnum)
 output.pop() //output array passed by reference s//backtracking
 input.unshift(firstnum)//input array passed by reference //backtracking
 return Object.values(ans)
}
let input = [2, 9, 10, 11, 2, 7, 6, 1, 5];
console.log(subset(input,[],0))
