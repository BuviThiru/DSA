class Stack { //error with pop
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
        // this.data[this.top] = null
        this.top--
    } 
    printStack(){
        console.log(this.data)
    }

}

function removeAdjacentElement(string){
    let newStack = new Stack(string.length)
    for(const char of string){
        if(newStack.stackUnderflow()){
            newStack.push(char)
        }else {
            let lastchar = newStack.getTop()
            if(lastchar === char){
                newStack.pop();           
            }
            else {newStack.push(char)};    
        }
    } 
    newStack.printStack()
  
}
let string = "aabccbd" 
removeAdjacentElement(string)