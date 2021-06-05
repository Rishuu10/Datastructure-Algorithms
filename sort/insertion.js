var arr=[2,5,1,4,3];
// var is=(arr)=>{
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<i;j++){
//             if(arr[j+1]<arr[j]){
//                 var temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     return arr
// }
var is=(arr)=>{
    for(let i=1;i<arr.length;i++){
        var j=i-1;
        var temp=arr[i];
        while(j>=0 && arr[j]>temp){
            arr[j+1]=arr[j];
            j--
        }
        arr[j+1]=temp
    }
    return arr
}
console.log(is([2,4,1,3,5]))