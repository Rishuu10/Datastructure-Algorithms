var substring=(str,ans)=>{
    if(str.length===0){
        console.log(ans)
        return
    } 
    var ch=str[0];
    var temp=str.substr(1)
    substring(temp,ans);
    substring(temp,ans+ch);
}
substring("ABC","")