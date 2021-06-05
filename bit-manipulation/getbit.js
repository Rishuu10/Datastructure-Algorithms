var getbit=(n,pos)=>{
    return ((n & 1<<pos)!==0) ? "1": "0"
}
var setbit=(n,pos)=>{
    return ((n | 1<<pos))
}
var clearbit=(n,pos)=>{
    var mask= ~(1<<pos);
    return mask & n
}
var updatebit=(n,pos,val)=>{
    var mask=~(1<<pos);
    n=mask & n;
    return ((n | val<<pos))
}
var countone=(n)=>{
    var count=0;
    while(n){
        n=n & n-1;
        count++
    }
    return count;
}
console.log(countone(4))