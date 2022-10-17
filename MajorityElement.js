// Majority Element-- Moore Algorithm

function majorityElement(a, size)
    {
    let ele = a[0];
    let count =1
    
    for(let i=1;i<size;i++){//checks if there is any possibility of majority elements
        if(ele==a[i]){
            count++
        }
        else{
            count--
            if(count==0){
                ele=a[i];
                count=1
            }
        }
    }
    count=0
    for(let i=0;i<size;i++){//checks if the ele is majority element or not;
        if(a[i]==ele){
            count++
        }
    }
    if(count>parseInt(size/2)){
        return ele
    }
    return -1
    }
    let a =[2,4,7,2,2,1,2,2,8];
    let size= a.length;
    console.log(majorityElement(a,size))


    //Majority Element II --leetcode//it can have 1 element/2 element/0 element as majority element

    var majorityElement = function(nums) {
        let maj1 = undefined;
        let maj2= undefined;
        let count1 =0,count2 =0;
        let ans =[]
        for(let i=0;i<nums.length;i++){
            if(maj1==nums[i]){
                count1++
            }
            else if( maj2==nums[i]){
                count2++
            }
            else if(count1==0){
              maj1=nums[i] 
                count1=1
            }
            else if(count2==0){
                maj2=nums[i]
                count2=1
            }
            else{
                count1--
                count2--
            }
        }
       count1=0;
        count2=0;
        for(let i =0;i<nums.length;i++){
            if(maj1==nums[i]){
                count1++
            }
             else if(maj1 !=maj2 && nums[i]==maj2){ //if all elemts are same to rule out hte condition we have to check if maj1 is not equal to maj2
                count2++
            }
        }
       
        if(count1>parseInt(nums.length/3)) ans.push(maj1);
        if(count2>parseInt(nums.length/3)) ans.push(maj2);
        return ans
    };
    let nums = [1,1,2,3,4,1,1,5,6,7,1,1,8,9,10,1,11,12,13,14];
    console.log(majorityElement(nums))