var isHappy = function(n) {
    let set=new Set();
    while(!set.has(n)){
        set.add(n);
        let sum=0;
        let arr=n.toString();
        for(let i=0;i<arr.length;i++){
            sum+=Math.pow(+arr[i],2);
        }
        if(sum===1) return true;
        n=sum;
    }
    return false;
};
