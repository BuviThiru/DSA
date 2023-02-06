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
newTree.left.right = new Node(40)
// console.log(newTree)

function preOrderTransversal(node){
    if(node ==null){
        return
    }
    console.log(node.data)
   
    preOrderTransversal(node.left)
    preOrderTransversal(node.right)

}

preOrderTransversal(newTree)