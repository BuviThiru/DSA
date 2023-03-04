function countSort(arr){
    let n = arr.length
    let freqMap = {}
    for(let i=0;i<n;i++){
        if(freqMap[arr[i]]){
            freqMap[arr[i]]++
        }
        else freqMap[arr[i]]=1
    }
    
    return freqMap
    
    }
    let arr = [1,2,4,5,-1,-2,-2,-3,5,-4,-6,7,0,-6]
    console.log(countSort(arr))