var valid=(arr,i,n)=>{
    if(n===1) return true;
    return (arr[i]<arr[i+1] && valid(arr,i+1,n-1))
}
console.log(valid([1,2,5,4,5],0,5))