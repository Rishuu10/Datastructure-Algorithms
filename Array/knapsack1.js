var kanpsack=(value,wt,n,Wt)=>{
    if(n===0 || Wt===0) return 0;
    if(wt[n-1]>Wt) return kanpsack(value,wt,n-1,Wt);
    return Math.max(kanpsack(value,wt,n-1,Wt-wt[n-1])+value[n-1],kanpsack(value,wt,n-1,Wt))
}
console.log(kanpsack([100,50,150],[10,20,30],3,50))