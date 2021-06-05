const Trappingwater=(arr)=>{
    let leftmax=[];
    let rightmax=[];
    let n=arr.length;
    leftmax[0]=arr[0]
    rightmax[n-1]=arr[n-1]
    let sum=0
    for(let i=1;i<arr.length;i++){
        if(arr[i]>leftmax[i-1]){
            leftmax.push(arr[i])
        }
        else{
            leftmax.push(leftmax[i-1])
        }
    }
    for(let j=n-2;j>=0;j--){
        if(arr[j]>rightmax[j+1]){
            rightmax[j]=arr[j]
        }
        else{
            rightmax[j]=rightmax[j+1]
        }
    }
    console.log(leftmax)
    console.log(rightmax)
    for(let k=0;k<arr.length;k++){
        sum+=Math.min(leftmax[k],rightmax[k])-arr[k]
    }
    return sum
}

console.log(Trappingwater([0,1,0,2,1,0,3,1,0,1,2]))