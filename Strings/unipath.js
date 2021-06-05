var unipath=(s,target)=>{
    if(s===target) return 1;
    if(s>target) return 0;
    var count=0;
    for(var i=1;i<=6;i++){
        count+=unipath(s+i,target)
    }
    return count;
}
console.log(unipath(0,3))