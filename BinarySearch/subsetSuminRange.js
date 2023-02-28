function subsetSum(arr,startInd,endInd,outputArr,currSum){
    if(endInd<startInd){
        outputArr.push(currSum);
        return;
    }
    //inclusion
    subsetSum(arr,startInd+1,endInd,outputArr,currSum+arr[startInd])
    //exclusion
    subsetSum(arr,startInd+1,endInd,outputArr,currSum)
}

function lowerBound(arr, key){
    let start = 0;
    let end = arr.length-1;
    let ans =-1;
    while(start <= end){
        let mid = parseInt((start+end)/2);
        if(arr[mid] >= key ){ //update ans and move towards left
            ans = mid;
            end = mid-1;
        }
        else{
            start=mid+1;
        }
    }
     if(ans === -1){
        return arr.length;
    }
    return ans; //key not found
}

function upperBound(arr, key){
    let start = 0;
    let end = arr.length-1;
    let ans =-1;
    while(start <= end){
        let mid = parseInt((start+end)/2);
        if(arr[mid] > key){
            ans = mid;
            end = mid-1;
        }
        else{
            start = mid+1;
        }
    }
    if(ans === -1){
        return arr.length;
    }
    return ans; 
}


function subsetSumInRange(arr,A,B){
    let n =arr.length;
    let count = 0
    let mid = parseInt(n/2)
    let leftSubArraySum = [];
    let rightSubArraySum = [];
    subsetSum(arr,0,mid,leftSubArraySum,0); //form the subset and calculate sum for left part
    subsetSum(arr,mid+1,n-1,rightSubArraySum,0); //right part
  
//sorone array
rightSubArraySum.sort((a,b)=>a-b)

for(let i=0;i<leftSubArraySum.length;i++){
    let currEle = leftSubArraySum[i]
    let low = A- currEle //gives the starting range to get A
    let high = B - currEle
    count += upperBound(rightSubArraySum,high) - lowerBound(rightSubArraySum,low);
}
return count;
}

 
let arr = [1, -2, 3];
let A = -1;
let B = 2;
console.log(subsetSumInRange(arr, A, B));