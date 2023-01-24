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

function stockSpan(arr){
    const newStack = new Stack(arr.length);
    const output = new Array(arr.length)

    for(let i=0;i<arr.length;i++){
        while(!newStack.stackUnderflow() && arr[newStack.getTop()]<= arr[i]){
            newStack.pop()
        }

        if(newStack.stackUnderflow()){
            output[i]=(i-(-1))

        }
        else{
            output[i] = (i-newStack.getTop())
        }
        newStack.push(i)
        
    }
    return output
}

let arr = [100,80,60,70,60,75,85]
console.log(stockSpan(arr))