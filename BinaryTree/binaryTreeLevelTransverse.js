class Queue{
    constructor(size=5){
        this.data = [];
        this.front =-1;
        this.rear =-1;
        this.maxSize = size
        this.currSize = 0;
    }

    size(){
        return this.currSize
    }
    isEmpty(){
        return this.currSize==0
    }

    overflow(){
        return this.currSize == this.maxSize
    }

    enqueue(value){
        if(this.overflow()){
            throw new Error("Queue Overflow")
        }
        this.rear = (this.rear+1)% this.maxSize
        this.data[this.rear] =value
        if(this.currSize==0){
            this.front =this.rear;
        }
        this.currSize++
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error("Queue overflow")
        }
        this.front = (this.front+1)% this.maxSize
        this.currSize--;
        if(this.currSize==0){
            this.front =-1;
            this.rear =-1;
        }
    }

    getFront(){
        if(this.isEmpty()){
            throw new Error("Queue overflow")
        }
        return this.data[this.front];
    }
}

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
newTree.left.left = new Node(100)
// console.log(newTree)

function levelOrderTransverse(node){
    let q = new Queue();
    q.enqueue(node);
    q.enqueue("/")
    while(!q.isEmpty()){
        let frontNode = q.getFront()
        q.dequeue()
        if(frontNode == "/" && !q.isEmpty()){
            console.log("-----")
            q.enqueue('/') 
        }
        else{
            console.log(frontNode.data)
            frontNode.left != null && q.enqueue(frontNode.left)
            frontNode.right != null && q.enqueue(frontNode.right) 
        }
    }

}
levelOrderTransverse(newTree)