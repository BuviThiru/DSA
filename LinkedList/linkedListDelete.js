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
        this.head = this.head.next
    }

    deleteAtTail(){
        let prevNode ;
        let current = this.head
        while(current.next!=null){
            prevNode = current
            current = current.next
           
        }
        current = prevNode
        current.next = null
        this.length--
    }
    deleteAtPosition(position){
        let count =0
        let current =this.head
        let prev;
        while(count<position){
             prev = current
             current = current.next
            count++
        }
       prev.next =current.next 

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