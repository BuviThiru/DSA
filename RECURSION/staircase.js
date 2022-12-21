//Number of steps allowed to jump is 1,2,3

function numberOfWays(steps){
    if(steps<0) return 0
    if(steps==1 || steps==0) return 1

    return numberOfWays(steps-1)+numberOfWays(steps-2)+numberOfWays(steps-3)

}
console.log(numberOfWays(3))