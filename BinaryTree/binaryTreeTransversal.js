class Node{
    constructor(val){levelOrderTransverse
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
console.log(newTree)

console.log("____________________________________________________")



function preOrderTransversal(node){ //newtree is received as node --preorder node,left,right
    if(node ==null){
        return
    }
    console.log(node.data)
    preOrderTransversal(node.left)
    preOrderTransversal(node.right)

}
preOrderTransversal(newTree)
console.log("____________________________________________________")


function inOrderTransversal(node){ //newtree is received as node --inorder left,node, right
    if(node ==null){
        return
    }      
    inOrderTransversal(node.left)
    console.log(node.data)
    inOrderTransversal(node.right)
}

inOrderTransversal(newTree)
console.log("____________________________________________________")


function postOrderTransversal(node){ //newtree is received as node --preorder left,right,node
    if(node ==null){
        return
    }
   
   
    postOrderTransversal(node.left)
     postOrderTransversal(node.right)
    console.log(node.data)

}

postOrderTransversal(newTree)