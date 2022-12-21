// if source has 1 disc ---> it needs 1 step to moveto destination
// if source has n dispatchEvent, we have to move n-1 disc to helper, nth disc to destination then n-1 disc from helper to destination
//so formula = tower(n-1)+1+tower(n-1)







// function towerOfHanoi(n){
//     if(n==1) return 1
//     if(n==2) return 3 

//    return towerOfHanoi(n-1)+1+towerOfHanoi(n-1)

// }
// console.log(towerOfHanoi(3))


// function towerOfHanoi(n){
//     if(n==0) return 0 //change in basecase  

//    return towerOfHanoi(n-1)+1+towerOfHanoi(n-1)

// }
// console.log(towerOfHanoi(3))


let count =0
function tower(n,s,h,d){
    if(n==1){ 
        count++    
        console.log(`Disc transferred from ${s} to ${d}`)
      return
    }

    tower(n-1,s,d,h)
    count++
    console.log(`Disc transferred from ${s} to ${d}`)
    tower(n-1,h,s,d)
}
tower(3,"S","H","D",0)
console.log(count)