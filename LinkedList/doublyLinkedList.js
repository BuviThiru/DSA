class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    if (!this.head) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.length++;
  }
  insertAtTail(data) {
    if(!this.tail){
        this.insertAtHead(data);
        return
    }
    let newNode = new Node(data);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  } 

  insertAtGivenPosition(data,position){
    if(position<1 || position>this.length){
        console.log("Enter right position");
        return
    }
    if(position==1) { this.insertAtHead(data);return}
    if(position == this.length+1) {this.insertAtTail(data);return}
    let count = 1
    let current = this.head;
    while(count<position-1){
        count++;
        current = current.next;
    }  
let newNode = new Node(data);
newNode.prev = current;
newNode.next = current.next;
current.next = newNode;
newNode.next.prev = newNode;
this.length++;
}

//deletion in doubly linked list
deleteAtHead(){
    if(!this.head){
        console.log("No nodes in this linked List")
    }
    if(this.head.next==null){ //only one node is present, update tail to null
        this.tail=null
    }

    let current = this.head;
    this.head = this.head.next;
    current = null;
    this.length--
}


  printLinkedListData() {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
}
let DLL = new doublyLinkedList();
DLL.insertAtHead(20);
DLL.insertAtHead(200);
DLL.insertAtHead(2000);
DLL.insertAtHead(20000);
DLL.insertAtTail(10)   
DLL.insertAtGivenPosition(50,3) 
DLL.deleteAtHead();
DLL.deleteAtHead();
DLL.printLinkedListData();
