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