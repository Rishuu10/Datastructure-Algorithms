class linkedlist{
    constructor(value){
        this.head={
            value:value,
            next:null
        };
        this.tail=this.head;
        this.length=1;
    }
    append(value){
        const newnode={
            value:value,
            next:null
        }
        this.tail.next=newnode;
        this.tail=newnode;
        this.length++;
        return this;
    }
    prepend(value){
        const newloda={
            value:value,
            next:this.head // current head
        }
        this.head=newloda, // new head
        this.length++;
    }
    printlist(){
        const arr=[];
        let currentnode=this.head;
        while(currentnode!==null){
            arr.push(currentnode.value);
            currentnode=currentnode.next;
        }
        return arr;
    }
    insert(index,value){
        var i=0;
        const newnode={
            value:value,
            next:null
        }
        let currentnode=this.head;
        let previousnode=this.head;
        while(i!==index){
            i++;
            if(i<=index-1){
                previousnode=previousnode.next;
            }
                currentnode=currentnode.next;
        }
        previousnode.next=newnode;
        newnode.next=currentnode;
    }
}
let meraloda=new linkedlist(10)
meraloda.append(5)
meraloda.append(15)
meraloda.prepend(39)
meraloda.insert(2,23)
meraloda.insert(4,23)
console.log(meraloda.printlist())


    