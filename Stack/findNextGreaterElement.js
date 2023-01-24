class Stack {
    constructor(size) {
        this.data = [];
        this.top = -1 
        this.maxSize = size; 
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

function nextGreaterElement(arr){
    let newStack = new Stack(arr.length)
    let output = new Array(arr.length)
    for(let i=0;i<arr.length;i++){
     
        while(!newStack.stackUnderflow() && arr[i]>arr[newStack.getTop()]){
            output[newStack.getTop()] = arr[i];
            newStack.pop()
        }
        newStack.push(i)

    }
    while(!newStack.stackUnderflow()){
        output[newStack.getTop()] =-1
        newStack.pop()
    }
    return output
}
let arr = [5,2,4,7,3,8,9,11,2,3]
console.log(nextGreaterElement(arr))


