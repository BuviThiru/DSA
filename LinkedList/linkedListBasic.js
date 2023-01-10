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
linkedList.printLinkedList()
linkedList.insertAtTail(30)
linkedList.insertAtMiddle(50,2)
linkedList.printLinkedList()