let arr =[2,7,11,15] ;
let target = 9

function findPair(nums,target){
    let map = {};
    for(let i=0;i<nums.length;i++){    
        let value = nums[i]
        let complementaryValue = target - value
        
        if(map[complementaryValue] != undefined) {
      
               return [ map[complementaryValue],i]
        }else {
                map[value] = i            
        }
    }

}
console.log(findPair(arr,target))