function countSort(arr){
let n = arr.length
let max = Math.max(...arr) //max element gives the range for frequency array
let freqArray = new Array(max+1).fill(0) //creates the frequency array and fills it with zero

for(let i=0;i<n;i++){
    freqArray[arr[i]]++  //at the element index frequency is created
}
// console.log(freqArray)
for(let i=1;i<freqArray.length;i++){
    freqArray[i]=freqArray[i]+freqArray[i-1] //to get the occurance sum of the indexes is calculated
}
// console.log(freqArray)
let ans = new Array(n).fill(0)
for(let i=n-1;i>=0;i--){//to maintain stability the array is itrated from the last the element is added to the last occurance which is in frequency sum array
    let element = arr[i] 
    let index = freqArray[element]-1 //as this gives the position and we need index from zero -1 is  done
    ans[index] =element
    freqArray[element]-- //frequncy array value is reduced for the next occurance
}

return ans

}
let arr = [1,2,4,5,1,2,2,3,5,4,6,7,0,6]
console.log(countSort(arr))