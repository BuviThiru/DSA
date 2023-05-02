class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head =null
        this.length =0
    }
    insertAtHead(data){
        let newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        this.length++
    }
    insertAtTail(data){
        let newNode = new Node(data)
        let current =this.head
        while(current.next!=null){
            current = current.next
        }
        current.next= newNode
        this.length++
    }
    insertAtMiddle(data,position){
        let newNode = new Node(data)
        let count=1
        let start = this.head
        while(count !=position){
            start = start.next
            count++
        }
        newNode.next = start.next
        start.next = newNode
        this.length++        
    }

    deleteAtHead(){
        if(!this.head){
            console.log("No element is present in the linked list")
        }
        current = this.head;
        this.head = this.head.next;
        current = null;
        this.length--
    }

    deleteAtTail(){
        if(this.head || !this.head.next){
            this.deleteAtHead();
            return;
        }     
        let current = this.head
        while(current.next.next){
            current = current.next;        
        }
        current.next = null
        this.length--
    }

    deleteAtPosition(position){
      if(position<0 || position>this.length){ //for invalid positions
          console.log("Position is invalid");
          return;
      }
      if(position == 1){
        this.deleteAtHead();
        return;
      }
      if(position ==this.length){
        this.deleteAtTail();
          return      }
          let count = 1;
          let current = this.head;
          while(count<position-1){
            count++;
            current = current.next;
          }
          let nodeToBeDeleted = current.next;
          current.next = current.next.next;
          nodeToBeDeleted = null;
          this.length--

    }

    printLinkedList(){
        let current = this.head
        while(current !=null){
            console.log(current)
            current = current.next
        }
    }
}
const linkedList = new SinglyLinkedList()
linkedList.insertAtHead(10)
linkedList.insertAtHead(20)
// linkedList.printLinkedList()
linkedList.insertAtTail(30)
linkedList.insertAtMiddle(50,2)
linkedList.printLinkedList()
linkedList.deleteAtPosition(1)
console.log("______________________________________________")
linkedList.printLinkedList()