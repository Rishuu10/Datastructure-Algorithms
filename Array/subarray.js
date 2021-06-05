var checkSubarraySum = function(arr, k) {
    for(let i=0;i<arr.length;i++){
        let sum=arr[i]
        for(let j=i+1;j<arr.length;j++){
            sum=sum+arr[j];
            if(sum===0 && k==0){
                return true;
            }
            if(sum%k===0){
                return true;
            }
        }
    }
    return false;
}
console.log(checkSubarraySum([-2,1,-3,4,-1,2,1,-5,4],6))