class Node{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

let newTree =new Node(10)
newTree.left = new Node(20)
newTree.right = new Node (20)
newTree.left.left = new Node(30)
newTree.left.right = new Node(40)
newTree.right.right = new Node(30)
newTree.right.left = new Node(40)


function isMirrorHelper(nodeLeft, nodeRight){
    if(nodeLeft ==null && nodeRight ==null){ return true} //reaches the leafnode and value is null 
    if(nodeLeft ==null || nodeRight==null) { return false} //reaches the leafnode and valuse is not null
    
    if(nodeLeft.data != nodeRight.data){ return false} //if value of data is not equal
    let result =false
    if(nodeLeft.data == nodeRight.data){
       result = isMirrorHelper(nodeLeft.left , nodeRight.right) &&  //if value is equal then call the function for next node
       isMirrorHelper(nodeLeft.right, nodeRight.left)
    }
return result
}




function isMirror(node){
    return isMirrorHelper(node,node) //call the helper function by providing the same tree for left n right subtree
}
console.log(isMirror(newTree))