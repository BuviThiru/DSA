// function PalinArray(arr,n){
//         function isPalindrome(num){
//             let str = ""+num
//             let start = 0, end = str.length-1
//             while(start<=end){
//                 if(str[start] !=str[end])
//                 return false
//                 else{
//                     start++
//                     end--
//                 }
//             }
//             return true
//         }
        
//  for(let i=0;i<arr.length;i++){
//    if( ! isPalindrome(arr[i])) return 0
    
//  }
//  return 1
//     }

// console.log(PalinArray([111,122,555]))

// let x ="4"
// let y = +x;
// console.log(typeof y)

// const a = [1, 2, 3];
// const b = [1, 2, 3];

// console.log(a == b);
// console.log(a === b);

// console.log([0] == 0)


let arr = [{id: 1, name: 'Chicken Spring Roll (4 pcs)', category: 'Finger Foods', description: '', cloudinaryImageId: 'zxjpyscy7yt23loud7y0', quantity:5},
 
{id: 2, name: 'Grillicken Spicy Drumstic (12pc-)', category: 'Grillicken', description: '', cloudinaryImageId: 'jih7g3bs8ano97jwprof'},
{id: 3, name: 'Grillicken Spicy Drumstic (12pc-)', category: 'Grillicken', description: '', cloudinaryImageId: 'jih7g3bs8ano97jwprof',quantity:2}
]

function findQuantity(id,arr){
    let y = arr.filter((x)=>x.id==id)
  
  
    if(y.length == 0) return "ADD"
    let quantity = y[0].quantity 
    if(!quantity) return "ADD"

     
}


let array = new Array()
console.log("Array length",array.length)