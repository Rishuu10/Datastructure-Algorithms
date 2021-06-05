// function of setting and getting the data at given address
class HashTable {
  constructor(size){
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  // set function 
  set(key,value){
    let address=this._hash(key)  // assigning the generated value of key to address
    if(!this.data[address]){ // if address is less then item is inserted in same array
      this.data[address]=[]; // assigning the value of empty array to this.data[address]
    }
    this.data[address].push([key,value]) // pushing the key and value in empty array
    console.log(this.data)
    return this.data
  }
get(key){
  let address=this._hash(key)
  let currentbucket= this.data[address] // creating current bucket
  if(currentbucket){
    for(let i=0;i<currentbucket.length;i++){
      if(currentbucket[i][0]===key){
        console.log(currentbucket[i][1])
        return currentbucket[i][1]
      }
    }
    console.log(currentbucket)
  }
  return null
}
}
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apple',10)
console.log(myHashTable._hash("grapes"))


