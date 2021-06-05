class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  // ---- Generate our linked list ----
  const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);
  
  // ---- Generate our linked list ----
  
  const printList = (head) => {
    if(!head) {
      return;
    }
  
    console.log(head.val);
    printList(head.next);
  }
  var reverse=(head)=>{
      let prev=null;
      let curr=head;
      while(curr){
        let temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
      }
      return prev;
  }

console.log(printList(linkedList));
console.log('after reverse')
console.log(printList(reverse(linkedList)))

// optimum solution
