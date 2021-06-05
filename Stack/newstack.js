class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top
    }
    push(value){
        if(this.bottom==null){
            var node=new Node(value)
            this.bottom=node;
            this.top=this.bottom;
            this.length=1;
        }
        else{
         var node=new Node(value);
         this.top.next=node;
         this.top=node;
         this.length++;   
        }
    }
    pop(){
        var currentnode=this.bottom;
        while(currentnode.next!==null){
            var prev=currentnode;
            currentnode=currentnode.next;
        }
        prev.next=null;
        this.top=prev;
        this.length--
    }
    isEmpty(){
        return this.bottom=null
    }
  }
  
  const myStack = new Stack();
  myStack.push("Google")
  myStack.push("Udemy")
  myStack.push("Discord")
  myStack.push("Twitter")
  myStack.pop()
console.log(myStack)