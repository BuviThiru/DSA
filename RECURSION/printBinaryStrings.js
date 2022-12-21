// function printBinaryStrin(num,output){
//     if(num==0){console.log(output);return}
//      printBinaryStrin(num-1,output+1)//calls for the previous numbers binary string like factorial
//      printBinaryStrin(num-1,output+0)
// }
// printBinaryStrin(2,"")

console.log("###################################################" )

function printBinaryWithoutCon1sStrin(num,output){
    if(num==0){console.log(output);return}
     printBinaryWithoutCon1sStrin(num-1,output+0)//calls for the previous numbers binary string like factorial
    //  console.log(output%10)
     if(output%10 != 1){ //checks if last digit is 1 n skips a call
     printBinaryWithoutCon1sStrin(num-1,output+1)}
}
printBinaryWithoutCon1sStrin(2,"")