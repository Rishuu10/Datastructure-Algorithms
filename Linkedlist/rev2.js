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
  var reverseBetween=(head,m,n)=>{
    let start=head;
    let tail=head;
    let position=1;
    let current=head;
    let listsofar=null;
    let k=0;
    while(position<=n){
        if(position===m-1){
            start=current;
        }
        if(position===m){
            tail=current;
        }
        if(position>m-1 && position<=n){
            var next=current.next;
            current.next=listsofar;
            listsofar=current;
            current=next;
            k=1;
        }
        position++;
        if(k===0){
          current=current.next;
        }
    }
    start.next=listsofar;
    tail.next=current;
    if(m>1){
        return head;
    }
    else{
        return listsofar
    }
 } 
console.log(printList(linkedList));
console.log('after reverse')
console.log(printList(reverseBetween(linkedList,2,4)))