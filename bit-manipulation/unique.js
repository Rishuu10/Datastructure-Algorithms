var uni=(arr)=>{
    var sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum^arr[i];
    }
    return sum;
}
console.log(uni([1,2,3,4,1,2,3,4]))