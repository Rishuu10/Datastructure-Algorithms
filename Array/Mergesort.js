// mergeSortedArrays([0,3,4,31], [3,4,6,30]);
// big(o) is n^2 hence not accepted
// const mergesort= (arr1,arr2)=>{
//  length1=arr1.length;
//  length2=arr2.length;
//  let temp=0;
//  let mergedarray=[];

//     for(let i=0;i<length1;i++){
//         mergedarray.push(arr1[i]);
//     }
//     for(let j=0;j<length2;j++){
//         mergedarray.push(arr2[j]);
//     }
//     for(let i=0;i<mergedarray.length;i++){
//         for(let j=mergedarray.length-1;j>=0;j--){
//             if(mergedarray[i]>=mergedarray[j]){
//                 temp=mergedarray[i];
//                 mergedarray[i]=mergedarray[j];
//                 mergedarray[j]=temp;
//             }
//         }
//     }
//     return mergedarray
// }

// big(o) is of n hence used code
const mergesort=(arr1,arr2)=>{
    length1=arr1.length;
    length2=arr2.length;
    let mergearray=[];
    let i=0,j=0;

    while(i<length1 && j<length2){
       if(arr1[i]==arr2[j]){
        mergearray.push(arr1[i]);
        i++;
        j++
       }
       else{
        if(arr1[i]<arr2[j]){
            mergearray.push(arr1[i]);
            i++;
            
        }
        else{
            mergearray.push(arr2[j]);
            j++;
        }
       }
        
    }
    while(i<length1){
        mergearray.push(arr1[i]);
        i++
    }
    while(j<length2){
        mergearray.push(arr2[j]);
        j++
    }
return mergearray
}

console.log(mergesort([0,3,4,31], [3,4,6,30]))