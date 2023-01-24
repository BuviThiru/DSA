class Stack {
    constructor(size = 3) {
        this.data = [];
        this.top = -1 //we will increase the first index to zero when we add element to stack
        this.maxSize = size; //only till this size we will add data
    }

    stackOverflow() {
        return this.top >= this.maxSize - 1
    }

    stackUnderflow() {
        return this.top == -1
    }

    getTop() {
        if (this.stackUnderflow()) {
            console.log("No Element in Stack");
            return;
        }
        return this.data[this.top];
    }

    push(value) {
        if (this.stackOverflow()) {
            console.log("Stack Overflow")
            return;
        }
        this.top++ //increase the index
        this.data[this.top] = value //add the value to that index
    }

    pop(){
        if (this.stackUnderflow()) {
            console.log("No Element in Stack");
            return;
        }
        this.top--
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