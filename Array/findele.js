var lastele=(arr,n,i,key)=>{
    if(i===n) return -1
    var val=lastele(arr,n,i+1,key)
    if(val!==-1) return val
    if(arr[i]===key) return i
    return -1
}
console.log(lastele([1,2,4,3,5],6,0,2))