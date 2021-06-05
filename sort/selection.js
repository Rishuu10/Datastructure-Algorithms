var ss=(arr)=>{
    let n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            var small=arr[i]
           if(arr[j]<small)
           {
            small=arr[j]
           var temp=arr[i];
           arr[i]=arr[j];
           arr[j]=temp;
           }
        }
    }
    return arr
}
console.log(ss([3,2,5,1,4]))