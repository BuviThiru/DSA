function factorial(n){
if(n==1) return  1
let ans = n *factorial(n-1) 
return ans
}
console.log(factorial(5))