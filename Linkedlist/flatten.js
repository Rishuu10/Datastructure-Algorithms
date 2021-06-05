class ListNode {
    constructor(val, next = null, prev = null, child = null) {
      this.val = val;
      this.next = next;
      this.prev = prev;
      this.child = child;
    }
  }
  
  // ---- Generate our linked list ----
  const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6]
  
  const buildMultiLevel = function(nodes) {
    const head = new ListNode(nodes[0]);
    let currentNode = head;
  
    for(let i = 1; i < nodes.length; i++) {
      const val = nodes[i];
      let nextNode;
  
      if(Array.isArray(val)) {
        nextNode = buildMultiLevel(val);
        currentNode.child = nextNode;
        continue;
      }
  
      nextNode = new ListNode(val);
      currentNode.next = nextNode;
      nextNode.prev = currentNode;
      currentNode = nextNode;
    }
    
    return head;
  }
  
  let multiLinkedList = buildMultiLevel(nodes);
  
  // ---- Generate our linked list ----
  
  const printListMulti = head => {
    if(!head) {
      return;
    }
  
    console.log(head.val)
  
    if(head.child) {
      printListMulti(head.child);
    }
  
    printListMulti(head.next);
  }
  
  const printList = head => {
    if(!head) {
      return;
    }
  
    console.log(head.val);
    
    printList(head.next);
  }
  var flatten = function(head) {
    let currentnode=head;
    let childnode=null;
    while(currentnode!==null){ // yaha pe traverse karr raha hu mai linked list ko current node se
        if(currentnode.child){ // yaha pe we are finding if child node is present
            childnode=currentnode.child
            while(childnode.next!==null){ // traverse karr raha hu nicche waali linked list
                childnode=childnode.next;
            }
            var nextnode=currentnode.next; // next node find karr raha hu mai yaha pe current ka
            // joining the first part of nicche waala linked list
            currentnode.child.prev=currentnode;
            currentnode.next=currentnode.child;
            // joining the last part of nicche waala linked list
            childnode.next=nextnode;
            if(nextnode!==null){
                nextnode.prev=childnode;
            }
            currentnode.child=null;
        }
        currentnode=currentnode.next;
    }
    return head;
};  
console.log(printList(multiLinkedList));
console.log('after flatten')
console.log(printList(flatten(multiLinkedList)))