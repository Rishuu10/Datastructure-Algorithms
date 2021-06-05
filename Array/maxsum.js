var maxSubArray = function(nums) {
    let sum=nums[0];
    let arr=[];
    for(let i=1;i<nums.length;i++){
        sum=Math.max(nums[i],sum+nums[i]);
        console.log(sum);
        arr.push(sum) 
    };
};
console.log(maxSubArray([2,1,-3,4,-1,2,1,-5,4]))