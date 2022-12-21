function permutation(arr,index,temp=[...arr],ans=[]){ //to keep orginal array intact copying the values in temp array
    if(index>=arr.length){
        ans.push(temp.slice());     //temp.slice() because temp has only the address 
    }
for(let i=index;i<arr.length;i++){
    let Val =temp[index]
    temp[index] =temp[i]
    temp[i]=Val

    permutation(arr,index+1,temp,ans)

    Val =temp[index]   //passed by reference..so swapping it again to have the same array
    temp[index] =temp[i]
    temp[i]=Val
}
return ans
}
console.log(permutation([1,2,3],0))


// function permutation(arr,index,temp=[...arr],ans={}){ //to keep orginal array intact copying the values in temp array
//     if(index>=arr.length){
//         ans[temp.slice()] = temp.slice();     //temp.slice() because temp has only the address 
//     }
// for(let i=index;i<arr.length;i++){
//     let Val =temp[index]
//     temp[index] =temp[i]
//     temp[i]=Val

//     permutation(arr,index+1,temp,ans)

//     Val =temp[index]   //passed by reference..so swapping it again to have the same array
//     temp[index] =temp[i]
//     temp[i]=Val
// }
// return Object.values(ans)//returns array of values
// }
// console.log(permutation([1,1,1],0))



function permutation(temp,index,ans=[]){ //to keep orginal array intact copying the values in temp array
    if(index>=temp.length){
        ans.push(temp.slice());     //temp.slice() because temp has only the address 
    }
for(let i=index;i<temp.length;i++){
    let Val =temp[index]
    temp[index] =temp[i]
    temp[i]=Val

    permutation(temp,index+1,ans)

    Val =temp[index]   //passed by reference..so swapping it again to have the same array
    temp[index] =temp[i]
    temp[i]=Val
}
return ans
}
console.log(permutation([1,2,3],0))