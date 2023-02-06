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
console.log(newTree)

console.log("____________________________________________________")

function searchElement(node,x){ //newtree is received as node --preorder node,left,right
    if(node ==null){
        return false
    }
    console.log(node.data)
if(node.data === x) return true
let leftResult = searchElement(node.left,x)
let rightResult = searchElement(node.right,x)
return leftResult || rightResult

}
let isPresent = searchElement(newTree,1000)
console.log(isPresent)
console.log("____________________________________________________")