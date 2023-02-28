function isPossibleToFit(A,B, numOfRec, sideOfSqur){
    return (parseInt(sideOfSqur/A) * parseInt(sideOfSqur/B)) >= numOfRec //by dividing the sideof square by heigth n width and their product gives total reactangle without rotating

}


function minSizeSquareToFitNReactangle(h,w,N){
    let start =0
    let end = Math.max(h,w)*N
    let ans =0 
    while(start<=end){
        let mid = parseInt((start+end)/2)
        if(isPossibleToFit(h,w,N,mid)){
            ans = mid;
            end = mid-1
        }else start = mid+1;
    }
    return ans;
}

let w= 2,h=3,N= 10;
console.log(minSizeSquareToFitNReactangle(h,w,N))
