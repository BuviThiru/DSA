function numberOfSubsequence(arr, n) {
    function factorial(num){
        let start = 1
        let fact = 1
       while(start<=num){
        fact = fact * 2
         start++
    }
    // console.log(fact)
return fact}
    
    let newArray = []
    for(let i=0;i<n;i++){
        if(newArray.includes(arr[i])) continue;
        else newArray.push(arr[i])
    }
let repeatedChar = n - newArray.length
let result = (factorial(n) - factorial(repeatedChar+1))-1
return result

}
let arr = [1,2,3,1]
let n = arr.length
console.log(numberOfSubsequence(arr ,n))


// function factorial(num){
//     let start = 1
//     let fact = 1
//    while(start<=num){
//     fact = fact * 2
//      start++
// }
// console.log(fact)}
// factorial(4)























// function simplyEqual(arr, n) {
//     let obj = {}
//     let count = 0
//     let min = Math.min(...arr)   
//     for (let i = 0; i < n; i++) {
//         if (obj[arr[i]]) {
//             obj[arr[i]] ++
//         }
//         else {
//             obj[arr[i]]=1
//         }
//     }
//     for(key in obj){
//         count = count + (key - min)
//     }
//     return count
// }
// console.log(simplyEqual([2,1,2], 3))



function addBy1(digits) {
    let singledigit = parseInt(digits.join(""))
    console.log(digits)
    console.log("Single",singledigit)
    let num = (singledigit + 1) +""
    console.log(num)
    let ans =  num.split("")
    for(let i=0;i<ans.length;i++){
        ans[i] = parseInt(ans[i])
    }
  return ans
    
};
addBy1([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])
