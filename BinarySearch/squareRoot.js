//for perfect squares
function squareRoot(num){

    let start = 0;
    let end = num;
    while(start<=end){
        let mid = parseInt((start +end)/2)
        if(mid*mid == num) return mid
        else if(mid*mid>num) end = mid
        else start =mid
    }
}
console.log(squareRoot(16))

//for all numbers

// function squareRootOfAnyNum(number){
//     let start =0;
//     end = number;
//     let ans = 0;
//     while(start<=end){
//         let mid = parseInt((start+end)/2)
//         if(mid*mid <=number) {ans = mid;start =mid+1}
//         else  end =mid-1
//     }

// return ans

// }
// console.log(squareRootOfAnyNum(20))

//answer with precision
function squareRootOfAnyNum(number,precision){
    let start =0;
    end = number;
    let ans = 0.0;
    while(start<=end){
        let mid = (start+end)/2
        if(mid*mid <=number) {ans = mid;start =mid+1}
        else  end =mid-1
    }

let add =0.1
while(precision>0){
    ans +=add;
    while(ans*ans<=number){
         ans=ans+add
    }
    ans=ans-add
    add = add/10;
    precision--
}
return ans
}
console.log(squareRootOfAnyNum(20,4))
console.log(squareRootOfAnyNum(25,3))