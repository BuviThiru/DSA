function bucketSortFloatingnumbers(arr,numOfBuckets=10){
    let n = arr.length
  
  
    let bucket = new Array(numOfBuckets) //created bucket
    for(let i=0;i<numOfBuckets;i++){ //created array for each position
      bucket[i]= new Array()
    }
  
  
  for(let i=0;i<n;i++){
      let bucketIndex = Math.floor(arr[i]*10)//helps to find the bucket
      console.log(bucketIndex)
      bucket[bucketIndex].push(arr[i])
  }
  console.log(bucket)
  for(let i=0;i<bucket.length;i++){ //sorting each list
      bucket[i].sort((a,b)=>a-b)
  }

  
  //combining the sorted elements into orginal array
  let pointer = 0 //to have the index of input array
  for(let i=0;i<bucket.length;i++){
      for(let j=0;j<bucket[i].length;j++){ //itrate the 2d array and copy the valur to orginal array
          arr[pointer] = bucket[i][j]
          pointer++
      }
  }
}

let arr = [0.2,0.4,0.17,0.15,0.23,0.21,0.18,0.25,0.11]
bucketSortFloatingnumbers(arr)
console.log(arr)