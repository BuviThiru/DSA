function medianOfTwoSortedArray(arr1,arr2){

    let m = arr1.length
    let n = arr2.length
    if(m>n){
        return medianOfTwoSortedArray(arr2,arr1) //keep the first array which has less length to reduce time complexity

    }
    let start = 0;
    let end = m;

    let mergedArrayMid =Math.floor((m+n+1)/2) //+1 is to handle both odd n even length
    while(start<=end){
        let mid = parseInt((start+end)/2)
        let leftArr1Size = mid;
        let leftArr2Size = mergedArrayMid - mid;

        let leftArr1 = leftArr1Size>0? arr1[leftArr1Size-1] : Number.MIN_VALUE;
        let leftArr2 =  leftArr2Size>0 ? arr2[leftArr2Size] :Number.MIN_VALUE;
        let rightArr1 = leftArr1Size<m ?arr1[leftArr1Size]:Number.MAX_VALUE
        let rightArr2 = leftArr2Size<n ?arr2[leftArr2Size]:Number.MAX_VALUE
      
        if(leftArr1<=rightArr2 && leftArr2<=rightArr1){//when the partition is currect
           if((m+n)%2 == 0){ //if array has even numbers
             return Math.floor(((Math.max(leftArr1,leftArr2))+Math.min(rightArr1,rightArr2))/2)
           } else { //total numbers are odd
            return Math.max(leftArr1,leftArr2)

           }
        } else if(leftArr1>rightArr2){
            end = mid-1
        } else start = mid+1
    
    }
}

let arr1 = [1,3,4,6,7,11]
let arr2 = [2,5,9,10,12]
console.log(medianOfTwoSortedArray(arr1,arr2))