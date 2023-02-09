class Node {
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

let preOrder = [1,2,4,8,9,10,11,5,3,6,7] //node, left,right
let inOrder = [8,4,10,9,11,2,5,1,6,3,7]  //left ,node, right

function constructBT(preOrder,inOrder){
    constructBTHelper(preOrder,0,preOrder.length-1,inOrder,0,inOrder.length)
}

function  