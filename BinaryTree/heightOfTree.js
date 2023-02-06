class Node{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

let newTree =new Node(10)
newTree.left = new Node(20)
newTree.right = new Node (30)
newTree.left.left = new Node(40)
newTree.left.right = new Node(50)
newTree.left.right.right = new Node(50)
newTree.left.right.right.left= new Node(50)
// console.log(newTree)

function heightOfTree(node){
    if(node==null){ return -1} //base case

    let leftHeight = heightOfTree(node.left)
    let rightHeight = heightOfTree(node.right)
    let height = 1+ Math.max(leftHeight,rightHeight) //height should take the maximum path..so max is taken into account
     return height
}
console.log(heightOfTree(newTree))