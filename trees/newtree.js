class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      const newnode=new Node(value)
      if(this.root===null){
          this.root=newnode
      }
      else{
        let temp=this.root;
        while(true){
          if(value< temp.value){
              if(!temp.left){
                  temp.left=newnode;
                  return this
              }
              temp=temp.left;
          }
          else{
              if(!temp.right){
                  temp.right=newnode;
                  return this
              }
              temp=temp.right
          }
        }  
      }
    }
    lookup(value){

        var temp=this.root
        if(temp.value===value) return temp
        while(true){
          if(value<temp.value){
            if(value===temp.left){
                return temp
            } 
            temp=temp.left
          }
          else{
              if(value===temp.right){
                return temp
              }
              temp=temp.right
          }
      }
    }
    // remove
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  console.log(tree.lookup(1))
  JSON.stringify(traverse(tree.root))
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  
  
  
  
  