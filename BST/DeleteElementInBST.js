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

function greatestNodeInBST(node){ //after deleting a node we have to replace it with greatest element of left tree or smallest of right tree
  while(node.right != null){  // reach the last rightmost node to get max
  node = node.right }
  return node;
}

function deleteElementInBST(node,dataToBeDeleted){
    if(node ==null){
        return;
    }

   if(dataToBeDeleted < node.data){ //search the left part
    node.left = deleteElementInBST(node.left,dataToBeDeleted)
   }
   else if(dataToBeDeleted >node.data){ //search the right part
    node.right = deleteElementInBST(node.right,dataToBeDeleted);
   } else{ //when node is found
    //case 1: If the node is leafnode
    if(node.left ==null && node.right ==null){
        node = null;
    }
    //case 2: When the node has children
    else if(node.right && node.left){
        let greatestNodeInLeft = greatestNodeInBST(node.left);
        node.data = greatestNodeInLeft.data
        node.left = deleteElementInBST(node.left,node.data)
  
    }
    //case 3: When the node has one chil
    else{
        node = node.left || node.right
    }

   }
   return node
}



let myBST = insertElementInBST(null, 30);
insertElementInBST(myBST, 50);
insertElementInBST(myBST, 10);
insertElementInBST(myBST, 15);
insertElementInBST(myBST, 100);
insertElementInBST(myBST, 150);
insertElementInBST(myBST, 5);
inOrderTransversal(myBST);
console.log("=====================");
deleteElementInBST(myBST, 5);
deleteElementInBST(myBST, 10);
deleteElementInBST(myBST, 100);
deleteElementInBST(myBST, 150);
inOrderTransversal(myBST);