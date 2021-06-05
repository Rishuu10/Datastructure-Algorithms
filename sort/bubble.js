var arr=[2,4,1,5,3]
var bs=(arr)=>{
    let n=arr.length
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr
}
console.log(bs(arr))