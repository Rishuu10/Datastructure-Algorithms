var occur=(arr,val,n)=>{
    if(n===arr.length) return-1; 
    if(arr[n]===val) return n;
    return occur(arr,val,n+1); 
}
console.log(occur([1,3,4,2,5],2,0))

// last baaki hai