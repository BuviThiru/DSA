function inOrderTransversal(node){ //newtree is received as node --inorder left,node, right
    if(node ==null){
        return
    }      
    inOrderTransversal(node.left)
    console.log(node.data)
    inOrderTransversal(node.right)
}

class Node {
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function insertElementInBST(node,data){
    if(node ==null){ //base case
        node = new Node(data)
        return node
    }

    if(data<node.data){
        node.left = insertElementInBST(node.left,data)
    }else {
        node.right = insertElementInBST(node.right,data)  
    }
    return node
}

let bstRoot = insertElementInBST(null, 30);
insertElementInBST(bstRoot, 10);
insertElementInBST(bstRoot, 100);
insertElementInBST(bstRoot, 20);
insertElementInBST(bstRoot, 70);
insertElementInBST(bstRoot, 5);
inOrderTransversal(bstRoot);
console.log("=====================");