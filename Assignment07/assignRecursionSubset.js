// Find all subsets of an array arr using a backtracking algorithm"""

function subset(input,output){
  if(input.length==0){
    console.log(output);
    return
  }
  let firstchat =  input[0]
  output.push(firstchat)
  input.shift()
  subset (input,output)
  output.pop()
  subset(input,output)
  input.unshift(firstchat)
}
input = [1,2,3]
subset(input,[])