var sorted=(arr,n)=>{
    if(n===arr.length) return true 
    if(arr[n]>arr[n+1]) return false
    return sorted(arr,n+1) 
}
console.log(sorted([1,2,3,3,4,4],0))