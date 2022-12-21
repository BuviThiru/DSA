
function fibonacci(n){
    if(n==1 || n==0) return n
    let fib = fibonacci(n-1) +fibonacci(n-2)
     return fib
}
console.log(fibonacci(6))