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
newTree.left.left = new Node(50)
// console.log(newTree)
 
 
 function lowestCommonAncestor(node,p,q){
    if(node==null) {return null} //base case

    if(node.data==p || node.data==q){ return node}

    let leftSubTree = lowestCommonAncestor(node.left,p,q)
    let rightSubTree = lowestCommonAncestor(node.right,p,q)
  //when both the nodes exists in right and left subtree
    if(leftSubTree != null && rightSubTree != null) {return node} //when we get both the nodes then current node is the ancestor
  //when both nodes exists in one of the subtrees
    if(leftSubTree != null){
        return leftSubTree
    }else return rightSubTree
 }

 let LCA = lowestCommonAncestor(newTree,40,30)
 console.log(LCA)