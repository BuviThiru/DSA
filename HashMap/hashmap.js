class HashTable{
    constructor(size =5){
        this.maxSize = size;
        this.hashTable = new Array(this.maxSize);
        this.currentSize = 0;
    }
#hash(key){
    let hashvalue = 0;
    for(let i=0;i<key.length;i++){
        hashvalue += key[i].charCodeAt(0) *Math.pow(2,i)
    }
    let index = hashvalue % this.maxSize;
    return index;
}

set(key,value){
    
}

}