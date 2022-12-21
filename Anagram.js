// function anagram(array){
   
//     let obj = {};
//     for(let i=0;i<array.length;i++){
//         let str = array[i].split("").sort().join("")
//         if(!obj[str]){
//             obj[str] =  [array[i]] 
//         }
//         else{
//             obj[str].push(array[i]) 
//         }
//     }
   
//   let result = Object.values(obj)  
//   return result;
// }
// console.log(anagram(["bat","ate","eat","tea","number","bernum","tee"]))


// function frequencyOfChar(string,char){
//     let count = 0;
//     for(let i=0;i<string.length;i++){
//         if(string[i]==char){
//             count++
//         }
//     }
// return count
// }
// console.log(frequencyOfChar("relevel","e"))


function firstNonRepeatingChar(str){
    let obj = {};
    for(let i=0;i<str.length;i++){
        if(!obj[str[i]]){ obj[str[i]]=1}
        else {obj[str[i]]++}
    }
    for(let i=0;i<str.length;i++){ //here string has to iterated 
        if(obj[str[i]]==1) return str[i]
    }
    return -1
}
console.log(firstNonRepeatingChar("cddfee"))