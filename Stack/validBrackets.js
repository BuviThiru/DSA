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

function isOPeningBracket(bracket){
    const open = ["{", "[", "("]
    return open.indexOf(bracket) != -1
}



const matchingBracket = {
    "}" : "{",
    "]" : "[",
    ")": "("
}
function validBracket(string){
    let newStack = new Stack((string.length)/2) //half of the string only will have opening bracket

    for (const bracket of string){
        if(isOPeningBracket(bracket)){  //if it is opening bracket push into stack
            // console.log(bracket)
            newStack.push(bracket)
        }
        else {                                         //if closing bracket
            const pair = matchingBracket[bracket]      //find the opening pair of it
            const lastOpeningBracket = newStack.getTop(); //get the topmost bracket
            // console.log(pair,lastOpeningBracket)
             newStack.pop()      //pop the last element as we got it
             if(pair !== lastOpeningBracket) return false  //if doest match return false
        }
    }
    return newStack.stackUnderflow() //if stack is empty then return true
}

const string =  "{(){}[]}";
console.log(validBracket(string))


