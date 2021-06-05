// // less time complexity
var twoSum = function(nums, target) {
  let length=nums.length;
    let i=0,j=nums.length-1;
  if(length=0){
      return 'LOWDI'
  }
  else{
    while(i<j){
        if(nums[i]+nums[j]<target){
            i++;
        }
        else if(nums[i]+nums[j]==target){
            var rishav=1
            return [i,j];
        }
        else{
            j--
        }
    }
    if(rishav!=1){
        return "lode teri maa ki chutt"
    }
}
};

// // Brute force approach
var twoSum1= function(arr,sum){
    let i=0;
    let j=0;
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==sum){
                return [i,j]
            }
        }
    }
}
console.log(twoSum1([3,2,4], 7))

// reduced time complexity approach optimal solution
var twoSum2= function(arr,sum){
    let i=0;
    const temp={}; // declaring empty object
    for(i=0;i<arr.length;i++){
        if(Object.keys(temp).find(ele=>ele==arr[i])){ // fetching the key values and property of corresponding key from object
            return [i,temp[arr[i]]]
        }
        let value = sum-arr[i]; // finding the complement of each of element to equal sum
        temp[value]= i // adding the index value and the property of corresponding index into object
    }
}
console.log(twoSum2([3,2,4],6))

