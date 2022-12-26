// function findTargetAndReturnSqrRoot(arr,target){
//     let start =0
//     let end =arr.length-1
//     while(start<=end){
//         let mid = start+parseInt((end-start)/2)
//         if(arr[mid]==target) return Math.sqrt(arr[mid])
//         else if(arr[mid]>target){
//             end =mid-1
//         }
//         else start = mid+1

//     }
// }
// let arr = [1,2,3,4,5,6,7,8,9,100]
// console.log(findTargetAndReturnSqrRoot(arr,9))



//tofixed give the number of digits after the decimal if x =3 ans a.aa
//toPrecision gives total number to the given x  ==ans a.aaa

// function findTargetAndReturnSqrRoot(arr,target,x){
//     let start =0
//     let end =arr.length-1
//     while(start<=end){
//         let mid = start+parseInt((end-start)/2)
//         if(arr[mid]==target) return Math.sqrt(arr[mid]).toFixed(x)
//         else if(arr[mid]>target){
//             end =mid-1
//         }
//         else start = mid+1

//     }
// }
// let arr = [1,2,3,4,5,6,7,8,9,100]
// console.log(findTargetAndReturnSqrRoot(arr,5,3))



function findTargetAndReturnSqrRoot(arr,target,precision){
    let start =0
    let end =arr.length-1
    while(start<=end){
        let mid = start+parseInt((end-start)/2)
        if(arr[mid]==target) return Math.sqrt(arr[mid]).toPrecision(precision)
        else if(arr[mid]>target){
            end =mid-1
        }
        else start = mid+1
    }
}
let arr = [1,2,3,4,5,6,7,8,9,100]
console.log(findTargetAndReturnSqrRoot(arr,5,3))