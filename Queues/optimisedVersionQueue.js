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


let myqueue = new Queue(5)
console.log(myqueue.isEmpty())
myqueue.enqueue(10)
console.log(myqueue.size())
console.log("Front",myqueue.getFront())
myqueue.size()
myqueue.enqueue(20)
console.log(myqueue.size())
console.log("Front",myqueue.getFront())
myqueue.enqueue(30)
console.log(myqueue.size())
console.log("Front",myqueue.getFront())
myqueue.enqueue(40)
console.log(myqueue.size())
console.log("Front",myqueue.getFront())
myqueue.dequeue()
console.log(myqueue.size())
console.log("Front",myqueue.getFront())
myqueue.dequeue()
console.log(myqueue.size())
console.log("Front",myqueue.getFront())
myqueue.dequeue()
console.log(myqueue.size())
console.log("Front",myqueue.getFront())