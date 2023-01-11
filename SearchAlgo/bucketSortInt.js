function bucketSortInteger(arr,numOfBuckets){
  let n = arr.length
  let minEle = Math.min(...arr);
  let maxEle = Math.max(...arr);
  let range = maxEle-minEle
  let elementInEachBucket = Math.round(range/numOfBuckets)



  let bucket = new Array(numOfBuckets) //created bucket
  for(let i=0;i<numOfBuckets;i++){ //created array for each position
    bucket[i]= new Array()
  }
  console.log(elementInEachBucket)

for(let i=0;i<n;i++){
    let bucketIndex = Math.floor((arr[i]-minEle)/elementInEachBucket) //helps to find the bucket
    // console.log(bucketIndex)
    bucket[bucketIndex].push(arr[i])
}

for(let i=0;i<bucket.length;i++){ //sorting each list
    bucket[i].sort((a,b)=>a-b)
}
console.log(bucket)

//combining the sorted elements into orginal array
let pointer = 0 //to have the index of input array
for(let i=0;i<bucket.length;i++){
    for(let j=0;j<bucket[i].length;j++){ //itrate the 2d array and copy the valur to orginal array
        arr[pointer] = bucket[i][j]
        pointer++
    }
}

}
let arr = [2,4,17,15,23,21,18,25,11]
bucketSortInteger(arr,5)
console.log(arr)