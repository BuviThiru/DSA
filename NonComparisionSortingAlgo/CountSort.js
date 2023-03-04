function countSort(arr){
let n = arr.length
let max = Math.max(...arr) //max element gives the range for frequency array
let freqArray = new Array(max+1).fill(0) //creates the frequency array and fills it with zero

for(let i=0;i<n;i++){
    freqArray[arr[i]]++  //at the element index frequency is created
}
// console.log(freqArray)
for(let i=1;i<freqArray.length;i++){//prefix sum array
    freqArray[i]=freqArray[i]+freqArray[i-1] //to get the occurance sum of the indexes is calculated
}
// console.log(freqArray)
let ans = new Array(n).fill(0)
for(let i=n-1;i>=0;i--){//to maintain stability the array is itrated from the last the element is added to the last occurance which is in frequency sum array
    let element = arr[i] 
    let index = freqArray[element]-1 //as this gives the position and we need index from zero -1 is  done
    ans[index] =element
    freqArray[element]-- //frequncy array  value is reduced for the next occurance
}

return ans

}
let arr = [1,2,4,5,1,2,2,3,5,4,6,7,0,6]
console.log(countSort(arr))

Problems
Courses
Job Fair
Contests
POTD





























































Javascript
Refresh

Time (IST)	Status	User	Lang	Code
2023-03-02 13:26:12	TLE	surajlokhzhzd	Javascript	View
2023-03-02 12:17:06	TLE	surajlokhzhzd	Javascript	View
2023-03-02 12:10:23	TLE	surajlokhzhzd	Javascript	View
2023-03-02 12:08:12	TLE	surajlokhzhzd	Javascript	View
2023-03-01 12:04:31	Correct	mohdbelmk0t	Javascript	View
2023-02-25 15:49:32	Correct	achava5mrt	Javascript	View
2023-02-23 08:55:02	Correct	gadipuditarun	Javascript	View
2023-02-17 00:02:59	Correct	way2mayan21v	Javascript	View
2023-02-16 17:07:28	Correct	debashislr3q	Javascript	View
2023-02-14 14:39:14	Correct	seenab45j	Javascript	View
2023-02-14 00:10:43	Correct	sisal0syl	Javascript	View
2023-02-14 00:10:06	Wrong	sisal0syl	Javascript	View
2023-02-11 15:11:55	Correct	moinghouseraza	Javascript	View
2023-02-09 12:52:07	Correct	cchithralekha01	Javascript	View
2023-02-09 01:54:53	Correct	p3jit	Javascript	View
2023-02-09 01:53:38	Wrong	p3jit	Javascript	View
2023-02-06 21:27:36	Correct	arielschfhzs	Javascript	View
2023-02-06 21:27:07	Wrong	arielschfhzs	Javascript	View
2023-02-06 21:26:40	RunTime Error	arielschfhzs	Javascript	View
2023-02-05 18:55:16	Correct	zahidhe16mt	Javascript	View
2023-01-31 21:07:41	Correct	prabhatthebadshah	Javascript	View
2023-01-30 15:41:42	Correct	mocpvwsaxyt3coaqz254gsxfs3z5eh4rrdcsstep	Javascript	View
2023-01-28 13:03:13	Correct	sunnywilson93	Javascript	View
2023-01-28 13:03:10	Correct	sunnywilson93	Javascript	View
Javascript (Node v12.19.0)
Average Time: 15m



           freqArray[index]--


 

Custom Input


//User function Template for javascript

/**
 * @param {string} arr
 * @returns {string}
*/

class Solution {
    //Function to arrange all letters of a string in lexicographical 
    //order using Counting Sort.
    countSort(arr)
    {
        //your code here
       let n=arr.length;

const ans = new Array(n).fill(0);
const count = new Array(26).fill(0);
    // console.log(arr);


for(let i=0; i<n; i++){
 let index = (arr[i].charCodeAt(0) - "a".charCodeAt(0));
  count[index]++;
}       
// console.log(count);

for(let j=1; j<count.length; j++){
  count[j] = count[j]+count[j-1];
}
// console.log(count);

for(let k=n-1; k>=0; k--){
  let val = arr[k].charCodeAt(0);
  let poss = count[val -  "a".charCodeAt(0)];
  let ind = poss-1;

  ans[ind] = arr[k];
  
  count[val -  "a".charCodeAt(0)]--
}

return (ans.join(""));

        
    }
}