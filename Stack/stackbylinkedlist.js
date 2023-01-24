class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(size = 5) {
        []
        this.top = null; //represents the head
        this.length = 0;
        this.maxSize = size;
    }
    stackOverflow() {
        return this.length >= this.maxSize
    }

    stackUnderflow() {
        return this.length === 0
    }

    getTop() {
        if (this.stackUnderflow()) {
            console.log("No Element in Stack")
            return;
        }
        return this.top.value
    }

    push(value) {
        if (this.stackOverflow()) {
            console.log("Stack Overflow")
            return;
        }
        let newNode = new Node(value);
        newNode.next = this.top
        this.top = newNode;
        this.length++
    }

    pop(){
        if (this.stackUnderflow()) {
            console.log("No Element in Stack")
            return;
        }
        let nodeToBeDeleted = this.top
        this.top = this.top.next;
        nodeToBeDeleted = null  //memory is not continous..so to avoid memory leak the element has to be removedS
    }

}

let myStack = new Stack();
myStack.getTop()
myStack.push(10)
console.log(myStack.getTop())
myStack.push(20)
console.log(myStack.getTop())
myStack.push(30)
console.log(myStack.getTop())
myStack.pop()
console.log(myStack.getTop())