class Node { //class to construct node
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function constructBTHelper(preOrder, preStart, preEnd, inOrder, inStart, inEnd) { //helper function
    if (preStart > preEnd || inStart > inEnd) { return null } //basecase

    let currentNode = new Node(preOrder[preStart]); //make the node with the data of preorder
    let nodeIndexInInorder = inOrder.indexOf(currentNode.data);
    console.log("CREATED NODE : " ,currentNode) //get the index of current node data in inorder array...to find the left and right part
    let numOfLeftElements = nodeIndexInInorder - inStart; //gives the number of right element

    currentNode.left = constructBTHelper(preOrder, preStart + 1, preStart + numOfLeftElements, inOrder, inStart, nodeIndexInInorder - 1)
    currentNode.right = constructBTHelper(preOrder, preStart + numOfLeftElements + 1, preEnd, inOrder, nodeIndexInInorder + 1, inEnd)
    return currentNode
}

function constructBT(preOrder, inOrder) {
    constructBTHelper(preOrder, 0, preOrder.length - 1, inOrder, 0, inOrder.length)
}
let preOrder = [1, 2, 4, 8, 9, 10, 11, 5, 3, 6, 7] //node, left,right ...gives the next node
let inOrder = [8, 4, 10, 9, 11, 2, 5, 1, 6, 3, 7]  //left ,node, right....gives the details of right and left node
let constructedTree = constructBT(preOrder, inOrder)

function preOrderTransversal(node) { //newtree is received as node --preorder node,left,right
    if (node == null) {
        //    console.log(null) ;
        return
    }
    // console.log("hai")
    console.log(node.data)
    preOrderTransversal(node.left)
    preOrderTransversal(node.right)

}
preOrderTransversal(constructedTree)