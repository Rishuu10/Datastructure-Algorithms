class Stack{
    constructor(){
        this.arr=[];
        this.arr.length=0;
    }
    push(value){
        this.arr.push(value);
    }
    pop(){
        this.arr.pop();
    }
    peek(){
        this.arr[this.arr.length-1];
    }
}
const myStack = new Stack();
  myStack.push("Google")
//   myStack.push("Udemy")
//   myStack.push("Discord")
  myStack.peek()
  console.log(myStack)