// function num(arr,n,x){
//     // arr.sort((a,b)=>a-b)
//     let count=0
//     let newarray =arr
// for(let i=0;i<n;i++){
//     // console.log("arr",arr)
//     //  newarray = [...arr]
//     // console.log("before",newarray)
//     newarray[i] = newarray[i]+1
//     console.log(newarray)
//     count++
//     let sum=0
//     for(let j=0;j<n;j++){
//         sum = sum+newarray[j]
//     }
//     let mean = sum/n
//     newarray.sort((a,b)=>a-b)
//     console.log("MEan", mean)
//     if(mean==newarray[x-1]) return count
// }
// }
// console.log(num([1, 3, 1],3,2))






// // function num(arr, n, x) {
// //     // arr.sort((a, b) => a - b)
// //     let count = 0
 
// //     for (let i = 0; i < n; i++) {
      
// //        arr[i] = arr[i] + 1
// //         count++
// //         let sum = 0
// //         for (let j = 0; j < n; j++) {
// //             sum = sum + arr[j]
// //         }
// //         let mean = parseInt(sum / n)
// //         arr.sort((a, b) => a - b)
// //         if (mean == arr[x - 1]) return count
// //     }
// // }
// //     console.log(num([1, 3, 1], 3, 2))



function num(arr,n,x){
    arr.sort((a,b)=>a-b)
 let sum = 0;
 for(let i=0;i<n;i++){
    sum = sum +arr[i]
 }
let mean = (sum+1)/n

let smallest = arr[x-2]
console.log(arr,mean ,smallest)
 let count = mean - smallest
 return count




}

console.log(num([1,3,1],3,2))