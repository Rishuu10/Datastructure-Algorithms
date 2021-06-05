var num=(n)=>{
    if(n===0) return 0;
    console.log(n)
    num(n-1);
}
num(5)