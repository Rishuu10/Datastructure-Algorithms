var subset=(str,ans)=>{
    if(str.length===0){
        console.log(ans)
        return 
    }
    var ch=str[0];
    var ros=str.substr(1);
    subset(ros,ans);
    subset(ros,ans+ch)
}
console.log(subset("anc",""))